import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../actions/AuthActions";
import "./registerstyle.css";

class Register extends Component {
  constructor(props) {
    super(props);
    this.onRegister = this.onRegister.bind(this);
    this.onValueChange = this.onValueChange.bind(this);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      mobileNumber: "",
      address: "",
      password: "",
      role: "",
      processStatus: false,
      processStatusAlert: "",
      processStatusMessage: "",
    };
  }

  onValueChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onRegister(e) {
    e.preventDefault();

    this.setState({
      processStatus: true,
      processStatusAlert: "alert alert-warning",
      processStatusMessage: "Please Wait...",
    });

    const newUser = {
      first_name:  this.state.first_name,
      last_name:  this.state.last_name,
      email:  this.state.email,
      mobileNumber:  this.state.mobileNumber,
      address:  this.state.address,
      password:  this.state.password,
      role:  this.state.role,
    };

    this.props.registerUser(
      newUser,
      () => {
        this.setState({
          processStatusAlert: "alert alert-success",
          processStatusMessage: "Account created successfully",
        });
      },
      () => {
        this.setState({
          processStatusAlert: "alert alert-danger",
          processStatusMessage:
            "Something went wrong. Please try again with different username",
        });
      }
    );
  }

  render() {
    return (
      <div>
        <div className="container">
          <form onSubmit={this.onRegister}>
            <div className="form-group formDiv">
              {this.state.processStatus ? (
                <div className={this.state.processStatusAlert} role="alert">
                  {this.state.processStatusMessage}
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="form-group formDiv">
              <label>First Name</label>
              <input
                type="text"
                name="first_name"
                className="form-control"
                placeholder="Enter First Name"
                onChange={(e) => {
                  this.onValueChange(e);
                }}
              />
            </div>
            <div className="form-group formDiv">
              <label>Last Name</label>
              <input
                type="text"
                name="last_name"
                className="form-control"
                placeholder="Enter Last Name"
                onChange={(e) => {
                  this.onValueChange(e);
                }}
              />
            </div>
            <div className="form-group formDiv">
              <label>Email address</label>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter email"
                onChange={(e) => {
                  this.onValueChange(e);
                }}
              />
              <small className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group formDiv">
              <label>Mobile</label>
              <input
                type="text"
                name="mobileNumber"
                className="form-control"
                placeholder="Enter Mobile Number"
                onChange={(e) => {
                  this.onValueChange(e);
                }}
              />
            </div>
            <div className="form-group formDiv">
              <label>Address</label>
              <input
                type="text"
                name="address"
                className="form-control"
                placeholder="Enter Address"
                onChange={(e) => {
                  this.onValueChange(e);
                }}
              />
            </div>
            
            <div className="form-group formDiv">
              <label>Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Password"
                onChange={(e) => {
                  this.onValueChange(e);
                }}
              />
            </div>
            <div className="form-group formDiv">
              <label>Role</label>
              <select
                className="form-control"
                name="role"
                onChange={(e) => {
                  this.onValueChange(e);
                }}
              >
                <option value="user">User</option>
                <option value="mod">Seller</option>
              </select>
            </div>
            <div className="form-group formDiv">
              <button type="submit" className="btn btn-warning">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapActionToProps = {
  registerUser: actions.register,
};

export default connect(null, mapActionToProps)(Register);
