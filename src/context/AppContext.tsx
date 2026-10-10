"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "id" | "en";
export type Theme = "light" | "dark";

interface AppContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  t: (idKey: string, enKey: string) => string;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("id");
  const [theme, setThemeState] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Read from localStorage on client mount
    try {
      const savedLang = localStorage.getItem("iot_lang") as Language;
      if (savedLang === "id" || savedLang === "en") {
        setLangState(savedLang);
      }

      const savedTheme = localStorage.getItem("iot_theme") as Theme;
      if (savedTheme === "light" || savedTheme === "dark") {
        setThemeState(savedTheme);
        if (savedTheme === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      } else {
        // System preference
        if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
          setThemeState("dark");
          document.documentElement.classList.add("dark");
        }
      }
    } catch {
      // LocalStorage might fail in incognito/strict iframe
    }
    setMounted(true);
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    try {
      localStorage.setItem("iot_lang", newLang);
    } catch {}
  };

  const toggleLang = () => {
    setLang(lang === "id" ? "en" : "id");
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    try {
      localStorage.setItem("iot_theme", newTheme);
    } catch {}
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Helper for inline dual-language text
  const t = (idText: string, enText: string) => {
    return lang === "en" ? enText : idText;
  };

  return (
    <AppContext.Provider
      value={{
        lang,
        setLang,
        toggleLang,
        theme,
        setTheme,
        toggleTheme,
        t,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}
