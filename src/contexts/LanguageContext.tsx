'use client';

import { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    about: 'About',
    skills: 'Skills',
    projects: 'Projects',
    resume: 'Resume',
    fullStackDeveloper: 'Full-Stack Developer',
    location: 'Gafsa, Tunisia',
    email: 'Email',
    phone: 'Phone',
    bio: 'Full-Stack Developer focused on building web and mobile solutions.\nBusiness Computing graduate.',
    programming: 'Programming',
    web: 'Web',
    mobile: 'Mobile',
    databases: 'Databases',
    languages: 'Languages',
    education: 'Education',
    experience: 'Experience',
    technicalSkills: 'Technical Skills',
    interests: 'Interests',
    analyticsplatform: 'Analytics Platform',
    chatgptClone: 'ChatGPT Clone',
    liveChatApp: 'Live Chat App',
    viewProject: 'View on GitHub',
    arabicNative: 'Arabic (Native)',
    englishFluent: 'English (Fluent)',
    frenchC1: 'French (C1)',
    analyticsDesc: 'Full-stack analytics platform with dashboard and mobile app',
    chatgptDesc: 'AI-powered chat application built with C#',
    liveChatDesc: 'Real-time chat application with modern UI',
    downloadResume: 'Download Resume'
  },
  fr: {
    about: 'À propos',
    skills: 'Compétences',
    projects: 'Projets',
    resume: 'CV',
    fullStackDeveloper: 'Développeur Full-Stack',
    location: 'Gafsa, Tunisie',
    email: 'Email',
    phone: 'Téléphone',
    bio: 'Développeur Full-Stack axé sur la création de solutions web et mobiles.\nDiplômé en Informatique de Gestion.',
    programming: 'Programmation',
    web: 'Web',
    mobile: 'Mobile',
    databases: 'Bases de données',
    languages: 'Langues',
    education: 'Formation',
    experience: 'Expérience',
    technicalSkills: 'Compétences techniques',
    interests: 'Intérêts',
    analyticsplatform: 'Plateforme d\'analyse',
    chatgptClone: 'Clone ChatGPT',
    liveChatApp: 'App de chat en direct',
    viewProject: 'Voir sur GitHub',
    arabicNative: 'Arabe (Natif)',
    englishFluent: 'Anglais (Courant)',
    frenchC1: 'Français (C1)',
    analyticsDesc: 'Plateforme d\'analyse full-stack avec tableau de bord et app mobile',
    chatgptDesc: 'Application de chat IA construite avec C#',
    liveChatDesc: 'Application de chat en temps réel avec interface moderne',
    downloadResume: 'Télécharger le CV'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('language', language);
    }
  }, [language, mounted]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[Language]] || key;
  };

  if (!mounted) {
    return null;
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
