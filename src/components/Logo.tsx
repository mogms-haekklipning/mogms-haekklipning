
const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="relative">
        <img 
          src="/lovable-uploads/c38a7e1d-8123-45f0-9af7-5b7b91182d06.png" 
          alt="M&Ms Hækklipning Logo" 
          className="h-12 w-auto"
        />
      </div>
      <div className="text-xl font-bold hidden md:block">
        <span className="text-garden-dark-green">Hæk</span>
        <span className="text-garden-medium-green">klipning</span>
      </div>
    </div>
  );
};

export default Logo;
