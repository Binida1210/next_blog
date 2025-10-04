# 📝 Next.js Blog ApplicationThis is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

A modern, feature-rich blog platform built with Next.js 15, MongoDB, and Clerk authentication. Features a beautiful neobrutalism design with optimized reading experience.## Getting Started

## ✨ FeaturesFirst, run the development server:

### Core Features```bash

- ✅ **CRUD Operations** - Create, Read, Update, Delete blog postsnpm run dev

- ✅ **User Authentication** - Secure auth with Clerk# or

- ✅ **Admin Dashboard** - Manage blogs, view subscriptionsyarn dev

- ✅ **Draft & Publish** - Save drafts before publishing# or

- ✅ **Category Filtering** - Filter blogs by categorypnpm dev

- ✅ **Image Upload** - Upload and manage blog images# or

- ✅ **Email Subscriptions** - Newsletter signupbun dev

````

### Blog Detail Page Features

- 📊 **Reading Progress Bar** - Visual reading progress indicatorOpen [http://localhost:3000](http://localhost:3000) with your browser to see the result.

- 📚 **Table of Contents** - Auto-generated from headings with smooth scroll

- ⏱️ **Reading Time** - Automatic reading time calculationYou can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

- 🎨 **Professional Typography** - Optimized content styling

- 🔗 **Share Buttons** - Twitter, Facebook, Email, Copy LinkThis project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

- 📱 **Responsive Design** - Works perfectly on all devices

## Learn More

## 🛠️ Tech Stack

To learn more about Next.js, take a look at the following resources:

- **Framework:** Next.js 15 (App Router)

- **Database:** MongoDB with Mongoose- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.

- **Authentication:** Clerk- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

- **Styling:** Tailwind CSS

- **Image Optimization:** Next.js ImageYou can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

- **UI Design:** Neobrutalism style

## Deploy on Vercel

## 🚀 Getting Started

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

### Prerequisites

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

- Node.js 18+
- MongoDB database (local or Atlas)
- Clerk account for authentication

### Installation

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd next_blog
````

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

Create a `.env.local` file:

```env
MONGODB_URI=your_mongodb_connection_string
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
```

4. **Run the development server**

```bash
npm run dev
```

5. **Open browser:** http://localhost:3000

## 📁 Project Structure

```
next_blog/
├── app/
│   ├── admin/              # Admin dashboard
│   ├── api/                # API routes
│   ├── blog/[id]/         # Blog detail page
│   ├── globals.css        # Global styles
│   └── page.jsx           # Home page
├── components/
│   ├── BlogList.jsx       # Blog listing
│   ├── TableOfContents.jsx
│   ├── ReadingProgressBar.jsx
│   └── ShareButtons.jsx
├── lib/
│   ├── config/db.js       # MongoDB connection
│   └── models/blog.model.js
├── ui/
│   └── BlogItem.jsx       # Blog card (fixed height)
└── public/uploads/        # Uploaded images
```

## 🎨 Key Features

### Fixed-Height Blog Cards

- **Card Height:** 500px (consistent)
- **Image Height:** 200px (object-cover)
- **Title:** 2 lines max
- **Description:** 3 lines max
- **Button:** Always at bottom

### Responsive Grid

- Mobile: 1 column
- Tablet: 2 columns
- Desktop: 3 columns

## 🔧 Scripts

```bash
npm run dev      # Development server
npm run build    # Build for production
npm start        # Start production
npm run lint     # Run ESLint
```

## 🎯 Usage

**Create Blog:** `/admin/addProduct`
**Manage Blogs:** `/admin/blogList`
**Subscriptions:** `/admin/subscriptions`

## 🎨 Customization

### Card Height

Edit `ui/BlogItem.jsx`:

```jsx
h-[500px]  // Card height
h-[200px]  // Image height
```

### Colors

Edit `app/globals.css`:

- Primary: `#4aa3d1` / `#65BBDF`
- Secondary: `#DBF3FF`

## 📄 License

MIT License

---

**Built with ❤️ using Next.js 15**
