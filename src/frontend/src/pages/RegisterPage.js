import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import Register from "../components/common/Register/Register";

export default function RegisterPage() {
  let [show, setShow] = useState(false);

  function handleShow() {
    setShow(true);
  }

  const handleClose = () => {
    setShow(false);
  };
  return (
    <div>
      <Button variant="warning" onClick={handleShow}>
        Register
      </Button>
      <div className="container">
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton className="authFormModal">
            <Modal.Title>REGISTER</Modal.Title>
          </Modal.Header>
          <Modal.Body className="authFormModal">
            <Register />
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
}
