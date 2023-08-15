import Chinese from "../components/Chinese.jsx";
import Japanese from "../components/Japanese.jsx";
import Korean from "../components/Korean.jsx";
import Italian from "../components/Italian.jsx";
import Mediterranean from "../components/Mediterranean.jsx";
import { motion } from "framer-motion";
import Indian from "../components/Indian.jsx";

function Discover() {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Chinese />
      <Japanese />
      <Korean />
      <Italian />
      <Indian />
      <Mediterranean />
    </motion.div>
  );
}

export default Discover;
