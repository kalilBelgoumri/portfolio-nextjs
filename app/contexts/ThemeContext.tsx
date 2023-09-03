"use client";
import React, {
  JSXElementConstructor,
  ReactElement,
  ReactNode,
  ReactPortal,
  createContext,
  useEffect,
  useState,
} from "react";
import { themeData } from "../data/themeData";
import { ThemeType } from "../types/types";

const defaultThemeValue: ThemeType = {
  theme: themeData.theme, // Assurez-vous que cela correspond à la structure de ThemeValues
  drawerOpen: false,
  setHandleDrawer: () => {
    ("");
  },
};

export const ThemeContext = createContext<ThemeType>(defaultThemeValue);

function ThemeContextProvider(props: {
  children:
    | string
    | number
    | boolean
    | ReactElement<string | JSXElementConstructor<string>>
    | Iterable<ReactNode>
    | ReactPortal
    | null
    | undefined;
}) {
  const [theme, setTheme] = useState(themeData.theme);
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  const setHandleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  useEffect(() => {
    setTheme(themeData.theme);
  }, [theme]);

  const value = { theme, drawerOpen, setHandleDrawer };
  return (
    <ThemeContext.Provider value={value}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;
