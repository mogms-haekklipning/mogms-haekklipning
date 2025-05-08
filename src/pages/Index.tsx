
import BannerSlider from "@/components/BannerSlider";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const Index = () => {
  const services = [
    {
      id: 1,
      title: "Hækklipning",
      description: "Vi klipper alle typer af hække med præcision og øje for detaljen.",
      imageUrl: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2,
      title: "Beskæring",
      description: "Vi tilbyder professionel beskæring af buske og mindre træer.",
      imageUrl: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3,
      title: "Oprydning",
      description: "Efter arbejdet rydder vi grundigt op, så din have står flot tilbage.",
      imageUrl: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    }
  ];

  const benefits = [
    "Konkurrencedygtige priser",
    "Grundig oprydning efter arbejdet",
    "Fleksible tidspunkter",
    "Erfarne hækklippere",
    "Professionelt udstyr",
    "Hurtig og effektiv service"
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
            <p className="text-lg text-gray-700 mb-8">
              M&M's Hækklipning tilbyder professionel hækklipning med fokus på kvalitet og service til markedets bedste priser.
              Vi sørger for at din have altid ser velplejet og indbydende ud.
            </p>
            <Link to="/kontakt" className="cta-button inline-block">
              Kontakt os i dag
            </Link>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Hvorfor vælge os?</h2>
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
        </div>
      </section>
    </div>
  );
};

export default Index;
