import { CurrencyWithCountries } from "./types";
import { Country } from "./types";

export const countries: Country[] = [
  {
    name: "United States",
    currencies: [{ code: "USD", name: "US Dollar" }],
  },
  {
    name: "United Kingdom",
    currencies: [{ code: "GBP", name: "Pound Sterling" }],
  },
  {
    name: "European Union",
    currencies: [{ code: "EUR", name: "Euro" }],
  },
  {
    name: "Japan",
    currencies: [{ code: "JPY", name: "Japanese Yen" }],
  },
  {
    name: "China",
    currencies: [{ code: "CNY", name: "Chinese Yuan" }],
  },
  {
    name: "Switzerland",
    currencies: [{ code: "CHF", name: "Swiss Franc" }],
  },
  {
    name: "Canada",
    currencies: [{ code: "CAD", name: "Canadian Dollar" }],
  },
  {
    name: "Australia",
    currencies: [{ code: "AUD", name: "Australian Dollar" }],
  },
  {
    name: "New Zealand",
    currencies: [{ code: "NZD", name: "New Zealand Dollar" }],
  },
  {
    name: "India",
    currencies: [{ code: "INR", name: "Indian Rupee" }],
  },
  {
    name: "Brazil",
    currencies: [{ code: "BRL", name: "Brazilian Real" }],
  },
  {
    name: "Russia",
    currencies: [{ code: "RUB", name: "Russian Ruble" }],
  },
  {
    name: "South Africa",
    currencies: [{ code: "ZAR", name: "South African Rand" }],
  },
  {
    name: "Mexico",
    currencies: [{ code: "MXN", name: "Mexican Peso" }],
  },
  {
    name: "Singapore",
    currencies: [{ code: "SGD", name: "Singapore Dollar" }],
  },
];

export const getCurrenciesWithCountries = (): CurrencyWithCountries[] => {
  const currencyMap = new Map<string, CurrencyWithCountries>();

  countries.forEach((country) => {
    country.currencies.forEach((currency) => {
      if (!currencyMap.has(currency.code)) {
        currencyMap.set(currency.code, {
          code: currency.code,
          name: currency.name,
          countries: [],
        });
      }

      currencyMap.get(currency.code)?.countries.push(country.name);
    });
  });

  return Array.from(currencyMap.values());
};
