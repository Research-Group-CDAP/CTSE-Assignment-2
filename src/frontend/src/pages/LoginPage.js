import React, { useState } from "react";
import { Modal, Button, Tabs, Tab } from "react-bootstrap";
import SellerLogin from "../components/common/Login/SellerLogin";
import UserLogin from "../components/common/Login/UserLogin";

const LoginPage = () => {
  let [show, setShow] = useState(false);

  function handleShow() {
    setShow(true);
  }

  const handleClose = () => {
    setShow(false);
  };
  return (
    <div>
      <Button variant="success" onClick={handleShow}>
        Login
      </Button>
      <div className="container m-0 p-0 LoginPageDiv">
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton className="authFormModal">
            <Modal.Title>LOGIN</Modal.Title>
          </Modal.Header>
          <Modal.Body className="authFormModal">
            <Tabs defaultActiveKey="User" id="uncontrolled-tab-example">
              <Tab eventKey="User" title="User">
                <UserLogin />
              </Tab>
              <Tab eventKey="Seller" title="Seller">
                <SellerLogin />
              </Tab>
            </Tabs>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default LoginPage;
