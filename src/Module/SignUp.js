import React, { Component } from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

class SignUp extends Component {
  render() {
    return (
      <div>
        <div className="form-group">
          <div className="form-group_signup">
            <TextField
              className="label_signup"
              type="email"
              name="email"
              id="standard-basic"
              label="Email"
              variant="standard"
              value={this.props.email}
              onChange={this.props.handleChange}
            />
          </div>
        </div>

        <div className="form-group">
          <div className="form-group_signup">
            <TextField
              className="label_signup"
              type="password"
              name="password"
              id="standard-basic"
              label="Password"
              variant="standard"
              value={this.props.password}
              onChange={this.props.handleChange}
            />
          </div>
        </div>

        <div className="form-group">
          <div className="form-group_signup">
            <TextField
              className="label_signup"
              type="password"
              name="repassword"
              id="standard-basic"
              label="Confirm Password"
              variant="standard"
              value={this.props.repassword}
              onChange={this.props.handleChange}
            />
          </div>
        </div>

        <div className="form-group">
          <div className="form-group_signup">
            <TextField
              className="label_signup"
              type="text"
              name="ho_ten"
              id="standard-basic"
              label="User Name"
              variant="standard"
              value={this.props.ho_ten}
              onChange={this.props.handleChange}
            />
          </div>
        </div>

        <div className="form-group">
          <div>
            <TextField
              className="label_signup_gender"
              name="gioi_tinh"
              id="standard-select-currency"
              select
              label="Gender"
              onChange={this.props.handleChange}
              helperText=" select your gender"
              variant="standard"
            >
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
              <MenuItem value="orther">Order</MenuItem>
            </TextField>
          </div>
        </div>

        <div className="form-group">
          <div className="button_submit_signin">
            <button type="submit">Sign Up</button>
          </div>
          <div>
            <p>
              Already a member?{" "}
              <p
                className="arelymember"
                style={{ display: "inline" }}
                onClick={this.props.change_signin}
              >
                SIGN IN
              </p>
            </p>
          </div>
        </div>

        <div>
          <p style={{ color: "#757575", fontSize: "12px" }}>
            By signing in, you agree to the Converse Terms of Use and Privacy
            Policy.
          </p>
        </div>
      </div>
    );
  }
}

export default SignUp;
