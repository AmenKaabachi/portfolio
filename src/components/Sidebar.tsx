'use client';

import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { 
  User, 
  Code, 
  FolderOpen, 
  FileText, 
  Sun, 
  Moon, 
  Download,
  Languages,
  Menu,
  X,
  BookOpen,
  Briefcase,
  GraduationCap,
  MessageSquare
} from 'lucide-react';
import Flag from 'react-world-flags';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';

export default function Sidebar() {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, tString } = useLanguage();
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('mobile-menu-open');
    } else {
      document.body.classList.remove('mobile-menu-open');
    }
    
    // Cleanup on unmount
    return () => {
      document.body.classList.remove('mobile-menu-open');
    };
  }, [isOpen]);

  // Scroll listener for active section highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'projects', 'skills', 'experience', 'education', 'blog', 'contact'];
      
      // Get current scroll position with an offset (half the window height works well)
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      let currentSection = '';
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const element = document.getElementById(sectionId);
        
        if (element) {
          // If the scroll position has passed the top of this section
          if (scrollPosition >= element.offsetTop) {
            currentSection = sectionId;
            break;
          }
        }
      }
      
      // If we're at the very top, make sure 'about' is active (which maps to '')
      if (window.scrollY < 100 || currentSection === 'about') {
        setActiveSection('');
      } else {
        setActiveSection(currentSection);
      }
    };

    // Call once to set initial state
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navigation = [
    { name: tString('about'), href: '/', icon: User },
    { name: tString('projects'), href: '#projects', icon: FolderOpen },
    { name: tString('skills'), href: '#skills', icon: Code },
    { name: tString('experience'), href: '#experience', icon: Briefcase },
    { name: tString('education'), href: '#education', icon: GraduationCap },
    { name: tString('blog'), href: '#blog', icon: BookOpen },
    { name: tString('contact'), href: '#contact', icon: MessageSquare },
    { name: tString('resume'), href: '/resume', icon: FileText },
  ];

  const handleNavClick = (href: string) => {
    if (href === '/') {
      // About section - always navigate to home page
      router.push('/');
    } else if (href.startsWith('#')) {
      // Section links
      if (pathname === '/resume') {
        // Navigate to home page with hash
        router.push(`/${href}`);
      } else {
        // We're already on the home page, just scroll to section
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
    setIsOpen(false);
  };

  // Determine if a navigation item is active
  const isNavItemActive = (item: { href: string }) => {
    if (item.href === '/') {
      return pathname === '/' && activeSection === '';
    } else if (item.href === '/resume') {
      return pathname === '/resume';
    } else if (item.href.startsWith('#')) {
      const sectionId = item.href.substring(1);
      return activeSection === sectionId;
    }
    return false;
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        className="mobile-menu-button md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="mobile-overlay md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={cn(
        "fixed left-0 top-0 h-screen bg-background border-r border-border z-50 transform transition-transform duration-300 ease-in-out",
        // Desktop styles - always visible and properly sized
        "md:w-64 md:p-6 md:translate-x-0",
        // Mobile styles - add specific class for open state
        isOpen ? "sidebar-open" : "-translate-x-full md:translate-x-0"
      )}>
        <div className="flex flex-col h-full md:flex md:flex-col md:h-full mobile-sidebar-content">
          {/* Mobile Close Button */}
          <Button
            variant="ghost"
            size="icon"
            className="mobile-close-button md:hidden"
            onClick={() => setIsOpen(false)}
          >
            <X className="h-6 w-6" />
          </Button>

          {/* Header */}
          <div className="mb-8 mt-8 md:mt-0 md:mb-8 mobile-sidebar-header">
            <h1 className="text-2xl md:text-xl font-bold text-foreground mb-2 md:mb-2">
              Amen KAABACHI
            </h1>
            <p className="text-sm text-muted-foreground">
              {tString('fullStackDeveloper')}
            </p>
          </div>

          {/* Navigation */}
          <nav className="space-y-2 flex-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = isNavItemActive(item);
              
              return (
                <div key={item.name}>
                  {item.href === '/resume' ? (
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        'flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors',
                        'md:text-sm md:py-2 md:px-3 max-md:text-lg max-md:py-3 max-md:px-4',
                        isActive 
                          ? 'bg-primary text-primary-foreground' 
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                      )}
                    >
                      <Icon className="h-4 w-4 md:h-4 md:w-4 max-md:h-5 max-md:w-5" />
                      {item.name}
                    </Link>
                  ) : (
                    <button
                      onClick={() => handleNavClick(item.href)}
                      className={cn(
                        'w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors',
                        'md:text-sm md:py-2 md:px-3 max-md:text-lg max-md:py-3 max-md:px-4',
                        isActive 
                          ? 'bg-primary text-primary-foreground' 
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                      )}
                    >
                      <Icon className="h-4 w-4 md:h-4 md:w-4 max-md:h-5 max-md:w-5" />
                      {item.name}
                    </button>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Download Resume */}
          <div className="mb-6 max-md:mb-8 max-md:mt-6">
            <Link href="/resume" className="block" onClick={() => setIsOpen(false)}>
              <Button variant="outline" className="w-full" size="sm">
                <Download className="h-4 w-4 mr-2" />
                {tString('downloadResume')}
              </Button>
            </Link>
          </div>

          {/* Controls */}
          <div className="space-y-4 pt-4 border-t border-border max-md:space-y-6 max-md:pt-6">
            {/* Theme Toggle */}
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">
                {theme === 'light' ? 'Light' : 'Dark'}
              </span>
              <div className="flex items-center gap-2">
                <Sun className="h-4 w-4 text-muted-foreground" />
                <Switch
                  checked={theme === 'dark'}
                  onCheckedChange={toggleTheme}
                />
                <Moon className="h-4 w-4 text-muted-foreground" />
              </div>
            </div>

            {/* Language Toggle */}
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">
                <Languages className="h-4 w-4 inline mr-2" />
                Language
              </span>
              <div className="flex gap-1">
                <Button
                  variant={language === 'en' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setLanguage('en')}
                  className="h-8 px-2 text-xs"
                  title="English"
                >
                  <Flag
                    code="US"
                    style={{
                      width: '1em',
                      height: '1em',
                    }}
                  />
                </Button>
                <Button
                  variant={language === 'fr' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setLanguage('fr')}
                  className="h-8 px-2 text-xs"
                  title="Français"
                >
                  <Flag
                    code="FR"
                    style={{
                      width: '1em',
                      height: '1em',
                    }}
                  />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
