import React from 'react';
import { Network } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Network className="h-6 w-6 text-blue-600" />
          <h1 className="text-xl font-bold text-gray-800">GraphViz Explorer</h1>
        </div>
        <div className="text-sm text-gray-600">
          Interactive Graph Visualization Tool
        </div>
      </div>
    </header>
  );
};

export default Header;