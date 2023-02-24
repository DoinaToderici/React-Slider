import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./slider.css";
import BtnSlider from "./btnSlider";
import dataSlider from "./dataSlider";

function Slider() {
  const [slideAnim, setSlideAnim] = useState({
    index: 0,
    inprogress: false,
  });

  const nextSLide = () => {
    if (slideAnim.index !== dataSlider.length - 1 && !slideAnim.inprogress) {
      setSlideAnim({ index: slideAnim.index + 1, inprogress: true });

      setTimeout(() => {
        setSlideAnim({ index: slideAnim.index + 1, inprogress: false });
      }, 1000);
    } else if (
      slideAnim.index === dataSlider.length - 1 &&
      !slideAnim.inprogress
    ) {
      setSlideAnim({ index: 0, inprogress: true });

      setTimeout(() => {
        setSlideAnim({ index: 0, inprogress: false });
      }, 1000);
    }
  };

  const prevSLide = () => {
    if (slideAnim.index === 0 && !slideAnim.inprogress) {
      setSlideAnim({ index: dataSlider.length - 1, inprogress: true });

      setTimeout(() => {
        setSlideAnim({ index: dataSlider.length - 1, inprogress: false });
      }, 1000);
    } else if (slideAnim.index !== 0 && !slideAnim.inprogress) {
      setSlideAnim({ index: slideAnim.index - 1, inprogress: true });

      setTimeout(() => {
        setSlideAnim({ index: slideAnim.index - 1, inprogress: false });
      }, 1000);
    }
  };

  const moveDots = (index) => {
    setSlideAnim({ index: index, inprogress: false });
  };

  return (
    <div className="slider-component col-12 col-md-8 mx-auto">
      <h1 className="mb-5">My slider</h1>
      <div className="slider-container">
        {dataSlider.map((image, index) => {
          console.log({ index, "state index": slideAnim.index });
          return (
            <div
              key={image.id}
              className={
                slideAnim.index === index ? "slide activ-anim" : "slide"
              }
            >
              <img
                src={image.url}
                alt={`Image slider nr ${slideAnim.index + 1}`}
              />
              <BtnSlider moveSlide={prevSLide} direction="prev" />
              <BtnSlider moveSlide={nextSLide} direction="next" />
              <div className="dots-container d-flex align-items-center justify-content-center">
                {Array.from({ length: 8 }).map((item, index) => {
                  return (
                    <div
                      onClick={() => moveDots(index)}
                      className={
                        slideAnim.index === index ? "dot active" : "dot"
                      }
                    ></div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Slider;
