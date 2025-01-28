import useMediaQuery from "@/hooks/useMediaQuery";
import { motion } from "framer-motion";

type Props = {};

const SeminarPage = ({}: Props) => {
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
            Времен связующая нить
          </h1>
          <p className={`${isAboveMediumScreens ? "text-xl" : ""} text-gray-700 leading-relaxed`}>
            Совместный онлайн-семинар
          </p>
          <p className={`${isAboveMediumScreens ? "text-xl" : ""} text-gray-700 leading-relaxed`}>
            Людмилы Росоха и Камшат Болысбаевой
          </p>
          <p className={`${isAboveMediumScreens ? "text-xl" : ""} text-gray-700 leading-relaxed`}>
            14 и 21 марта 2025 года
          </p>
          <p className={`${isAboveMediumScreens ? "text-xl" : ""} text-gray-700 leading-relaxed`}>
            2 прямых эфира с 19.00 до 22.00 мск
          </p>
        </div>

        {/* Main Content */}
        <div className={`bg-gray-100 ${isAboveMediumScreens ? "p-16" : "p-4"} rounded-lg shadow-lg`}>
          <div className={`text-gray-700 ${isAboveMediumScreens ? "text-lg" : "text-sm"} leading-relaxed space-y-6 text-justify`}>
            <p>
              Обретя связь с Родом, почувствуй силу поколений в своём сердце и
              получи доступ к Родовым ресурсам.
            </p>
            <p>
              Онлайн-семинар, который объединяет духовные традиции славянских и
              степных народов, помогая восстановить связь с Родом и внести
              гармонию в свою жизнь.
            </p>
            <p>
              Нить – как связующее звено между поколениями в Роду, универсальный
              символ, объединяющий людей в Родовой системе. Нить ассоциируется с
              непрерывностью жизни, объединяя прошлое, настоящее и будущее.
            </p>

            <h2 className={`${isAboveMediumScreens ? "text-xl" : ""} font-bold mt-10`}>На семинаре через символ Родовой Нити вы сможете:</h2>
            <ul className="list-disc pl-5 space-y-4">
              <li>
                Исследовать глубинные аспекты Родовой памяти, восстановить
                утраченные связи и обрести целостность.
              </li>
              <li>Познакомиться и осознать глобальную задачу своего Рода.</li>
              <li>
                Увидеть на практике как и через что РОДА выживали, как
                адаптировались, какие проводили обряды для того, чтобы выжить и
                как это сейчас нам, современным людям, применить в своей жизни.
              </li>
              <li>Через работу с нитью сделать для себя Родовой оберег.</li>
            </ul>

            <h2 className={`${isAboveMediumScreens ? "text-xl" : ""} font-bold mt-10`}>В чём уникальность символа Нить:</h2>
            <ul className="list-disc pl-5 space-y-4">
              <li>
                Передача знаний и Родового опыта через Нить. Духовное и культурное
                наследие передающееся через Родовую память: как нить вплетает
                узоры в ткань, так и память о предках формирует идентичность
                потомков.
              </li>
              <li>
                В роли Нити проявляется концепция целостности Рода, соединение
                (воссоединение) разорванных связей: Нить помогает «зашивать»
                Родовые травмы, восстанавливая утраченную гармонию.
              </li>
              <li>
                Защита Рода и исцеление Рода: Нить в традициях многих народов
                часто использовалась как оберег.
              </li>
              <li>
                Коллективную мудрость: речь идет о том, что каждое поколение
                добавляет свои «узелки» на общей нити, что отражает опыт,
                испытания и уроки.
              </li>
              <li>
                Коррекция Судьбы через Нить. Во многих культурах и народах Нить
                также отождествляется с Судьбой человека, влияя на жизненный путь
                человека, передавая генетические и духовные программы, при этом
                человек способен «переплести» её, внося изменения в свою жизнь.
              </li>
              <li>
                Узелки на нити: Узлы символизируют важные события, испытания или
                решения, влияющие на Родовую историю. Развязывание или плетение
                этих узелков — способ проработки сложностей и осознания уроков.
              </li>
            </ul>

            <h2 className={`${isAboveMediumScreens ? "text-xl" : ""} font-bold mt-10`}>Этот семинар для вас, если вы:</h2>
            <ul className="list-disc pl-5 space-y-4">
              <li>Интересуетесь темой Рода. Род открыли и что дальше?</li>
              <li>
                Не знаете своих «корней» и хотите к ним присоединиться (приемные
                дети, сироты из детдома, отлученные от Рода по каким-то причинам).
              </li>
              <li>
                Имеете связь с Родом, но как бы отвергаете её (дети, рожденные с
                помощью ЭКО или от суррогатных матерей).
              </li>
              <li>
                Хотите усилить связь с Родом, но внутри по разным причинам есть
                сопротивление:
              </li>
              <li>
              Осторожно относитесь к теме Рода или опасаетесь этой темы.
              </li>
              <li>
              Работаете со своими клиентами с темой Рода, как специалист
              (психолог, психотерапевт).
              </li>
            </ul>

            <h2 className={`${isAboveMediumScreens ? "text-xl" : ""} font-bold mt-10`}>Вы сможете выполнять предложенные техники в своем темпе, чтобы через
              Нить почувствовать принадлежность к своему Роду и вплести свою
              «Нить» в родовое «полотно», создавая свой уникальный узор.
            </h2>
            <p className={`${isAboveMediumScreens ? "text-xl" : "text-sm"} mt-10`}>Мы объединяем культурное наследие наших народов, чтобы помочь вам открыть силу вашего Рода.</p>

            <h1 className={`${isAboveMediumScreens ? "text-2xl" : "text-xl"} font-bold mt-10 text-center`}>Стоимость участия: 31.000₽</h1>
            <p className={`${isAboveMediumScreens ? "text-xl" : ""} text-center`}>Ведущие: Людмила Росоха и Камшат Болысбаева.</p><br></br>

            <p className={`${isAboveMediumScreens ? "text-xl" : ""} text-center mt-10`}>
              Станьте связующей нитью между прошлым и будущим своего Рода,
              восстановив забытые или утерянные связи с Родом!
            </p>
          </div>
        </div>
        <a
        href="https://wa.me/77080546175?text=Хочу%20получить%20нумерологическую%20сессию"
        target="_blank"
        rel="noopener noreferrer"
        className={`bg-cream-100 drop-shadow mt-6 block w-full ${isAboveMediumScreens ? "text-xl py-8" : " py-4"} font-bold  px-6 rounded-lg hover:bg-primary-300 transition text-center`}
        >
            Записаться на семинар
        </a>
      </motion.div>
    </section>
  );
};

export default SeminarPage;