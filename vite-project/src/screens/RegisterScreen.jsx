
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Context } from "../main.jsx";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import styled from "styled-components";
import { Link } from "react-router-dom";

const RegisterScreen = () => {
  const { isAuthenticated } = useContext(Context);
  const navigateTo = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = async (data) => {
    data.phone = `+92${data.phone}`;
    await axios
      .post("http://localhost:5000/api/users/", data, {
        withCredentials: true,
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        toast.success(res.data.message);
        navigateTo(`/otp-verification/${data.email}/${data.phone}`);
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };


  return (
    <Container>
      <FormContainer>
        <h2>Register</h2>
        <form className="auth-form" onSubmit={handleSubmit(handleRegister)}>
          <InputContainer>
            <label htmlFor="name">Name</label>
            <input type="text" placeholder="Name" required {...register("name")} />
          </InputContainer>
          <InputContainer>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Email"
              required
              {...register("email")}
            />
          </InputContainer>
          <InputContainer>
            <label htmlFor="phone">Phone</label>
            <div className="phone-container">
              <span>+92</span>
              <input
                type="number"
                placeholder="Phone"
                required
                {...register("phone")}
              />
            </div>
          </InputContainer>
          <InputContainer>
            <label htmlFor="organizationName">Organization Name</label>
            <div className="phone-container">
              {/* <span>+92</span> */}
              <input
                type="text"
                placeholder="Organization Name"
                required
                {...register("organizationName")}
              />
            </div>
          </InputContainer>
          <InputContainer>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Password"
              required
              {...register("password")}
            />
          </InputContainer>
          <VerificationMethod>
            <p>Select Verification Method</p>
            <div className="wrapper">
              <label>
                <input
                  type="radio"
                  name="verificationMethod"
                  value="email"
                  {...register("verificationMethod")}
                  required
                />
                Email
              </label>
              <label>
                <input
                  type="radio"
                  name="verificationMethod"
                  value="phone"
                  {...register("verificationMethod")}
                  required
                />
                Phone
              </label>
            </div>
          </VerificationMethod>
          <ButtonContainer>
            <button type="submit">Register</button>
          </ButtonContainer>
        </form>
        <p className="register-footer">
          Already have an account?{" "}
          <Link to="/login" className="register-link">
            Login
          </Link>
        </p>
      </FormContainer>
      
    </Container>
  );
};

export default RegisterScreen;

const Container = styled.div`
display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const FormContainer = styled.div`
  // background-color: rgba(183, 177, 218, 0.43); // Dark blue background
  background: rgba(31, 41, 55, 0.8); // Dark blue background
  padding: 40px;
  border-radius: 10px;
  color: white;
  width:25%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  h2 {
    text-align: center;
    // margin-bottom: 30px;
    // color: white; // Ensure h2 color is white
    font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #4f46e5;
  }
  
`;

const InputContainer = styled.div`
  margin-bottom: 20px;

  label {
    display: block;
    margin-bottom: 5px;
    color: white; // Ensure label color is white
  }

  input {
    width: 100%;
    padding: 19px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f0f0f0; // Light background for input fields
    color: #000; // Ensure input text color is black
  }

  .phone-container {
    display: flex;
    align-items: center;
  }
`;

const VerificationMethod = styled.div`
  margin-bottom: 20px;

  p {
    margin-bottom: 10px;
    color: white; // Ensure paragraph color is white
  }
`;

const ButtonContainer = styled.div`
  text-align: center;

  button {
    background-color: #007bff;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom:25px;
  }
  button:hover {
    background: linear-gradient(to right, #2563eb, #1d4ed8);
  }
`;