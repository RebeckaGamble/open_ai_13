"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

//Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

//swiper cards
const reviews = [
  {
    text: " It's a great site to find new recipes and explore food from other culture ",
    name: "Lottie",
  },
  {
    text: " ChefMate have helped me alot when it comes to finding quick and easy recipes",
    name: "Evan",
  },
  {
    text: " Using ChefMate have helped me become a greater cook ",
    name: "D",
  },
];

function SwiperReviews() {
 
  return (
    <div className="w-full max-w-[90rem] items-center justify-center text-center">
      <div className="flex w-full mx-auto">
        {/**swiper */}
        <Swiper
          spaceBetween={30}
          //navigation={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          modules={[ Pagination, Autoplay]}
          speed={1000}
          slidesPerView={1}
          className="w-full h-auto mx-20"
        >
          {/**Swiper slides */}
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="w-auto flex mx-auto justify-center text-[18px]">
                <div className="h-auto py-10 w-auto flex mx-auto flex-col justify-center">
                  <q className="max-w-[260px] w-fit text-center md:max-w-[400px]">
                    {review.text}
                  </q>
                  <b className="pt-2 text-right">{review.name}</b>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default SwiperReviews;
