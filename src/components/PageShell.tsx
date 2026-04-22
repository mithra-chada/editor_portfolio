"use client";

import { useState, createContext, useContext } from "react";
import { LoadingScreen } from "./LoadingScreen";

/** Becomes `true` the moment the loading screen finishes and unmounts. */
export const ReadyContext = createContext(false);
export const useReady = () => useContext(ReadyContext);

export function PageShell({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);
  return (
    <ReadyContext.Provider value={ready}>
      {!ready && <LoadingScreen onComplete={() => setReady(true)} />}
      {children}
    </ReadyContext.Provider>
  );
}
