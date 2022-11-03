import React, { Component } from "react";
import ListSanPham from "../Module/ListSanPham";
import MainLeft from "../Module/MainLeft";
import Skeleton from "@mui/material/Skeleton";

const axios = require("axios").default;
class AllProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list_san_pham: [],
      isShoesLoading: true,
    };
  }

  componentDidMount = () => {
    this.setState({ isShoesLoading: true });
    axios
      .get("http://localhost:8080/api/shoes")
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
  render() {
    return (
      <div className="grid wide">
        <div className="main_san_pham">
          <MainLeft />

          <div className="main_right">
            {this.state.list_san_pham.map((sp) => {
              return (
                <>
                  {this.state.isShoesLoading === true ? (
                    <Skeleton variant="rectangular" width={250} height={246} />
                  ) : (
                    <ListSanPham
                      key={sp.id}
                      listsp={sp}
                      handleaddToCart={this.props.handleaddToCart}
                    />
                  )}
                </>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default AllProduct;
