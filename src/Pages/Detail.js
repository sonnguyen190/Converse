import React, { Component } from "react";
import { useParams } from "react-router-dom";
import Alert from "@mui/material/Alert";
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
      activeLink: null,
      active_color: null,
      isUser: null,
    };
  }
  handleaddToCartProcess = () => {
    this.setState((prevState) => {
      prevState.activeLink = null;
      prevState.active_color = null;
      return prevState;
    });
    if (
      this.state.activeLink !== null &&
      this.state.active_color !== null &&
      this.state.isUser !== null
    ) {
      this.setState((prevState) => {
        prevState.addProduct = true;
        return prevState;
      });
    }
    setTimeout(() => {
      this.setState({
        addProduct: false,
      });
    }, 2000);

    this.props.handleaddToCart(this.state.detail);
  };

  changeColorProcess = (color, id) => {
    this.setState({ active_color: id });

    this.props.handleChangeColor(color);
  };

  changeSizeProcess = (size, id) => {
    this.setState({ activeLink: id });
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
    let user = localStorage.getItem("user");
    this.setState({
      isUser: user,
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
            {this.state.addProduct === true ? (
              <Alert className="alert_addtoCart" severity="success">
                Add Complete !!!
              </Alert>
            ) : (
              <></>
            )}

            <h3>${this.state.detail.price}.00</h3>
            <h6>Code: {this.state.detail.code}</h6>
            <h4>{this.state.detail.name}</h4>
            <div>{this.state.detail.title}</div>
            <div className="div_color_scale">
              <b className="b_detail_color"> Color: </b>
              {this.props.validColor === true ? (
                <div className="errorSize">choose Color !!!</div>
              ) : (
                <> </>
              )}
              {this.state.listcolor.map((home, key) => (
                <button
                  key={key}
                  onClick={() => this.changeColorProcess(home.color, home.id)}
                  style={{ backgroundColor: home.color }}
                  className={
                    `color_detail` +
                    (home.id === this.state.active_color ? "active_item" : "")
                  }
                ></button>
              ))}
            </div>
            <div>
              <b> Size: </b>
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
                      className={
                        `size_detail` +
                        (home.id === this.state.activeLink ? "active_item" : "")
                      }
                      onClick={() => this.changeSizeProcess(home.size, home.id)}
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
