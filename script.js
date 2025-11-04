// Theme management
class ThemeManager {
    constructor() {
        this.themeToggle = document.getElementById('theme-toggle');
        this.themeIcon = document.querySelector('.theme-icon');
        this.init();
    }

    init() {
        // Load saved theme preference or default to light mode
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            this.enableDarkMode();
        }

        // Add event listener to toggle button
        this.themeToggle.addEventListener('click', () => {
            this.toggleTheme();
        });
    }

    toggleTheme() {
        if (document.body.classList.contains('dark-mode')) {
            this.disableDarkMode();
        } else {
            this.enableDarkMode();
        }
    }

    enableDarkMode() {
        document.body.classList.add('dark-mode');
        this.themeIcon.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    }

    disableDarkMode() {
        document.body.classList.remove('dark-mode');
        this.themeIcon.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    }
}

// Navigation functionality
class DocumentationSite {
    constructor() {
        this.contentArea = document.getElementById('content-area');
        this.navLinks = document.querySelectorAll('.nav-link');
        
        this.init();
    }

    init() {
        // Add event listeners to navigation links
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const page = link.getAttribute('data-page');
                this.loadPage(page);
                this.setActiveLink(link);
            });
        });

        // Load default page (Getting Started)
        this.loadPage('getting-started');
    }

    async loadPage(pageName) {
        try {
            // Show loading state
            this.contentArea.innerHTML = '<div class="loading">Loading...</div>';
            
            // Fetch the markdown content
            const response = await fetch(`docs/${pageName}.md`);
            
            if (!response.ok) {
                throw new Error(`Failed to load ${pageName}`);
            }
            
            const markdownContent = await response.text();
            
            // Parse markdown to HTML using marked.js
            const htmlContent = marked.parse(markdownContent);
            
            // Insert the parsed HTML content
            this.contentArea.innerHTML = htmlContent;
            
            // Scroll to top of content
            this.contentArea.scrollTop = 0;
            
        } catch (error) {
            console.error('Error loading page:', error);
            this.contentArea.innerHTML = `
                <div class="error">
                    <h2>Page Not Found</h2>
                    <p>Sorry, the requested page could not be loaded.</p>
                    <p>Error: ${error.message}</p>
                </div>
            `;
        }
    }

    setActiveLink(activeLink) {
        // Remove active class from all links
        this.navLinks.forEach(link => {
            link.classList.remove('active');
        });
        
        // Add active class to clicked link
        activeLink.classList.add('active');
    }
}

// Initialize the documentation site when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ThemeManager();
    new DocumentationSite();
});

// Handle browser back/forward navigation
window.addEventListener('popstate', (event) => {
    if (event.state && event.state.page) {
        const site = new DocumentationSite();
        site.loadPage(event.state.page);
    }
});

// Optional: Add smooth scrolling for anchor links within content
document.addEventListener('click', (e) => {
    if (e.target.tagName === 'A' && e.target.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
});