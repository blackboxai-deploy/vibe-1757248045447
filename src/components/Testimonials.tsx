"use client";

import { Card, CardContent } from "@/components/ui/card";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Benjelloun",
      service: "Forfait Premium",
      rating: 5,
      comment: "Une expérience absolument magique ! Le hammam était authentique et le massage aux pierres chaudes d'une qualité exceptionnelle. L'équipe est très professionnelle et l'ambiance du spa est parfaite pour se détendre. Je recommande vivement !",
      location: "Casablanca"
    },
    {
      name: "Mohamed Alaoui",
      service: "Massage Thérapeutique",
      rating: 5,
      comment: "Après des semaines de stress au travail, ce massage m'a complètement ressourcé. Le thérapeute était très à l'écoute et a su cibler exactement mes zones de tension. Le cadre est magnifique et très apaisant.",
      location: "Rabat"
    },
    {
      name: "Aicha Berrada",
      service: "Soin du Visage Anti-Âge",
      rating: 5,
      comment: "Un soin visage exceptionnel avec des produits de très haute qualité. Ma peau était radieuse après le traitement et l'effet a duré plusieurs semaines. L'expertise de l'esthéticienne est remarquable.",
      location: "Casablanca"
    },
    {
      name: "Hassan Tazi",
      service: "Hammam Complet",
      rating: 5,
      comment: "Le hammam le plus authentique que j'aie jamais expérimenté ! Tout était parfait, de l'accueil chaleureux aux soins traditionnels. Une vraie parenthèse de bien-être dans un cadre somptueux.",
      location: "Marrakech"
    },
    {
      name: "Leila Mansouri",
      service: "Forfait Évasion",
      rating: 5,
      comment: "3h30 de pur bonheur ! La combinaison hammam, massage et soin du visage était parfaite. L'équipe est aux petits soins et l'atmosphère du spa invite vraiment à la détente complète. À refaire absolument !",
      location: "Casablanca"
    },
    {
      name: "Omar Fassi",
      service: "Massage Deep Tissue",
      rating: 5,
      comment: "Un massage thérapeutique vraiment efficace pour mes douleurs de dos. Le masseur était très compétent et a su adapter la pression selon mes besoins. Je suis reparti complètement détendu et sans douleur.",
      location: "Salé"
    }
  ];

  return (
    <section id="temoignages" className="py-20 bg-gradient-to-b from-white to-neutral-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-playfair">
            Témoignages de Nos Clients
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez ce que nos clients pensent de leur expérience à Clin d'œil SPA. 
            Leurs retours témoignent de notre engagement envers l'excellence et votre satisfaction.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-amber-800 mx-auto mt-6"></div>
        </div>

        {/* Overall Rating */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-white rounded-full px-8 py-4 shadow-lg">
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} className="text-2xl text-amber-500">★</span>
              ))}
            </div>
            <span className="text-2xl font-bold text-gray-900">5.0</span>
            <span className="text-gray-600">sur 5</span>
            <span className="text-gray-400">|</span>
            <span className="text-gray-600">500+ avis clients</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-6">
                {/* Rating Stars */}
                <div className="flex space-x-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span 
                      key={star} 
                      className={`text-lg ${star <= testimonial.rating ? 'text-amber-500' : 'text-gray-300'}`}
                    >
                      ★
                    </span>
                  ))}
                </div>

                {/* Comment */}
                <blockquote className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.comment}"
                </blockquote>

                {/* Client Info */}
                <div className="border-t border-gray-100 pt-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-gray-900 font-playfair">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-amber-700 font-medium">
                        {testimonial.service}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        {testimonial.location}
                      </p>
                    </div>
                    <div className="text-4xl">💆‍♀️</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Statistics */}
        <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-playfair">
              Pourquoi Nos Clients Nous Choisissent
            </h3>
            <p className="text-lg text-gray-700">
              Des chiffres qui reflètent notre engagement envers votre satisfaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <div className="text-3xl md:text-4xl font-bold text-amber-700 mb-2">98%</div>
              <div className="text-gray-700 font-medium">Clients Satisfaits</div>
              <div className="text-sm text-gray-500 mt-1">Note moyenne 4.9/5</div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <div className="text-3xl md:text-4xl font-bold text-amber-700 mb-2">85%</div>
              <div className="text-gray-700 font-medium">Clients Fidèles</div>
              <div className="text-sm text-gray-500 mt-1">Reviennent régulièrement</div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <div className="text-3xl md:text-4xl font-bold text-amber-700 mb-2">500+</div>
              <div className="text-gray-700 font-medium">Avis Positifs</div>
              <div className="text-sm text-gray-500 mt-1">Sur toutes plateformes</div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <div className="text-3xl md:text-4xl font-bold text-amber-700 mb-2">24h</div>
              <div className="text-gray-700 font-medium">Bien-être Durable</div>
              <div className="text-sm text-gray-500 mt-1">Effets longue durée</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-playfair">
            Rejoignez Nos Clients Satisfaits
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Vivez vous aussi une expérience inoubliable de détente et de bien-être 
            dans notre spa de luxe à Casablanca.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Réserver Votre Séance
            </button>
            
            <button 
              onClick={() => {
                const element = document.getElementById("services");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="border-2 border-amber-600 text-amber-700 hover:bg-amber-600 hover:text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
            >
              Voir Nos Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}