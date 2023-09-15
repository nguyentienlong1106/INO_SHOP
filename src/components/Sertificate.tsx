"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "@/style/globals.scss";
import Image from "next/image";

const Sertificate = ({ title }: { title: string }) => {
  return (
    <div className="mr-[-80px]">
      <h2 className="font-medium text-[32px] leading-[44.8px] font-nunito text-text_accent mb-[24px] mt-[48px]">
        {title}
      </h2>{" "}
      <Swiper
        slidesPerView={2.5}
        spaceBetween={24}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="">
            <Image
              alt=""
              src="/sertificate.png"
              className=""
              width={302}
              height={422}
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Sertificate;
