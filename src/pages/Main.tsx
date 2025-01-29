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
        className="mx-auto w-5/6 md:flex md:items-center md:justify-between"
        onViewportEnter={() => setSelectedPage(SelectedPage.Main)}
      >
        {!isAboveMediumScreens && (
          <div className="flex basis-4/5 justify-center mt-16 md:z-10 md:ml-40 md:mt-16 md:justify-items-end order-1 md:order-2">
            <img alt="home-heroImage" src={HeroImage} />
            </div>
          )}
        {/* HEADINGS SECTION */}
        <div className="md:basis-1/2 flex flex-col justify-center mt-16">
          <motion.div
            className="text-left"
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
              <h1 className="text-4xl font-bold md:text-6xl">Камшат Болысбаева</h1>
            </div>
            <h2 className="mt-8 text-2xl md:text-2xl">Психолог, нумеролог</h2>
            <h2 className="mt-2 text-2xl md:text-2xl">Арт-терапевт, игропрактик</h2>
          </motion.div>
        </div>

        {/* IMAGE SECTION */}
        {isAboveMediumScreens && (
          <div className="md:basis-1/2 flex justify-center mt-16">
            <motion.img
              alt="home-heroImage"
              src={HeroImage}
              className="w-full max-w-md md:max-w-2xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            />
          </div>
        )}
      </motion.div>

      {/* WELCOME TEXT */}
      <motion.div
        className="mx-auto w-5/6 mt-10 pb-16 text-lg leading-8 text-justify"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
      >
        <p>Всем добро пожаловать!</p>
        <br />
        <p>
          Меня зовут Камшат. В рамках частной практики провожу
          психолого-нумерологические, арт-терапевтические сессии и
          трансформационные игры. Изучаю квантовую психологию, родологию,
          энергетику человека, ольфактотерапию, создаю свечные боксы.
        </p>
        <br />
        <p>
          В работе сочетаю психологию, нумерологию, арт-терапию, подбираю
          практики для самостоятельной работы на основе расчета цифровых данных.
          Помогаю Клиентам раскрыть свой внутренний потенциал, жить лучше и зарабатывать больше.
        </p>
        <br />
        <p>
          Моя цель в индивидуальных и групповых сессиях - помочь Клиенту глубже
          понять себя, преодолеть внутренние барьеры, достичь личных целей.
        </p>
        <br />
        <p>
          Здесь Вы найдете информацию о сессиях и играх. Анонсы игр, семинаров,
          групповых сессий дополнительно публикую в соцсетях.
        </p>
      </motion.div>
    </section>
  );
};

export default MainPage;