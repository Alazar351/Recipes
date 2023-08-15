import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Grid from "../styles/Grid";
import GridCards from "../styles/GridCards";
import { Link } from "react-router-dom";
import FavButton from "../components/FavButton";
import { setRecentlyClicked } from "../util/setRecentlyViewed";

function Searched() {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  const params = useParams();

  const getSearched = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${
        import.meta.env.VITE_API_KEY
      }&number=50&query=${name}`
    );
    const searched = await data.json();
    setSearchedRecipes(searched.results);
  };
  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);

  return (
    <Grid
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {searchedRecipes.map((item) => {
        return (
          <GridCards key={item.id}>
            <Link
              to={"/recipe/" + item.id}
              onClick={() => {
                setRecentlyClicked(item);
              }}
            >
              <div className="grid-card-container">
                <img src={item.image} alt={item.title} />
                <h4>{item.title}</h4>
              </div>
            </Link>
            <FavButton item={item} id={item.id} />
          </GridCards>
        );
      })}
    </Grid>
  );
}

export default Searched;
