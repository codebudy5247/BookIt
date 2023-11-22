import Container from "../components/Container";
import { useParams } from 'react-router-dom';

const HotelDetails = () => {
    let { id } = useParams();
  return (
    <div>
      <Container>
        <h1 className="font-extrabold text-center text-5xl text-Blueviolet bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Hotel details {id}
        </h1>
      </Container>
    </div>
  );
};

export default HotelDetails;
