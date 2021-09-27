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

const Password = ({ setPage, email, pass }) => {
  const login = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    if (data.get("password") === pass) {
      alert("Logged In Successfully");
    } else {
      alert("Wrong Password", data.get("password"));
    }
  };
  return (
    <Container>
      <HeadingContainer>
        <Heading>Enter Password</Heading>
      </HeadingContainer>
      <Label htmlFor="email">Email Address *</Label>
      <InputContainer>
        <Input type="email" defaultValue={email} readOnly />
      </InputContainer>
      <span onClick={() => setPage("email")}>Wrong Email? CLick Here</span>
      <Form onSubmit={(e) => login(e)}>
        <Label htmlFor="password">Password *</Label>
        <InputContainer>
          <Input
            type="password"
            name="password"
            placeholder="Enter Password"
            required
          />
        </InputContainer>
        <span onClick={() => setPage("forgot")}>Forgot Password?</span>
        <Button type="submit">LogIn</Button>
      </Form>
    </Container>
  );
};

export default Password;
