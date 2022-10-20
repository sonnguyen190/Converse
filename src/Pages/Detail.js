import React, { Component } from "react";
import { useParams } from "react-router-dom";
const axios = require("axios").default;
function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: [],
    };
  }

  componentDidMount = () => {
    let { id } = this.props.params;
    axios.get(`http://localhost:8080/api/shoes/${id}`).then((response) => {
      this.setState((prev) => {
        prev.detail = response.data;
        return prev;
      });
    });
  };
  render() {
    return (
      <div className="grid wide">
        <div className="All_Detail">
          <div>
            <div
              className="image_item_Detail"
              style={{ backgroundImage: `url(${this.state.detail.hinh_giay})` }}
            ></div>
          </div>
          <div>{this.state.detail.ten_giay}</div>

          <div>{this.state.detail.price}</div>
        </div>
      </div>
    );
  }
}

export default withParams(Detail);
