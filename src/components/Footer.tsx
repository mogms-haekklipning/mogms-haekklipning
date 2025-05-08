import { Link } from "react-router-dom";
import Logo from "./Logo";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 pt-10 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <Logo />
            <p className="mt-4 text-gray-600 max-w-md">
              Vi tilbyder professionel hækklipning med fokus på kvalitet og service til markedets bedste priser.
            </p>
            <div className="mt-4">
              <p className="text-gray-600">Lasse Maagaard & Casper Maigaard</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-garden-dark-green mb-4">Kontakt</h3>
            <address className="not-italic text-gray-600 space-y-2">
              <div className="flex items-center">
                <MapPin size={18} className="mr-2 text-garden-medium-green flex-shrink-0" />
                <p>Ceresbyen 14A, 1.2, 8200 Aarhus C</p>
              </div>
              <div className="flex items-center">
                <Phone size={18} className="mr-2 text-garden-medium-green flex-shrink-0" />
                <p>Telefon: 50 46 73 33</p>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="mr-2 text-garden-medium-green flex-shrink-0" />
                <p>Email: info@mmhaekklipning.dk</p>
              </div>
            </address>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-garden-dark-green mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-garden-medium-green transition-colors">
                  Forside
                </Link>
              </li>
              <li>
                <Link to="/om-os" className="text-gray-600 hover:text-garden-medium-green transition-colors">
                  Om os
                </Link>
              </li>
              <li>
                <Link to="/kontakt" className="text-gray-600 hover:text-garden-medium-green transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-6">
          <p className="text-center text-gray-500 text-sm">
            © {currentYear} M&M's Hækklipning. Alle rettigheder forbeholdes.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
