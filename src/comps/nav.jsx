import { useState, useEffect } from "react";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY && window.scrollY > 100) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
    setLastScrollY(window.scrollY);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
    setShowNavbar(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div
      className={`fixed w-full top-6 left-0 flex justify-center z-50 transition-transform duration-500 ${showNavbar ? "translate-y-0" : "-translate-y-24"
        }`}
    >
      <div className="glass px-8 py-4 rounded-full flex items-center gap-8 shadow-2xl border-white/20">
        <div className="hidden md:block font-outfit font-bold text-xl bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
          MV
        </div>

        <div className="flex gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative px-4 py-2 rounded-full transition-all duration-300 font-medium ${activeSection === item.id
                  ? "text-black bg-amber-500 shadow-lg shadow-amber-500/30 font-bold"
                  : "text-neutral-300 hover:text-white hover:bg-white/10"
                }`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute -bottom-1 left-1/2 w-1 h-1 bg-white rounded-full -translate-x-1/2 opacity-0 animate-ping" />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
