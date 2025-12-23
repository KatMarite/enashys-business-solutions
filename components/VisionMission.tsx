import React from 'react';
import { Quote } from 'lucide-react';

export const VisionMission: React.FC = () => {
  return (
    <section id="vision" className="relative">
        <div className="flex flex-col md:flex-row min-h-[600px]">
            
            {/* Left/Top: Vision - White/Image BG */}
            <div className="md:w-1/2 p-12 md:p-20 relative flex items-center overflow-hidden" data-aos="fade-right">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img src="https://picsum.photos/800/800?abstract" alt="Creative" className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110" />
                    <div className="absolute inset-0 bg-white/95" />
                </div>
                
                <div className="relative z-10">
                    <div className="mb-10 relative">
                        <div className="absolute -top-10 -left-10 w-24 h-24 border-t-8 border-l-8 border-ebs-yellow" />
                        <h2 className="text-5xl md:text-7xl font-black text-ebs-red leading-none mb-2">OUR</h2>
                        <h2 className="text-5xl md:text-7xl font-black text-ebs-red leading-none mb-2">VISION</h2>
                    </div>

                    <div className="flex gap-4">
                        <Quote className="text-ebs-yellow rotate-180 shrink-0" size={48} />
                        <div>
                             <h3 className="text-2xl font-bold text-ebs-red mb-4">Our Vision</h3>
                             <p className="text-xl text-gray-700 leading-relaxed font-light">
                                To empower brands and individuals through strategic creativity, authentic storytelling, and impactful experiences that drive measurable success.
                             </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right/Bottom: Mission - Purple BG */}
            <div className="md:w-1/2 bg-ebs-purple text-white p-12 md:p-20 flex items-center relative overflow-hidden" data-aos="fade-left">
                 <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 animate-pulse" />
                 
                 <div className="relative z-10 w-full">
                    <div className="mb-10 text-right">
                        <h2 className="text-5xl md:text-7xl font-black text-white/20 leading-none">& MISSION</h2>
                    </div>

                    <div className="flex gap-4 flex-row-reverse text-right">
                        <Quote className="text-ebs-yellow shrink-0" size={48} />
                        <div>
                             <h3 className="text-2xl font-bold text-ebs-yellow mb-4">Our Mission</h3>
                             <p className="text-xl text-white/90 leading-relaxed font-light">
                                To deliver innovative, results-driven marketing and branding solutions that merge creativity, strategy, and technology — helping clients stand out, scale, and succeed.
                             </p>
                        </div>
                    </div>
                 </div>
            </div>
        </div>
    </section>
  );
};