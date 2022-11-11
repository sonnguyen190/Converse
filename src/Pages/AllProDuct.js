import React, { Component } from "react";
import ListSanPham from "../Module/ListSanPham";
import MainLeft from "../Module/MainLeft";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Pagination from "../Module/Pagination";
const axios = require("axios").default;
class AllProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listspSearch: [],
      list_san_pham: [],
      isShoesLoading: true,
      isShow: true,
      showFilterSort: false,
      valueFilter: "Default",
      currentPage: 1,
      dataPerPage: 12,
      valueSearch: "",
      SearchParam: ["name", "price"],
    };
  }
  sortByPriceAsc = (data) => {
    let sp = this.state.list_san_pham.sort((a, b) => a.price - b.price);
    this.setState((prevState) => {
      prevState.list_san_pham = sp;
      prevState.valueFilter = data;
      return prevState;
    });
    this.openPopup();
  };

  handleChangeSearch = (e) => {
    let listsp = this.state.list_san_pham;
    let results = listsp.filter((post) => {
      if (e.target.value === "") {
        return listsp;
      } else {
        return post.name.toLowerCase().includes(e.target.value.toLowerCase());
      }
    });
    this.setState({ valueSearch: e.target.value, listspSearch: results });
  };

  sortByPriceDesc = (data) => {
    let sp = this.state.list_san_pham.sort((a, b) => b.price - a.price);
    this.setState((prevState) => {
      prevState.list_san_pham = sp;
      prevState.valueFilter = data;
      return prevState;
    });
    this.openPopup();
  };

  openPopup = () => {
    this.setState({ showFilterSort: !this.state.showFilterSort });
  };
  componentDidMount = () => {
    this.setState({ isShoesLoading: true });
    axios
      .get("http://localhost:8080/api/shoes")
      .then((response) => {
        this.setState((prev) => {
          prev.list_san_pham = response.data;
          return prev;
        });
      })
      .finally(() => {
        this.setState({ isShoesLoading: false });
      });
  };

  handleOnclickHighTop = () => {
    this.setState({ isShoesLoading: true, currentPage: 1 });
    axios
      .get("http://localhost:8080/api/shoesType?shoe_type=hightop")
      .then((response) => {
        console.log(response);
        this.setState((prev) => {
          prev.list_san_pham = response.data;
          return prev;
        });
      })
      .finally(() => {
        this.setState({ isShoesLoading: false });
      });
  };
  handleOnclickLowTop = () => {
    this.setState({ isShoesLoading: true, currentPage: 1 });
    axios
      .get("http://localhost:8080/api/shoesType?shoe_type=lowtop")
      .then((response) => {
        console.log(response);
        this.setState((prev) => {
          prev.list_san_pham = response.data;
          return prev;
        });
      })
      .finally(() => {
        this.setState({ isShoesLoading: false });
      });
  };

  handleOnclickPlatform = () => {
    this.setState({ isShoesLoading: true, currentPage: 1 });
    axios
      .get("http://localhost:8080/api/shoesPlatform?shoe_platform=true")
      .then((response) => {
        console.log(response);
        this.setState((prev) => {
          prev.list_san_pham = response.data;
          return prev;
        });
      })
      .finally(() => {
        this.setState({ isShoesLoading: false });
      });
  };

  handleOnclickShowFilter = () => {
    console.log(this.state.isShow);
    this.setState({ isShow: !this.state.isShow });
  };

  paginate = (pagenumber) => {
    this.setState({ currentPage: pagenumber });
    window.scrollTo(0, 0);
  };
  handleGiamPage = () => {
    window.scrollTo(0, 0);
    let newPage = this.state.currentPage;
    let a = newPage - 1;
    this.setState({ currentPage: a });
  };
  handleTangPage = () => {
    window.scrollTo(0, 0);
    let newPage = this.state.currentPage;
    let a = newPage + 1;
    this.setState({ currentPage: a });
  };

  render() {
    const indexOfLastDatta = this.state.currentPage * this.state.dataPerPage;
    const indexOfFirstData = indexOfLastDatta - this.state.dataPerPage;
    const currentData = this.state.list_san_pham.slice(
      indexOfFirstData,
      indexOfLastDatta
    );
    return (
      <div className="grid wide">
        <div
          className={`main_san_pham ${
            this.state.isShow === true ? "" : "active"
          }`}
        >
          {this.state.isShoesLoading === true ? (
            <Box className="loading_checkout" sx={{ display: "flex" }}>
              <CircularProgress className="icon_loading" />
            </Box>
          ) : (
            <>
              <MainLeft
                handleSearchBook={this.handleSearchBook}
                valueSearch={this.state.valueSearch}
                handleChangeSearch={this.handleChangeSearch}
                handleOnclickPlatform={this.handleOnclickPlatform}
                handleOnclickLowTop={this.handleOnclickLowTop}
                handleOnclickHighTop={this.handleOnclickHighTop}
                isShow={this.state.isShow}
                handleOnclickShowFilter={this.handleOnclickShowFilter}
              />
              <div className="">
                <div className="bar_Product">
                  <div className="results">
                    {this.state.valueSearch !== ""
                      ? this.state.listspSearch.length
                      : this.state.list_san_pham.length}
                    <p className="textresult">Results</p>
                  </div>
                  <div className="filter_sort">
                    <div onClick={this.openPopup}>
                      Sort By: {this.state.valueFilter}
                    </div>
                    <ul
                      className={`model_popup_filter${
                        this.state.showFilterSort === true ? "active" : ""
                      }`}
                    >
                      <li
                        className="li_filter"
                        onClick={() => this.sortByPriceAsc("low to high")}
                      >
                        <div style={{ paddingLeft: "5px" }}>
                          Price: low to high
                        </div>
                      </li>
                      <li
                        className="li_filter"
                        onClick={() => this.sortByPriceDesc("high to low")}
                      >
                        <div style={{ paddingLeft: "5px" }}>
                          Price: high to low
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className={`main_right ${
                    this.state.isShow === true ? "" : "active"
                  }`}
                >
                  {this.state.valueSearch !== ""
                    ? this.state.listspSearch.map((sp) => {
                        return (
                          <>
                            <ListSanPham
                              isShow={this.state.isShow}
                              key={sp.id}
                              listsp={sp}
                              handleaddToCart={this.props.handleaddToCart}
                            />
                          </>
                        );
                      })
                    : currentData.map((sp) => {
                        return (
                          <>
                            <ListSanPham
                              isShow={this.state.isShow}
                              key={sp.id}
                              listsp={sp}
                              handleaddToCart={this.props.handleaddToCart}
                            />
                          </>
                        );
                      })}
                </div>
                {this.state.valueSearch === "" ? (
                  <Pagination
                    currentPage={this.state.currentPage}
                    dataPerPage={this.state.dataPerPage}
                    totalData={this.state.list_san_pham.length}
                    paginate={this.paginate}
                    handleGiamPage={this.handleGiamPage}
                    handleTangPage={this.handleTangPage}
                  />
                ) : (
                  <Pagination
                    currentPage={this.state.currentPage}
                    dataPerPage={this.state.dataPerPage}
                    totalData={this.state.listspSearch.length}
                    paginate={this.paginate}
                    handleGiamPage={this.handleGiamPage}
                    handleTangPage={this.handleTangPage}
                  />
                )}
              </div>
            </>
          )}
        </div>
      </div>
    );
  }
}

export default AllProduct;
