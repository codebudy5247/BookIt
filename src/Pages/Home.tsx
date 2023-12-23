import { useGetHotelsQuery } from "../redux/api/hotelApi";
import HotelListing from "../components/Listings/HotelListing";
import Container from "../components/Container";
import Search from "../components/Search";
const Home = () => {
  const { data, isLoading, isError } = useGetHotelsQuery();
  return (
    <div>
      <Container>
        <Search />
        <HotelListing hotels={data!} isLoading={isLoading} isError={isError} />
      </Container>
    </div>
  );
};

export default Home;
