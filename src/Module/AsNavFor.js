import React, { useEffect, useState } from "react";
import Slider from "react-slick";

export default function AsNavFor({ listimg, detail }) {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  if (listimg[0] != undefined) {
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
          <div>
            <div
              className="image_item_Detail"
              style={{ backgroundImage: `url(${listimg[0].img})` }}
            ></div>
          </div>
          <div>
            <div
              className="image_item_Detail"
              style={{ backgroundImage: `url(${listimg[1].img})` }}
            ></div>
          </div>
          <div>
            <div
              className="image_item_Detail"
              style={{ backgroundImage: `url(${listimg[2].img})` }}
            ></div>
          </div>
          <div>
            <div
              className="image_item_Detail"
              style={{ backgroundImage: `url(${listimg[3].img})` }}
            ></div>
          </div>
          <div>
            <div
              className="image_item_Detail"
              style={{ backgroundImage: `url(${listimg[4].img})` }}
            ></div>
          </div>
        </Slider>
        <Slider
          asNavFor={nav1}
          ref={(slider2) => setNav2(slider2)}
          slidesToShow={4}
          swipeToSlide={true}
          focusOnSelect={true}
          arrows={false}
          padding={0}
        >
          <div className="image_item_Detail_mini">
            <div
              className="image_item_Detail_mini"
              style={{ backgroundImage: `url(${detail.image})` }}
            ></div>
          </div>
          <div className="image_item_Detail_mini">
            <div
              className="image_item_Detail_mini"
              style={{ backgroundImage: `url(${listimg[0].img})` }}
            ></div>
          </div>
          <div className="image_item_Detail_mini">
            <div
              className="image_item_Detail_mini"
              style={{ backgroundImage: `url(${listimg[1].img})` }}
            ></div>
          </div>
          <div className="image_item_Detail_mini">
            <div
              className="image_item_Detail_mini"
              style={{ backgroundImage: `url(${listimg[2].img})` }}
            ></div>
          </div>
          <div className="image_item_Detail_mini">
            <div
              className="image_item_Detail_mini"
              style={{ backgroundImage: `url(${listimg[3].img})` }}
            ></div>
          </div>
          <div className="image_item_Detail_mini">
            <div
              className="image_item_Detail_mini"
              style={{ backgroundImage: `url(${listimg[4].img})` }}
            ></div>
          </div>
        </Slider>
      </div>
    );
  }
}
