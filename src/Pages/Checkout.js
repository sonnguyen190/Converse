import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import PaymentIcon from "@mui/icons-material/Payment";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
const axios = require("axios").default;
export default function Checkout({
  mang_gio_hang,
  tong_tien,
  so_luong_gio_hang,
  saveLocalstorate,
}) {
  const [user, setUser] = useState(null);
  const [phone, setPhone] = useState(null);
  const [address, setAddress] = useState(null);
  const [validPhone, setvalidPhone] = useState(false);
  const [loading, setLoading] = useState(false);
  const [is_buy, setis_buy] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    let userr = JSON.parse(localStorage.getItem("user"));
    setUser(userr);
  }, []);

  const handleChange = (e) => {
    var phone = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
    if (e.target.name === "phone") {
      if (phone.exec(e.target.value)) {
        setvalidPhone(false);
      } else {
        setvalidPhone(true);
      }
      setPhone(e.target.value);
    } else {
      setAddress(e.target.value);
    }
  };
  function basicAuth(user) {
    return `Basic ${user.authdata}`;
  }
  const handleSubmitForm = () => {
    console.log(address, phone);
    if (address !== null && phone !== null) {
      let mycart = {
        username: user.username,
        fullname: user.name,
        totalAmount: tong_tien,
        totalQuantity: so_luong_gio_hang,
        shoes: mang_gio_hang,
        phone: phone,
        address: address,
        email: user.email,
      };
      if (validPhone === true) {
        setError(true);
      } else {
        setLoading(true);
        axios
          .post("http://localhost:8080/api/order/checkout", mycart, {
            headers: {
              "Content-type": "application/json",
              Authorization: basicAuth(user),
            },
          })
          .then((response) => {
            setis_buy(true);

            saveLocalstorate("complete");
            setPhone(null);
            setAddress(null);
          })
          .finally(() => {
            setLoading(false);
          });
      }
    } else {
      setError(true);
    }
  };

  if (is_buy === true) {
    return (
      <div className="thanks_purchasing">
        <img
          src="https://morethankyounotes.com/wp-content/uploads/2017/02/Customer-Thank-You-Note-1.png"
          alt=""
        />
        <Link to={"/all"} className="button_thanks">
          Continue To Buy
        </Link>
        <Link to={"/Orders"} className="button_thanks">
          View Your Orders
        </Link>
      </div>
    );
  } else {
    return (
      <div className="grid wide">
        {loading === true ? (
          <div className="div_load_check">
            <Box className="loading_checkout" sx={{ display: "flex" }}>
              <CircularProgress className="icon_loading" />
            </Box>
          </div>
        ) : (
          <div className="all_checkout">
            <div className="ShippingAddress">
              <div className="h2_title_shipping">Shipping Address</div>
              <div className="div_checkout">
                <TextField
                  className="label_checkout"
                  name="fullname"
                  value={user ? user.name : ""}
                  id="fullname"
                  label="Full Name"
                  variant="standard"
                />
              </div>

              <div className="div_checkout">
                <TextField
                  className="label_checkout"
                  type="email"
                  value={user ? user.email : ""}
                  name="email"
                  id="email"
                  label="Email"
                  variant="standard"
                />
              </div>

              <div className="div_checkout">
                <TextField
                  className="label_checkout"
                  type="phone"
                  name="phone"
                  id="phone"
                  label="Number Phone"
                  variant="standard"
                  onChange={handleChange}
                  value={phone}
                />
                <p className="validPhone">
                  {validPhone === true ? "Valid Phone" : ""}
                </p>
              </div>

              <div className="div_checkout">
                <TextField
                  className="label_checkout"
                  type="address"
                  name="address"
                  id="address"
                  label="Address"
                  variant="standard"
                  onChange={handleChange}
                  value={address}
                />
                {error === true ? (
                  <div className="error">
                    Error!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                  </div>
                ) : (
                  <></>
                )}
              </div>
              <div className="h2_title_shipping">Shipping Methods</div>
              <div className="shipping_method">
                <div>
                  <button
                    className="radio_button_freeship"
                    type="radio"
                  ></button>
                  Free Shipping
                </div>
                <div>
                  <b>$0.00</b>
                </div>
              </div>

              <div className="h2_title_shipping">Payment Method</div>
              <div className="payment_card1">
                <TextField
                  placeholder="4111 1111 1111 1111"
                  label="Credit Card Number "
                  id="outlined-start-adornment"
                  sx={{ width: "100%" }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PaymentIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
              <div>
                <img
                  src="https://converse.ca/static/version1667399854/frontend/Converse/neon/en_US/PayPal_Braintree/images/cc/VI.png"
                  alt=""
                />
                <img
                  src="https://converse.ca/static/version1667399854/frontend/Converse/neon/en_US/PayPal_Braintree/images/cc/MC.png"
                  alt=""
                />
              </div>

              <div className="payment_card">
                <TextField
                  placeholder="MM/YYYY"
                  label="Credit Card Number "
                  id="outlined-start-adornment"
                  sx={{ width: "15ch" }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start"></InputAdornment>
                    ),
                  }}
                />
                <TextField
                  className="Verification_number"
                  placeholder="123"
                  label="Card Verification Number"
                  id="outlined-start-adornment"
                  sx={{ width: "15ch" }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start"></InputAdornment>
                    ),
                  }}
                />
                <div className="Buy_checkout" onClick={handleSubmitForm}>
                  <div className="button_Buy_checkout"> Buy</div>
                </div>
              </div>
            </div>
            <div>
              <div className="Cart">
                <div className="quantity_in_cart_checkout">
                  {so_luong_gio_hang} Items in Cart
                </div>
                <hr />
                <div>
                  {mang_gio_hang.map((sp, key) => {
                    return (
                      <div className="cart_content">
                        <div className="left_cart_checkout">
                          <div className="quantity_checkout_cart">
                            <b className="number_quantity_cart_checkout">
                              {sp.quantity}
                            </b>
                          </div>
                          <img className="img_checkout" src={sp.image} alt="" />
                        </div>
                        <div>
                          <div className="grid_title_price_cart_checkout">
                            <div className="name_cart_checkout">{sp.name}</div>
                            <b className="price_cart_checkout">
                              ${sp.price}.00
                            </b>
                          </div>

                          <div className="color_cart_checkout">
                            Colour: <b>{sp.colorr}</b>
                          </div>
                          <div className="color_cart_checkout">
                            Shoe Size: <b>{sp.sizee}</b>
                          </div>
                          <div className="color_cart_checkout">
                            <b>${sp.amount}.00</b>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  <hr />
                  <div className="Amount_cart">
                    <b>${tong_tien}.00</b>
                  </div>
                </div>
              </div>
              <div className="khongtacdung"></div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
