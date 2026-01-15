# Happy Paws Pet Shop

A clean, responsive pet shop website built with Next.js, TypeScript, Tailwind CSS, and Supabase.

## Features

- **Responsive Design**: Mobile, tablet, and desktop optimized
- **Clean Architecture**: Global components, minimal abstractions
- **Smooth Animations**: Subtle fade and slide-in effects
- **Supabase Integration**: Real-time product management
- **Production Ready**: Optimized for Vercel and other platforms
- **TypeScript**: Full type safety
- **Accessible**: Semantic HTML, proper contrast ratios

## Quick Start

```bash
# Install dependencies
npm install

# Configure environment variables
cp .env.example .env.local
# Edit .env.local with your Supabase credentials

# Run development server
npm run dev
```

Visit `http://localhost:3000`

## Setup Instructions

See [SETUP.md](./SETUP.md) for detailed setup and deployment instructions.

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **Deployment**: Vercel-ready

## Project Structure

```
├── app/              # Next.js app directory
├── components/       # Reusable UI components
├── lib/             # Utilities and API clients
├── types/           # TypeScript type definitions
└── public/          # Static assets
```

## Design Principles

- Single color scheme throughout
- Consistent 8px border radius
- Unified spacing scale
- No gradients
- Smooth, intentional animations
- Clear visual hierarchy

## Pages

- **Home** (`/`): Hero section, intro, featured products
- **Products** (`/products`): Full product grid from Supabase
- **Contact**: Footer with business details

## Business Details

- **Company**: Happy Paws Pet Shop
- **Email**: hello@happypawspetshop.test
- **Support**: support@happypawspetshop.test
- **Phone**: +31 6 1234 5678

## License

MIT
