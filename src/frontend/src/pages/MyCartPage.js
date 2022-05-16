import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/CartActions";
import Footer from "../components/common/Footer/Footer";
import LoadingComponent from "../components/common/LoadingComponent/LoadingComponent";
import Navbar from "../components/common/Navbar/Navbar";
import MyCartModule from "../modules/MyCartPageModules/MyCartModule";
import MyCartNotAvailable from "../modules/MyCartPageModules/MyCartNotAvailable";

class MyCartPage extends Component {
  componentDidMount() {
    if (this.props.user) {
      this.props.getItemFromCart(this.props.user.id);
    }
  }
  render() {
    return (
      <div>
        {!this.props.user ? (
          <div>
            <Navbar />
            <div className="container mt-4">
              <div className="row text-center">
                <h1 style={{ fontWeight: "bolder" }} className="text-secondary">
                  MY SHOPPING CART
                </h1>
              </div>
              <div className="row">
                <MyCartNotAvailable />
              </div>
            </div>
            <Footer />
          </div>
        ) : this.props.cartListPending ? (
          <LoadingComponent />
        ) : (
          <div style={{ backgroundColor: "#ebebeb" }}>
            <Navbar />
            <MyCartModule />
            <Footer />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.authReducer.user,
  cartListPending: state.cartReducer.cartListPending,
});

const mapActionToProps = {
  getItemFromCart: actions.getItemFromCart,
};

export default connect(mapStateToProps, mapActionToProps)(MyCartPage);
