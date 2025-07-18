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
  BookOpen
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

  // Intersection Observer for active section highlighting
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the section that's most visible
        let mostVisibleSection = '';
        let maxVisibilityRatio = 0;

        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > maxVisibilityRatio) {
            maxVisibilityRatio = entry.intersectionRatio;
            mostVisibleSection = entry.target.id;
          }
        });

        // If no section is intersecting significantly, check scroll position
        if (maxVisibilityRatio < 0.3) {
          const scrollPosition = window.scrollY + window.innerHeight / 2;
          const sectionIds = ['skills', 'projects', 'blog'];
          
          for (let i = sectionIds.length - 1; i >= 0; i--) {
            const element = document.getElementById(sectionIds[i]);
            if (element && scrollPosition >= element.offsetTop) {
              mostVisibleSection = sectionIds[i];
              break;
            }
          }
        }

        // Set active section, default to empty string for about section
        if (mostVisibleSection && ['skills', 'projects', 'blog'].includes(mostVisibleSection)) {
          setActiveSection(mostVisibleSection);
        } else if (window.scrollY < 200) {
          setActiveSection(''); // About section (top of page)
        }
      },
      {
        threshold: [0.1, 0.3, 0.5, 0.7],
        rootMargin: '-20% 0px -20% 0px' // Only trigger when section is well into view
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const navigation = [
    { name: tString('about'), href: '/', icon: User },
    { name: tString('skills'), href: '#skills', icon: Code },
    { name: tString('projects'), href: '#projects', icon: FolderOpen },
    { name: tString('blog'), href: '#blog', icon: BookOpen },
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
