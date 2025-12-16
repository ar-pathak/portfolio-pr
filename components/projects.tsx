"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const projects = [
  {
    title: 'Swiggy Clone',
    description: 'A full-featured food delivery application built with React and Tailwind CSS. Includes user authentication, restaurant browsing, cart management, and order tracking.',
    image: 'https://images.pexels.com/photos/4393668/pexels-photo-4393668.jpeg',
    tech: ['React', 'Tailwind CSS', 'Redux', 'JavaScript'],
    liveUrl: 'https://swiggy-clone-demo.vercel.app',
    githubUrl: 'https://github.com/arsanpathak/swiggy-clone',
    featured: true,
  },
  {
    title: 'E-commerce Platform',
    description: 'Complete MERN stack e-commerce solution with payment integration, admin dashboard, inventory management, and real-time notifications.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
    liveUrl: 'https://ecommerce-demo.vercel.app',
    githubUrl: 'https://github.com/arsanpathak/ecommerce-platform',
    featured: true,
  },
  {
    title: 'Work Management System',
    description: 'A comprehensive project management tool with team collaboration, task assignment, progress tracking, and real-time chat functionality.',
    image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg',
    tech: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'JWT'],
    liveUrl: 'https://workmanager-demo.vercel.app',
    githubUrl: 'https://github.com/arsanpathak/work-management',
    featured: true,
  },
  {
    title: 'AI Movie Recommender',
    description: 'Machine learning powered movie recommendation system built with Python backend and React frontend. Uses collaborative filtering algorithms.',
    image: 'https://images.pexels.com/photos/436413/pexels-photo-436413.jpeg',
    tech: ['Python', 'React', 'TensorFlow', 'Flask', 'Pandas'],
    liveUrl: 'https://movieai-demo.vercel.app',
    githubUrl: 'https://github.com/arsanpathak/ai-movie-recommender',
    featured: false,
  },
  {
    title: 'Weather Dashboard',
    description: 'Beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics with data visualization.',
    image: 'https://images.pexels.com/photos/125457/pexels-photo-125457.jpeg',
    tech: ['React', 'TypeScript', 'Chart.js', 'OpenWeather API'],
    liveUrl: 'https://weather-dash-demo.vercel.app',
    githubUrl: 'https://github.com/arsanpathak/weather-dashboard',
    featured: false,
  },
  {
    title: 'Social Media App',
    description: 'Full-stack social media platform with real-time messaging, post sharing, story features, and advanced privacy controls.',
    image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Socket.io'],
    liveUrl: 'https://socialmedia-demo.vercel.app',
    githubUrl: 'https://github.com/arsanpathak/social-media-app',
    featured: false,
  },
];

export default function Projects() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
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
              Featured <span className="text-blue-600">Projects</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A showcase of my latest work and personal projects
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="h-full overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-white dark:bg-gray-800 border-0">
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {project.featured && (
                      <div className="absolute top-4 left-4">
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          Featured
                        </span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex space-x-4">
                        <Button
                          size="sm"
                          variant="secondary"
                          className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30"
                          asChild
                        >
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                        <Button
                          size="sm"
                          variant="secondary"
                          className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30"
                          asChild
                        >
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2" />
                            Code
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex justify-between items-center pt-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-blue-600 hover:text-blue-700 p-0"
                        asChild
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <Eye className="h-4 w-4 mr-2" />
                          View Project
                        </a>
                      </Button>
                      
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-gray-600 hover:text-gray-700 p-0"
                        asChild
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* View All Projects Button */}
          <motion.div variants={itemVariants} className="text-center">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
              asChild
            >
              <a href="https://github.com/arsanpathak" target="_blank" rel="noopener noreferrer">
                View All Projects on GitHub
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}