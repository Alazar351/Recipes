import Home from "./Home.jsx";
import { Route, Routes } from "react-router-dom";
import Meal from "./Meal.jsx";
import Searched from "./Searched.jsx";
import Recipe from "./Recipe.jsx";
import Favorite from "./Favorite.jsx";
import Discover from "./Discover.jsx";
import "../styles/Pages.css";
import { AnimatePresence } from "framer-motion";

function Pages() {
  return (
    <div className="allPages">
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meal/:type" element={<Meal />} />
          <Route path="/searched/:search" element={<Searched />} />
          <Route path="/recipe/:name" element={<Recipe />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/discover" element={<Discover />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default Pages;
