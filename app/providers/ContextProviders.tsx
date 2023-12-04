"use client";

import React from "react";
import { GlobalProvider } from "../context/globalProvider";

interface Props {
  children: React.ReactNode;
}

function ContextProviders({ children }: Props) {
  return <GlobalProvider>{children}</GlobalProvider>;
}

export default ContextProviders;
