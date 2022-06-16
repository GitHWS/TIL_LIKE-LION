import { useState, useEffect, useLayoutEffect } from "react";

function App() {
  const [value, setValue] = useState(100);

  // useLayoutEffect를 사용하면 깜빡임 현상을 해결할 수 있다.
  // useLayoutEffect(() => {
  //   if (value >= 1000) {
  //     setValue(300);
  //   }
  // }, [value]);

  useEffect(() => {
    if (value >= 1000) {
      setValue(300);
    }
  }, [value]);

  return (
    <div>
      {/* <div
        style={{
          width: value,
          height: value,
          backgroundColor: "blue",
          transition: "1s all",
        }}
      ></div> */}
      <div
        style={{ width: value, height: value, backgroundColor: "blue" }}
      ></div>
      <button
        onClick={() => {
          setValue(1000);
        }}
      >
        커져랏!
      </button>
      <button
        onClick={() => {
          setValue(200);
        }}
      >
        작아져랏!
      </button>
    </div>
  );
}

export default App;
