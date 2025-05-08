
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gray-50">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-garden-dark-green mb-4">404</h1>
        <p className="text-2xl text-gray-600 mb-8">Beklager, denne side findes ikke</p>
        <p className="text-lg text-gray-500 max-w-md mx-auto mb-8">
          Den side, du leder efter, eksisterer ikke eller er blevet flyttet.
        </p>
        <Link to="/" className="cta-button inline-block">
          Tilbage til forsiden
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
