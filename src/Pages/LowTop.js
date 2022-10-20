import React, { Component } from "react";
import ListSanPham from "../Module/ListSanPham";
import MainLeft from "../Module/MainLeft";

const axios = require("axios").default;
class LowTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list_san_pham: [],
    };
  }

  componentDidMount = () => {
    axios.get("http://localhost:8080/converse/LowTop").then((response) => {
      this.setState((prev) => {
        prev.list_san_pham = response.data;
        return prev;
      });
    });
  };
  render() {
    return (
      <div className="grid wide">
        <div className="main_san_pham">
          <MainLeft />

          <div className="main_right">
            {this.state.list_san_pham.map((sp) => {
              return (
                <ListSanPham
                  key={sp.id}
                  listsp={sp}
                  handleaddToCart={this.props.handleaddToCart}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default LowTop;
