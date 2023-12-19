import Container from "../components/Container";
import { useLocation } from "react-router-dom";
import { HotelResponse } from "../types/hotel";
import { MdOutlineCleaningServices } from "react-icons/md";
import { LiaFireExtinguisherSolid } from "react-icons/lia";
import { AiOutlineMedicineBox } from "react-icons/ai";
import { GiSmokeBomb } from "react-icons/gi";
import Gallery from "../components/Listings/Gallery";
import Booking from "../components/Booking";
interface CustomState {
  hotel: HotelResponse;
}

const HotelDetails = () => {
  const location = useLocation();
  const state = location.state as CustomState;

  return (
    <div>
      <Container>
        <Gallery photos={state?.hotel?.images} />
        <div className="md:grid md:grid-cols-12 gap-10 mt-4">
          <div className="md:col-span-8 md:w-full">
            <div>
              <div className="flex gap-1 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
              <h2 className="font-bold text-lg md:text-2xl">
                {state?.hotel?.name}
              </h2>
              </div>
              {/* <div className="flex my-11">
                {state?.hotel?.amenities.map((amenity) => (
                  <div
                    key={amenity}
                    className="md:w-44 w-fit text-center px-2 md:px-0 h-20 md:h-40 mr-3 bg-[#eff0f2] dark:bg-gray-800 rounded-lg grid place-content-center"
                  >
                    <p className="text-xs md:text-base pt-3">{amenity}</p>
                  </div>
                ))}
              </div> */}
              <div className="mb-8 mt-4">
                <h2 className="font-bold text-3xl mb-2">Description</h2>
                <p>{state?.hotel?.description}</p>
              </div>
              <div className="mb-11">
                <h2 className="font-bold text-3xl mb-2">Safety And Hygiene</h2>
                <div className="grid grid-cols-2">
                  <div className="flex items-center my-1 md:my-0">
                    <MdOutlineCleaningServices height={40} width={40} />
                    <p className="ml-2 md:text-base text-xs">Daily Cleaning</p>
                  </div>
                  <div className="flex items-center my-1 md:my-0">
                    <LiaFireExtinguisherSolid />
                    <p className="ml-2 md:text-base text-xs">
                      Fire Extinguishers
                    </p>
                  </div>
                  <div className="flex items-center my-1 md:my-0">
                    <AiOutlineMedicineBox />
                    <p className="ml-2 md:text-base text-xs">
                      Disinfections and Sterilizations
                    </p>
                  </div>
                  <div className="flex items-center my-1 md:my-0">
                    <GiSmokeBomb />
                    <p className="ml-2 md:text-base text-xs">Smoke Detectors</p>
                  </div>
                </div>
              </div>
              {/* <div className='shadow dark:shadow-white rounded-lg p-6'>
                <div className='items-center mb-4'>
                  <p className='md:text-lg font-semibold'>Customer Reviews</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  <RoomReview roomId={room._id} />
                </div>
              </div> */}
            </div>
          </div>
         
          <div className='md:col-span-4 rounded-xl shadow-lg sticky top-10 h-fit overflow-auto'>
            <Booking />
          </div>
        </div>

      </Container>
    </div>
  );
};

export default HotelDetails;
