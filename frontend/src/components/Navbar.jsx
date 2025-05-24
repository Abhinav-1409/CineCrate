import React from 'react'

import { useState } from "react"
import { Link } from "react-router-dom"
import { Search, User, Menu, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isProfileOpen, setIsProfileOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 glass-effect rounded-b-2xl shadow-lg shadow-black/30 border-b border-red-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center group">
              <span className="text-red-600 text-2xl mr-2 group-hover:scale-110 transition-transform duration-300">
                🎬
              </span>
              <span className="font-playfair font-bold text-xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                CineCrate
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-red-500 transition-colors relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/films" className="hover:text-red-500 transition-colors relative group">
              Films
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/quests" className="hover:text-red-500 transition-colors relative group">
              Quests
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>

          {/* Search and Profile */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search movies..."
                className="bg-gray-900/80 rounded-full pl-10 pr-4 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 w-48 border border-gray-800 focus:border-red-500/50 transition-all"
              />
              <Search className="absolute left-3 top-1.5 h-4 w-4 text-gray-400" />
            </div>

            {isLoggedIn ? (
              <div className="relative">
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center justify-center h-8 w-8 rounded-full bg-gradient-to-br from-red-700 to-red-900 hover:from-red-600 hover:to-red-800 transition-colors shadow-md shadow-red-900/30"
                >
                  <User className="h-4 w-4" />
                </button>

                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-48 glass-effect rounded-xl shadow-lg py-1 border border-red-900/20">
                    <Link to="/profile" className="block px-4 py-2 hover:bg-red-900/20 rounded-lg mx-1">
                      Profile
                    </Link>
                    <Link to="/watchlist" className="block px-4 py-2 hover:bg-red-900/20 rounded-lg mx-1">
                      Watchlist
                    </Link>
                    <button
                      onClick={() => setIsLoggedIn(false)}
                      className="block w-full text-left px-4 py-2 hover:bg-red-900/20 rounded-lg mx-1"
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link to="/login" className="btn-primary">
                Sign In
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-red-900/30 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden glass-effect rounded-b-2xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 rounded-md hover:bg-red-900/20" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link
              to="/films"
              className="block px-3 py-2 rounded-md hover:bg-red-900/20"
              onClick={() => setIsOpen(false)}
            >
              Films
            </Link>
            <Link
              to="/quests"
              className="block px-3 py-2 rounded-md hover:bg-red-900/20"
              onClick={() => setIsOpen(false)}
            >
              Quests
            </Link>

            <div className="relative mt-3 mb-3">
              <input
                type="text"
                placeholder="Search movies..."
                className="bg-gray-900/80 rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 w-full border border-gray-800"
              />
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            </div>

            {isLoggedIn ? (
              <>
                <Link
                  to="/profile"
                  className="block px-3 py-2 rounded-md hover:bg-red-900/20"
                  onClick={() => setIsOpen(false)}
                >
                  Profile
                </Link>
                <Link
                  to="/watchlist"
                  className="block px-3 py-2 rounded-md hover:bg-red-900/20"
                  onClick={() => setIsOpen(false)}
                >
                  Watchlist
                </Link>
                <button
                  onClick={() => {
                    setIsLoggedIn(false)
                    setIsOpen(false)
                  }}
                  className="block w-full text-left px-3 py-2 rounded-md hover:bg-red-900/20"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="block px-3 py-2 rounded-md bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 text-center"
                onClick={() => setIsOpen(false)}
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}
