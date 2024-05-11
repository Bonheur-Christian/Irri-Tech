import { Form } from "react-bootstrap";
import Button from "./components/Button";
import "../custom.css";
import { useState } from "react";
import { Link } from "react-router-dom";
function SignIn() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4041/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error("error in sending the request.");
      } else {
        handleBtnShow;
        const data = await response.json();
        const token = data.token;
        localStorage.setItem("token", token);
        window.location.href='/profile'
      }
    } catch (error) {
      console.log(error, "Error detected in logging in.");
    }
  };
  const [show, setShow] = useState(false);
  const handleBtnShow = () => {
    setShow(true);
  };
  return (
    <div className="container-xxl  w-25 mb-5 mt-5 p-5">
       <Link to="/"><img src="./arrow-left.svg" alt=""/></Link>
      <Form onSubmit={handleSubmit}>
        <Form.Text className="text-center m-5 text-success fw-bolder fs-2">
          Sign In
        </Form.Text>
        <Form.Group className="m-4">
          <Form.Label className="fw-bold">Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            className="placeholder-color"
            name="name"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="m-4">
          <Form.Label className="fw-bold">Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            className="placeholder-color"
            name="email"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="m-4">
          <Form.Label className="fw-bold">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            className="placeholder-color"
            name="password"
            onChange={handleChange}
          />
        </Form.Group>
        <div className="d-flex">
          <p className="ms-4 mt-(-4)"> Already have an account? </p>
          <Link to="/signUp" className="text-success text-decoration-none">
            Sign Up
          </Link>
        </div>
        <Button
          margin="m-2 ms-5"
          padding="ps-5 pe-5 "
          color="success"
          type="lg"
          alignment="center"
        >
          Submit
        </Button>
      </Form>
      {show && (
        <Link to="/Profile" className="btn btn-info">
          Profile
        </Link>
      )}
    </div>
  );
}

export default SignIn;
