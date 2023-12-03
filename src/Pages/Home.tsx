import HotelListing from "../components/Listings/HotelListing";
import Container from "../components/Container";
import Search from "../components/Search";
const Home = () => {
  return (
    <div>
      <Container>
        <Search />
        <HotelListing />
      </Container>
    </div>
  );
};

export default Home;
