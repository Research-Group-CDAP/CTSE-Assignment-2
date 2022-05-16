import React, { Component } from "react";
import ExploreShoppingCartForm from "./ExploreShoppingCartForm";
import ExploreShoppingCartList from "./ExploreShoppingCartList";
import "./ExploreShoppingCart.css";

export class ExploreShoppingCart extends Component {
  render() {
    return (
      <div className="container mt-4">
        <div className="row">
          <div className="col-lg-3">
            <ExploreShoppingCartForm />
          </div>
          <div className="col-lg-9">
            <ExploreShoppingCartList />
          </div>
        </div>
      </div>
    );
  }
}

export default ExploreShoppingCart;
