import "./App.css";
import NavBar from "./components/Navbar.jsx";
import Pages from "./pages/Pages.jsx";
import Category from "./components/Category";
import Search from "./components/Search";
import { BrowserRouter } from "react-router-dom";
import Wrapper from "./styles/Wrapper.jsx";

function App() {
  return (
    <BrowserRouter>
      <Wrapper>
        <NavBar />
        <Search />
      </Wrapper>
      <Category />
      <Pages />
    </BrowserRouter>
  );
}

export default App;
