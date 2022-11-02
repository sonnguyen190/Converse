import React, { Component } from "react";
import TextField from "@mui/material/TextField";

class SignUp extends Component {
  render() {
    return (
      <form>
        <div className="form-group">
          <div className="form-group_signup">
            <TextField
              className="label_signup"
              type="text"
              name="username"
              id="username"
              label="User Name"
              variant="standard"
              value={this.props.username}
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
            {this.props.valid_password == false ? (
              <p id="valid_password">Password is requied</p>
            ) : (
              <></>
            )}
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
            {this.props.valid_password == false ? (
              <p id="valid_password">Password is requied</p>
            ) : (
              <></>
            )}
          </div>
        </div>

        <div className="form-group">
          <div className="form-group_signup">
            <TextField
              className="label_signup"
              type="text"
              name="ho_ten"
              id="ho_ten"
              label="Full Name"
              variant="standard"
              value={this.props.ho_ten}
              onChange={this.props.handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="form-group_signup">
            <TextField
              className="label_signup"
              type="text"
              name="email"
              id="email"
              label="Email"
              variant="standard"
              value={this.props.email}
              onChange={this.props.handleChange}
            />
          </div>
          <b className="error_Signup">{this.props.errorMessage}</b>
        </div>

        <div className="form-group">
          <div className="button_submit_signin">
            <button onClick={this.props.handleSubmitForm}>Sign Up</button>
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
