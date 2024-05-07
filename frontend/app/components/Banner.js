"use client";
import React from "react";
import pasta from "../../public/img/pastarätt.jpg";
import vego from "../../public/img/vegetarisk.jpg";
import lax from "../../public/img/citronlax.jpg";
import kyckling from "../../public/img/kyckling.jpg";
import chicken from "../../public/img/Chicken.jpg"
import bowl from "../../public/img/bowl.jpg"
import shellfish from "../../public/img/shellfish.jpg"

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const bannerimg = [
    {
        src: chicken,
        alt: "Kyckling",
        text: "Chicken",
      },
      {
        src: bowl,
        alt: "Bowl",
        text: "Bowl",
      },
      {
        src: shellfish,
        alt: "Shellfish",
        text: "Shellfish",
      },
  {
    src: kyckling,
    alt: "Alt Text 1",
    text: "Kyckling",
  },
  {
    src: pasta,
    alt: "Alt Text 2",
    text: "Pasta",
  },
  {
    src: lax,
    alt: "Alt Text 3",
    text: "Lax",
  },
  {
    src: vego,
    alt: "Alt Text 3",
    text: "Vegetariskt",
  },
  {
    src: lax,
    alt: "Alt Text 3",
    text: "Lax",
  },
  {
    src: vego,
    alt: "Alt Text 3",
    text: "Vegetariskt",
  },
];

export default function BannerContent() {
  return (
    <div className="w-full h-[300px] bg-white flex flex-col items-center">
    <Swiper
      navigation={true}
      direction="horizontal"
      slidesPerView={1}
      spaceBetween={30}
      modules={[Navigation]}
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
        <SwiperSlide key={index} className="">
          <div className="flex flex-col h-full items-center justify-center ">
            {/* Flex container */}
            <div className="w-full h-auto flex justify-center items-center">
              <div className="overflow-hidden rounded-full bg-white  border-2 border-slate-50">
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
              <p className="w-[200px] p-t-2 text-[18px] text-center">
                {dish.text}
              </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
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
