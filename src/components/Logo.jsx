import { motion } from "framer-motion";
import { Briefcase, ArrowRight, ChevronsRight, BarChart2 } from "lucide-react";
import { agriLogo } from "../assets";

const Logo = () => {
  return (
    <motion.div
      className="flex items-center gap-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <img
          src={agriLogo}
          alt="Philippine Agro"
          className="w-52 h-18 md:w-72  md:h-18"
        />
      </motion.div>
    </motion.div>
  );
};

export default Logo;
