import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
    message: ""
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    // Show success message
    toast({
      title: "Besked modtaget!",
      description: "Vi kontakter dig snarest muligt.",
    });
    
    // Reset form
    setFormData({
      name: "",
      address: "",
      email: "",
      phone: "",
      message: ""
    });
  };

  return (
    <div>
      {/* Header */}
      <section className="py-20 bg-garden-dark-green text-white clip-path-slant">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Kontakt os</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Få et uforpligtende tilbud på hækklipning eller beskæring
          </p>
        </div>
      </section>
      
      {/* Contact Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-garden-dark-green mb-6 text-center">
              Indsend din forespørgsel
            </h2>
            <p className="text-center text-gray-700 mb-6">
              Skriv din adresse og så sender vi hurtigst muligt en pris
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Navn *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-garden-medium-green"
                    placeholder="Dit fulde navn"
                  />
                </div>
                <div>
                  <label htmlFor="address" className="block text-gray-700 font-medium mb-2">
                    Adresse *
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-garden-medium-green"
                    placeholder="Din adresse"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-garden-medium-green"
                    placeholder="Din email"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                    Telefonnummer *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-garden-medium-green"
                    placeholder="Dit telefonnummer"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Besked *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-garden-medium-green resize-none"
                  placeholder="Beskriv din opgave her..."
                ></textarea>
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  className="cta-button py-3 px-8"
                >
                  Send forespørgsel
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      
      {/* Contact Info */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-garden-dark-green mb-6 text-center">
              Kontaktinformation
            </h2>
            
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="bg-garden-medium-green rounded-full p-3">
                      <Phone className="text-white" size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-garden-dark-green">Telefon</h3>
                      <p className="text-gray-700">50 46 73 33</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="bg-garden-medium-green rounded-full p-3">
                      <Mail className="text-white" size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-garden-dark-green">Email</h3>
                      <p className="text-gray-700">MogMs.Haekklipning@gmail.com</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-garden-medium-green rounded-full p-3">
                      <MapPin className="text-white" size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-garden-dark-green">Adresse</h3>
                      <p className="text-gray-700">Ceresbyen 14A, 1.2<br/>8200 Aarhus C</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-200 text-center">
                <p className="text-gray-700">
                  Vi er tilgængelige for opgaver i ugerne 20-35.<br/>
                  Kontakt os gerne for mere information eller et uforpligtende tilbud.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
