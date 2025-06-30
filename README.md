# Sandy Kahrod - Professional Website

Award-winning product leader specialising in technology transformation, portfolio strategy, and scaling internal systems for senior leadership teams.

🌐 **Live Site**: [sandykahrod.co.uk](https://sandykahrod.co.uk)

## About

This website showcases Sandy Kahrod's expertise in:
- Technology Transformation Leadership
- Internal Platform & Systems Strategy  
- Portfolio & Product Management Excellence
- Team Leadership & Organisational Change

## Technical Details

- **Platform**: Jekyll static site generator
- **Hosting**: GitHub Pages
- **Domain**: Custom domain (sandykahrod.co.uk)
- **Design**: Modern, vibrant design with clean typography
- **Fonts**: DM Serif Text (headings) + Figtree (body text)
- **Features**: Testimonials carousel, blog functionality, mobile-responsive

## Site Structure

```
├── _config.yml           # Jekyll configuration
├── _layouts/             # Page templates
│   ├── default.html      # Main layout
│   └── post.html         # Blog post layout
├── _posts/               # Blog articles
├── assets/
│   └── css/
│       └── style.css     # Main stylesheet
├── index.html            # Homepage
├── services.html         # Services page
├── about.html            # About page
├── insights.html         # Blog/insights page
├── contact.html          # Contact page
├── 404.html              # Error page
├── CNAME                 # Custom domain configuration
├── robots.txt            # SEO configuration
└── Gemfile               # Ruby dependencies
```

## Design Features

- **Color Palette**: Hot pink (#E91E63), vibrant orange (#FF6B35), electric yellow (#FFD23F)
- **Typography**: DM Serif Text for headings, Figtree for body text
- **Layout**: Wide container (1600px) for better screen utilisation
- **Hero Section**: Split layout with text left, image right
- **Stats Banner**: Edge-to-edge black banner with brand color borders
- **Testimonials**: Carousel format with single testimonials
- **Mobile-First**: Responsive design that works on all devices

## Key Sections

### Homepage
- Hero section with personal image placeholder
- Stats banner showcasing achievements
- Why leaders choose to work with Sandy
- Philosophy section in colored box
- Call-to-action above testimonials
- Testimonials carousel
- Thought leadership section
- Final call-to-action

### Other Pages
- **Services**: Detailed service offerings
- **About**: Professional background and credentials
- **Insights**: Blog/thought leadership content
- **Contact**: Multiple contact methods and consultation booking

## Content Management

### Adding Blog Posts

1. Create new file in `_posts/` with format: `YYYY-MM-DD-post-title.md`
2. Add front matter:
```yaml
---
layout: post
title: "Your Post Title"
date: YYYY-MM-DD
excerpt: "Brief description"
tags: [Tag1, Tag2]
read_time: "X min read"
---
```
3. Write content in Markdown
4. Commit and push to GitHub

### Updating Images

- **Hero Image**: Replace placeholder in CSS: `.hero-image` background-image
- **Article Images**: Update URLs in insights page article cards
- **Thought Leadership**: Replace placeholder images with real ones

### Contact Information

- Update `_config.yml` for site-wide contact details
- Calendly links point to: `https://calendly.com/sandykahrod`

## Local Development

```bash
bundle install
bundle exec jekyll serve
```
Visit `http://localhost:4000`

## Deployment

Automatically deploys via GitHub Pages when changes are pushed to main branch.

### Custom Domain Setup

1. CNAME file contains: `sandykahrod.co.uk`
2. GoDaddy DNS A records point to GitHub Pages IPs
3. HTTPS automatically enabled

## SEO Features

- Semantic HTML structure
- Meta descriptions and titles
- XML sitemap (auto-generated)
- Fast loading times
- Mobile-responsive design
- Clean URLs

## Brand Colors

```css
--hot-pink: #E91E63;
--vibrant-orange: #FF6B35;
--electric-yellow: #FFD23F;
--pure-white: #FFFFFF;
--pure-black: #000000;
```

## Typography

```css
--font-serif: 'DM Serif Text', Georgia, serif;    /* Headings */
--font-sans: 'Figtree', sans-serif;               /* Body text */
```

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Graceful degradation for older browsers

---

**Repository Owner**: Sandy Kahrod  
**Last Updated**: June 2025  
**License**: Private - All rights reserved