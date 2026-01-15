# Happy Paws Pet Shop - Setup Guide

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Supabase

#### Create a Supabase Project
1. Go to [supabase.com](https://supabase.com)
2. Create a new project
3. Copy your project URL and anon key

#### Set Environment Variables
Create a `.env.local` file in the root directory:
```
NEXT_PUBLIC_SUPABASE_URL=your_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
```

#### Create Products Table
In your Supabase dashboard, run this SQL:

```sql
CREATE TABLE products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  category TEXT NOT NULL,
  emoji TEXT,
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Sample data
INSERT INTO products (name, description, price, category, emoji, featured) VALUES
('Premium Dog Food', 'High-quality dry dog food with balanced nutrition', 24.99, 'Dog Food', '🐕', true),
('Organic Cat Food', 'Natural ingredients for healthy cats', 18.99, 'Cat Food', '🐱', true),
('Rubber Ball Toy', 'Durable rubber ball for fetch and play', 8.99, 'Toys', '🎾', true),
('Chew Toy', 'Long-lasting chew toy for dogs', 12.99, 'Toys', '🦴', false),
('Scratching Post', 'Tall scratching post for cats', 34.99, 'Toys', '🌳', false),
('Leather Leash', 'Premium leather leash for dogs', 19.99, 'Accessories', '🪢', false),
('Adjustable Collar', 'Comfortable adjustable collar with ID tag', 14.99, 'Accessories', '📍', false),
('Stainless Steel Bowl', 'Durable stainless steel food bowl', 9.99, 'Accessories', '🥣', false);
```

### 3. Run Development Server
```bash
npm run dev
```

Visit `http://localhost:3000`

### 4. Build for Production
```bash
npm run build
npm start
```

## Deployment

### Vercel
1. Push code to GitHub
2. Connect repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Other Platforms
- Build: `npm run build`
- Start: `npm start`
- Ensure Node.js 18+ is available

## Project Structure

```
happy-paws/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with Header/Footer
│   ├── page.tsx           # Home page
│   ├── products/          # Products page
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Intro.tsx
│   ├── ProductGrid.tsx
│   ├── ProductCard.tsx
│   └── FeaturedProducts.tsx
├── lib/                   # Utilities
│   └── supabase.ts       # Supabase client & queries
├── types/                 # TypeScript types
│   └── index.ts
└── public/               # Static assets
```

## Design System

### Colors
- Primary: `#2D5016` (Green)
- Secondary: `#F5F5F5` (Light Gray)
- Accent: `#E8F0E3` (Light Green)
- Text: `#1A1A1A` (Dark)
- Border: `#D4D4D4` (Gray)

### Spacing Scale
- xs: 0.5rem
- sm: 1rem
- md: 1.5rem
- lg: 2rem
- xl: 3rem
- 2xl: 4rem

### Border Radius
All elements use 8px border radius for consistency.

### Typography
- Headings: Bold, system font stack
- Body: Regular weight, 16px base
- Small: 14px, reduced opacity

## Features

✓ Responsive design (mobile, tablet, desktop)
✓ Clean, minimal layout
✓ Smooth fade/slide animations
✓ Supabase integration
✓ TypeScript support
✓ Tailwind CSS styling
✓ SEO-friendly
✓ Production-ready

## Customization

### Add New Products
Insert into the `products` table in Supabase:
```sql
INSERT INTO products (name, description, price, category, emoji, featured)
VALUES ('Product Name', 'Description', 29.99, 'Category', '🎯', false);
```

### Update Colors
Edit `tailwind.config.ts` in the `colors` section.

### Modify Spacing
Edit `tailwind.config.ts` in the `spacing` section.

## Support

For issues or questions:
- Email: support@happypawspetshop.test
- Phone: +31 6 1234 5678
