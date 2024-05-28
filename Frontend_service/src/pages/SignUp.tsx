import { Form } from "react-bootstrap";
import Button from "./components/Button";
import { useState } from "react";
import React from "react";
import Alert from "./components/Alert";
import { Link, useNavigate } from "react-router-dom";
function SignUp() {
  const [alertVisible, setAlertVisibility] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4041/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      console.log(response);

      if (!response.ok) {
        throw new Error("error in sending request");
      }
      navigate("/signIn");
    } catch (error) {
      console.error(error);
      console.log(error, "Error occured in posting data");
    }
  };

  const handleShow = () => {
    if (
      formData.name.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.password.trim() !== ""
    ) {
      setAlertVisibility(true);
    } else {
      console.log("fill in the provided inputs");
    }
  };
  const handleClose = () => {
    setAlertVisibility(false);
  };

  return (
    <div className="container-md w-25 mb-5 mt-5 pt-5 gap-5">
      <Link to="/">
        <img src="./arrow-left.svg" alt="" />
      </Link>
      {alertVisible && <Alert onClose={handleClose}>Email already used</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Text className="text-center m-5 text-success fw-bolder fs-2">
          Sign Up
        </Form.Text>
        <Form.Group className="m-4">
          <Form.Label className="fw-bold">Name</Form.Label>
          <Form.Control
            name="name"
            type="text"
            placeholder="Enter name"
            className="placeholder-color"
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="m-4">
          <Form.Label className="fw-bold">Email</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter email"
            className="placeholder-color"
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="m-4">
          <Form.Label className="fw-bold">Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Enter password"
            className="placeholder-color"
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button
          margin="m-2 ms-5"
          padding="ps-5 pe-5 "
          color="success"
          type="lg shadow-sm"
          alignment="center"
          onClick={handleShow}
        >
          Sign Up
        </Button>
      </Form>
    </div>
  );
}

export default SignUp;
