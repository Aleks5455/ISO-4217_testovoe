import { render, screen, fireEvent } from '@testing-library/react';
import CurrenciesList from '@/components/CurrenciesList';
import type { CurrencyWithCountries } from '@/lib/types';

const mockCurrencies: CurrencyWithCountries[] = [
  {
    code: 'TST',
    name: 'Test Currency',
    countries: ['Test Country 1', 'Test Country 2'],
  },
  {
    code: 'TST2',
    name: 'Test Currency 2',
    countries: ['Test Country 3'],
  },
];

describe('CurrenciesList', () => {
  it('calls toggle function when switch is clicked', () => {
    const mockActiveCurrencies = new Set<string>();
    const mockToggleCurrency = jest.fn();

    render(
      <CurrenciesList
        currencies={mockCurrencies}
        activeCurrencies={mockActiveCurrencies}
        onToggleCurrency={mockToggleCurrency}
      />
    );

    const checkboxes = screen.getAllByRole('checkbox');
    expect(checkboxes).toHaveLength(2);

    fireEvent.click(checkboxes[0]);
    expect(mockToggleCurrency).toHaveBeenCalledWith('TST');

    fireEvent.click(checkboxes[1]);
    expect(mockToggleCurrency).toHaveBeenCalledWith('TST2');
  });
});
