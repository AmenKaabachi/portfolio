'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Download,
  Calendar,
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
    "Programming Languages": ["Python", "Java", "C", "C#", "JavaScript", "PHP"],
    "Web Technologies": ["HTML", "CSS", "Bootstrap", "React.js", "Express.js", "Node.js"],
    "Mobile Development": ["Java", "Flutter"],
    "Databases": ["SQL", "NoSQL", "MySQL"],
    "Tools & Technologies": ["Git", "REST APIs", "Responsive Design"]
  };

  const languages = [
    { name: "Arabic", level: "Native" },
    { name: "English", level: "Fluent" },
    { name: "French", level: "C1" }
  ];

  const interests = [
    "Software Development",
    "Mobile Applications",
    "Problem Solving",
    "Technology Innovation",
    "Web Design",
    "Database Design"
  ];

  return (
    <div className="min-h-screen bg-background py-12 px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <Button 
            onClick={() => window.print()} 
            className="mb-6"
            size="lg"
          >
            <Download className="h-5 w-5 mr-2" />
            Download PDF
          </Button>
        </div>

        <div className="bg-white dark:bg-gray-900 shadow-lg rounded-lg overflow-hidden print:shadow-none print:rounded-none">
          {/* Header Section */}
          <div className="bg-primary text-primary-foreground p-8 gradient-code">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-2">Amen KAABACHI</h1>
              <p className="text-xl mb-4">Full-Stack Developer</p>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
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

          <div className="p-8 space-y-8">
            {/* Professional Summary */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground border-b-2 border-primary pb-2">
                Professional Summary
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Dedicated Full-Stack Developer with expertise in building clean, scalable, and efficient 
                web and mobile applications. Business Information Systems graduate with a passion for 
                solving real-world problems through technology. Experienced in modern web technologies, 
                database design, and mobile application development.
              </p>
            </section>

            {/* Education */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground border-b-2 border-primary pb-2">
                <GraduationCap className="inline h-6 w-6 mr-2" />
                Education
              </h2>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <Card key={index} className="border-l-4 border-l-primary">
                    <CardContent className="pt-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-lg">{edu.degree}</h3>
                        <Badge variant="secondary" className="ml-2">
                          <Calendar className="h-3 w-3 mr-1" />
                          {edu.year}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground">{edu.school}</p>
                      <p className="text-sm text-muted-foreground">{edu.location}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Experience */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground border-b-2 border-primary pb-2">
                <Briefcase className="inline h-6 w-6 mr-2" />
                Experience
              </h2>
              <div className="space-y-4">
                {experience.map((exp, index) => (
                  <Card key={index} className="border-l-4 border-l-primary">
                    <CardContent className="pt-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-semibold text-lg">{exp.title}</h3>
                          <p className="text-muted-foreground">{exp.company}</p>
                        </div>
                        <div className="text-right">
                          <Badge variant="secondary" className="mb-1">
                            <Calendar className="h-3 w-3 mr-1" />
                            {exp.period}
                          </Badge>
                          <p className="text-sm text-muted-foreground">{exp.location}</p>
                        </div>
                      </div>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground mt-3">
                        {exp.description.map((desc, i) => (
                          <li key={i}>{desc}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Technical Skills */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground border-b-2 border-primary pb-2">
                Technical Skills
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {Object.entries(technicalSkills).map(([category, skills]) => (
                  <Card key={category}>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">{category}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {skills.map((skill) => (
                          <Badge key={skill} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Languages & Interests */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Languages */}
              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground border-b-2 border-primary pb-2">
                  Languages
                </h2>
                <Card>
                  <CardContent className="pt-4">
                    <div className="space-y-3">
                      {languages.map((lang, index) => (
                        <div key={index} className="flex justify-between items-center">
                          <span className="font-medium">{lang.name}</span>
                          <Badge variant="outline">{lang.level}</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Interests */}
              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground border-b-2 border-primary pb-2">
                  Interests
                </h2>
                <Card>
                  <CardContent className="pt-4">
                    <div className="flex flex-wrap gap-2">
                      {interests.map((interest) => (
                        <Badge key={interest} variant="outline">
                          {interest}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
