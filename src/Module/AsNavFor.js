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
        <hr />
        <div className="div_asnavfor_title">
          UNTAMED STYLE. Get bold in signature style with a fresh pair of
          Chucks. Designed to stand out, mismatched animal prints are sure to
          turn heads. Finished with a breathable mesh lining, they're equal
          parts comfortable and stylish.
        </div>
        <ul className="div_asnavfor_title_ul_all">
          <b className="div_asnavfor_title_ul">WHY YOU SHOULD BE DOWN</b>
          <li>High-top sneaker with cotton canvas upper</li>
          <li>OrthoLite cushioning for all-day comfort</li>
          <li>A mesh lining keeps it breathable</li>
          <li>Mismatched animal prints show off your wild side</li>
          <li>conic Chuck Taylor ankle patch</li>
        </ul>
      </div>
    );
  }
}
