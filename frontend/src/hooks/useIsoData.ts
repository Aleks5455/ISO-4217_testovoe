"use client";

import { useState, useEffect } from 'react';
import { ViewMode, ActiveState, Country, CurrencyWithCountries } from '@/lib/types';
import { 
  fetchCountries, 
  fetchCurrenciesWithCountries, 
  fetchActiveState, 
  saveActiveState 
} from '@/lib/api';

export function useIsoData() {
  const [viewMode, setViewMode] = useState<ViewMode>('country-currencies');
  const [countries, setCountries] = useState<Country[]>([]);
  const [currenciesWithCountries, setCurrenciesWithCountries] = useState<CurrencyWithCountries[]>([]);
  const [activeState, setActiveState] = useState<ActiveState>({
    activeCountries: new Set<string>(),
    activeCurrencies: new Set<string>(),
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        
        const [countriesData, currenciesData, activeStateData] = await Promise.all([
          fetchCountries(),
          fetchCurrenciesWithCountries(),
          fetchActiveState(),
        ]);
        
        setCountries(countriesData);
        setCurrenciesWithCountries(currenciesData);
        setActiveState(activeStateData);
      } catch (error) {
        console.error('Failed to load data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      saveActiveState(activeState).catch(error => {
        console.error('Failed to save active state:', error);
      });
    }
  }, [activeState, isLoading]);

  const toggleCountry = (countryName: string) => {
    setActiveState(prev => {
      const newActiveCountries = new Set(prev.activeCountries);
      
      if (newActiveCountries.has(countryName)) {
        newActiveCountries.delete(countryName);
      } else {
        newActiveCountries.add(countryName);
      }
      
      return {
        ...prev,
        activeCountries: newActiveCountries,
      };
    });
  };

  const toggleCurrency = (currencyCode: string) => {
    setActiveState(prev => {
      const newActiveCurrencies = new Set(prev.activeCurrencies);
      
      if (newActiveCurrencies.has(currencyCode)) {
        newActiveCurrencies.delete(currencyCode);
      } else {
        newActiveCurrencies.add(currencyCode);
      }
      
      return {
        ...prev,
        activeCurrencies: newActiveCurrencies,
      };
    });
  };

  const toggleViewMode = () => {
    setViewMode(prev => prev === 'country-currencies' ? 'currency-countries' : 'country-currencies');
  };

  return {
    countries,
    currenciesWithCountries,
    viewMode,
    toggleViewMode,
    activeState,
    toggleCountry,
    toggleCurrency,
    isLoading,
  };
}