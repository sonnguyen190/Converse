import React, { Component } from "react";
import SanPham from "../Pages/SanPham";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LowTop from "../Pages/LowTop";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import PlatForms from "../Pages/PlatForms";
import { confirmAlert } from "react-confirm-alert";
import AllProduct from "../Pages/AllProDuct";
import GioHang from "../Pages/GioHang";

import TrangChu from "../Pages/TrangChu";
import Detail from "../Pages/Detail";
import Checkout from "../Pages/Checkout";
import Order from "../Pages/Order";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mang_gio_hang: [],
      so_luong_gio_hang: 0,
      tong_tien: 0,
      color: "",
      size: "",
      validSize: false,
      validColor: false,
      isUser: null,
    };
  }

  componentDidMount() {
    let data_string_manggiohang = localStorage.getItem("cart");
    let user = localStorage.getItem("user");
    this.setState((pre) => {
      pre.isUser = user;
      return pre;
    });
    if (
      data_string_manggiohang &&
      data_string_manggiohang !== "undefined" &&
      data_string_manggiohang !== "null"
    ) {
      let mang = JSON.parse(data_string_manggiohang);

      this.setState((pre) => {
        pre.mang_gio_hang = mang;
        return pre;
      });
      this.handleAllItemCart(mang);
      this.handleTinhTongTien(mang);
    }
  }

  addToCart = (item) => {
    let isuser = this.state.isUser;
    let mang = this.state.mang_gio_hang;
    item.colorr = this.state.color;
    item.sizee = this.state.size;
    if (isuser == null) {
      alert("login required");
    } else {
      if (this.state.size == "") {
        this.setState((prevState) => {
          prevState.validSize = true;
          return prevState;
        });
      } else if (this.state.color == "") {
        this.setState((prevState) => {
          prevState.validColor = true;
          return prevState;
        });
      } else {
        this.setState((prevState) => {
          prevState.validSize = false;
          prevState.validColor = false;
          return prevState;
        });
        if (mang) {
          let flag = 0;

          for (var i = 0; i < mang.length; i++) {
            if (item.colorr === "") {
              item.colorr = "random";
            }
            if (
              mang[i].id === item.id &&
              mang[i].colorr === item.colorr &&
              mang[i].sizee === item.sizee
            ) {
              mang[i].quantity += 1;
              mang[i].amount = mang[i].price * mang[i].quantity;
              flag = 1;
            }
          }
          if (flag == 0) {
            item.quantity = 1;
            item.amount = item.price * 1;
            mang.push(item);
          }
        } else {
          item.quantity = 1;
          item.amount = item.price * 1;
          mang.push(item);
        }

        this.setState((prevState) => {
          prevState.mang_gio_hang = mang;
          prevState.color = "";
          prevState.size = "";
          return prevState;
        });

        this.handleAllItemCart(mang);
        this.handleTinhTongTien(mang);
        this.saveLocalstorate(mang);
      }
    }
  };

  handleAllItemCart = (mang) => {
    let tong = 0;
    for (var i = 0; i < mang.length; i++) {
      tong += mang[i].quantity;
    }
    this.setState((prevState) => {
      prevState.so_luong_gio_hang = tong;
      return prevState;
    });
  };

  handleTinhTongTien = (mang) => {
    let tong = 0;
    for (var i = 0; i < mang.length; i++) {
      tong += mang[i].price * mang[i].quantity;
    }
    this.setState((pre) => {
      pre.tong_tien = tong;
      return pre;
    });
  };

  handlegiamSoLuong = (item) => {
    let mang = this.state.mang_gio_hang;
    for (var i = 0; i < mang.length; i++) {
      if (
        mang[i].id == item.id &&
        mang[i].colorr === item.colorr &&
        mang[i].sizee === item.sizee
      ) {
        if (mang[i].quantity > 1) {
          mang[i].quantity -= 1;
          mang[i].amount = mang[i].price * mang[i].quantity;
        } else {
          this.RemoveItemCart(mang[i]);
        }
      }
    }
    this.setState((prevState) => {
      prevState.mang_gio_hang = mang;
      return prevState;
    });
    this.saveLocalstorate(mang);
    this.handleAllItemCart(mang);
    this.handleTinhTongTien(mang);
  };

  handleTangSoLuong = (item) => {
    let mang = this.state.mang_gio_hang;
    for (var i = 0; i < mang.length; i++) {
      if (
        mang[i].id == item.id &&
        mang[i].colorr === item.colorr &&
        mang[i].sizee === item.sizee
      ) {
        if (mang[i].quantity >= 1) {
          mang[i].quantity += 1;
          mang[i].amount = mang[i].price * mang[i].quantity;
        } else {
          //do nothing
        }
      }
    }
    this.setState((prevState) => {
      prevState.mang_gio_hang = mang;
      return prevState;
    });
    this.saveLocalstorate(mang);
    this.handleAllItemCart(mang);
    this.handleTinhTongTien(mang);
  };

  RemoveItemCart = (item) => {
    let mang = this.state.mang_gio_hang;
    for (var i = 0; i < mang.length; i++) {
      if (
        mang[i].id == item.id &&
        mang[i].sizee == item.sizee &&
        mang[i].colorr == item.colorr
      ) {
        mang.splice(i, 1);
      }
    }
    this.setState((prevState) => {
      prevState.mang_gio_hang = mang;
      return prevState;
    });
    this.saveLocalstorate(mang);
    this.handleAllItemCart(mang);
    this.handleTinhTongTien(mang);
  };

  removeCart = () => {
    const options = {
      customUI: ({ onClose }) => {
        return (
          <div className="popup_are_you_sure">
            <div className="overlay_register"></div>
            <div className="popup_are_you_sure_delete_all_cart">
              <h1>Are you sure?</h1>
              <p>You want to delete ALL PRODUCT?</p>

              <button
                className="button_no_delete_it"
                onClick={onClose}
                variant="contained"
              >
                NO
              </button>
              <button
                className="button_are_you_sure_delete_it"
                onClick={() => {
                  this.setState((prevState) => {
                    prevState.mang_gio_hang = [];
                    return prevState;
                  });
                  this.handleAllItemCart([]);
                  this.handleTinhTongTien([]);
                  this.saveLocalstorate([]);
                  onClose();
                }}
                variant="danger"
                startIcon={<DeleteIcon />}
              >
                YES
              </button>
            </div>
          </div>
        );
      },
    };
    confirmAlert(options);
  };

  saveLocalstorate = (mang_gio_hang) => {
    if (mang_gio_hang === "complete") {
      this.setState((prevState) => {
        prevState.mang_gio_hang = [];
        prevState.so_luong_gio_hang = 0;
        prevState.tong_tien = 0;
        return prevState;
      });
      localStorage.setItem("cart", []);
    } else {
      let data_save = JSON.stringify(mang_gio_hang);
      localStorage.setItem("cart", data_save);
    }
  };

  handleChangeColor = (color) => {
    if (color) {
      this.setState((prevState) => {
        prevState.color = color;
        return prevState;
      });
    }
  };
  handleChangeColor = (color) => {
    if (color) {
      this.setState((prevState) => {
        prevState.color = color;
        return prevState;
      });
    } else {
      this.setState((prevState) => {
        prevState.color = "random";
        return prevState;
      });
    }
  };
  handleChangeSize = (size) => {
    if (size) {
      this.setState((prevState) => {
        prevState.size = size;
        return prevState;
      });
    }
  };

  render() {
    return (
      <div>
        <Routes>
          <Route
            path="/"
            element={<TrangChu tong_so_luong={this.state.so_luong_gio_hang} />}
          ></Route>
          <Route
            path="/HighTop"
            element={<SanPham handleaddToCart={this.addToCart} />}
          ></Route>
          <Route
            path="/LowTop"
            element={<LowTop handleaddToCart={this.addToCart} />}
          ></Route>
          <Route
            path="/PlatForms"
            element={<PlatForms handleaddToCart={this.addToCart} />}
          ></Route>
          <Route
            path="/All"
            element={<AllProduct handleaddToCart={this.addToCart} />}
          ></Route>
          <Route
            path="/Detail/:id"
            element={
              <Detail
                size={this.state.size}
                color={this.state.color}
                validSize={this.state.validSize}
                validColor={this.state.validColor}
                handleChangeColor={this.handleChangeColor}
                handleChangeSize={this.handleChangeSize}
                handleaddToCart={this.addToCart}
                mang_gio_hang={this.state.mang_gio_hang}
              />
            }
          ></Route>

          <Route
            path="/Cart"
            element={
              <GioHang
                saveLocalstorate={this.saveLocalstorate}
                mang_gio_hang={this.state.mang_gio_hang}
                RemoveItemCart={this.RemoveItemCart}
                remove_all_cart={this.removeCart}
                handlegiamSoLuong={this.handlegiamSoLuong}
                handleTangSoLuong={this.handleTangSoLuong}
                addToCart={this.addToCart}
                tong_tien={this.state.tong_tien}
                so_luong_gio_hang={this.state.so_luong_gio_hang}
              />
            }
          ></Route>

          <Route
            path="/Checkout"
            element={
              <Checkout
                saveLocalstorate={this.saveLocalstorate}
                mang_gio_hang={this.state.mang_gio_hang}
                tong_tien={this.state.tong_tien}
                so_luong_gio_hang={this.state.so_luong_gio_hang}
              />
            }
          ></Route>

          <Route path="/Orders" element={<Order />}></Route>
        </Routes>
      </div>
    );
  }
}

export default Content;
