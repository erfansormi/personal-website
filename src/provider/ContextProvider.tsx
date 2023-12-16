import React, { ReactNode, createContext, useContext, useEffect, useState } from "react";

interface GlobalState {
  themeMode: "dark" | "light";
}

interface ContextTypes {
  globalState: GlobalState;
  setGlobalState: React.Dispatch<React.SetStateAction<GlobalState>>;
}

const Context = createContext({} as ContextTypes);
export const useGlobalState = () => useContext(Context);

const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [globalState, setGlobalState] = useState<GlobalState>({
    themeMode: "dark",
  });

  // get theme mode from local storage
  const handleThemeMode = () => {
    if (typeof window === "undefined") return "dark";
    const themModeValue: string | null = localStorage.getItem("theme-mode");
    if (!themModeValue) return "dark";
    return themModeValue as "dark" | "light";
  };

  useEffect(() => {
    const themeMode = handleThemeMode();
    const html = document.querySelector("html");
    if (themeMode === "light") {
      html?.classList.remove("dark");
      setGlobalState({ themeMode: "light" });
    } else {
      html?.classList.add("dark");
      setGlobalState({ themeMode: "dark" });
    }
  }, []);

  return (
    <Context.Provider
      value={{
        globalState,
        setGlobalState,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
