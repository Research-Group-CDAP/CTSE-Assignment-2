import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import { connect } from "react-redux";

class ItemBarGraph extends Component {
  render() {
    return (
      <div>
        <div>
          <div>
            <div>
              <Bar
                data={{
                  labels: this.props.stockBrandList
                    .slice(0, 6)
                    .map((singleItem) => singleItem.brand)
                    .reverse(),
                  datasets: [
                    {
                      data: this.props.stockBrandList
                        .slice(0, 6)
                        .map((singleItem) => singleItem.quantity)
                        .reverse(),
                      backgroundColor: [
                        "#bf00c2",
                        "#ff2684",
                        "#3254a8",
                        "#3da19c",
                        "#06adbf",
                        "#f7d619",
                      ],
                      label: "",
                    },
                  ],
                }}
                options={{
                  animation: {
                    animateScale: true,
                  },
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  stockBrandList: state.itemReducer.stockBrandList,
});

export default connect(mapStateToProps, null)(ItemBarGraph);
