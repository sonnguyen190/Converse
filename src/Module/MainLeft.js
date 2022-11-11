import React, { Component } from "react";
import TuneIcon from "@mui/icons-material/Tune";
class MainLeft extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      showColor: false,
    };
  }
  handleOnlickActive = () => {
    this.setState({
      isActive: !this.state.isActive,
    });
  };
  handleOnlickShowColor = () => {
    this.setState({
      showColor: !this.state.showColor,
    });
  };

  render() {
    return (
      <div className="main_left">
        <div
          onClick={this.props.handleOnclickShowFilter}
          className="bar_Product1"
        >
          <div className="name_hide_ilter">
            {this.props.isShow === true ? "Hide" : "Show"} Filters
          </div>

          <TuneIcon className="icon_tune"></TuneIcon>
        </div>

        <div
          className={`filter_product ${
            this.props.isShow === true ? "" : "active"
          }`}
        >
          <div className="all_filter_pro">
            <div className="title_filter" onClick={this.handleOnlickActive}>
              Shoe Style
              <b className="icon_filter">
                {this.state.isActive === true ? "-" : "+"}
              </b>
            </div>

            <ul
              className={`itemUlFilter ${
                this.state.isActive === true ? "active" : ""
              }`}
            >
              <li onClick={this.props.handleOnclickHighTop}>High Tops</li>
              <li onClick={this.props.handleOnclickLowTop}>Low Tops</li>
              <li onClick={this.props.handleOnclickPlatform}>Platorm</li>
            </ul>
          </div>

          <div>
            <div
              onClick={this.handleOnlickShowColor}
              className="title_filter_animation"
            >
              Search
              <b className="icon_filter2">
                {this.state.showColor === true ? "-" : "+"}
              </b>
            </div>

            <ul
              className={`itemUlFilter ${
                this.state.showColor === true ? "active" : ""
              }`}
            >
              <li className="li_search">
                <input
                  value={this.props.valueSearch}
                  onChange={this.props.handleChangeSearch}
                  type="text"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default MainLeft;
