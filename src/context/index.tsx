"use client";
import { createContext, useState } from "react";

export const AppContext = createContext<any>(null);

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [username, setUsername] = useState<string>("");

  return (
    <AppContext.Provider value={{ username, setUsername }}>
      {children}
    </AppContext.Provider>
  );
}
