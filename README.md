# Redefined IT Solutions

A modern, responsive corporate website for Redefined IT Solutions Pvt Ltd, built with Next.js, Tailwind CSS, and Framer Motion.

## Features

- **Hero Section**: Eye-catching introduction with company logo and call-to-action buttons
- **Services Section**: Showcase of IT services with animated cards
- **Why Choose Us**: Key differentiators with smooth animations
- **About Us**: Company description with visual elements
- **Contact Section**: Contact form and information
- **Footer**: Links and copyright information
- **Dark Mode**: Toggle between light and dark themes
- **Admin Dashboard**: Simple admin interface at `/admin` for managing business data

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Themes**: next-themes for dark mode
- **Language**: TypeScript

## Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/redefineditsolutions/Redefined-IT-Solution.git
   cd Redefined-IT-Solution
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and visit [http://localhost:3000](http://localhost:3000)

## Build for Production

```bash
npm run build
npm start
```

## Deployment to Vercel

1. **Push your code to GitHub**:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically detect Next.js and deploy

3. **Access your site**:
   - Your website will be live at `https://your-project-name.vercel.app`
   - Admin dashboard at `https://your-project-name.vercel.app/admin`

## Project Structure

```
src/
├── app/
│   ├── admin/
│   │   └── page.tsx          # Admin dashboard
│   ├── layout.tsx            # Root layout with theme provider
│   ├── page.tsx              # Homepage
│   └── globals.css           # Global styles
└── components/
    ├── Logo.tsx              # Company logo component
    └── ThemeToggle.tsx       # Dark mode toggle
```

## Customization

- **Colors**: Update `tailwind.config.js` for custom color schemes
- **Content**: Modify sections in `src/app/page.tsx`
- **Logo**: Replace SVG in `src/components/Logo.tsx`

## License

© 2024 Redefined IT Solutions Pvt Ltd. All rights reserved.