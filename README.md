# Linu Zenas Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. This website showcases the work and skills of Petlu Linu Zenas Paul, a 3rd-year B.Tech IT student and aspiring frontend developer.

## 🚀 Features

### Design & Visual
- **Modern UI/UX**: Clean, futuristic, and minimalistic layout
- **Color Palette**: Deep navy blue primary, bright cyan/teal accent
- **Typography**: Poppins, Manrope, and Inter fonts for modern readability
- **Glassmorphism**: Soft shadow effects and backdrop blur for cards
- **Smooth Animations**: Framer Motion powered micro-interactions and transitions

### Sections
1. **Hero Section**: Animated typing effect with call-to-action buttons
2. **About Me**: Profile image, skills grid, and journey timeline
3. **Projects**: Featured projects with hover effects and tech stack
4. **Experience**: Professional timeline with leadership roles
5. **Blog**: Publications and Medium articles
6. **Contact**: Interactive contact form with social media links

### Technical Features
- **Responsive Design**: Fully responsive across all devices
- **Dark/Light Mode**: Toggle with smooth transitions
- **Smooth Scrolling**: Section-to-section navigation
- **SEO Optimized**: Meta tags, Open Graph, and structured data
- **Performance**: Optimized images and lazy loading
- **Accessibility**: ARIA labels and keyboard navigation

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Particles**: TSParticles
- **Deployment**: Vercel (recommended)

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/linuzenas/portfolio-website.git
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Customization

### Colors
Update the color palette in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    // Your primary colors
  },
  accent: {
    // Your accent colors
  }
}
```

### Content
- **Personal Info**: Update `components/About.tsx`
- **Projects**: Modify `components/Projects.tsx`
- **Experience**: Edit `components/Experience.tsx`
- **Contact**: Update `components/Contact.tsx`

### Images
Replace placeholder images in the `public` folder:
- `public/og-image.jpg` - Open Graph image
- `public/projects/` - Project screenshots
- `public/blog/` - Blog post images

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
- **Netlify**: Build command: `npm run build`, Publish directory: `.next`
- **GitHub Pages**: Use `next export` for static export

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/linuzenas/portfolio-website/issues).

## 📞 Contact

**Petlu Linu Zenas Paul**
- Email: petluzenas@gmail.com
- LinkedIn: [linkedin.com/in/linuzenas](https://linkedin.com/in/linuzenas)
- GitHub: [github.com/linuzenas](https://github.com/linuzenas)

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Icons by [Lucide](https://lucide.dev/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
- Particles by [TSParticles](https://particles.js.org/)

---

Made with ❤️ by Linu Zenas
