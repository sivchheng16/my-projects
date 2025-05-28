import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-forest-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-forest-100">
          <Leaf className="h-8 w-8 text-forest-600" />
        </div>
        
        <h1 className="font-serif text-4xl font-bold text-forest-900 mb-3">
          Page Not Found
        </h1>
        
        <p className="text-lg text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <div className="space-y-3">
          <Link
            to="/"
            className="block w-full bg-forest-600 text-white py-3 px-6 rounded-md font-medium hover:bg-forest-700 transition-colors"
          >
            Return Home
          </Link>
          
          <Link
            to="/contact"
            className="block w-full bg-white text-forest-800 border border-forest-200 py-3 px-6 rounded-md font-medium hover:bg-forest-50 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;