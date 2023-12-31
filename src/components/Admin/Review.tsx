import { Icon } from "@iconify/react";

const Review = () => {
  return (
    <div
      className="w-full shadow-xl px-4 py-4 rounded-lg"
      style={{ height: "70vh" }}
    >
      <div className="flex justify-between items-center">
        <h2 className="text-cornflowerblue font-bold text-xl">
          Customer Reviews
        </h2>
        <div className="flex gap-2 cursor-pointer">
          <Icon
            icon="bxs:left-arrow"
            color="lightblue"
            width={25}
            height={25}
          />
          <Icon
            icon="bxs:right-arrow"
            color="lightblue"
            width={25}
            height={25}
          />
        </div>
      </div>
    </div>
  );
};

export default Review;
