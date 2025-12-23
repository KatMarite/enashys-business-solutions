import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/1920/1080?grayscale&blur=2"
          alt="City Skyline"
          className="w-full h-full object-cover transform scale-105 animate-slow-zoom"
        />
        {/* Gradient Overlay mimicking the PDF style */}
        <div className="absolute inset-0 bg-gradient-to-br from-ebs-purple/80 via-ebs-red/70 to-ebs-yellow/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Decorative Curves */}
      <div className="absolute bottom-0 right-0 w-1/2 h-full bg-ebs-red/20 rounded-full blur-3xl transform translate-x-1/3 translate-y-1/3 z-10 animate-pulse-slow" />
      <div className="absolute top-0 left-0 w-1/3 h-2/3 bg-ebs-purple/20 rounded-full blur-3xl transform -translate-x-1/4 -translate-y-1/4 z-10 animate-pulse-slow" style={{ animationDelay: '1s' }} />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-20 pt-20">
        <div className="max-w-4xl">
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-6 drop-shadow-lg"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            ENASHY'S <br />
            BUSINESS <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ebs-yellow to-white">
              SOLUTIONS
            </span>
          </h1>

          <div
            className="w-24 h-2 bg-white mb-8"
            data-aos="fade-right"
            data-aos-delay="300"
          />

          <p
            className="text-xl md:text-2xl text-white font-light tracking-wide max-w-2xl mb-10 leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Marketing • Branding • PR • <br />
            Experiential Activations • Event Production
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <a
              href="#about"
              className="px-8 py-4 bg-white text-ebs-purple font-bold rounded-full hover:bg-ebs-yellow hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group shadow-xl hover:scale-105 active:scale-95"
            >
              Discover More
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-all duration-300 flex items-center justify-center hover:scale-105 active:scale-95"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};