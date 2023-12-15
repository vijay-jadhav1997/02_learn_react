import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";

function Accordion() {
  const [showAccordion, setShowAccordion] = useState(false);
  const [accordion, setAccordion] = useState("accordionHidden");

  function showAccordionHandler() {
    if (showAccordion) {
      setAccordion("accordionShow");
      setShowAccordion(!showAccordion);
    } else {
      setAccordion("accordionHidden");
      setShowAccordion(!showAccordion);
    }
  }

  return (
    <div className="accordion_container">
      <div className="topBox" onClick={showAccordionHandler}>
        <h5>Accordion Header</h5>
        <span>
          {showAccordion ? <IoMdArrowDropdown /> : <IoMdArrowDropup />}
        </span>
      </div>
      <div className={`bottomBox ${accordion}`}>
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
    </div>
  );
}

export default Accordion;
