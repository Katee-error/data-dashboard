import type { Metadata } from "next";
import { Footer, Header } from "@/components/layout";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Data dashboard",
};

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen">
      <Suspense>
        <Header />
      </Suspense>
      {children}
      <Footer/>
    </main>
  );
}
