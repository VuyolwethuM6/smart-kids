'use client';

import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Testimonials from '../components/Testimonials'
import Gallery from '../components/Gallery'
import { Button } from "@/components/ui/button"
import { getBlogPosts } from '@/lib/blog'
import { motion } from 'framer-motion'
import { GraduationCap, Microscope, Tent, BookOpen, Users, Brain } from 'lucide-react'

export default function Home() {
  const latestPosts = getBlogPosts().slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-theme-darkBlue text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/msi-hero.jpg"
            alt="Students learning"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              type: "spring", 
              stiffness: 100, 
              damping: 10,
              duration: 0.5 
            }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Igniting Young Minds
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              type: "spring", 
              stiffness: 100, 
              damping: 10,
              duration: 0.5,
              delay: 0.2 
            }}
            className="text-xl md:text-2xl mb-8"
          >
            Where Smart Kids Become Brilliant Leaders
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-theme-darkBlue text-white hover:bg-theme-gold hover:text-theme-darkBlue"
            >
              <Link href="#about">
                Learn More
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row items-center"
          >
            <div className="md:w-1/2 mb-8 md:mb-0">
              <Image src="/images/Outdoor.jpg" alt="Students learning" width={600} height={400} className="rounded-lg shadow-lg" />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">About Smart Kids X Academy</h2>
              <p className="text-gray-600 mb-6">
                Smart Kids X Academy is dedicated to nurturing young minds through innovative and engaging educational programs. Our mission is to develop well-rounded students who excel in academics while building essential life skills.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Personalized learning paths</li>
                <li>Interactive digital education</li>
                <li>Critical thinking development</li>
                <li>Character building programs</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen className="w-12 h-12 text-theme-darkBlue" />,
                title: "Academic Support",
                description: "Comprehensive tutoring and academic assistance across all subjects to help students excel in their studies."
              },
              {
                icon: <Brain className="w-12 h-12 text-theme-darkBlue" />,
                title: "Skills Development",
                description: "Programs focused on developing critical thinking, problem-solving, and creative skills essential for future success."
              },
              {
                icon: <Users className="w-12 h-12 text-theme-darkBlue" />,
                title: "Mentorship Programs",
                description: "One-on-one guidance and support to help students reach their full potential and achieve their goals."
              },
              {
                icon: <GraduationCap className="w-12 h-12 text-theme-darkBlue" />,
                title: "College Preparation",
                description: "Specialized programs to prepare students for higher education and future career opportunities."
              },
              {
                icon: <Microscope className="w-12 h-12 text-theme-darkBlue" />,
                title: "STEM Education",
                description: "Hands-on learning experiences in Science, Technology, Engineering, and Mathematics."
              },
              {
                icon: <Tent className="w-12 h-12 text-theme-darkBlue" />,
                title: "Holiday Programs",
                description: "Engaging holiday camps and workshops that combine learning with fun activities."
              }
            ].map((service, index) => (
            <motion.div 
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
          </div>
        </div>
      </section>

      {/* Impact Counter */}
      <section className="py-20 bg-theme-darkBlue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Our Impact</h2>
          <div className="flex flex-wrap justify-center">
            {[
              {
                number: "500+",
                label: "Students Enrolled"
              },
              {
                number: "95%",
                label: "Pass Rate"
              },
              {
                number: "50+",
                label: "Expert Tutors"
              },
              {
                number: "10+",
                label: "Years Experience"
              }
            ].map((stat, index) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="w-full sm:w-1/2 md:w-1/4 mb-8"
              >
                <div className="text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-xl">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Gallery Section */}
      <Gallery />

      {/* Blog Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            <h2 className="text-3xl font-bold text-center text-gray-800">
              Latest Blog Posts
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {latestPosts.map((post) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-2 duration-300"
                >
                  <Link href={`/blog/${post.slug}`}>
                    {post.frontmatter.image && (
                      <Image
                        src={post.frontmatter.image}
                        alt={post.frontmatter.title}
                        width={400}
                        height={250}
                        className="w-full h-48 object-cover"
                      />
                    )}
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        {post.frontmatter.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.frontmatter.excerpt}
                      </p>
                      <div className="flex justify-between items-center text-sm text-gray-500">
                        <span>{post.frontmatter.author}</span>
                        <span>{post.frontmatter.date}</span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <Button
                asChild
                size="lg"
                className="bg-theme-darkBlue text-white hover:bg-theme-gold hover:text-theme-darkBlue"
              >
                <Link href="/blog">
                  View All Blog Posts
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Ready to Make a Difference?</h2>
          <p className="text-xl text-gray-600 mb-8">Join us in our mission to empower the youth through Maths and Science education.</p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              asChild
              size="lg"
              className="bg-theme-darkBlue text-white hover:bg-theme-gold hover:text-theme-darkBlue"
            >
              <Link href="#contact">
                Get Involved
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
