import React, { Component } from "react";
import * as actions from "../../../actions/ItemActions";
import { connect } from "react-redux";

class UpdateItem extends Component {
  constructor(props) {
    super(props);
    this.onUpdateItem = this.onUpdateItem.bind(this);
    this.state = {
      productTitle: this.props.singleItem.productTitle,
      imageUrl: this.props.singleItem.imageUrl,
      price: this.props.singleItem.price,
      categoryId: this.props.singleItem.categoryId,
      quantity: this.props.singleItem.quantity,
      singleItem: this.props.singleItem,
      processStatus: false,
      processStatusAlert: "",
      processStatusMessage: "",
    };
  }

  onUpdateItem(e) {
    e.preventDefault();
    this.setState({
      processStatus: true,
      processStatusAlert: "alert alert-warning",
      processStatusMessage: "Please Wait...",
    });

    const updatedItem = {
      productTitle: this.state.productTitle,
      imageUrl: this.state.imageUrl,
      price: this.state.price,
      categoryId: this.state.categoryId,
      quantity: this.state.quantity,
    };

    this.props.updateItem(
      updatedItem,
      this.props.singleItem.id,
      () => {
        this.props.fetchAllItems();
        this.setState({
          processStatusAlert: "alert alert-success",
          processStatusMessage: "Item updated successfully",
        });
      },
      () => {
        this.setState({
          processStatusAlert: "alert alert-danger",
          processStatusMessage: "Item updated failed.Please try again.",
        });
      }
    );
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onUpdateItem}>
          <div className="form-group formDiv">
            {this.state.processStatus ? (
              <div className={this.state.processStatusAlert} role="alert">
                {this.state.processStatusMessage}
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => {
                this.setState({ productTitle: e.target.value });
              }}
              value={this.state.productTitle}
            />
          </div>
          <div className="form-group">
            <label>Quantity</label>
            <input
              type="number"
              className="form-control"
              onChange={(e) => {
                this.setState({ quantity: e.target.value });
              }}
              value={this.state.quantity}
            />
          </div>
          <div className="form-group">
            <label>Price</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => {
                this.setState({ price: e.target.value });
              }}
              value={this.state.price}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.authReducer.user,
});

const mapActionToProps = {
  updateItem: actions.updateItem,
  fetchAllItems: actions.fetchAllItems,
};

export default connect(mapStateToProps, mapActionToProps)(UpdateItem);
