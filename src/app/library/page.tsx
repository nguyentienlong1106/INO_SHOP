import Image from "next/image";
const Library = () => {
  return (
    <main className="lg:mx-[80px] lg:mt-[24px] ">
      <section className="grid">
        <h1 className="text-[48px] leading-[67.2px] font-bold font-nunito text-text_accent mt-[64px]">
          Библиотека
          <span className="text-accent font-medium ml-2">проектов</span>
        </h1>
        <div className="border-b-2 border-solid border-[#cccccc] flex relative mt-[48px]">
          <Image
            src="/search-light.png"
            alt=""
            width={24}
            height={24}
            className="top-4 absolute"
          />
          <input
            type="text"
            className="w-full text-[24px] leading-[33.6px] border-none focus:outline-none ml-8"
            placeholder="Ищите определенный проект?"
          />
          <button className=" bg-hightlight h-[52px] px-10 rounded-[900px] text-[20px] flex gap-[10px] items-center justify-center">
            <Image src="/filter.png" alt="" width={24} height={22.51} />
            Фильтры
          </button>
        </div>
        <div className="grid grid-cols-2 mt-[64px] gap-[24px]">
          <div className="col-span-1 bg-[#f0f0f0] w-full relative rounded-[16px]">
            <h2
              className="text-[32px] font-medium leading-[44.8px]
            font-nunito text-text_accent mt-[32px] ml-[32px] w-[60%]"
            >
              Проекты, подобранные специально для вас
            </h2>
            <Image
              src="/banner1.png"
              className="mt-[18px] rounded-bl-[16px]"
              alt=""
              width={400}
              height={233.63}
            />
            <button className=" bg-hightlight h-[52px] px-10 rounded-[900px] text-[20px] flex gap-[10px] items-center justify-center absolute bottom-[30px] right-5">
              Посмотреть
            </button>
          </div>
          <div className="col-span-1 bg-[#f0f0f0] w-full relative rounded-[16px]">
            <h2
              className="text-[32px] font-medium leading-[44.8px]
            font-nunito text-text_accent mt-[32px] ml-[32px]"
            >
              Топ проектов по популярности среди студентов INO
            </h2>
            <Image
              src="/banner2.png"
              className="rounded-bl-[16px]"
              alt=""
              width={400}
              height={233.63}
            />
            <button className=" bg-hightlight h-[52px] px-10 rounded-[900px] text-[20px] flex gap-[10px] items-center justify-center absolute bottom-[30px] right-5">
              Посмотреть
            </button>
          </div>
        </div>
      </section>
      <section className="grid justify-items-center gap-6 ">
        <h1
          className="text-[40px] font-medium leading-[56px]
            font-nunito text-text_accent w-[768px] text-center mt-[140px]"
        >
          Выберите направление, которое хотите изучить больше всего
        </h1>

        <div className="flex gap-6 mt-[48px]">
          <span className="bg-[#f0f0f0] text-[28px] leading-[39.2px] px-12 py-4 rounded-[16px]">
            Программирование
          </span>
          <span className="bg-[#f0f0f0] text-[28px] leading-[39.2px] px-12 py-4 rounded-[16px]">
            Схемотехника
          </span>
          <span className="bg-[#f0f0f0] text-[28px] leading-[39.2px] px-12 py-4 rounded-[16px]">
            Электроника
          </span>
        </div>
        <div className="flex gap-6">
          <span className="bg-[#f0f0f0] text-[28px] leading-[39.2px] px-12 py-4 rounded-[16px]">
            Робототехника
          </span>
          <span className="bg-[#f0f0f0] text-[28px] leading-[39.2px] px-12 py-4 rounded-[16px]">
            Проектирование
          </span>
        </div>
      </section>
      <section>
        <div className="flex mt-[140px] items-center ">
          <h1
            className="text-[40px] font-medium leading-[56px]
            font-nunito text-text_accent w-[554px] "
          >
            Попробуйте себя на разных уровнях сложности
          </h1>
          <div className="flex h-[48px] gap-[16px]">
            <Image src="/condition.png" alt="" width={120} height={48} />
            <Image src="/condition2.png" alt="" width={120} height={48} />
            <Image src="/condition3.png" alt="" width={120} height={48} />
          </div>
        </div>
        <p className="mt-[24px] w-[604px] text-[24px] leading-[33.6px] text-text_accent">
          {" "}
          Чем выше уровень сложности проекта, тем больше потребуется времени и
          навыков.
        </p>
        <p className="mt-[16px] text-[20px] leading-[28px] text-[#909090] w-[754px]">
          Но не бойтесь брать сложные проекты — мы создали очень подробные
          видеоуроки, которые помогут вам в получении новых знаний!
        </p>
      </section>
    </main>
  );
};

export default Library;
