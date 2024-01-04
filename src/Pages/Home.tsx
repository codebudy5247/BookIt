import { useGetHotelsQuery } from "../redux/api/hotelApi";
import HotelListing from "../components/Listings/HotelListing";
import Container from "../components/UI/Container";
import Search from "../components/Search";
import NewsLetter from "../components/Landing/NewsLetter";
const Home = () => {
  const { data, isLoading, isError } = useGetHotelsQuery();
  return (
    <div>
      <Container>
        <Search />
        <HotelListing hotels={data!} isLoading={isLoading} isError={isError} />
        <NewsLetter />
      </Container>
    </div>
  );
};

export default Home;
