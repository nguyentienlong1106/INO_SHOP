"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "@/style/globals.scss";
import Image from "next/image";

const List_course = ({ title }: { title: string }) => {
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
          <div className="relative w-[519px] h-[246px] border-accent border-solid border-4 rounded-[16px] bg-gradient-to-t from-accent to-60% to-[#ffffff]">
            <h3 className="mt-[36px] ml-[36px] font-medium text-[26px] leading-[36.4px] font-nunito text-text_accent">
              Делаем Tetris
            </h3>
            <button className=" bg-white py-[12px] px-[15px] rounded-[900px] text-[20px] leading-[28px] font-medium text-text_accent w-[200px] absolute left-[36px] bottom-[36px] shadow-xl ">
              Бесплатно
            </button>
            <Image
              alt=""
              src="/lego.png"
              className=" absolute bottom-0 right-[10px]"
              width={184}
              height={184}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-[519px] h-[246px] border-accent border-solid border-4 rounded-[16px] bg-gradient-to-t from-[#BDFF00] to-60% to-[#ffffff]">
            <h3 className="mt-[36px] ml-[36px] font-medium text-[26px] leading-[36.4px] font-nunito text-text_accent">
              Делаем Tetris
            </h3>
            <button className=" bg-white py-[12px] px-[15px] rounded-[900px] text-[20px] leading-[28px] font-medium text-text_accent w-[200px] absolute left-[36px] bottom-[36px] shadow-xl ">
              Бесплатно
            </button>
            <Image
              alt=""
              src="/lego.png"
              className=" absolute bottom-0 right-[10px]"
              width={184}
              height={184}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-[519px] h-[246px] border-accent border-solid border-4 rounded-[16px] bg-gradient-to-t from-accent2 to-60% to-[#ffffff]">
            <h3 className="mt-[36px] ml-[36px] font-medium text-[26px] leading-[36.4px] font-nunito text-text_accent">
              Делаем Tetris
            </h3>
            <button className=" bg-white py-[12px] px-[15px] rounded-[900px] text-[20px] leading-[28px] font-medium text-text_accent w-[200px] absolute left-[36px] bottom-[36px] shadow-xl ">
              Бесплатно
            </button>
            <Image
              alt=""
              src="/lego.png"
              className=" absolute bottom-0 right-[10px]"
              width={184}
              height={184}
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default List_course;
