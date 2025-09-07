"use client";

import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  const features = [
    {
      title: "15+ Années d'Expérience",
      description: "Notre équipe d'experts possède plus de 15 ans d'expérience dans les soins spa et bien-être.",
      icon: "🏆"
    },
    {
      title: "Techniques Authentiques",
      description: "Nous combinons les traditions marocaines ancestrales avec les techniques modernes les plus efficaces.",
      icon: "🌟"
    },
    {
      title: "Produits Premium",
      description: "Utilisation exclusive de produits haut de gamme, naturels et respectueux de votre peau.",
      icon: "🌿"
    },
    {
      title: "Cadre Luxueux",
      description: "Un environnement élégant et apaisant conçu pour votre confort et votre relaxation totale.",
      icon: "✨"
    }
  ];

  const stats = [
    { number: "5000+", label: "Clients Satisfaits" },
    { number: "15+", label: "Années d'Expérience" },
    { number: "20+", label: "Soins Disponibles" },
    { number: "100%", label: "Satisfaction Client" }
  ];

  return (
    <section id="a-propos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-playfair">
            À Propos de Clin d'œil SPA
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Situé au cœur de Casablanca, Clin d'œil SPA est votre destination privilégiée pour 
            une expérience de bien-être authentique et raffinée, alliant traditions marocaines et expertise moderne.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-amber-800 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900 font-playfair">
              Notre Philosophy du Bien-être
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Chez Clin d'œil SPA, nous croyons que le bien-être est un art qui nécessite expertise, 
              passion et dévouement. Notre mission est de vous offrir une évasion complète du stress 
              quotidien à travers des soins personnalisés de la plus haute qualité.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Chaque soin est conçu comme un voyage sensoriel unique, combinant les bienfaits 
              thérapeutiques des techniques traditionnelles marocaines avec l'innovation des 
              méthodes contemporaines. Nos thérapeutes expérimentés s'adaptent à vos besoins 
              spécifiques pour vous garantir une expérience inoubliable.
            </p>
            
            {/* Key Values */}
            <div className="space-y-4 mt-8">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                <span className="text-gray-700 font-medium">Excellence dans chaque soin prodigué</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                <span className="text-gray-700 font-medium">Respect des traditions et innovation constante</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                <span className="text-gray-700 font-medium">Attention personnalisée et bienveillante</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-xl">
              <img 
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8f419f9d-9840-4d6b-aaa4-45ca950f89cb.png" 
                alt="Intérieur élégant du spa Clin d'œil avec influences marocaines et éclairage chaleureux"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.parentElement!.style.background = 'linear-gradient(135deg, #f5f1eb 0%, #e8ddd4 100%)';
                  target.parentElement!.innerHTML += '<div class="flex items-center justify-center h-96 text-gray-600 font-medium">Intérieur Luxueux du Spa</div>';
                }}
              />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl border">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-700 mb-1">15+</div>
                <div className="text-sm text-gray-600 font-medium">Années d'Excellence</div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <Card key={index} className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-b from-white to-gray-50">
              <CardContent className="p-0">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h4 className="text-lg font-bold text-gray-900 mb-3 font-playfair">
                  {feature.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-br from-amber-600 to-amber-800 rounded-3xl p-8 md:p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">
              Notre Engagement en Chiffres
            </h3>
            <p className="text-amber-100">
              Des résultats qui témoignent de notre excellence et de votre satisfaction
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-white">
                  {stat.number}
                </div>
                <div className="text-amber-100 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 font-playfair">
            Notre Équipe d'Experts
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            Nos thérapeutes certifiés combinent formation professionnelle internationale et 
            savoir-faire traditionnel marocain pour vous offrir des soins d'exception.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Amina Benali",
                role: "Maître Thérapeute - Massage",
                image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/332d67f4-483c-432a-87cc-6204e8e66668.png"
              },
              {
                name: "Youssef Alami",
                role: "Spécialiste Hammam Traditionnel",
                image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/46fb364f-d3f8-4a61-a5a4-b56464284b28.png"
              },
              {
                name: "Fatima Zahra",
                role: "Experte Soins du Visage",
                image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3b58f150-aa0c-4026-8a6d-c3fab53ea086.png"
              }
            ].map((member, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden rounded-2xl mb-4">
                  <img 
                    src={member.image} 
                    alt={`Portrait de ${member.name}, ${member.role}`}
                    className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.parentElement!.style.background = 'linear-gradient(135deg, #f5f1eb 0%, #e8ddd4 100%)';
                      target.parentElement!.innerHTML += `<div class="flex items-center justify-center h-80 text-gray-600 font-medium">${member.name}</div>`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2 font-playfair">
                  {member.name}
                </h4>
                <p className="text-amber-700 font-medium">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}