"use client";
import { Footer, Header, Sidebar } from "@/components/layout";
import { Suspense, useState } from "react";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  return (
    <main className="min-h-screen flex">
      <Suspense>
        <Header open={isSidebarOpen} onToggle={toggleSidebar} />
      </Suspense>
      <div
          style={{
            display: 'flex',
            marginTop: 64, 
            minHeight: 'calc(100vh - 64px)',
          }}
        >
          <Sidebar open={isSidebarOpen} />
          <div style={{ flexGrow: 1, padding: 20 }}>{children}</div>
        </div>

        <Footer />
    </main>
  );
}
