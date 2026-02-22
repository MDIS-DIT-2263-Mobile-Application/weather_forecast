import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { weatherAssistant } from '../ai/weatherAssistant';
import { fetchRainfallData } from '../services/rainfallService';
import { fetchWeatherData, type CurrentWeatherData, type ForecastPoint } from '../services/weatherService';

export type ScreenKey =
  | 'Home'
  | 'Forecast'
  | 'Rainfall'
  | 'Assistant'
  | 'LocationList'
  | 'LocationDetail'
  | 'Alerts'
  | 'Reminder'
  | 'Settings'
  | 'About';

export interface AssistantMessage {
  id: string;
  role: 'user' | 'assistant';
  text: string;
  timestamp: string;
}

export interface RainfallRecord {
  location: string;
  rainIntensity: number;
  forecastTime: string;
}

export interface WeatherState {
  activeScreen: ScreenKey;
  selectedLocation: string;
  isLoading: boolean;
  error: string;
  currentWeather: CurrentWeatherData | null;
  forecast: ForecastPoint[];
  rainfall: RainfallRecord[];
  messages: AssistantMessage[];
  setActiveScreen: (screen: ScreenKey) => void;
  setSelectedLocation: (location: string) => void;
  fetchWeather: (location: string) => Promise<void>;
  fetchRainfall: (location: string) => Promise<void>;
  askAssistant: (question: string) => void;
  clearMessages: () => void;
}

const newMessage = (role: 'user' | 'assistant', text: string): AssistantMessage => ({
  id: `${role}-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`,
  role,
  text,
  timestamp: new Date().toISOString(),
});

const fallbackContext: CurrentWeatherData = {
  location: 'Kuala Lumpur',
  temperature: 27,
  rainIntensity: 0,
  forecastTime: new Date().toISOString(),
  condition: 'Unknown',
  updatedAt: new Date().toISOString(),
};

export const useWeatherStore = create<WeatherState>()(
  persist(
    (set, get) => ({
      activeScreen: 'Home',
      selectedLocation: 'Kuala Lumpur',
      isLoading: false,
      error: '',
      currentWeather: null,
      forecast: [],
      rainfall: [],
      messages: [],

      setActiveScreen: (screen) => set({ activeScreen: screen }),
      setSelectedLocation: (location) => set({ selectedLocation: location }),

      fetchWeather: async (location) => {
        set({ isLoading: true, error: '' });
        try {
          const data = await fetchWeatherData(location);
          set({
            currentWeather: data.currentWeather,
            forecast: data.forecast,
            isLoading: false,
          });
        } catch (error) {
          set({
            error: `Weather fetch failed: ${String(error)}`,
            isLoading: false,
          });
        }
      },

      fetchRainfall: async (location) => {
        set({ isLoading: true, error: '' });
        try {
          const data = await fetchRainfallData(location);
          set({ rainfall: data, isLoading: false });
        } catch (error) {
          set({
            error: `Rainfall fetch failed: ${String(error)}`,
            isLoading: false,
          });
        }
      },

      askAssistant: (question) => {
        const weatherContext = get().currentWeather ?? fallbackContext;
        const response = weatherAssistant(question, {
          rainIntensity: weatherContext.rainIntensity,
          temperature: weatherContext.temperature,
          forecastTime: weatherContext.forecastTime,
        });

        const messages = [...get().messages, newMessage('user', question), newMessage('assistant', response)];
        set({ messages });
      },

      clearMessages: () => set({ messages: [] }),
    }),
    {
      name: 'weather-app-store',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({
        selectedLocation: state.selectedLocation,
        currentWeather: state.currentWeather,
        forecast: state.forecast,
        rainfall: state.rainfall,
        messages: state.messages,
      }),
    }
  )
);
