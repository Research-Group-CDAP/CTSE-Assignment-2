import React, { Component } from "react";
import loadingpieChart from "./img/pie_chart.png";
import { Doughnut } from "react-chartjs-2";
import { connect } from "react-redux";

const EmptyPieChart = () => (
  <div>
    <p>Exercise Tracker</p>
    <img src={loadingpieChart} style={{ width: "53%" }} alt="pie cahrt" />
  </div>
);

class ItemsPieChart extends Component {
  render() {
    return (
      <div>
        <div>
          <div>
            {this.props.sellarItemList.length === 0 ? (
              <EmptyPieChart />
            ) : (
              <Doughnut
                data={{
                  labels: this.props.sellarItemList
                    .slice(0, 6)
                    .map((singleItem) => singleItem.name)
                    .reverse(),
                  datasets: [
                    {
                      data: this.props.sellarItemList
                        .slice(0, 6)
                        .map((singleItem) => singleItem.stock)
                        .reverse(),
                      backgroundColor: [
                        "#bf00c2",
                        "#ff2684",
                        "#3254a8",
                        "#3da19c",
                        "#06adbf",
                        "#f7d619",
                      ],
                      label: "Weight",
                    },
                  ],
                }}
                options={{
                  animation: {
                    animateScale: true,
                  },
                }}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.authReducer.user,
  sellarItemList: state.itemReducer.sellarItemList,
});

export default connect(mapStateToProps, null)(ItemsPieChart);
