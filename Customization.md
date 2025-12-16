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