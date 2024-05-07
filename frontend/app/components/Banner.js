import React from "react";
import pasta from "../../public/img/pastarätt.jpg";
import vego from "../../public/img/vegetarisk.jpg";
import lax from "../../public/img/citronlax.jpg";
import kyckling from "../../public/img/kyckling.jpg";
import Image from "next/image";

export function Banner({ src, alt, text }) {
  return (
    <div className="w-[240px] h-auto">
      <div className="z-[9999] rounded-full overflow-hidden">
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
  );
}

export default function BannerContent() {
  return (
    <div className="w-full overflow-hidden bg-white justify-around items-center h-[360px] flex flex-row shadow-xl border-b border-slate-200">
      <Banner src={pasta} alt={"pasta"} text={"Some text here"} />
      <Banner src={kyckling} alt={"kyckling"} text={"Some text here"} />
      <Banner src={lax} alt={"lax"} text={"Some text here"} />
      <Banner src={vego} alt={"vego"} text={"Some text here"} />
    </div>
  );
}
