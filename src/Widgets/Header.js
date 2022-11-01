import React, { Component } from "react";
import Navbar from "../Module/Navbar";

import TopBanner from "../Module/TopBanner";

class Header extends Component {
  render() {
    return (
      <div>
        <TopBanner />
        <Navbar count={this.props.count} />
      </div>
    );
  }
  S;
}

export default Header;
