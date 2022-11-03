import React, { Component } from "react";
import { Link } from "react-router-dom";
class FormCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tong_tien: this.props.list_gio_hang.price,
    };
  }
  componentDidMount() {
    console.log(this.props.list_gio_hang);
  }
  handleRemoveItemCart = () => {
    this.props.RemoveItemCart(this.props.list_gio_hang);
  };
  handleGiamSl = () => {
    this.props.handlegiamSoLuong(this.props.list_gio_hang);
  };
  handleTangSl = () => {
    this.props.handleTangSoLuong(this.props.list_gio_hang);
  };

  render() {
    return (
      <div className="all_cart">
        <div className="item_gio_hang">
          <div className="img_gio_hang">
            <img src={this.props.list_gio_hang.image} alt="" />
          </div>
          <div className="title_gio_hang">
            <Link to={`/Detail/${this.props.list_gio_hang.code}`}>
              {this.props.list_gio_hang.name}
            </Link>
            <p>Price: ${this.props.list_gio_hang.price}.00 </p>
            <b style={{ marginRight: " 10px" }}>
              Color: {this.props.list_gio_hang.colorr}{" "}
            </b>
            <b>Size: {this.props.list_gio_hang.sizee} </b>
            <div className="quantity_cart">
              Quantity:
              <button
                className="button_chage_quantity"
                onClick={this.handleGiamSl}
              >
                -
              </button>
              {this.props.list_gio_hang.quantity}
              <button
                className="button_chage_quantity"
                onClick={this.handleTangSl}
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div className="option_cart">
          <p onClick={this.handleRemoveItemCart}>X</p>
        </div>
      </div>
    );
  }
}

export default FormCart;
