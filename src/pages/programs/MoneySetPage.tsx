import useMediaQuery from "@/hooks/useMediaQuery";
import { motion } from "framer-motion";

type Props = {};

const MoneySetPage = ({}: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  return (
    <section className="bg-gray-20 min-h-screen py-28">
      <motion.div
        className={`mx-auto ${isAboveMediumScreens ? "w-4/5 max-w-5xl" : ""}`}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        }}
      >
        {/* Header Section */}
        <div className={`text-center mb-10 ${isAboveMediumScreens ? "" : "w-4/5 mx-auto"}`}>
          <h1 className={`${isAboveMediumScreens ? "text-4xl mb-12" : "text-xl mb-8"} font-bold mb-12`}>
            Денежный Сет
          </h1>
        </div>

        {/* Main Content */}
        <div className={`bg-gray-100 ${isAboveMediumScreens ? "p-16" : "p-4"} rounded-lg shadow-lg`}>
          <div className={`text-gray-700 ${isAboveMediumScreens ? "text-lg" : "text-sm"} leading-relaxed space-y-6 text-justify`}>
            <p>
            «Денежный Сет» — это три нумерологических письменных расчёта (Цифровой Код, Денежные Комбинации, Код Успеха) в формате PDF, который отправляется на e-mail Клиента в течение трёх рабочих дней.
            </p>
            <p>
            «Денежный Сет» состоит из трех отдельных файлов:
            </p>
            <ul className="list-disc pl-5 space-y-4">
              <li>
                «Цифровой Код» — это Ваша персональная числовая комбинация, способствующая росту Вашего денежного потока.
              </li>
              <li>
                «Денежные комбинации» — это цифровой расчёт Ваших уникальных числовых вибрации, увеличивающих поток Клиентов. Данные комбинации помогают определить удачную стоимость Ваших услуг и повысить личный доход.
              </li>
              <li>
              «Код Успеха» - список рекомендации для скорейшего продвижения на работе (карьера и бизнес с акцентом на стратегию поведения).
              </li>
            </ul>
            <p className={`${isAboveMediumScreens ? "text-lg" : "text-sm"} mt-10`}>
            Краткая расшифровка комбинации, правила активации кодов, а также практики для самостоятельной работы прилагаются к расчёту
            </p>
          </div>
        </div>
        <a
        href="https://wa.me/77080546175?text=Хочу%20заказать%20«Денежный%20Сет»"
        target="_blank"
        rel="noopener noreferrer"
        className={`bg-cream-100 drop-shadow mt-6 block w-full ${isAboveMediumScreens ? "text-xl py-8" : " py-4"} font-bold  px-6 rounded-lg hover:bg-primary-300 transition text-center`}
        >
            Заказать «Денежный Сет» 
        </a>
      </motion.div>
    </section>
  );
};

export default MoneySetPage;