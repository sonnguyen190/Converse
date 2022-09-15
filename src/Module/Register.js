import React, { Component } from "react";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      valid_email: "",
      password: "",
      valid_password: "",
      repassword: "",
      valid_re_password: "",
      ho_ten: "",
      valid_ho_ten: "",
      gioi_tinh: "Nữ",
      is_active: "signin",
    };
  }

  change_signup = () => {
    this.setState((prev) => {
      prev.is_active = "signup";
      return prev;
    });
    document.getElementById("signup").style.color = "black";
    document.getElementById("signin").style.color = "gray";
    document.getElementById("signup").style.textDecoration = "underline";
    document.getElementById("signin").style.textDecoration = "none";
  };

  change_signin = () => {
    this.setState((prev) => {
      prev.is_active = "signin";
      return prev;
    });
    document.getElementById("signin").style.color = "black";
    document.getElementById("signup").style.color = "gray";
    document.getElementById("signin").style.textDecoration = "underline";
    document.getElementById("signup").style.textDecoration = "none";
  };

  handleChange = (e) => {
    var flag = "";
    if (e.target.name === "email" && e.target.value) {
      let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (re.test(e.target.value)) {
        if (e.target.value) {
          flag = true;
          this.setState((pre) => {
            pre["valid_" + e.target.name] = true;
            return pre;
          });
        }
      } else {
        if (e.target.value) {
          this.setState((pre) => {
            pre["valid_" + e.target.name] = false;
            return pre;
          });
        } else {
          this.setState((pre) => {
            pre["valid_" + e.target.name] = true;
            return pre;
          });
        }
      }
    }
    this.setState((pre) => {
      pre[e.target.name] = e.target.value;
      return pre;
    });
  };
  render() {
    return (
      <div className="all_register">
        <div
          className="overlay_register"
          style={{ display: +this.props.isShow ? "block" : "none" }}
          onClick={this.props.handleIsShow}
        ></div>
        <form
          className={
            "formhorizontal " + (this.props.isShow ? "active" : "inactive")
          }
          role="form"
        >
          <div className="form-group title_register">
            <div id="signin" onClick={this.change_signin}>
              SIGN IN
            </div>
            <div id="signup" onClick={this.change_signup}>
              SIGN UP
            </div>
          </div>
          {this.state.is_active == "signin" ? (
            <div>
              <SignIn change_signup={this.change_signup}></SignIn>
            </div>
          ) : (
            <div>
              <SignUp
                change_signin={this.change_signin}
                email={this.state.email}
                password={this.state.password}
                repassword={this.state.repassword}
                ho_ten={this.state.ho_ten}
                gioi_tinh={this.state.gioi_tinh}
                handleChange={this.handleChange}
                valid_email={this.state.valid_email}
              ></SignUp>
            </div>
          )}
        </form>
      </div>
    );
  }
}

export default Register;
