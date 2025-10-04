import { NextResponse } from "next/server";
import BlogModel from "../../../../lib/models/blog.model.js";
import connectDB from "../../../../lib/config/db.js";
import { auth } from "@clerk/nextjs/server";
import { canEditBlog, canDeleteBlog } from "../../../../lib/roles.js";
import fs from "fs";
import path from "path";

// GET /api/blog/[id] - Get a blog post by ID
export async function GET(request, { params }) {
  const { id } = params;
  console.log("Fetching blog post with ID:", id);

  try {
    await connectDB();
    const blogPost = await BlogModel.findById(id);

    if (!blogPost) {
      return NextResponse.json(
        { message: "Blog post not found" },
        { status: 404 }
      );
    }

    // Increment view count
    blogPost.views = (blogPost.views || 0) + 1;
    await blogPost.save();

    return NextResponse.json(blogPost, { status: 200 });
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return NextResponse.json(
      { message: "Internal server error", error: error.message },
      { status: 500 }
    );
  }
}

// PUT /api/blog/[id] - Update a blog post
export async function PUT(request, { params }) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json(
        { message: "Unauthorized - Please sign in" },
        { status: 401 }
      );
    }

    const { id } = params;
    await connectDB();

    // Get existing blog post
    const existingBlog = await BlogModel.findById(id);
    if (!existingBlog) {
      return NextResponse.json(
        { message: "Blog post not found" },
        { status: 404 }
      );
    }

    // Check if user has permission to edit
    const user = { id: userId };
    if (!canEditBlog(user, existingBlog.authorId)) {
      return NextResponse.json(
        { message: "Forbidden - You can only edit your own posts" },
        { status: 403 }
      );
    }

    const formData = await request.formData();
    const timestamp = Date.now();

    const updateData = {
      title: formData.get("title") || existingBlog.title,
      description: formData.get("description") || existingBlog.description,
      category: formData.get("category") || existingBlog.category,
      status: formData.get("status") || existingBlog.status,
    };

    // Handle image update if provided
    const imageFile = formData.get("image");
    if (imageFile && imageFile.size > 0) {
      const imageByteData = await imageFile.arrayBuffer();
      const imageBuffer = Buffer.from(imageByteData);
      const imageExt = imageFile.name.split(".").pop();
      const imageName = `image_${
        imageFile.name.split(".")[0]
      }_${timestamp}.${imageExt}`;
      const imagePath = path.join(
        process.cwd(),
        "public",
        "uploads",
        imageName
      );
      await fs.promises.writeFile(imagePath, imageBuffer);
      updateData.image = `/uploads/${imageName}`;

      // Delete old image
      if (existingBlog.image) {
        const oldImagePath = path.join(
          process.cwd(),
          "public",
          existingBlog.image
        );
        if (fs.existsSync(oldImagePath)) {
          await fs.promises.unlink(oldImagePath);
        }
      }
    }

    // Handle author image update if provided
    const authorImageFile = formData.get("author_img");
    if (authorImageFile && authorImageFile.size > 0) {
      const authorImageByteData = await authorImageFile.arrayBuffer();
      const authorImageBuffer = Buffer.from(authorImageByteData);
      const authorImageExt = authorImageFile.name.split(".").pop();
      const authorImageName = `author_image_${
        authorImageFile.name.split(".")[0]
      }_${timestamp}.${authorImageExt}`;
      const authorImagePath = path.join(
        process.cwd(),
        "public",
        "uploads",
        authorImageName
      );
      await fs.promises.writeFile(authorImagePath, authorImageBuffer);
      updateData.author_img = `/uploads/${authorImageName}`;

      // Delete old author image
      if (existingBlog.author_img) {
        const oldAuthorImagePath = path.join(
          process.cwd(),
          "public",
          existingBlog.author_img
        );
        if (fs.existsSync(oldAuthorImagePath)) {
          await fs.promises.unlink(oldAuthorImagePath);
        }
      }
    }

    const updatedBlog = await BlogModel.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    return NextResponse.json(
      { message: "Blog post updated successfully", blog: updatedBlog },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating blog post:", error);
    return NextResponse.json(
      { message: "Internal server error", error: error.message },
      { status: 500 }
    );
  }
}

// DELETE /api/blog/[id] - Delete a blog post
export async function DELETE(request, { params }) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json(
        { message: "Unauthorized - Please sign in" },
        { status: 401 }
      );
    }

    const { id } = params;
    await connectDB();

    // Get existing blog post
    const existingBlog = await BlogModel.findById(id);
    if (!existingBlog) {
      return NextResponse.json(
        { message: "Blog post not found" },
        { status: 404 }
      );
    }

    // Check if user has permission to delete
    const user = { id: userId };
    if (!canDeleteBlog(user, existingBlog.authorId)) {
      return NextResponse.json(
        { message: "Forbidden - You can only delete your own posts" },
        { status: 403 }
      );
    }

    // Delete images
    if (existingBlog.image) {
      const imagePath = path.join(process.cwd(), "public", existingBlog.image);
      if (fs.existsSync(imagePath)) {
        await fs.promises.unlink(imagePath);
      }
    }
    if (existingBlog.author_img) {
      const authorImagePath = path.join(
        process.cwd(),
        "public",
        existingBlog.author_img
      );
      if (fs.existsSync(authorImagePath)) {
        await fs.promises.unlink(authorImagePath);
      }
    }

    await BlogModel.findByIdAndDelete(id);

    return NextResponse.json(
      { message: "Blog post deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting blog post:", error);
    return NextResponse.json(
      { message: "Internal server error", error: error.message },
      { status: 500 }
    );
  }
}
