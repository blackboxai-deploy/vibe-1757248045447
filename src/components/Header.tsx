"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">C</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900 font-playfair">
              Clin d'œil SPA
            </h1>
            <p className="text-xs text-gray-600">Casablanca</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection("accueil")}
            className="text-gray-700 hover:text-amber-600 transition-colors font-medium"
          >
            Accueil
          </button>
          <button 
            onClick={() => scrollToSection("services")}
            className="text-gray-700 hover:text-amber-600 transition-colors font-medium"
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection("a-propos")}
            className="text-gray-700 hover:text-amber-600 transition-colors font-medium"
          >
            À Propos
          </button>
          <button 
            onClick={() => scrollToSection("temoignages")}
            className="text-gray-700 hover:text-amber-600 transition-colors font-medium"
          >
            Témoignages
          </button>
          <button 
            onClick={() => scrollToSection("contact")}
            className="text-gray-700 hover:text-amber-600 transition-colors font-medium"
          >
            Contact
          </button>
          <Button 
            onClick={() => scrollToSection("contact")}
            className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-medium px-6 py-2 rounded-full transition-all duration-300"
          >
            Réserver
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          <div className="w-6 h-6 flex flex-col justify-center space-y-1">
            <span className={`block w-6 h-0.5 bg-gray-700 transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-gray-700 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-gray-700 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <button 
              onClick={() => scrollToSection("accueil")}
              className="block w-full text-left py-2 text-gray-700 hover:text-amber-600 transition-colors font-medium"
            >
              Accueil
            </button>
            <button 
              onClick={() => scrollToSection("services")}
              className="block w-full text-left py-2 text-gray-700 hover:text-amber-600 transition-colors font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection("a-propos")}
              className="block w-full text-left py-2 text-gray-700 hover:text-amber-600 transition-colors font-medium"
            >
              À Propos
            </button>
            <button 
              onClick={() => scrollToSection("temoignages")}
              className="block w-full text-left py-2 text-gray-700 hover:text-amber-600 transition-colors font-medium"
            >
              Témoignages
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left py-2 text-gray-700 hover:text-amber-600 transition-colors font-medium"
            >
              Contact
            </button>
            <Button 
              onClick={() => scrollToSection("contact")}
              className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-medium py-3 rounded-full transition-all duration-300 mt-4"
            >
              Réserver
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}