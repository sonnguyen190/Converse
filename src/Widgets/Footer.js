import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="head_footer">
          <div className="head_footer_item">
            <div className="head_footer_item_1">
              <div className="head_footer_item_1_title">Never Miss a Beat</div>
              <div className="head_footer_item_1_content">
                Be the first to hear about product launches, collaborations, and
                more when you sign up for our emails.
              </div>
              <div>
                <input type="email" name="" id="" />
                <button type="submit"></button>
              </div>
            </div>
          </div>
          <div className="head_footer_item">
            <div>
              <a style={{ display: "block" }} href="">
                Find a Store
              </a>

              <a style={{ display: "block" }} href="">
                Gift Cards
              </a>
              <div>Follow Us: Thư ciuteeee</div>
            </div>
          </div>
          <div className="head_footer_item">
            <div>
              <div>Get Help</div>
              <ul>
                <li>
                  <a href="/"> Order Status</a>
                </li>
                <li>
                  <a href="/">Shipping & Delivery</a>
                </li>
                <li>
                  <a href="/">Contact Us</a>
                </li>
                <li>
                  <a href="/">Returns & Exchanges</a>
                </li>
                <li>
                  <a href="/">Payment Options</a>
                </li>
                <li>
                  <a href="/">FAQs</a>
                </li>
                <li>
                  <a href="/">Student Discounts</a>
                </li>
                <li>
                  <a href="/">Military Discounts</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="head_footer_item">
            <div>
              <div>About Converse</div>
              <ul>
                <li>
                  <a href="/">Careers & Culture</a>
                </li>
                <li>
                  <a href="/">Retail Stores</a>
                </li>
                <li>
                  <a href="/">Nike.com</a>
                </li>
                <li>
                  <a href="/">Jordan.com</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    );
  }
}

export default Footer;
