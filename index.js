import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Code, Layout, Cpu, Users, Award, FileText } from 'lucide-react';

const App = () => {
  const skills = [
    { category: 'Frontend', items: ['React', 'Next.js', 'Redux', 'Angular', 'AngularJS', 'React Native', 'Hybrid Apps'] },
    { category: 'Tooling', items: ['Webpack', 'Rollup', 'Storybook', 'Jest', 'React Testing Library', 'Visual Testing', 'CI/CD'] },
    { category: 'Architecture & Leadership', items: ['SDK Design', 'Performance Optimization', 'Cross-functional Delivery', 'Team Leadership'] }
  ];

  const experiences = [
    {
      company: 'Paytm',
      role: 'Senior Technical Lead',
      period: 'May 2022 – Present',
      achievements: [
        'Led development of central Frontend SDK powering ~90% of Paytm app pages with dynamic widgets from API-driven configurations',
        'Architected SDK with Rollup + Shadow DOM, implementing lazy-loading and optimized data flow → improved Core Web Vitals',
        'Introduced Ads visibility tracking via OM-SDK integration for industry-standard ad measurement',
        'Built infrastructure for unit testing (Jest + RTL) and visual regression testing → reduced regression cycles from 1 week to 3 hours',
        'Authored documentation for 65+ widgets and established release planning process',
        'Created "Z-One" VS Code extension powered by MCP tools to streamline developer workflows',
        'Led and mentored 4-member team while contributing hands-on coding'
      ]
    },
    {
      company: 'Optum',
      role: 'Senior Software Engineer',
      period: 'Jan 2021 – May 2022',
      achievements: [
        'Built responsive PWA using Next.js with service workers & web workers → improved performance and client retention',
        'Developed web-based Citizen Benefit Management System using React, React JSON Schema, and Redux'
      ]
    },
    {
      company: 'Deloitte',
      role: 'Consultant',
      period: 'Feb 2019 – Jan 2021',
      achievements: [
        'Developed graphing component in Angular v4 using native APIs, eliminating external library dependency',
        'Delivered Citizen Benefit Management System in Salesforce LWC and conducted developer training',
        'Built scalable React Native Child Welfare product with offline support and Salesforce integration',
        'Designed atomic component architecture + flag-based Redux flow for dynamic CRUD modules',
        'Created code generation system that auto-produced 200+ React Native pages',
        'Built tool to convert Salesforce Aura components into LWC for legacy migration'
      ]
    },
    {
      company: 'Nagarro',
      role: 'Senior Associate Technology',
      period: 'Jun 2018 – Feb 2019',
      achievements: [
        'Developed React Native child welfare application with offline record maintenance and media capture',
        'Took ownership after lead transition, delivering features independently',
        'Implemented Redux state management and Realm DB for stable offline performance'
      ]
    },
    {
      company: 'TCS',
      role: 'System Engineer',
      period: 'Feb 2015 – Jun 2018',
      achievements: [
        'Built hybrid mobile and responsive web apps using AngularJS, Angular 2+, Ionic, Cordova',
        'Led teams of 2–4 engineers across multiple projects while remaining hands-on',
        'Collaborated with backend leads for API integration and client requirements'
      ]
    }
  ];

  const education = [
    { degree: 'MCA', institution: 'SASTRA University, Thanjavur', year: '2018' },
    { degree: 'BCA', institution: 'CSJM University, Kanpur', year: '2014' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1">
              <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
                <Code className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Om Prakash Kesarwani
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-6 max-w-3xl mx-auto">
              Senior Technical Lead | Frontend Architect | 10.5 Years Experience
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-gray-300 mb-8">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>Bangalore</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-blue-400" />
                <span>+91 9235355900</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-blue-400" />
                <span>omkes02@gmail.com</span>
              </div>
            </div>
            <div className="flex justify-center gap-4">
              <a 
                href="https://linkedin.com/in/om-kesarwani-38934062" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
              <a 
                href="https://github.com/OmKessarwani" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg transition-colors duration-200"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Professional Summary */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <FileText className="w-8 h-8 text-blue-400" />
            <h2 className="text-3xl font-bold">Professional Summary</h2>
          </div>
          <p className="text-lg text-gray-300 leading-relaxed max-w-4xl">
            Frontend engineering leader with 10+ years of experience building scalable UI platforms, SDKs, and hybrid mobile apps. 
            Proven expertise in React, Next.js, and performance optimization. Skilled in leading high-performing teams, delivering 
            cross-functional projects, and driving architectural improvements.
          </p>
        </section>

        {/* Core Skills */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Cpu className="w-8 h-8 text-purple-400" />
            <h2 className="text-3xl font-bold">Core Skills</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillCategory, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">{skillCategory.category}</h3>
                <ul className="space-y-2">
                  {skillCategory.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Work Experience */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Users className="w-8 h-8 text-green-400" />
            <h2 className="text-3xl font-bold">Work Experience</h2>
          </div>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                    <p className="text-xl text-blue-400">{exp.company}</p>
                  </div>
                  <span className="text-gray-400 font-medium">{exp.period}</span>
                </div>
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <Award className="w-8 h-8 text-yellow-400" />
            <h2 className="text-3xl font-bold">Education</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-semibold text-white mb-2">{edu.degree}</h3>
                <p className="text-gray-300 mb-2">{edu.institution}</p>
                <span className="text-gray-400">{edu.year}</span>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-700 mt-20 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
          <p>© 2025 Om Prakash Kesarwani. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
