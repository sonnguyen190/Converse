import React, { Component } from "react";

class TopBanner extends Component {
  render() {
    return (
      <div>
        <div className="row Topbanner_row">
          <div className="col-xl Topbanner_left">
            <div>
              <img
                className="Topbanner_img"
                src="https://www.converse.com/on/demandware.static/-/Library-Sites-SharedLibrary/default/dw5f3c291d/firstspirit/media/09_global_elements/do_not_delete/technical_media_assets/us.svg"
                alt=""
              />
            </div>
            <div>
              <span className="Topbanner_us">US</span>
              <span className="Topbanner_us">|</span>
              <span className="Topbanner_us">EN</span>
            </div>
          </div>
          <div className="col-xl-8   Topbanner_middle">
            <div
              id="carouselExampleControls"
              className="carousel slide "
              data-ride="carousel"
            >
              <div className="carousel-inner  Topbanner_main_content">
                <div className="carousel-item active Topbanner_detail">
                  <span className="Topbanner_span"> 30-DAY FREE RETURNS!</span>
                  <a className="seeDetail" href="https://conversehelp.force.com/s/topic/0TO1N0000019UpZWAU/returns-exchanges">
                    See Details.
                  </a>
                </div>
                <div className="carousel-item">
                <span className="Topbanner_paywith"> Shop now. Pay with <span className="Topbanner_span">Klarna. </span> </span>
                  <a className="seeDetail" href="https://conversehelp.force.com/s/topic/0TO1N0000019UpZWAU/returns-exchanges">
                   Learn more.
                  </a>
                </div>
                <div className="carousel-item">
                <span className="Topbanner_paywith">FREE SHIPPING FOR MEMBERS! </span>
                  <a className="seeDetail" href="https://www.converse.com/login?PromoBannerTesting_MemberMessaging_Control">
                  Sign In or Sign Up to Save.
                  </a>
                </div>
              </div>
              <a
                className="carousel-control-prev "
                href="#carouselExampleControls"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon Topbanner_button"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">pre</span>
              </a>
              <a
                className="carousel-control-next "
                href="#carouselExampleControls"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon Topbanner_button"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
          <div id="Topbanner_right" className="col-xl Topbanner_right"></div>
        </div>
      </div>
    );
  }
}

export default TopBanner;
