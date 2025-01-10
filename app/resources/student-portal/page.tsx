'use client'

import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'

export default function StudentPortal() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Student Portal</h1>
            
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Login to Access Your Account</h2>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-theme-gold focus:border-theme-gold"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-theme-gold focus:border-theme-gold"
                    placeholder="Enter your password"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="remember"
                      className="h-4 w-4 text-theme-darkBlue focus:ring-theme-gold border-gray-300 rounded"
                    />
                    <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                      Remember me
                    </label>
                  </div>

                  <a href="#" className="text-sm text-theme-darkBlue hover:text-theme-gold">
                    Forgot your password?
                  </a>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-theme-darkBlue text-white hover:bg-theme-gold hover:text-theme-darkBlue"
                >
                  Sign In
                </Button>
              </form>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">New Student?</h2>
              <p className="text-gray-600 mb-6">
                Create an account to access exclusive features:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Track your progress</li>
                <li>Access study materials</li>
                <li>Join study groups</li>
                <li>Communicate with tutors</li>
              </ul>
              <Button
                variant="outline"
                className="w-full border-theme-darkBlue text-theme-darkBlue hover:bg-theme-lightBlue"
              >
                Register Now
              </Button>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
