import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../actions/AuthActions";

class UserLogin extends Component {
  constructor(props) {
    super(props);
    this.onLogin = this.onLogin.bind(this);
    this.onValueChange = this.onValueChange.bind(this);
    this.state = {
      username: "",
      password: "",
      processStatus: false,
      processStatusAlert: "",
      processStatusMessage: "",
    };
  }

  onValueChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onLogin(e) {
    e.preventDefault();

    this.setState({
      processStatus: true,
      processStatusAlert: "alert alert-warning",
      processStatusMessage: "Please Wait...",
    });

    const loginUser = {
      email: this.state.username,
      password: this.state.password,
    };

    this.props.loginUser(
      loginUser,
      () => {
        this.setState({
          processStatusAlert: "alert alert-success",
          processStatusMessage: "Login successful",
        });
      },
      () => {
        this.setState({
          processStatusAlert: "alert alert-danger",
          processStatusMessage:
            "Username or password incorrect. Please try again.",
        });
      }
    );
  }

  render() {
    return (
      <div>
        <div>
          <div className="container">
            <form onSubmit={this.onLogin}>
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
                <label>Username</label>
                <input
                  type="text"
                  name="username"
                  className="form-control"
                  placeholder="Enter username"
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
                <button type="submit" className="btn btn-warning">
                  LOGIN
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapActionToProps = {
  loginUser: actions.loginUser,
};

export default connect(null, mapActionToProps)(UserLogin);
