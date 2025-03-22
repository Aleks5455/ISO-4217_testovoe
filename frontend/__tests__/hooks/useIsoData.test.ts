import { renderHook, act } from '@testing-library/react';
import { useIsoData } from '@/hooks/useIsoData';
import * as db from '@/lib/db';

jest.mock('@/lib/db', () => ({
  getActiveState: jest.fn(),
  saveActiveState: jest.fn(),
}));

describe('useIsoData', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    (db.getActiveState as jest.Mock).mockResolvedValue({
      activeCountries: new Set(),
      activeCurrencies: new Set(),
    });

    (db.saveActiveState as jest.Mock).mockResolvedValue(undefined);
  });

  it('initializes with default values', async () => {
    const { result, rerender } = renderHook(() => useIsoData());

    expect(result.current.isLoading).toBe(true);

    await act(async () => {
      await Promise.resolve();
      rerender();
    });

    expect(result.current.isLoading).toBe(false);
    expect(result.current.viewMode).toBe('country-currencies');
    expect(result.current.activeState.activeCountries.size).toBe(0);
    expect(result.current.activeState.activeCurrencies.size).toBe(0);
    expect(db.getActiveState).toHaveBeenCalledTimes(1);
  });

  it('toggles view mode correctly', async () => {
    const { result, rerender } = renderHook(() => useIsoData());

    await act(async () => {
      await Promise.resolve();
      rerender();
    });

    expect(result.current.viewMode).toBe('country-currencies');

    act(() => {
      result.current.toggleViewMode();
    });

    expect(result.current.viewMode).toBe('currency-countries');

    act(() => {
      result.current.toggleViewMode();
    });

    expect(result.current.viewMode).toBe('country-currencies');
  });

  it('toggles country active state correctly', async () => {
    const { result, rerender } = renderHook(() => useIsoData());

    await act(async () => {
      await Promise.resolve();
      rerender();
    });

    expect(result.current.activeState.activeCountries.size).toBe(0);

    act(() => {
      result.current.toggleCountry('United States');
    });

    expect(result.current.activeState.activeCountries.has('United States')).toBe(true);
    expect(result.current.activeState.activeCountries.size).toBe(1);

    act(() => {
      result.current.toggleCountry('United States');
    });

    expect(result.current.activeState.activeCountries.has('United States')).toBe(false);
    expect(result.current.activeState.activeCountries.size).toBe(0);

    expect(db.saveActiveState).toHaveBeenCalled();
  });

  it('toggles currency active state correctly', async () => {
    const { result, rerender } = renderHook(() => useIsoData());

    await act(async () => {
      await Promise.resolve();
      rerender();
    });

    expect(result.current.activeState.activeCurrencies.size).toBe(0);

    act(() => {
      result.current.toggleCurrency('USD');
    });

    expect(result.current.activeState.activeCurrencies.has('USD')).toBe(true);
    expect(result.current.activeState.activeCurrencies.size).toBe(1);

    act(() => {
      result.current.toggleCurrency('USD');
    });

    expect(result.current.activeState.activeCurrencies.has('USD')).toBe(false);
    expect(result.current.activeState.activeCurrencies.size).toBe(0);

    expect(db.saveActiveState).toHaveBeenCalled();
  });
});
