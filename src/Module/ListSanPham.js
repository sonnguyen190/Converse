import React, { Component } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Link } from "react-router-dom";
class ListSanPham extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tien: "",
    };
  }

  handleaddToCartProcess = () => {
    this.props.handleaddToCart(this.props.listsp);
  };

  render() {
    return (
      <div
        className={`list_san_pham ${
          this.props.isShow === true ? "" : "active"
        }`}
      >
        <div
          className={`image_item ${this.props.isShow === true ? "" : "active"}`}
          style={{ backgroundImage: `url(${this.props.listsp.image})` }}
        >
          <div style={{ display: "block" }} className="overlay_addtocart">
            <div className="overlay_addtocart_div_button">
              <div className="overlay_addtocart_div_button_grid">
                <Link
                  style={{ display: "block" }}
                  className="overlay_addtocart_div_button_grid1"
                  to={`/Detail/${this.props.listsp.code}`}
                >
                  View Detail
                </Link>
                <div
                  onClick={this.handleaddToCartProcess}
                  className="overlay_addtocart_div_button_grid2"
                >
                  <AddShoppingCartIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
        <span className="name_product">{this.props.listsp.name}</span>
        <div>${this.props.listsp.price}.00</div>
      </div>
    );
  }
}

export default ListSanPham;
