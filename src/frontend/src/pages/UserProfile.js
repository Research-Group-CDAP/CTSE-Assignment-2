import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/CartActions";
import Navbar from "../components/common/Navbar/Navbar";
import Footer from "../components/common/Footer/Footer";
import UserProfileModule from "../modules/UserModules/UserProfileModule";
import LoadingComponent from "../components/common/LoadingComponent/LoadingComponent";

class UserProfile extends Component {
  componentDidMount() {
    if (this.props.user) {
      this.props.getPayedItemsFromCart(this.props.user.id);
    } else {
      window.location = "/";
    }
  }
  render() {
    return (
      <div>
        {this.props.payedCartPending ? (
          <LoadingComponent />
        ) : (
          <div>
            <Navbar />
            <UserProfileModule />
            <Footer />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  payedCartPending: state.cartReducer.payedCartPending,
  user: state.authReducer.user,
});

const mapActionToProps = {
  getPayedItemsFromCart: actions.getPayedItemsFromCart,
};
export default connect(mapStateToProps, mapActionToProps)(UserProfile);
