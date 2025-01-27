import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ProgramsPage = ({ setSelectedPage }: Props) => {
  const programs = [
    {
      title: "Времен связующая нить",
      description:"Совместный онлайн-семинар Людмилы Росоха и Камшат Болысбаевой 14 и 21 марта. Научитесь восстанавливать связь с родом и преодолевать внутренние барьеры",
      buttonLabel: "Узнать подробнее",
      buttonLink: "https://rosoha.ru/vremen-svyazuyushchaya-nit",
    },
    {
      title: "Психологическая трансформационная игра \u00abДенежный город\u00bb",
      description:
        "Игра для самопознания, финансовой зрелости и улучшения денежного мышления. Доступна онлайн и офлайн.",
      buttonLabel: "Узнать подробнее",
      buttonLink: "#", // Replace with specific link if available
    },
    {
      title: "Денежный Сет",
      description:
        "Три нумерологических письменных расчёта: \u00abЦифровой Код\u00bb, \u00abДенежные Комбинации\u00bb, \u00abКод Успеха\u00bb. Получите персональные рекомендации и практики для улучшения финансового состояния.",
      buttonLabel: "Узнать подробнее",
      buttonLink: "#", // Replace with specific link if available
    },
  ];

  return (
    <section
      id="programs"
    >
      <motion.div
         className="min-h-screen bg-gray-20 py-24"
         onViewportEnter={() => setSelectedPage(SelectedPage.Programs)}
      >
      <div className="mx-auto w-4/5">
        <h1 className="text-3xl font-bold mb-10 text-center">Актуальные Программы</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md border border-gray-300"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <h3 className="text-2xl font-semibold mb-4">{program.title}</h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                {program.description}
              </p>
              <a
  href={program.buttonLink}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block bg-transparent font-bold py-1 px-4 border border-black hover:bg-primary-300 transition text-center"
>
  {program.buttonLabel}
</a>
            </motion.div>
          ))}
        </div>
      </div>
      </motion.div>
    </section>
  );
};

export default ProgramsPage;