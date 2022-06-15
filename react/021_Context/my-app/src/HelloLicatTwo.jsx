import { useContext } from "react";
import { UserInfo } from "./context/userInfo";
import HelloLicatThree from "./HelloLicatThree";

const HelloLicatTwo = () => {
  const { name, id } = useContext(UserInfo);
  return (
    <div>
      <h2>이름 {name}</h2>
      <strong>아이디 {id}</strong>
      <HelloLicatThree />
    </div>
  );
};

export default HelloLicatTwo;
