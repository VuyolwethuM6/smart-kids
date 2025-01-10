'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { PhoneIcon, EnvelopeIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { 
  DropdownMenu, 
  DropdownMenuTrigger, 
  DropdownMenuContent, 
  DropdownMenuItem 
} from "@/components/ui/dropdown-menu"
import { motion, AnimatePresence } from 'framer-motion'

const menuVariants = {
  closed: {
    x: "100%",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  },
  open: {
    x: "0%",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
}

const backdropVariants = {
  closed: {
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: 'easeInOut'
    }
  },
  open: {
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: 'easeInOut'
    }
  }
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      isScrolled ? "bg-theme-darkBlue shadow-lg" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/msi_logo.png"
              alt="MSI Logo"
              width={50}
              height={50}
              className="w-12 h-12"
            />
            <span className={cn(
              "font-bold text-xl",
              isScrolled ? "text-white" : "text-theme-darkBlue"
            )}>
              Smart Kids X
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={cn(
                "text-sm font-medium transition-colors hover:text-theme-gold",
                isScrolled ? "text-white" : "text-theme-darkBlue"
              )}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={cn(
                "text-sm font-medium transition-colors hover:text-theme-gold",
                isScrolled ? "text-white" : "text-theme-darkBlue"
              )}
            >
              About
            </Link>
            <Link
              href="/services"
              className={cn(
                "text-sm font-medium transition-colors hover:text-theme-gold",
                isScrolled ? "text-white" : "text-theme-darkBlue"
              )}
            >
              Services
            </Link>
            <Link
              href="/impact"
              className={cn(
                "text-sm font-medium transition-colors hover:text-theme-gold",
                isScrolled ? "text-white" : "text-theme-darkBlue"
              )}
            >
              Impact
            </Link>
            <Link
              href="/gallery"
              className={cn(
                "text-sm font-medium transition-colors hover:text-theme-gold",
                isScrolled ? "text-white" : "text-theme-darkBlue"
              )}
            >
              Gallery
            </Link>
            <DropdownMenu trigger={
              <button className={cn(
                "text-sm font-medium transition-colors hover:text-theme-gold",
                isScrolled ? "text-white" : "text-theme-darkBlue"
              )}>
                Resources
              </button>
            }>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href="/resources/past-papers">Past Papers</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/resources/study-materials">Study Materials</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/resources/student-portal">Student Portal</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link
              href="/blog"
              className={cn(
                "text-sm font-medium transition-colors hover:text-theme-gold",
                isScrolled ? "text-white" : "text-theme-darkBlue"
              )}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className={cn(
                "text-sm font-medium transition-colors hover:text-theme-gold",
                isScrolled ? "text-white" : "text-theme-darkBlue"
              )}
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Contact Info and Donate Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="tel:+27437262171" 
              className={cn(
                "text-sm hover:text-theme-gold",
                isScrolled ? "text-white" : "text-theme-darkBlue"
              )}
            >
              <PhoneIcon className="h-5 w-5 inline mr-2" />
              +27 43 726 2171
            </a>
            <Button 
              asChild 
              className="bg-theme-gold text-theme-darkBlue hover:bg-white hover:text-theme-darkBlue"
            >
              <Link href="/donate">Donate Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <XMarkIcon className={cn(
                "h-6 w-6",
                isScrolled ? "text-white" : "text-theme-darkBlue"
              )} />
            ) : (
              <Bars3Icon className={cn(
                "h-6 w-6",
                isScrolled ? "text-white" : "text-theme-darkBlue"
              )} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              variants={backdropVariants}
              initial="closed"
              animate="open"
              exit="closed"
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div
              className="fixed right-0 top-0 h-full w-64 bg-theme-darkBlue p-6 z-50"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="flex flex-col space-y-4">
                <Link
                  href="/"
                  className="text-white hover:text-theme-gold transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-white hover:text-theme-gold transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/services"
                  className="text-white hover:text-theme-gold transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>
                <Link
                  href="/impact"
                  className="text-white hover:text-theme-gold transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Impact
                </Link>
                <Link
                  href="/gallery"
                  className="text-white hover:text-theme-gold transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Gallery
                </Link>
                <DropdownMenu trigger={
                  <button className="text-white hover:text-theme-gold transition-colors">
                    Resources
                  </button>
                }>
                  <DropdownMenuContent>
                    <DropdownMenuItem>
                      <Link href="/resources/past-papers">Past Papers</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="/resources/study-materials">Study Materials</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="/resources/student-portal">Student Portal</Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Link
                  href="/blog"
                  className="text-white hover:text-theme-gold transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </Link>
                <Link
                  href="/contact"
                  className="text-white hover:text-theme-gold transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
                <Button 
                  asChild
                  className="bg-theme-gold text-theme-darkBlue hover:bg-white hover:text-theme-darkBlue"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Link href="/donate">Donate Now</Link>
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
