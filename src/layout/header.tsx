import ThemeToggle from "@/components/ThemeToggle";
import React from "react";

const Header = () => {
  return (
    <div
      className="sticky z-40 top-0 bg-white/20 w-full text-secondary-foreground 
    shadow-xl border-b border-border backdrop-blur-xl"
    >
      <div className="max-w-7xl mx-auto py-3">
        <div className="flex items-center justify-between px-4">
          <h1 className="text-lg font-semibold">My Template</h1>
          <nav className="space-x-4 font-semibold">
            <a href="/" className="hover:text-primary">
              Home
            </a>
            <a href="/carousel" className="hover:text-primary">
              Carousels
            </a>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
