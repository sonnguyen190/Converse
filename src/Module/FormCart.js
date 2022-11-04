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

            <p className="priunit">${this.props.list_gio_hang.price}.00 </p>
            <div className="shoe_size_cart">
              Shoe Size: {this.props.list_gio_hang.sizee}
            </div>

            <div className="shoe_size_cart" style={{ marginRight: " 10px" }}>
              Color: {this.props.list_gio_hang.colorr}{" "}
            </div>
          </div>
          <div className="quantity_cart">
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
          <div>
            <p className="priunit1">${this.props.list_gio_hang.amount}.00 </p>
          </div>
        </div>
        <div className="option_cart">
          <p onClick={this.handleRemoveItemCart}>DELETE</p>
        </div>
      </div>
    );
  }
}

export default FormCart;
