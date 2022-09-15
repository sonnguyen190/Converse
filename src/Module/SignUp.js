import React, { Component } from "react";
import TextField from "@mui/material/TextField";

class SignUp extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmitForm}>
        <div className="form-group">
          <div className="form-group_signup">
            <TextField
              className="label_signup"
              type="email"
              name="email"
              id="email"
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
              id="password"
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
              id="repassword"
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
              id="ho_ten"
              label="User Name"
              variant="standard"
              value={this.props.ho_ten}
              onChange={this.props.handleChange}
            />
          </div>
        </div>

        <div className="form-group">
          <div className="button_submit_signin">
            <button type="submit" onClick={this.props.handleSubmitForm}>
              Sign Up
            </button>
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
      </form>
    );
  }
}

export default SignUp;
