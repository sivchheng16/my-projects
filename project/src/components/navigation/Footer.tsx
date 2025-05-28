import React from 'react';
import { Link } from 'react-router-dom';
import {
  Leaf,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-forest-900 text-cream">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Column 1: Logo & Description */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Leaf className="h-7 w-7 text-forest-300" />
              <span className="font-serif text-xl font-semibold text-white">
                VitaminAir
              </span>
            </Link>
            <p className="text-forest-100/80 text-sm leading-relaxed">
              A sustainable living village dedicated to forest preservation and
              community-based ecological living on 100 hectares of protected
              land in Mondulkiri, Cambodia.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="#"
                className="text-forest-200 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-forest-200 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-forest-200 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-forest-200 hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { name: 'About Us', path: '/about' },
                { name: 'Our Projects', path: '/projects' },
                { name: 'Sustainability', path: '/sustainability' },
                { name: 'Community', path: '/community' },
                { name: 'Visit Us', path: '/visit' },
                { name: 'Contact', path: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-forest-100/80 hover:text-white text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-white mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-forest-300 mt-0.5 flex-shrink-0" />
                <span className="text-forest-100/80 text-sm">
                  VitaminAir Sustainable Village, 
                  <br />
                  Mondulkiri Province,
                  <br />
                  Cambodia
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-forest-300 flex-shrink-0" />
                <span className="text-forest-100/80 text-sm">
                  +855 12 345 678
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-forest-300 flex-shrink-0" />
                <span className="text-forest-100/80 text-sm">
                  info@vitaminair.org
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-white mb-4">
              Stay Connected
            </h3>
            <p className="text-forest-100/80 text-sm mb-3">
              Subscribe to our newsletter for updates on our projects and events.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-3 py-2 text-sm bg-forest-800 text-white border border-forest-700 rounded-md focus:outline-none focus:ring-1 focus:ring-forest-400"
                required
              />
              <button
                type="submit"
                className="w-full bg-forest-500 hover:bg-forest-600 text-white text-sm font-medium py-2 px-4 rounded-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-forest-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-forest-300/70">
          <p>© {currentYear} VitaminAir. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;