import React, { Component } from "react";
import { useParams } from "react-router-dom";
import AsNavFor from "../Module/AsNavFor";
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
    axios
      .get(`http://localhost:8080/api/shoess?text=${id}`)
      .then((response) => {
        var obj = response.data.listimage[1];

        console.log(obj);
        console.log(response.data);

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
          <AsNavFor detail={this.state.detail} />

          <div className="title_detail">
            <h3>${this.state.detail.price}</h3>
            <h6>Code: {this.state.detail.code}</h6>
            <h4>{this.state.detail.name}</h4>
            <div>{this.state.detail.title}</div>
            <div>
              <b> Color:</b> {this.state.detail.color}
            </div>
            <div>
              <b> Size:</b> {this.state.detail.size}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withParams(Detail);
