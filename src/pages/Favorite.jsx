import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Grid from "../styles/Grid";
import GridCards from "../styles/GridCards";
import FavButton from "../components/FavButton";

function Favorite() {
  const [favorite, setFavorite] = useState([]);

  const getFavorite = () => {
    const fav = JSON.parse(localStorage.getItem(`favorite`));
    if (fav.length > 0) {
      setFavorite(fav);
    } else {
      return;
    }
  };

  useEffect(() => {
    getFavorite();
  }, []);
  return (
    <>
      {favorite.length > 0 ? (
        <Grid
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {favorite.map((recipe) => {
            return (
              <GridCards key={recipe.id}>
                <Link to={"/recipe/" + recipe.id}>
                  <div className="grid-card-container">
                    <img src={recipe.item.image} alt={recipe.item.title} />
                    <ul className="quickInfo">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        className="prepareTimeSvg"
                      >
                        <path
                          fill="currentColor"
                          d="M12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm0-2q3.35 0 5.675-2.325T20 12q0-1.6-.6-3.075t-1.725-2.6L12 12V4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20Z"
                        />
                      </svg>
                      <li className="prepareTime">
                        {recipe.item.readyInMinutes
                          ? recipe.item.readyInMinutes
                          : "?"}
                      </li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 48 48"
                        className="likesSvg"
                      >
                        <mask id="ipTThumbsUp0">
                          <g
                            fill="none"
                            stroke="#fff"
                            strokeLinejoin="round"
                            strokeWidth="4"
                          >
                            <path d="M27.6 18.6v-7.2A5.4 5.4 0 0 0 22.2 6L15 22.2V42h20.916a3.6 3.6 0 0 0 3.6-3.06L42 22.74a3.6 3.6 0 0 0-3.6-4.14H27.6Z" />
                            <path
                              fill="#555"
                              d="M15 22h-4.806C8.085 21.963 6.283 23.71 6 25.8v12.6a4.158 4.158 0 0 0 4.194 3.6H15V22Z"
                            />
                          </g>
                        </mask>
                        <path
                          fill="currentColor"
                          d="M0 0h48v48H0z"
                          mask="url(#ipTThumbsUp0)"
                        />
                      </svg>
                      <li className="likes">
                        {recipe.item.aggregateLikes
                          ? recipe.item.aggregateLikes
                          : "?"}
                      </li>
                    </ul>
                    <h4>{recipe.item.title}</h4>
                  </div>
                </Link>
                <FavButton item={recipe.item} id={recipe.id} />
              </GridCards>
            );
          })}
        </Grid>
      ) : (
        <div className="favError">No favorites added</div>
      )}
    </>
  );
}

export default Favorite;
