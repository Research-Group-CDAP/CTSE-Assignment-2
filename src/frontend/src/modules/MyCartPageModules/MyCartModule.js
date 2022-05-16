import React, { Component } from "react";
import { connect } from "react-redux";
import MyCart from "./MyCart";
import MyCartNotAvailable from "./MyCartNotAvailable";

class MyCartModule extends Component {
  render() {
    return (
      <div className="container mt-4">
        <div className="row text-center">
          <h1 style={{ fontWeight: "bolder" }} className="text-secondary">
            MY SHOPPING CART
          </h1>
        </div>
        <div className="row">
          {this.props.user ? <MyCart /> : <MyCartNotAvailable />}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.authReducer.user,
});

export default connect(mapStateToProps, null)(MyCartModule);
