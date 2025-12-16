"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, Briefcase, GraduationCap, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const experiences = [
  {
    type: 'work',
    title: 'Full Stack Developer',
    company: 'TechStart Solutions',
    location: 'Mumbai, India',
    duration: 'Jan 2023 - Present',
    description: 'Leading development of modern web applications using MERN stack. Built scalable e-commerce platforms serving 10k+ users, implemented CI/CD pipelines, and mentored junior developers.',
    achievements: [
      'Increased application performance by 40%',
      'Led team of 3 developers',
      'Implemented automated testing reducing bugs by 60%'
    ],
    icon: Briefcase,
  },
  {
    type: 'work',
    title: 'Frontend Developer Intern',
    company: 'Digital Innovation Labs',
    location: 'Remote',
    duration: 'Jun 2022 - Dec 2022',
    description: 'Developed responsive web interfaces using React and collaborated with design teams to create pixel-perfect implementations. Worked on multiple client projects and gained experience with modern development workflows.',
    achievements: [
      'Built 5+ responsive web applications',
      'Collaborated with international teams',
      'Learned modern development practices'
    ],
    icon: Briefcase,
  },
  {
    type: 'education',
    title: 'Bachelor of Technology',
    company: 'Computer Science Engineering',
    location: 'Mumbai University',
    duration: '2019 - 2023',
    description: 'Graduated with First Class with Distinction. Specialized in web technologies, data structures, and software engineering. Active member of coding club and organized multiple hackathons.',
    achievements: [
      'CGPA: 8.7/10',
      'Best Project Award 2022',
      'Hackathon Winner - TechFest 2023'
    ],
    icon: GraduationCap,
  },
  {
    type: 'certification',
    title: 'MERN Stack Specialization',
    company: 'MongoDB University',
    location: 'Online',
    duration: 'Mar 2022',
    description: 'Comprehensive certification program covering MongoDB, Express.js, React.js, and Node.js. Completed hands-on projects and gained expertise in full-stack development.',
    achievements: [
      'Score: 96/100',
      'Built 3 full-stack projects',
      'Peer-reviewed code submissions'
    ],
    icon: Award,
  },
];

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'work':
        return 'from-blue-500 to-cyan-500';
      case 'education':
        return 'from-green-500 to-emerald-500';
      case 'certification':
        return 'from-purple-500 to-pink-500';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-4">
              My <span className="text-blue-600">Journey</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A timeline of my professional experience, education, and achievements
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 w-0.5 h-full bg-gradient-to-b from-blue-500 to-purple-500"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 z-10">
                    <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${getTypeColor(exp.type)} border-4 border-white dark:border-gray-800 shadow-lg`}></div>
                  </div>

                  {/* Content */}
                  <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                  }`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Card className="shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-gray-50 dark:bg-gray-900">
                        <CardContent className="p-6">
                          {/* Header */}
                          <div className="flex items-start justify-between mb-4">
                            <div className={`p-3 rounded-lg bg-gradient-to-r ${getTypeColor(exp.type)} mr-4`}>
                              <exp.icon className="h-6 w-6 text-white" />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">
                                {exp.title}
                              </h3>
                              <p className="text-blue-600 font-semibold mb-2">
                                {exp.company}
                              </p>
                              <div className="flex flex-col sm:flex-row sm:items-center text-sm text-gray-500 dark:text-gray-400 space-y-1 sm:space-y-0 sm:space-x-4">
                                <div className="flex items-center">
                                  <Calendar className="h-4 w-4 mr-1" />
                                  {exp.duration}
                                </div>
                                <div className="flex items-center">
                                  <MapPin className="h-4 w-4 mr-1" />
                                  {exp.location}
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Description */}
                          <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                            {exp.description}
                          </p>

                          {/* Achievements */}
                          <div>
                            <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
                              Key Highlights:
                            </h4>
                            <ul className="space-y-1">
                              {exp.achievements.map((achievement, i) => (
                                <li key={i} className="flex items-start text-sm text-gray-600 dark:text-gray-300">
                                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                  {achievement}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}