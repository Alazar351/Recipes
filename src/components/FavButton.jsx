import { useState, useEffect } from "react";
import "../styles/FavButton.css";
import PropTypes from "prop-types";

function FavButton(item) {
  const [isFav, setIsFav] = useState(false);

  const findFav = (item) => {
    const favorites = JSON.parse(localStorage.getItem("favorite") || "[]");

    if (favorites.length > 0) {
      favorites.forEach((recipeId) => {
        if (recipeId.id === item.id) {
          setIsFav(true);
        }
      });
    }
  };

  const handleButtonClick = () => {
    setIsFav(!isFav);
    const favorites = JSON.parse(localStorage.getItem("favorite") || "[]");

    if (isFav) {
      const updatedFav = favorites.filter((fav) => fav.id !== item.id);
      localStorage.setItem("favorite", JSON.stringify(updatedFav));
    } else {
      localStorage.setItem("favorite", JSON.stringify([...favorites, item]));
    }
  };

  useEffect(() => {
    findFav(item);
  }, []);

  return (
    <button className={` fav ${item.name} `} onClick={handleButtonClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        className={isFav ? "isFav" : "notFav"}
      >
        <path
          fill="currentColor"
          d="m12 21l-1.45-1.3q-2.525-2.275-4.175-3.925T3.75 12.812Q2.775 11.5 2.388 10.4T2 8.15Q2 5.8 3.575 4.225T7.5 2.65q1.3 0 2.475.55T12 4.75q.85-1 2.025-1.55t2.475-.55q2.35 0 3.925 1.575T22 8.15q0 1.15-.388 2.25t-1.362 2.412q-.975 1.313-2.625 2.963T13.45 19.7L12 21Z"
        />
      </svg>
    </button>
  );
}

FavButton.PropTypes = {
  item: PropTypes.object,
  id: PropTypes.string,
  name: PropTypes.string,
};

export default FavButton;
