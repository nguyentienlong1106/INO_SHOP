"use client";
import { VideoContainer } from "@/components";
import Image from "next/image";
import { useEffect, useState } from "react";

const Data = [
  {
    id: "1",
    title: "Приветствие (вступление)",
    name: "/1017.mp4",
    duration: "0.44s",
  },
  {
    id: "2",
    title: "Лекция 1.Введение и блок схемы (лекция 1)",
    name: "/1017.mp4",
    duration: "1.12s",
  },
  {
    id: "3",
    title: "Практика. Установка интерпретатора (лекция к практике 2)",
    name: "/1017.mp4",
    duration: "0.34s",
  },
  {
    id: "4",
    title: "Практика 3 ",
    name: "/1017.mp4",
    duration: "0.34s",
  },
  {
    id: "5",
    title: "Лекция 3. Алгебра логики - сложные выражения (Лекция 4)    ",
    name: "/1017.mp4",
    duration: "0.34s",
  },
  {
    id: "6",
    title: "Практика 4",
    name: "/1017.mp4",
    duration: "0.34s",
  },
  {
    id: "7",
    title: "Лекция 4. Срезы (Лекция 5)",
    name: "/1017.mp4",
    duration: "0.34s",
  },
  {
    id: "8",
    title: "Практика 5",
    name: "/1017.mp4",
    duration: "0.34s",
  },
  {
    id: "9",
    title: "Лекция 5. Цикл while, for, вложенные циклы (Лекция 6-7)    ",
    name: "/1017.mp4",
    duration: "0.34s",
  },
  {
    id: "10",
    title: "Практика 6",
    name: "/1017.mp4",
    duration: "0.34s",
  },
  {
    id: "11",
    title: "Практика 7",
    name: "/1017.mp4",
    duration: "0.34s",
  },
  {
    id: "12",
    title: "Лекция 6. Функции (Лекция 8)",
    name: "/1017.mp4",
    duration: "0.34s",
  },
  {
    id: "13",
    title: "Практика 8",
    name: "/1017.mp4",
    duration: "0.34s",
  },
  {
    id: "14",
    title: "Заключение (Итог)",
    name: "/1017.mp4",
    duration: "0.34s",
  },
];

const Educational = () => {
  const [videoData, setVideoData] = useState({
    title: "Лекция 1.Введение и блок схемы (лекция 1)",
    source: "/1017.mp4",
  });
  const [selectedLi, setSelectedLi] = useState(null);
  const handleOnclick = (data: any) => {
    setSelectedLi(data.id);
    setVideoData({
      title: data.title,
      source: data.name,
    });
  };

  return (
    <main className="lg:mx-[80px] lg:mt-[24px] ">
      <div className="grid grid-cols-3  mt-[32px] mb-[60px] gap-[80px]">
        <div className="col-span-1 bg-accent ml-[-80px] rounded-r-[16px] relative h-[70%] overflow-y-scroll">
          <div className="absolute border-solid border-b-4 border-hightlight w-[47%] top-[108px] right-[10rem] z-10"></div>
          <div className="flex justify-between items-center my-[40px] ml-[80px] mr-[16px] border-b-4 border-solid border-white pb-[20px]">
            <h2 className="text-white text-[32px] leading-[43.65px] font-nunito font-semibold">
              Курс по Python
            </h2>
            <Image
              src="/collaps.png"
              className="rotate-180 "
              alt=""
              width={48}
              height={48}
            />
            <span className="absolute text-white top-[120px]">
              47% выполнено
            </span>
          </div>
          <ul className="mt-[58px]">
            {Data.map((e, i) => (
              <li
                className="flex justify-between border-t-2 border-solid border-gray-300 pt-4 pr-3 mt-[24px] hover:cursor-pointer"
                key={i}
                onClick={() => handleOnclick(e)}
              >
                <span
                  className={`ml-[80px] text-[24px] font-semibold flex gap-2"  ${
                    selectedLi === e.id ? "text-white" : "text-[#d2b6ff]"
                  }`}
                >
                  {selectedLi === e.id ? (
                    <Image
                      src="/side.png"
                      alt=""
                      className="relative left-[-80px]"
                      width={16}
                      height={54}
                    />
                  ) : (
                    ""
                  )}

                  {e.title}
                </span>
                <span
                  className={`text-[18px]  ${
                    selectedLi === e.id ? "text-white" : "text-[#d2b6ff]"
                  } active:text-white focus:text-white`}
                >
                  {e.duration}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-2">
          <div className="video">
            <h2 className="font-nunito font-medium text-[32px] leading-[44.8px] mb-[24px]">
              {videoData.title}
            </h2>
            <VideoContainer data={videoData.source} />
          </div>

          <div className="flex justify-between my-[32px]">
            <span className="bg-hightlight p-4 rounded-full">
              {" "}
              <Image
                src="/arrow.png"
                className="rotate-180 "
                alt=""
                width={32}
                height={32}
              />
            </span>
            <span className="bg-hightlight p-4 rounded-full">
              {" "}
              <Image src="/arrow.png" alt="" width={32} height={32} />
            </span>
          </div>
          <div className="flex justify-between mb-[16px]">
            <span className="font-nunito text-[26px] leading-[36.4px]">
              Для ваших заметок
            </span>
            <span className="flex gap-2 items-center text-[20px] text-[#909090]">
              Сохраняется автоматически{" "}
              <Image src="/tabler_refresh.png" alt="" width={32} height={32} />
            </span>
          </div>
          <input
            type="text"
            className="border-solid border-2 border-[#909090] w-full h-[117px] rounded-[16px]"
          />
        </div>
      </div>
    </main>
  );
};

export default Educational;
