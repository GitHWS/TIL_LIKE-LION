// createContext를 작성
import React, { createContext } from "react";

// Props로 전달하지 않고 직접적으로 전역으로 사용할 수 있는 Context로 사용가능
const UserInfo = createContext({ name: "gary", id: "garyIsFree" });

const App = () => {
  return <HelloLicat />;
};

const HelloLicat = () => {
  return (
    <div>
      <h2>hello</h2>
      <strong>hello</strong>
      <HelloLicatTwo />
    </div>
  );
};

const HelloLicatTwo = () => {
  return (
    <UserInfo.Consumer>
      {(value) => (
        <div>
          <h2>{value.name} 2</h2>
          <strong>{value.id} 2</strong>
          <HelloLicatThree />
        </div>
      )}
    </UserInfo.Consumer>
  );
};

const HelloLicatThree = () => {
  return (
    <UserInfo.Consumer>
      {(value) => (
        <div>
          <h2>{value.name} 3</h2>
          <strong>{value.id} 3</strong>
        </div>
      )}
    </UserInfo.Consumer>
  );
};

export default App;
