# 🚀 Portfolio - Sumit Singh Sengar

A modern, responsive portfolio website built with React.js showcasing my skills, projects, and professional experience.

![Portfolio Preview](https://img.shields.io/badge/React-18.1.0-blue?style=flat-square&logo=react) ![Build Status](https://img.shields.io/badge/build-passing-brightgreen?style=flat-square) ![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)

## ✨ Features

- **🎨 Modern Design**: Clean, responsive design with smooth animations
- **⚡ Fast Performance**: Optimized React 18 with efficient bundling
- **📱 Mobile Responsive**: Seamless experience across all devices
- **🌍 Multi-language Support**: Internationalization with react-intl
- **🎯 Smooth Navigation**: React Router with scroll-to-top functionality
- **💫 Interactive Animations**: AOS (Animate On Scroll) effects
- **🎪 Particle Background**: Dynamic particle animations with tsparticles
- **📧 Contact Integration**: Direct email and social media links
- **📝 Feedback Form**: Integrated Google Forms for user feedback
- **🎭 Typewriter Effect**: Animated text with modern typewriter-effect library

## 🛠️ Technologies Used

### Frontend
- **React.js** (v18.1.0) - Modern JavaScript library
- **React Router DOM** (v6.3.0) - Client-side routing
- **React Intl** (v5.25.0) - Internationalization
- **TypeWriter Effect** (v2.22.0) - Animated typing text
- **AOS** (v2.3.4) - Animate On Scroll library
- **React TSParticles** (v2.1.3) - Particle background effects
- **Swiper** (v8.1.4) - Touch slider component

### Styling & UI
- **CSS3** - Custom styling with modern features
- **Font Awesome** - Icon library
- **Responsive Design** - Mobile-first approach

### Development Tools
- **React Scripts** (v5.0.1) - Create React App toolchain
- **React Testing Library** - Component testing
- **Jest** - Testing framework
- **ESLint** - Code linting
- **Web Vitals** - Performance monitoring

### Deployment
- **GitHub Pages** (v6.3.0) - Static site hosting
- **Netlify/Vercel Ready** - Alternative hosting platforms

## 🚀 Quick Start

### Prerequisites
- Node.js (v14.0.0 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/sumitsingh010/portfolio-sumit-singh-sengar.git
   cd portfolio-sumit-singh-sengar
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000` to view the portfolio

## 📦 Available Scripts

### Development
```bash
npm start          # Start development server
npm test           # Run test suite
npm run build      # Create production build
npm run eject      # Eject from Create React App (one-way operation)
```

### Deployment
```bash
npm run deploy     # Deploy to GitHub Pages
npm run predeploy  # Pre-deployment build
```

## 📁 Project Structure

```
portfolio-sumit-singh-sengar/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── ButtomGet/          # Button components
│   │   ├── Content/            # Main content components
│   │   ├── DarkMode/           # Dark mode toggle
│   │   ├── Footer/             # Footer component
│   │   ├── Header/             # Navigation header
│   │   ├── Main/               # Main page sections
│   │   │   ├── About.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Project.jsx
│   │   │   └── Service.jsx
│   │   ├── ParticlesBg/        # Particle background
│   │   └── ScrollToTop/        # Scroll utilities
│   ├── context/
│   │   └── Context.jsx         # React Context for state
│   ├── cv/
│   │   └── UpdatedResume.pdf   # Resume/CV file
│   ├── img/                    # Image assets
│   ├── language/
│   │   └── en.json            # Language translations
│   ├── pages/
│   │   ├── About/             # About page
│   │   ├── Contact/           # Contact page styles
│   │   ├── Home/              # Home page
│   │   ├── Project/           # Projects page
│   │   └── Service/           # Services page
│   ├── App.js                 # Main App component
│   ├── App.css               # Global styles
│   └── index.js              # Entry point
├── package.json
└── README.md
```

## 🎨 Customization

### Personal Information
Update the following files with your information:
- `src/language/en.json` - Text content and translations
- `src/components/Main/Contact.jsx` - Contact information and social links
- `src/cv/UpdatedResume.pdf` - Replace with your resume

### Styling
- `src/App.css` - Global styles
- Component-specific CSS files in respective component folders

### Projects & Content
- `src/components/Main/Project.jsx` - Showcase your projects
- `src/img/` - Add your project images
- `src/components/Main/About.jsx` - Personal bio and skills

## 🌐 Deployment

### GitHub Pages
1. Update `homepage` in `package.json` with your GitHub Pages URL
2. Run deployment command:
   ```bash
   npm run deploy
   ```

### Netlify
1. Build the project: `npm run build`
2. Upload the `build` folder to Netlify
3. Configure custom domain (optional)

### Vercel
1. Connect your GitHub repository to Vercel
2. Vercel will automatically build and deploy on push

## 📊 Performance

- **Bundle Size**: ~173.92 kB (gzipped)
- **Load Time**: < 3 seconds on 3G
- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals**: Optimized for excellent user experience

## 🔧 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Sumit Singh Sengar**
- 📧 Email: [sengarsumit7047@gmail.com](mailto:sengarsumit7047@gmail.com)
- 💼 LinkedIn: [linkedin.com/in/sumitsingh010](https://www.linkedin.com/in/sumitsingh010/)
- 🐱 GitHub: [github.com/sumitsingh010](https://github.com/sumitsingh010)
- 📷 Instagram: [@sumit_singh._.010](https://www.instagram.com/sumit_singh._.010)

## 🙏 Acknowledgments

- **React Team** for the amazing framework
- **Create React App** for the development setup
- **AOS Library** for scroll animations
- **TSParticles** for particle effects
- **Font Awesome** for icons
- **Google Forms** for feedback integration

## 📈 Future Enhancements

- [ ] Dark/Light theme toggle
- [ ] Blog section integration
- [ ] Advanced project filtering
- [ ] Enhanced animations
- [ ] PWA (Progressive Web App) features
- [ ] Backend integration for contact form
- [ ] Performance analytics
- [ ] SEO optimization improvements

---

⭐ **Star this repository if you found it helpful!**

---

*Last updated: July 2025*
