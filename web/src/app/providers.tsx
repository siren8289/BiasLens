"use client";

import React from "react";
import { CriteriaProvider } from "../domains/criteria/state/CriteriaContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return <CriteriaProvider>{children}</CriteriaProvider>;
}

