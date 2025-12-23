import React from 'react';
import { Lightbulb, Mic2, Calendar, UserCheck, Smartphone, Target, TrendingUp, BarChart3 } from 'lucide-react';

interface ExpertiseItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const coreItems: ExpertiseItem[] = [
  {
    id: "01",
    title: "Experiential Marketing & Activations",
    description: "Designing immersive brand experiences that create emotional connections and measurable impact.",
    icon: <Lightbulb className="w-12 h-12 text-white" />
  },
  {
    id: "02",
    title: "Public Relations & Communications",
    description: "Building brand credibility through storytelling, media engagement, and strategic communication.",
    icon: <Mic2 className="w-12 h-12 text-white" />
  },
  {
    id: "03",
    title: "Event Production & Management",
    description: "Conceptualising, planning, and executing events that elevate brand presence and audience engagement.",
    icon: <Calendar className="w-12 h-12 text-white" />
  }
];

const extendedItems = [
  {
    title: "Personal Branding & Talent Management",
    desc: "Developing strong personal brands for professionals, entrepreneurs, and public figures.",
    icon: <UserCheck />
  },
  {
    title: "Digital Marketing & Social Media",
    desc: "Crafting digital strategies, managing content, and running paid campaigns for growth.",
    icon: <Smartphone />
  },
  {
    title: "Lead Generation & Database Sourcing",
    desc: "Providing verified leads, curated databases, and contact lists tailored to client objectives.",
    icon: <Target />
  },
  {
    title: "Sales & Marketing Automation",
    desc: "Implementing CRM systems, automated funnels, and digital workflows.",
    icon: <TrendingUp />
  },
  {
    title: "Strategic Brand Consulting",
    desc: "Conducting brand audits, positioning strategies, and developing marketing roadmaps.",
    icon: <BarChart3 />
  }
];

export const Expertise: React.FC = () => {
  return (
    <section id="expertise" className="relative">

      {/* Core Expertise Header */}
      <div className="bg-white pt-20 pb-10 text-center">
        <h2 className="text-4xl md:text-6xl font-black text-ebs-purple uppercase mb-4" data-aos="fade-down">
          Our Core Expertise
        </h2>
        <div className="w-24 h-2 bg-ebs-red mx-auto rounded-full" data-aos="zoom-in" data-aos-delay="200" />
      </div>

      {/* Core Split Layout */}
      <div className="flex flex-col lg:flex-row">
        {/* Left Visual - Hidden on mobile for cleaner look or use as banner */}
        <div className="hidden lg:block lg:w-1/3 relative h-[800px]" data-aos="fade-right">
          <img
            src="https://picsum.photos/seed/expertise/800/1200?grayscale"
            alt="Team Strategy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-ebs-purple/30 mix-blend-overlay" />
        </div>

        {/* Right Content - Red Background */}
        <div className="lg:w-2/3 bg-ebs-red text-white p-10 md:p-20 flex flex-col justify-center">
          <div className="space-y-16">
            {coreItems.map((item, index) => (
              <div
                key={item.id}
                className="relative pl-4 group"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="absolute -left-6 -top-6 text-8xl font-black text-white/10 select-none group-hover:text-white/20 transition-colors duration-500">
                  {item.id}
                </div>
                <div className="relative z-10 flex items-start gap-6">
                  <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm shrink-0 hidden sm:block group-hover:bg-white/20 transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-3">{item.title}</h3>
                    <p className="text-white/90 text-lg leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Extended Expertise - Yellow Sidebar style */}
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/4 bg-ebs-yellow p-10 flex items-center justify-center" data-aos="fade-right">
          <h3 className="text-4xl font-black text-white md:-rotate-90 md:whitespace-nowrap uppercase tracking-widest">
            Extended Services
          </h3>
        </div>
        <div className="md:w-3/4 bg-gray-50 p-10 md:p-20">
          <div className="grid gap-12">
            {extendedItems.map((item, index) => (
              <div
                key={index}
                className="flex gap-6 items-start hover:bg-white hover:shadow-lg p-4 rounded-xl transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                <div className="w-3 h-full flex flex-col items-center">
                  <div className="w-3 h-3 bg-ebs-purple rounded-full" />
                  {index !== extendedItems.length - 1 && (
                    <div className="w-0.5 h-20 bg-ebs-purple/30 border-l border-dashed border-ebs-purple my-2" />
                  )}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 uppercase mb-2 flex items-center gap-3">
                    <span className="text-ebs-purple">{item.icon}</span>
                    {item.title}
                  </h4>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};