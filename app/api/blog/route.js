import { NextResponse } from "next/server";
import BlogModel from "../../../lib/models/blog.model.js";
import connectDB from "../../../lib/config/db.js";
import { auth } from "@clerk/nextjs/server";
import { getUserRole, ROLES } from "../../../lib/roles.js";
import fs from "fs";
import path from "path";

// GET /api/blog - Get all blog posts (optionally filter by author)
export async function GET(request) {
  console.log("Fetching blog posts");

  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const authorId = searchParams.get("authorId");
    const status = searchParams.get("status");

    let query = {};

    // Filter by author if provided
    if (authorId) {
      query.authorId = authorId;
    }

    // Filter by status if provided
    if (status) {
      query.status = status;
    } else {
      // Default: only show published posts to public
      const { userId } = await auth();
      if (!userId) {
        query.status = "published";
      }
    }

    const blogPosts = await BlogModel.find(query).sort({ createdAt: -1 });
    return NextResponse.json(blogPosts, { status: 200 });
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return NextResponse.json(
      { message: "Internal server error", error: error.message },
      { status: 500 }
    );
  }
}

// POST /api/blog - Create a new blog post
export async function POST(request) {
  try {
    // Check authentication
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json(
        { message: "Unauthorized - Please sign in" },
        { status: 401 }
      );
    }

    const formData = await request.formData();
    const timestamp = Date.now();

    // Lấy thông tin bài viết từ formData
    const title = formData.get("title");
    const description = formData.get("description");
    const category = formData.get("category");
    const author = formData.get("author");
    const status = formData.get("status") || "published";

    // Xử lý file ảnh blog
    const imageFile = formData.get("image");
    if (!imageFile) {
      return NextResponse.json(
        { message: "Blog image is required" },
        { status: 400 }
      );
    }

    console.log("Received image file:", imageFile);
    const imageByteData = await imageFile.arrayBuffer();
    const imageBuffer = Buffer.from(imageByteData);

    const imageExt = imageFile.name.split(".").pop();
    const imageName = `image_${
      imageFile.name.split(".")[0]
    }_${timestamp}.${imageExt}`;
    const imagePath = path.join(process.cwd(), "public", "uploads", imageName);

    await fs.promises.writeFile(imagePath, imageBuffer);

    // Xử lý ảnh tác giả - có thể là file hoặc URL
    let authorImagePath = "";
    const authorImageFile = formData.get("author_img");
    const authorImageUrl = formData.get("author_img_url");

    if (authorImageFile && authorImageFile.size > 0) {
      // Nếu là file upload
      const authorImageByteData = await authorImageFile.arrayBuffer();
      const authorImageBuffer = Buffer.from(authorImageByteData);

      const authorImageExt = authorImageFile.name.split(".").pop();
      const authorImageName = `author_image_${
        authorImageFile.name.split(".")[0]
      }_${timestamp}.${authorImageExt}`;
      const authorImageFullPath = path.join(
        process.cwd(),
        "public",
        "uploads",
        authorImageName
      );

      await fs.promises.writeFile(authorImageFullPath, authorImageBuffer);
      authorImagePath = `/uploads/${authorImageName}`;
    } else if (authorImageUrl) {
      // Nếu là URL từ Clerk
      authorImagePath = authorImageUrl;
    } else {
      // Default avatar
      authorImagePath = "/profile_icon.png";
    }

    await connectDB();

    const newBlogPost = new BlogModel({
      title,
      description,
      category,
      author,
      authorId: userId, // Save Clerk User ID
      status,
      image: `/uploads/${imageName}`,
      author_img: authorImagePath, // Có thể là local path hoặc Clerk URL
    });

    await newBlogPost.save();

    return NextResponse.json(
      { message: "Blog post created successfully", blog: newBlogPost },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating blog post:", error);
    return NextResponse.json(
      { message: "Internal server error", error: error.message },
      { status: 500 }
    );
  }
}
