"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Services() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const services = [
    {
      title: "Massages Thérapeutiques",
      description: "Détente profonde et soulagement des tensions musculaires",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/007cfb49-49a1-4428-a2fc-2e3a1cf241c5.png",
      treatments: [
        { name: "Massage Suédois", duration: "60 min", price: "350 DH" },
        { name: "Massage Deep Tissue", duration: "75 min", price: "420 DH" },
        { name: "Massage aux Pierres Chaudes", duration: "90 min", price: "480 DH" },
        { name: "Massage Aromathérapie", duration: "60 min", price: "380 DH" },
      ]
    },
    {
      title: "Hammam Traditionnel",
      description: "Expérience authentique de purification et régénération",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/80beaca7-a947-42a5-b77a-40cbb855b33f.png",
      treatments: [
        { name: "Hammam Classique", duration: "45 min", price: "280 DH" },
        { name: "Hammam + Gommage", duration: "60 min", price: "350 DH" },
        { name: "Hammam + Enveloppement", duration: "75 min", price: "420 DH" },
        { name: "Hammam Complet", duration: "90 min", price: "480 DH" },
      ]
    },
    {
      title: "Soins du Visage",
      description: "Traitements personnalisés pour une peau radieuse",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1541b55c-b242-4469-9578-3c5def19982f.png",
      treatments: [
        { name: "Soin Hydratant", duration: "60 min", price: "320 DH" },
        { name: "Soin Anti-Âge", duration: "75 min", price: "420 DH" },
        { name: "Soin Purifiant", duration: "60 min", price: "350 DH" },
        { name: "Soin Premium", duration: "90 min", price: "550 DH" },
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-neutral-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-playfair">
            Nos Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez notre gamme complète de soins et traitements conçus pour 
            votre bien-être et votre relaxation dans notre spa luxueux à Casablanca.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-amber-800 mx-auto mt-6"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0 shadow-lg">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.style.background = 'linear-gradient(135deg, #f5f1eb 0%, #e8ddd4 100%)';
                    target.parentElement!.innerHTML += `<div class="flex items-center justify-center h-full text-gray-600 font-medium">${service.title}</div>`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold text-gray-900 font-playfair">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600 text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {service.treatments.map((treatment, treatmentIndex) => (
                  <div key={treatmentIndex} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                    <div>
                      <h4 className="font-semibold text-gray-900">{treatment.name}</h4>
                      <p className="text-sm text-gray-500">{treatment.duration}</p>
                    </div>
                    <span className="font-bold text-amber-700 text-lg">{treatment.price}</span>
                  </div>
                ))}
                
                <Button 
                  onClick={scrollToContact}
                  className="w-full mt-6 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-semibold py-3 rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  Réserver {service.title}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Special Packages */}
        <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-playfair">
              Forfaits Bien-être
            </h3>
            <p className="text-lg text-gray-700">
              Combinez plusieurs soins pour une expérience complète de détente et régénération.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h4 className="text-2xl font-bold text-gray-900 mb-3 font-playfair">
                Forfait Évasion
              </h4>
              <p className="text-gray-600 mb-4">
                Hammam + Massage Suédois + Soin du Visage
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">3h30 de pure détente</span>
                <span className="text-2xl font-bold text-amber-700">890 DH</span>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h4 className="text-2xl font-bold text-gray-900 mb-3 font-playfair">
                Forfait Premium
              </h4>
              <p className="text-gray-600 mb-4">
                Hammam Complet + Massage aux Pierres Chaudes + Soin Premium
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">4h d'expérience luxueuse</span>
                <span className="text-2xl font-bold text-amber-700">1280 DH</span>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button 
              onClick={scrollToContact}
              className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-semibold px-12 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Réserver un Forfait
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}