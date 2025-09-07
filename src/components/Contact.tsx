"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({ nom: '', email: '', telephone: '', service: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    }
    
    setIsSubmitting(false);
    
    // Reset status after 3 seconds
    setTimeout(() => {
      setSubmitStatus('idle');
    }, 3000);
  };

  const services = [
    "Massage Suédois",
    "Massage Deep Tissue", 
    "Massage aux Pierres Chaudes",
    "Massage Aromathérapie",
    "Hammam Classique",
    "Hammam + Gommage",
    "Hammam Complet",
    "Soin du Visage Hydratant",
    "Soin du Visage Anti-Âge",
    "Forfait Évasion",
    "Forfait Premium",
    "Autre / Consultation"
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-playfair">
            Contactez-Nous
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Réservez votre séance de détente ou contactez-nous pour plus d'informations. 
            Notre équipe est à votre disposition pour vous accueillir dans les meilleures conditions.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-amber-800 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            {/* Address */}
            <Card className="bg-gradient-to-br from-amber-50 to-amber-100 border-0 shadow-lg">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center space-x-3 text-gray-900 font-playfair">
                  <span className="text-2xl">📍</span>
                  <span>Notre Adresse</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-2 font-medium">Clin d'œil SPA</p>
                <p className="text-gray-600">Boulevard Mohammed V</p>
                <p className="text-gray-600">Quartier Maarif, Casablanca</p>
                <p className="text-gray-600">20100 - Maroc</p>
              </CardContent>
            </Card>

            {/* Phone & Email */}
            <Card className="bg-gradient-to-br from-amber-50 to-amber-100 border-0 shadow-lg">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center space-x-3 text-gray-900 font-playfair">
                  <span className="text-2xl">📞</span>
                  <span>Coordonnées</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="text-gray-700 font-medium">Téléphone</p>
                  <a href="tel:+212522123456" className="text-amber-700 hover:text-amber-800 font-semibold">
                    +212 522 123 456
                  </a>
                </div>
                <div>
                  <p className="text-gray-700 font-medium">Email</p>
                  <a href="mailto:contact@clindoeilspa.ma" className="text-amber-700 hover:text-amber-800 font-semibold">
                    contact@clindoeilspa.ma
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Hours */}
            <Card className="bg-gradient-to-br from-amber-50 to-amber-100 border-0 shadow-lg">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center space-x-3 text-gray-900 font-playfair">
                  <span className="text-2xl">🕐</span>
                  <span>Horaires d'Ouverture</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-700">Lundi - Vendredi</span>
                  <span className="text-gray-900 font-semibold">9h - 20h</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Samedi</span>
                  <span className="text-gray-900 font-semibold">9h - 19h</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Dimanche</span>
                  <span className="text-gray-900 font-semibold">10h - 18h</span>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="bg-gradient-to-br from-amber-50 to-amber-100 border-0 shadow-lg">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center space-x-3 text-gray-900 font-playfair">
                  <span className="text-2xl">📱</span>
                  <span>Suivez-Nous</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  <a href="#" className="text-amber-700 hover:text-amber-800 font-medium">Facebook</a>
                  <a href="#" className="text-amber-700 hover:text-amber-800 font-medium">Instagram</a>
                  <a href="#" className="text-amber-700 hover:text-amber-800 font-medium">WhatsApp</a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-white border-0 shadow-xl">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl font-bold text-gray-900 font-playfair">
                  Réserver Votre Séance
                </CardTitle>
                <p className="text-gray-600">
                  Remplissez le formulaire ci-dessous et nous vous contacterons dans les plus brefs délais 
                  pour confirmer votre réservation.
                </p>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="nom" className="block text-sm font-semibold text-gray-700 mb-2">
                        Nom Complet *
                      </label>
                      <Input
                        type="text"
                        id="nom"
                        name="nom"
                        value={formData.nom}
                        onChange={handleInputChange}
                        required
                        className="w-full border-gray-300 focus:border-amber-500 focus:ring-amber-500"
                        placeholder="Votre nom complet"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email *
                      </label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full border-gray-300 focus:border-amber-500 focus:ring-amber-500"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="telephone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Téléphone *
                      </label>
                      <Input
                        type="tel"
                        id="telephone"
                        name="telephone"
                        value={formData.telephone}
                        onChange={handleInputChange}
                        required
                        className="w-full border-gray-300 focus:border-amber-500 focus:ring-amber-500"
                        placeholder="+212 6XX XXX XXX"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                        Service Souhaité *
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        required
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:border-amber-500 focus:ring-amber-500 focus:outline-none"
                      >
                        <option value="">Sélectionnez un service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message (optionnel)
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full border-gray-300 focus:border-amber-500 focus:ring-amber-500"
                      placeholder="Précisez vos préférences, date souhaitée ou toute information utile..."
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-semibold py-4 text-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Envoi en cours...' : 'Envoyer la Demande'}
                  </Button>

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                      ✅ Votre demande a été envoyée avec succès ! Nous vous contacterons sous 24h.
                    </div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                      ❌ Une erreur s'est produite. Veuillez réessayer ou nous appeler directement.
                    </div>
                  )}

                  <p className="text-sm text-gray-500 text-center">
                    * Champs obligatoires. Vos données personnelles sont protégées et ne seront jamais partagées.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <Card className="bg-white border-0 shadow-xl overflow-hidden">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl font-bold text-gray-900 font-playfair">
                Trouvez-Nous Facilement
              </CardTitle>
              <p className="text-gray-600">
                Situés au cœur de Casablanca, dans le quartier Maarif, facilement accessible en transport
              </p>
            </CardHeader>
            
            <CardContent className="p-0">
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🗺️</div>
                  <p className="text-gray-700 font-medium">Plan d'Accès</p>
                  <p className="text-gray-600">Boulevard Mohammed V, Maarif</p>
                  <p className="text-gray-600">Casablanca, Maroc</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Parking disponible • Accès PMR • Transports publics à proximité
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}