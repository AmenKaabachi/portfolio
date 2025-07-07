# Amen KAABACHI - Developer Portfolio

A modern, responsive developer portfolio built with Next.js, TypeScript, Tailwind CSS, Shadcn UI, and GSAP animations.

## 🚀 Features

- **Fixed Left Sidebar Navigation** - Easy navigation with smooth scrolling
- **Dark/Light Mode Toggle** - Seamless theme switching with system preference detection
- **Language Switcher** - Support for English and French (EN/FR)
- **Responsive Design** - Mobile-first approach with collapsible sidebar
- **Resume Page** - Professional CV layout with print-friendly styling
- **GSAP Animations** - Subtle scroll-triggered animations
- **Modern UI Components** - Built with Shadcn UI components

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI
- **Icons**: Lucide React
- **Animations**: GSAP
- **State Management**: React Context API

## 🏗️ Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Main layout with providers
│   ├── page.tsx            # Homepage with About, Skills, Projects
│   ├── resume/
│   │   └── page.tsx        # Resume page
│   └── globals.css         # Global styles
├── components/
│   ├── ui/                 # Shadcn UI components
│   └── Sidebar.tsx         # Main navigation sidebar
├── contexts/
│   ├── ThemeContext.tsx    # Theme management
│   └── LanguageContext.tsx # Internationalization
└── lib/
    └── utils.ts            # Utility functions
```

## 📋 Sections

### 🧍‍♂️ About Me
- Professional introduction
- Contact information
- Social links (Email, LinkedIn, GitHub)

### 🧠 Skills
- Programming Languages: Python, Java, C, C#
- Web Technologies: HTML, CSS, Bootstrap, React.js, Express.js, Node.js, PHP
- Mobile Development: Java, Flutter  
- Databases: SQL, NoSQL
- Languages: Arabic (Native), English (Fluent), French (C1)

### 💼 Projects
- **Analytics Platform** - React.js, Express.js, MySQL, Flutter
- **ChatGPT Clone** - C#
- **Live Chat App** - HTML, CSS, JavaScript, PHP

### 📄 Resume
- Professional CV layout
- Education and Experience
- Technical skills breakdown
- Print-friendly styling

## 🚀 Getting Started

1. **Install dependencies**:
```bash
npm install
```

2. **Run development server**:
```bash
npm run dev
```

3. **Open your browser**:
Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Theme Colors
Colors can be customized in `src/app/globals.css` using CSS custom properties.

### Content
- Update personal information in components
- Modify translations in `src/contexts/LanguageContext.tsx`
- Add/remove projects in `src/app/page.tsx`

### Animations
GSAP animations can be customized in component files. Current animations include:
- Fade-in on scroll
- Smooth section reveals
- Subtle hover effects

## 📱 Responsive Design

- **Desktop**: Fixed sidebar with full navigation
- **Mobile**: Collapsible hamburger menu
- **Print**: Optimized resume layout for PDF export

## 🔧 Build & Deploy

Build for production:
```bash
npm run build
```

Export static files:
```bash
npm run export
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Contact

**Amen KAABACHI**
- Email: kaabachiamen@gmail.com
- Phone: +216 99841331
- Location: Gafsa, Tunisia

---

*Built with ❤️ using Next.js and modern web technologies*

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
