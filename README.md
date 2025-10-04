# Blogo# 📝 Next.js Blog ApplicationThis is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

A modern, full-featured blogging platform built with Next.js 15, featuring a clean neo-brutalism design and powerful content management capabilities.A modern, feature-rich blog platform built with Next.js 15, MongoDB, and Clerk authentication. Features a beautiful neobrutalism design with optimized reading experience.## Getting Started

## Overview## ✨ FeaturesFirst, run the development server:

Blogo is a professional blogging platform that combines modern web technologies with an intuitive user interface. Built with Next.js 15 and MongoDB, it provides a seamless experience for both content creators and readers.### Core Features```bash

**Live Demo:** [https://binida2k1.vercel.app](https://binida2k1.vercel.app)- ✅ **CRUD Operations** - Create, Read, Update, Delete blog postsnpm run dev

## Features- ✅ **User Authentication** - Secure auth with Clerk# or

### Content Management- ✅ **Admin Dashboard** - Manage blogs, view subscriptionsyarn dev

- Create, edit, and delete blog posts with rich text editor

- Draft and publish workflow- ✅ **Draft & Publish** - Save drafts before publishing# or

- Category-based content organization

- Image upload and management with Cloudinary- ✅ **Category Filtering** - Filter blogs by categorypnpm dev

- SEO-optimized metadata and Open Graph support

- ✅ **Image Upload** - Upload and manage blog images# or

### Reading Experience

- Responsive design for all devices- ✅ **Email Subscriptions** - Newsletter signupbun dev

- Reading progress indicator

- Auto-generated table of contents````

- Estimated reading time

- Social sharing (Twitter, Facebook, Email)### Blog Detail Page Features

- Search and filter functionality

- 📊 **Reading Progress Bar** - Visual reading progress indicatorOpen [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Authentication & Security

- Secure authentication with Clerk- 📚 **Table of Contents** - Auto-generated from headings with smooth scroll

- Role-based access control

- Protected admin routes- ⏱️ **Reading Time** - Automatic reading time calculationYou can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

- User profile management

- 🎨 **Professional Typography** - Optimized content styling

### Admin Dashboard

- Blog post management- 🔗 **Share Buttons** - Twitter, Facebook, Email, Copy LinkThis project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

- Email subscription tracking

- User statistics and analytics- 📱 **Responsive Design** - Works perfectly on all devices

- Intuitive navigation with sidebar

## Learn More

## Tech Stack

## 🛠️ Tech Stack

**Frontend**

- Next.js 15 (App Router)To learn more about Next.js, take a look at the following resources:

- React 18

- Tailwind CSS- **Framework:** Next.js 15 (App Router)

- Lucide React (Icons)

- Tiptap (Rich text editor)- **Database:** MongoDB with Mongoose- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.

**Backend**- **Authentication:** Clerk- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

- MongoDB with Mongoose

- Next.js API Routes- **Styling:** Tailwind CSS

- Cloudinary (Image storage)

- **Image Optimization:** Next.js ImageYou can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

**Authentication**

- Clerk- **UI Design:** Neobrutalism style

**Deployment**## Deploy on Vercel

- Vercel

## 🚀 Getting Started

## Getting Started

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

### Prerequisites

- Node.js 18 or higher### Prerequisites

- MongoDB database (Atlas recommended)

- Clerk accountCheck out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

- Cloudinary account (optional, for image hosting)

- Node.js 18+

### Installation- MongoDB database (local or Atlas)

- Clerk account for authentication

1. Clone the repository

```````bash### Installation

git clone https://github.com/Binida1210/next_blog.git

cd next_blog1. **Clone the repository**

``````bash

git clone <your-repo-url>

2. Install dependenciescd next_blog

```bash````

npm install

```2. **Install dependencies**



3. Create environment file```bash

npm install

Create a `.env.local` file in the root directory:```



```env3. **Set up environment variables**

# MongoDB

MONGODB_URI=your_mongodb_connection_stringCreate a `.env.local` file:



# Clerk Authentication```env

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_keyMONGODB_URI=your_mongodb_connection_string

CLERK_SECRET_KEY=your_clerk_secret_keyNEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key

CLERK_SECRET_KEY=your_clerk_secret_key

# Cloudinary (Optional)```

CLOUDINARY_CLOUD_NAME=your_cloud_name

CLOUDINARY_API_KEY=your_api_key4. **Run the development server**

CLOUDINARY_API_SECRET=your_api_secret

``````bash

npm run dev

4. Run the development server```

```bash

npm run dev5. **Open browser:** http://localhost:3000

```````

## 📁 Project Structure

5. Open [http://localhost:3000](http://localhost:3000)

`````

## Project Structurenext_blog/

├── app/

```│   ├── admin/              # Admin dashboard

next_blog/│   ├── api/                # API routes

├── app/│   ├── blog/[id]/         # Blog detail page

│   ├── admin/              # Admin dashboard pages│   ├── globals.css        # Global styles

│   │   ├── addProduct/     # Create new post│   └── page.jsx           # Home page

│   │   ├── blogList/       # Manage posts├── components/

│   │   └── editBlog/       # Edit existing post│   ├── BlogList.jsx       # Blog listing

│   ├── api/                # API routes│   ├── TableOfContents.jsx

│   │   ├── blog/           # Blog CRUD operations│   ├── ReadingProgressBar.jsx

│   │   └── email/          # Email subscriptions│   └── ShareButtons.jsx

│   ├── blog/               # Blog pages├── lib/

│   │   └── [id]/           # Dynamic blog post page│   ├── config/db.js       # MongoDB connection

│   ├── about/              # About page│   └── models/blog.model.js

│   └── layout.jsx          # Root layout├── ui/

├── components/│   └── BlogItem.jsx       # Blog card (fixed height)

│   ├── BlogList.jsx        # Blog listing component└── public/uploads/        # Uploaded images

│   ├── Header.jsx          # Site header```

│   ├── Footer.jsx          # Site footer

│   └── ScrollToHash.jsx    # Smooth scroll handler## 🎨 Key Features

├── lib/

│   ├── config/### Fixed-Height Blog Cards

│   │   ├── db.js           # MongoDB connection

│   │   └── cloudinary.js   # Cloudinary config- **Card Height:** 500px (consistent)

│   └── models/- **Image Height:** 200px (object-cover)

│       └── blog.model.js   # Blog schema- **Title:** 2 lines max

├── ui/- **Description:** 3 lines max

│   ├── BlogItem.jsx        # Blog card component- **Button:** Always at bottom

│   └── AdminSideBar.jsx    # Admin navigation

└── public/### Responsive Grid

    └── uploads/            # Local image storage

```- Mobile: 1 column

- Tablet: 2 columns

## Usage- Desktop: 3 columns



### Creating a Blog Post## 🔧 Scripts

1. Sign in with your Clerk account

2. Navigate to `/admin/addProduct````bash

3. Fill in the title, description, categorynpm run dev      # Development server

4. Upload a cover imagenpm run build    # Build for production

5. Write your content using the rich text editornpm start        # Start production

6. Save as draft or publish immediatelynpm run lint     # Run ESLint

`````

### Managing Posts

- View all posts at `/admin/blogList`## 🎯 Usage

- Edit posts by clicking the edit button

- Delete posts with confirmation**Create Blog:** `/admin/addProduct`

- Toggle between draft and published status**Manage Blogs:** `/admin/blogList`

**Subscriptions:** `/admin/subscriptions`

### Email Subscriptions

- Readers can subscribe via the footer form## 🎨 Customization

- View subscribers at `/admin/subscriptions`

### Card Height

## Configuration

Edit `ui/BlogItem.jsx`:

### Customizing Colors

````jsx

Edit `tailwind.config.js`:h-[500px]  // Card height

h-[200px]  // Image height

```javascript```

theme: {

  extend: {### Colors

    colors: {

      primary: {Edit `app/globals.css`:

        DEFAULT: '#65BBDF',

        light: '#DBF3FF',- Primary: `#4aa3d1` / `#65BBDF`

        dark: '#4A9FC9',- Secondary: `#DBF3FF`

      },

    },## 📄 License

  },

}MIT License

````

---

### Blog Card Layout

**Built with ❤️ using Next.js 15**

Edit `ui/BlogItem.jsx` to adjust card dimensions:

```jsx
<div className="h-[500px]">  {/* Card height */}
  <div className="h-[200px]">  {/* Image height */}
```

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel dashboard
3. Add environment variables
4. Deploy

### Environment Variables on Vercel

Add all variables from `.env.local` to your Vercel project settings.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Contact

- **Author:** Binida
- **GitHub:** [@Binida1210](https://github.com/Binida1210)
- **Live Site:** [https://binida2k1.vercel.app](https://binida2k1.vercel.app)

---

Built with Next.js 15
