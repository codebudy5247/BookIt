import Container from "../components/UI/Container";
import HeroSection from "../components/Landing/HeroSection";
import FeaturedRoom from "../components/Landing/FeaturedRoom";
import NewsLetter from "../components/Landing/NewsLetter";
import Search from "../components/Search";
const LandingPage = () => {
  return (
    <div className="py-8">
      <Container>
        <HeroSection />
        <Search />
        <FeaturedRoom />
        <NewsLetter />
      </Container>
    </div>
  );
};

export default LandingPage;
