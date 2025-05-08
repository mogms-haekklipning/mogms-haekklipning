
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      {/* Header */}
      <section className="py-20 bg-garden-dark-green text-white clip-path-slant">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Om os</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Lær mere om M&M's Hækklipning og de engagerede unge bag virksomheden.
          </p>
        </div>
      </section>
      
      {/* Our story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-title text-center">Vores historie</h2>
            <div className="prose prose-lg mx-auto text-gray-700">
              <p className="mb-4">
                M&M's Hækklipning drives af to engagerede unge, der starter på studie efter sommeren. 
                Med en betydelig erfaring inden for hækklipning og en passion for velholdte haver, 
                har vi besluttet at bruge vores sommer på at levere professionel hækklipning.
              </p>
              <p className="mb-4">
                Vores mål er simpelt: At levere et skarpt og grundigt resultat – hver eneste gang. 
                Vi ved, hvor meget en velplejet have betyder for hjemmets udseende, og vi tager 
                denne opgave meget seriøst.
              </p>
              <p>
                Vi kombinerer vores erfaring med en grundig tilgang og en ægte interesse for at skabe 
                smukke udeområder til vores kunder. Når du vælger M&M's Hækklipning, får du ikke blot 
                en professionel service – du får et team, der virkelig går op i detaljerne.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12">Vores værdier</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-garden-light-green rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-garden-dark-green">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-4 text-garden-dark-green">Kvalitet</h3>
              <p className="text-gray-600 text-center">
                Vi går aldrig på kompromis med kvaliteten. Hver hæk klippes med præcision og omhu.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-garden-light-green rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-garden-dark-green">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-4 text-garden-dark-green">Pålidelighed</h3>
              <p className="text-gray-600 text-center">
                Vi overholder aftaler og deadlines, så du altid kan regne med os og vores service.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-garden-light-green rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-garden-dark-green">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-4 text-garden-dark-green">Værdi</h3>
              <p className="text-gray-600 text-center">
                Vi tilbyder konkurrencedygtige priser uden at gå på kompromis med kvaliteten af vores arbejde.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-garden-beige">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-garden-dark-green mb-6">
            Lad os tage os af din hæk
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-700">
            Nu hvor du kender os bedre, lad os hjælpe med at gøre din have smuk med vores professionelle hækklipning.
          </p>
          <Link to="/kontakt" className="cta-button inline-block">
            Kontakt os i dag
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
