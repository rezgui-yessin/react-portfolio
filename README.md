# Modern Portfolio Website

A stunning, modern personal portfolio website built with React.js, featuring smooth animations, glassmorphism design, and a futuristic dark mode UI.

## 🚀 Features

- **Responsive Design**: Fully responsive across mobile, tablet, and desktop devices
- **Modern UI/UX**: Dark mode with glassmorphism effects and gradient accents
- **Smooth Animations**: Powered by Framer Motion for elegant page transitions and interactions
- **SEO Optimized**: Comprehensive meta tags and semantic HTML structure
- **Sections Included**:
  - 🎯 Hero Section with animated background and social links
  - 👤 About Me with professional photo placeholder and quick stats
  - 💻 Skills Section with animated progress bars and technology icons
  - 🚀 Projects Showcase with hover effects and gradients
  - 📚 Experience & Education timeline with alternating layout
  - 📧 Contact Form with social media integration
  - 🔗 Sticky Navbar with scroll progress indicator

## 🛠️ Tech Stack

- **React.js** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Scroll** - Smooth scrolling navigation
- **React Icons** - Icon library

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🎨 Customization

### Update Personal Information

1. **Name and Title**: Edit the text in `src/components/Hero.jsx` and `src/components/Navbar.jsx`
2. **About Section**: Modify the biography and stats in `src/components/About.jsx`
3. **Skills**: Update the skills array in `src/components/Skills.jsx`
4. **Projects**: Edit project details in `src/components/Projects.jsx`
5. **Experience**: Modify timeline items in `src/components/Experience.jsx`
6. **Contact Info**: Update email, phone, and social links in `src/components/Contact.jsx`

### Change Colors

Edit the color scheme in `tailwind.config.js`:
```javascript
colors: {
  background: "#0f172a", // Main background
  surface: "#1e293b",    // Card backgrounds
  primary: "#3b82f6",    // Primary accent
  secondary: "#8b5cf6",  // Secondary accent
  accent: "#06b6d4",     // Tertiary accent
}
```

### Add Your Profile Picture

Replace the emoji placeholder in `src/components/About.jsx` with an actual image:
```jsx
<img 
  src="/path/to/your/image.jpg" 
  alt="Your Name" 
  className="w-full h-full object-cover"
/>
```

### Update Project Images

Generate or add images for your projects and replace the emoji placeholders in `src/components/Projects.jsx`.

## 📁 Project Structure

```
portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx      # Navigation with scroll progress
│   │   ├── Hero.jsx        # Landing section
│   │   ├── About.jsx       # About me section
│   │   ├── Skills.jsx      # Skills showcase
│   │   ├── Projects.jsx    # Project cards
│   │   ├── Experience.jsx  # Timeline
│   │   ├── Contact.jsx     # Contact form
│   │   └── Footer.jsx      # Footer
│   ├── App.jsx             # Main app component
│   ├── index.css           # Global styles
│   └── main.jsx            # Entry point
├── index.html
├── tailwind.config.js      # Tailwind configuration
├── package.json
└── README.md
```

## 🚀 Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist/` folder.

## 📝 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Yassine**
- IoT & Software Engineering Student

---

Made with ❤️ using React and Tailwind CSS
