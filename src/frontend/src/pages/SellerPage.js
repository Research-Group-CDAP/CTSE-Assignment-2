import React, { Component } from "react";
import * as actions from "../actions/ItemActions";
import { connect } from "react-redux";
import Navbar from "../components/common/Navbar/Navbar";
import SellerOptionSelection from "../modules/AdminPageModules/SellerOptionSelections/SellerOptionSelection";
import Footer from "../components/common/Footer/Footer";
import LoadingComponent from "../components/common/LoadingComponent/LoadingComponent";

class SellerPage extends Component {
  componentDidMount() {
    this.props.fetchAllItems();
  }
  render() {
    return (
      <div>
        { this.props.itemListPending ? (
          <LoadingComponent />
        ) : (
          <div>
            <Navbar />
            <SellerOptionSelection />
            <Footer />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.authReducer.user,
  itemListPending: state.itemReducer.itemListPending,
});

const mapActionToProps = {
  fetchStockByBrandSellar: actions.fetchStockByBrandSellar,
  fetchAllItems: actions.fetchAllItems,
};
export default connect(mapStateToProps, mapActionToProps)(SellerPage);
