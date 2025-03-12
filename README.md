# 8bitbyadog Portfolio Website

An interactive, animated portfolio website showcasing pixel art and animation work through a unique, gamified experience.

## 🎮 Features

- Interactive pixel art companion that follows cursor movements
- Smooth animations and transitions using Framer Motion
- Responsive design with mobile-first approach
- Pixel art styling with custom Tailwind components
- Three.js integration for 3D elements
- Easter eggs and hidden interactive elements
- Performance-optimized animations and assets

## 🚀 Getting Started

### Prerequisites

- Node.js 16.x or higher
- npm 7.x or higher

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/8bitbyadog-portfolio.git
   cd 8bitbyadog-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🛠️ Built With

- [React](https://reactjs.org/) - UI Framework
- [TypeScript](https://www.typescriptlang.org/) - Type Safety
- [Vite](https://vitejs.dev/) - Build Tool
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [Three.js](https://threejs.org/) - 3D Graphics
- [GSAP](https://greensock.com/gsap/) - Advanced Animations
- [Lottie](https://airbnb.io/lottie/) - Vector Animations

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/       # Layout components (Header, Footer)
│   ├── ui/           # Reusable UI components
│   ├── three/        # Three.js components and scenes
│   └── animations/   # Animation components and effects
├── pages/           # Page components
├── hooks/           # Custom React hooks
├── styles/          # Global styles and Tailwind config
├── assets/          # Static assets (images, fonts, audio)
├── utils/           # Utility functions
├── contexts/        # React contexts
└── types/           # TypeScript type definitions
```

## 🎨 Customization

### Themes

The site uses a custom Tailwind configuration with pixel art-inspired design tokens. You can modify the theme in `tailwind.config.js`.

### Animations

Animation variants and transitions are defined in component files. Global animation utilities can be found in `src/styles/index.css`.

### Pixel Art Assets

Place pixel art assets in `src/assets/images/`. The site uses the following conventions:
- Character sprites: 32x32px
- UI elements: 16x16px or 32x32px
- Background tiles: 64x64px

## 🚀 Deployment

Build the project for production:

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment to your preferred hosting platform.

## 🔍 Easter Eggs

The site includes several hidden interactive elements:
- Konami code implementation
- Hidden pixel art characters
- Secret sound effects
- Interactive background elements

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. 