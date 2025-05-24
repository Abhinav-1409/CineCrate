import React from 'react'
import { Link } from "react-router-dom"
import { Github, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-950 pt-12 pb-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Slogan */}
          <div>
            <div className="flex items-center">
              <span className="text-red-600 text-2xl mr-2">🎬</span>
              <span className="font-playfair font-bold text-xl">CineCrate</span>
            </div>
            <p className="mt-2 text-gray-400 text-sm">
              Your personal movie companion. Discover, track, and explore films with personalized recommendations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/films" className="text-gray-400 hover:text-white transition-colors">
                  Films
                </Link>
              </li>
              <li>
                <Link to="/quests" className="text-gray-400 hover:text-white transition-colors">
                  Quests
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact & About</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} CineCrate. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a to="#" className="text-gray-400 hover:text-white transition-colors">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a to="#" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a to="#" className="text-gray-400 hover:text-white transition-colors">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
