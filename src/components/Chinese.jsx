import { useState, useEffect } from "react";
import Title from "../styles/Title.jsx";
import Card from "../styles/Card.jsx";
import Gradient from "../styles/Gradient.jsx";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom";
import FavButton from "./FavButton.jsx";
import { setRecentlyClicked } from "../util/setRecentlyViewed.jsx";

function Chinese() {
  const [chinese, setChinese] = useState([]);
  const getChinese = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${
        import.meta.env.VITE_API_KEY
      }&number=10&tags=chinese`
    );
    const data = await api.json();
    setChinese(data.recipes);
  };

  useEffect(() => {
    getChinese();
  }, []);

  return (
    <div>
      <Title>Chinese picks</Title>
      <Splide
        options={{
          perPage: 4,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "3rem",
        }}
      >
        {chinese.map((chinese) => {
          return (
            <SplideSlide key={chinese.id}>
              <Link
                to={"/recipe/" + chinese.id}
                onClick={() => {
                  setRecentlyClicked(chinese);
                }}
              >
                <Card>
                  <p>{chinese.title}</p>
                  <img src={chinese.image} alt={chinese.title} />
                  <Gradient />
                </Card>
              </Link>
              <FavButton item={chinese} id={chinese.id} name={"slide"} />
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
}

export default Chinese;
