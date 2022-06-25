import React, { Component } from "react";
import Content from "../Widgets/Content";
import Slide from "../Module/Slide";
import CustomWedding from "../Module/CustomWedding";
import Everupward from "../Module/Everupward";
import List_item_shopby from "../Module/List_item_shopby";
import ShopByStyle from "../Module/ShopByStyle";
import SignUpForEmail from "../Module/SignUpForEmail";
import SlipsTake from "../Module/SlipsTake";
import TrendingStyles from "../Module/TrendingStyles";
import Community from "../Module/Community";
class TrangChu extends Component {
  render() {
    return (
      <div>
        <Slide />
        <ShopByStyle />
        <List_item_shopby />
        <CustomWedding />
        <SlipsTake />
        <Everupward />
        <TrendingStyles />
        <Community />
        <SignUpForEmail />
      </div>
    );
  }
}

export default TrangChu;
