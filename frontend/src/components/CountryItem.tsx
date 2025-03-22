'use client';

import { Country } from '@/lib/types';
import ToggleSwitch from './ToggleSwitch';

interface CountryItemProps {
  country: Country;
  isActive: boolean;
  onToggle: () => void;
}

export default function CountryItem({ country, isActive, onToggle }: CountryItemProps) {
  return (
    <div
      className={`p-4 rounded-lg border ${
        isActive ? 'border-green-500 bg-green-50' : 'border-gray-200'
      } transition-colors`}
    >
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-medium">{country.name}</h3>
          <div className="mt-1 flex flex-wrap gap-2">
            {country.currencies.map(currency => (
              <span
                key={currency.code}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
              >
                {currency.code} - {currency.name}
              </span>
            ))}
          </div>
        </div>
        <ToggleSwitch isActive={isActive} onChange={onToggle} />
      </div>
    </div>
  );
}
