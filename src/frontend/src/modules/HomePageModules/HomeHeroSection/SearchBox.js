import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../actions/ItemActions";
import "./SearchBox.css";

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.onValueChange = this.onValueChange.bind(this);
    this.checkProducts = this.checkProducts.bind(this);
    this.state = {
      name: "",
    };
  }

  checkProducts(list) {
    if (this.state.name !== "") {
      return (
        list.name.toLowerCase().includes(this.state.name.toLowerCase()) ||
        list.brand.toLowerCase().includes(this.state.name.toLowerCase()) ||
        list.sellarName.toLowerCase().includes(this.state.name.toLowerCase())
      );
    } else {
      return list;
    }
  }

  async onValueChange(e) {
    await this.setState({ [e.target.name]: e.target.value });

    this.props.filterAllItems(this.props.itemList.filter(this.checkProducts));
  }

  render() {
    return (
      <div>
        <div className="searchBoxBody mt-2">
          <div className="wrap">
            <div className="search">
              <input
                type="text"
                name="name"
                className="searchTerm"
                placeholder="What are you looking for?"
                onChange={(e) => {
                  this.onValueChange(e);
                }}
              />
              <button type="submit" className="searchButton">
                <i className="fa fa-search"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  itemList: state.itemReducer.itemList,
});
const mapActionToProps = {
  filterAllItems: actions.filterAllItems,
};

export default connect(mapStateToProps, mapActionToProps)(SearchBox);
