"use client";
import React from "react";
import pasta from "../../public/img/pastarätt.jpg";
import vego from "../../public/img/vegetarisk.jpg";
import lax from "../../public/img/citronlax.jpg";
import kyckling from "../../public/img/kyckling.jpg";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";




const bannerimg = [
  {
    src: kyckling,
    alt: 'Alt Text 1',
    text: 'Kyckling'
  },
  {
    src: pasta,
    alt: 'Alt Text 2',
    text: 'Pasta'
  },

  {
    src: lax,
    alt: 'Alt Text 3',
    text: 'Lax'
  },

  {
    src: vego,
    alt: 'Alt Text 3',
    text: 'Vegetariskt'
  },


  // Add more images as needed
];

export default function BannerContent() {
  return (
    <Swiper
      navigation={true}
      direction="horizontal"
      slidesPerView={1}
      spaceBetween={30}
      modules={[Navigation]}

      breakpoints={{
        // when window width is >= 640px
        640: {
          slidesPerView: 2,
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 3,
        },
      }}
      /*modules={[Navigation]}*/
    >
      {bannerimg.map((Dish, index) => (

      
          <SwiperSlide key = {index}>

          <div className="flex flex-col items-center"> {/* Flex container */}
        <div className="w-[240px] h-auto">
          <div className="overflow-hidden rounded-full">
            <div className="group relative pt-2">
              <Image
                src={Dish.src}
                height={200}
                width={300}
                alt={Dish.alt}
                className="rounded-full h-auto w-full object-cover transition duration-300 transform group-hover:scale-110"
              />
              <div className="absolute inset-0 opacity-1 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </div>
          <p className="w-[260px] text-[18px] pt-4 text-center">{Dish.text}</p>
        </div>
      </div>
     
      </SwiperSlide>
))}
    </Swiper> 
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