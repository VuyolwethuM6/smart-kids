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
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const isResourcePage = pathname.startsWith('/resources')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const resourcesItems = [
    { name: 'Past Papers', href: '/resources/past-papers' },
    { name: 'Student Portal', href: '/resources/student-portal' },
    { name: 'Study Materials', href: '/resources/study-materials' }
  ]

  const navItems = ['Home', 'About', 'Services', 'Gallery', 'Blog', 'Contact']

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled || isResourcePage ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Smart Kids X Academy Logo"
              width={50}
              height={50}
              className="mr-2"
            />
            
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => {
              const itemPath = item === 'Home' ? '/' : item.toLowerCase()
              const isActive = pathname === itemPath

              return (
                <Link
                  key={item}
                  href={itemPath}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-gray-900",
                    isScrolled || isResourcePage ? "text-gray-600" : "text-white",
                    isActive && (isScrolled || isResourcePage ? "text-red-600" : "text-red-400")
                  )}
                >
                  {item === 'Blog' ? 'Blog' : item}
                </Link>
              )
            })}

            {/* Resources Dropdown */}
            <DropdownMenu 
              trigger={
                <span className={cn(
                  "text-sm font-medium transition-colors hover:text-gray-900",
                  isScrolled || isResourcePage ? "text-gray-600" : "text-white",
                  pathname.startsWith('/resources') && (isScrolled || isResourcePage ? "text-red-600" : "text-red-400")
                )}>
                  Resources
                </span>
              }
            >
              <DropdownMenuContent>
                {resourcesItems.map((item) => (
                  <DropdownMenuItem key={item.name} href={item.href}>
                    {item.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* Desktop Contact Info and Donate Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="tel:+27437262171" 
              className={cn(
                "hover:text-gray-900",
                isScrolled || isResourcePage ? "text-gray-600" : "text-white"
              )}
            >
              <PhoneIcon className="h-5 w-5 inline mr-2" />
              +27 43 726 2171
            </a>
            <Button 
              asChild 
              className={cn(
                "bg-red-600 text-white hover:bg-red-700",
                isScrolled || isResourcePage ? "bg-red-600" : "bg-white/20 text-white hover:bg-white/30"
              )}
            >
              <Link href="/donate">Donate Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 focus:outline-none"
          >
            {isOpen ? (
              <XMarkIcon className={`h-6 w-6 ${isScrolled || isResourcePage ? 'text-gray-900' : 'text-white'}`} />
            ) : (
              <Bars3Icon className={`h-6 w-6 ${isScrolled || isResourcePage ? 'text-gray-900' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation Overlay */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                className="fixed inset-0 bg-black/50 z-40"
                variants={backdropVariants}
                initial="closed"
                animate="open"
                exit="closed"
                onClick={toggleMenu}
              />

              {/* Menu */}
              <motion.div
                className="fixed top-0 right-0 bottom-0 w-[250px] bg-white z-50 p-6"
                variants={menuVariants}
                initial="closed"
                animate="open"
                exit="closed"
              >
                <div className="flex flex-col space-y-4">
                  {navItems.map((item) => {
                    const itemPath = item === 'Home' ? '/' : `/${item.toLowerCase()}`
                    const isActive = pathname === itemPath

                    return (
                      <Link
                        key={item}
                        href={itemPath}
                        className={cn(
                          "text-lg font-medium",
                          isActive ? "text-red-600" : "text-gray-600"
                        )}
                        onClick={toggleMenu}
                      >
                        {item === 'Blog' ? 'Blog' : item}
                      </Link>
                    )
                  })}

                  {/* Mobile Resources Dropdown */}
                  <div className="relative">
                    <span className={cn(
                      "text-lg font-medium",
                      pathname.startsWith('/resources') ? "text-red-600" : "text-gray-600"
                    )}>
                      Resources
                    </span>
                    <div className="mt-2 space-y-2 pl-4">
                      {resourcesItems.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={cn(
                            "block text-sm",
                            pathname === item.href ? "text-red-600" : "text-gray-600"
                          )}
                          onClick={toggleMenu}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <a 
                      href="tel:+27437262171" 
                      className="text-gray-600 hover:text-gray-900 block mb-2"
                      onClick={toggleMenu}
                    >
                      <PhoneIcon className="h-5 w-5 inline mr-2" />
                      +27 43 726 2171
                    </a>
                    <Button 
                      asChild 
                      className="w-full bg-red-600 text-white hover:bg-red-700"
                      onClick={toggleMenu}
                    >
                      <Link href="/donate">Donate Now</Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
