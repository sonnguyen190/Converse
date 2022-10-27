import React, { Component } from "react";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SearchIcon from "@mui/icons-material/Search";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import Register from "./Register";
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
      scrollY: 60,
      width: 100,
      user: {},
      isShowlogout: false,
      isAuthen: false,
    };
  }
  handleIsShow = () => {
    this.setState({
      isShow: !this.state.isShow,
    });
  };
  // handleIsShowLogOut = () => {
  //   console.log(this.state.user != {});
  //   if (this.state.user) {
  //     this.setState({
  //       logout: !this.state.logout,
  //     });
  //   } else {
  //     this.setState({
  //       logout: false,
  //     });
  //   }
  // };
  componentDidMount = () => {
    window.addEventListener("scroll", this.isMouseDown);
    const user = JSON.parse(localStorage.getItem("user"));
    const authen = localStorage.getItem("user") !== null;
    this.styleauthen(authen, user);
  };

  hanndleOnlickShowLogout = () => {
    this.setState({
      ...this.state,
      isShowlogout: !this.state.isShowlogout,
    });
  };

  styleauthen = (isauthen, user) => {
    if (isauthen) {
      this.setState({
        ...this.state,
        isAuthen: true,
        user: user,
      });
    } else {
      this.setState({
        ...this.state,
        isAuthen: false,
        user: {},
      });
    }
  };
  handleSignOut = () => {
    localStorage.removeItem("user");
    this.setState({
      ...this.state,
      isAuthen: false,
      user: {},
    });
    window.location.reload(false);
  };
  isMouseDown = () => {
    const scrollWindowHeight = window.pageYOffset;
    // console.log(scrollWindowHeight);
    if (scrollWindowHeight > 1) {
      this.setState({
        ...this.state,
        scrollY: 0,
        width: 50,
      });
    } else {
      this.setState({
        ...this.state,
        scrollY: 60,
        width: 346,
      });
    }
  };
  render() {
    return (
      <div className="grid wide">
        <div className="navbar_tong" style={{ top: this.state.scrollY }}>
          <input
            type="checkbox"
            hidden
            id="nav_mobile_input"
            className="nav_input"
          />
          <label htmlFor="nav_mobile_input" className="nav_overlay"></label>
          <nav className=" navbar-expand-lg Navbar_all">
            <label htmlFor="nav_mobile_input" className="Icon_navbar">
              <DensityMediumIcon />
            </label>
            <div className="Navbar_logo">
              <Link to="/"> CONVERSE</Link>
            </div>
            <div className=" navbar-collapse collapsenav">
              <ul className="navbar-nav mr-auto ">
                <li>
                  <button className="Navbar_Button">Women</button>
                </li>
                <li>
                  <button className="Navbar_Button">Men</button>
                </li>
                <li>
                  <button className="Navbar_Button">Kids</button>
                </li>
                <li>
                  <button className="Navbar_Button">Custom</button>
                </li>
                <li>
                  <button className="Navbar_Button">Limeted Edition</button>
                </li>
                <li>
                  <button className="Navbar_Button">Sale</button>
                </li>
                <li>
                  <button className="Navbar_Button">Explore</button>
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-0 navbar_form">
                <div className="Navbar_Sign_in">
                  {this.state.isAuthen == true ? (
                    <div
                      className="Sign_in"
                      onClick={this.hanndleOnlickShowLogout}
                    >
                      <span className="span_logincomplete">
                        {this.state.user.name}
                      </span>

                      <div className="span_icon_user">
                        <PersonOutlineIcon />
                      </div>
                      {this.state.isShowlogout == true ? (
                        <div className="logout_nav">
                          <div onClick={this.handleSignOut}>Sign Out</div>
                        </div>
                      ) : (
                        <></>
                      )}
                    </div>
                  ) : (
                    <div className="Sign_in" onClick={this.handleIsShow}>
                      <span className="span_sign_in">Sign In</span>

                      <div className="span_icon_user">
                        <PersonOutlineIcon />
                      </div>
                    </div>
                  )}

                  <div className="icon_tim">
                    <FavoriteBorderIcon />
                  </div>
                  <div className="icon_gio_hang">
                    <Link className="link_icon_cart" to={"/Cart"}>
                      <AddShoppingCartIcon />
                    </Link>
                  </div>
                </div>
                <div className="Navbar_search">
                  <button className="Navbar_button_search">
                    <span className="Navbar_span_Search">Search</span>
                    <SearchIcon className="logo_Search" />
                  </button>
                </div>
              </form>
            </div>
          </nav>

          <div className="register_form">
            <Register
              isShow={this.state.isShow}
              handleIsShow={this.handleIsShow}
            />
          </div>

          <div className="nav_mobile">
            <ul className="nav_mobile_ul">
              <div className="nav_mobile_top">
                <form>Sign In</form>
                <label htmlFor="nav_mobile_input" className="close_button_nav">
                  <CloseIcon />
                </label>
              </div>

              <li>
                <a className="Navbar_mobile_link" href="">
                  Men
                </a>
              </li>
              <li>
                <a className="Navbar_mobile_link" href="">
                  Kids
                </a>
              </li>
              <li>
                <a className="Navbar_mobile_link" href="">
                  Custom
                </a>
              </li>
              <li>
                <a className="Navbar_mobile_link" href="">
                  Limeted Edition
                </a>
              </li>
              <li>
                <a className="Navbar_mobile_link" href="">
                  Women
                </a>
              </li>
              <li>
                <a className="Navbar_mobile_link" href="">
                  Sale
                </a>
              </li>
              <li>
                <a className="Navbar_mobile_link" href="">
                  Explore
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;

{
  /* <div className='Navbar_all'>
<div className='Icon_navbar'>
        <DensityMediumIcon/>
    </div>
    <div className=' Navbar_left'>
        <ul className='Navbar_ul_left'>
            <li className='Navbar_li'> <a className='Navbar_logo'>CONVERSE</a> </li>
            <li><button className='Navbar_Button'>Women</button></li>
            <li><button className='Navbar_Button'>Men</button></li>
            <li><button className='Navbar_Button'>Kids</button></li>
            <li><button className='Navbar_Button'>Custom</button></li>
            <li><button className='Navbar_Button'>Limeted Edition</button></li>
            <li><button className='Navbar_Button'>Sale</button></li>
            <li><button className='Navbar_Button'>Explore</button></li>
        </ul>
    </div> 
    <div className='col Navbar_right'>
        <div className='Navbar_Sign_in'>
            <div className='Sign_in'>
               <span className='span_sign_in'>Sign In</span> 
                <div className='span_icon_user'><PersonOutlineIcon/></div>
            </div>
            <div className='icon_tim'>
           < FavoriteBorderIcon/>
            </div>
            <div className='icon_gio_hang'>
                <AddShoppingCartIcon/>
            </div>
        </div>
        <div className='Navbar_search'>
            <button className='Navbar_button_search'>
                <span className='Navbar_span_Search'>
                    Search
                </span>
                <SearchIcon className='logo_Search'/>
                
            </button>
        </div>
    </div>
</div> */
}
