# P.H.R.O.N.O.S. Deployment Guide

## Step-by-Step Instructions for GitHub + Netlify

### Prerequisites
- GitHub account (already created ✓)
- Netlify account (already created ✓)
- Git installed on your computer

### Part 1: Push to GitHub

1. **Open Terminal/Command Prompt** and navigate to your project folder:
```bash
cd path/to/phronos-website
```

2. **Initialize Git repository**:
```bash
git init
```

3. **Add all files**:
```bash
git add .
```

4. **Make your first commit**:
```bash
git commit -m "Initial P.H.R.O.N.O.S. website launch"
```

5. **Create a new repository on GitHub**:
   - Go to https://github.com/new
   - Repository name: `phronos-website`
   - Description: "P.H.R.O.N.O.S. Observatory - Public Heuristics for Resilient Ontology, Navigation, and Observational Science"
   - Make it **Public**
   - Do NOT initialize with README (you already have one)
   - Click "Create repository"

6. **Connect local repo to GitHub**:
```bash
git remote add origin https://github.com/YOUR_USERNAME/phronos-website.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

### Part 2: Deploy to Netlify

#### Option A: Through Netlify Dashboard (Easiest)

1. **Go to Netlify**: https://app.netlify.com/

2. **Add new site**:
   - Click "Add new site" button
   - Select "Import an existing project"

3. **Connect to Git provider**:
   - Click "GitHub"
   - Authorize Netlify if prompted
   - Select your `phronos-website` repository

4. **Configure build settings**:
   - Netlify will auto-detect settings from `netlify.toml`
   - You should see:
     - Base directory: (leave empty)
     - Build command: `cd observatory && npm install && npm run build`
     - Publish directory: `observatory/build`
   - Click "Deploy site"

5. **Wait for deployment** (2-5 minutes):
   - Netlify will show build logs
   - Once complete, you'll get a URL like `random-name-12345.netlify.app`

6. **Set custom domain** (optional):
   - Click "Domain settings"
   - Click "Add custom domain"
   - Enter `phronos.org`
   - Follow DNS instructions to point your domain to Netlify

#### Option B: Through Netlify CLI

If you prefer command line:

```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Login to Netlify
netlify login

# Navigate to project
cd phronos-website

# Initialize and deploy
netlify init

# Follow prompts:
# - Create & configure new site
# - Team: Choose your team
# - Site name: phronos-observatory (or your preference)
# - Build command: cd observatory && npm install && npm run build
# - Publish directory: observatory/build

# Deploy
netlify deploy --prod
```

### Part 3: Verify Deployment

1. **Check landing page**: 
   - Go to your Netlify URL
   - Should see the P.H.R.O.N.O.S. landing page

2. **Check observatory**:
   - Go to `your-url.netlify.app/observatory`
   - Should see Docusaurus documentation

3. **Test navigation**:
   - Click "Observatory" in landing page nav
   - Navigate through documentation sections
   - Try the citation widget in Theory → Framework

### Part 4: Future Updates

Whenever you make changes:

```bash
# Make your changes to files
# Then commit and push:

git add .
git commit -m "Description of changes"
git push

# Netlify will automatically rebuild and deploy!
```

## Troubleshooting

### Build fails on Netlify

**Error**: "Command failed with exit code 1"
- Check build logs in Netlify dashboard
- Common issue: Node version
  - Add to `netlify.toml`:
    ```toml
    [build.environment]
      NODE_VERSION = "18"
    ```

**Error**: "Module not found"
- The build command might not be running from correct directory
- Verify `netlify.toml` build command

### Observatory page shows 404

- Check that base URL in `docusaurus.config.js` is `/observatory/`
- Verify redirect rules in `netlify.toml`

### Custom domain not working

1. Check DNS propagation (can take 24-48 hours)
2. Use Netlify's DNS nameservers for fastest setup
3. Verify HTTPS certificate is active

## File Checklist

Before deploying, ensure you have:
- ✓ `index.html` (landing page)
- ✓ `observatory/` directory with Docusaurus
- ✓ `netlify.toml` (build configuration)
- ✓ `.gitignore` (to exclude node_modules)
- ✓ `README.md` (documentation)

## Support

If you encounter issues:
1. Check Netlify build logs for specific errors
2. Review Docusaurus documentation: https://docusaurus.io/docs
3. Check Netlify documentation: https://docs.netlify.com/

---

**Quick Reference URLs**:
- GitHub repo creation: https://github.com/new
- Netlify dashboard: https://app.netlify.com/
- Docusaurus docs: https://docusaurus.io/docs
