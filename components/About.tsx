import React from 'react';
import { Building2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Image Side */}
          <div className="lg:w-1/2 relative" data-aos="fade-right">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl group">
              <img
                src="https://picsum.photos/seed/about/800/1000"
                alt="Meeting in office"
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            {/* Decorative block behind image */}
            <div className="absolute top-10 -left-10 w-full h-full bg-ebs-yellow z-0 rounded-3xl" />
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-ebs-red rounded-full opacity-20 blur-2xl" />
          </div>

          {/* Text Side */}
          <div className="lg:w-1/2" data-aos="fade-left">
            <div className="flex items-center gap-3 mb-4">
              <Building2 className="text-ebs-purple" size={32} />
              <span className="text-ebs-purple font-bold uppercase tracking-widest">Who We Are</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
              ABOUT <span className="text-ebs-purple">US</span>
            </h2>

            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <span className="p-2 bg-ebs-yellow rounded-lg text-white">
                <Building2 size={20} />
              </span>
              A Brief Story About The Company
            </h3>

            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                Enashy's Business Solutions is a strategic marketing and brand consultancy specialising in experiential marketing, activations, PR, event production, and personal branding.
              </p>
              <p>
                We help businesses and individuals build, grow, and sustain powerful brands through creative storytelling, data-driven strategy, and seamless execution.
              </p>
              <p>
                Our team brings together expertise across FMCG, retail, hospitality, and corporate sectors, delivering campaigns that not only inspire but also convert — driving visibility, engagement, and measurable results.
              </p>
            </div>

            <div className="mt-10 h-1 w-full bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-ebs-purple to-ebs-red w-1/3"
                data-aos="slide-right"
                data-aos-duration="1500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};