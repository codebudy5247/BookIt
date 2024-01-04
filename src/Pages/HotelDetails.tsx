import Container from "../components/UI/Container";
import { useLocation } from "react-router-dom";
import { HotelResponse } from "../types/hotel";
import Gallery from "../components/ListingDetails/Gallery";
import RoomAvailability from "../components/ListingDetails/RoomAvailability";
import { Icon } from "@iconify/react";
import { useAppSelector } from "../redux/hook";

interface CustomState {
  hotel: HotelResponse;
}

const HotelDetails = () => {
  const location = useLocation();
  const state = location.state as CustomState;
  const searchDetails = useAppSelector((state) => state.searchState.searchData);
  console.log(searchDetails);

  return (
    <div>
      <Container>
        <h2 className="font-bold text-lg md:text-2xl mb-2 text-Blueviolet">
          {state?.hotel?.name}
        </h2>
        <Gallery photos={state?.hotel?.images} />
        <div className="md:grid md:grid-cols-12 gap-10 mt-4">
          <div className="md:col-span-8 md:w-full">
            <div>
              <h2 className="font-bold text-3xl mb-2 text-Blueviolet">Amenities</h2>
              <div className="flex items-center gap-3">
                {state?.hotel?.amenities.map((amenity) => (
                  <div key={amenity} className="flex">
                    <Icon
                      icon="typcn:tick"
                      color="lightgreen"
                      height={40}
                      width={40}
                    />
                    <p className="text-xs md:text-base pt-3 text-cornflowerblue">
                      {capitalizeFirstLetter(amenity)}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mb-8 mt-4">
                <h2 className="font-bold text-3xl mb-2 text-Blueviolet">Description</h2>
                <p className="text-cornflowerblue">{state?.hotel?.description}</p>
              </div>
              <div className="mb-11">
                <h2 className="font-bold text-3xl mb-2 text-Blueviolet">Safety And Hygiene</h2>
                <div className="grid grid-cols-2">
                  <div className="flex items-center my-2 md:my-0">
                    <Icon icon="healthicons:cleaning" height={30} width={30}  color="blue"/>
                    <p className="ml-2 md:text-base text-sm text-cornflowerblue">Daily Cleaning</p>
                  </div>
                  <div className="flex items-center my-2 md:my-0">
                    <Icon
                      icon="ic:outline-fire-extinguisher"
                      height={30}
                      width={30}
                      color="blue"
                    />
                    <p className="ml-2 md:text-base text-sm text-cornflowerblue">
                      Fire Extinguishers
                    </p>
                  </div>
                  <div className="flex items-center my-2 md:my-0">
                    <Icon
                      icon="ant-design:medicine-box-filled"
                      height={30}
                      width={30}
                      color="blue"
                    />
                    <p className="ml-2 md:text-base text-sm text-cornflowerblue">
                      Disinfections and Sterilizations
                    </p>
                  </div>
                  <div className="flex items-center my-2 md:my-0">
                    <Icon icon="game-icons:smoke-bomb" height={30} width={30}  color="blue"/>
                    <p className="ml-2 md:text-base text-sm text-cornflowerblue">Smoke Detectors</p>
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
          {/* <div className="md:col-span-4 rounded-xl shadow-lg sticky top-10 h-fit overflow-auto">
          
          </div> */}
        </div>
        {/* List of rooms */}
        <RoomAvailability
          hotelID={state?.hotel?._id}
          hotelName={state?.hotel?.name}
          hotelLocation={state?.hotel?.location?.city}
        />

        <h2 className="font-bold text-3xl text-Blueviolet">Policies</h2>
        {state?.hotel?.policies.map((policy,index) =>(
          <ul key={index}>
             <li className="text-xs md:text-base pt-2 text-cornflowerblue">{policy}.</li>
          </ul>
        ))}
      </Container>
    </div>
  );
};

export default HotelDetails;

function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
