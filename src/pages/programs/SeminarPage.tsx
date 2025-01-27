import { motion } from "framer-motion";

type Props = {};

const SeminarPage = ({}: Props) => {
  return (
    <section className="bg-gray-20 min-h-screen py-10">
      <motion.div
        className="mx-auto w-4/5"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        }}
      >
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-4">
            Времен связующая нить
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Семинар, который поможет вам восстановить связь с родом, преодолеть внутренние барьеры и обрести гармонию в жизни.
          </p>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Image Section */}
          <div className="flex justify-center">
            <img
              src="https://rosoha.ru/images/vremen_svyazuyushchaya_nit.jpg"
              alt="Seminar Image"
              className="rounded-lg shadow-md w-full md:w-4/5"
            />
          </div>

          {/* Details Section */}
          <div className="text-gray-700 text-lg leading-relaxed">
            <p className="mb-4">
              Семинар "Времен связующая нить" включает две сессии, которые пройдут
              14 и 21 марта. На этих встречах вы изучите:
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li>Практики восстановления связи с родом</li>
              <li>Методы преодоления внутренних барьеров</li>
              <li>Техники для обретения внутреннего баланса и гармонии</li>
            </ul>
            <p className="mb-4">
              Участие в этом семинаре поможет вам глубже понять себя, найти новые ресурсы для решения жизненных задач и двигаться к целям с уверенностью.
            </p>
            <p>
              Семинар проходит в онлайн-формате, что позволяет вам участвовать из любой точки мира.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-10">
          <a
            href="https://rosoha.ru/vremen-svyazuyushchaya-nit"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary-500 text-white font-bold py-3 px-6 rounded-lg border border-black hover:bg-primary-300 transition"
          >
            Записаться на семинар
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default SeminarPage;