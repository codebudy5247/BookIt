import HotelListing from "../../components/HotelListing";
import Container from "../../components/Container";
import SearchDialog from "../../components/SearchDialog";
const Home = () => {
  return (
    <div>
      <Container>
        <SearchDialog />
        <HotelListing />
      </Container>
    </div>
  );
};

export default Home;
