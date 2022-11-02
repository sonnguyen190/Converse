import React, { Component } from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
class SignIn extends Component {
  render() {
    return (
      <div>
        <div className="form-group">
          <div className="form-group_signup">
            <TextField
              className="label_signup"
              type="username"
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
          </div>
          {this.props.isError == true ? (
            <b className="error_Signup">"Đồ ngu, đồ ăn hại"</b>
          ) : (
            <></>
          )}
        </div>

        <div className="form-group">
          <div className="button_submit_signin">
            <button onClick={this.props.handleSubmitFormSignIn}>Sign In</button>
          </div>
          <div>
            <p>
              Not a member?{" "}
              <p
                className="arelymember"
                style={{ display: "inline" }}
                onClick={this.props.change_signup}
              >
                SIGN UP
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

export default SignIn;
