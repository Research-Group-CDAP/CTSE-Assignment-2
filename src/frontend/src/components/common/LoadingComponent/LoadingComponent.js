import React, { Component } from "react";
import ReactLoading from "react-loading";
import LogoImg from "../../../assets/img/HomePage/logo.png";
import "./LoadingComponent.css";

export class LoadingComponent extends Component {
  render() {
    return (
      <div className="LoadingBackground">
        <div className="container LoadingDiv text-center">
          <img
            src={LogoImg}
            alt="loadingImg"
            className="img-fluid LoadingImg"
          />
          <ReactLoading
            type="bars"
            color="#cf8a29"
            height={100}
            width={150}
            className="container text-center"
          />
        </div>
      </div>
    );
  }
}

export default LoadingComponent;
