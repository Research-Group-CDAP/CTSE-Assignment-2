import React, { Component } from "react";

export class MyCartNotAvailable extends Component {
  render() {
    return (
      <div>
        <div className="card p-5">
          <div className="container">
            <div className="container text-center">
              <div className="alert alert-warning" role="alert">
                Sorry, you have to login first
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MyCartNotAvailable;
