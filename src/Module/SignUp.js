import React, { Component } from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = { showPassword: false };
  }
  handleClickShowPassword = () => {
    this.setState({
      showPassword: !this.state.showPassword,
    });
  };
  handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  render() {
    return (
      <form className="form_sign_up_all">
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
          <FormControl
            className="form-group_signup_control"
            sx={{ width: "100%" }}
          >
            <InputLabel className="label_passwordsignup">Password</InputLabel>
            <Input
              className="label_signup"
              type={this.state.showPassword ? "text" : "password"}
              name="password"
              id="password"
              label="Password"
              variant="standard"
              value={this.props.password}
              onChange={this.props.handleChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={this.handleClickShowPassword}
                    onMouseDown={this.handleMouseDownPassword}
                  >
                    {this.state.showPassword ? (
                      <VisibilityOff />
                    ) : (
                      <Visibility />
                    )}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>

          {this.props.valid_password == false ? (
            <p id="valid_password">Password is requied</p>
          ) : (
            <></>
          )}
        </div>

        <div className="form-group">
          <FormControl
            className="form-group_signup_control"
            sx={{ width: "100%" }}
          >
            <InputLabel className="label_passwordsignup">
              Re-Password
            </InputLabel>
            <Input
              className="label_signup"
              type={this.state.showPassword ? "text" : "password"}
              name="repassword"
              id="repassword"
              label="repassword"
              variant="standard"
              value={this.props.repassword}
              onChange={this.props.handleChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={this.handleClickShowPassword}
                    onMouseDown={this.handleMouseDownPassword}
                  >
                    {this.state.showPassword ? (
                      <VisibilityOff />
                    ) : (
                      <Visibility />
                    )}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          {this.props.valid_password == false ? (
            <p id="valid_password">Password is requied</p>
          ) : (
            <></>
          )}
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
