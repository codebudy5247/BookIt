
import { useGetHotelsQuery } from "../../redux/api/hotelApi";

const Home = () => {
  const { data, isLoading, isError } = useGetHotelsQuery()

  console.log({ data, isLoading, isError });
  

  return (
    <div className="mt-10">
      <h3 className="text-center font-extrabold text-8xl text-ultramarine bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        Hotels
      </h3>
      
    </div>
  );
};

export default Home;
