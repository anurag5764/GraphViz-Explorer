import React from 'react';
import { Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-600">
            © 2024 GraphViz Explorer. All rights reserved.
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <span className="text-sm text-gray-600">
              Created with ❤️ by Anurag
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;