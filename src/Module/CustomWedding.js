import React, { Component } from "react";

class CustomWedding extends Component {
  componentDidMount = () => {
    window.addEventListener("scroll", this.isMouseDown);
  };
  isMouseDown = () => {
    var reveals = document.querySelectorAll(".CustomWedding");

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
        <div className="CustomWedding">
          <div className="Title_Custom">
            <div className="title_custom_con">
              <p className="I_Do">"I Do" By You</p>
              <p>
                Customize Chucks for your big day and every <br />
                event along the way. Create with leather, lace, <br />
                and wedding-themed details.
              </p>
              <ul>
                <li>
                  <a className="link_custom_wedding" href="">
                    {" "}
                    <span className="span_custom_wedding">
                      {" "}
                      SHOP CUSTOM WEDDING{" "}
                    </span>
                  </a>
                </li>
              </ul>
              <ul className="ul_learnmore">
                <li>
                  <a className="link_Learn_more" href="">
                    {" "}
                    <span className="span_Learn_more"> Learn More </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* <div> <img className='img_CustomWedding' src="https://www.converse.com/on/demandware.static/-/Library-Sites-SharedLibrary/default/dwc6fe30ef/firstspirit/media/homepage_1/2022_spring/03_35/D-CONVERSE-GBL-03-03-22-HP-CUSTOM-WEDDING-1.jpg" alt="" /> </div> */}
          <div className="img_CustomWedding1"></div>
          <div className="img_CustomWedding2"></div>
          <div>
            <img
              className="img_CustomWedding_mobile"
              src="https://www.converse.com/on/demandware.static/-/Library-Sites-SharedLibrary/default/dw4306f720/firstspirit/media/homepage_1/2022_spring/03_35/M-CONVERSE-GBL-03-03-22-HP-CUSTOM-WEDDING-2.gif"
              alt=""
            />
          </div>
        </div>

        <div className="title_custom_con_mobile">
          <p className="I_Do_mobile">"I Do" By You</p>
          <p className="title_custom_p">
            {" "}
            Put your twist on tradition, right down to your shoes. Customize
            wedding Chucks with personalized details—now in platforms, leather,
            and lace.
          </p>
          <ul className="ul_custom_mobile">
            <li className="li_custom_wedding">
              <a className="link_custom_wedding" href="">
                {" "}
                <span className="span_custom_wedding">
                  {" "}
                  SHOP CUSTOM WEDDING{" "}
                </span>
              </a>
            </li>
          </ul>
          <ul className="ul_learnmore_mobile">
            <li>
              <a className="link_Learn_more_mobile" href="">
                {" "}
                <span className="span_Learn_more_mobile"> Learn More </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default CustomWedding;
