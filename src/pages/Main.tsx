import HeroImage from "@/assets/hero-image.jpg";
import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const MainPage = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section id="main" className="min-h-screen bg-gray-20 py-10 md:pb-0">
      {/* IMAGE AND MAIN HEADER */}
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Main)}
      >
        {/* IMAGE */}
        {!isAboveMediumScreens && (
          <div className="flex basis-4/5 justify-center mt-16 md:z-10 md:ml-40 md:mt-16 md:justify-items-end order-1 md:order-2">
            <img alt="home-heroImage" src={HeroImage} />
            </div>
          )}
        {/* MAIN HEADER */}
        <div className={`z-10 ${isAboveMediumScreens ? 'mt-32' : 'mt-12'} md:basis-3/5`}>
          {/* HEADINGS */}
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <h1 className="text-4xl font-bold md:text-6xl text-justify">
                Камшат Болысбаева
              </h1>
            </div>

            <h2 className="mt-8 text-2xl md:text-2xl text-justify">
              психолог, нумеролог
            </h2>
            <h2 className="mt-2 text-2xl md:text-2xl text-justify">
              арт-Терапевт, игропрактик
            </h2>
          </motion.div>

          {/* WELCOME TEXT */}
          <motion.div
            className="mt-8 mb-16 text-lg leading-8 text-justify"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
          >
            <p>Всем добро пожаловать!</p><br></br>
            <p>
              Меня зовут Камшат. Я - практикующий психолог, нумеролог,
              арт-терапевт, педагог-психолог и игропрактик. В рамках частной
              практики провожу психолого-нумерологические, арт-терапевтические
              сессии и трансформационные игры. Изучаю квантовую психологию,
              родологию, энергетику человека, ольфактотерапию, создаю свечные боксы.
            </p><br></br>
            <p>
              В работе сочетаю психологию, нумерологию, арт-терапию, подбираю
              практики для самостоятельной работы на основе расчета цифровых данных.
              Помогаю Клиентам раскрыть свой внутренний потенциал, найти путь к
              самореализации, жить лучше и зарабатывать больше.
            </p><br></br>
            <p>
              Моя цель в индивидуальных и групповых сессиях - помочь Клиенту
              глубже понять себя, преодолеть внутренние барьеры, достичь личных целей.
            </p><br></br>
            <p>
              Здесь Вы найдете информацию о сессиях и играх. Анонсы игр, семинаров,
              групповых сессий дополнительно публикую в соцсетях.
            </p>
          </motion.div>
        </div>

        {/* IMAGE */}
        {isAboveMediumScreens && (
          <div className="flex basis-4/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end order-1 md:order-2">
            <img alt="home-heroImage" src={HeroImage} />
            </div>
          )}
      </motion.div>
    </section>
  );
};

export default MainPage;