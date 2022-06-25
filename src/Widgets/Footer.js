import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <ul className="footer_ul">
          <li>
            <a href="/">Terms of Use</a>
          </li>
          <li>
            <a href="/">Terms of Sale</a>
          </li>
          <li>
            <a href="/">Privacy Policy</a>
          </li>
          <li>
            <a href="/">CA Supply Chains Act</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Footer;
