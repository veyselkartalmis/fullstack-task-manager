"use client";

import React, { useState, useEffect } from "react";
import { GlobalProvider } from "../context/globalProvider";

interface Props {
  children: React.ReactNode;
}

function ContextProviders({ children }: Props) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsReady(true);
    }, 1000);
  }, []);

  if (!isReady) return null;

  return <GlobalProvider>{children}</GlobalProvider>;
}

export default ContextProviders;
