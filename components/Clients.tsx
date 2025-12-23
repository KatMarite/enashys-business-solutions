import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const Clients: React.FC = () => {
  const clients = [
    "Engen", "Corner Bakery", "Spur", "The Bridge", "Comensa", "Coach Tina",
    "Cinnabon", "KFC Africa", "Hussar Grill", "Unjani Clinics", "FNB", "Empower U",
    "Retsol", "RocoMamas", "Advaita Vidya", "Aromat", "Unilever", "Edubridge"
  ];

  return (
    <section id="clients" className="bg-white py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">

          {/* Text Content */}
          <div className="lg:w-1/3" data-aos="fade-right">
            <h2 className="text-4xl md:text-5xl font-black text-ebs-purple uppercase mb-6 leading-none">
              Our Clients & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-ebs-purple to-ebs-red">
                Brand Experience
              </span>
            </h2>
            <div className="w-20 h-2 bg-ebs-red mb-8" />
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We’ve collaborated with a diverse range of corporate, FMCG, and retail brands, delivering impactful campaigns and activations across multiple markets.
            </p>

            <div className="p-8 bg-ebs-purple text-white rounded-3xl shadow-xl transform rotate-1 hover:rotate-0 transition-transform duration-300 hover:shadow-2xl">
              <h3 className="text-2xl font-bold mb-4">Brands we have worked with:</h3>
              <div className="grid grid-cols-2 gap-3 text-sm">
                {clients.map((client) => (
                  <div key={client} className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-ebs-yellow shrink-0" />
                    <span>{client}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Logos/Image Area */}
          <div className="lg:w-2/3" data-aos="fade-left">
            <div className="relative">
              {/* Simulated Laptop Image with 'BRAND' concepts */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-10 group">
                <img
                  src="https://picsum.photos/seed/clients/1200/800?office"
                  alt="Brand Strategy Session"
                  className="w-full h-auto object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ebs-dark/80 to-transparent flex items-end p-10">
                  <p className="text-white text-lg font-medium italic transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">"Trust • Strategy • Design • Value"</p>
                </div>
              </div>

              {/* Logo Grid (Simulated with placeholders for clean code) */}
              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {clients.map((client, i) => (
                  <div
                    key={i}
                    className="aspect-video bg-gray-50 rounded-xl flex items-center justify-center p-4 hover:shadow-md transition-all duration-300 border border-gray-100 group hover:-translate-y-1 hover:border-ebs-purple/30"
                    data-aos="fade-up"
                    data-aos-delay={i * 50}
                  >
                    <span className="text-center font-bold text-gray-400 group-hover:text-ebs-purple transition-colors text-sm md:text-base">
                      {client}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};