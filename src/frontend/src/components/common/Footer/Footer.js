import React, { Component } from "react";
import "./Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <div className="FooterBackground">
        <div className="container-fluid">
          <div className="card cardFooter">
            <div className="heading text-center">
              <div className="head1">ClickToCart</div>
              <p className="bdr"></p>
            </div>
            <div className="card-body">
              <div className="row m-0 pt-5">
                <div className="card col-12 col-md-3 cardFooter">
                  <div className="card-content">
                    {" "}
                    <i className="fas fa-hand-holding-usd fa-3x"></i>
                    <div className="card-title"> Fast delivery </div>
                    <p>
                      <small>
                        Lorem Ipsum is simply dummy text of the printing
                      </small>
                    </p>
                    <div className="learn-more">
                      <p>
                        {" "}
                        <small>
                          {" "}
                          LEARN MORE{" "}
                          <label>
                            <i className="fas fa-angle-right"></i>
                          </label>{" "}
                        </small>{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card col-12 col-md-3 cardFooter">
                  <div className="card-content">
                    {" "}
                    <i className="far fa-handshake fa-3x"></i>
                    <div className="card-title"> ACCEPT ELECTRONIC CHECK </div>
                    <p>
                      <small>
                        Lorem Ipsum is simply dummy text of the printing
                      </small>
                    </p>
                    <div className="learn-more">
                      <p>
                        {" "}
                        <small>
                          {" "}
                          LEARN MORE{" "}
                          <label>
                            <i className="fas fa-angle-right"></i>
                          </label>{" "}
                        </small>{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card col-12 col-md-3 cardFooter">
                  <div className="card-content">
                    {" "}
                    <i className="fas fa-mobile-alt fa-3x"></i>
                    <div className="card-title">
                      {" "}
                      STREAMLINE PHONE PAYMENTS{" "}
                    </div>
                    <p>
                      <small>
                        Lorem Ipsum is simply dummy text of the printing
                      </small>
                    </p>
                    <div className="learn-more">
                      <p>
                        {" "}
                        <small>
                          {" "}
                          LEARN MORE{" "}
                          <label>
                            <i className="fas fa-angle-right"></i>
                          </label>{" "}
                        </small>{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card col-12 col-md-3 cardFooter">
                  <div className="card-content">
                    {" "}
                    <i className="fas fa-user-secret fa-3x"></i>
                    <div className="card-title">
                      {" "}
                      STAY
                      <br /> SECURE{" "}
                    </div>
                    <p>
                      <small>
                        Lorem Ipsum is simply dummy text of the printing
                      </small>
                    </p>
                    <div className="learn-more">
                      <p>
                        {" "}
                        <small>
                          {" "}
                          LEARN MORE{" "}
                          <label>
                            <i className="fas fa-angle-right"></i>
                          </label>{" "}
                        </small>{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer row m-0">
              <p>
                {" "}
                <label>
                  {" "}
                  <i className="fas fa-phone fa-rotate-90 text-primary"></i>{" "}
                </label>{" "}
                800-601-0230
              </p>
              <div>
                <p>
                  {" "}
                  <small className="follow-text">
                    FOLLOW US ON SOCIAL MEDIA
                  </small>{" "}
                  <label className="footer-right">
                    {" "}
                    <i className="fab fa-instagram"></i>{" "}
                    <i className="fab fa-facebook-square"></i>{" "}
                    <i className="fab fa-linkedin"></i>{" "}
                    <i className="fab fa-twitter-square"></i>{" "}
                  </label>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
