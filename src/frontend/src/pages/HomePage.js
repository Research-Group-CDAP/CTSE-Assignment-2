import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/ItemActions";
import Navbar from "../components/common/Navbar/Navbar";
import HomeHeroSection from "../modules/HomePageModules/HomeHeroSection/HomeHeroSection";
import ShoppingCart from "../modules/HomePageModules/ShoppingCart/ShoppingCart";
import Footer from "../components/common/Footer/Footer";
import CarouselItemListByBrand from "../modules/HomePageModules/CarouselItemListByBrand/CarouselItemListByBrand";
import LoadingComponent from "../components/common/LoadingComponent/LoadingComponent";

export class HomePage extends Component {
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
            <HomeHeroSection />
            <ShoppingCart />
            <CarouselItemListByBrand />
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
export default connect(mapStateToProps, mapActionToProps)(HomePage);
