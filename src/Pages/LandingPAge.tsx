import Container from "../components/Container";
import HeroSection from "../components/Landing/HeroSection";
import FeaturedRoom from "../components/Landing/FeaturedRoom";
import NewsLetter from "../components/Landing/NewsLetter";
const LandingPage = () => {
  return (
    <div className="py-8">
      <Container>
        <HeroSection />
        <FeaturedRoom />
        <NewsLetter />
      </Container>
    </div>
  );
};

export default LandingPage;
