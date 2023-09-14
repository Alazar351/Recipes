import "./App.css";
import NavBar from "./components/NavBar";
import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter } from "react-router-dom";
import Wrapper from "./styles/Wrapper.jsx";

function App() {
  return (
    <BrowserRouter>
      <Wrapper>
        <NavBar />
      </Wrapper>
      <Category />
      <Pages />
    </BrowserRouter>
  );
}

export default App;
