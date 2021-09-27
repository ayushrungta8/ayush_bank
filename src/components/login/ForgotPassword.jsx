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
const ForgotPassword = ({ setPage, newpass, setNewpass, otp }) => {
  const matchPassword = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    if (data.get("otp") === otp) {
      if (data.get("new-password") === data.get("confirm-new-password")) {
        alert("Password Changed");
      } else {
        alert("Passwords Don't Match");
      }
    } else {
      alert("Wrong Otp");
    }
  };

  return (
    <Container>
      <HeadingContainer>
        <Heading>Reset Password</Heading>
      </HeadingContainer>
      <Form onSubmit={(e) => matchPassword(e)}>
        <Label htmlFor="password">OTP *</Label>
        <InputContainer>
          <Input
            type="password"
            placeholder="Enter One Time Password"
            name="otp"
            required
          />
        </InputContainer>
        <Label htmlFor="password">New Password *</Label>
        <InputContainer>
          <Input
            type="password"
            placeholder="Enter New Password"
            name="new-password"
            required
            onChange={(e) => {
              setNewpass(e.target.value);
            }}
          />
        </InputContainer>
        <Label htmlFor="password">Confirm Password *</Label>
        <InputContainer>
          <Input
            type="password"
            placeholder="Confirm New Password"
            name="confirm-new-password"
            required
          />
        </InputContainer>
        <Button type="submit">Change Password</Button>
      </Form>
    </Container>
  );
};

export default ForgotPassword;
