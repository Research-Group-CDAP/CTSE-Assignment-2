import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ExplorePage from "../pages/ExplorePage";
import HomePage from "../pages/HomePage";
import SellerPage from "../pages/SellerPage";
import MyCartPage from "../pages/MyCartPage";
import ViewItemPage from "../pages/ViewItemPage";
import UserProfile from "../pages/UserProfile";
import SellerAddItemsPage from "../pages/SellerAddItemsPage";
import SellerUpdateItemsPage from "../pages/SellerUpdateItemsPage";
import SellerViewItemPage from "../pages/SellerViewItemPage";
import ScrollToTop from "../components/common/ScrollToTop/ScrollToTop";

class RoutesComponent extends Component {
  render() {
    return (
      <Router>
        <ScrollToTop>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/seller" exact component={SellerPage} />
            <Route
              path="/seller/additem"
              exact
              component={SellerAddItemsPage}
            />
            <Route
              path="/seller/updateitem/:itemid"
              exact
              component={SellerUpdateItemsPage}
            />
            <Route
              path="/seller/viewitems"
              exact
              component={SellerViewItemPage}
            />

            <Route path="/" exact component={HomePage} />
            <Route path="/cart" exact component={MyCartPage} />
            <Route path="/explore" exact component={ExplorePage} />
            <Route path="/product/:productid" exact component={ViewItemPage} />
            <Route path="/profile" exact component={UserProfile} />
          </Switch>
        </ScrollToTop>
      </Router>
    );
  }
}

export default RoutesComponent;
