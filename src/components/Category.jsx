import { NavLink } from "react-router-dom";
import List from "../styles/List";

function Category() {
  return (
    <List>
      <div>
        <NavLink to={"/meal/breakfast"}>
          <h4>Breakfast</h4>
        </NavLink>
      </div>
      <div>
        <NavLink to={"/meal/main course"}>
          <h4>Main Course</h4>
        </NavLink>
      </div>
      <div>
        <NavLink to={"/meal/side dish"}>
          <h4>Side Dish</h4>
        </NavLink>
      </div>
      <div>
        <NavLink to={"/meal/appetizer"}>
          <h4>Appetizer</h4>
        </NavLink>
      </div>
      <div>
        <NavLink to={"/meal/salad"}>
          <h4>Salad</h4>
        </NavLink>
      </div>
      <div>
        <NavLink to={"/meal/dessert"}>
          <h4>Dessert</h4>
        </NavLink>
      </div>
      <div>
        <NavLink to={"/meal/drink"}>
          <h4>Drink</h4>
        </NavLink>
      </div>
      <div>
        <NavLink to={"/meal/snack"}>
          <h4>Snack</h4>
        </NavLink>
      </div>
    </List>
  );
}

export default Category;
