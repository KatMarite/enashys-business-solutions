import React from 'react';
import { Building, Users, User, Rocket, Megaphone, Presentation, Database } from 'lucide-react';

export const Services: React.FC = () => {
  
  const circleCards = [
    {
      title: "Corporate & FMCG Brands",
      desc: "Large-scale activations, PR campaigns, and strategic consulting",
      icon: <Building size={48} className="text-ebs-red" />
    },
    {
      title: "SME & Start-Up Brands",
      desc: "Tailored marketing, brand development, and lead-generation solutions",
      icon: <Rocket size={48} className="text-ebs-red" />
    },
    {
      title: "Personal Brands",
      desc: "Branding, PR, and digital positioning for individuals and talent",
      icon: <User size={48} className="text-ebs-red" />
    }
  ];

  const serviceList = [
    { title: "Brand Strategy & Consulting", desc: "Brand audits, positioning, and marketing roadmaps" },
    { title: "Sales & Automation", desc: "CRM setup, automated funnels, and client retention systems" },
    { title: "Experiential Marketing", desc: "Activations, events, and sponsorship management" },
    { title: "Personal Branding", desc: "Identity design, visibility strategy, and content direction" },
    { title: "Event Production", desc: "Corporate events, launches, and experiential showcases" },
    { title: "Talent Management", desc: "Influencer partnerships and campaign coordination" },
    { title: "Public Relations", desc: "Media relations, press releases, and brand storytelling" },
    { title: "Digital Marketing", desc: "Social media management, paid ads, and analytics" },
    { title: "Lead Generation", desc: "Curated contact lists, qualified leads, and B2B/B2C prospecting" },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16" data-aos="zoom-in">
          <h2 className="text-5xl md:text-6xl font-black text-ebs-purple uppercase tracking-tight">
            Personal Branding <span className="text-ebs-red">& More</span>
          </h2>
        </div>

        {/* Circular Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {circleCards.map((card, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className="w-48 h-48 rounded-full border-4 border-ebs-red flex items-center justify-center bg-white shadow-xl mb-8 group hover:scale-110 transition-transform duration-300 cursor-pointer">
                <div className="group-hover:animate-bounce">
                  {card.icon}
                </div>
              </div>
              <h3 className="text-2xl font-black text-white bg-ebs-red px-6 py-2 rounded-full mb-4 w-full transform transition-transform hover:scale-105">
                {card.title}
              </h3>
              <p className="text-gray-600 px-4">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Detailed Service List */}
        <div className="bg-gray-50 rounded-3xl p-10 md:p-16 shadow-inner" data-aos="fade-up">
            <h3 className="text-3xl font-bold text-ebs-purple mb-10 border-b pb-4">Our Services</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-12">
                {serviceList.map((service, index) => (
                    <div key={index} className="hover:bg-white p-4 rounded-lg transition-colors duration-300">
                        <h4 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
};