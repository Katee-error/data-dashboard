"use client";

import React from "react";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";
import NextTopLoader from "nextjs-toploader";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "@/theme/theme";

export const Providers: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SessionProvider>{children}</SessionProvider>
        <Toaster />
        <NextTopLoader />
      </ThemeProvider>
    </>
  );
};
