import React, { useState, useEffect } from "react";
import { GraduationCap, Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export default function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "Profile" },
    { id: "experience", label: "Career" },
    { id: "ed-lab", label: "Ed-Design Lab" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-brand-beige/85 backdrop-blur-md border-b border-brand-clay/40 shadow-xs"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick("hero")}
          className="flex items-center gap-3 group cursor-pointer focus:outline-hidden"
          id="nav-logo"
        >
          <div className="w-10 h-10 rounded-none bg-brand-charcoal flex items-center justify-center text-brand-beige border border-brand-charcoal transition-transform duration-300 group-hover:rotate-6">
            <GraduationCap size={20} />
          </div>
          <div className="text-left">
            <span className="font-sans font-extrabold text-xl md:text-2xl tracking-tight text-brand-sage block leading-none">
              유혜민
            </span>
            <span className="font-mono text-[9px] text-brand-sage font-bold uppercase tracking-widest mt-1 block">
              LIFELONG EDUCATION
            </span>
          </div>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8" id="desktop-menu">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`font-sans text-xs uppercase tracking-widest font-bold py-1.5 transition-colors duration-300 cursor-pointer focus:outline-hidden ${
                  isActive ? "text-brand-charcoal font-black border-b-2 border-brand-charcoal" : "text-brand-charcoal/60 hover:text-brand-charcoal"
                }`}
                id={`nav-item-${item.id}`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {/* CTA Contact Button */}
        <div className="hidden md:block">
          <button
            onClick={() => handleNavClick("contact")}
            className="group px-6 py-3 rounded-none border border-brand-charcoal bg-brand-charcoal text-brand-beige font-mono text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-transparent hover:text-brand-charcoal transition-all duration-300 flex items-center gap-1.5 cursor-pointer shadow-xs"
            id="nav-cta-contact"
          >
            Get in touch
            <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-1.5 text-brand-charcoal hover:bg-brand-cream rounded-lg transition-colors cursor-pointer"
          aria-label="Toggle Menu"
          id="mobile-menu-toggle"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-brand-cream/95 backdrop-blur-lg border-b border-brand-clay absolute top-full left-0 right-0 overflow-hidden shadow-lg"
            id="mobile-drawer"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left font-serif text-2xl font-medium py-1 ${
                    activeSection === item.id ? "text-brand-charcoal pl-3 border-l-2 border-brand-charcoal" : "text-brand-charcoal/50"
                  }`}
                  id={`mobile-nav-item-${item.id}`}
                >
                  {item.label}
                </button>
              ))}
              <hr className="border-brand-clay/50 my-2" />
              <button
                onClick={() => handleNavClick("contact")}
                className="w-full text-center py-3.5 bg-brand-charcoal hover:bg-brand-charcoal/90 text-brand-beige rounded-xl font-sans text-sm font-semibold uppercase tracking-wider transition-all duration-300"
                id="mobile-nav-contact-btn"
              >
                Get in touch
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
