import React, { Component } from "react";
import { connect } from "react-redux";
import UserImg from "../../assets/img/UserProfilePage/user.jpg";
import * as actions from "../../actions/CartActions";
import "./UserProfileModule.css";

class UserProfileModule extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container mt-4">
        <div className="container mb-3">
          <div className="row p-5 profileDetailsRow">
            <div className="col-lg-4 col-md-4 col-sm-12">
              <img
                src={UserImg}
                alt="logo"
                style={{ width: "200px", height: "200px" }}
              />
            </div>
            <div className="col-lg-8 col-md-8 col-sm-12 mt-3">
              <h1 className="text-muted">My Profile</h1>
              <hr />
              <div className="row mb-2">
                <div className="col-lg-4 col-md-4 col-sm-6 text-muted ">
                  Name
                </div>
                <div className="col-lg-8 col-md-8 col-sm-6 ">
                  {this.props.user.username}
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-lg-4 col-md-4 col-sm-6 text-muted ">
                  Email
                </div>
                <div className="col-lg-8 col-md-8 col-sm-6 ">
                  {this.props.user.email}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card userpurchasedtable">
          <div className="card-body mt-2 userpurchasedtable">
            <div className="row mb-2 userpurchasedtable">
              <table className="table table-md table-responsive userpurchasedtable">
                <div className="table-responsive userpurchasedtable">
                  <table className="table align-middle userpurchasedtable">
                    <thead>
                      <th scope="col">Product</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Price ( USD )</th>
                      <th scope="col">Purchased Date</th>
                      <th scope="col"></th>
                    </thead>
                    <tbody>
                      {this.props.payedCartList &&
                        this.props.payedCartList.map((cartItem) => {
                          return (
                            <tr>
                              <td>{cartItem.itemName}</td>
                              <td>{cartItem.qty}</td>
                              <td>{cartItem.totalPrice}</td>
                              <td>{cartItem.modifiedDate}</td>
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
                            {this.props.payedCartList.reduce(
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
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  payedCartList: state.cartReducer.payedCartList,
  user: state.authReducer.user,
});

const mapActionToProps = {
  getPayedItemsFromCart: actions.getPayedItemsFromCart,
};
export default connect(mapStateToProps, mapActionToProps)(UserProfileModule);
