import React, { Component } from "react";
import LogoImg from "../../../assets/img/HomePage/logo.png";
import { connect } from "react-redux";
import * as actions from "../../../actions/ItemActions";

class ExploreShoppingCartForm extends Component {
  constructor(props) {
    super(props);
    this.onValueChange = this.onValueChange.bind(this);
    this.onValueChangeName = this.onValueChangeName.bind(this);
    this.checkProducts = this.checkProducts.bind(this);
    this.checkProductsByName = this.checkProductsByName.bind(this);
    this.state = {
      all: "",
      price: 0,
      name: "",
      ram: 0,
      brand: "",
    };
  }

  checkProducts(list) {
    if (
      (this.state.ram !== 0 &&
        this.state.price !== 0 &&
        this.state.brand !== "") ||
      (this.state.price !== 0 &&
        this.state.ram !== 0 &&
        this.state.brand !== "") ||
      (this.state.brand !== "" &&
        this.state.price !== 0 &&
        this.state.ram !== 0) ||
      (this.state.brand !== "" &&
        this.state.ram !== 0 &&
        this.state.price !== 0) ||
      (this.state.ram !== 0 &&
        this.state.brand !== "" &&
        this.state.price !== 0) ||
      (this.state.price !== 0 &&
        this.state.brand !== "" &&
        this.state.ram !== 0) ||
      (this.state.ram !== 0 &&
        this.state.brand !== "" &&
        this.state.price !== 0)
    ) {
      return (
        list.ram === parseInt(this.state.ram) &&
        list.price <= this.state.price &&
        list.brand.toLowerCase() === this.state.brand.toLowerCase()
      );
    } else if (this.state.ram !== 0 && this.state.price !== 0) {
      return (
        list.ram === parseInt(this.state.ram) && list.price <= this.state.price
      );
    } else if (this.state.ram !== 0 && this.state.brand !== "") {
      return (
        list.ram === parseInt(this.state.ram) &&
        list.brand.toLowerCase() === this.state.brand.toLowerCase()
      );
    } else if (this.state.price !== 0 && this.state.brand !== "") {
      return (
        list.brand.toLowerCase() === this.state.brand.toLowerCase() &&
        list.price <= this.state.price
      );
    } else if (this.state.ram !== 0) {
      return list.ram === parseInt(this.state.ram);
    } else if (this.state.price !== 0) {
      return list.price <= this.state.price;
    } else if (this.state.brand !== "") {
      return list.brand.toLowerCase() === this.state.brand.toLowerCase();
    } else {
      return list;
    }
  }

  async onValueChange(e) {
    await this.setState({ [e.target.name]: e.target.value });

    this.props.filterAllItems(this.props.itemList.filter(this.checkProducts));
  }

  checkProductsByName(list) {
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

  async onValueChangeName(e) {
    await this.setState({ [e.target.name]: e.target.value });

    this.props.filterAllItems(
      this.props.itemList.filter(this.checkProductsByName)
    );
  }

  render() {
    return (
      <div>
        <div className="text-center" style={{ backgroundColor: "#f0f0f0" }}>
          <img
            src={LogoImg}
            alt="logo"
            style={{ width: "250px", height: "350px" }}
          />
        </div>
        <form className="mt-3">
          {/* Categories Radio Button */}
          <div className="mb-3">
            <button
              className="btn btn-secondary btn-sm"
              onClick={(e) => {
                e.preventDefault();
                this.props.filterAllItems(this.props.itemList);
              }}
            >
              ALL
            </button>
          </div>

          <hr />
          <div className="mb-3">
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                name="name"
                id="name"
                placeholder="search"
                onChange={(e) => {
                  this.onValueChangeName(e);
                }}
              />
            </div>
          </div>
          <div className="mb-3">
            <label
              for="customRange1"
              className="form-label"
              style={{ fontWeight: "bold" }}
            >
              BRAND
            </label>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="brand"
                value="APPLE"
                id="brand1"
                onChange={(e) => {
                  this.onValueChange(e);
                }}
              />
              <label className="form-check-label" for="brand1">
                APPLE
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="brand"
                value="SAMSUNG"
                id="brand1"
                onChange={(e) => {
                  this.onValueChange(e);
                }}
              />
              <label className="form-check-label" for="brand1">
                SAMSUNG
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="brand"
                value="NOKIA"
                id="brand1"
                onChange={(e) => {
                  this.onValueChange(e);
                }}
              />
              <label className="form-check-label" for="brand1">
                NOKIA
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="brand"
                value="OPPO"
                id="brand1"
                onChange={(e) => {
                  this.onValueChange(e);
                }}
              />
              <label className="form-check-label" for="brand1">
                OPPO
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="brand"
                value="Huawei"
                id="brand1"
                onChange={(e) => {
                  this.onValueChange(e);
                }}
              />
              <label className="form-check-label" for="brand1">
                Huawei
              </label>
            </div>
          </div>

          <div className="mb-3">
            <label
              for="customRange1"
              className="form-label"
              style={{ fontWeight: "bold" }}
            >
              Price <span id="demo"> 0 LKR - {this.state.price}</span> LKR
            </label>
            <input
              name="price"
              type="range"
              className="form-range"
              value={this.state.price}
              min="0"
              max="10000"
              step="100"
              id="customRange1"
              onChange={(e) => {
                this.onValueChange(e);
              }}
            />
          </div>

          {/* Categories Radio Button */}
          <div className="mb-3">
            <label
              for="customRange1"
              className="form-label"
              style={{ fontWeight: "bold" }}
            >
              RAM
            </label>

            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="ram"
                value="1"
                id="ram1"
                onChange={(e) => {
                  this.onValueChange(e);
                }}
              />
              <label className="form-check-label" for="ram1">
                1 GB
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="ram"
                value="2"
                id="ram1"
                onChange={(e) => {
                  this.onValueChange(e);
                }}
              />
              <label className="form-check-label" for="ram1">
                2 GB
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="ram"
                value="3"
                id="ram1"
                onChange={(e) => {
                  this.onValueChange(e);
                }}
              />
              <label className="form-check-label" for="ram1">
                3 GB
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="ram"
                value="4"
                id="ram1"
                onChange={(e) => {
                  this.onValueChange(e);
                }}
              />
              <label className="form-check-label" for="ram1">
                4 GB
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="ram"
                value="6"
                id="ram1"
                onChange={(e) => {
                  this.onValueChange(e);
                }}
              />
              <label className="form-check-label" for="ram1">
                6 GB
              </label>
            </div>
          </div>
        </form>
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

export default connect(
  mapStateToProps,
  mapActionToProps
)(ExploreShoppingCartForm);
