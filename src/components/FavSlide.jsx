import { useState, useEffect } from "react";
import Title from "../styles/Title.jsx";
import Card from "../styles/Card.jsx";
import Gradient from "../styles/Gradient.jsx";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom";
import FavButton from "./FavButton.jsx";

function FavSlide() {
  const [favorite, setFavorite] = useState([]);
  const getFavorite = () => {
    const check = localStorage.getItem("favorite");

    if (check) {
      setFavorite(JSON.parse(check));
    }
  };

  useEffect(() => {
    getFavorite();
  }, []);

  return (
    <div>
      {favorite.length > 0 ? (
        <>
          <Title>Favorites</Title>
          <Splide
            options={{
              perPage: 4,
              arrows: false,
              pagination: false,
              drag: "free",
              gap: "3rem",
            }}
          >
            {favorite.map((favorite) => {
              return (
                <SplideSlide key={favorite.id}>
                  <Link to={"/recipe/" + favorite.id}>
                    <Card>
                      <p>{favorite.item.title}</p>
                      <img
                        src={favorite.item.image}
                        alt={favorite.item.title}
                      />
                      <Gradient />
                    </Card>
                  </Link>
                  <FavButton item={favorite} id={favorite.id} name={"slide"} />
                </SplideSlide>
              );
            })}
          </Splide>
        </>
      ) : (
        <>
          <Title>Favorites</Title>
          <div className="favSlideError">No favorites added </div>
        </>
      )}
    </div>
  );
}

export default FavSlide;
