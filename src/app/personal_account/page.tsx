import Image from "next/image";
import Link from "next/link";
import List_course from "@/components/List_course";
import { List_finish, Sertificate } from "@/components";

const Personal = () => {
  return (
    <main className="lg:mx-[80px] lg:mt-[24px] ">
      <div className="grid grid-cols-2 mt-[86px] pb-[24px] border-b-[1px] border-solid border-[#cccccc] gap-[24px]">
        <div className="col-span-1 flex border-r-[1px] border-solid border-[#cccccc] relative h-[260px]">
          <Image
            src="/User1.png"
            alt=""
            width={193}
            height={193}
            className="absolute"
          />
          <div className="ml-[215px]">
            <h1 className="font-nunito text-[32px] leading-[44.8px] font-medium text-text_accent">
              Имя пользователя
            </h1>
            <p className="text-[20px] leading-[28px] text-[#909090] mt-[24px]">
              Уровень конструктора
            </p>
            <p className="font-nunito text-[22px] leading-[30.8px] font-bold text-accent mt-[12px]">
              Конструктор BASE
            </p>
          </div>
          <Link href={"/"}>
            <button className="bg-hightlight px-5 py-4 rounded-[900px] text-[18px] font-medium absolute bottom-5 right-5">
              Повысить уровень
            </button>
          </Link>
        </div>
        <div className="col-span-1 relative">
          <p className="text-[24px] leading-[33.8px] text-[#909090]">
            Последняя активность
          </p>
          <h1 className="font-nunito text-[32px] leading-[44.8px] font-medium text-text_accent mt-[20px]">
            Название проекта
          </h1>
          <div className="absolute border-solid border-b-2 border-hightlight w-[47%] top-[122px] z-10"></div>
          <div className="flex justify-between border-t-[1px] border-solid border-[#cccccc] mt-[24px] text-[18px] leading-[25.2px]  text-[#909090] p-2">
            <span>Урок 7.11</span>
            <span>Пройдено 47%</span>
          </div>
          <Link href={"/educational_part"}>
            <button className="bg-hightlight px-5 py-4 rounded-[900px] text-[18px] font-medium absolute bottom-5 right-5">
              Продолжить обучение{" "}
            </button>
          </Link>
        </div>
      </div>

      <div className="relative bg-[#F0F0F0] rounded-[16px] h-[226px] mt-[36px]">
        <h2 className="font-nunito font-medium text-[32px] pt-[24px] ml-[32px] mb-[16px] text-text_accent">
          Проекты, которые идеально вам подходят
        </h2>
        <p className="text-[20px] leading-[28px] ml-[32px] w-[710px] max-w-full text-[#909090]">
          На основе вашего результата мы составили список проектов, которые
          идеально подойдут вам, чтобы вы продолжали развиваться в вашей
          специальности.
        </p>
        <button className="absolute right-[32px] bottom-[24px] bg-hightlight  px-5 py-4 rounded-[900px] text-[20px] ">
          Посмотреть рекомендованные мне проекты
        </button>
        <Image
          src="/close.png"
          alt=""
          width={20}
          height={20}
          className="absolute top-8 right-8"
        />
      </div>
      <List_finish title="Мои проекты" />
      <List_finish title="Завершенные проекты" />
      <Sertificate title="Мои сертификаты" />
    </main>
  );
};

export default Personal;
