# Divya Shree P - Portfolio Website

A modern, responsive, single-page portfolio website built with HTML, Tailwind CSS, and vanilla JavaScript. Features a clean design with dark mode support, smooth animations, and full SEO optimization.

🌐 **Live Site**: [divyashreepalraj.github.io](https://divyashreepalraj.github.io)

## ✨ Features

- **🎨 Modern Design**: Clean, professional UI with purple accent theme
- **🌓 Dark Mode**: Toggle between light and dark themes with persistent preference
- **📱 Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **⚡ Fast Performance**: Single HTML file with no build process required
- **🔍 SEO Optimized**: Complete meta tags, Open Graph, and Twitter Cards
- **🎭 Smooth Animations**: Subtle fade-in and scroll animations
- **♿ Accessible**: Semantic HTML and proper ARIA labels
- **📄 Resume Download**: Direct download link to PDF resume

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **Tailwind CSS v3**: Utility-first CSS framework (via CDN)
- **Vanilla JavaScript**: No frameworks or dependencies
- **GitHub Pages**: Hosting platform

## 📁 Project Structure

```
divya-portfolio/
├── index.html              # Main portfolio page (single file)
├── assets/
│   ├── images/
│   │   └── dp.png          # Profile image
│   ├── pdf/
│   │   └── divya.pdf       # Resume PDF
│   └── favicon/
│       ├── favicon.ico
│       ├── favicon-16x16.png
│       ├── favicon-32x32.png
│       ├── apple-touch-icon.png
│       └── ...
└── README.md               # This file
```

## 🚀 Getting Started

### Prerequisites

- A GitHub account
- A text editor (VS Code, Sublime Text, etc.)
- A modern web browser

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/divyashreepalraj/divyashreepalraj.github.io.git
   cd divyashreepalraj.github.io
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a local server:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js (http-server)
     npx http-server
     ```

3. **View locally**
   - Navigate to `http://localhost:8000` (or the port your server uses)

## 📤 Deployment to GitHub Pages

### Method 1: Automatic Deployment (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under **Source**, select **main** branch
   - Click **Save**
   - Your site will be available at `https://yourusername.github.io/your-repo`

### Method 2: Using gh-pages Branch

1. **Install gh-pages** (optional)
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add deploy script to package.json**
   ```json
   {
     "scripts": {
       "deploy": "gh-pages -d ."
     }
   }
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

## 🎨 Customization

### Updating Personal Information

1. **Edit `portfolio.json`** - All content is managed through this configuration file:
   - Name, role, and bio in the Hero section
   - Contact information in the Contact section
   - Skills and experience details
   - Projects and education

### Changing Colors

The portfolio uses a purple accent theme. To change colors:

1. Update `themeColor` in `portfolio.json`
2. Search for `purple-` classes in `index.html`
3. Replace with your preferred color (e.g., `blue-`, `green-`, `red-`)
4. Update CSS variables in the `<style>` section if needed

### Adding Profile Image

1. Replace `assets/images/dp.png` with your profile image
2. Update the image path in the Hero section if using a different filename
3. Recommended size: 400x400px (square)

### Updating Resume

1. Replace `assets/pdf/divya.pdf` with your resume
2. Ensure the filename matches the link in the "View Resume" button

### Modifying Sections

- **Add new sections**: Add entries to `portfolio.json` and update the corresponding rendering code
- **Remove sections**: Remove entries from `portfolio.json`
- **Reorder sections**: Modify the order of entries in `portfolio.json`

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🐛 Troubleshooting

### Dark Mode Not Working

- Ensure Tailwind CSS CDN is loaded correctly
- Check browser console for JavaScript errors
- Clear browser cache and hard refresh (Ctrl+Shift+R / Cmd+Shift+R)

### Styles Not Loading

- Verify Tailwind CDN link is accessible
- Check internet connection (CDN requires internet)
- Ensure no ad blockers are blocking the CDN

### GitHub Pages Not Updating

- Wait a few minutes for changes to propagate
- Clear browser cache
- Check GitHub Pages settings in repository

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Divya Shree P**

- Email: divyashree.palraj@gmail.com
- Phone: +91 8189898624
- Location: Chennai, India
- Portfolio: [divyashreepalraj.github.io](https://divyashreepalraj.github.io)
- GitHub: [github.com/yourusername](https://github.com/yourusername)
- LinkedIn: [linkedin.com/in/yourprofile](https://linkedin.com/in/yourprofile)

## 🙏 Acknowledgments

- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [GitHub Pages](https://pages.github.com/) for free hosting
- Design inspiration from modern portfolio websites

## 📞 Contact

For questions, suggestions, or collaboration opportunities, feel free to reach out:

- **Email**: divyashree.palraj@gmail.com
- **Phone**: +91 8189898624
- **Location**: Chennai, India

---

⭐ If you find this portfolio template useful, please consider giving it a star on GitHub!
