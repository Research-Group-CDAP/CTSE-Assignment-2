import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/ItemActions";
import Navbar from "../components/common/Navbar/Navbar";
import Footer from "../components/common/Footer/Footer";
import ExploreShoppingCart from "../modules/ExplorePageModules/ExploreShoppingCart/ExploreShoppingCart";
import LoadingComponent from "../components/common/LoadingComponent/LoadingComponent";
class ExplorePage extends Component {
  constructor(props) {
    super();
  }
  componentDidMount() {
    this.props.fetchAllItems();
  }
  render() {
    return (
      <div>
        {this.props.itemListPending ? (
          <LoadingComponent />
        ) : (
          <>
            <Navbar />
            <div className="container">
              <ExploreShoppingCart />
            </div>
            <Footer />
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  itemListPending: state.itemReducer.itemListPending,
});
const mapActionToProps = {
  fetchAllItems: actions.fetchAllItems,
};
export default connect(mapStateToProps, mapActionToProps)(ExplorePage);
