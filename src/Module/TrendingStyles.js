import React, { Component } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
class TrendingStyles extends Component {
  render() {
    return (
      <div className="grid wide">
        <div className="ShopByStyle_all">
          <div className="content_ShopByStyle">
            <span className="Shopbystyle_span">Trending Styles</span> <br />
            <ArrowForwardIcon />
            <a className="Shopbystyle_link" href="">
              Shop All Trending Styles
            </a>
          </div>
        </div>
       
        <div className="Trending_Style_all">
          
            <div className="Trending_style">
              <div
                className="Trending_style_img1"
              >
                  <div className="overlay_trending"><span className="overlay_trending_span">SHOP CHUCK 70</span></div>
                <span className="Trending_style_span">Chuck 70</span>
              </div>
              
            </div>
            <div className="Trending_style">
              <div
               
                className="Trending_style_img2"
              >
                <div className="overlay_trending"><span className="overlay_trending_span">SHOP SLIP-ONS</span></div>
                <span className="Trending_style_span">Slip-Ons</span>
              </div>
              <div></div>
            </div>
            <div className="Trending_style">
              <div
         
                className="Trending_style_img3"
              >
                <div className="overlay_trending"><span className="overlay_trending_span">SHOP ESSENTIALS</span></div>
              <span className="Trending_style_span">Essentials</span>  
              </div>
              <div></div>
            </div>
            <div className="Trending_style">
              <div
              
                className="Trending_style_img4"
              >
                <div className="overlay_trending"><span className="overlay_trending_span">SHOP KIDS</span></div>
               <span className="Trending_style_span">Kids</span> 
              </div>
              <div></div>
            </div>
          </div>
       
      </div>
    );
  }
}

export default TrendingStyles;
