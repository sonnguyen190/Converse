import React, { Component } from "react";

class SignUp extends Component {
  render() {
    return (
      <div>
        <div className="form-group">
          <div className="col-sm-2">Email</div>
          <div className="col-sm-10">
            <input
              type="email"
              name="email"
              className={
                "form-control " +
                (this.props.valid_email ? "success" : "unsuccess")
              }
              value={this.props.email}
              onChange={this.props.handleChange}
            />
          </div>
        </div>

        <div className="form-group">
          <div className="col-sm-2">Password</div>
          <div className="col-sm-10">
            <input
              type="password"
              name="password"
              className="form-control"
              value={this.props.password}
              onChange={this.props.handleChange}
            />
          </div>
        </div>

        <div className="form-group">
          <div className="col-sm-2">Re-Password</div>
          <div className="col-sm-10">
            <input
              type="password"
              name="repassword"
              className="form-control"
              value={this.props.repassword}
              onChange={this.props.handleChange}
            />
          </div>
        </div>

        <div className="form-group">
          <div className="col-sm-2">Họ tên</div>
          <div className="col-sm-10">
            <input
              type="text"
              name="ho_ten"
              className="form-control"
              value={this.props.ho_ten}
              onChange={this.props.handleChange}
            />
          </div>
        </div>

        <div className="form-group">
          <div className="col-sm-2">Giới Tính</div>
          <div className="col-sm-10">
            <select
              name="gioi_tinh"
              className="form-control"
              value={this.props.gioi_tinh}
              onChange={this.props.handleChange}
            >
              <option value="Nam">Nam</option>
              <option value="Nữ">Nữ</option>
              <option value="Khác">Khác</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <div className="col-sm-10 col-sm-offset-2">
            <button type="submit" className="btn btn-primary">
              Gửi
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
