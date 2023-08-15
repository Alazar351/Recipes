import { useState, useEffect } from "react";
import Title from "../styles/Title.jsx";
import Card from "../styles/Card.jsx";
import Gradient from "../styles/Gradient.jsx";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom";
import FavButton from "./FavButton.jsx";
import { setRecentlyClicked } from "../util/setRecentlyViewed.jsx";

function Mediterranean() {
  const [mediterranean, setMediterranean] = useState([]);
  const getMediterranean = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${
        import.meta.env.VITE_API_KEY
      }&number=10&tags=mediterranean`
    );
    const data = await api.json();

    setMediterranean(data.recipes);
  };

  useEffect(() => {
    getMediterranean();
  }, []);

  return (
    <div>
      <Title>Mediterranean picks</Title>
      <Splide
        options={{
          perPage: 4,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "3rem",
        }}
      >
        {mediterranean.map((mediterranean) => {
          return (
            <SplideSlide key={mediterranean.id}>
              <Link
                to={"/recipe/" + mediterranean.id}
                onClick={() => {
                  setRecentlyClicked(mediterranean);
                }}
              >
                <Card>
                  <p>{mediterranean.title}</p>
                  <img src={mediterranean.image} alt={mediterranean.title} />
                  <Gradient />
                </Card>
              </Link>
              <FavButton
                item={mediterranean}
                id={mediterranean.id}
                name={"slide"}
              />
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
}
export default Mediterranean;
