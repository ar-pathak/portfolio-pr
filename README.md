# 🚀 Arsan Pathak - Personal Portfolio

A modern, fully responsive personal portfolio website built with **Next.js**, **Tailwind CSS**, and **Framer Motion**. Features a clean design, smooth animations, and professional presentation perfect for showcasing development skills and projects.

## ✨ Features

### 🎨 Design & UX
- **Responsive Design**: Mobile-first approach with breakpoints for all devices
- **Dark/Light Theme**: Toggle with system preference detection and persistence
- **Smooth Animations**: Framer Motion powered transitions and micro-interactions
- **Modern UI**: Clean, minimal design with soft shadows and rounded corners
- **Professional Typography**: Inter font with proper hierarchy and spacing

### 🧭 Navigation & Sections
- **Sticky Navigation**: Smooth scrolling with active section highlighting
- **Hero Section**: Animated typewriter effect, profile image, and social links
- **About Me**: Professional bio with statistics and downloadable resume
- **Skills**: Interactive progress bars and tech stack showcase
- **Projects**: Grid layout with hover effects and live demo links
- **Experience**: Timeline layout with work history and achievements
- **Contact**: Working contact form with EmailJS integration
- **Footer**: Quick links and social media connections

### ⚡ Performance & SEO
- **Optimized Images**: Next.js Image component with lazy loading
- **SEO Ready**: Proper meta tags, Open Graph, and Twitter cards
- **Performance**: Lightweight bundle with code splitting
- **Accessibility**: ARIA labels, semantic HTML, and keyboard navigation

## 🛠️ Tech Stack

- **Framework**: Next.js 13 with App Router
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **UI Components**: Radix UI (shadcn/ui)
- **Forms**: React Hook Form with Zod validation
- **Email Service**: EmailJS
- **Theme**: next-themes
- **Icons**: Lucide React
- **TypeScript**: Full type safety

## 🚀 Getting Started

### Prerequisites
- Node.js 18.0 or later
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/arsanpathak/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up EmailJS (Optional)**
   - Create an account at [EmailJS](https://www.emailjs.com/)
   - Create a service and email template
   - Update the EmailJS configuration in `components/contact.tsx`:
     ```javascript
     // Replace these with your actual EmailJS credentials
     const SERVICE_ID = 'your_service_id';
     const TEMPLATE_ID = 'your_template_id';
     const PUBLIC_KEY = 'your_public_key';
     ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/              # shadcn/ui components
│   ├── navbar.tsx       # Navigation component
│   ├── hero.tsx         # Hero section
│   ├── about.tsx        # About section
│   ├── skills.tsx       # Skills section
│   ├── projects.tsx     # Projects showcase
│   ├── experience.tsx   # Timeline component
│   ├── contact.tsx      # Contact form
│   ├── footer.tsx       # Footer component
│   ├── scroll-to-top.tsx
│   └── theme-provider.tsx
├── lib/
│   └── utils.ts         # Utility functions
├── public/              # Static assets
└── README.md
```

## 🎯 Customization Guide

### 1. **Personal Information**
Update the following files with your information:
- `components/hero.tsx` - Name, title, and intro text
- `components/about.tsx` - Bio, stats, and achievements  
- `components/skills.tsx` - Your skills and proficiency levels
- `components/projects.tsx` - Your projects with links and descriptions
- `components/experience.tsx` - Work history and education
- `components/contact.tsx` - Contact information
- `app/layout.tsx` - Meta tags and SEO information

### 2. **Styling & Colors**
- **Primary Colors**: Modify the gradient colors in Tailwind classes
- **Theme**: Customize colors in `app/globals.css`
- **Typography**: Change font family in `app/layout.tsx`

### 3. **Images**
Replace placeholder images with your own:
- Profile pictures in Hero and About sections
- Project screenshots in Projects section
- Update image URLs or add images to `/public` directory

### 4. **Social Links**
Update social media URLs in:
- `components/hero.tsx`
- `components/contact.tsx` 
- `components/footer.tsx`

## 📧 Contact Form Setup

The contact form uses EmailJS for sending emails. To set it up:

1. **Create EmailJS Account**
   - Sign up at [emailjs.com](https://www.emailjs.com/)
   - Create an email service (Gmail, Outlook, etc.)
   - Create an email template

2. **Configure Template**
   Your email template should include these variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{message}}` - Message content
   - `{{to_name}}` - Your name

3. **Update Configuration**
   Replace the placeholders in `components/contact.tsx`:
   ```javascript
   const SERVICE_ID = 'your_service_id';
   const TEMPLATE_ID = 'your_template_id'; 
   const PUBLIC_KEY = 'your_public_key';
   ```

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically with each push

### Netlify
1. Build the project: `npm run build`
2. Upload the `out` folder to [Netlify](https://netlify.com)

### Manual Hosting
1. Run `npm run build` to create the production build
2. Upload the generated `out` folder to your hosting provider

## 🎨 Design Philosophy

This portfolio follows modern web design principles:

- **Minimalism**: Clean, uncluttered interface focusing on content
- **Consistency**: Uniform spacing, colors, and typography throughout
- **Accessibility**: WCAG compliant with proper contrast and navigation
- **Performance**: Optimized loading with lazy images and code splitting
- **Mobile-First**: Responsive design starting from mobile devices

## 📊 Performance Features

- ⚡ **Next.js Optimizations**: Automatic code splitting and image optimization
- 🖼️ **Lazy Loading**: Images load as they come into view
- 🎭 **Animation Performance**: Hardware-accelerated CSS transforms
- 📱 **Mobile Optimized**: Fast loading on mobile networks
- 🔍 **SEO Optimized**: Perfect Lighthouse scores

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 💬 Support

If you have any questions or need help customizing the portfolio:

- 📧 Email: arsan.pathak@example.com
- 🐙 GitHub: [@arsanpathak](https://github.com/arsanpathak)
- 💼 LinkedIn: [Arsan Pathak](https://linkedin.com/in/arsanpathak)

---

⭐ **If you found this helpful, please give it a star on GitHub!**