# P.H.R.O.N.O.S. Website - Complete Deployment Package

## What You Have

Your complete website is ready to deploy! Here's what's included:

### 1. Landing Page (`index.html`)
- Beautiful observatory-themed design
- P.H.R.O.N.O.S. acronym with hover tooltip
- Responsive navigation
- Live UTC clock
- Links to Observatory documentation

### 2. Observatory Documentation (Docusaurus)
Complete documentation platform in the `observatory/` directory with:

**Custom React Components:**
- `CitationWidget` - Copy citations in APA/MLA/BibTeX formats
- `StatusBadge` - Living/Stable/Archived document indicators
- `SchemaHead` - JSON-LD structured data for AI optimization

**Documentation Structure:**
```
[LANDSCAPE] → Literature synthesis (4 docs)
[THEORY] → Core framework (4 docs)
  - Constitution ✓
  - Definitions ✓
  - Core Framework ✓ (fully detailed example)
  - Intro ✓
[METHODS] → Operational protocols (4 docs)
[RESULTS] → Data & analysis (3 docs)
Plus: Changelog, Contribute guide
```

**Features:**
- LaTeX math rendering (KaTeX)
- Version control for documents
- Open peer review system
- Observatory-themed custom CSS
- Responsive sidebar navigation
- Dark mode support

### 3. Configuration Files
- `netlify.toml` - Automated Netlify deployment
- `docusaurus.config.js` - Full Docusaurus configuration
- `sidebars.js` - 4-part taxonomy structure
- `.gitignore` - Proper exclusions
- `package.json` - All dependencies

## How to Deploy (3 Easy Steps)

### Step 1: Push to GitHub

```bash
# Navigate to the project
cd phronos-website

# Initialize Git
git init
git add .
git commit -m "Initial P.H.R.O.N.O.S. launch"

# Create repo on GitHub: https://github.com/new
# Name it: phronos-website
# Make it public
# Don't initialize with anything

# Connect and push
git remote add origin https://github.com/YOUR_USERNAME/phronos-website.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy on Netlify

1. Go to https://app.netlify.com/
2. Click "Add new site" → "Import an existing project"
3. Choose GitHub
4. Select `phronos-website` repository
5. Netlify auto-detects settings from `netlify.toml`
6. Click "Deploy site"

**Done!** Your site will be live in 2-5 minutes.

### Step 3: Optional - Custom Domain

1. In Netlify dashboard → "Domain settings"
2. Add `phronos.org`
3. Update DNS as instructed
4. HTTPS enables automatically

## File Structure

```
phronos-website/
├── index.html                    # Landing page
├── README.md                     # Project documentation
├── DEPLOYMENT.md                 # Detailed deployment guide
├── netlify.toml                  # Netlify config
├── .gitignore                    # Git exclusions
│
└── observatory/                  # Docusaurus site
    ├── package.json             # Dependencies
    ├── docusaurus.config.js     # Main config
    ├── sidebars.js              # Sidebar structure
    │
    ├── docs/                    # All documentation
    │   ├── landscape/           # Literature synthesis
    │   ├── theory/              # Core framework
    │   │   ├── intro.md
    │   │   ├── constitution.md
    │   │   ├── definitions.md
    │   │   └── framework.mdx    # ★ Full example with all components
    │   ├── methods/             # Protocols
    │   ├── results/             # Data & analysis
    │   ├── changelog.md
    │   └── contribute.md
    │
    ├── src/
    │   ├── components/
    │   │   ├── CitationWidget/
    │   │   │   ├── index.js
    │   │   │   └── styles.module.css
    │   │   ├── StatusBadge/
    │   │   │   ├── index.js
    │   │   │   └── styles.module.css
    │   │   └── SchemaHead/
    │   │       └── index.js
    │   │
    │   └── css/
    │       └── custom.css       # Observatory theme
    │
    └── static/
        └── img/
            ├── logo.svg
            └── favicon.ico
```

## Key Features Implemented

### 1. Academic Credibility Features
✓ Citation widget with multiple formats
✓ Version tracking and changelogs
✓ Status badges (Living/Stable/Archived)
✓ Open peer review system
✓ Structured data (JSON-LD) for AI optimization
✓ Proper academic references section

### 2. Observatory Requirements Met
✓ 4-part taxonomy ([LANDSCAPE], [THEORY], [METHODS], [RESULTS])
✓ LaTeX equation support (remark-math + rehype-katex)
✓ Living document protocol
✓ Version control
✓ Limitations sections
✓ Contributor acknowledgments
✓ DOI linking capability

### 3. Brand Identity
✓ P.H.R.O.N.O.S. acronym prominently displayed
✓ Tooltip explaining full name
✓ Observatory aesthetic (grid background, monospace fonts)
✓ Professional color palette (paper, ink, gold)
✓ Consistent typography (Cormorant Garamond + Fira Code)

## Example Usage of Components

See `observatory/docs/theory/framework.mdx` for a complete example showing:

```mdx
import StatusBadge from '@site/src/components/StatusBadge';
import CitationWidget from '@site/src/components/CitationWidget';
import SchemaHead from '@site/src/components/SchemaHead';

<SchemaHead
  type="Article"
  headline="Your Title"
  description="Your description"
/>

<StatusBadge type="Living" />

# Your Document

Content here...

<CitationWidget
  author="Your Name"
  year="2024"
  title="Document Title"
  doi="10.1234/example"
  version="1.0"
/>
```

## Next Steps

### Immediate (Before Launch)
1. Replace placeholder images in `observatory/static/img/`
2. Review and customize `observatory/docs/theory/framework.mdx`
3. Update email addresses (search for `research@phronos.org`)
4. Add your GitHub username to URLs

### After Launch
1. Create actual content for placeholder documents
2. Add real research data to RESULTS section
3. Invite peer reviewers
4. Set up analytics (optional)
5. Connect custom domain

## Technical Notes

### Build Process
- Netlify automatically runs: `cd observatory && npm install && npm run build`
- First build takes 3-5 minutes
- Subsequent builds are faster (cached dependencies)
- Each git push triggers automatic rebuild

### Local Development
```bash
# Test landing page
python3 -m http.server 8000

# Test observatory
cd observatory
npm install
npm start
# Opens at http://localhost:3000/observatory/
```

### Cost
- GitHub: Free (public repo)
- Netlify: Free tier includes:
  - 100 GB bandwidth/month
  - 300 build minutes/month
  - HTTPS + CDN
  - Automatic deploys

This is more than enough for documentation sites.

## Support Resources

- **Detailed deployment guide**: See `DEPLOYMENT.md`
- **Project documentation**: See `README.md`
- **Docusaurus docs**: https://docusaurus.io/docs
- **Netlify docs**: https://docs.netlify.com/

## Troubleshooting

### Build fails?
Check Node version in `netlify.toml`:
```toml
[build.environment]
  NODE_VERSION = "18"
```

### 404 errors?
Verify `baseUrl: '/observatory/'` in `docusaurus.config.js`

### Components not working?
Check import paths start with `@site/src/components/`

## Final Checklist

Before pushing to GitHub:
- [ ] Replace `YOUR_USERNAME` in README.md with actual GitHub username
- [ ] Customize `observatory/docs/theory/framework.mdx` content
- [ ] Add real logo to `observatory/static/img/logo.svg`
- [ ] Update contact email in contribution guide
- [ ] Review constitution and adjust as needed
- [ ] Test locally (optional but recommended)

---

## You're Ready!

Everything is configured and ready to deploy. Just follow the 3 steps above and your P.H.R.O.N.O.S. Observatory will be live!

Questions? Check `DEPLOYMENT.md` for detailed troubleshooting.

**Good luck with your launch! 🚀**
