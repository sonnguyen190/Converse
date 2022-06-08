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
      isShow: "",
      block: "",
    };
  }
  handleShowSignUp = () => {
    this.setState((pre) => {
      pre.isShow = "SignUp";
      pre.block = "block";
      return pre;
    });
  };
  handleShowSignIn = () => {
    this.setState((pre) => {
      pre.isShow = "SignIn";
      pre.block = "block";
      return pre;
    });
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
      <div>
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
            <div onClick={this.handleShowSignUp}>Sign Up</div>
            <div onClick={this.handleShowSignIn}>Sign In</div>
          </div>
          <div
            className={"form" + this.state.isShow}
            style={{ display: this.state.block }}
          >
            <SignUp
              email={this.state.email}
              password={this.state.password}
              repassword={this.state.repassword}
              ho_ten={this.state.ho_ten}
              gioi_tinh={this.state.gioi_tinh}
              handleChange={this.handleChange}
              valid_email={this.state.valid_email}
            ></SignUp>
          </div>
          <div
            className={"form" + this.state.isShow}
            style={{ display: this.state.block }}
          >
            <SignIn></SignIn>
          </div>
        </form>
      </div>
    );
  }
}

export default Register;
