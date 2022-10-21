import React, { useState } from "react";
import Slider from "react-slick";

export default function AsNavFor({ detail }) {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  return (
    <div>
      <Slider
        className="slider_asnav"
        asNavFor={nav2}
        ref={(slider1) => setNav1(slider1)}
        arrows={false}
        padding={0}
        margin={0}
      >
        <div>
          <div
            className="image_item_Detail"
            style={{ backgroundImage: `url(${detail.image})` }}
          ></div>
        </div>
        <div>3</div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
      <Slider
        asNavFor={nav1}
        ref={(slider2) => setNav2(slider2)}
        slidesToShow={3}
        swipeToSlide={true}
        focusOnSelect={true}
        arrows={false}
        padding={0}
      >
        <div>
          <div
            className="image_item_Detail_mini"
            style={{ backgroundImage: `url(${detail.image})` }}
          ></div>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
}
