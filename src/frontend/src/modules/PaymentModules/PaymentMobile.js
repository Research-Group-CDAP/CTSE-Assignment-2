import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import * as actions from "../../actions/CartActions";
import { Modal, ModalHeader, ModalBody } from "reactstrap";

class PaymentMobile extends Component {
  constructor(props) {
    super(props);
    this.onPayWithMobile = this.onPayWithMobile.bind(this);
    this.toggle = this.toggle.bind(this);
    this.toggleDelivery = this.toggleDelivery.bind(this);

    this.state = {
      modal: false,
      modalDelivery: false,
      processStatusAlert: "",
      processStatusMessage: "",
    };
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  toggleDelivery() {
    this.setState({
      modalDelivery: !this.state.modalDelivery,
    });
  }

  onPayWithMobile() {
    const newPayment = {
      amount: this.props.totalAmount,
      mobilenumber: this.props.contactno,
    };

    const deliveryObj = {
      address: this.props.address,
      phonenumber: this.props.contactno,
      paymentdate: new Date(),
      cusName: this.props.userName,
      cusID: this.props.userID,
    };

    const DataObj = {
      delivery: deliveryObj,
      deliveryItemList: this.props.cartItemList,
    };

    this.setState({
      modal: !this.state.modal,
      processStatusAlert: "alert alert-warning",
      processStatusMessage: "Processing your payment...",
    });

    axios
      .post(
        process.env.REACT_APP_MOBILE_PAYMENT + "/api/mobilePayment",
        newPayment
      )
      .then(() => {
        axios
          .post(
            process.env.REACT_APP_BACKEND_URL +
              "/api/payment/chargemobilepayment/" +
              this.props.userID,
            this.props.cartItemList
          )
          .then(() => {
            const newSms = {
              phoneNumber: "+94779142664",
              message: `Congratulations! ${this.props.userName}. Your order has been received. Order will be received to ${this.props.address}`,
            };

            axios.post(
              process.env.REACT_APP_BACKEND_URL + "/api/v1/sms",
              newSms
            );

            this.setState({
              processStatusAlert: "alert alert-success",
              processStatusMessage: "Congratulations!! Payment Success",
            });

            const newMail = {
              to: this.props.email,
              subject: "ClickToCart | Order Confirmation",
              text: `Congratulations! Your order has been received. Order will be received to ${this.props.address}`,
            };
            axios
              .post(
                process.env.REACT_APP_BACKEND_URL + "/api/mail/send",
                newMail
              )
              .then(() => {
                this.props.getItemFromCart(this.props.userID);

                this.setState({
                  modalDelivery: !this.state.modalDelivery,
                  processStatusAlert: "alert alert-warning",
                  processStatusMessage: "Processing...",
                });

                axios
                  .post(
                    process.env.REACT_APP_DELIVERY_BACKEND_URL +
                      "/api/delivery",
                    DataObj
                  )
                  .then(() => {
                    this.setState({
                      processStatusAlert: "alert alert-success",
                      processStatusMessage:
                        "Delivery information sent to the distributor ",
                    });
                  });
              });
          })
          .catch(() => {
            this.setState({
              processStatusAlert: "alert alert-danger",
              processStatusMessage: "Something went wrong",
            });
          });
      })
      .catch(() => {
        this.setState({
          processStatusAlert: "alert alert-danger",
          processStatusMessage: "Something went wrong",
        });
      });
  }

  render() {
    return (
      <div>
        <button
          className="btn btn-primary btn-sm"
          onClick={this.onPayWithMobile}
        >
          Pay With Mobile
        </button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Payment Status</ModalHeader>
          <ModalBody>
            <div className={this.state.processStatusAlert} role="alert">
              {this.state.processStatusMessage}
            </div>
          </ModalBody>
        </Modal>
        <Modal isOpen={this.state.modalDelivery} toggle={this.toggleDelivery}>
          <ModalHeader toggle={this.toggleDelivery}>
            Delivery Status
          </ModalHeader>
          <ModalBody>
            <div className={this.state.processStatusAlert} role="alert">
              {this.state.processStatusMessage}
            </div>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapActionToProps = {
  getItemFromCart: actions.getItemFromCart,
};

export default connect(null, mapActionToProps)(PaymentMobile);
