"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade, Autoplay } from "swiper/modules";
//Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
//import "swiper/css/effect-fade";

const reviews = [
  {
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, veniam? ",
    name: "Lottie",
  },
  {
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, veniam? ",
    name: "Evan",
  },
  {
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, veniam? ",
    name: "D",
  },
];

function SwiperReviews() {
  return (
    <div className="items-center justify-center text-center">
      <div className="flex w-[600px] mx-auto py-8 sm:py-10">
        {/**swiper */}
        <Swiper
          spaceBetween={30}
          navigation={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination, Autoplay]}
          //effect={"fade"}
          speed={800}
          slidesPerView={1}
          // loop={true}
          className="w-full h-auto"
        >
          {/**Swiper slides */}
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="w-full flex mx-auto justify-center text-[18px]">
                <div className="h-auto py-10 w-auto flex mx-auto flex-col justify-center">
                  <q className="max-w-[200px] w-fit text-center md:max-w-[400px]">
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
