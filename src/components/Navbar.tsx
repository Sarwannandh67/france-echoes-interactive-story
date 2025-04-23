import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X, Globe, ChevronDown, BookOpen } from "lucide-react";
import { useLanguage } from "./LanguageContext";
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const { language, toggleLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isChaptersOpen, setIsChaptersOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setIsChaptersOpen(false);
  }, [location.pathname]);

  const chapters = [
    { id: 'chapter-1', french: 'La conquête de la Gaule', english: 'Conquest of Gaul' },
    { id: 'chapter-2', french: 'Jeanne d\'Arc', english: 'Joan of Arc' },
    { id: 'chapter-3', french: 'La Renaissance', english: 'The Renaissance' },
    { id: 'chapter-4', french: 'Louis XIV', english: 'Louis XIV' },
    { id: 'chapter-5', french: 'L\'Épopée Napoléonienne', english: 'Napoleonic Era' },
    { id: 'chapter-6', french: 'La Colonisation', english: 'Colonization' },
    { id: 'chapter-7', french: 'Les Guerres Mondiales', english: 'World Wars' },
    { id: 'chapter-8', french: 'Mai 1968', english: 'May 1968' },
  ];

  const mainLinks = [
    { path: '/', french: 'Accueil', english: 'Home' },
    { path: '/timeline', french: 'Chronologie', english: 'Timeline' },
    { path: '/about', french: 'À Propos', english: 'About' },
    { path: '/gallery', french: 'Galerie', english: 'Gallery' },
    { path: '/credits', french: 'Développeurs', english: 'Developers' },
  ];

  const scrollToChapter = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
      setIsChaptersOpen(false);
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0B1120]/90 backdrop-blur-md shadow-md' 
          : 'bg-[#0B1120]/70 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Logo/Home */}
            <NavLink
              to="/"
              className="text-lg sm:text-xl font-bold text-white font-playfair hover:text-blue-400 transition-colors truncate max-w-[200px]"
            >
              {language === 'french' ? 'Échos de France' : 'Echoes of France'}
            </NavLink>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-4 lg:gap-6">
              {/* Main Navigation Links */}
              {mainLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-sm lg:text-base px-2 py-1 rounded-md ${
                      isActive
                        ? 'text-blue-400 font-semibold bg-white/5'
                        : 'text-gray-300 hover:text-blue-400 hover:bg-white/5'
                    } transition-all`
                  }
                >
                  {language === 'french' ? link.french : link.english}
                </NavLink>
              ))}

              {/* Chapters Dropdown */}
              {location.pathname === '/' && (
                <div className="relative">
                  <button
                    onClick={() => setIsChaptersOpen(!isChaptersOpen)}
                    className="flex items-center gap-1 text-sm lg:text-base px-2 py-1 rounded-md text-gray-300 hover:text-blue-400 hover:bg-white/5 transition-all"
                  >
                    <BookOpen size={16} />
                    <span className="hidden sm:inline">
                      {language === 'french' ? 'Chapitres' : 'Chapters'}
                    </span>
                    <ChevronDown size={14} className={`transform transition-transform ${isChaptersOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {isChaptersOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute right-0 mt-2 w-56 bg-[#0B1120] rounded-lg shadow-lg border border-white/10 py-1 overflow-hidden"
                      >
                        {chapters.map((chapter) => (
                          <button
                            key={chapter.id}
                            onClick={() => scrollToChapter(chapter.id)}
                            className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:text-blue-400 hover:bg-white/5 transition-colors"
                          >
                            {language === 'french' ? chapter.french : chapter.english}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}
            </div>

            {/* Right Side Controls */}
            <div className="flex items-center gap-2 sm:gap-4">
              {/* Language Toggle */}
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 p-2 text-gray-300 hover:text-blue-400 hover:bg-white/5 rounded-md transition-all"
                aria-label="Toggle Language"
              >
                <Globe size={18} className="sm:w-5 sm:h-5" />
                <span className="text-sm font-medium">
                  {language === 'french' ? 'EN' : 'FR'}
                </span>
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 text-gray-300 hover:text-blue-400 hover:bg-white/5 rounded-md transition-all"
                aria-label="Toggle Menu"
              >
                {isMenuOpen ? (
                  <X size={18} className="sm:w-5 sm:h-5" />
                ) : (
                  <Menu size={18} className="sm:w-5 sm:h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-14 sm:top-16 z-40 md:hidden bg-[#0B1120] border-b border-white/10 overflow-hidden"
          >
            <div className="px-3 py-2 divide-y divide-white/10">
              {/* Main Navigation Links */}
              <div className="py-2">
                {mainLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={({ isActive }) =>
                      `block w-full text-left px-4 py-3 rounded-md ${
                        isActive
                          ? 'text-blue-400 font-semibold bg-white/5'
                          : 'text-gray-300 hover:text-blue-400 hover:bg-white/5'
                      } transition-all`
                    }
                  >
                    {language === 'french' ? link.french : link.english}
                  </NavLink>
                ))}
              </div>

              {/* Chapter Links (only shown on home page) */}
              {location.pathname === '/' && (
                <div className="py-2">
                  <div className="px-4 py-2 text-sm font-semibold text-gray-400">
                    {language === 'french' ? 'Chapitres' : 'Chapters'}
                  </div>
                  {chapters.map((chapter) => (
                    <button
                      key={chapter.id}
                      onClick={() => scrollToChapter(chapter.id)}
                      className="block w-full text-left px-4 py-3 text-gray-300 hover:text-blue-400 hover:bg-white/5 transition-all rounded-md"
                    >
                      {language === 'french' ? chapter.french : chapter.english}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer to prevent content from hiding under fixed navbar */}
      <div className="h-14 sm:h-16"></div>
    </>
  );
};

export default Navbar;

