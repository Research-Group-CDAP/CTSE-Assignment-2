import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../actions/AuthActions";
import "./Navbar.css";
import HomeIcon from "@material-ui/icons/Home";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ExploreIcon from "@material-ui/icons/Explore";
import LoginPage from "../../../pages/LoginPage";
import RegisterPage from "../../../pages/RegisterPage";

export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.logoutUserFunc = this.logoutUserFunc.bind(this);
  }

  logoutUserFunc() {
    this.props.logoutUser();
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/">
            <span
              style={{ fontSize: "30px", fontWeight: "bold", color: "#008775" }}
            >
              CLICK<span style={{ color: "#e36200" }}>TOCART</span>
            </span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse navLinkTab"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mr-auto navLinkTab">
              <li className="nav-item active">
                <a
                  className="nav-link navLinkTab"
                  href="/"
                  style={{ color: "#c4026d" }}
                >
                  <HomeIcon />
                  HOME
                </a>
              </li>
              <li className="nav-item active">
                <a
                  className="nav-link navLinkTab"
                  href="/explore"
                  style={{ color: "#c4026d" }}
                >
                  <ExploreIcon />
                  EXPLORE
                </a>
              </li>
              <li className="nav-item active">
                <a
                  className="nav-link navLinkTab"
                  href="/cart"
                  style={{ color: "#c4026d" }}
                >
                  <ShoppingCartIcon />
                  CART
                </a>
              </li>
            </ul>
            <ul className="navbar-nav mr-auto navLinkTab mr-sm-2">
              {this.props.isLoggedIn ? (
                this.props.user.roles === "User" ? (
                  <li className="nav-item active p-2">
                    <a
                      className="nav-link navLinkTab"
                      href="/profile"
                      style={{ color: "#c4026d", fontSize: "20px" }}
                    >
                      <PeopleAltIcon />
                      {this.props.user.first_name +
                        " " +
                        this.props.user.last_name}
                    </a>
                  </li>
                ) : (
                  <li className="nav-item active p-2">
                    <a
                      className="nav-link navLinkTab"
                      href="/seller"
                      style={{ color: "#c4026d" }}
                    >
                      <PeopleAltIcon />
                      {this.props.user.first_name + this.props.user.last_name}
                    </a>
                  </li>
                )
              ) : (
                <>
                  <li className="nav-item active p-2">
                    <LoginPage />
                  </li>

                  <li className="nav-item active p-2">
                    <RegisterPage />
                  </li>
                </>
              )}
              {this.props.isLoggedIn ? (
                <button
                  className="btn btn-sm bg-transparent"
                  onClick={this.logoutUserFunc}
                >
                  <span className="bg-danger p-2 text-white rounded">
                    Logout
                  </span>
                </button>
              ) : (
                ""
              )}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.authReducer.user,
  isLoggedIn: state.authReducer.isLoggedIn,
});

const mapActionToProps = {
  logoutUser: actions.logout,
};

export default connect(mapStateToProps, mapActionToProps)(Navbar);
