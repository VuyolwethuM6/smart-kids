'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ExclamationTriangleIcon } from '@heroicons/react/24/solid';

export default function ErrorPage({ 
  error, 
  reset 
}: { 
  error: Error & { digest?: string }, 
  reset: () => void 
}) {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-16">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full bg-white shadow-2xl rounded-2xl overflow-hidden"
      >
        <div className="bg-red-600 text-white p-6 text-center">
          <ExclamationTriangleIcon className="w-16 h-16 mx-auto mb-4 text-white" />
          <h1 className="text-3xl font-bold mb-2">Oops! Something Went Wrong</h1>
        </div>
        
        <div className="p-8 text-center">
          <p className="text-gray-700 mb-6">
            We apologize, but an unexpected error has occurred. 
            Don't worry, our team has been notified.
          </p>
          
          <div className="space-y-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => reset()}
              className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold 
              hover:bg-red-700 transition-colors duration-300"
            >
              Try Again
            </motion.button>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="/" 
                className="w-full block bg-gray-100 text-gray-800 py-3 rounded-lg 
                font-semibold hover:bg-gray-200 transition-colors duration-300"
              >
                Return to Home
              </Link>
            </motion.div>
          </div>
          
          {process.env.NODE_ENV === 'development' && (
            <div className="mt-6 bg-gray-100 p-4 rounded-lg text-left">
              <h3 className="font-bold text-sm mb-2">Error Details:</h3>
              <pre className="text-xs text-gray-700 overflow-x-auto">
                {error.message}
              </pre>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
