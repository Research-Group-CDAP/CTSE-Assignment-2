import React, { Component } from "react";
import * as actions from "../actions/ItemActions";
import { connect } from "react-redux";
import Navbar from "../components/common/Navbar/Navbar";
import SellerOptionSelection from "../modules/AdminPageModules/SellerOptionSelections/SellerOptionSelection";
import Footer from "../components/common/Footer/Footer";
import LoadingComponent from "../components/common/LoadingComponent/LoadingComponent";

class SellerPage extends Component {
  componentDidMount() {
    this.props.fetchAllItemsBySellarID(this.props.user.id);
    this.props.fetchStockByBrandSellar(this.props.user.id);
  }
  render() {
    return (
      <div>
        {this.props.stockBrandListPending &&
        this.props.sellarItemListPending ? (
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
  sellarItemListPending: state.itemReducer.sellarItemListPending,
  stockBrandListPending: state.itemReducer.stockBrandListPending,
});

const mapActionToProps = {
  fetchStockByBrandSellar: actions.fetchStockByBrandSellar,
  fetchAllItemsBySellarID: actions.fetchAllItemsBySellarID,
};
export default connect(mapStateToProps, mapActionToProps)(SellerPage);
