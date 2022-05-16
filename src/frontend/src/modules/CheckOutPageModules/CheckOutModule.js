import React, { Component } from "react";
import { connect } from "react-redux";
import Payment from "../PaymentModules/Payment";
import PaymentMobile from "../PaymentModules/PaymentMobile";

class CheckOutModule extends Component {
  constructor(props) {
    super(props);
    this.onCheckOut = this.onCheckOut.bind(this);
    this.state = {
      payBtn: false,
      email: "",
      contactno: "",
      address: "",
    };
  }

  onCheckOut(e) {
    e.preventDefault();
    this.setState({ payBtn: !this.state.payBtn });
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-lg-4">
            <div className="card mt-5">
              <div className="card-body">
                <h4>NOTE</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="card mt-5">
              <div className="card-body">
                <form onSubmit={this.onCheckOut}>
                  <div class="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      name="email"
                      class="form-control"
                      placeholder="Enter email"
                      value={this.props.user.email}
                    />
                  </div>
                  <div class="form-group">
                    <label>Contact Number</label>
                    <input
                      type="text"
                      name="contactno"
                      class="form-control"
                      placeholder="Contact Number"
                      onChange={(e) => {
                        this.setState({ contactno: e.target.value });
                      }}
                      required
                    />
                  </div>
                  <div class="form-group">
                    <label>Address</label>
                    <input
                      type="text"
                      name="address"
                      class="form-control"
                      placeholder="Address"
                      onChange={(e) => {
                        this.setState({ address: e.target.value });
                      }}
                      required
                    />
                  </div>
                  {this.state.payBtn ? (
                    ""
                  ) : (
                    <button
                      className="btn btn-warning"
                      type="submit"
                      disabled={this.props.cartList.length === 0}
                    >
                      CHECKOUT
                    </button>
                  )}
                </form>
                {this.state.payBtn ? (
                  <div className="row" style={{ width: "100%" }}>
                    <div
                      className="col-mg-6 col-md-6 col-sm-6"
                      style={{ width: "30%" }}
                    >
                      <Payment
                        cartItemList={this.props.cartList}
                        userID={this.props.user.id}
                        userName={this.props.user.username}
                        email={
                          this.state.email !== ""
                            ? this.state.email
                            : this.props.user.email
                        }
                        contactno={this.state.contactno}
                        address={this.state.address}
                        totalAmount={this.props.cartList.reduce(
                          (accumulator, current) =>
                            accumulator + current.totalPrice,
                          0
                        )}
                      />
                    </div>
                    <div
                      className="col-mg-6 col-md-6 col-sm-6"
                      style={{ width: "30%" }}
                    >
                      <PaymentMobile
                        cartItemList={this.props.cartList}
                        userID={this.props.user.id}
                        userName={this.props.user.username}
                        email={
                          this.state.email !== ""
                            ? this.state.email
                            : this.props.user.email
                        }
                        contactno={this.state.contactno}
                        address={this.state.address}
                        totalAmount={this.props.cartList.reduce(
                          (accumulator, current) =>
                            accumulator + current.totalPrice,
                          0
                        )}
                      />
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cartList: state.cartReducer.cartList,
  user: state.authReducer.user,
});

export default connect(mapStateToProps, null)(CheckOutModule);
