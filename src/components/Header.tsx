
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const navItems = [
    { name: "Forside", path: "/" },
    { name: "Om os", path: "/om-os" },
    { name: "Kontakt", path: "/kontakt" }
  ];
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 bg-white shadow-sm z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Logo />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-lg font-medium transition-colors hover:text-garden-medium-green ${
                  location.pathname === item.path ? "text-garden-dark-green font-semibold" : "text-gray-700"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/kontakt" className="cta-button">
              Få et tilbud
            </Link>
          </nav>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-garden-medium-green"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Luk menu" : "Åbn menu"}
          >
            {isMenuOpen ? (
              <X size={28} />
            ) : (
              <Menu size={28} />
            )}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block py-2 px-3 rounded-md ${
                  location.pathname === item.path 
                    ? "bg-garden-light-green/20 text-garden-dark-green font-semibold" 
                    : "text-gray-700 hover:bg-gray-100"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link 
              to="/kontakt" 
              className="block w-full cta-button text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Få et tilbud
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
