import { useState } from "react";
import FormStyle from "../styles/FormStyle";
import { useNavigate } from "react-router-dom";

function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
  };
  return (
    <FormStyle onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Search recipes..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </FormStyle>
  );
}

export default Search;
