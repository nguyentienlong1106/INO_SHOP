import { VideoContainer } from "@/components";
import Image from "next/image";

const Educational = () => {
  return (
    <main className="lg:mx-[80px] lg:mt-[24px] ">
      <div className="grid grid-cols-3  mt-[32px] mb-[60px] gap-[80px]">
        <div className="col-span-1 bg-accent ml-[-80px] rounded-r-[16px] relative">
          <div className="absolute border-solid border-b-4 border-hightlight w-[47%] top-[108px] right-[10rem] z-10"></div>
          <div className="flex justify-between items-center my-[40px] ml-[80px] mr-[16px] border-b-4 border-solid border-white pb-[20px]">
            <h2 className="text-white text-[32px] leading-[43.65px] font-nunito font-semibold">
              Делаем Tetris
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
            {" "}
            <li className="flex justify-between border-t-2 border-solid border-gray-300 pt-4 pr-3 mt-[24px]">
              <span className="ml-[80px] text-[24px] font-semibold text-white flex gap-2 relative">
                <Image
                  src="/side.png"
                  alt=""
                  className="absolute top-[-21px] left-[-80px]"
                  width={16}
                  height={74}
                />
                Шаг 1 <Image src="/time.png" alt="" width={24} height={24} />
              </span>
              <span className="text-[18px] text-white ">~6 минут</span>
            </li>
            <li className="flex justify-between border-t-2 border-solid border-gray-300 pt-4 pr-3 mt-[24px]">
              <span className="ml-[80px] text-[24px] font-semibold text-[#d2b6ff] ">
                Шаг 1
              </span>
              <span className="text-[18px] text-[#d2b6ff] ">~6 минут</span>
            </li>
            <li className="flex justify-between border-t-2 border-solid border-gray-300 pt-4 pr-3 mt-[24px]">
              <span className="ml-[80px] text-[24px] font-semibold text-[#d2b6ff] ">
                Шаг 1
              </span>
              <span className="text-[18px] text-[#d2b6ff] ">~6 минут</span>
            </li>
            <li className="flex justify-between border-t-2 border-solid border-gray-300 pt-4 pr-3 mt-[24px]">
              <span className="ml-[80px] text-[24px] font-semibold text-[#d2b6ff] ">
                Шаг 1
              </span>
              <span className="text-[18px] text-[#d2b6ff] ">~6 минут</span>
            </li>
            <li className="flex justify-between border-t-2 border-solid border-gray-300 pt-4 pr-3 mt-[24px]">
              <span className="ml-[80px] text-[24px] font-semibold text-[#d2b6ff] ">
                Шаг 1
              </span>
              <span className="text-[18px] text-[#d2b6ff] ">~6 минут</span>
            </li>
            <li className="flex justify-between border-t-2 border-solid border-gray-300 pt-4 pr-3 mt-[24px]">
              <span className="ml-[80px] text-[24px] font-semibold text-[#d2b6ff] ">
                Шаг 1
              </span>
              <span className="text-[18px] text-[#d2b6ff] ">~6 минут</span>
            </li>
            <li className="flex justify-between border-t-2 border-solid border-gray-300 pt-4 pr-3 mt-[24px]">
              <span className="ml-[80px] text-[24px] font-semibold text-[#d2b6ff] ">
                Шаг 1
              </span>
              <span className="text-[18px] text-[#d2b6ff] ">~6 минут</span>
            </li>
          </ul>
        </div>
        <div className="col-span-2">
          <h2 className="font-nunito font-medium text-[32px] leading-[44.8px] mb-[24px]">
            Шаг 1. Подбираем нужные детали
          </h2>
          <VideoContainer data="/IMG_0987.MOV" />
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
