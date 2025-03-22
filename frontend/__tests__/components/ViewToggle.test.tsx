'use client';

import { render, screen, fireEvent } from '@testing-library/react';
import ViewToggle from '@/components/ViewToggle';

describe('ViewToggle', () => {
  it('calls toggle function when inactive button is clicked', () => {
    const mockToggle = jest.fn();

    render(<ViewToggle viewMode="country-currencies" onToggle={mockToggle} />);

    fireEvent.click(screen.getByText('Currencies + Countries'));
    expect(mockToggle).toHaveBeenCalledTimes(1);

    fireEvent.click(screen.getByText('Countries + Currencies'));
    expect(mockToggle).toHaveBeenCalledTimes(1);
  });
});
