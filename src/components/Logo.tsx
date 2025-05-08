
const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="relative">
        <img 
          src="/lovable-uploads/89554f3c-fe5b-4f02-bc71-c17681b95f2d.png" 
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
