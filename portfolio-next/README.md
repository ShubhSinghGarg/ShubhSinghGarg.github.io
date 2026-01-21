# Shubh Singh Garg Portfolio - Next.js Version

This is a modernized version of the original portfolio website, converted to Next.js for improved performance, maintainability, and developer experience.

## Features

- Single Page Application (SPA) with smooth scrolling navigation
- Responsive design that works on mobile, tablet, and desktop devices
- Video background headers for visual impact
- Component-based architecture for maintainability
- Optimized images and assets using Next.js Image component
- Contact form with validation
- Modernized modal-based project showcases

## Getting Started

### Prerequisites

- Node.js 14.x or higher
- npm or yarn

### Installation

1. Clone the repository (if you haven't already)
   ```bash
   git clone <repository-url>
   cd ShubhSinghGarg.github.io/portfolio-next
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Copy static assets from the original website
   ```bash
   # Run from the portfolio-next directory
   ./copy-assets.sh
   ```

4. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result

### Building for Production

```bash
npm run build
# or
yarn build
```

Then to start the production server:

```bash
npm run start
# or
yarn start
```

## Project Structure

- `pages/` - Next.js pages including the index page and API routes
  - `api/` - API routes for handling form submissions, etc.
  - `_app.js` - Custom App component for global configurations
  - `_document.js` - Custom Document component for modifying HTML structure
  - `index.js` - Main page with all sections

- `components/` - React components organized by feature
  - `Navigation.js` - Fixed side navigation
  - `VideoBackground.js` - Reusable video background component
  - `Footer.js` - Site footer component
  - `sections/` - Main page sections (Home, Education, etc.)
  - `modals/` - Modal components for projects

- `public/` - Static assets (copied from original site)
  - `css/` - CSS stylesheets
  - `img/` - Image files
  - `js/` - JavaScript files
  - `videos/` - Video files
  - `fonts/` - Font files

- `styles/` - SCSS stylesheets
  - `globals.scss` - Global styles
  - `variables.scss` - SCSS variables

## Future Improvements

- Replace jQuery dependencies with native React alternatives
- Implement lazy loading for all sections and images
- Add dark/light mode toggle
- Enhance accessibility features
- Add blog/articles section
- Implement internationalization (i18n) for multiple languages
- Add more interactive project demonstrations
- Create downloadable resume in PDF format

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
