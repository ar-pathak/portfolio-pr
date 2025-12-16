"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download, Award, Code, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { icon: Code, label: 'Projects Completed', value: '25+' },
    { icon: Award, label: 'Technologies Mastered', value: '10+' },
    { icon: Users, label: 'Happy Clients', value: '15+' },
  ];

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
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
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
              About <span className="text-blue-600">Me</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Passionate full-stack developer with a love for creating exceptional digital experiences
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="prose prose-lg dark:prose-invert">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Hello! I'm <strong>Arsan Pathak</strong>, a passionate MERN Stack Developer based in India. 
                  My journey in web development began during my college years, and I've been hooked ever since.
                </p>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  I specialize in building exceptional digital experiences using modern technologies like 
                  React, Node.js, MongoDB, and Express. I love turning complex problems into simple, 
                  beautiful designs that users actually enjoy using.
                </p>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                  projects, or sharing my knowledge with the developer community through blogs and tutorials.
                </p>
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Column - Profile Card */}
            <motion.div variants={itemVariants}>
              <Card className="relative overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>
                <CardContent className="relative p-8">
                  <div className="text-center">
                    <div className="relative w-48 h-48 mx-auto mb-6">
                      <Image
                        src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
                        alt="Arsan Pathak"
                        fill
                        className="object-cover rounded-2xl shadow-lg"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                      Arsan Pathak
                    </h3>
                    <p className="text-blue-600 text-lg font-medium mb-6">
                      MERN Stack Developer
                    </p>
                    
                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4">
                      {stats.map((stat, index) => (
                        <motion.div
                          key={stat.label}
                          whileHover={{ scale: 1.05 }}
                          className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md"
                        >
                          <stat.icon className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                          <div className="text-2xl font-bold text-gray-800 dark:text-white">
                            {stat.value}
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-300">
                            {stat.label}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}