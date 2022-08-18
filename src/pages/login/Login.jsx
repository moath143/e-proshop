import React from 'react'
import { Col, Container, Row, Section } from "../../style/globalStyle";
import { Link } from "react-router-dom";
import { ColLogin, Form, HeadingOne, Paragraph, LabelForm } from "./loginStyle";
import Button from "../../components/button";

const Login = () => {
  return (
    <Section padding={"50px 0"}>
      <Container>
        <Row>
          <Col width={"30%"}>
            <HeadingOne>login</HeadingOne>
            <Paragraph>
              login with your data that entered during registration
            </Paragraph>
            <Form>
              <LabelForm>enter your email address</LabelForm>
              <input type="email" placeholder="name@exampl.com" />
              <LabelForm>enter your password</LabelForm>
              <input type="password" placeholder="************" />
              <Button type="button" text={"login"} />
            </Form>
            <Paragraph className={"have-account"}>
              <Link to="/forgot-password">forgot your password?</Link>
            </Paragraph>
            <Paragraph className={"sign-up"}>
              <Link to="/signup">sign up now</Link>
            </Paragraph>
          </Col>
          <ColLogin className={"login-photo"} width={"70%"}></ColLogin>
        </Row>
      </Container>
    </Section>
  );
}

export default Login
