import useMediaQuery from "@/hooks/useMediaQuery";
import HText from "@/shared/HText";
import { SelectedPage } from "@/shared/types";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { useState } from "react";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const AppointmentPage = ({ setSelectedPage }: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
    const [expandedItems, setExpandedItems] = useState<string[]>([]);
  
    const handleToggle = (section: string, item: string) => {
        const uniqueKey = `${section}-${item}`;
        setExpandedItems((prev) =>
          prev.includes(uniqueKey)
            ? prev.filter((i) => i !== uniqueKey)
            : [...prev, uniqueKey]
        );
      };

  return (
    <section id="appointment" className="w-full bg-gray-20 py-24">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Appointment)}
      >
        <motion.div
          className="mx-auto w-4/5 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <HText>Виды консультации</HText>
        </motion.div>

        <div className="mt-10 mx-auto w-4/5 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-primary-500">
            <h3 className="text-2xl font-semibold mb-4">Нумерологическая сессия</h3>
            <p className="text-gray-700 text-lg leading-relaxed text-justify">
              Нумерологический расчет производится исключительно по цифровым данным Клиента и оформленному запросу. За одну сессию (продолжительность – 50 минут) разбираю детально один запрос Клиента. Это поможет глубже понять проблематику, обозначить варианты решения задачи. После сессии на почту Клиента отправляется письмо с практикой для самостоятельной работы. Сессия проводится только в онлайн формате, нумерологический расчет производится исключительно по оформленному запросу Клиента.
            </p>
            <p className="text-xl font-semibold mt-4">Наиболее частые запросы на нумерологическую сессию:</p>
            <ul className="list-disc mt-4 ml-4 text-gray-700 text-lg leading-relaxed space-y-4">
              {[
                { title: "Личностное развитие", description: "\n    определение и анализ сильных и слабых сторон, талантов, рекомендации по раскрытию скрытых талантов" },
                { title: "Карьера и Финансы", description: "\n    расчет наиболее финансово успешных сфер деятельности с указанием профессии, анализ финансового потенциала, рекомендации по правильному распределению энергии для достижения карьерных целей" },
                { title: "Отношения и Совместимость", description: "\n    определение совместимости с партнером, расшифровка подходов к построению гармоничных отношении, выбор подходящей даты свадьбы, рекомендации по улучшению семейных/дружеских отношении" },
                { title: "Здоровье и Энергетика", description: "\n    числовой анализ влияния даты рождения на здоровье, рекомендации для восстановления баланса энергии, подбор практик" },
                { title: "Семья и Дети", description: "\n    выбор имени для ребенка, анализ детской энергетики и талантов, совместимость родителей и детей, подбор рекомендации по воспитанию" },
                { title: "Прогностика", description: "\n    расчет благоприятных дат для значимых событий: свадьба, переезд, начало нового, анализ текущего цикла и его влияние события" },
                { title: "Самопознание и Духовный путь ", description: "\n    определение уроков жизни и задач текущего воплощения, расчет задач по Предназначению, рекомендации по духовному развитию" },
                { title: "Разрешение сложных ситуации, коррекция", description: "\n    Анализ причин сложных жизненных периодов, выбор лучшего подхода для выхода из кризиса на основе цифровых расчетов, нахождение путей восстановления баланса в жизни" },
                { title: "Бизнес и проекты", description: "\n    создание успешного названия для компании на основе чисел, выбор названия бренда, выбор подходящего партнёра по бизнесу, оптимальные дни для переговоров, подписания контрактов или важных сделок, расчёт бизнес-цикла и рекомендации по его управлению, подбор кадров на конкретные позиции" },
                { title: "Большая сессия «Разбор Родовой структуры»", description: "\n    Продолжительность сессии – 90 минут, расчет производится по данным в Анкете, которую Клиент заполняет заранее и отправляет вместе с оформленным запросом. На сессии разбираются следующие вопросы: в чьей Род Вы пришли? Что важно знать о своем Роде: какая боль, опыт и потенциал заложены в Вашей родовой системе? Какие у Вас задачи перед Родом? Какие уникальные таланты, возможности передались Вам? Что может блокировать реализацию данного потенциала? Послание Рода для Вас, Ваше Родовое предназначение, на что обратить внимание в отношениях с родителями, детьми" },

              ].map((item) => (
                <li key={item.title} onClick={() => handleToggle('section1', item.title)} className="cursor-pointer">
                  <div className="flex items-center justify-between">
                    {item.title}
                    <ChevronDownIcon className={`h-6 w-6 transition-transform ${expandedItems.includes(`section1-${item.title}`) ? 'rotate-180' : ''}`} />
                  </div>
                  {expandedItems.includes(`section1-${item.title}`) && <span className="block mt-2 ml-4 text-gray-500">{item.description}</span>}
                </li>
              ))}
            </ul>
            <a
            href="https://wa.me/77080546175?text=Хочу%20получить%20нумерологическую%20сессию"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cream-100 drop-shadow mt-6 block w-full bg-primary-500 font-bold py-3 px-6 rounded-lg hover:bg-primary-300 transition text-center"
            >
              Записаться на нумерологическую сессию
            </a>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-primary-500">
            <h3 className="text-2xl font-semibold mb-4">Психологическая/арт-терапевтическая сессия</h3>
            <p className="text-xl font-semibold mt-4">Наиболее частые запросы Клиентов:</p>
            <ul className="list-disc mt-4 ml-4 text-gray-700 text-lg leading-relaxed space-y-4">
              {[
                { title: "Личностное развитие", description: "\n    поиск смысла жизни и личных целей, раскрытие потенциала и талантов, работа с низкой самооценкой и неуверенностью, развитие эмоционального интеллекта, умение принимать важные решения и брать ответственность за свою жизнь" },
                { title: "Межличностные отношения", description: "\n    улучшение коммуникации, трудности в установлении границ и отстаивании своих интересов, повторяющиеся негативные сценарии в жизни" },
                { title: "Поиск выхода из психологического кризиса", description: "\n    потеря смысла жизни или мотивации, ощущение застоя, адаптация новым условиям – переезд, смена работы или другие значимые изменения" },
                { title: "Эмоциональные проблемы", description: "\n    управление стрессом, хронической усталостью, раздражительностью, работа с тревожностью, подавленными эмоциями и сложностями их выражения, восстановление внутреннего баланса для поддержания физического/психического/эмоционального здоровья" },
                { title: "Карьера и саморазвитие", description: "\n    трудности в принятии решений относительно карьеры, работа с выгоранием и профессиональной демотивацией, развитие лидерских качеств, баланс между работой и личной жизнью, поиск новой профессиональной деятельности, которая соответствует интересам и ценностям" },
                { title: "Духовный поиск", description: "\n    ощущение внутренней пустоты или отсутствия гармонии, желание найти связь со своим внутренним «Я», поиск ответов на вопросы о смысле жизни, Предназначении, работа с темами принятия себя и внутреннего покоя" },
                { title: "Проблемы с самооценкой", description: "\n    постоянное чувство вины или стыда, страхи перед оценкой окружающих, сравнение себя с другими и чувство неполноценности, проблемы с самопринятием и ощущением собственной значимости" },
                { title: "Поддержка в период изменений/трансформации", description: "\n    подготовка к важным жизненным событиям - свадьба, рождение ребёнка, смена профессии; приспособление к новым ролям в жизни (родительство, смена статуса); страх ошибок и последствий выбора, анализ возможных путей и разработка плана действий" },
                { title: "Поддержка детей/подростков", description: "\n    работа с тревожностью, стрессом, неуверенностью, проблемы с коммуникацией и самоидентификацией" }
              ].map((item) => (
                <li key={item.title} onClick={() => handleToggle('section2', item.title)} className="cursor-pointer">
                  <div className="flex items-center justify-between">
                    {item.title}
                    <ChevronDownIcon className={`h-6 w-6 transition-transform ${expandedItems.includes(`section2-${item.title}`) ? 'rotate-180' : ''}`} />
                  </div>
                  {expandedItems.includes(`section2-${item.title}`) && <span className="block mt-2 ml-4 text-gray-500">{item.description}</span>}
                </li>
              ))}
            </ul>
            <a
            href="https://wa.me/77080546175?text=Хочу%20получить%20психологическую/арт-терапевтическую%20сессию"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cream-100 drop-shadow mt-6 block w-full bg-primary-500 font-bold py-3 px-6 rounded-lg hover:bg-primary-300 transition text-center"
            >
              Записаться на психологическую/арт-терапевтическую сессию
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AppointmentPage;