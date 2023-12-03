import Container from "../components/Container";
import HeroSection from "../components/Landing/HeroSection";
import Search from "../components/Search";
import FeaturedRoom from "../components/Landing/FeaturedRoom";
const LandingPage = () => {
  return (
    <div className="py-8">
      <Container>
        <HeroSection />
        <Search />
        <FeaturedRoom />
      </Container>
    </div>
  );
};

export default LandingPage;
