import React from 'react';
import { Layers, Calendar, Megaphone, TrendingUp, Sparkles, User, Users, Newspaper, Target } from 'lucide-react';

export const Services: React.FC = () => {

  const services = [
    {
      title: "Brand Strategy",
      description: "Defining your voice, identity, and market positioning for long-term success.",
      icon: <Layers className="w-8 h-8" />,
      items: ["Audit", "Identity", "Roadmap"]
    },
    {
      title: "Event Management",
      description: "End-to-end production for corporate events, launches, and activations.",
      icon: <Calendar className="w-8 h-8" />,
      items: ["Concept", "Logistics", "Execution"]
    },
    {
      title: "Digital & PR",
      description: "Amplifying your message through strategic media channels and content.",
      icon: <Megaphone className="w-8 h-8" />,
      items: ["Content", "Outreach", "Growth"]
    },
    {
      title: "Sales & Automation",
      description: "CRM setup, automated funnels, and client retention systems.",
      icon: <TrendingUp className="w-8 h-8" />,
      items: ["CRM Setup", "Funnels", "Retention"]
    },
    {
      title: "Experiential Marketing",
      description: "Activations, events, and sponsorship management.",
      icon: <Sparkles className="w-8 h-8" />,
      items: ["Activations", "Events", "Sponsorships"]
    },
    {
      title: "Personal Branding",
      description: "Identity design, visibility strategy, and content direction.",
      icon: <User className="w-8 h-8" />,
      items: ["Identity", "Visibility", "Content"]
    },
    {
      title: "Talent Management",
      description: "Influencer partnerships and campaign coordination.",
      icon: <Users className="w-8 h-8" />,
      items: ["Influencers", "Partnerships", "Campaigns"]
    },
    {
      title: "Public Relations",
      description: "Media relations, press releases, and brand storytelling.",
      icon: <Newspaper className="w-8 h-8" />,
      items: ["Media", "Press", "Storytelling"]
    },
    {
      title: "Lead Generation",
      description: "Curated contact lists, qualified leads, and B2B/B2C prospecting.",
      icon: <Target className="w-8 h-8" />,
      items: ["Contacts", "Qualified Leads", "Prospecting"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-16">
          <div data-aos="fade-right">
            <h2 className="text-5xl md:text-7xl font-black uppercase leading-none">
              <span className="text-ebs-purple">OUR</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-ebs-purple via-ebs-red to-ebs-purple">
                SERVICES
              </span>
            </h2>
            <div className="w-20 h-2 bg-ebs-red mt-6" />
          </div>

          <div className="lg:max-w-md lg:mt-8" data-aos="fade-left">
            <div className="border-l-4 border-ebs-yellow pl-6">
              <p className="text-gray-600 text-lg leading-relaxed">
                We provide a holistic suite of services designed to take your brand from obscurity to ubiquity.
              </p>
            </div>
          </div>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-ebs-purple/30 transition-all duration-300 group hover:shadow-xl hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-ebs-purple to-ebs-red flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <div className="text-white">
                  {service.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-ebs-purple mb-3 group-hover:text-ebs-red transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Items List */}
              <ul className="space-y-2">
                {service.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-700 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-ebs-yellow"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};