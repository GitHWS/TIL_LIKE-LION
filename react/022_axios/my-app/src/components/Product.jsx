import React from "react";
import axios from "axios";
import { useEffect } from "react";

export default function Product() {
  useEffect(() => {
    // axios.get/post 등 프로미스 반환
    axios.get("http://test.api.weniv.co.kr/mall").then((res) => {
      console.log("axios");
      console.log(res);
      console.log(res.data);
    });

    // fetch 등 프로미스 반환
    fetch("http://test.api.weniv.co.kr/mall")
      .then((res) => {
        console.log("fetch");
        console.log(res);
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  }, []);
  return <div>Product</div>;
}
