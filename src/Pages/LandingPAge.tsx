import Container from "../components/Container";
import HeroSection from "../components/Landing/HeroSection";
const LandingPage = () => {
  return (
    <div className="bg-paleblue py-8">
      <Container>
        <HeroSection />
      </Container>
    </div>
  );
};

export default LandingPage;
