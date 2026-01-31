# Gatsby Template for QuantCDN

[![Deploy to QuantCDN](https://www.quantcdn.io/img/quant-deploy-btn-sml.svg)](https://dashboard.quantcdn.io/deploy/static/ssg-gatsby)

A production-ready Gatsby template for deploying static sites on QuantCDN.

## Features

- Gatsby 5.x with React 18
- Pre-configured for QuantCDN deployment
- GitHub Actions workflow included
- Automatic cache purging on deploy

## Quick Start

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run develop
```

Your site will be available at `http://localhost:8000`.

### Build

```bash
# Create production build
npm run build

# Serve production build locally
npm run serve
```

The production build will be output to the `public/` directory.

## Deployment

This template includes a GitHub Actions workflow that automatically deploys to QuantCDN when you push to the `main` or `master` branch.

### Required Secrets

Configure the following secrets in your GitHub repository:

- `QUANT_CUSTOMER` - Your QuantCDN customer ID
- `QUANT_PROJECT` - Your QuantCDN project name
- `QUANT_TOKEN` - Your QuantCDN API token

## Project Structure

```
ssg-gatsby/
├── src/
│   └── pages/
│       ├── index.js      # Homepage
│       ├── about.js      # About page
│       └── 404.js        # 404 error page
├── gatsby-config.js      # Gatsby configuration
├── package.json          # Dependencies and scripts
└── .github/
    └── workflows/
        └── deploy.yml    # GitHub Actions deployment
```

## Customization

### Site Metadata

Edit `gatsby-config.js` to update your site's metadata:

```javascript
module.exports = {
  siteMetadata: {
    title: 'Your Site Title',
    description: 'Your site description',
    siteUrl: 'https://your-site.quantcdn.io',
  },
  plugins: [],
}
```

### Adding Plugins

Gatsby has a rich plugin ecosystem. Add plugins to the `plugins` array in `gatsby-config.js`:

```javascript
module.exports = {
  // ...
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    // Add more plugins here
  ],
}
```

## Learn More

- [Gatsby Documentation](https://www.gatsbyjs.com/docs/)
- [QuantCDN Documentation](https://docs.quantcdn.io/)
