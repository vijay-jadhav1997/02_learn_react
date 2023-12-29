import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";

function Accordion() {
  const [showAccordion, setShowAccordion] = useState(false);

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
