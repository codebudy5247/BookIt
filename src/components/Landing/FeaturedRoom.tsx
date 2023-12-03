import { useNavigate } from "react-router-dom";
import { useGetHotelsQuery } from "../../redux/api/hotelApi";
import Loader from "../Loader";
const FeaturedRoom = () => {
  const navigate = useNavigate();
  const { data, isLoading, isError } = useGetHotelsQuery();

  let getSingleFeaturedRoom: any;
  if (data && data.length > 0) {
    getSingleFeaturedRoom = data[0];
  }
  if (isError)
    return (
      <h1 className="font-extrabold text-5xl text-center text-Blueviolet bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        Something went wrong.Try after sometime!
      </h1>
    );
  if (isLoading) return <Loader />;
  return (
    <section className="flex md:flex-row flex-col py-10 items-center gap-12 container mx-auto">
      <div className="md:grid gap-8 grid-cols-1">
        {/* <div className='w-full rounded-2xl overflow-hidden h-48 mb-4 md:mb-0'>
          <img
            src="https://images.oyoroomscdn.com/uploads/hotel_image/18616/large/b50ae3f1cf28e829.jpg"
            alt={getSingleFeaturedRoom?.name}
            width={700}
            height={300}
            className='img scale-animation'
          />
        </div> */}
        <div className="grid grid-cols-2 gap-8 h-55">
          {getSingleFeaturedRoom &&
            getSingleFeaturedRoom.images.map((image:any) => (
              <div className="rounded-3xl overflow-hidden">
                <img
                  src={image}
                  alt={image}
                  width={300}
                  height={300}
                  className="img scale-animation"
                />
              </div>
            ))}
        </div>
      </div>

      <div className="md:py-8 md:w-1/2 text-left">
        <h3 className="font-bold text-6xl mb-6">Featured Room</h3>

        <p className="font-normal max-w-md">
          {getSingleFeaturedRoom?.description}
        </p>

        <div className="flex flex-col md:flex-row md:items-end justify-between mt-5">
          <div className="flex mb-3 md:mb-0">
            <div className="flex gap-3 flex-col items-center justify-center mr-4">
              <p className="text-xs lg:text-xl">Start From</p>
              <p className="md:font-bold flex font-medium text-lg xl:text-5xl">
                ₹ 500
              </p>
            </div>
            <div className="flex gap-3 flex-col items-center justify-center mr-4">
              <p className="text-xs lg:text-xl text-center">Discount</p>
              <p className="md:font-bold flex font-medium text-lg xl:text-5xl">
                20%
              </p>
            </div>
          </div>
          <div
            onClick={() => navigate(`/hotel/${getSingleFeaturedRoom?._id}`)}
            className="border h-fit text-center border-Blueviolet text- text-Blueviolet px-3 py-2 lg:py-5 lg:px-7 rounded-2xl font-bold lg:text-xl cursor-pointer"
          >
            More Details
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedRoom;
