import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Desc from "./components/Desc";

const GlobalStyle = createGlobalStyle`
  ${reset}
  a{
    text-decoration : none;
    color : inherit;
  }

  button{
    border : none;
    cursor : pointer;
  }

 * {
  box-sizing: border-box;
  }
`;

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <NavBar />
      <Hero />
      <Desc />
    </div>
  );
}

export default App;
