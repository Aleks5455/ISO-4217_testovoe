import { render, screen, fireEvent } from "@testing-library/react"
import CountriesList from "@/components/CountriesList"
import type { Country } from "@/lib/types"

const mockCountries: Country[] = [
  {
    name: "Test Country 1",
    currencies: [{ code: "TST", name: "Test Currency" }],
  },
  {
    name: "Test Country 2",
    currencies: [{ code: "TST2", name: "Test Currency 2" }],
  },
]

describe("CountriesList", () => {
  it("calls toggle function when switch is clicked", () => {
    const mockActiveCountries = new Set<string>()
    const mockToggleCountry = jest.fn()

    render(
      <CountriesList
        countries={mockCountries}
        activeCountries={mockActiveCountries}
        onToggleCountry={mockToggleCountry}
      />,
    )

    const checkboxes = screen.getAllByRole("checkbox")
    expect(checkboxes).toHaveLength(2)

    fireEvent.click(checkboxes[0])
    expect(mockToggleCountry).toHaveBeenCalledWith("Test Country 1")

    fireEvent.click(checkboxes[1])
    expect(mockToggleCountry).toHaveBeenCalledWith("Test Country 2")
  })
})

