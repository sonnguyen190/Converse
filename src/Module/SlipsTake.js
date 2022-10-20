import React, { Component } from "react";

class SlipsTake extends Component {
  componentDidMount = () => {
    window.addEventListener("scroll", this.isMouseDown);
  };
  isMouseDown = () => {
    var reveals = document.querySelectorAll(".SlipsTake_all");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  };
  render() {
    return (
      <div className="grid wide">
        <div className="SlipsTake_all">
          <div>
            <p className="SclipTake_p">
              <span className="SclipTake_span">
                Slips Take <br />
                On Spring
              </span>
            </p>
            <p className="SclipTake_title">
              Step out in fresh new slips for spring in classic black and white{" "}
              <br />
              with premium Chuck 70 detailing.
            </p>
            <ul>
              <li>
                <a href="">
                  <span></span>
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="">
                  <span></span>
                </a>
              </li>
            </ul>
          </div>
          <img className="img_SlipsTake" src="./image/Slipstake.jpg" alt="" />
        </div>
      </div>
    );
  }
}

export default SlipsTake;
