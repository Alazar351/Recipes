import Trending from "../components/Trending.jsx";
import FavSlide from "../components/FavSlide";
import RecentlyViewed from "../components/RecentlyViewed";
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Trending />
      <FavSlide />
      <RecentlyViewed />
    </motion.div>
  );
}

export default Home;
