import React, { Component } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
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
      <div className="list_san_pham">
        <div
          className="image_item"
          style={{ backgroundImage: `url(${this.props.listsp.image})` }}
        >
          <div style={{ display: "block" }} className="overlay_addtocart">
            <div className="overlay_addtocart_div_button">
              <div className="overlay_addtocart_div_button_grid">
                <a
                  style={{ display: "block" }}
                  className="overlay_addtocart_div_button_grid1"
                  href={`/Detail/${this.props.listsp.code}`}
                >
                  View Detail
                </a>
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
        <span>{this.props.listsp.name}</span>
        <div>${this.props.listsp.price}</div>
      </div>
    );
  }
}

export default ListSanPham;
