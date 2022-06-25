import React, { Component } from "react";

class Community extends Component {
  render() {
    return (
      <div className="grid wide">
        <div className="content_ShopByStyle">
          <span className="Shopbystyle_span">From Our Community</span> <br />
        </div>

        <div className="Community_all">
          <div className="background1community"></div>
          <div>
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
