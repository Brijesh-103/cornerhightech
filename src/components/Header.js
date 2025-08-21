"use client"

import { useState, useEffect } from "react"
import { Menu, X, Building2 } from "lucide-react"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const smoothScrollTo = (elementId) => {
    const element = document.getElementById(elementId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-200" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center transform hover:scale-110 transition-transform duration-200">
              <Building2 className="text-white" size={20} />
            </div>
            <span
              className={`text-xl font-bold transition-colors duration-300 font-serif ${
                scrolled ? "text-slate-900" : "text-white"
              }`}
            >
              Corner High Tech
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {["home", "services", "about", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => smoothScrollTo(item)}
                className={`relative font-medium transition-all duration-300 capitalize hover:scale-105 ${
                  scrolled ? "text-slate-700 hover:text-blue-600" : "text-slate-200 hover:text-white"
                }`}
              >
                {item}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <button className="gradient-primary text-white px-6 py-2 rounded-full font-medium hover:scale-105 transition-all duration-300 shadow-lg">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
              scrolled ? "text-slate-700 hover:bg-slate-100" : "text-white hover:bg-white/10"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? "max-h-96 py-4" : "max-h-0"
          }`}
        >
          <nav className="border-t border-slate-200 bg-white/95 backdrop-blur-md rounded-b-lg">
            <div className="flex flex-col space-y-2 p-4">
              {["home", "services", "about", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => smoothScrollTo(item)}
                  className="text-left text-slate-700 hover:text-blue-600 font-medium capitalize py-3 px-4 rounded-lg hover:bg-blue-50 transition-all duration-300 hover:translate-x-2"
                >
                  {item}
                </button>
              ))}
              <button className="gradient-primary text-white py-3 px-4 rounded-lg font-medium mt-4">Get Started</button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
