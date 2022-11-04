import React, { Component } from "react";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
const axios = require("axios").default;
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      valid_email: "",
      password: "",
      valid_password: "true",
      repassword: "",
      ho_ten: "",
      is_active: "signin",
      isError: false,
      errorMessage: "",
    };
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
  }

  handleLogError = (error) => {
    if (error.response) {
      console.log(error.response.data);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log(error.message);
    }
  };
  handleSubmitForm = (event) => {
    event.preventDefault();
    if (this.state.password != this.state.repassword) {
      this.setState((pre) => {
        pre.valid_password = false;
        return pre;
      });
    } else {
      this.setState((pre) => {
        pre.valid_password = true;
        return pre;
      });

      axios
        .post(
          "http://localhost:8080/auth/signup",
          {
            username: this.state.username,
            password: this.state.password,
            name: this.state.ho_ten,
            email: this.state.email,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          alert("đăng kí thành công");
          var basicAu =
            "Basic " +
            btoa(response.data.username + ":" + response.data.password);
          const { id, name, role, username, email } = response.data;
          const user = { id, name, role, username, email };

          localStorage.setItem("user", JSON.stringify(user));
          window.location.reload(false);
        })
        .catch((error) => {
          this.handleLogError(error);
          if (error.response && error.response.data) {
            const errorData = error.response.data;
            let errorMessage = error.response.data.message;
            console.log(errorData);
            if (errorData.status === 409) {
              errorMessage = errorData.message;
            } else if (errorData.status === 400) {
              errorMessage = errorData.errors[0].defaultMessage;
            }
            this.setState({
              isError: true,
              errorMessage,
            });
          }
        });
    }
  };

  handleSubmitFormSignIn = (event) => {
    event.preventDefault();
    if (!(this.state.username && this.state.password)) {
      alert("Error");
    } else {
      axios
        .post(
          "http://localhost:8080/auth/authenticate",
          {
            username: this.state.username,
            password: this.state.password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          alert("Đăng Nhập Thành Công");
          var basicAu =
            "Basic " +
            btoa(response.data.username + ":" + response.data.password);
          const { id, name, role, email, username } = response.data;
          const user = { id, name, role, basicAu, email, username };
          console.log(user);
          localStorage.setItem("user", JSON.stringify(user));
          window.location.reload(false);
        })
        .catch((error) => {
          this.setState({
            isError: true,
            password: "",
          });
        });
    }
  };
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
    if (e.target.name === "email" && e.target.value) {
      let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (re.test(e.target.value)) {
        if (e.target.value) {
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
              <SignIn
                isError={this.state.isError}
                password={this.state.password}
                username={this.state.username}
                handleChange={this.handleChange}
                handleSubmitFormSignIn={this.handleSubmitFormSignIn}
                change_signup={this.change_signup}
              ></SignIn>
            </div>
          ) : (
            <div>
              <SignUp
                errorMessage={this.state.errorMessage}
                username={this.state.username}
                valid_password={this.state.valid_password}
                handleSubmitForm={this.handleSubmitForm}
                change_signin={this.change_signin}
                email={this.state.email}
                password={this.state.password}
                repassword={this.state.repassword}
                ho_ten={this.state.ho_ten}
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
