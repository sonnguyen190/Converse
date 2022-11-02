import React, { Component } from "react";
import FormCart from "../Module/FormCart";
import { Link } from "react-router-dom";
class GioHang extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mang_localstorage: [],
      tong: 0,
    };
  }
  componentDidMount() {
    let data_string_manggiohang = localStorage.getItem("cart");

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

  handleRemoveAllCart = () => {
    this.props.remove_all_cart();
  };
  render() {
    return (
      <div className="grid wide">
        <div className="grid_gio_hang wide_gio_hang">
          <h2>Cart</h2>
          {this.props.so_luong_gio_hang == 0 ? (
            <div>
              <img
                src="https://www.novelty.com.vn/assets/empty_cart.jpeg"
                alt=""
              />
              <Link className="link_icon_cart" to={"/All"}>
                <button className="button_quay_lai">Tiếp Tục Mua Hàng</button>
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
                <div className="price_cart_div">${this.props.tong_tien}.00</div>
                <button className="button_buy_cart">Buy</button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default GioHang;
