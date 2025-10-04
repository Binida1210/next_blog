# 📊 Blog Display Logic - Documentation

## Overview

This document explains how blog posts are displayed differently across routes with proper headers and limits.

## Routes Comparison

### 1. Home Page (`/`)

**Purpose**: Show latest blog posts overview  
**Header**: "Latest Blog"  
**Description**: "Search for articles and insights by title."  
**Limit**: **10 posts** (most recent)  
**Features**:

- ✅ Search by title
- ✅ Category filtering
- ✅ Shows only 10 newest posts
- ✅ Gradient background section

```jsx
<BlogList searchTerm={searchTerm} limit={10} />
```

---

### 2. Blog Page (`/blog`)

**Purpose**: Show all published blog posts  
**Header**: "All Blog Posts"  
**Description**: "Explore our collection of articles about technology, anime, gaming, and more."  
**Limit**: **No limit** (shows all)  
**Features**:

- ✅ Search by title
- ✅ Category filtering
- ✅ Shows ALL published posts
- ✅ Gradient background section with black border

```jsx
<BlogList searchTerm={searchTerm} />
```

---

## Implementation Details

### BlogList Component Props

#### `searchTerm` (string)

- Search query from SearchBar
- Filters blog titles (case-insensitive)
- Default: `""`

#### `limit` (number | null)

- Limits number of displayed posts
- Only applies when:
  - No search query active
  - "All" category selected
- Default: `null` (no limit)

### Logic Flow

```javascript
// 1. Fetch all published blogs from API
const blogs = await fetch("/api/blog?status=published");

// 2. Filter by category and search term
let filteredBlogs = blogs.filter((item) => {
  const matchesCategory =
    selectedCategory === "All" || item.category === selectedCategory;
  const matchesSearch =
    !searchTerm || item.title.toLowerCase().includes(searchTerm.toLowerCase());
  return matchesCategory && matchesSearch;
});

// 3. Apply limit (only for home page with no filters)
if (limit && !searchTerm && selectedCategory === "All") {
  filteredBlogs = filteredBlogs.slice(0, limit);
}
```

## Visual Design

### Home Page Header

```
┌─────────────────────────────────────┐
│                                     │
│         Latest Blog                 │  ← Large heading
│                                     │
│  Search for articles and            │  ← Subtitle
│  insights by title.                 │
│                                     │
│  [Search Bar Component]             │  ← Centered search
│                                     │
└─────────────────────────────────────┘
```

### Blog Page Header

```
┌─────────────────────────────────────┐
│                                     │
│       All Blog Posts                │  ← Large heading
│                                     │
│  Explore our collection of          │  ← Subtitle
│  articles about technology,         │
│  anime, gaming, and more.           │
│                                     │
│  [Search Bar Component]             │  ← Centered search
│                                     │
└─────────────────────────────────────┘
   ═══════════════════════════════════   ← Black border (4px)
```

## Styling Details

### Home Page Section

```jsx
<section className="py-12 bg-gradient-to-b from-white to-gray-50">
```

- Padding: `py-12` (3rem top/bottom)
- Background: Gradient white → gray-50

### Blog Page Section

```jsx
<section className="py-12 bg-gradient-to-b from-white to-gray-50 border-b-4 border-black">
```

- Same as home + **4px black bottom border**
- Creates clear visual separation

## Data Flow Diagram

```
┌─────────────┐
│   User      │
└──────┬──────┘
       │
       ├─────────> Home (/)
       │           ├─> Fetch API: /api/blog?status=published
       │           ├─> Show: Latest Blog header
       │           ├─> Filter: searchTerm + category
       │           └─> Limit: 10 posts
       │
       └─────────> Blog (/blog)
                   ├─> Fetch API: /api/blog?status=published
                   ├─> Show: All Blog Posts header
                   ├─> Filter: searchTerm + category
                   └─> Limit: None (all posts)
```

## User Experience

### Scenario 1: User visits home page

1. Sees "Latest Blog" header
2. Sees 10 newest blog posts
3. Can search/filter within those 10
4. Can click "View All" (if implemented) to go to `/blog`

### Scenario 2: User visits /blog page

1. Sees "All Blog Posts" header
2. Sees ALL published blog posts
3. Can search/filter across entire collection
4. Better for exploring full catalog

### Scenario 3: User searches on home

- If search term is entered → shows matching results (ignores 10-post limit)
- If category is selected → shows matching results (ignores 10-post limit)
- Limit only applies when: `searchTerm === ""` AND `category === "All"`

## API Endpoints

### GET /api/blog?status=published

**Returns**: Array of published blog objects

```json
[
  {
    "_id": "...",
    "title": "Blog Title",
    "description": "...",
    "category": "technology",
    "author": "John Doe",
    "image": "https://cloudinary.com/...",
    "status": "published",
    "createdAt": "2025-10-04T..."
  }
]
```

## Performance Considerations

### Why limit on home page?

1. **Faster initial load** - Less DOM elements to render
2. **Better UX** - Quick overview without overwhelming
3. **Encourages exploration** - Users click through to `/blog` for more
4. **SEO friendly** - Still crawlable, just paginated

### Caching Strategy

- Blogs are fetched on client-side (useEffect)
- Can be optimized with:
  - React Query / SWR for caching
  - ISR (Incremental Static Regeneration)
  - Server Components (Next.js 13+)

## Future Enhancements

### Pagination

```jsx
// Add to BlogList component
<Pagination
  currentPage={page}
  totalPages={Math.ceil(filteredBlogs.length / pageSize)}
  onPageChange={setPage}
/>
```

### Load More Button

```jsx
// Alternative to pagination
<button onClick={() => setLimit(limit + 10)}>Load More Posts</button>
```

### Featured Posts Section

```jsx
// Show pinned/featured posts at top
const featuredBlogs = blogs.filter((blog) => blog.featured);
```

## Testing Checklist

- [ ] Home page shows exactly 10 posts (when no filters)
- [ ] `/blog` shows all posts
- [ ] Search works on both pages
- [ ] Category filter works on both pages
- [ ] Headers are different on each page
- [ ] Styling matches design (gradient, borders)
- [ ] Responsive on mobile/tablet/desktop
- [ ] Loading states display correctly
- [ ] Empty states display correctly

## File Locations

```
app/
  page.jsx          → Home page (limit: 10)
  blog/
    page.jsx        → Blog page (no limit)

components/
  BlogList.jsx      → Main blog list component
  SearchBar.jsx     → Search input component
```

---

**Created**: October 4, 2025  
**Status**: Production Ready ✅  
**Routes**: `/` (home), `/blog` (all posts)
