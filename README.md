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
- **Design**: Responsive, mobile-first design with custom CSS
- **Features**: Blog functionality, contact integration, SEO optimised

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

## Content Management

### Adding Blog Posts

1. Create a new file in `_posts/` with format: `YYYY-MM-DD-post-title.md`
2. Add front matter:
```yaml
---
layout: post
title: "Your Post Title"
date: YYYY-MM-DD
excerpt: "Brief description of the post"
tags: [Tag1, Tag2, Tag3]
read_time: "X min read"
---
```
3. Write content in Markdown format
4. Commit and push to GitHub

### Updating Pages

- Edit the respective `.html` files in the root directory
- Changes are automatically deployed via GitHub Pages
- Allow 5-10 minutes for changes to go live

### Updating Contact Information

- Edit `_config.yml` for site-wide contact details
- Update individual pages as needed

## Local Development

To run the site locally:

1. Install Ruby and Bundler
2. Clone the repository
3. Run:
```bash
bundle install
bundle exec jekyll serve
```
4. Visit `http://localhost:4000`

## Deployment

The site automatically deploys via GitHub Pages when changes are pushed to the main branch.

### Custom Domain Setup

The custom domain `sandykahrod.co.uk` is configured via:
1. `CNAME` file in the repository
2. DNS A records pointing to GitHub Pages IPs:
   - 185.199.108.153
   - 185.199.109.153  
   - 185.199.110.153
   - 185.199.111.153
3. CNAME record for www subdomain

## SEO Features

- Semantic HTML structure
- Meta descriptions and titles
- OpenGraph tags for social sharing
- XML sitemap (auto-generated)
- robots.txt configuration
- Fast loading times
- Mobile-responsive design

## Design Features

- **Colour Palette**: Professional pink (#ED4672), yellow (#FFB400), orange (#FF7C15) with navy/gray foundation
- **Typography**: Inter font family for modern, professional appearance
- **Layout**: Mobile-first responsive design
- **Accessibility**: Semantic markup, proper contrast ratios, keyboard navigation
- **Performance**: Optimised CSS, minimal JavaScript, fast loading

## Content Strategy

The website targets senior executives and technology leaders with:
- Clear value propositions
- Quantified business results
- Executive-focused language
- Multiple conversion paths
- Trust signals and credibility markers

## Analytics & Tracking

Currently configured for:
- Basic Jekyll/GitHub Pages analytics
- Ready for Google Analytics or Plausible Analytics integration
- Contact tracking via Calendly integration

## Contact Integration

- **Primary CTA**: Calendly booking system
- **Secondary**: Direct email contact
- **Social**: LinkedIn integration
- No contact forms (by design - using Calendly + email)

## Maintenance

### Regular Updates
- Review and update portfolio/achievements quarterly
- Add new blog posts monthly
- Update speaking engagements and recognition
- Refresh testimonials and case studies

### Technical Maintenance
- Monitor site performance and loading times
- Update Jekyll/dependencies as needed
- Review and update SEO as search algorithms evolve
- Test all links and contact methods quarterly

## Support

For technical issues or content updates:
- Check Jekyll documentation: [jekyllrb.com](https://jekyllrb.com)
- GitHub Pages documentation: [pages.github.com](https://pages.github.com)
- For urgent fixes: Edit files directly via GitHub web interface

---

**Repository Owner**: Sandy Kahrod  
**Last Updated**: June 2025  
**License**: Private - All rights reserved