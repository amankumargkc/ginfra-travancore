'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    setIsServicesOpen(false)
  }

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
              <Image
                src="/logo.png"
                alt="GInfra Travancore"
                width={320}
                height={107}
                className="h-20 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Home
              </Link>
              
              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleServices}
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors flex items-center"
                >
                  Services
                  <svg 
                    className={`ml-1 h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isServicesOpen && (
                  <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                      <Link
                        href="/services/all"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium border-b border-gray-100"
                        onClick={closeMenu}
                      >
                        All Services
                      </Link>
                      <Link
                        href="/services/defence"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                        onClick={closeMenu}
                      >
                        Defence Components
                      </Link>
                      <Link
                        href="/services/aerospace"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                        onClick={closeMenu}
                      >
                        Aerospace Components
                      </Link>
                      <Link
                        href="/services/robotics"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                        onClick={closeMenu}
                      >
                        Advanced Robotics
                      </Link>
                      <Link
                        href="/services/precision"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                        onClick={closeMenu}
                      >
                        Precision Machining
                      </Link>
                      <Link
                        href="/services/quality"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                        onClick={closeMenu}
                      >
                        Quality Assurance
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link 
                href="/about" 
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                About
              </Link>
              
              <Link 
                href="/contact" 
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors"
                onClick={closeMenu}
              >
                Home
              </Link>
              
              {/* Mobile Services */}
              <div>
                <button
                  onClick={toggleServices}
                  className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors w-full text-left flex items-center justify-between"
                >
                  Services
                  <svg 
                    className={`h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isServicesOpen && (
                  <div className="pl-6 space-y-1">
                    <Link
                      href="/services/all"
                      className="text-gray-600 hover:text-blue-600 block px-3 py-2 text-sm transition-colors font-medium"
                      onClick={closeMenu}
                    >
                      All Services
                    </Link>
                    <Link
                      href="/services/defence"
                      className="text-gray-600 hover:text-blue-600 block px-3 py-2 text-sm transition-colors"
                      onClick={closeMenu}
                    >
                      Defence Components
                    </Link>
                    <Link
                      href="/services/aerospace"
                      className="text-gray-600 hover:text-blue-600 block px-3 py-2 text-sm transition-colors"
                      onClick={closeMenu}
                    >
                      Aerospace Components
                    </Link>
                    <Link
                      href="/services/robotics"
                      className="text-gray-600 hover:text-blue-600 block px-3 py-2 text-sm transition-colors"
                      onClick={closeMenu}
                    >
                      Advanced Robotics
                    </Link>
                    <Link
                      href="/services/precision"
                      className="text-gray-600 hover:text-blue-600 block px-3 py-2 text-sm transition-colors"
                      onClick={closeMenu}
                    >
                      Precision Machining
                    </Link>
                    <Link
                      href="/services/quality"
                      className="text-gray-600 hover:text-blue-600 block px-3 py-2 text-sm transition-colors"
                      onClick={closeMenu}
                    >
                      Quality Assurance
                    </Link>
                  </div>
                )}
              </div>

              <Link 
                href="/about" 
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors"
                onClick={closeMenu}
              >
                About
              </Link>
              
              <Link 
                href="/contact" 
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors"
                onClick={closeMenu}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}