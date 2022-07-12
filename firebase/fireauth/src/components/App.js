import MyRouter from "./Router";
import { useState, useEffect } from "react";
import { authService } from "../fBase";

function App() {
  // authService.currentUser
  const [isLogin, setIsLogin] = useState(false);

  const [init, setInit] = useState(false);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
      setInit(true);
    });
  });

  return init ? <MyRouter isLogin={isLogin} /> : "로딩 중";
}

export default App;
