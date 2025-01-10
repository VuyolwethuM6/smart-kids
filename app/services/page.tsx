'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Button } from "@/components/ui/button"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const services = [
  {
    title: "Smart Kids Primary Program",
    description: "Comprehensive education program for grades 1-7, focusing on core subjects while developing critical thinking and creativity.",
    features: [
      "Interactive learning sessions",
      "Regular progress tracking",
      "Creative thinking exercises",
      "Hands-on activities",
      "Digital learning tools"
    ],
    image: "/images/primary-program.jpg",
    category: "Primary"
  },
  {
    title: "X-Cel High School Program",
    description: "Advanced academic program for grades 8-12, preparing students for university and future success.",
    features: [
      "Subject specialization",
      "Career guidance",
      "Study skills development",
      "Exam preparation",
      "University readiness"
    ],
    image: "/images/high-school.jpg",
    category: "High School"
  },
  {
    title: "Smart Kids Holiday Academy",
    description: "Engaging holiday programs combining learning with fun activities to keep young minds active.",
    features: [
      "Educational games",
      "STEM activities",
      "Arts and crafts",
      "Sports and recreation",
      "Team building exercises"
    ],
    image: "/images/holiday-program.jpg",
    category: "Holiday Programs"
  }
]

const categories = [
  {
    name: "Primary",
    icon: "📚",
    description: "Comprehensive education for young minds."
  },
  {
    name: "High School",
    icon: "🎓",
    description: "Advanced academic programs for future success."
  },
  {
    name: "Holiday Programs",
    icon: "🏖️",
    description: "Fun and engaging holiday activities."
  }
]

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-theme-darkBlue text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container relative mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Our Services
            </motion.h1>
            <motion.p 
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl opacity-90"
            >
              Comprehensive educational programs tailored to your needs
            </motion.p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50"></div>
      </section>

      {/* Categories Overview */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600">
              Explore our range of educational services designed to help students excel
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{category.name}</h3>
                <p className="text-gray-600">{category.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-4xl font-bold text-center mb-16 text-gray-900"
          >
            Detailed Services
          </motion.h2>

          <div className="space-y-24 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-12 items-center`}
              >
                <div className="lg:w-1/2">
                  <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <p className="text-theme-gold font-medium text-lg">{service.category}</p>
                  <h3 className="text-3xl font-bold mt-2 mb-6 text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-xl text-gray-600 mb-8">
                    {service.description}
                  </p>
                  <ul className="space-y-4">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3 text-gray-700">
                        <svg className="w-5 h-5 text-theme-darkBlue flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-theme-darkBlue text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Learning?
            </h2>
            <p className="text-xl mb-12 opacity-90">
              Join our programs today and take the first step towards academic excellence.
            </p>
            <button className="bg-white text-theme-darkBlue hover:bg-theme-lightBlue text-lg px-12 py-6">
              Enroll Now
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
