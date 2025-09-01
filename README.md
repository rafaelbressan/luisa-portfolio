# Luisa Bressan Portfolio

A modern portfolio website built with Hugo and Tailwind CSS, featuring a beautiful dark/light theme toggle.

## 🌟 Features

- **Modern Design**: Clean, professional portfolio layout
- **Dark/Light Theme**: Toggle between themes with preference persistence
- **Responsive**: Mobile-first design that works on all devices
- **Fast**: Built with Hugo static site generator for optimal performance
- **SEO Optimized**: Proper meta tags and semantic HTML

## 🛠️ Tech Stack

- **Hugo** - Static site generator
- **Tailwind CSS v4** - Utility-first CSS framework
- **JavaScript** - Theme switching functionality
- **Netlify** - Deployment and hosting

## 🚀 Quick Start

### Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **View the site:**
   Open `http://localhost:1313` in your browser

### Build for Production

```bash
npm run build
```

This will:
- Build Tailwind CSS with optimizations
- Generate the Hugo site with minification
- Output everything to the `public/` directory

## 📦 Deployment to Netlify

The site is configured to deploy automatically to **luisabressan.netlify.app**.

### Automatic Deployment

1. **Push to Git repository** (GitHub, GitLab, etc.)
2. **Connect repository to Netlify**
3. **Set site name to:** `luisabressan`
4. **Deploy automatically!**

The `netlify.toml` file contains all necessary build settings:
- Build command: `npm run build`
- Publish directory: `public`
- Node.js version: 18
- Hugo version: 0.123.7

### Manual Deployment

You can also deploy manually using the deployment script:

```bash
./deploy.sh
```

Then upload the `public/` folder to Netlify.

## 🎨 Theme System

The site features a sophisticated theme system with:

### Light Theme (Default)
- Background: `#EFE6E4`
- Text: `#58595b`
- Accent: `#c59483`
- Cards: `#ffffff`

### Dark Theme
- Background: `#1a1a1a`
- Text: `#e8e8e8`
- Accent: `#d4a490`
- Cards: `#2a2a2a`

### Theme Toggle
- Located in the navigation menu (right side)
- Saves user preference in localStorage
- Respects system theme preferences
- Smooth transitions between themes

## 📁 Project Structure

```
luisa-portfolio/
├── content/                 # Markdown content files
├── static/                  # Static assets (images, etc.)
├── themes/luisa/           # Custom Hugo theme
│   ├── assets/
│   │   ├── css/            # Tailwind CSS source
│   │   └── js/             # JavaScript files
│   └── layouts/            # Hugo templates
├── netlify.toml            # Netlify configuration
├── hugo.toml               # Hugo configuration
├── package.json            # Node.js dependencies
├── postcss.config.js       # PostCSS configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── deploy.sh               # Deployment script
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:css` - Build only CSS
- `npm run watch:css` - Watch CSS changes
- `npm run preview` - Preview production build locally

## 🔧 Configuration

### Site Settings
Edit `hugo.toml` to modify:
- Site title
- Base URL
- Language settings

### Theme Colors
Modify theme colors in `themes/luisa/assets/css/tailwind.css`:
- Light theme: `:root` selector
- Dark theme: `[data-theme="dark"]` selector

### Build Settings
Adjust build configuration in `netlify.toml` for:
- Environment variables
- Headers and security settings
- Redirect rules

## 📱 Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Progressive enhancement for older browsers

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is private and proprietary.

---

**Live Site:** https://luisabressan.netlify.app/