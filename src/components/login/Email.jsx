import React from "react";
import { FaArrowRight } from "react-icons/fa";
import {
  Container,
  Form,
  Heading,
  HeadingContainer,
  IconContainer,
  Input,
  InputContainer,
  Label,
  Section,
  SubHeading,
} from "./Components";

const Email = ({ setPage, setEmail, setPhone, email, phone }) => {
  return (
    <Container>
      <HeadingContainer>
        <Heading>Sign In</Heading>
        <SubHeading>Welcome, we missed you!</SubHeading>
      </HeadingContainer>
      <Form onSubmit={() => setPage("password")}>
        <Label htmlFor="email">Email Address *</Label>
        <InputContainer>
          <Input
            type="email"
            placeholder="Enter Email Address "
            required
            defaultValue={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <IconContainer type="submit">
            <FaArrowRight />
          </IconContainer>
        </InputContainer>
      </Form>
      <Section>--------------OR--------------</Section>
      <Form onSubmit={() => setPage("otp")}>
        <Label htmlFor="phone">Phone Number *</Label>
        <InputContainer>
          <Input
            type="text"
            pattern="[0-9]{10}"
            placeholder="Enter Phone Number "
            required
            defaultValue={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <IconContainer type="submit">
            <FaArrowRight />
          </IconContainer>
        </InputContainer>
      </Form>
    </Container>
  );
};

export default Email;
