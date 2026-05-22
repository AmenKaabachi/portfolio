'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import Link from 'next/link';

export default function Resume() {
  const { t } = useLanguage();

  const education = [
    {
      degree: t('educationISAMMDegree'),
      school: t('educationISAMMSchool'),
      year: t('educationISAMMYear'),
      location: t('educationISAMMLocation')
    },
    {
      degree: t('educationISAEGDegree'),
      school: t('educationISAEGSchool'),
      year: t('educationISAEGYear'),
      location: t('educationISAEGLocation')
    }
  ];

  const experience = [
    {
      title: t('experienceTitle'),
      company: t('experienceCompany'),
      period: t('experiencePeriod'),
      location: t('experienceLocation'),
      description: t('experiencePoints') as string[]
    }
  ];

  const projects = [
    {
      title: "TaskFlow — Task Management Platform",
      tech: "Next.js, TypeScript, PostgreSQL, Tailwind CSS",
      points: [
        "Developed a full-stack productivity application with authentication and task management",
        "Implemented responsive UI components and optimized database queries",
        "Built scalable REST APIs and role-based access features"
      ]
    },
    {
      title: "AI-Powered PDF Organizer",
      tech: "Python, PyTorch, BERT, Streamlit",
      points: [
        "Built an AI-based document classification and organization platform",
        "Implemented semantic similarity search using embeddings",
        "Developed an interactive Streamlit interface for real-time document management"
      ]
    },
    {
      title: "Student Performance Prediction",
      tech: "Python, Pandas, Scikit-learn",
      points: [
        "Analyzed academic datasets and trained machine learning models",
        "Performed data preprocessing, feature engineering, and evaluation",
        "Compared multiple ML algorithms to optimize prediction accuracy"
      ]
    }
  ];

  const technicalSkills = {
    "Programming Languages": "Python, JavaScript, TypeScript, Java, C, C#, SQL",
    "Web Development": "React.js, Next.js, Node.js, Express.js, Tailwind CSS, REST APIs",
    "Databases": "PostgreSQL, MySQL, MongoDB",
    "AI & Data Science": "Scikit-learn, Pandas, NumPy, PyTorch, BERT, Data Analysis",
    "Tools": "Git, GitHub, Docker, Linux, Postman"
  };

  const languages = [
    { name: "Arabic", level: "Native" },
    { name: "English", level: "Fluent" },
    { name: "French", level: "Proficient (TCF C1)" }
  ];

  return (
    <div className="min-h-screen bg-background py-12 px-8 print:py-0 print:px-0 resume-container">
      <div className="max-w-4xl mx-auto">
        {/* Actions Header */}
        <div className="flex justify-between items-center mb-8 no-print">
          <Link href="/">
            <Button variant="outline">
              &larr; Back to Portfolio
            </Button>
          </Link>
          <Button 
            onClick={() => window.print()} 
            size="lg"
          >
            <Download className="h-5 w-5 mr-2" />
            Download PDF
          </Button>
        </div>

        {/* Resume Content - ATS Friendly Format */}
        <div className="bg-white dark:bg-gray-900 shadow-sm rounded-sm p-10 print:p-0 print:shadow-none print:border-none resume-content max-w-[800px] mx-auto border border-border">
          
          {/* Header */}
          <header className="text-center mb-6 print:mb-2 pb-4 print:pb-1 border-b border-gray-300 dark:border-gray-700">
            <h1 className="text-3xl print:text-2xl font-bold mb-1 print:mb-0 text-gray-900 dark:text-gray-100 uppercase tracking-wide">Amen Kaabachi</h1>
            <p className="text-sm print:text-xs text-gray-700 dark:text-gray-300 mb-2 print:mb-0.5">Tunis, Tunisia | +216 99 841 331 | kaabachiamen@gmail.com</p>
            <div className="text-sm print:text-xs font-medium text-gray-800 dark:text-gray-200">
              <a href="https://www.linkedin.com/in/amenkaabachi/" target="_blank" rel="noreferrer" className="mx-1 hover:underline">LinkedIn</a> | <a href="https://github.com/amenkaabachi" target="_blank" rel="noreferrer" className="mx-1 hover:underline">GitHub</a> | <span className="mx-1">Portfolio</span>
            </div>
            <p className="text-sm print:text-xs font-semibold text-primary mt-2 print:mt-1 uppercase tracking-wider">
              Software Engineering Student | Full-Stack Developer | AI & Data Enthusiast
            </p>
          </header>

          <div className="space-y-6 print:space-y-3 text-gray-800 dark:text-gray-200">
            
            {/* Professional Summary */}
            <section>
              <h2 className="text-lg print:text-sm font-bold uppercase tracking-wider border-b border-gray-300 dark:border-gray-700 mb-2 print:mb-1 pb-1 print:pb-0.5 text-gray-900 dark:text-gray-100">
                Summary
              </h2>
              <p className="text-sm print:text-xs print:leading-snug leading-relaxed">
                {t('professionalSummary')}
              </p>
            </section>

            {/* Education */}
            <section>
              <h2 className="text-lg print:text-sm font-bold uppercase tracking-wider border-b border-gray-300 dark:border-gray-700 mb-2 print:mb-1 pb-1 print:pb-0.5 text-gray-900 dark:text-gray-100">
                Education
              </h2>
              <div className="space-y-3 print:space-y-1">
                {education.map((edu, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-start">
                      <h3 className="font-semibold text-sm print:text-xs">{edu.school}</h3>
                      <span className="text-sm print:text-[11px] font-medium">{edu.year}</span>
                    </div>
                    <div className="flex justify-between items-start mt-0.5 print:mt-0">
                      <p className="text-sm print:text-[11px] italic">{edu.degree}</p>
                      <span className="text-sm print:text-[11px] text-gray-600 dark:text-gray-400">{edu.location}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Experience */}
            <section>
              <h2 className="text-lg print:text-sm font-bold uppercase tracking-wider border-b border-gray-300 dark:border-gray-700 mb-2 print:mb-1 pb-1 print:pb-0.5 text-gray-900 dark:text-gray-100">
                Experience
              </h2>
              <div className="space-y-4 print:space-y-1.5">
                {experience.map((exp, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-start">
                      <h3 className="font-semibold text-sm print:text-xs">{exp.title} — {exp.company}</h3>
                      <span className="text-sm print:text-[11px] font-medium">{exp.period}</span>
                    </div>
                    <p className="text-sm print:text-[11px] text-gray-600 dark:text-gray-400 mb-1 print:mb-0.5">{exp.location}</p>
                    <ul className="list-disc list-outside ml-4 space-y-1 print:space-y-0 text-sm print:text-[11px]">
                      {exp.description.map((desc, i) => (
                        <li key={i} className="pl-1 print:pl-0">{desc}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Projects */}
            <section>
              <h2 className="text-lg print:text-sm font-bold uppercase tracking-wider border-b border-gray-300 dark:border-gray-700 mb-2 print:mb-1 pb-1 print:pb-0.5 text-gray-900 dark:text-gray-100">
                Projects
              </h2>
              <div className="space-y-4 print:space-y-1.5">
                {projects.map((project, index) => (
                  <div key={index}>
                    <h3 className="font-semibold text-sm print:text-xs">{project.title}</h3>
                    <p className="text-sm print:text-[11px] italic mb-1 print:mb-0.5 text-gray-600 dark:text-gray-400">{project.tech}</p>
                    <ul className="list-disc list-outside ml-4 space-y-1 print:space-y-0 text-sm print:text-[11px]">
                      {project.points.map((point, i) => (
                        <li key={i} className="pl-1 print:pl-0">{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Technical Skills */}
            <section>
              <h2 className="text-lg print:text-sm font-bold uppercase tracking-wider border-b border-gray-300 dark:border-gray-700 mb-2 print:mb-1 pb-1 print:pb-0.5 text-gray-900 dark:text-gray-100">
                Skills
              </h2>
              <div className="space-y-1.5 print:space-y-0 text-sm print:text-[11px]">
                {Object.entries(technicalSkills).map(([category, skills]) => (
                  <div key={category} className="flex">
                    <span className="font-semibold w-40 print:w-32 flex-shrink-0">{category}:</span>
                    <span>{skills}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Languages */}
            <section>
              <h2 className="text-lg print:text-sm font-bold uppercase tracking-wider border-b border-gray-300 dark:border-gray-700 mb-2 print:mb-1 pb-1 print:pb-0.5 text-gray-900 dark:text-gray-100">
                Languages
              </h2>
              <div className="text-sm print:text-[11px] flex gap-6 print:gap-4">
                {languages.map((lang, index) => (
                  <span key={index} className="flex gap-1">
                    <span className="font-semibold">{lang.name}:</span>
                    <span>{lang.level}</span>
                  </span>
                ))}
              </div>
            </section>
            
          </div>
        </div>
      </div>
    </div>
  );
}
