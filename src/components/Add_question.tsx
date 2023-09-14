const Add_question = () => {
  return (
    <div className="lg:mx-[-80px] bg-accent h-[345px] relative">
      <div className="mx-[80px]">
        <h1 className="text-[32px] leading-[44.8px] font-medium font-nunito  mt-[140px] text-white pt-[48px]">
          Остались вопросы? —
          <span className="bg-hightlight rounded-[20px] ml-1 px-2 text-text_accent">
            оставьте их здесь
          </span>
        </h1>
        <div className="grid grid-cols-12 gap-[24px]">
          <div className="col-span-3">
            <input
              type="text"
              placeholder="Имя"
              className="w-full mt-[32px] pl-[32px] text-[20px] h-[76px] rounded-[16px]"
            />{" "}
          </div>
          <div className="col-span-4">
            <input
              type="text"
              placeholder="E-mail"
              className="w-full mt-[32px] pl-[32px] text-[20px] h-[76px] rounded-[16px]"
            />{" "}
          </div>
          <div className="col-span-5">
            <input
              type="text"
              placeholder="Ваш вопрос"
              className="w-full mt-[32px] pl-[32px] text-[20px] h-[76px] rounded-[16px]"
            />{" "}
          </div>
          <button className=" bg-hightlight py-[20px] rounded-[900px] text-[20px] font-medium text-text_accent w-[192px] absolute right-[80px] bottom-[60px]">
            Спросить
          </button>
        </div>
      </div>
    </div>
  );
};

export default Add_question;
