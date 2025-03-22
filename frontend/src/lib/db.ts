import { ActiveState } from "./types";
import axios from 'axios';

const API_URL = 'http://localhost:3001/api';

export const getActiveState = async (): Promise<ActiveState> => {
  try {
    const response = await axios.get(`${API_URL}/active-state`);
    return response.data;
  } catch (error) {
    console.error("Error retrieving data from API:", error);
    return {
      activeCountries: new Set(),
      activeCurrencies: new Set(),
    };
  }
};

export const saveActiveState = async (state: ActiveState) => {
  try {
    await axios.post(`${API_URL}/active-state`, {
      activeCountries: Array.from(state.activeCountries),
      activeCurrencies: Array.from(state.activeCurrencies),
    });
  } catch (error) {
    console.error("Error saving data to API:", error);
  }
};
