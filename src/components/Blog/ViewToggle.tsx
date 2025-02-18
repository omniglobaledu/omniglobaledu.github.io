import React from 'react';
import { LayoutGrid, List } from 'lucide-react';

export type ViewType = 'grid' | 'list';

interface ViewToggleProps {
  viewType: ViewType;
  onViewChange: (view: ViewType) => void;
}

export default function ViewToggle({ viewType, onViewChange }: ViewToggleProps) {
  return (
    <div className="inline-flex items-center bg-white rounded-lg shadow p-1">
      <button
        onClick={() => onViewChange('grid')}
        className={`px-4 py-2 rounded-md flex items-center gap-2 ${
          viewType === 'grid'
            ? 'bg-blue-600 text-white'
            : 'text-gray-600 hover:text-blue-600'
        }`}
      >
        <LayoutGrid className="h-5 w-5" />
        <span className="hidden sm:inline">Grid</span>
      </button>
      <button
        onClick={() => onViewChange('list')}
        className={`px-4 py-2 rounded-md flex items-center gap-2 ${
          viewType === 'list'
            ? 'bg-blue-600 text-white'
            : 'text-gray-600 hover:text-blue-600'
        }`}
      >
        <List className="h-5 w-5" />
        <span className="hidden sm:inline">List</span>
      </button>
    </div>
  );
}