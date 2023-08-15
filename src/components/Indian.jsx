import { useState, useEffect } from "react";
import Title from "../styles/Title.jsx";
import Card from "../styles/Card.jsx";
import Gradient from "../styles/Gradient.jsx";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom";
import FavButton from "./FavButton.jsx";
import { setRecentlyClicked } from "../util/setRecentlyViewed.jsx";

function Indian() {
  const [indian, setIndian] = useState([]);

  const getIndian = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${
        import.meta.env.VITE_API_KEY
      }&number=10&tags=indian`
    );
    const data = await api.json();
    setIndian(data.recipes);
  };

  useEffect(() => {
    getIndian();
  }, []);

  return (
    <div>
      <Title>Indian picks</Title>
      <Splide
        options={{
          perPage: 4,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "3rem",
        }}
      >
        {indian.map((indian) => {
          return (
            <SplideSlide key={indian.id}>
              <Link
                to={"/recipe/" + indian.id}
                onClick={() => {
                  setRecentlyClicked(indian);
                }}
              >
                <Card>
                  <p>{indian.title}</p>
                  <img src={indian.image} alt={indian.title} />
                  <Gradient />
                </Card>
              </Link>
              <FavButton item={indian} id={indian.id} name={"slide"} />
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
}
export default Indian;
