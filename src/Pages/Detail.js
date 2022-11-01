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
      addProduct: false,
    };
  }
  handleaddToCartProcess = () => {
    this.setState((prevState) => {
      prevState.addProduct = true;
      return prevState;
    });

    this.props.handleaddToCart(this.state.detail);
  };

  changeColorProcess = (color, id) => {
    var colorDefault = "random";
    console.log(typeof id);
    if (id == "" || id == undefined || id == null) {
      this.props.handleChangeColor(colorDefault);
    } else {
      this.props.handleChangeColor(color);
    }
  };

  changeSizeProcess = (size) => {
    this.props.handleChangeSize(size);
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
              <b className="b_detail_color"> Color: {this.props.color}</b>
              {this.props.validColor === true ? (
                <div className="errorSize">choose Color !!!</div>
              ) : (
                <> </>
              )}
              {this.state.listcolor.map((home, key) => (
                <button
                  id={home.id}
                  key={home.id}
                  onClick={() => this.changeColorProcess(home.color, home.id)}
                  style={{ backgroundColor: home.color }}
                  className="color_detail"
                ></button>
              ))}
            </div>
            <div>
              <b> Size: {this.props.size}</b>
              {this.props.validSize == true ? (
                <div className="errorSize">choose size !!!</div>
              ) : (
                <> </>
              )}

              <div>
                {this.state.listsize.map((home, key) => (
                  <>
                    <button
                      key={home.id}
                      className="size_detail"
                      onClick={() => this.changeSizeProcess(home.size)}
                    >
                      {home.size}
                    </button>
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
