# Deployment Checklist

## Quick Setup (Next Few Hours)

### 1. Repository Setup
- [ ] Create new GitHub repository named `skahrod.github.io` 
- [ ] Upload all files to the repository
- [ ] Ensure repository is public

### 2. GitHub Pages Configuration
- [ ] Go to repository Settings → Pages
- [ ] Set Source to "Deploy from a branch"
- [ ] Select "main" branch and "/ (root)" folder
- [ ] Save settings

### 3. Custom Domain Verification
- [ ] Confirm CNAME file contains `sandykahrod.co.uk`
- [ ] Verify DNS settings in GoDaddy are correct:
  - A records: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
  - CNAME for www: skahrod.github.io
- [ ] Enable "Enforce HTTPS" in GitHub Pages settings (after DNS propagation)

### 4. Content Review
- [ ] Review homepage content and statistics
- [ ] Verify contact information is correct
- [ ] Check all internal links work
- [ ] Test Calendly integration link

### 5. Mobile Testing
- [ ] Test site on mobile devices
- [ ] Verify navigation menu works on mobile
- [ ] Check all CTAs are easily clickable

## Phase 2 Improvements (Next 1-2 Weeks)

### Content Enhancements
- [ ] Add 2-3 more blog posts to Insights section
- [ ] Create case study content with specific client examples (anonymised)
- [ ] Add more detailed service descriptions
- [ ] Include client testimonials (with permission)

### Visual Enhancements
- [ ] Add professional headshot to About page
- [ ] Create favicon files (16x16, 32x32, 180x180, 192x192 PNG)
- [ ] Add relevant stock photos or custom graphics
- [ ] Consider adding subtle animations or micro-interactions

### SEO Optimisation
- [ ] Add Google Analytics or Plausible Analytics
- [ ] Submit sitemap to Google Search Console
- [ ] Optimise meta descriptions for all pages
- [ ] Add schema markup for better search results

### Technical Improvements
- [ ] Set up automated social media sharing
- [ ] Add newsletter signup functionality
- [ ] Consider adding search functionality
- [ ] Implement lazy loading for images

## Immediate Launch Tasks

1. **Upload Files**: Copy all files to your `skahrod.github.io` repository
2. **Test Locally** (if possible):
   ```bash
   bundle install
   bundle exec jekyll serve
   ```
3. **Push to GitHub**: All files should be in the main branch
4. **Wait for DNS**: Allow 24-48 hours for full DNS propagation
5. **Enable HTTPS**: Once DNS is working, enable HTTPS in GitHub Pages settings

## File Structure to Upload

```
skahrod.github.io/
├── _config.yml
├── _layouts/
│   ├── default.html
│   └── post.html
├── _posts/
│   └── 2025-06-29-scaling-internal-platforms-for-rapid-growth.md
├── assets/
│   └── css/
│       └── style.css
├── index.html
├── services.html
├── about.html
├── insights.html
├── contact.html
├── 404.html
├── CNAME
├── robots.txt
├── sitemap.xml
├── Gemfile
├── .gitignore
└── README.md
```

## Calendly Integration Check

Ensure your Calendly URL is correct throughout the site:
- Current links point to: `https://calendly.com/sandykahrod`
- Update if your Calendly URL is different

## Emergency Contact Update

If you need to quickly update contact information:
1. Edit `_config.yml` for site-wide changes
2. Individual pages can be edited directly via GitHub web interface
3. Changes typically take 5-10 minutes to deploy

## Success Metrics to Track

- [ ] Site loads in under 3 seconds
- [ ] All navigation links work correctly  
- [ ] Calendly booking system functions
- [ ] Email links open correctly
- [ ] Mobile experience is smooth
- [ ] Custom domain resolves properly
- [ ] HTTPS is working

## Quick Fixes

**If something breaks:**
1. Check GitHub Pages deployment status in repository settings
2. Review build logs for errors
3. Ensure all file names match exactly (case-sensitive)
4. Verify YAML front matter in all files

**Common issues:**
- Build failures: Usually due to YAML syntax errors
- CSS not loading: Check file paths in `_layouts/default.html`
- Images not showing: Ensure proper file paths and image files are uploaded
- 404 errors: Verify file names and internal link paths

Your website should be live at `https://sandykahrod.co.uk` within a few hours of uploading these files and configuring GitHub Pages!