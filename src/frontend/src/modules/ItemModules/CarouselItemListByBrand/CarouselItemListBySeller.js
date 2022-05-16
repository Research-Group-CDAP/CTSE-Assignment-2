import React, { Component } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { connect } from "react-redux";

class CarouselItemListBySeller extends Component {
  render() {
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
      },
    };
    return (
      <div
        className="container p-3 rounded"
        style={{ backgroundColor: "#e8e8e8" }}
      >
        <div className="mb-5">
          <h1 className="mt-2 mb-5 text-muted text-center font-weight-bold">
            RELATED SALES
          </h1>

          <Carousel responsive={responsive}>
            {this.props.itemList.map((item, index) => {
              return (
                <div
                  className="col-lg-11 ShoppingCartSingleItemCol"
                  key={index}
                >
                  <a href={`/product/${item.id}`}>
                    <div className="card ShoppingItemCard">
                      <img
                        className="card-img-top ShoppingItemImage"
                        src={item.imageUrl}
                        alt={`cartImg${item.id}`}
                      />
                      <div className="card-body text-center">
                        <h5 className="card-title text-dark">{item.productTitle}</h5>
                        <div className="row">
                          <div className="col-md-6 text-center">
                            <p className="card-text ">
                              <span className="priceTag">{item.price}USD</span>
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
                  </a>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  itemList: state.itemReducer.itemList,
});

export default connect(mapStateToProps, null)(CarouselItemListBySeller);
