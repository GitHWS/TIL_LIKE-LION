import { useContext } from "react";
import { ProductInfo } from "./context/productInfo";

const HelloLicatFour = () => {
  const { name, price } = useContext(ProductInfo);
  return (
    <div>
      <h2>상품명 {name}</h2>
      <strong>가격 {price}</strong>
    </div>
  );
};

export default HelloLicatFour;
