import type { Metadata } from "next";
import { Footer, Header, Sidebar } from "@/components/layout";
import { Suspense } from "react";
import { Box } from "@mui/material";

export const metadata: Metadata = {
  title: "Data dashboard",
};

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  const drawerWidth = 240;
  return (
    <main className="min-h-screen flex">
      {/* Sidebar */}
      <Sidebar />
      
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,  
          ml: `${drawerWidth}px`, 
        }}
      >
        {/* Header */}
        <Suspense>
          <Header />
        </Suspense>
        <Box
          sx={{
            flexGrow: 1,
            p: 3, 
          }}
        >
          {children}
        </Box>
        <Footer />
      </Box>
    </main>
  );
}
