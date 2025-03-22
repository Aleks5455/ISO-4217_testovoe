'use client';

import { Country } from '@/lib/types';
import CountryItem from './CountryItem';

interface CountriesListProps {
  countries: Country[];
  activeCountries: Set<string>;
  onToggleCountry: (countryName: string) => void;
}

export default function CountriesList({
  countries,
  activeCountries,
  onToggleCountry,
}: CountriesListProps) {
  return (
    <div className="space-y-4">
      {countries.map(country => (
        <CountryItem
          key={country.name}
          country={country}
          isActive={activeCountries.has(country.name)}
          onToggle={() => onToggleCountry(country.name)}
        />
      ))}
    </div>
  );
}
