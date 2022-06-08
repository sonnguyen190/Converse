import React, { Component } from "react";

class FormCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tong_tien: this.props.list_gio_hang.price,
    };
  }
  handleRemoveItemCart = () => {
    this.props.RemoveItemCart(this.props.list_gio_hang);
  };
  handleGiamSl = () => {
    this.props.handlegiamSoLuong(this.props.list_gio_hang);
  };
  handleTangSl = () => {
    this.props.handletangSL(this.props.list_gio_hang);
  };

  render() {
    return (
      <div className="all_cart">
        <div className="item_gio_hang">
          <div className="img_gio_hang">
            <img src={this.props.list_gio_hang.hinh_giay} alt="" />
          </div>
          <div className="title_gio_hang">
            <a href="">{this.props.list_gio_hang.ten_giay}</a>
            <p>Giá Tiền: {this.state.tong_tien} VND</p>
            <div className="quantity_cart">
              Số Lượng: <button onClick={this.handleGiamSl}>-</button>
              {this.props.list_gio_hang.quantity}
              <button onClick={this.handleTangSl}>+</button>
            </div>
          </div>
        </div>
        <div className="option_cart">
          <p onClick={this.handleRemoveItemCart}>remove</p>
        </div>
      </div>
    );
  }
}

export default FormCart;
