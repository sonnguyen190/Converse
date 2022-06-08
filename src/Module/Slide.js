import React, { Component } from "react";
class Slide extends Component {
  render() {
    return (
      <div className="grid wide">
        <div className="Slide_all">
          <img className="Slide_img_mobile" alt="" />
        </div>
        <div className="grid wide">
          <div className="Slide_img">
            <div className="Slide_content_all">
              <p className="Slide_text_sp">
                <span className="Slide_text_span">
                  Run Star Hike <br />
                  Goes Suede
                </span>
              </p>
              <p className="Slide_text">
                The fan-favorite Run Star Hike gets an elevated <br />
                update in soft suede in black and brown for an <br />
                ultra on-trend look.
              </p>
              <ul className="ul_slide_content">
                <li className="Shop_now">
                  <a className="Shop_now_a" href="./All">
                    Shop Now
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Slide;
