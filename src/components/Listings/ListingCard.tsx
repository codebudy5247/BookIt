import { useNavigate } from "react-router-dom";

const ListingCard = (props: any) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/hotel/${props?.data._id}`)}
      className="col-span-1 cursor-pointer group"
    >
      <div className="flex flex-col gap-2 w-full">
        <div
          className="
            aspect-square 
            w-full 
            relative 
            overflow-hidden 
            rounded-xl
          "
        >
          <img
            className="
              object-cover 
              h-full 
              w-full 
              group-hover:scale-110 
              transition
            "
            src={props?.data?.images[0]}
            alt="Listing"
          />
          {/* <div
            className="
            absolute
            top-3
            right-3
          "
          >
            <HeartButton 
            />
          </div> */}
        </div>
        <div className="font-bold text-lg">
          {props?.data?.name},{" "}
          {capitalizeFirstLetter(props?.data?.location?.city)}
        </div>
        <div className="flex flex-row items-center gap-1">
          <div className="font-semibold">₹ {props?.data?.price}</div>
          <div className="font-light">night</div>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;

function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
