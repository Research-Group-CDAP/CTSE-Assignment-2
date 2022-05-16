import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./ShoppingCart.css";

export class ShoppingCart extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="row mb-5">
              {this.props.filterItemList
                .slice(0, 12)
                .reverse()
                .map((item, index) => {
                  return (
                    <div
                      className="col-lg-4 col-md-4 col-sm-12 p-3 ShoppingCartSingleItemCol"
                      key={index}
                    >
                      <Link to={`/product/${item.id}`}>
                        <div className="card ShoppingItemCard">
                          <img
                            className="card-img-top ShoppingItemImage"
                            src={item.imageUrl}
                            alt={`cartImg${item.id}`}
                          />
                          <div className="card-body text-center">
                            <h5 className="card-title text-dark">
                              {item.productTitle}
                            </h5>
                            <div className="row">
                              <div className="col-md-6 text-center">
                                <p className="card-text ">
                                  <span className="priceTag">
                                    {item.price}USD
                                  </span>
                                </p>
                              </div>
                              <div className="col-md-6 ">
                                <p className="card-text text-secondary">
                                  Stock {item.quantity}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  itemList: state.itemReducer.itemList,
  filterItemList: state.itemReducer.filterItemList,
});

export default connect(mapStateToProps, null)(ShoppingCart);
