import { createContext, useContext } from "react";

const defaultTheme = {
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {}
};

export const ThemeContext = createContext(defaultTheme);

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme() {
    return useContext(ThemeContext);
}