import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class ExploreShoppingCartList extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
        <div className="row mb-5">
          {this.props.filterItemList.reverse().map((item) => {
            return (
              <div className="col-lg-3 col-md-4 col-sm-12 p-3 ShoppingCartSingleItemCol">
                <Link to={`/product/${item.id}`}>
                  <div className="card ShoppingItemCard">
                    <img
                      className="card-img-top ExploreShoppingItemImage"
                      src={item.imageUrl}
                      alt={`cartImg${item.id}`}
                    />
                    <div className="card-body text-center">
                      <h5 className="card-title text-dark">{item.productTitle}</h5>
                      <div className="row">
                        <div className="col-md-6 text-center">
                          <p className="card-text">
                            <span className="priceTag">{item.price} LKR</span>
                          </p>
                        </div>
                        <div className="col-md-6">
                          <p className="card-text text-secondary">
                            {item.quantity}
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
    );
  }
}

const mapStateToProps = (state) => ({
  filterItemList: state.itemReducer.filterItemList,
});

export default connect(mapStateToProps, null)(ExploreShoppingCartList);
