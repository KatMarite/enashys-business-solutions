import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image?: string;
}

const projects: Project[] = [
  {
    title: "Engen Activation Campaign",
    description: "National experiential campaign focused on consumer engagement and brand awareness.",
    image: "/engen-activation.jpg"
  },
  {
    title: "Cinnabon Product Launch",
    description: "Launch event and influencer-driven PR campaign for new product rollout.",
    image: "/cinnabon-launch.jpg"
  },
  {
    title: "EduBridge",
    description: "Full brand development, positioning, and marketing roadmap for a new beverage brand.",
    image: "/edubridge-event.jpg"
  },
  {
    title: "Corner Bakery Activation",
    description: "In-store activation and sampling campaign across multiple retail locations.",
    image: "/corner-bakery-activation.jpg"
  },
  {
    title: "Corporate Event – The Bridge",
    description: "Concept, production, and execution of a corporate networking event.",
    image: "https://picsum.photos/seed/corporate/800/600"
  },
  {
    title: "Personal Branding Projects",
    description: "Brand identity, PR, and digital positioning for entrepreneurs and public figures.",
    image: "/personal-branding.jpg"
  },
  {
    title: "Lead Generation Campaigns",
    description: "B2B and B2C database sourcing and automation setup for client sales teams.",
    image: "/lead-generation-masterclass.jpg"
  }
];

export const Portfolio: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="portfolio" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-ebs-purple uppercase mb-4" data-aos="fade-down">
            Portfolio Highlights
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg" data-aos="fade-up" data-aos-delay="200">
            Below is a selection of our recent projects showcasing our creative range and strategic execution.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-ebs-red hover:-translate-y-2 cursor-pointer flex flex-col"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              onClick={() => project.image && setSelectedImage(project.image)}
            >
              {project.image && (
                <div className="mb-6 rounded-xl overflow-hidden shadow-md relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300" size={32} />
                  </div>
                </div>
              )}
              <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-ebs-purple transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-600 leading-relaxed flex-grow">
                {project.description}
              </p>
              <div className="mt-6 flex items-center text-sm font-semibold text-ebs-red opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                View Project
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-10 animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={48} />
          </button>

          <div className="relative max-w-5xl max-h-full w-full flex items-center justify-center">
            <img
              src={selectedImage}
              alt="Project Full View"
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-300"
              onClick={(e) => e.stopPropagation()} // Prevent clicking image from closing modal
            />
          </div>
        </div>
      )}
    </section>
  );
};