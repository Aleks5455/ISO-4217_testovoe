'use client';

import { CurrencyWithCountries } from '@/lib/types';
import CurrencyItem from './CurrencyItem';

interface CurrenciesListProps {
  currencies: CurrencyWithCountries[];
  activeCurrencies: Set<string>;
  onToggleCurrency: (currencyCode: string) => void;
}

export default function CurrenciesList({
  currencies,
  activeCurrencies,
  onToggleCurrency,
}: CurrenciesListProps) {
  return (
    <div className="space-y-4">
      {currencies.map(currency => (
        <CurrencyItem
          key={currency.code}
          currency={currency}
          isActive={activeCurrencies.has(currency.code)}
          onToggle={() => onToggleCurrency(currency.code)}
        />
      ))}
    </div>
  );
}
