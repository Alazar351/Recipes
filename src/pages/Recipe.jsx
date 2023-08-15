import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "../styles/Button";
import Detail from "../styles/Detail";

function Recipe() {
  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${
        import.meta.env.VITE_API_KEY
      }`
    );
    const detailData = await data.json();

    setDetails(detailData);
  };

  useEffect(() => {
    fetchDetails();
  }, [params.name]);

  return (
    <Detail
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="pic">
        <h2>{details.title}</h2>
        <img src={details.image}></img>
      </div>
      <div>
        <div className="buttonContainer">
          <div>
            <Button
              className={activeTab === "instructions" ? "active" : ""}
              onClick={() => setActiveTab("instructions")}
            >
              Instructions
            </Button>
            <Button
              className={activeTab === "ingredients" ? "active" : ""}
              onClick={() => setActiveTab("ingredients")}
            >
              Ingredients
            </Button>
          </div>
        </div>

        {activeTab === "instructions" && (
          <div>
            <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
            <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
          </div>
        )}
        {activeTab === "ingredients" && (
          <ul>
            {details.extendedIngredients.map((ingredient) => {
              return (
                <li className="ingre" key={ingredient.id}>
                  {ingredient.original}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </Detail>
  );
}

export default Recipe;
