import styled from "styled-components";

const AA = styled.div`
  margin: 40px;
`;

const BB = styled.h2`
  width: 200px;
  margin: 0 auto;
  text-align: center;
`;

const UnicornAfter = styled.div`
  &:after {
    content: " ??";
  }
`;

function App() {
  return (
    <AA>
      <BB>hello world</BB>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt odio
        laudantium quam voluptatum quia dolores cum, facilis labore ducimus
        inventore repellendus laboriosam? Illum, neque repellendus odio officia
        ducimus officiis quis!
      </p>
    </AA>
  );
}

export default App;
