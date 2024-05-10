"use client";
import React from "react";
import Image from "next/image";
import pasta from "../../public/img/pastarätt.jpg";
import vego from "../../public/img/vegetarisk.jpg";
import lax from "../../public/img/citronlax.jpg";
import kyckling from "../../public/img/kyckling.jpg";
import chicken from "../../public/img/Chicken.jpg";
import bowl from "../../public/img/bowl.jpg";
import shellfish from "../../public/img/shellfish.jpg";
import salad from "../../public/img/salad.jpg";
import steak from "../../public/img/steak.png";

import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const bannerimg = [
  {
    src: chicken,
    alt: "Budget friendly recipes",
    text: "Quick, delicious, and budget-friendly. Explore stir-fry recipes for busy days.",
    id: 1,
  },
  {
    src: bowl,
    alt: "Bowl",
    text: "Nourish your body with a bowl full of goodness. Tap for healthy meal ideas.",
    id: 2,
  },
  {
    src: shellfish,
    alt: "Oatmeal recipes",
    text: "Start your day with warmth and goodness. Discover hearty oatmeal recipes here.",
    id: 3,
  },
  {
    src: kyckling,
    alt: "Chciken",
    text: "Blend your way to wellness. Click to discover refreshing smoothie recipes.",
    id: 4,
  },
  {
    src: steak,
    alt: "Steak",
    text: "Snack smarter with wholesome bites. Tap for nutritious snack ideas.",
    id: 5,
  },
  {
    src: lax,
    alt: "Salmon",
    text: "Add flavor and freshness to your meals. Click to explore herb garden ideas.",
    id: 6,
  },
  {
    src: vego,
    alt: "Vegetarian stew",
    text: "Boost your energy with nature's bounty. Discover easy, affordable recipes.",
    id: 7,
  },
  {
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
    <div className="w-full h-auto bg-white flex flex-col items-center justify-center border-b border-t">
      <div className="max-w-[90rem] w-full justify-center items-center flex mx-auto py-10 ">
        <Swiper
          navigation={true}
          direction="horizontal"
          slidesPerView={1}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop={true}
          spaceBetween={30}
          speed={4000}
          modules={[Navigation, Autoplay]}
          breakpoints={{
            580: {
              slidesPerView: 2,
            },
            // when window width is >= 640px
            890: {
              slidesPerView: 3,
            },
            // when window width is >= 768px
            1300: {
              slidesPerView: 4,
            },
          }}
          className="h-full w-full max-w-[90rem] mx-auto items-center"
        >
          {bannerimg.map((dish, index) => (
            <SwiperSlide key={index} className="swiper-slide">
              <button onClick={() => handleItemClick(dish.id)}>
                <div className="flex flex-col h-full w-full">
                  <div className="w-full h-auto flex justify-center items-center">
                    <div className="overflow-hidden rounded-full bg-white  border border-slate-50">
                      <div className="group relative w-[240px] h-[240px] items-center justify-center flex ">
                        <Image
                          src={dish.src}
                          height={300}
                          width={300}
                          alt={dish.alt}
                          className="rounded-full h-auto w-full object-cover object-center transition duration-300 transform group-hover:scale-110"
                        />
                        <div className="absolute h-auto w-full inset-0 opacity-1 group-hover:opacity-100 transition-opacity"></div>
                      </div>
                    </div>
                  </div>
                  <p className="w-[260px] p-t-2 text-[18px] text-center">
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

/*export function Banner({ src, alt, text }) {
  return (
      <div className="flex flex-col items-center"> { Flex container }
        <div className="w-[240px] h-auto">
          <div className="overflow-hidden rounded-full">
            <div className="group relative pt-2">
              <Image
                src={src}
                height={200}
                width={300}
                alt={alt}
                className="rounded-full h-auto w-full object-cover transition duration-300 transform group-hover:scale-110"
              />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </div>
          <p className="w-[260px] text-[18px] pt-4 text-center">{text}</p>
        </div>
      </div>
  );
}*/

/*
 <Banner src={pasta} alt={"pasta"} text={"Pasta"} />
      <Banner src={kyckling} alt={"kyckling"} text={"Kyckling"} />
      <Banner src={lax} alt={"lax"} text={"Lax"} />
      <Banner src={vego} alt={"vego"} text={"Vego"} />
 */
