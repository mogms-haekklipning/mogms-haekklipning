
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";

const slides = [
  {
    id: 1,
    image: "/lovable-uploads/6ece2c27-eff0-4ea1-b89f-e1716f167b14.png",
    alt: "M&M Hækklipning team",
    title: "Professionel hækklipning",
    description: "Vi sørger for at din hæk bliver klippet skarp, så den ligner en milliard",
  },
  {
    id: 2,
    image: "/lovable-uploads/30899dc4-9309-4f00-a0dd-aec08c69c14c.png",
    alt: "M&M Hækklipning i arbejde",
    title: "Erfarne hækklippere",
    description: "Med solid erfaring går vi op i at levere et skarpt og grundigt resultat hver gang",
  },
  {
    id: 3,
    image: "/lovable-uploads/18f3acd1-3743-419e-8130-b7bb28243b42.png",
    alt: "Hækklipning i gang",
    title: "Kvalitet og service",
    description: "Vi klipper i ugerne 20-35 med fokus på præcision og omhu",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=600&q=80",
    alt: "Velplejet hæk",
    title: "Gør din have smuk",
    description: "Løft udseendet på din have med vores professionelle service",
  }
];

const BannerSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((current) => (current === slides.length - 1 ? 0 : current + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((current) => (current === 0 ? slides.length - 1 : current - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[500px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Image with overlay */}
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <img
            src={slide.image}
            alt={slide.alt}
            className="w-full h-full object-cover"
          />
          
          {/* Content */}
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="container mx-auto px-4 text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{slide.title}</h1>
              <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">{slide.description}</p>
              <Link to="/kontakt" className="cta-button inline-block animate-pulse">
                Få en skarp hæk - Book nu
              </Link>
            </div>
          </div>
        </div>
      ))}
      
      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/30 hover:bg-white/60 p-2 rounded-full text-white transition-colors"
        aria-label="Previous slide"
      >
        <ArrowLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/30 hover:bg-white/60 p-2 rounded-full text-white transition-colors"
        aria-label="Next slide"
      >
        <ArrowRight size={24} />
      </button>
      
      {/* Indicators */}
      <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-white" : "bg-white/40"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default BannerSlider;
