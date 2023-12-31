import { Icon } from "@iconify/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import type SwiperType from "swiper";
import { useEffect, useState } from "react";
import { Pagination } from "swiper/modules";

const data = [
  {
    name: "Deja Brady",
    avatar:
      "https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_2.jpg",
    postedOn: "",
    rating: "",
    comment:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available",
    tags: "",
  },
  {
    name: "Harrison",
    avatar:
      "https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_3.jpg",
    postedOn: "",
    rating: "",
    comment:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available",
    tags: "",
  },
  {
    name: "Reece",
    avatar:
      "https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_4.jpg",
    postedOn: "",
    rating: "",
    comment: "",
    tags: "",
  },
];

const Review = () => {
  const [swiper, setSwiper] = useState<null | SwiperType>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const [slideConfig, setSlideConfig] = useState({
    isBeginning: true,
    isEnd: activeIndex === (data.length ?? 0) - 1,
  });

  useEffect(() => {
    swiper?.on("slideChange", ({ activeIndex }) => {
      setActiveIndex(activeIndex);
      setSlideConfig({
        isBeginning: activeIndex === 0,
        isEnd: activeIndex === (data.length ?? 0) - 1,
      });
    });
  }, [swiper, data]);
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
            onClick={(e) => {
              e.preventDefault();
              swiper?.slidePrev();
            }}
          />
          <Icon
            icon="bxs:right-arrow"
            color="lightblue"
            width={25}
            height={25}
            onClick={(e) => {
              e.preventDefault();
              swiper?.slideNext();
            }}
          />
        </div>
      </div>

      <div className="aspect-square">
        {/* <Swiper
          pagination={{
            renderBullet: (_, className) => {
              return `<span class="rounded-full transition ${className}"></span>`;
            },
          }}
          onSwiper={(swiper) => setSwiper(swiper)}
          spaceBetween={50}
          modules={[Pagination]}
          slidesPerView={1}
          className=""
        >
          {data &&
            data.map((rev: any, index: any) => (
              <SwiperSlide key={index} className="-z-10 relative h-full w-full">
                <h2 className="font-bold">{rev.name}</h2>
              </SwiperSlide>
            ))}
        </Swiper> */}
      </div>
    </div>
  );
};

export default Review;
