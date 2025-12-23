import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-ebs-red text-white py-8 border-t border-white/10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm font-light opacity-80">
          &copy; {new Date().getFullYear()} Enashy's Business Solutions. All rights reserved.
        </div>
        <div className="flex gap-6 text-sm font-semibold">
          <a href="#home" className="hover:text-ebs-yellow transition-colors">Home</a>
          <a href="#services" className="hover:text-ebs-yellow transition-colors">Services</a>
          <a href="#contact" className="hover:text-ebs-yellow transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};