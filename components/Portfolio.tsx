import React from 'react';

interface Project {
  title: string;
  description: string;
}

const projects: Project[] = [
  {
    title: "Engen Activation Campaign",
    description: "National experiential campaign focused on consumer engagement and brand awareness."
  },
  {
    title: "Cinnabon Product Launch",
    description: "Launch event and influencer-driven PR campaign for new product rollout."
  },
  {
    title: "Red Sol Brand Strategy",
    description: "Full brand development, positioning, and marketing roadmap for a new beverage brand."
  },
  {
    title: "Corner Bakery Activation",
    description: "In-store activation and sampling campaign across multiple retail locations."
  },
  {
    title: "Corporate Event – The Bridge",
    description: "Concept, production, and execution of a corporate networking event."
  },
  {
    title: "Personal Branding Projects",
    description: "Brand identity, PR, and digital positioning for entrepreneurs and public figures."
  },
  {
    title: "Lead Generation Campaigns",
    description: "B2B and B2C database sourcing and automation setup for client sales teams."
  }
];

export const Portfolio: React.FC = () => {
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
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-ebs-red hover:-translate-y-2 cursor-pointer"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-ebs-purple transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {project.description}
              </p>
              <div className="mt-6 flex items-center text-sm font-semibold text-ebs-red opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                View Details
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};