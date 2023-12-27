import { useNavigate } from "react-router-dom";
import Search from "../Search";
const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section className="flex items-center gap-12 container mx-auto">
      <div className="h-full">
        <h1 className="font-bold text-6xl mb-6">Explore Our Exquisite Hotel</h1>
        <p className="text-gunmetalgray mb-12 max-w-lg text-2xl">
          Find Your Perfect Place To Stay.
        </p>
      </div>

      <div className="md:grid hidden gap-8 grid-cols-1">
        <div className="rounded-2xl overflow-hidden h-48">
          <img
            src="https://images.oyoroomscdn.com/uploads/hotel_image/18616/large/b50ae3f1cf28e829.jpg"
            alt="hero-1"
            width={600}
            height={300}
            className="
        object-cover 
        group-hover:scale-110 
        transition
      "
          />
        </div>

        <div className="grid grid-cols-2 gap-8 h-50">
          <div className="rounded-2xl overflow-hidden">
            <img
              src="https://images.oyoroomscdn.com/uploads/hotel_image/112096/large/8637e41ffefdf1a6.jpg"
              alt="hero-2"
              width={300}
              height={300}
              className="
        object-cover 
        group-hover:scale-110 
        transition
      "
            />
          </div>
          <div className="rounded-2xl overflow-hidden">
            <img
              src="https://images.oyoroomscdn.com/uploads/hotel_image/18616/large/b87220566cf979be.jpg"
              alt="hero-3"
              width={300}
              height={300}
              className="
            object-cover 
            group-hover:scale-110 
            transition
          "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
