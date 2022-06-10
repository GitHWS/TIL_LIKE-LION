import React, { useState } from "react";

function App() {
  return <NavBar />;
}

function About() {
  return (
    <>
      <h1>About</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
        incidunt minima ullam consectetur ducimus exercitationem deserunt quae
        cum repudiandae hic corrupti earum, quam qui aspernatur! Quas, qui
        suscipit! Reprehenderit, hic!
      </p>
    </>
  );
}

function Product() {
  return (
    <>
      <h1>Product</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
        incidunt minima ullam consectetur ducimus exercitationem deserunt quae
        cum repudiandae hic corrupti earum, quam qui aspernatur! Quas, qui
        suscipit! Reprehenderit, hic!
      </p>
    </>
  );
}

function Contact() {
  return (
    <>
      <h1>Contact</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
        incidunt minima ullam consectetur ducimus exercitationem deserunt quae
        cum repudiandae hic corrupti earum, quam qui aspernatur! Quas, qui
        suscipit! Reprehenderit, hic!
      </p>
    </>
  );
}

function NotFound() {
  return <h1>메뉴 정보를 찾을 수 없습니다.</h1>;
}

const ContentContainer = ({ listName }) => {
  if (listName === "about") {
    return <About />;
  } else if (listName === "product") {
    return <Product />;
  } else if (listName === "contact") {
    return <Contact />;
  } else {
    return <NotFound />;
  }
};

function NavBar() {
  const [listName, setListName] = useState("about");
  const checkId = (e) => {
    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.id);
    setListName(e.target.id);
  };

  return (
    <>
      <nav>
        <ul>
          <li
            id="about"
            style={
              listName === "about" ? { color: "blue" } : { color: "black" }
            }
            onClick={checkId}
          >
            About
          </li>
          <li
            id="product"
            style={
              listName === "product" ? { color: "blue" } : { color: "black" }
            }
            onClick={checkId}
          >
            Product
          </li>
          <li
            id="contact"
            style={
              listName === "contact" ? { color: "blue" } : { color: "black" }
            }
            onClick={checkId}
          >
            Contact
          </li>
          <li
            id="unknown"
            style={
              listName === "unknown" ? { color: "blue" } : { color: "black" }
            }
            onClick={checkId}
          >
            unknown
          </li>
        </ul>
      </nav>
      <ContentContainer listName={listName} />
    </>
  );
}

export default App;

// 컴포넌트 생성 -> 컴포넌트 사용할 컴포넌트 생성 ->
