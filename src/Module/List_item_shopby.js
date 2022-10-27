import React, { Component } from "react";
import { Link } from "react-router-dom";

class List_item_shopby extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: "",
    };
  }
  componentDidMount = () => {
    window.addEventListener("scroll", this.isMouseDown);
  };
  isMouseDown = () => {
    var reveals = document.querySelectorAll(".Trending_style");

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
        <div className="Trending_Style_all">
          <div className="Trending_style">
            <div className="Trending_style_img5 ">
              <Link to="/HighTop">
                <div className="overlay_trending">SHOP HIGH TOPS</div>
                <div className="Trending_style_span">HIGH TOPS</div>
              </Link>
            </div>
          </div>
          <div className="Trending_style">
            <div className="Trending_style_img6">
              <Link to="/LowTop">
                <div className="overlay_trending">
                  <span className="overlay_trending_span">SHOP LOW TOPS</span>
                </div>
                <div className="Trending_style_span">LOW TOPS</div>
              </Link>
            </div>
            <div></div>
          </div>
          <div className="Trending_style">
            <div className="Trending_style_img7">
              <Link to="/PlatForms">
                <div className="overlay_trending">
                  <span className="overlay_trending_span">SHOP PLATFORMS</span>
                </div>
                <div className="Trending_style_span">PLATFORMS</div>
              </Link>
            </div>
            <div></div>
          </div>
          <div className="Trending_style">
            <div className="Trending_style_img8">
              <div className="overlay_trending">
                <span className="overlay_trending_span">SHOP CUSTOM</span>
              </div>
              <div className="Trending_style_span">CUSTOM</div>
            </div>
            <div></div>
          </div>
        </div>
        {/* <div  className="item_shopbystyle">
          <div class="Button_item">
            <a href="" data-aos="zoom-in">
                <div className="middle_item_shopbystyle">
                   <div className="title_shopbysyle">SHOP<br />HIGH TOPS</div> 
                </div>
              <img
                className="img_item"
                src="https://www.converse.com/on/demandware.static/-/Library-Sites-SharedLibrary/default/dw14b798dc/firstspirit/media/homepage_1/2022_summer/04_1/D-Converse-NA-04-05-22-HP-SHOP-BY-STYLE-1.jpg"
                alt=""
              />
            </a>
          </div>
          <div class="Button_item">
            <a href="" data-aos="zoom-in">
            <div className="middle_item_shopbystyle">
                   <div className="title_shopbysyle">SHOP<br />LOW TOPS</div> 
                </div>
              <img
                className="img_item"
                src="https://www.converse.com/on/demandware.static/-/Library-Sites-SharedLibrary/default/dwf586b400/firstspirit/media/homepage_1/2022_summer/04_1/D-Converse-NA-04-05-22-HP-SHOP-BY-STYLE-2.jpg"
                alt=""
              />
            </a>
          </div>
          <div class=" Button_item">
            <a href="" data-aos="zoom-in">
            <div className="middle_item_shopbystyle">
                   <div className="title_shopbysyle">SHOP<br />PLATFORMS</div> 
                </div>
              <img
                className="img_item"
                src="https://www.converse.com/on/demandware.static/-/Library-Sites-SharedLibrary/default/dwd8600528/firstspirit/media/homepage_1/2022_summer/04_1/D-Converse-NA-04-05-22-HP-SHOP-BY-STYLE-3.jpg"
                alt=""
              />
            </a>
          </div>
          <div class=" Button_item">
            <a href="" data-aos="zoom-in">
            <div className="middle_item_shopbystyle">
                   <div className="title_shopbysyle">SHOP<br />CUSTOM</div> 
                </div>
              <img
                className="img_item"
                src="https://www.converse.com/on/demandware.static/-/Library-Sites-SharedLibrary/default/dw62358e56/firstspirit/media/homepage_1/2022_summer/04_1/D-Converse-NA-04-05-22-HP-SHOP-BY-STYLE-4~1.jpg"
                alt=""
              />
            </a>
          </div>
        </div> */}
      </div>
    );
  }
}

export default List_item_shopby;
