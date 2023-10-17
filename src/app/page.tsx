import Image from "next/image";
import "@/style/globals.scss";
import {
  Add_question,
  Card_course,
  Question,
  Sientific_guide,
  Slide_infor,
} from "@/components";

export default function Home() {
  return (
    <main className="lg:mx-[80px] lg:mt-[24px] ">
      <section className="grid justify-center gap-[50px] mt-[120px]  mb-[147px] relative">
        <div className="grid gap-[24px] justify-center justify-items-center ">
          <Image src="/ino.png" alt="" width={408} height={187} />
          <h1
            className={`leading-[50.4px] text-[36px] font-medium text-center font-nunito w-[465px]`}
          >
            Не только образование, но и помощь в выборе себя и поиске будущего
          </h1>
        </div>

        <button className="bg-hightlight text-[24px] font-medium px-20 py-5 rounded-[900px]">
          Подробнее о конструкторе INO
        </button>
        <Image
          className="absolute left-[45px]"
          src="/star1.png"
          alt=""
          width={44}
          height={44}
        />
        <Image
          className="absolute top-[200px] left-[200px]"
          src="/star2.png"
          alt=""
          width={64.73}
          height={64.73}
        />
        <Image
          className="absolute bottom-[10px] left-[60px]"
          src="/star2.png"
          alt=""
          width={58}
          height={58}
        />
        <Image
          className="absolute right-[185px] top-[50px] "
          src="/star2.png"
          alt=""
          width={46.36}
          height={46.36}
        />
        <Image
          className="absolute right-[190px] bottom-[140px]"
          src="/star1.png"
          alt=""
          width={52}
          height={52}
        />
        <Image
          className="absolute right-[60px] bottom-[85px]"
          src="/star1.png"
          alt=""
          width={32}
          height={32}
        />
      </section>
      <section className="grid">
        <div className=" grid grid-flow-col justify-self-start items-center gap-[20px]">
          <Image src="/ino.png" alt="" width={107} height={49} />
          <h1 className="leading-[72.8px] text-[52px] font-medium font-nunito text-text_accent">
            — новинка на рынке образования
          </h1>
        </div>
        <p className="text-[30px] leading-[42px] text-text_accent mt-[48px] w-[1063px] max-w-full">
          Это уникальный модульный обучающий игровой программно-аппаратный
          комплекс, специально разработанный для наглядной демонстрации и
          <span className="bg-hightlight rounded-[20px] ml-1 px-2">
            обучения электронике и созданию Internet of Things
          </span>
        </p>
        <p className="text-[24px] leading-[33.6px] text-[#575757] mt-[32px] w-[737px] max-w-full">
          Мы верим в то, что развитие навыков в области технологий является
          ключевым фактором успеха в современном мире
        </p>
      </section>
      <section className="grid">
        <h1 className="text-[52px] leading-[72.8px] font-medium font-nunito text-text_accent mt-[140px]">
          Собери свою
          <span className="bg-hightlight rounded-[20px] ml-1 px-2">
            специальность
          </span>
        </h1>
        <div className="grid grid-cols-12 gap-6 mt-[48px]">
          <div className="col-span-7 h-[328px] rounded-[16px] border-4 border-[#A56FFF] border-solid relative ">
            <p
              className="text-[32px] font-nunito font-medium
mt-[32px] ml-[40px]"
            >
              Программирование
            </p>
            <Image
              className="absolute right-5 bottom-5"
              src="/subject1.png"
              alt=""
              width={280}
              height={280}
            />
          </div>
          <div className="col-span-5 h-[328px] rounded-[16px] border-4 border-[#A56FFF] border-solid relative ">
            <p
              className="text-[32px] font-nunito font-medium
mt-[32px] ml-[40px]"
            >
              Схемотехника
            </p>
            <Image
              className="absolute right-5 bottom-5"
              src="/subject2.png"
              alt=""
              width={213}
              height={213}
            />
          </div>
          <div className="col-span-4 h-[328px] rounded-[16px] border-4 border-[#A56FFF] border-solid relative ">
            <p
              className="text-[32px] font-nunito font-medium
mt-[32px] ml-[40px]"
            >
              Электроника
            </p>
            <Image
              className="absolute right-24 bottom-5"
              src="/subject3.png"
              alt=""
              width={197}
              height={197}
            />
          </div>
          <div className="col-span-4 h-[328px] rounded-[16px] border-4 border-[#A56FFF] border-solid relative ">
            <p
              className="text-[32px] font-nunito font-medium
mt-[32px] ml-[40px]"
            >
              Робототехника
            </p>
            <Image
              className="absolute right-24 bottom-5"
              src="/subject4.png"
              alt=""
              width={194}
              height={194}
            />
          </div>
          <div className="col-span-4 h-[328px] rounded-[16px] border-4 border-[#A56FFF] border-solid relative ">
            <p
              className="text-[32px] font-nunito font-medium
mt-[32px] ml-[40px]"
            >
              Проектирование
            </p>
            <Image
              className="absolute right-24 bottom-5"
              src="/subject5.png"
              alt=""
              width={224}
              height={224}
            />
          </div>
        </div>
      </section>
      <section className="grid">
        <h1 className="text-[52px] leading-[72.8px] font-bold font-nunito text-text_accent mt-[140px]">
          Пройди
          <span className="text-accent font-medium ml-2 ">
            профориентанционный тест
          </span>
        </h1>
        <p className="text-[30px] leading-[42px] text-black font-medium mt-[48px] w-[90%] ">
          В образовательный процесс встроена
          <span className="bg-hightlight rounded-[20px] px-2">
            профориентационная программа,
          </span>{" "}
          которая позволит вашему ребенку полностью раскрыть свой потенциал.
        </p>
        <div className="relative bg-[#F0F0F0] rounded-[16px] h-[226px] mt-[32px]">
          <h2 className="font-nunito font-medium text-[32px] mt-[24px] ml-[32px] mb-[16px] text-text_accent">
            Профориентация состоит из трех инструментов, которые направлены на:
          </h2>
          <ul className="text-[20px] leading-[28px] ml-[32px] w-full mt-[40px] text-[#909090]">
            <li>- Развитие эмоционального интеллекта</li>
            <li>- Учит основам тайм-менеджмента</li>
            <li>
              - Способствует пониманию своей потенциальной направленности
              карьеры
            </li>
          </ul>
          <button className="absolute right-[32px] bottom-[24px] bg-hightlight  px-5 py-4 rounded-[900px] text-[20px] ">
            Начать тест
          </button>
        </div>
      </section>
      <section className="grid">
        <h1 className="text-[52px] leading-[72.8px] font-bold font-nunito text-text_accent mt-[140px]">
          Попробуй себя в
          <span className="text-accent font-normal ml-2 ">новой профессии</span>
        </h1>
        <div className="grid grid-cols-2 mt-[48px]">
          <div className="col-span-1">
            <p className="text-[30px] leading-[42px] text-black font-medium mt-[48px] w-[404px] max-w-full">
              Пройди вводные уроки{" "}
              <span className="bg-hightlight rounded-[20px] px-1">
                совершенно бесплатно
              </span>
            </p>
            <p className="text-[24px] leading-[33.6px] w-[621px] max-w-full text-[#909090] mt-[32px]">
              Вводные уроки позволят погрузиться в процесс учебы на платформе
              INO. Также за прохождение всех вводных уроков вы получите скидку в
              10% на выбранный курс
            </p>
          </div>
          <div className="col-span-1 bg-accent rounded-[16px] grid justify-items-center">
            <input
              type="text"
              placeholder="E-mail"
              className="w-[90%] mt-[32px] pl-[32px] text-[20px] h-[76px] rounded-[16px]"
            />{" "}
            <input
              type="text"
              placeholder="Выбери направление обучения"
              className="w-[90%] pl-[32px] text-[20px] h-[76px] rounded-[16px] mt-[24px]"
            />{" "}
            <button className=" bg-hightlight py-[22px] rounded-[900px] text-[20px] w-[564px] mt-[28px] mb-[48px]">
              Получить вводные уроки
            </button>
          </div>
        </div>
      </section>
      <section className="grid">
        <h1 className="text-[52px] leading-[72.8px] font-medium font-nunito text-text_accent mt-[140px] mb-[48px]">
          Как проходит
          <span className="bg-hightlight rounded-[20px] ml-1 px-2">
            обучение
          </span>
        </h1>
        <Sientific_guide />
      </section>
      <section className="grid">
        <h1 className="text-[52px] leading-[72.8px] font-medium font-nunito text-text_accent mt-[140px] mb-[48px]">
          Комплект
        </h1>
        <div className="grid grid-cols-12 gap-[24px]">
          <div className="row-span-2 col-span-4 border-[2px] border-solid border-[#A56FFF] rounded-[16px] h-[432px] relative">
            <h2 className="mt-[32px] ml-[20px] font-nunito font-semibold text-[26px] text-text_accent">
              Конструктор INO
            </h2>
            <p className="m-[20px] text-[22px] leading-[30.8px] text-[#707070]">
              Вы реализуете свои проекты и получаете знания в электронике
              создании Internet of Things (умных устройств), программирование,
              робототехнике, схемотехнике.
            </p>
            <Image
              className="absolute left-0 rounded-bl-[16px] bottom-0"
              src="/image 1.png"
              alt=""
              width={359}
              height={279}
            />
          </div>
          <div className="col-span-5 border-[2px] border-solid border-accent2 rounded-[16px] relative overflow-hidden">
            <h2 className="mt-[32px] ml-[20px] font-nunito font-semibold text-[26px] text-text_accent">
              Плата
            </h2>
            <Image
              className="absolute right-0 bottom-0"
              src="/image 2.png"
              alt=""
              width={392}
              height={276}
            />
          </div>
          <div className="col-span-3 border-[2px] border-solid border-accent rounded-[16px] relative overflow-hidden">
            <h2 className="mt-[32px] ml-[20px] font-nunito font-semibold text-[26px] text-text_accent">
              Модули
            </h2>
            <Image
              className="absolute right-0 bottom-0"
              src="/image 5.png"
              alt=""
              width={152}
              height={132}
            />
          </div>
          <div className="col-span-4 border-[2px] border-solid border-accent rounded-[16px] relative overflow-hidden">
            <h2 className="mt-[32px] ml-[20px] font-nunito font-semibold text-[26px] text-text_accent z-10 relative">
              Паяльник
            </h2>
            <Image
              className="absolute right-0 bottom-0"
              src="/image 3.png"
              alt=""
              width={293}
              height={136}
            />
          </div>
          <div className="col-span-2 border-[2px] border-solid border-[#A3DC00] rounded-[16px] relative overflow-hidden">
            <h2 className="mt-[32px] ml-[20px] font-nunito font-semibold text-[26px] text-text_accent">
              Провода
            </h2>
            <Image
              className="absolute right-0 bottom-0"
              src="/image 4.png"
              alt=""
              width={179}
              height={106}
            />
          </div>
          <div className="col-span-2 border-[2px] border-solid border-[#A3DC00] rounded-[16px] relative overflow-hidden">
            <h2 className="mt-[32px] ml-[20px] font-nunito font-semibold text-[26px] text-text_accent">
              Инструкция
            </h2>
            <Image
              className="absolute right-0 bottom-0"
              src="/Frame 5.png"
              alt=""
              width={122}
              height={146}
            />
          </div>
        </div>
      </section>
      <section className="grid">
        <h1 className="text-[52px] leading-[72.8px] font-bold font-nunito text-text_accent mt-[140px] w-[1063px] max-w-full">
          Выбери подходящий для тебя
          <span className="text-accent font-normal ml-2 ">
            формат конструктора INO
          </span>
        </h1>
        <Card_course />
      </section>
      <section>
        <Question />
        <Add_question />
      </section>
      <section className="grid justify-items-center">
        <h1 className="text-[52px] leading-[72.8px] font-medium font-nunito mt-[140px]">
          INO для
          <span className="bg-hightlight rounded-[20px] ml-1 px-2 text-text_accent">
            учеников и студентов
          </span>
        </h1>
        <p className="text-[26px] leading-[36.4px] text-text_accent w-[976px] text-center mt-[32px]">
          Наша компания открыта для сотрудничества со школами и другими учебными
          заведениями. Оставьте заявку и наш менеджер свяжется с вами для
          обсуждения деталей.
        </p>
        <div className="flex gap-[24px] mt-[24px] items-center">
          <input
            type="text"
            placeholder="E-mail"
            className="w-[411px] pl-[32px] text-[20px] h-[76px] rounded-[16px] border-2 border-solid border-accent"
          />
          <button className=" bg-hightlight rounded-[900px] text-[20px] font-medium text-text_accent w-[261px] h-[76px]">
            Спросить
          </button>
        </div>
      </section>
      <section>
        <Slide_infor />
      </section>
      <section className="grid">
        <h1 className="text-[52px] leading-[72.8px] font-medium font-nunito text-text_accent mt-[140px]">
          Подробнее об INO
        </h1>
        <div className="grid grid-cols-12 gap-6 mt-[48px]">
          <div className="col-span-4 h-[488px] rounded-[16px] border-4 border-[#A56FFF] border-solid relative ">
            <p
              className="text-[32px] font-nunito font-medium
mt-[32px] ml-[40px]"
            >
              Электроника
            </p>
            <Image
              className="absolute left-5 bottom-5"
              src="/end1.png"
              alt=""
              width={214}
              height={214}
            />
          </div>
          <div className="col-span-4 h-[488px] rounded-[16px] border-4 border-[#A56FFF] border-solid relative ">
            <p
              className="text-[32px] font-nunito font-medium
mt-[32px] ml-[40px]"
            >
              Робототехника
            </p>
            <Image
              className="absolute left-5 bottom-5"
              src="/end2.png"
              alt=""
              width={335}
              height={279}
            />
          </div>
          <div className="col-span-4 h-[488px] rounded-[16px] border-4 border-[#A56FFF] border-solid relative ">
            <p
              className="text-[32px] font-nunito font-medium
mt-[32px] ml-[40px]"
            >
              Проектирование
            </p>
            <Image
              className="absolute left-5 bottom-5"
              src="/end3.png"
              alt=""
              width={224}
              height={224}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
