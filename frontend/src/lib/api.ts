import { Country, CurrencyWithCountries, ActiveState } from './types';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

interface ApiCountry {
  id: number;
  name: string;
  currencies: ApiCurrency[];
}

interface ApiCurrency {
  id: number;
  code: string;
  name: string;
  countries?: ApiCountry[];
}

interface ApiActiveState {
  id: number;
  userId: string;
  activeCountries: string[];
  activeCurrencies: string[];
}

export async function fetchCountries(): Promise<Country[]> {
  const response = await fetch(`${API_URL}/countries`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch countries');
  }
  
  const data = await response.json() as ApiCountry[];
  
  return data.map((country: ApiCountry) => ({
    name: country.name,
    currencies: country.currencies.map((currency: ApiCurrency) => ({
      code: currency.code,
      name: currency.name,
    })),
  }));
}

export async function fetchCurrenciesWithCountries(): Promise<CurrencyWithCountries[]> {
  const response = await fetch(`${API_URL}/currencies`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch currencies');
  }
  
  const data = await response.json() as ApiCurrency[];
  
  return data.map((currency: ApiCurrency) => ({
    code: currency.code,
    name: currency.name,
    countries: currency.countries?.map((country: ApiCountry) => country.name) || [],
  }));
}

export async function fetchActiveState(): Promise<ActiveState> {
  const response = await fetch(`${API_URL}/active-states/user`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch active state');
  }
  
  const data = await response.json() as ApiActiveState;
  
  return {
    activeCountries: new Set(data.activeCountries),
    activeCurrencies: new Set(data.activeCurrencies),
  };
}

export async function saveActiveState(state: ActiveState): Promise<void> {
  const response = await fetch(`${API_URL}/active-states/user/default`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      activeCountries: Array.from(state.activeCountries),
      activeCurrencies: Array.from(state.activeCurrencies),
    }),
  });
  
  if (!response.ok) {
    throw new Error('Failed to save active state');
  }
}