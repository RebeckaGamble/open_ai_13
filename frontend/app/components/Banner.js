"use client";
import React from "react";
import Image from "next/image";
import smoothie from "../../public/img/smoothies.png";
import herbs from "../../public/swiper_img/herbs1.jpg";
import salad from "../../public/swiper_img/sallad4.jpg";
import greekyogurt from "../../public/swiper_img/greekyogurt.jpg";
import salmon_bowl from "../../public/swiper_img/salmon_bowl.jpg";
import oat1 from "../../public/swiper_img/oat1.jpg";
import quinoa_bowl from "../../public/swiper_img/quinoa_bowl.jpg";
import energy from "../../public/swiper_img/energy1.jpg";

import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const bannerimg = [
  {
    title: "Budget friendly",
    src: quinoa_bowl,
    alt: "Budget friendly recipes",
    text: "Quick, delicious, and budget-friendly. Explore stir-fry recipes.",
    id: 1,
  },
  {
    title: "Healthy bowls",
    src: salmon_bowl,
    alt: "Bowl",
    text: "Nourish your body with a bowl full of goodness. Tap for healthy meal ideas.",
    id: 2,
  },
  {
    title: "Oatmeal",
    src: oat1,
    alt: "Oatmeal recipes",
    text: "Start your day with warmth and goodness. Hearty oatmeal recipes.",
    id: 3,
  },
  {
    title: "Smoothies",
    src: smoothie,
    alt: "Chciken",
    text: "Blend your way to wellness. Discover refreshing smoothie recipes.",
    id: 4,
  },
  {
    title: "Nutritious snack",
    src: greekyogurt,
    alt: "Steak",
    text: "Snack smarter with wholesome bites. Tap for nutritious snack ideas.",
    id: 5,
  },
  {
    title: "Fresh herbs",
    src: herbs,
    alt: "Herbs",
    text: "Add flavor and freshness to your meals. Click to explore herb garden ideas.",
    id: 6,
  },
  {
    title: "Energy boost",
    src: energy,
    alt: "Vegetarian stew",
    text: "Boost your energy with nature's bounty. Discover easy, affordable recipes.",
    id: 7,
  },
  {
    title: "Nutritious sallad",
    src: salad,
    alt: "Salad",
    text: "A rainbow on your plate awaits. Tap to explore nutritious salad ideas.",
    id: 8,
  },
];

export default function BannerContent() {
  const router = useRouter();

  const handleItemClick = (id) => {
    router.push(`/selectedTips/${id}`);
  };

  return (
    <div className="w-full h-auto bg-white shadow-xl border-b border-t">
      <div className="max-w-[90rem] w-full mx-auto h-full py-10 ">
        <Swiper
          navigation={true}
          direction="horizontal"
          slidesPerView={1}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop={true}
         // spaceBetween={30}
          speed={4000}
          modules={[Navigation, Autoplay]}
          breakpoints={{
            535: {
              slidesPerView: 2,

            },
            780: {
              slidesPerView: 3,
            },
            1000: {
              slidesPerView: 4,
            },
            1300: {
              slidesPerView: 5,
            },
          }}
          className="h-auto w-full"
        >
          {bannerimg.map((dish, index) => (
            <SwiperSlide
              key={index}
              className="swiper-slide flex items-center justify-center"
            >
              <button onClick={() => handleItemClick(dish.id)}>
                <div className=" flex flex-col items-center justify-center">
                  {" "}
                  <div className="overflow-hidden rounded-full bg-white border border-slate-50">
                    <div className="group relative w-[230px] h-[230px] flex items-center justify-center">
                      <Image
                        src={dish.src}
                        height={300}
                        width={300}
                        alt={dish.alt}
                        className="rounded-full h-[230px] w-[230px] object-cover object-center transition duration-300 transform group-hover:scale-110"
                      />
                      <div className="absolute h-auto w-full inset-0 opacity-1 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                  </div>
                  <p className="w-full px-[10%] pt-2 text-[18px] mx-auto text-center">
                    {dish.text}
                  </p>
                </div>
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}