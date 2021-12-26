import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Toast } from "react-bootstrap";

function ErrorNotifactions(props) {
  return (
    <Toast>
    <Toast.Header>
      <img className="rounded me-2" alt="" />
      <strong className="me-auto">{props.label}</strong>
      <small>{props.description}</small>
    </Toast.Header>
    <Toast.Body>{props.subLabel}</Toast.Body>
  </Toast>
  );
}

export default ErrorNotifactions;
