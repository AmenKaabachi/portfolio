'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Download,
  GraduationCap,
  Briefcase
} from 'lucide-react';

export default function Resume() {
  useLanguage();

  const education = [
    {
      degree: "Bachelor's in Business Information Systems",
      school: "University of Gafsa",
      year: "2020-2023",
      location: "Gafsa, Tunisia"
    }
  ];

  const experience = [
    {
      title: "Full-Stack Developer",
      company: "Freelance",
      period: "2023 - Present",
      location: "Gafsa, Tunisia",
      description: [
        "Developed web and mobile applications using React.js, Node.js, and Flutter",
        "Built analytics platform for final year project with React.js and MySQL",
        "Created various projects including chat applications and real-time systems"
      ]
    }
  ];

  const technicalSkills = {
    "Languages": ["Python", "Java", "C", "C#", "JavaScript", "PHP"],
    "Frontend": ["HTML", "CSS", "Bootstrap", "Tailwind CSS", "React.js", "Next.js"],
    "Backend": ["Express.js", "Node.js", "PHP"],
    "Mobile": ["Java", "Flutter"],
    "Database": ["SQL", "NoSQL", "MySQL"],
    "Tools": ["Git", "REST APIs", "Responsive Design"]
  };

  const languages = [
    { name: "Arabic", level: "Native" },
    { name: "English", level: "Fluent" },
    { name: "French", level: "C1" }
  ];

  const interests = [
    "Web Development ,",
    "Mobile Apps ,",
    "Problem Solving",
  ];

  return (
    <div className="min-h-screen bg-background py-12 px-8 resume-container">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 no-print">
          <Button 
            onClick={() => window.print()} 
            className="mb-6"
            size="lg"
          >
            <Download className="h-5 w-5 mr-2" />
            Download PDF
          </Button>
        </div>

        <div className="bg-white dark:bg-gray-900 shadow-lg rounded-lg overflow-hidden resume-content">
          {/* Header Section */}
          <div className="bg-primary text-primary-foreground p-6 gradient-code resume-header">
            <div className="text-center">
              <h1 className="text-3xl font-bold mb-2">Amen KAABACHI</h1>
              <p className="text-lg mb-3">Full-Stack Developer</p>
              <div className="flex flex-wrap justify-center gap-4 text-sm contact-info">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  kaabachiamen@gmail.com
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  +216 99841331
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Gafsa, Tunisia
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 space-y-6 resume-body">
            {/* Professional Summary */}
            <section className="resume-section">
              <h2 className="text-xl font-bold mb-3 text-foreground border-b-2 border-primary pb-1">
                Professional Summary
              </h2>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Dedicated Full-Stack Developer with expertise in building clean, scalable, and efficient 
                web and mobile applications. Business Information Systems graduate with a passion for 
                solving real-world problems through technology.
              </p>
            </section>

            {/* Education & Experience in same row */}
            <div className="resume-grid">
              {/* Education */}
              <section className="resume-section">
                <h2 className="text-xl font-bold mb-3 text-foreground border-b-2 border-primary pb-1">
                  <GraduationCap className="inline h-5 w-5 mr-1" />
                  Education
                </h2>
                <div className="space-y-2">
                  {education.map((edu, index) => (
                    <div key={index} className="resume-card">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-semibold text-sm">{edu.degree}</h3>
                        <span className="resume-badge">
                          {edu.year}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-xs">{edu.school}</p>
                      <p className="text-xs text-muted-foreground">{edu.location}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Experience */}
              <section className="resume-section">
                <h2 className="text-xl font-bold mb-3 text-foreground border-b-2 border-primary pb-1">
                  <Briefcase className="inline h-5 w-5 mr-1" />
                  Experience
                </h2>
                <div className="space-y-2">
                  {experience.map((exp, index) => (
                    <div key={index} className="resume-card">
                      <div className="flex justify-between items-start mb-1">
                        <div>
                          <h3 className="font-semibold text-sm">{exp.title}</h3>
                          <p className="text-muted-foreground text-xs">{exp.company}</p>
                        </div>
                        <div className="text-right">
                          <span className="resume-badge">
                            {exp.period}
                          </span>
                        </div>
                      </div>
                      <ul className="list-disc list-inside space-y-0 text-xs text-muted-foreground mt-2">
                        {exp.description.slice(0, 2).map((desc, i) => (
                          <li key={i}>{desc}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Technical Skills - Compact Layout */}
            <section className="resume-section">
              <h2 className="text-xl font-bold mb-3 text-foreground border-b-2 border-primary pb-1">
                Technical Skills
              </h2>
              <div className="skills-compact">
                {Object.entries(technicalSkills).map(([category, skills]) => (
                  <div key={category} className="resume-card">
                    <h3 className="font-semibold text-xs mb-1 text-primary">{category}</h3>
                    <div className="flex flex-wrap gap-1">
                      {skills.map((skill) => (
                        <span key={skill} className="resume-badge text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Languages & Interests - Side by Side */}
            <div className="side-sections">
              {/* Languages */}
              <section className="resume-section">
                <h2 className="text-xl font-bold mb-3 text-foreground border-b-2 border-primary pb-1">
                  Languages
                </h2>
                <div className="resume-card">
                  <div className="space-y-2">
                    {languages.map((lang, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="font-medium text-sm">{lang.name}</span>
                        <span className="resume-badge">{lang.level}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Interests */}
              <section className="resume-section">
                <h2 className="text-xl font-bold mb-3 text-foreground border-b-2 border-primary pb-1">
                  Interests
                </h2>
                <div className="resume-card">
                  <div className="interests-list">
                    {interests.map((interest) => (
                      <span key={interest} className="interest-item">
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
