'use client';

import { CurrencyWithCountries } from '@/lib/types';
import ToggleSwitch from './ToggleSwitch';

interface CurrencyItemProps {
  currency: CurrencyWithCountries;
  isActive: boolean;
  onToggle: () => void;
}

export default function CurrencyItem({ currency, isActive, onToggle }: CurrencyItemProps) {
  return (
    <div
      className={`p-4 rounded-lg border ${
        isActive ? 'border-green-500 bg-green-50' : 'border-gray-200'
      } transition-colors`}
    >
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-medium">
            {currency.code} - {currency.name}
          </h3>
          <div className="mt-1">
            <p className="text-sm text-gray-500">Валюта в:</p>
            <div className="mt-1 flex flex-wrap gap-2">
              {currency.countries.map(country => (
                <span
                  key={country}
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                >
                  {country}
                </span>
              ))}
            </div>
          </div>
        </div>
        <ToggleSwitch isActive={isActive} onChange={onToggle} />
      </div>
    </div>
  );
}
