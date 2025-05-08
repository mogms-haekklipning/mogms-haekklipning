
import { Link } from "react-router-dom";
import Logo from "./Logo";

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
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-garden-dark-green mb-4">Kontakt</h3>
            <address className="not-italic text-gray-600">
              <p>Email: info@mmhaekklipning.dk</p>
              <p>Telefon: +45 12 34 56 78</p>
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
