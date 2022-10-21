import React, { Component } from "react";
import FormCart from "../Module/FormCart";
import { Link } from "react-router-dom";
class GioHang extends Component {
  handleRemoveAllCart = () => {
    this.props.remove_all_cart();
  };

  render() {
    return (
      <div className="grid wide">
        <div className="grid_gio_hang wide_gio_hang">
          <h2>Giỏ Hàng</h2>
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
                <div>Tổng sản phẩm: {this.props.so_luong_gio_hang}</div>
                <div
                  style={{ color: "red" }}
                  className="clear_all_cart"
                  onClick={this.handleRemoveAllCart}
                >
                  Clear All
                </div>
              </div>

              {this.props.mang_gio_hang.map((sp) => {
                return (
                  <FormCart
                    key={sp.id}
                    list_gio_hang={sp}
                    RemoveItemCart={this.props.RemoveItemCart}
                    handlegiamSoLuong={this.props.handlegiamSoLuong}
                    handletangSL={this.props.handletangSL}
                    RemoveAllItemCart={this.props.RemoveAllItemCart}
                  />
                );
              })}
              <div>tổng tiền là:{this.props.tong_tien} VND</div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default GioHang;
