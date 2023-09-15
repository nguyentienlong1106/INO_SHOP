import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#39068C] text-secondary xl:mt-[74px]">
      <div className="grid grid-cols-12 xl:mx-[80px] pt-[46px] gap-[22px]">
        <div className="col-span-3">
          <Image src="/logo.png" alt="" width={107} height={49} />
          <p className="mt-[20px] text-[18px] leading-[21.78px] text-[#CCCCCC]">
            Все права защищены ООО “ИНО”{" "}
          </p>
          <p className="mt-[147px] mb-[40px] text-[18px] leading-[21.78px] text-[#CCCCCC]">
            Политика конфиденциальности
          </p>
        </div>
        <div className="col-span-2 text-[#EAEAEA] text-[18px] leading-[21.78px]">
          <h2 className="text-white font-semibold ">Направления</h2>
          <p className="mt-[16px]">Программирование</p>
          <p className="mt-[12px]">Схемотехника</p>
          <p className="mt-[12px]">Электроника</p>
          <p className="mt-[12px]">Робототехника</p>
          <p className="mt-[12px]">Проектирование</p>
        </div>
        <div className="col-span-2 text-[#EAEAEA] text-[18px] leading-[21.78px]">
          <h2 className="text-white font-semibold ">Конструктор</h2>
          <p className="mt-[16px]">О конструкторе</p>
          <p className="mt-[12px]">Приобрести</p>
        </div>
        <div className="col-span-2 text-[#EAEAEA] text-[18px] leading-[21.78px]">
          <h2 className="text-white font-semibold ">О нас</h2>
          <p className="mt-[16px]">Об INO</p>
          <p className="mt-[12px]">Контакты</p>
        </div>
        <div className="col-span-3 grid justify-items-end items-end justify-self-end mb-[40px] text-[18px] text-[#EAEAEA]">
          <p className="mb-[-100px]">+7 (999) 999-99-99</p>
          <p className="mb-[-50px]">example.email@gmail.com</p>
          <div className="flex gap-[35.33px]">
            <Image alt="" src="/telegram.png" width={33.33} height={33.33} />
            <Image alt="" src="/Vector.png" width={33.33} height={33.33} />
            <Image alt="" src="/insta.png" width={33.33} height={33.33} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
