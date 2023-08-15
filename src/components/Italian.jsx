import { useState, useEffect } from "react";
import Title from "../styles/Title.jsx";
import Card from "../styles/Card.jsx";
import Gradient from "../styles/Gradient.jsx";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom";
import FavButton from "./FavButton.jsx";
import { setRecentlyClicked } from "../util/setRecentlyViewed.jsx";

function Italian() {
  const [italian, setItalian] = useState([]);

  const getItalian = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${
        import.meta.env.VITE_API_KEY
      }&number=10&tags=italian`
    );
    const data = await api.json();
    setItalian(data.recipes);
  };

  useEffect(() => {
    getItalian();
  }, []);

  return (
    <div>
      <Title>Italian picks</Title>
      <Splide
        options={{
          perPage: 4,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "3rem",
        }}
      >
        {italian.map((italian) => {
          return (
            <SplideSlide key={italian.id}>
              <Link
                to={"/recipe/" + italian.id}
                onClick={() => {
                  setRecentlyClicked(italian);
                }}
              >
                <Card>
                  <p>{italian.title}</p>
                  <img src={italian.image} alt={italian.title} />
                  <Gradient />
                </Card>
              </Link>
              <FavButton item={italian} id={italian.id} name={"slide"} />
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
}
export default Italian;
