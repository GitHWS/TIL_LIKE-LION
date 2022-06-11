import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <NavBar />
      <Hero />
    </div>
  );
}

export default App;
