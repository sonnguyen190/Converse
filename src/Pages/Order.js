import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import CircularProgress from "@mui/material/CircularProgress";
const axios = require("axios").default;

export default function Order() {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);
  const [orderUser, setOrderUser] = useState([]);
  const [orderDetail, setorderDetail] = useState([]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  useEffect(() => {
    let userr = JSON.parse(localStorage.getItem("user"));
    setUser(userr);
    if (userr) {
      setLoading(true);
      axios
        .get(`http://localhost:8080/api/orders?text=${userr.username}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: basicAuth(userr),
          },
        })
        .then((response) => {
          console.log(response.data);
          setOrderUser(response.data);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, []);

  const handleGetOrderDetail = (id) => {
    setLoading(true);
    axios
      .get(`http://localhost:8080/api/orders/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: basicAuth(user),
        },
      })
      .then((response) => {
        console.log(response.data);
        setorderDetail(response.data);
      })
      .finally(() => {
        setLoading(false);
      });
    handleOpen();
  };

  function basicAuth(user) {
    return `Basic ${user.authdata}`;
  }
  return (
    <div className="grid wide">
      <div className="title_order">My Orders</div>
      {user ? (
        <div width={"100%"}>
          {loading === true ? (
            <div className="div_load_check">
              <Box className="loading_checkout" sx={{ display: "flex" }}>
                <CircularProgress className="icon_loading" />
              </Box>
            </div>
          ) : (
            <table className="table table-striped " width={"100%"}>
              <thead className="thead-inverse">
                <tr>
                  <th>Order Num</th>
                  <th>Order Date</th>
                  <th>Status</th>
                  <th>Total Quantity</th>
                  <th>Total Amount</th>
                  <th>View Detail</th>
                </tr>
              </thead>
              <tbody>
                {orderUser.map((item) => {
                  return (
                    <tr key={item.id}>
                      <td scope="row">{item.orderNum}</td>
                      <td>{item.orderDate}</td>
                      <td>{item.status == 0 ? "Shipping" : "cancelled"}</td>
                      <td>{item.totalQuantity}</td>
                      <td>${item.amount}.00</td>
                      <td>
                        <button
                          className="button_viewDetail"
                          onClick={() => handleGetOrderDetail(item.id)}
                        >
                          View Details
                        </button>
                      </td>
                    </tr>
                  );
                })}
                <Modal
                  open={open}
                  onClose={handleClose}
                  className="modal_detail"
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="h2"
                    >
                      Details
                    </Typography>

                    <Typography id="" sx={{ mt: 2 }}>
                      <TableContainer sx={{ maxHeight: 440 }}>
                        <Table stickyHeader aria-label="sticky table">
                          <TableHead>
                            <TableRow>
                              <TableCell>Id</TableCell>
                              <TableCell>Image</TableCell>
                              <TableCell>Name</TableCell>
                              <TableCell>Size</TableCell>
                              <TableCell>Color</TableCell>
                              <TableCell>Price</TableCell>
                              <TableCell>Quantity</TableCell>
                              <TableCell>Amount</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {orderDetail.map((item) => {
                              return (
                                <TableRow hover role="checkbox" tabIndex={-1}>
                                  <>
                                    <TableCell>{item.id}</TableCell>
                                    <TableCell>
                                      <img
                                        className="img_Order_detail"
                                        src={item.book.image}
                                        alt=""
                                      />
                                    </TableCell>
                                    <TableCell>{item.book.name}</TableCell>
                                    <TableCell>{item.sizee}</TableCell>
                                    <TableCell>{item.colorr}</TableCell>
                                    <TableCell>${item.book.price}.00</TableCell>
                                    <TableCell>{item.quantity}</TableCell>
                                    <TableCell>${item.amount}.00</TableCell>
                                  </>
                                </TableRow>
                              );
                            })}
                          </TableBody>
                        </Table>
                      </TableContainer>
                      {/* <table className="table table-striped table_detail">
                        <thead className="thead-inverse">
                          <tr>
                            <th>Id</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Size</th>
                            <th>Color</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Amount</th>
                          </tr>
                        </thead>
                        <tbody className="modal_detail">
                          {orderDetail.map((item) => {
                            return (
                              <tr key={item.id} className="modal_detail">
                                <td scope="row">{item.id}</td>
                                <td>
                                  <img
                                    className="img_Order_detail"
                                    src={item.book.image}
                                    alt=""
                                  />
                                </td>
                                <td>{item.book.name}</td>
                                <td>{item.sizee}</td>
                                <td>{item.colorr}</td>

                                <td>${item.book.price}.00</td>
                                <td>{item.quantity}</td>
                                <td>${item.amount}.00</td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table> */}
                      <div className="close_button_orderDetail_div">
                        <button
                          onClick={handleClose}
                          className="close_button_orderDetail"
                        >
                          X Close
                        </button>
                      </div>
                    </Typography>
                  </Box>
                </Modal>
              </tbody>
            </table>
          )}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
