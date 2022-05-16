import React from "react";
import Stripe from "react-stripe-checkout";
import axios from "axios";
import { connect } from "react-redux";
import * as actions from "../../actions/CartActions";
import { Modal, ModalHeader, ModalBody } from "reactstrap";

class Payment extends React.Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.handleToken = this.handleToken.bind(this);
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

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  async handleToken(token) {
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

    await axios
      .post(
        process.env.REACT_APP_BACKEND_URL + "/api/payment/charge",
        this.props.cartItemList,
        {
          headers: {
            token: token.id,
            amount: this.props.totalAmount,
            userid: this.props.userID,
          },
        }
      )
      .then(async () => {
        const newSms = {
          phoneNumber: "+94779142664",
          message: `Congratulations! ${this.props.userName}. Your order has been received. Order will be received to ${this.props.address}`,
        };

        await axios.post(
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
          .post(process.env.REACT_APP_BACKEND_URL + "/api/mail/send", newMail)
          .then(() => {
            this.props.getItemFromCart(this.props.userID);

            this.setState({
              modalDelivery: !this.state.modalDelivery,
              processStatusAlert: "alert alert-warning",
              processStatusMessage: "Processing...",
            });

            axios
              .post(
                process.env.REACT_APP_DELIVERY_BACKEND_URL + "/api/delivery",
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
  }

  render() {
    return (
      <div style={{ borderRadius: "25px" }}>
        <Stripe
          stripeKey={process.env.REACT_APP_STRIPE_KEY}
          token={this.handleToken}
          amount
        />
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

export default connect(null, mapActionToProps)(Payment);
