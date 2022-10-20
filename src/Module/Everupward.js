import React, { Component } from "react";

class Everupward extends Component {
  componentDidMount = () => {
    window.addEventListener("scroll", this.isMouseDown);
  };
  isMouseDown = () => {
    var reveals = document.querySelectorAll(".Ever_upward_all");

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
        <div className="Ever_upward_all">
          <div className="Ever_over">
            <div className="ever_upward_form">
              <p className="ever_upward_p">Ever Upward</p>
              <p>
                There’s nowhere to go but up when you’re <br /> in platform
                Chucks.
              </p>
              <ul>
                <li className="li_ever">
                  <a className="link_Ever" href="">
                    Shop Platforms
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a className="link_custom_wedding" href="">
                    <span className="span_custom_wedding">
                      CUSTOMIZE YOUR OWN
                    </span>
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

export default Everupward;
