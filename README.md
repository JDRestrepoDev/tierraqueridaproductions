# Tierra Querida - Orchestra & Productions

A modern React + Vite + TypeScript + TailwindCSS website for Tierra Querida Orchestra & Productions.

## Features

- **Modern Tech Stack**: React 18, Vite, TypeScript, TailwindCSS
- **Responsive Design**: Mobile-first approach with TailwindCSS
- **React Router**: Client-side routing with nested layouts
- **Component Architecture**: Modular, reusable components
- **TypeScript**: Full type safety throughout the application

## Project Structure

```
src/
├── main.tsx                 # Application entry point
├── App.tsx                  # Main app component with routing
├── index.css               # Global styles with TailwindCSS
├── layout/
│   └── Layout.tsx           # Layout wrapper (Header + Footer)
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Footer.tsx          # Site footer
│   ├── Hero.tsx            # Hero section component
│   ├── Gallery.tsx         # Gallery component
│   ├── Shows.tsx          # Shows/events component
│   ├── Productions.tsx    # Productions/services component
│   └── ContactForm.tsx    # Contact form component
└── pages/
    ├── Home.tsx           # Home page
    ├── Gallery.tsx        # Gallery page
    ├── Shows.tsx          # Shows page
    ├── Productions.tsx    # Productions page
    └── Contact.tsx        # Contact page
```

## Routes

- `/` - Home page with hero, about, gallery preview, shows preview, and contact CTA
- `/gallery` - Full gallery of past events and performances
- `/shows` - Upcoming shows and events
- `/productions` - Production services and capabilities
- `/contact` - Contact form and business information

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open [http://localhost:5173](http://localhost:5173) to view the application.

### Building for Production

To create a production build:

```bash
npm run build
```

This builds the app for production to the `dist` folder.

## Technologies Used

- **React 18**: Modern React with hooks
- **Vite**: Fast build tool and development server
- **TypeScript**: Type safety and better developer experience
- **TailwindCSS**: Utility-first CSS framework
- **React Router**: Client-side routing
- **Google Fonts**: Playfair Display and Open Sans

## Customization

The website uses TailwindCSS with custom color palette:

```javascript
colors: {
  'deep-red': '#8B0000',
  'gold': '#FFD700',
  'turquoise': '#40E0D0',
}
```

## Component Features

- **Header**: Responsive navigation with mobile menu
- **Hero**: Animated hero section with call-to-action buttons
- **Gallery**: Grid layout for past events with placeholder images
- **Shows**: Event cards with dates, locations, and ticket buttons
- **Productions**: Service cards with icons and descriptions
- **ContactForm**: Form with validation and submission handling
- **Footer**: Links, contact info, and branding

## Development

The project uses:
- ESLint for code linting
- TypeScript for type checking
- Vite for fast development and building
- TailwindCSS for styling

## License

© 2025 Tierra Querida Orchestra & Productions. All rights reserved.