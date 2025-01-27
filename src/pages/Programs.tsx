import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ProgramsPage = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section id="about" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      <motion.div>
      </motion.div>
    </section>
  );
};

export default ProgramsPage;
