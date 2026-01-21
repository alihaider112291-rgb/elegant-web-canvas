import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface LayoutProps {
  children: ReactNode;
  showHeader?: boolean;
  showFooter?: boolean;
}

export function Layout({ children, showHeader = true, showFooter = true }: LayoutProps) {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden">
      {showHeader && <Header />}
      <main className="flex flex-1 flex-col">
        {children}
      </main>
      {showFooter && <Footer />}
    </div>
  );
}
