import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-accent xl:mx-[80px] xl:mt-[24px] rounded-[20px]">
      <div className="grid grid-flow-col justify-between px-[48px] py-[29px] ">
        <div className="grid grid-flow-col">
          <Link href={"/"}>
            <Image src="/logo.png" alt="" width={107} height={49} />
          </Link>
          <div className="grid grid-flow-col content-center gap-8 ml-[66px]">
            <Link href="/library " className="text-secondary">
              Проекты
            </Link>
            <Link href="/" className="text-secondary">
              Конструктор
            </Link>
            <Link href="/" className="text-secondary">
              Контакты
            </Link>
          </div>
        </div>
        <div className="grid grid-flow-col gap-[10px]">
          <Link href={"/personal_account"}>
            <button className="bg-secondary px-5 rounded-[900px] text-[18px] font-medium flex gap-[16px] justify-items-center items-center">
              Имя Пользователя{" "}
              <Image
                src="/User.png"
                alt=""
                width={48}
                height={48}
                className="py-1"
              />
            </button>
          </Link>
          <Link href={"/"}>
            <button className="bg-hightlight px-5 py-5 rounded-[900px] text-[18px] font-medium">
              Купить конструктор
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
