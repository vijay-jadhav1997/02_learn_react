import React, { useEffect, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";

function Accordion() {
  const [showAccordion, setShowAccordion] = useState(false);
  const [productList, setProductList] = useState([]);

  // async function fetchData() {
  //   try {
  //     response = await fetch("https://dummyjson.com/products");
  //     productData = await response.json();
  //     setProductList(productData?.products);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  const fetchData = async () => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((response) => {
        setProductList(response?.products);
      })
      .catch((error) => {
        console.log(error);
        // document.write(error);
        // confirm(error);
      });
  };

  useEffect(() => {
    // fetchData();
  }, []);

  return (
    <div className="accordion_container">
      <div
        className="topBox"
        onClick={() => {
          setShowAccordion(!showAccordion);
        }}
      >
        <h2>Accordion Header</h2>
        <span>
          {!showAccordion ? <IoMdArrowDropdown /> : <IoMdArrowDropup />}
        </span>
      </div>
      {showAccordion && (
        <div className="bottomBox">
          <div className="items">Jay Shree_Ram ✨</div>
          <div className="items">Jay Shree_Krushna ⭐</div>
          <div className="items">Jay Shree_Hari 💥</div>
          <div className="items">Har Har Mahadev 🎀</div>
          <div className="items">Jay Shree_Ram ✨</div>
          <div className="items">Jay Shree_Krushna ⭐</div>
          <div className="items">Jay Shree_Hari 💥</div>
          <div className="items">Har Har Mahadev 🎀</div>
          <div className="items">Jay Shree_Ram ✨</div>
          <div className="items">Jay Shree_Krushna ⭐</div>
          <div className="items">Jay Shree_Hari 💥</div>
          <div className="items">Har Har Mahadev 🎀</div>
        </div>
      )}
    </div>
  );
}

export default Accordion;
