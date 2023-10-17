const Data = [
  {
    step: "1",
    color: "hightlight",
    name: "Прохождение введения",
    infor:
      "Вы познакомитесь с работой образовательной площадки и пройдете вводную часть курса",
  },
  {
    step: "2",
    name: "Консультация с менеджером",
    color: "hightlight",
    infor:
      "С вами обязательно свяжется менеджер, который ответит на все вопросы и поможет с подбором курса      ",
  },
  {
    step: "3",
    color: "accent",
    name: "Приобретение конструктора",
    infor:
      "Вам сразу же открывается доступ в личный кабинет и отправляется конструктор (при выборе соответствующего курса) ",
  },
  {
    step: "4",
    color: "accent",
    name: " Создание проектов",
    infor: "Вы учитесь в проектном формате, через реализацию своих проектов",
  },
  {
    step: "5",
    color: "accent",
    name: "Прохождение тестов",
    infor:
      "Записывайте свои эмоции, заполняйте пирог времени, отвечайте на вопросы, которые помогут с выбором карьеры",
  },
  {
    step: "6",
    color: "accent2",
    name: "Получение сертификата",
    infor:
      "И вот мы на финише! В конце вас ждет сертификат о прохождении курса ",
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
