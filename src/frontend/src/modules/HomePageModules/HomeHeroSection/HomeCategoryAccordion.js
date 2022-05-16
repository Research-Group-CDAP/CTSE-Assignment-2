import React, { Component } from "react";
import LogoImg from "../../../assets/img/HomePage/logo.png";

export class HomeCategoryAccordion extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "#f0f0f0" }}>
        <div className="text-center">
          <img
            src={LogoImg}
            alt="logo"
            style={{ width: "250px", height: "350px" }}
          />
        </div>
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                APPLE
              </button>
            </h2>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                SAMSUNG
              </button>
            </h2>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                OPPO
              </button>
            </h2>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                NOKIA
              </button>
            </h2>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeCategoryAccordion;
