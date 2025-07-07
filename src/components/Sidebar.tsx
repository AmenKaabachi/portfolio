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
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useState } from 'react';

export default function Sidebar() {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, tString } = useLanguage();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: tString('about'), href: '/', icon: User },
    { name: tString('skills'), href: '#skills', icon: Code },
    { name: tString('projects'), href: '#projects', icon: FolderOpen },
    { name: tString('blog'), href: '#blog', icon: BookOpen },
    { name: tString('resume'), href: '/resume', icon: FileText },
  ];

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={cn(
        "fixed left-0 top-0 h-full w-64 bg-background border-r border-border p-6 z-50 transform transition-transform duration-300 ease-in-out",
        "md:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      )}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="mb-8 mt-8 md:mt-0">
            <h1 className="text-2xl font-bold text-foreground">
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
              const isActive = item.href === '/' ? pathname === '/' : pathname === item.href;
              
              return (
                <div key={item.name}>
                  {item.href.startsWith('#') ? (
                    <button
                      onClick={() => handleNavClick(item.href)}
                      className={cn(
                        'w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors',
                        isActive 
                          ? 'bg-primary text-primary-foreground' 
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                      )}
                    >
                      <Icon className="h-4 w-4" />
                      {item.name}
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        'flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors',
                        isActive 
                          ? 'bg-primary text-primary-foreground' 
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                      )}
                    >
                      <Icon className="h-4 w-4" />
                      {item.name}
                    </Link>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Download Resume */}
          <div className="mb-6">
            <Link href="/resume" className="block" onClick={() => setIsOpen(false)}>
              <Button variant="outline" className="w-full" size="sm">
                <Download className="h-4 w-4 mr-2" />
                {tString('downloadResume')}
              </Button>
            </Link>
          </div>

          {/* Controls */}
          <div className="space-y-4 pt-4 border-t border-border">
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
