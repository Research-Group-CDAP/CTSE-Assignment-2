import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/ItemActions";
import Navbar from "../components/common/Navbar/Navbar";
import ItemModules from "../modules/ItemModules/SingleItemView";
import Footer from "../components/common/Footer/Footer";
import LoadingComponent from "../components/common/LoadingComponent/LoadingComponent";
import CarouselItemListBySeller from "../modules/ItemModules/CarouselItemListByBrand/CarouselItemListBySeller";

class ViewItemPage extends Component {
  componentDidMount() {
    this.props.fetchItemById(this.props.match.params.productid);
    this.props.fetchAllItems();
  }

  render() {
    return (
      <div>
        {this.props.singleItem ? (
          <>
            <Navbar />
            <ItemModules singleItem={this.props.singleItem} />
            <CarouselItemListBySeller />

            <Footer />
          </>
        ) : (
          <LoadingComponent />
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  singleItem: state.itemReducer.singleItem,
  user: state.authReducer.user,
});

const mapActionToProps = {
  fetchItemById: actions.fetchItemById,
  fetchAllItems: actions.fetchAllItems,
};

export default connect(mapStateToProps, mapActionToProps)(ViewItemPage);
