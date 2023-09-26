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
  const getFavorite = () => {
    const check = localStorage.getItem("favorite");

    if (check) {
      setFavorite(JSON.parse(check));
    }
  };

  useEffect(() => {
    getFavorite();
    updateSplidePage();

    window.addEventListener("resize", updateSplidePage);

    return () => {
      window.removeEventListener("resize", updateSplidePage);
    };
  }, []);

  return (
    <div>
      {favorite.length > 0 ? (
        <>
          <Title>Favorites</Title>
          <Splide
            options={{
              perPage: splidePage,
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
