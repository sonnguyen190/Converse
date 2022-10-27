import React, { Component } from "react";
import { useParams } from "react-router-dom";
import AsNavFor from "../Module/AsNavFor";
const axios = require("axios").default;
function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: [],
      listimg: [],
      listcolor: [],
      listsize: [],
    };
  }
  handleaddToCartProcess = () => {
    this.props.handleaddToCart(this.state.detail);
  };
  componentDidMount = () => {
    let { id } = this.props.params;
    axios
      .get(`http://localhost:8080/api/shoess?text=${id}`)
      .then((response) => {
        this.setState((prev) => {
          prev.detail = response.data;
          prev.listimg = response.data.listimage;
          prev.listcolor = response.data.color;
          prev.listsize = response.data.size;
          return prev;
        });
        console.log(response.data);
      });
  };

  render() {
    return (
      <div className="grid wide">
        <div className="All_Detail">
          <AsNavFor
            listcolor={this.state.listcolor}
            listimg={this.state.listimg}
            detail={this.state.detail}
          />

          <div className="title_detail">
            <h3>${this.state.detail.price}</h3>
            <h6>Code: {this.state.detail.code}</h6>
            <h4>{this.state.detail.name}</h4>
            <div>{this.state.detail.title}</div>
            <div>
              <b> Color:</b>
              {this.state.listcolor.map((home) => (
                <button
                  style={{ backgroundColor: home.color }}
                  className="color_detail"
                ></button>
              ))}
            </div>
            <div>
              <b> Size:</b>
              <div>
                {this.state.listsize.map((home) => (
                  <>
                    <button className="size_detail">{home.size}</button>
                  </>
                ))}
              </div>
            </div>
            <button
              onClick={this.handleaddToCartProcess}
              className="Detail_btn_addtocart"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withParams(Detail);
