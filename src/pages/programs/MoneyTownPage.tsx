import useMediaQuery from "@/hooks/useMediaQuery";
import { motion } from "framer-motion";

type Props = {};

const MoneyTownPage = ({}: Props) => {
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
            Психологическая трансформационная игра «Денежный город».
          </h1>
          <p className={`${isAboveMediumScreens ? "text-xl" : ""} text-gray-700 leading-relaxed`}>
            Авторы игры – Михаил Лурко, Евгения Баксан
          </p>
        </div>

        {/* Main Content */}
        <div className={`bg-gray-100 ${isAboveMediumScreens ? "p-16" : "p-4"} rounded-lg shadow-lg`}>
          <div className={`text-gray-700 ${isAboveMediumScreens ? "text-lg" : "text-sm"} leading-relaxed space-y-6 text-justify`}>
            <p>
                Данная игра предназначена для:
            </p>
            <ul className="list-disc pl-5 space-y-4">
              <li>
                самопознания (исследовать свои отношения с деньгами)
              </li>
              <li>осознаний причин, ограничивающих финансовый доход (определить свой «финансовый потолок», выявить родовые и денежные сценарии)</li>
              <li>
              тренировки денежного мышления (разрешить себе больше и впустить материальное благополучие в свою жизнь)
              </li>
              <li>подготовки для выхода на более качественный уровень жизни (понять, какой урок/навык важно сейчас освоить, увидеть закономерности в своей жизни, осознать внутренние ценности)</li>
              <li>
              реализации своих желаний и удовлетворенности жизнью (понять, куда двигаться дальше, взращивать в себе психологическую зрелость, начать управлять своими финансами и жизнью)
              </li>
            </ul>
            <p className={`${isAboveMediumScreens ? "text-lg" : "text-sm"} mt-10`}>
                Данная игра будет особенно интересна тем, кто интересуется таким направлением как «Психология Денег» (направление психологии, изучающее отношение человека к деньгам и к другим людям в связи с денежными отношениями, а также влияние денежных факторов на поведение человека, в частности на принятие решений).
            </p>
            <p className={`${isAboveMediumScreens ? "text-lg" : "text-sm"} mt-10`}>
                Игра проводится в онлайн и офлайн форматах. Играть можно индивидуально, так и в группе до 4-х человек
            </p>
          </div>
        </div>
        <a
        href="https://wa.me/77080546175?text=Хочу%20получить%20нумерологическую%20сессию"
        target="_blank"
        rel="noopener noreferrer"
        className={`bg-cream-100 drop-shadow mt-6 block w-full ${isAboveMediumScreens ? "text-xl py-8" : " py-4"} font-bold  px-6 rounded-lg hover:bg-primary-300 transition text-center`}
        >
            Записаться на трансформационную игру
        </a>
      </motion.div>
    </section>
  );
};

export default MoneyTownPage;