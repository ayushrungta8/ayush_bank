import React from "react";
import {
  Button,
  Container,
  Form,
  Heading,
  HeadingContainer,
  Input,
  InputContainer,
  Label,
} from "./Components";

const Otp = ({ setPage, phone, otp }) => {
  const login = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    if (data.get("otp") === otp) {
      alert("Logged In Successfully");
    } else {
      alert("Wrong OTP");
    }
  };
  return (
    <Container>
      <HeadingContainer>
        <Heading>Enter OTP</Heading>
      </HeadingContainer>
      <Label htmlFor="phone">Phone Number *</Label>
      <InputContainer>
        <Input type="email" defaultValue={phone} readOnly />
      </InputContainer>
      <span onClick={() => setPage("email")}>
        Wrong Phone Number? CLick Here
      </span>
      <Form onSubmit={(e) => login(e)}>
        <Label htmlFor="password">OTP *</Label>
        <InputContainer>
          <Input
            type="password"
            placeholder="Enter One Time Password"
            required
            name="otp"
          />
        </InputContainer>
        <Button type="submit">LogIn</Button>
      </Form>
    </Container>
  );
};

export default Otp;
