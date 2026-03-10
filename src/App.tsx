/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Code, 
  Terminal, 
  Cpu, 
  User, 
  GraduationCap, 
  Briefcase, 
  ExternalLink,
  ChevronRight,
  Github,
  Linkedin,
  Globe
} from 'lucide-react';

const SectionHeader = ({ title, icon: Icon }: { title: string, icon: any }) => (
  <div className="flex items-center gap-3 mb-8">
    <div className="p-2 bg-zinc-900 text-white rounded-lg">
      <Icon size={20} />
    </div>
    <h2 className="text-2xl font-bold tracking-tight text-zinc-900 uppercase">{title}</h2>
    <div className="flex-1 h-[1px] bg-zinc-200 ml-4"></div>
  </div>
);

export default function App() {
  const skills = {
    frontend: ["HTML", "CSS", "JavaScript", "Bootstrap", "React (Learning)"],
    languages: ["Python", "Java"],
    tools: ["Web Development", "Problem Solving", "Git", "VS Code"],
    soft: ["Communication", "Teamwork", "Learning Ability"]
  };

  return (
    <div className="min-h-screen selection:bg-zinc-900 selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-mono font-bold text-lg tracking-tighter">ADHI.MK</span>
          <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-600">
            <a href="#about" className="hover:text-zinc-900 transition-colors">About</a>
            <a href="#skills" className="hover:text-zinc-900 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-zinc-900 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-zinc-900 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-32 pb-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-3 py-1 bg-zinc-100 text-zinc-600 text-xs font-bold tracking-widest uppercase rounded-md mb-6">
            Available for Opportunities
          </span>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-zinc-900 mb-6">
            Sri Adhithya <span className="text-zinc-400">M.K</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-600 max-w-2xl leading-relaxed mb-8">
            Front-End Developer (Fresher) passionate about building clean, responsive, and user-centric web experiences.
          </p>
          
          <div className="flex flex-wrap gap-6 text-sm font-medium text-zinc-500">
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <a href="mailto:adhimathes321@gmail.com" className="hover:text-zinc-900">adhimathes321@gmail.com</a>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <a href="tel:8667867262" className="hover:text-zinc-900">8667867262</a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>Namakkal, Tamil Nadu</span>
            </div>
          </div>
        </motion.div>
      </header>

      <main className="max-w-7xl mx-auto">
        {/* About Section */}
        <section id="about" className="section-padding">
          <SectionHeader title="Career Objective" icon={User} />
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="text-lg text-zinc-600 leading-relaxed">
              <p>
                Enthusiastic and hardworking Computer Science Engineering student with a strong commitment to continuous learning and skill development. 
                Seeking an opportunity to apply my front-end development skills and grow as a software developer in a dynamic organization.
              </p>
            </div>
            <div className="bg-zinc-900 p-8 rounded-2xl text-white">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <GraduationCap size={20} className="text-zinc-400" />
                Education
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="font-bold text-xl">B.E – Computer Science and Engineering</p>
                  <p className="text-zinc-400">CMS College of Engineering, Namakkal</p>
                  <div className="mt-2 inline-block px-3 py-1 bg-white/10 rounded-lg text-sm">
                    CGPA: 8.32 (6th Semester)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="section-padding bg-zinc-100/50">
          <SectionHeader title="Technical Arsenal" icon={Terminal} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="font-bold text-zinc-400 text-xs uppercase tracking-widest">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map(s => (
                  <span key={s} className="px-3 py-1 bg-white border border-zinc-200 rounded-full text-sm font-medium text-zinc-700 shadow-sm hover:border-zinc-400 transition-colors">
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-zinc-400 text-xs uppercase tracking-widest">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map(s => (
                  <span key={s} className="px-3 py-1 bg-white border border-zinc-200 rounded-full text-sm font-medium text-zinc-700 shadow-sm hover:border-zinc-400 transition-colors">
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-zinc-400 text-xs uppercase tracking-widest">Tools & Concepts</h3>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map(s => (
                  <span key={s} className="px-3 py-1 bg-white border border-zinc-200 rounded-full text-sm font-medium text-zinc-700 shadow-sm hover:border-zinc-400 transition-colors">
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-zinc-400 text-xs uppercase tracking-widest">Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.soft.map(s => (
                  <span key={s} className="px-3 py-1 bg-white border border-zinc-200 rounded-full text-sm font-medium text-zinc-700 shadow-sm hover:border-zinc-400 transition-colors">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section-padding">
          <SectionHeader title="Featured Work" icon={Code} />
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              whileHover={{ y: -5 }}
              className="group bg-white border border-zinc-200 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-zinc-100 rounded-xl group-hover:bg-zinc-900 group-hover:text-white transition-colors">
                  <Globe size={24} />
                </div>
                <div className="flex gap-2">
                  <span className="text-[10px] font-bold px-2 py-1 bg-zinc-100 rounded uppercase tracking-tighter">HTML</span>
                  <span className="text-[10px] font-bold px-2 py-1 bg-zinc-100 rounded uppercase tracking-tighter">CSS</span>
                  <span className="text-[10px] font-bold px-2 py-1 bg-zinc-100 rounded uppercase tracking-tighter">JS</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3">Responsive Web Pages</h3>
              <p className="text-zinc-600 mb-6">
                Developed multiple responsive web pages using modern CSS techniques and Bootstrap. Focused on mobile-first design and cross-browser compatibility.
              </p>
              <div className="flex items-center gap-2 text-sm font-bold text-zinc-900">
                View Project <ChevronRight size={16} />
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="group bg-white border border-zinc-200 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-zinc-100 rounded-xl group-hover:bg-zinc-900 group-hover:text-white transition-colors">
                  <Cpu size={24} />
                </div>
                <div className="flex gap-2">
                  <span className="text-[10px] font-bold px-2 py-1 bg-zinc-100 rounded uppercase tracking-tighter">UI Design</span>
                  <span className="text-[10px] font-bold px-2 py-1 bg-zinc-100 rounded uppercase tracking-tighter">Interactivity</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3">Interactive UI Components</h3>
              <p className="text-zinc-600 mb-6">
                Implemented basic UI designs and interactive web components. Experimented with JavaScript for DOM manipulation and event handling.
              </p>
              <div className="flex items-center gap-2 text-sm font-bold text-zinc-900">
                View Project <ChevronRight size={16} />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="section-padding bg-zinc-900 text-white rounded-t-[3rem]">
          <div className="flex items-center gap-3 mb-12">
            <div className="p-2 bg-white text-zinc-900 rounded-lg">
              <Briefcase size={20} />
            </div>
            <h2 className="text-2xl font-bold tracking-tight uppercase">Experience & Growth</h2>
          </div>
          
          <div className="space-y-12">
            <div className="relative pl-8 border-l border-white/20">
              <div className="absolute left-[-5px] top-0 w-2 h-2 bg-white rounded-full"></div>
              <div className="flex flex-wrap justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Self-Learning & Skill Development</h3>
                <span className="text-zinc-400 font-mono text-sm">Present</span>
              </div>
              <ul className="space-y-3 text-zinc-400">
                <li className="flex items-start gap-2">
                  <div className="mt-1.5 w-1.5 h-1.5 bg-zinc-600 rounded-full flex-shrink-0"></div>
                  Learned multiple technical skills through online courses and self-learning platforms.
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1.5 w-1.5 h-1.5 bg-zinc-600 rounded-full flex-shrink-0"></div>
                  Developed basic projects related to front-end web development to solidify concepts.
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1.5 w-1.5 h-1.5 bg-zinc-600 rounded-full flex-shrink-0"></div>
                  Continuously improving coding and problem-solving skills through daily practice.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">Let's build something together.</h2>
            <p className="text-xl text-zinc-600 mb-12">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <a 
                href="mailto:adhimathes321@gmail.com" 
                className="w-full md:w-auto px-8 py-4 bg-zinc-900 text-white rounded-2xl font-bold hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2"
              >
                <Mail size={20} /> Say Hello
              </a>
              <div className="flex gap-4">
                <a href="#" className="p-4 bg-zinc-100 rounded-2xl hover:bg-zinc-200 transition-colors">
                  <Github size={24} />
                </a>
                <a href="#" className="p-4 bg-zinc-100 rounded-2xl hover:bg-zinc-200 transition-colors">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 px-6 border-t border-zinc-200 text-center text-zinc-500 text-sm">
        <p>© {new Date().getFullYear()} Sri Adhithya M.K. Built with React & Tailwind CSS.</p>
        <p className="mt-2 font-mono text-[10px] uppercase tracking-widest">Namakkal, Tamil Nadu, India</p>
      </footer>
    </div>
  );
}
