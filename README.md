# Developer Portfolio

A modern, dynamic portfolio website for professional developers built with HTML, CSS, and JavaScript.

## Features

- **Animated hero** with typing effect and live code snippet
- **Particle background** with connected nodes (Canvas API)
- **Dark / light theme** toggle with localStorage persistence
- **Scroll reveal** animations via Intersection Observer
- **Animated skill bars** and tech stack marquee
- **Filterable project gallery** with modal details
- **Experience timeline** with hover effects
- **Contact form** with validation and loading state
- **Fully responsive** — mobile, tablet, and desktop
- **Cursor glow** effect on desktop

## Quick Start

Open `index.html` in your browser, or run a local server:

```bash
# Python
python -m http.server 8080

# Node.js (npx)
npx serve .
```

Then visit `http://localhost:8080`

## Customization

Edit `js/data.js` to update skills, projects, experience, and tech stack. Update your name and bio in `index.html`. Change colors in `css/style.css` (`:root` variables).

Replace placeholder links (GitHub, LinkedIn, resume) with your own URLs.

## File Structure

```
├── index.html       # Main page structure
├── css/style.css    # Styles, animations, responsive design
├── js/data.js       # Portfolio content (easy to edit)
├── js/main.js       # Dynamic interactions
└── README.md
```
