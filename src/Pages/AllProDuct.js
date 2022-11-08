import React, { Component } from "react";
import ListSanPham from "../Module/ListSanPham";
import MainLeft from "../Module/MainLeft";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
const axios = require("axios").default;
class AllProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list_san_pham: [],
      isShoesLoading: true,
      isShow: true,
    };
  }

  componentDidMount = () => {
    this.setState({ isShoesLoading: true });
    axios
      .get("http://localhost:8080/api/shoes")
      .then((response) => {
        this.setState((prev) => {
          prev.list_san_pham = response.data;
          return prev;
        });
      })
      .finally(() => {
        this.setState({ isShoesLoading: false });
      });
  };

  handleOnclickHighTop = () => {
    this.setState({ isShoesLoading: true });
    axios
      .get("http://localhost:8080/api/shoes?text=hightop")
      .then((response) => {
        console.log(response);
        this.setState((prev) => {
          prev.list_san_pham = response.data;
          return prev;
        });
      })
      .finally(() => {
        this.setState({ isShoesLoading: false });
      });
  };
  handleOnclickShowFilter = () => {
    console.log(this.state.isShow);
    this.setState({ isShow: !this.state.isShow });
  };

  render() {
    return (
      <div className="grid wide">
        <div
          className={`main_san_pham ${
            this.state.isShow === true ? "" : "active"
          }`}
        >
          {this.state.isShoesLoading === true ? (
            <Box className="loading_checkout" sx={{ display: "flex" }}>
              <CircularProgress className="icon_loading" />
            </Box>
          ) : (
            <>
              <MainLeft
                handleOnclickHighTop={this.handleOnclickHighTop}
                isShow={this.state.isShow}
                handleOnclickShowFilter={this.handleOnclickShowFilter}
              />
              <div className="">
                <div className="bar_Product">
                  {this.state.list_san_pham.length} Results
                </div>
                <div
                  className={`main_right ${
                    this.state.isShow === true ? "" : "active"
                  }`}
                >
                  {this.state.list_san_pham.map((sp) => {
                    return (
                      <>
                        <ListSanPham
                          isShow={this.state.isShow}
                          key={sp.id}
                          listsp={sp}
                          handleaddToCart={this.props.handleaddToCart}
                        />
                      </>
                    );
                  })}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    );
  }
}

export default AllProduct;
