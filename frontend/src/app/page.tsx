'use client';

import { useIsoData } from '@/hooks/useIsoData';
import CountriesList from '@/components/CountriesList';
import ViewToggle from '@/components/ViewToggle';
import CurrenciesList from '@/components/CurrenciesList';

export default function Home() {
  const {
    countries,
    currenciesWithCountries,
    viewMode,
    toggleViewMode,
    activeState,
    toggleCountry,
    toggleCurrency,
    isLoading,
  } = useIsoData();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
      </div>
    );
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Тестовое задание по ISO-4217</h1>

      <ViewToggle viewMode={viewMode} onToggle={toggleViewMode} />

      {viewMode === 'country-currencies' ? (
        <CountriesList
          countries={countries}
          activeCountries={activeState.activeCountries}
          onToggleCountry={toggleCountry}
        />
      ) : (
        <CurrenciesList
          currencies={currenciesWithCountries}
          activeCurrencies={activeState.activeCurrencies}
          onToggleCurrency={toggleCurrency}
        />
      )}
    </main>
  );
}
