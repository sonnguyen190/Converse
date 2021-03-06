import React, { Component } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
class ListSanPham extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tien: "",
    };
  }
  componentDidMount = () => {
    var chuoi = "1212121";

    chuoi.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    console.log(chuoi);
  };
  handleaddToCartProcess = () => {
    this.props.handleaddToCart(this.props.listsp);
  };
  render() {
    return (
      <div className="list_san_pham">
        <div
          className="image_item"
          style={{ backgroundImage: `url(${this.props.listsp.hinh_giay})` }}
        >
          <div className="overlay_addtocart">
            <div
              className="overlay_addtocart_div_button"
              onClick={this.handleaddToCartProcess}
            >
              <div className="overlay_addtocart_div_button_grid">
                <div className="overlay_addtocart_div_button_grid1">
                  Add to cart
                </div>
                <div className="overlay_addtocart_div_button_grid2">
                  <AddShoppingCartIcon />
                </div>
              </div>
            </div>
          </div>
        </div>

        <span>{this.props.listsp.ten_giay}</span>
        <div> {this.props.listsp.price} VND</div>
      </div>
    );
  }
}

export default ListSanPham;
