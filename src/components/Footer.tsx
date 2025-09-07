"use client";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold font-playfair">Clin d'œil SPA</h3>
                <p className="text-amber-200">Votre oasis de détente à Casablanca</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Découvrez l'art du bien-être à travers nos massages thérapeutiques, hammam traditionnel 
              et soins spa personnalisés dans un cadre luxueux et apaisant au cœur de Casablanca.
            </p>

            {/* Social Media */}
            <div className="space-y-3">
              <p className="text-amber-200 font-semibold">Suivez-nous</p>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                  aria-label="Facebook"
                >
                  <span className="text-lg">📘</span>
                </a>
                <a 
                  href="#" 
                  className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                  aria-label="Instagram"
                >
                  <span className="text-lg">📸</span>
                </a>
                <a 
                  href="#" 
                  className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                  aria-label="WhatsApp"
                >
                  <span className="text-lg">💬</span>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-amber-200 mb-6">Navigation</h4>
            <nav className="space-y-3">
              <button 
                onClick={() => scrollToSection("accueil")}
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Accueil
              </button>
              <button 
                onClick={() => scrollToSection("services")}
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection("a-propos")}
                className="block text-gray-300 hover:text-white transition-colors"
              >
                À Propos
              </button>
              <button 
                onClick={() => scrollToSection("temoignages")}
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Témoignages
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Contact
              </button>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-amber-200 mb-6">Contact</h4>
            <div className="space-y-4">
              <div>
                <p className="text-gray-400 text-sm">Adresse</p>
                <p className="text-gray-300">Boulevard Mohammed V</p>
                <p className="text-gray-300">Quartier Maarif, Casablanca</p>
              </div>
              
              <div>
                <p className="text-gray-400 text-sm">Téléphone</p>
                <a 
                  href="tel:+212522123456" 
                  className="text-amber-200 hover:text-amber-100 font-semibold"
                >
                  +212 522 123 456
                </a>
              </div>
              
              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <a 
                  href="mailto:contact@clindoeilspa.ma" 
                  className="text-amber-200 hover:text-amber-100 font-semibold"
                >
                  contact@clindoeilspa.ma
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Services Quick Access */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <h4 className="text-lg font-bold text-amber-200 mb-6 text-center">Nos Services Principaux</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
            <div className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors">
              <div className="text-2xl mb-2">💆</div>
              <p className="text-sm text-gray-300">Massages</p>
            </div>
            <div className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors">
              <div className="text-2xl mb-2">🛁</div>
              <p className="text-sm text-gray-300">Hammam</p>
            </div>
            <div className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors">
              <div className="text-2xl mb-2">✨</div>
              <p className="text-sm text-gray-300">Soins Visage</p>
            </div>
            <div className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors">
              <div className="text-2xl mb-2">🌿</div>
              <p className="text-sm text-gray-300">Aromathérapie</p>
            </div>
            <div className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors">
              <div className="text-2xl mb-2">🔥</div>
              <p className="text-sm text-gray-300">Pierres Chaudes</p>
            </div>
            <div className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors">
              <div className="text-2xl mb-2">💎</div>
              <p className="text-sm text-gray-300">Forfaits Premium</p>
            </div>
          </div>
        </div>

        {/* Opening Hours */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="text-center">
            <h4 className="text-lg font-bold text-amber-200 mb-4">Horaires d'Ouverture</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto text-sm">
              <div>
                <p className="text-gray-400">Lun - Ven</p>
                <p className="text-white font-semibold">9h - 20h</p>
              </div>
              <div>
                <p className="text-gray-400">Samedi</p>
                <p className="text-white font-semibold">9h - 19h</p>
              </div>
              <div>
                <p className="text-gray-400">Dimanche</p>
                <p className="text-white font-semibold">10h - 18h</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 bg-gray-900">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © 2024 Clin d'œil SPA. Tous droits réservés.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Casablanca, Maroc - Votre bien-être est notre priorité
              </p>
            </div>
            
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Politique de Confidentialité
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Conditions d'Utilisation
              </a>
              <button 
                onClick={scrollToTop}
                className="bg-amber-600 hover:bg-amber-700 text-white p-2 rounded-full transition-all duration-300 transform hover:scale-110"
                aria-label="Retour en haut"
              >
                <span className="text-sm">↑</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}