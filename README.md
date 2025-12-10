# P.H.R.O.N.O.S. Website

**Public Heuristics for Resilient Ontology, Navigation, and Observational Science**

This repository contains the complete P.H.R.O.N.O.S. website, including:
- Landing page (static HTML)
- Observatory documentation (Docusaurus)

## Project Structure

```
phronos-website/
├── index.html              # Landing page
├── observatory/            # Docusaurus documentation
│   ├── docs/              # Documentation files
│   ├── src/               # React components
│   ├── static/            # Static assets
│   ├── docusaurus.config.js
│   └── package.json
├── netlify.toml           # Netlify configuration
└── README.md
```

## Local Development

### Landing Page
The landing page is a static HTML file. Simply open `index.html` in a browser or use a local server:

```bash
# Using Python
python3 -m http.server 8000

# Using Node
npx serve .
```

### Observatory (Docusaurus)

```bash
cd observatory
npm install
npm start
```

This will start the development server at `http://localhost:3000/observatory/`.

## Deployment to Netlify

### Method 1: GitHub + Netlify (Recommended)

1. **Push to GitHub**:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/phronos-website.git
git push -u origin main
```

2. **Connect to Netlify**:
   - Log into Netlify
   - Click "Add new site" → "Import an existing project"
   - Choose GitHub and select your repository
   - Netlify will auto-detect the configuration from `netlify.toml`
   - Click "Deploy"

### Method 2: Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Initialize site
netlify init

# Deploy
netlify deploy --prod
```

## Build Configuration

The `netlify.toml` file configures:
- Root directory: `/` for landing page
- Observatory build: `cd observatory && npm run build`
- Publish directory: `observatory/build`
- Client-side routing redirects

## Custom Domain Setup

1. In Netlify dashboard, go to "Domain settings"
2. Add custom domain: `phronos.org`
3. Update DNS records as instructed by Netlify
4. Enable HTTPS (automatic with Netlify)

## Components

### Custom React Components

Three custom components are available for use in MDX files:

1. **CitationWidget** - Copy citations in APA, MLA, or BibTeX
2. **StatusBadge** - Display document status (Living, Stable, Archived)
3. **SchemaHead** - Add JSON-LD structured data for SEO

See `docs/theory/framework.mdx` for usage examples.

## Contributing

See [CONTRIBUTING.md](observatory/docs/contribute.md) for guidelines.

## License

- Documentation: CC BY 4.0
- Code: MIT License

---

Built with [Docusaurus](https://docusaurus.io/) | Deployed on [Netlify](https://www.netlify.com/)
