# Documentation Website

A lightweight, static documentation website built with HTML, CSS, and JavaScript. Designed for easy deployment to GitHub Pages or any static hosting service.

## Project Structure

```
wsf-docs/
├── index.html          # Main page with navigation and layout
├── styles.css          # CSS styling with flexbox layout
├── script.js           # JavaScript for dynamic content loading
├── logo.svg            # Site logo placeholder
└── docs/               # Documentation content pages (Markdown)
    ├── getting-started.md
    ├── profiles.md
    ├── certificates.md
    ├── portal-app.md
    ├── post-install-rules.md
    └── troubleshooting.md
```

## Features

- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Fixed Sidebar Navigation**: Easy access to all documentation sections
- **Dynamic Content Loading**: Pages load without full page refresh
- **Markdown Support**: Write documentation in easy-to-edit Markdown format
- **Clean Typography**: Optimized for readability with proper formatting
- **No Build Process**: Ready to deploy as static files
- **GitHub Pages Ready**: No additional configuration needed

## Local Development

To run the site locally:

1. Clone or download the project
2. Start a local web server in the project directory:
   ```bash
   # Using Python 3
   python3 -m http.server 8080
   
   # Using Node.js (if you have it installed)
   npx serve .
   
   # Using PHP (if available)
   php -S localhost:8080
   ```
3. Open your browser and navigate to `http://localhost:8080`

## Deployment

### GitHub Pages

1. Push the code to a GitHub repository
2. Go to repository Settings → Pages
3. Select "Deploy from a branch"
4. Choose the main branch and root folder
5. Your site will be available at `https://yourusername.github.io/repository-name`

### Other Static Hosting

The site can be deployed to any static hosting service:
- Netlify: Drag and drop the folder
- Vercel: Import from GitHub
- AWS S3: Upload files to a bucket with static hosting enabled
- Any web server: Copy files to the web root directory

## Customization

### Adding New Pages

1. Create a new Markdown file in the `docs/` folder (e.g., `docs/new-section.md`)
2. Add a navigation link in `index.html`:
   ```html
   <li><a href="#" data-page="new-section" class="nav-link">New Section</a></li>
   ```
3. The JavaScript will automatically handle loading the new Markdown page

### Writing Content

- Use standard Markdown syntax for formatting
- Code blocks are supported with syntax highlighting
- Tables, lists, and all standard Markdown features work
- The content will be automatically converted to HTML when displayed

### Styling

- Edit `styles.css` to customize colors, fonts, and layout
- The site uses CSS custom properties for easy theming
- Responsive breakpoints are already configured

### Logo

Replace `logo.svg` with your own logo file. The logo supports SVG, PNG, or JPG formats.

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## License

This project is open source and available under the [MIT License](LICENSE).