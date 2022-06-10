import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import NavBar from "./components/NavBar";

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

function App() {
  return (
    <div claaName="App">
      <GlobalStyle />
      <NavBar />
    </div>
  );
}

export default App;
