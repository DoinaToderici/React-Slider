import React from "react";
import { FcNext } from "react-icons/fc";
import { FcPrevious } from "react-icons/fc";

function BtnSlider({ moveSlide, direction }) {
  return (
    <div
      onClick={moveSlide}
      className={`btn-slider ${
        direction === "prev" ? "btn-left" : "btn-right"
      }`}
    >
      {direction === "prev" ? <FcPrevious /> : <FcNext />}
    </div>
  );
}

export default BtnSlider;
