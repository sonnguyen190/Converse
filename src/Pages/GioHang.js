import React, { Component } from "react";
import FormCart from "../Module/FormCart";
import Alert from "@mui/material/Alert";
import { Link, useNavigate } from "react-router-dom";
class GioHang extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mang_localstorage: [],
      tong: 0,
      user: null,
    };
  }
  componentDidMount() {
    let data_string_manggiohang = localStorage.getItem("cart");
    let user = localStorage.getItem("user");
    this.setState((pre) => {
      pre.user = user;
      return pre;
    });
    if (
      data_string_manggiohang &&
      data_string_manggiohang !== "undefined" &&
      data_string_manggiohang !== "null"
    ) {
      let mang = JSON.parse(data_string_manggiohang);

      this.setState((pre) => {
        pre.mang_localstorage = mang;
        return pre;
      });
      this.handleTinhTongTien2(mang);
    }
  }
  handleTinhTongTien2 = (mang) => {
    let tong = 0;
    for (var i = 0; i < mang.length; i++) {
      tong += mang[i].price * mang[i].quantity;
    }
    this.setState((pre) => {
      pre.tong = tong;
      return pre;
    });
  };
  handleChangePage = () => {
    let useNavigate = useNavigate();

    let user = this.state.user;
    if (user === null || user === "undefined") {
      alert("login required");
    } else {
      useNavigate("/confirm");
    }
  };

  handleRemoveAllCart = () => {
    this.props.remove_all_cart();
  };
  render() {
    return (
      <div className="grid wide">
        {this.state.user === null ? (
          <></>
        ) : (
          <div className="grid_gio_hang wide_gio_hang">
            <h2>Cart</h2>
            {this.props.so_luong_gio_hang == 0 ? (
              <div>
                <img
                  src="https://www.novelty.com.vn/assets/empty_cart.jpeg"
                  alt=""
                />
                <Link className="link_icon_cart" to={"/All"}>
                  <button className="button_quay_lai">Continute Buy</button>
                </Link>
              </div>
            ) : (
              <div className="all_gio_hang_gia">
                <div className="all_and_clear_all">
                  <div>{this.props.so_luong_gio_hang} Items in Cart</div>
                  <div
                    className="clear_all_cart"
                    onClick={this.handleRemoveAllCart}
                  >
                    X
                  </div>
                </div>

                {this.props.mang_gio_hang.map((sp, key) => {
                  return (
                    <FormCart
                      handleTangSoLuong={this.props.handleTangSoLuong}
                      key={key}
                      list_gio_hang={sp}
                      RemoveItemCart={this.props.RemoveItemCart}
                      handlegiamSoLuong={this.props.handlegiamSoLuong}
                      addToCart={this.props.addToCart}
                      RemoveAllItemCart={this.props.RemoveAllItemCart}
                    />
                  );
                })}
                <hr />
                <div className="price_cart">
                  <div className="price_cart_div">
                    ${this.props.tong_tien}.00
                  </div>
                  <Link to={"/Checkout"} className="button_buy_cart">
                    Buy
                  </Link>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default GioHang;
