
import BannerSlider from "@/components/BannerSlider";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const Index = () => {
  const services = [
    {
      id: 1,
      title: "Hækklipning",
      description: "Vi klipper alle typer af hække med præcision og øje for detaljen.",
      imageUrl: "/lovable-uploads/65a98916-440d-4757-b6e8-6068004a612c.png"
    },
    {
      id: 2,
      title: "Pris",
      description: "27 kr. pr. meter hæk - professionel klipning til konkurrencedygtig pris.",
      imageUrl: "/lovable-uploads/8ac280c6-9245-45a0-ade4-08760044e426.png",
      discount: "20% rabat hvis bestilt inden 1/6"
    },
    {
      id: 3,
      title: "Bortskaffelse",
      description: "Vi fjerner hækaffald efter klipning for kun 199 DKK.",
      imageUrl: "/lovable-uploads/3c756104-68f2-4f25-b587-002d6defcec8.png"
    }
  ];

  const benefits = [
    "Konkurrencedygtige priser",
    "Bortskaffelse af hækaffald (+199kr)",
    "Klipning i ugerne 20-35",
    "10% rabat hvis du skaffer en ny kunde",
    "Tilfredshedsgaranti",
    "Prisgaranti"
  ];

  return (
    <div>
      {/* Hero Banner */}
      <BannerSlider />
      
      {/* Intro Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="section-title">Professionel hækklipning</h2>
            <p className="text-lg text-gray-700 mb-4">
              M&M's Hækklipning tilbyder professionel hækklipning med fokus på kvalitet og service til markedets bedste priser.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Hækklipningssæsonen begynder snart. Lad os klippe din hæk skarp, så den ligner en milliard.
            </p>
            
            {/* Added promotional circle */}
            <div className="mb-8 relative inline-block">
              <div className="bg-yellow-300 rounded-full w-40 h-40 flex flex-col items-center justify-center transform hover:scale-105 transition-transform">
                <span className="font-bold text-xl text-garden-dark-green">OPSTARTSTILBUD</span>
                <span className="font-bold text-3xl text-garden-dark-green">20%</span>
                <span className="text-sm text-garden-dark-green text-center px-2">hvis bestilt inden 1/6</span>
              </div>
            </div>
            
            <div className="clear-both">
              <Link to="/kontakt" className="cta-button inline-block">
                Kontakt os i dag
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 bg-garden-light-green/20">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12">Mød vores team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="/lovable-uploads/6ece2c27-eff0-4ea1-b89f-e1716f167b14.png"
                alt="Lasse og Casper - M&M's Hækklipning" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-garden-dark-green mb-2">Lasse Maagaard & Casper Maigaard</h3>
                <p className="text-gray-600">Vi er engagerede unge, der starter på studie efter sommeren. Vi bruger sommeren på at klippe din hæk med stor omhu og præcision.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="/lovable-uploads/f122d11c-34c0-4f39-8c46-4de3f97a3e28.png"
                alt="Vores arbejde" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-garden-dark-green mb-2">Vores arbejde</h3>
                <p className="text-gray-600">Vi har solid erfaring med hækklipning og går op i at levere et skarpt og grundigt resultat hver gang. Derfor tilbyder vi hækklipning af høj kvalitet til markedets bedste priser.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center">Vores services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
                <img 
                  src={service.imageUrl} 
                  alt={service.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-garden-dark-green mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                  
                  {/* Special discount box for price */}
                  {service.discount && (
                    <div className="mt-4 bg-yellow-300 p-2 rounded-md">
                      <p className="text-garden-dark-green font-bold text-center">{service.discount}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-16 bg-garden-dark-green text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Vi tilbyder</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-garden-medium-green/20 rounded-lg">
                  <CheckCircle className="text-white flex-shrink-0" size={24} />
                  <span className="text-lg">{benefit}</span>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link to="/kontakt" className="bg-white text-garden-dark-green font-medium py-3 px-6 rounded-md transition-all duration-300 hover:scale-105 hover:bg-gray-100 shadow-md inline-block">
                Få et uforpligtende tilbud
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-garden-beige">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-garden-dark-green mb-6">
            Klar til at få en flot hæk?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-700">
            Kontakt os i dag for et uforpligtende tilbud på præcis den hækklipning, du har brug for.
            Vi står klar til at hjælpe dig.
          </p>
          <Link to="/kontakt" className="cta-button inline-block">
            Få en skarp hæk - Book nu
          </Link>
          <div className="mt-8 bg-yellow-300 inline-block text-garden-dark-green font-bold py-2 px-6 rounded-full">
            <p>OPSTARTSTILBUD - 20% RABAT ved bestilling inden 1/6</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
