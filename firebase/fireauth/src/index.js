import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
// import app from "./fBase";

// FirebaseAppImpl 객체가 출력되면 사용 준비 완료
// console.log(app);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
