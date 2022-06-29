import React, { Component } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

class footerfake extends Component {
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
              <div className="head_footer_item_1_input_email">
                <input
                  className="head_footer_item_1_content_input"
                  type="email"
                  placeholder="Enter your email address"
                />
                <button
                  type="submit"
                  className="head_footer_item_1_content_button"
                >
                  <ArrowForwardIcon />
                </button>
              </div>
            </div>
          </div>
          <div className="head_footer_item">
            <div className="head_footer_item_2">
              <a
                className="head_footer_item_2_a"
                style={{ display: "block" }}
                href=""
              >
                Find a Store
              </a>

              <a style={{ display: "block" }} href="">
                Gift Cards
              </a>
              <div className="head_footer_item_2_folow">Follow Us:</div>
            </div>
          </div>
          <div className="head_footer_item">
            <div className="head_footer_item_3">
              <div className="head_footer_item_3_title">Get Help</div>
              <ul className="head_footer_item_3_ul">
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
            <div className="head_footer_item_3">
              <div className="head_footer_item_3_title">About Converse</div>
              <ul className="head_footer_item_3_ul">
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

export default footerfake;
