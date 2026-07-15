import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { DEFAULT_PERSONA_ID, getPersona, matchPersona, personas } from "../data/personas";

/* Global "which role am I viewing" state, shared by the hero
   command bar, the navbar switcher and every page. Persisted to
   the URL (?role=) and localStorage so it survives navigation
   and refreshes and is shareable as a link. */

const PersonaContext = createContext(null);
const STORAGE_KEY = "portfolio.persona";
const VALID_IDS = personas.map((p) => p.id);

function readInitialId() {
  if (typeof window === "undefined") return DEFAULT_PERSONA_ID;
  const fromUrl = new URLSearchParams(window.location.search).get("role");
  if (fromUrl) {
    if (VALID_IDS.includes(fromUrl)) return fromUrl;
    const matched = matchPersona(fromUrl);
    if (matched) return matched;
  }
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored && VALID_IDS.includes(stored)) return stored;
  return DEFAULT_PERSONA_ID;
}

export function PersonaProvider({ children }) {
  const [personaId, setPersonaId] = useState(readInitialId);

  const setPersona = useCallback((id) => {
    if (!VALID_IDS.includes(id)) return;
    setPersonaId(id);
  }, []);

  /* Persist to localStorage + reflect in the URL without a navigation. */
  useEffect(() => {
    if (typeof window === "undefined") return;
    localStorage.setItem(STORAGE_KEY, personaId);
    const url = new URL(window.location.href);
    if (personaId === DEFAULT_PERSONA_ID) url.searchParams.delete("role");
    else url.searchParams.set("role", personaId);
    window.history.replaceState(window.history.state, "", url);
  }, [personaId]);

  const persona = getPersona(personaId);

  const value = useMemo(
    () => ({ personaId, persona, setPersona, personas }),
    [personaId, persona, setPersona]
  );

  return <PersonaContext.Provider value={value}>{children}</PersonaContext.Provider>;
}

export function usePersona() {
  const ctx = useContext(PersonaContext);
  if (!ctx) throw new Error("usePersona must be used inside <PersonaProvider>");
  return ctx;
}
