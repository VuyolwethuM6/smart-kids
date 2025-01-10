import Link from 'next/link'
import Image from 'next/image'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/utils/animations'

const Footer = () => {
  const socialLinks = [
    { icon: FaFacebookF, href: 'https://facebook.com', label: 'Facebook' },
    { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: FaLinkedinIn, href: 'https://linkedin.com', label: 'LinkedIn' }
  ]

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
    { name: 'Donate', href: '/donate' }
  ]

  return (
    <footer className="bg-theme-darkBlue text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {/* Logo and Description */}
          <motion.div variants={fadeInUp} className="space-y-4">
            <Image 
              src="/images/msi_logo.png" 
              alt="MSI Logo" 
              width={140} 
              height={70} 
              className="mb-4 bg-white p-2 rounded-lg" 
            />
            <p className="text-sm leading-relaxed">
              Empowering youth through Maths and Science education. Building tomorrow's leaders through STEM excellence.
            </p>
            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-theme-gold text-theme-darkBlue hover:bg-white transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4" />
                  </Link>
                )
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeInUp} className="space-y-4">
            <h3 className="text-lg font-semibold text-theme-gold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-sm hover:text-theme-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={fadeInUp} className="space-y-4">
            <h3 className="text-lg font-semibold text-theme-gold">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <FaPhone className="text-theme-gold" />
                <span className="text-sm">+27 43 726 2171</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-theme-gold" />
                <span className="text-sm">info@smartkidsx.org</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-theme-gold" />
                <span className="text-sm">123 Main Street, East London, 5201</span>
              </li>
            </ul>
          </motion.div>

          {/* Operating Hours */}
          <motion.div variants={fadeInUp} className="space-y-4">
            <h3 className="text-lg font-semibold text-theme-gold">Operating Hours</h3>
            <ul className="space-y-3">
              <li className="flex justify-between items-center">
                <span className="text-sm">Monday - Friday:</span>
                <span className="text-sm text-theme-gold">8:00 AM - 5:00 PM</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-sm">Saturday:</span>
                <span className="text-sm text-theme-gold">9:00 AM - 1:00 PM</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-sm">Sunday:</span>
                <span className="text-sm text-theme-gold">Closed</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-sm">Public Holidays:</span>
                <span className="text-sm text-theme-gold">Closed</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <p className="text-sm text-center">
            © {new Date().getFullYear()} Smart Kids X Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
