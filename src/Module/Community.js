import React, { Component } from "react";

class Community extends Component {
  componentDidMount = () => {
    window.addEventListener("scroll", this.isMouseDown);
  };
  isMouseDown = () => {
    var reveals = document.querySelectorAll(".background1community");
    var reveals2 = document.querySelectorAll(".background2community");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 350;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
        reveals2[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
        reveals2[i].classList.remove("active");
      }
    }
  };
  render() {
    return (
      <div className="grid wide">
        <div className="content_ShopByStyle">
          <span className="Shopbystyle_span">From Our Community</span> <br />
        </div>

        <div className="Community_all">
          <div className="background1community"></div>
          <div className="background2community">
            <div className="background21community">
              <h1>
                <span>
                  Show Us <br /> Your Style
                </span>
              </h1>
              <p>
                Tag @Converse on Instagram with <br /> #ConverseStyle for a
                chance to be featured.
              </p>
            </div>
            <div className="background22community">
              <div className="community221"></div>
              <div className="community222"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Community;
