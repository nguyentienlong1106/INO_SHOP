const Data = [
  {
    step: "1",
    color: "hightlight",
    name: "Прохождение введения",
    infor:
      "Это уникальный модульный обучающий игровой программно-аппаратный комплекс программно-аппаратный комплекс..",
  },
  {
    step: "2",
    name: "Прохождение введения",
    color: "hightlight",
    infor:
      "Это уникальный модульный обучающий игровой программно-аппаратный комплекс программно-аппаратный комплекс..",
  },
  {
    step: "3",
    color: "accent",
    name: "Прохождение введения",
    infor:
      "Это уникальный модульный обучающий игровой программно-аппаратный комплекс программно-аппаратный комплекс..",
  },
  {
    step: "4",
    color: "accent",
    name: "Прохождение введения",
    infor:
      "Это уникальный модульный обучающий игровой программно-аппаратный комплекс программно-аппаратный комплекс..",
  },
  {
    step: "5",
    color: "accent",
    name: "Прохождение введения",
    infor:
      "Это уникальный модульный обучающий игровой программно-аппаратный комплекс программно-аппаратный комплекс..",
  },
  {
    step: "6",
    color: "camchua",
    name: "Прохождение введения",
    infor:
      "Это уникальный модульный обучающий игровой программно-аппаратный комплекс программно-аппаратный комплекс..",
  },
];

const Sientific_guide = () => {
  return (
    <div className="grid grid-cols-3 gap-[55px]">
      {Data.map((e, i) => (
        <div key={i} className="col-span-1 h-[283px]">
          {" "}
          <span
            className={`text-[20px] font-medium font-nunito text-text_accent bg-${
              e.color
            } ${
              e.color == "accent" ? "text-white" : ""
            } py-3 px-[20px] rounded-[16px]`}
          >
            Шаг {e.step}
          </span>
          <h2 className="mt-[24px] font-nunito font-semibold text-[26px] text-text_accent">
            {e.name}
          </h2>
          <p className="mt-[16px] text-[22px] text-text_accent leading-[30.8px]">
            {e.infor}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Sientific_guide;
