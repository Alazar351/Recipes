import { useState, useEffect } from "react";
import Title from "../styles/Title.jsx";
import Card from "../styles/Card.jsx";
import Gradient from "../styles/Gradient.jsx";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom";
import FavButton from "./FavButton.jsx";
import { setRecentlyClicked } from "../util/setRecentlyViewed.jsx";

function Korean() {
  const [korean, setKorean] = useState([]);
  const [splidePage, setSplidePage] = useState(4);

  const updateSplidePage = () => {
    if (window.innerWidth < 621) {
      setSplidePage(1);
    } else if (window.innerWidth < 980) {
      setSplidePage(2);
    } else if (window.innerWidth < 1290) {
      setSplidePage(3);
    } else {
      setSplidePage(4);
    }
  };

  const getKorean = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${
        import.meta.env.VITE_API_KEY
      }&number=10&tags=korean`
    );
    const data = await api.json();
    setKorean(data.recipes);
  };

  useEffect(() => {
    getKorean();
    updateSplidePage();

    window.addEventListener("resize", updateSplidePage);

    return () => {
      window.removeEventListener("resize", updateSplidePage);
    };
  }, []);

  return (
    <div>
      <Title>Korean picks</Title>
      <Splide
        options={{
          perPage: splidePage,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "3rem",
        }}
      >
        {korean.map((korean) => {
          return (
            <SplideSlide key={korean.id}>
              <Link
                to={"/recipe/" + korean.id}
                onClick={() => {
                  setRecentlyClicked(korean);
                }}
              >
                <Card>
                  <p>{korean.title}</p>
                  <img src={korean.image} alt={korean.title} />
                  <Gradient />
                </Card>
              </Link>
              <FavButton item={korean} id={korean.id} name={"slide"} />
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
}

export default Korean;
