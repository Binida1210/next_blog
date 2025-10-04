# 📄 About Page - Documentation

## Overview

The About page (`/about`) is a comprehensive landing page that introduces the blog, team, mission, and values to visitors.

## Features

### 1. **Hero Section**

- Large heading with gradient text effect
- Logo display
- Engaging subtitle describing the blog's purpose
- Two CTA buttons:
  - "Read Our Blog" → Links to `/blog`
  - "Subscribe Now" → Links to home page subscribe section
- Decorative blur elements for visual appeal

### 2. **Statistics Section**

- 4 stat cards with icons:
  - Blog Posts: 50+
  - Monthly Readers: 10K+
  - Categories: 5+
  - Years Active: 1+
- Interactive hover effects
- Neo-brutalism design with shadows and borders

### 3. **Mission Section**

- Explains the blog's purpose and goals
- Highlighted in a prominent card design
- Describes commitment to quality content

### 4. **Core Values Section**

- 4 value cards with emojis:
  - 📚 Quality Content
  - 🤝 Community First
  - 🚀 Continuous Learning
  - 🎨 Creative Expression
- Each card has a title and detailed description

### 5. **Team Section**

- Team member profiles with:
  - Profile photo
  - Name and role
  - Bio description
  - Social media links (Email, GitHub, Twitter, LinkedIn)
- Easily extensible by adding more team members to the `team` array

### 6. **CTA Section**

- Gradient background (blue to purple)
- Final call-to-action to subscribe
- Links to newsletter subscription form

## Design Features

### Neo-Brutalism Style

- **Bold borders**: 4px black borders on all cards
- **Shadow effects**: `-6px 6px 0 #DBF3FF` creates offset shadows
- **Hover animations**: Cards translate slightly on hover
- **High contrast**: Black borders on white backgrounds

### Responsive Design

- Mobile-first approach
- Grid layouts adapt from 1 column → 2 columns → 3 columns
- Text sizes scale: `text-4xl sm:text-5xl lg:text-6xl`
- Padding adjusts: `px-4 sm:px-6 lg:px-8`

### Color Palette

- **Primary Blue**: `#65BBDF`
- **Light Blue**: `#DBF3FF`
- **Black**: Borders and text
- **Gradients**: Blue to purple (`from-blue-600 to-purple-600`)

## Customization

### Adding Team Members

```javascript
const team = [
  {
    name: "Your Name",
    role: "Your Role",
    bio: "Your bio description",
    image: "/path/to/image.jpg", // Or assets.profile_icon
    socials: {
      email: "your@email.com",
      github: "https://github.com/yourprofile",
      twitter: "https://twitter.com/yourprofile",
      linkedin: "https://linkedin.com/in/yourprofile",
    },
  },
  // Add more members...
];
```

### Updating Statistics

```javascript
const stats = [
  { icon: Code, label: "Your Label", value: "100+", color: "text-blue-600" },
  // Modify or add more stats...
];
```

### Customizing Values

```javascript
const values = [
  {
    title: "Your Value",
    description: "Description of your core value",
    icon: "🎯", // Any emoji
  },
  // Add more values...
];
```

## Navigation Integration

### Header Navigation

The About page is accessible from the main Header component:

- **Home** → `/`
- **Blog** → `/blog`
- **About** → `/about`

### Footer Links

Also linked in the Footer under "Quick Links" section.

## SEO Metadata

```javascript
export const metadata = {
  title: "About Us - Binida Blog",
  description:
    "Learn more about our blog, our mission, and the team behind it.",
};
```

## Icons Used (Lucide React)

- `Mail` - Email contact
- `Github` - GitHub profile
- `Twitter` - Twitter/X profile
- `Linkedin` - LinkedIn profile
- `Heart` - Monthly readers stat
- `Code` - Blog posts stat
- `Palette` - Categories stat
- `Zap` - Years active stat

## File Location

```
app/
  about/
    page.jsx
```

## Dependencies

- `next/image` - Optimized images
- `next/link` - Client-side navigation
- `lucide-react` - Icon library
- `@/assets/assets` - Logo and profile images

## Best Practices

1. **Update statistics regularly** to reflect current blog metrics
2. **Add real social media links** for team members
3. **Use high-quality profile photos** (recommended: 400x400px)
4. **Keep team bios concise** (2-3 sentences max)
5. **Update mission statement** as blog evolves

## Future Enhancements

- [ ] Add testimonials section
- [ ] Include blog post highlights/featured articles
- [ ] Add timeline of blog milestones
- [ ] Partner/sponsor section
- [ ] FAQ accordion
- [ ] Contact form integration

## Testing Checklist

- ✅ Responsive on mobile, tablet, desktop
- ✅ All links functional
- ✅ Images load properly
- ✅ Hover effects work smoothly
- ✅ Social media links open in new tabs
- ✅ Accessible (keyboard navigation, alt texts)

---

**Created**: October 4, 2025  
**Route**: `/about`  
**Status**: Production Ready 🚀
