import React from 'react';
import { Search } from 'lucide-react';

interface BlogSearchProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export default function BlogSearch({ searchQuery, onSearchChange }: BlogSearchProps) {
  return (
    <div className="relative w-full max-w-lg">
      {/* Wrapping input and icon inside flex for better alignment */}
      <div className="relative flex items-center">
        {/* Search Icon (inside input) */}
        <Search className="absolute left-3 text-gray-400 h-5 w-5" />

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search articles..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full h-12 pl-10 pr-4 border border-gray-300 rounded-md 
                     focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                     outline-none bg-white 
                     autofill:bg-transparent autofill:shadow-none"
        />
      </div>
    </div>
  );
}
