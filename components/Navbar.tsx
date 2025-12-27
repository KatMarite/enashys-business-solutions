import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Expertise', href: '#expertise' },
    { name: 'Clients', href: '#clients' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Services', href: '#services' },
    { name: 'Vision', href: '#vision' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);

    const element = document.querySelector(href);
    if (element) {
      // Offset for fixed navbar
      const navHeight = 85;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Determine if we should apply the "scrolled" style (white bg, dark text)
  // We also apply this when the mobile menu is open so the close button/logo are visible
  const isSolid = scrolled || isOpen;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isSolid ? 'bg-white shadow-lg py-3' : 'bg-transparent py-5'
        }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center gap-3 group cursor-pointer"
        >
          {/* Recreated Logo Icon */}
          <img
            src="/logo.png"
            alt="EBS - Enashy's Business Solutions"
            className="h-14 w-auto object-contain"
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6 xl:space-x-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-sm font-medium uppercase tracking-wider hover:text-ebs-red transition-colors duration-300 cursor-pointer ${isSolid ? 'text-gray-800' : 'text-white'
                }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className={`px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wide transition-all duration-300 transform hover:scale-105 cursor-pointer ${isSolid
              ? 'bg-ebs-purple text-white hover:bg-ebs-red'
              : 'bg-white text-ebs-purple hover:bg-gray-100'
              }`}
          >
            Get in touch
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className={isSolid ? 'text-gray-800' : 'text-white'} size={28} />
          ) : (
            <Menu className={isSolid ? 'text-gray-800' : 'text-white'} size={28} />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-screen py-6 border-t border-gray-100' : 'max-h-0'
          }`}
      >
        <div className="container mx-auto px-6 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-800 text-lg font-semibold border-b border-gray-100 pb-2 flex justify-between items-center hover:text-ebs-purple cursor-pointer"
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.name}
              <ChevronRight size={16} />
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};