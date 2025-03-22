'use client';

import { ViewMode } from "@/lib/types";

interface ViewToggleProps {
  viewMode: ViewMode;
  onToggle: () => void;
}

export default function ViewToggle({ viewMode, onToggle }: ViewToggleProps) {
  return (
    <div className="flex items-center justify-center mb-6">
      <div className="flex items-center space-x-2 bg-gray-100 p-1 rounded-lg">
        <button
          onClick={viewMode === 'currency-countries' ? onToggle : undefined}
          className={`px-4 py-2 rounded-md transition-colors cursor-pointer ${
            viewMode === 'country-currencies'
              ? 'bg-white shadow-sm text-green-600 font-medium'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          Страна + Валюты
        </button>
        <button
          onClick={viewMode === 'country-currencies' ? onToggle : undefined}
          className={`px-4 py-2 rounded-md transition-colors cursor-pointer ${
            viewMode === 'currency-countries'
              ? 'bg-white shadow-sm text-green-600 font-medium'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          Валюта + Страны
        </button>
      </div>
    </div>
  );
}
