import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';

type NavbarProps = {
  isScrolled: boolean;
};

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Sustainability', path: '/sustainability' },
    { name: 'Community', path: '/community' },
    { name: 'Visit', path: '/visit' },
    { name: 'Contact', path: '/contact' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-cream/95 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <NavLink
            to="/"
            className="flex items-center space-x-2"
            onClick={closeMenu}
          >
            <Leaf
              className={`h-8 w-8 ${
                isScrolled ? 'text-forest-600' : 'text-forest-500'
              }`}
            />
            <span
              className={`font-serif text-2xl font-semibold tracking-tight ${
                isScrolled ? 'text-forest-900' : 'text-forest-800'
              }`}
            >
              VitaminAir
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-forest-700 bg-forest-50'
                      : isScrolled
                      ? 'text-forest-900 hover:text-forest-600 hover:bg-forest-50/70'
                      : 'text-forest-800 hover:text-forest-700 hover:bg-cream/40'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-forest-800 p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isMenuOpen ? 'auto' : 0,
          opacity: isMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-cream/95 backdrop-blur-md"
      >
        <div className="container mx-auto px-4 py-3">
          <nav className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-md text-base font-medium ${
                    isActive
                      ? 'text-forest-700 bg-forest-50'
                      : 'text-forest-800 hover:text-forest-600 hover:bg-forest-50/70'
                  }`
                }
                onClick={closeMenu}
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
        </div>
      </motion.div>
    </header>
  );
};

export default Navbar;