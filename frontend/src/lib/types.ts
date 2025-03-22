export interface Currency {
  code: string;
  name: string;
}

export interface Country {
  name: string;
  currencies: Currency[];
}

export interface CurrencyWithCountries {
  code: string;
  name: string;
  countries: string[];
}

export type ViewMode = 'country-currencies' | 'currency-countries';

export interface ActiveState {
  activeCountries: Set<string>;
  activeCurrencies: Set<string>;
}
