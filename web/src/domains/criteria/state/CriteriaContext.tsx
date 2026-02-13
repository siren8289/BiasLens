import React, { createContext, useContext, useState, ReactNode } from "react";
import { Criteria, CRITERIA_OPTIONS } from "../../../app/types";

interface CriteriaContextType {
  criteria: Criteria[];
  toggleCriteria: (id: string) => void;
  resetCriteria: () => void;
  hasAnyCriteriaEnabled: boolean;
}

const CriteriaContext = createContext<CriteriaContextType | undefined>(
  undefined,
);

export function CriteriaProvider({ children }: { children: ReactNode }) {
  const [criteria, setCriteria] = useState<Criteria[]>(CRITERIA_OPTIONS);

  const toggleCriteria = (id: string) => {
    setCriteria((prev) =>
      prev.map((c) => (c.id === id ? { ...c, enabled: !c.enabled } : c)),
    );
  };

  const resetCriteria = () => {
    setCriteria(CRITERIA_OPTIONS);
  };

  const hasAnyCriteriaEnabled = criteria.some((c) => c.enabled);

  return (
    <CriteriaContext.Provider
      value={{ criteria, toggleCriteria, resetCriteria, hasAnyCriteriaEnabled }}
    >
      {children}
    </CriteriaContext.Provider>
  );
}

export function useCriteria() {
  const context = useContext(CriteriaContext);
  if (context === undefined) {
    throw new Error("useCriteria must be used within a CriteriaProvider");
  }
  return context;
}

