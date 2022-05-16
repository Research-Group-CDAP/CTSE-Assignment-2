import React, { Component } from "react";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

import { connect } from "react-redux";
import * as actions from "../../actions/CartActions";
import CheckOutModule from "../CheckOutPageModules/CheckOutModule";

export class MyCart extends Component {
  constructor(props) {
    super(props);
    this.deleteItemFromCartFunc = this.deleteItemFromCartFunc.bind(this);
    this.state = {};
  }

  deleteItemFromCartFunc(id) {
    this.props.deleteItemFromCart(
      id,
      () => {},
      () => {}
    );
  }

  render() {
    return (
      <div>
        <div className="card p-5">
          {this.props.cartList.length === 0 ? (
            <div className="alert alert-danger mt-2 mb-2" role="alert">
              No items available in the cart
            </div>
          ) : (
            ""
          )}
          <table className="table table-md table-responsive">
            <div className="table-responsive">
              <table className="table align-middle">
                <thead>
                  <th scope="col">Product</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Price</th>
                  <th scope="col"></th>
                </thead>
                <tbody>
                  {this.props.cartList.map((cartItem) => {
                    return (
                      <tr>
                        <td>{cartItem.itemName}</td>
                        <td>{cartItem.qty}</td>
                        <td>{cartItem.totalPrice}</td>
                        <td>
                          <button
                            className="btn btn-danger btn-sm"
                            onClick={() =>
                              this.deleteItemFromCartFunc(cartItem.id)
                            }
                          >
                            <HighlightOffIcon />
                          </button>
                        </td>
                      </tr>
                    );
                  })}

                  <tr>
                    <td></td>
                    <td>
                      <h5 className="font-weight-bold">Total</h5>
                    </td>
                    <td>
                      <h5 className="font-weight-bold">
                        {this.props.cartList.reduce(
                          (accumulator, current) =>
                            accumulator + current.totalPrice,
                          0
                        )}
                        USD
                      </h5>
                    </td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </table>
        </div>
        <CheckOutModule />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cartList: state.cartReducer.cartList,
  user: state.authReducer.user,
});

const mapActionToProps = {
  deleteItemFromCart: actions.deleteItemFromCart,
};

export default connect(mapStateToProps, mapActionToProps)(MyCart);
