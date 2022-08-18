import React from "react";
import { Col, Container, Row, Section } from "../../style/globalStyle";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupSchemas } from "../../utils/validation/signupSchema";
import { useDispatch, useSelector } from "react-redux";
import {
  ColSignup,
  Form,
  HeadingOne,
  Paragraph,
  LabelForm,
  Error,
} from "./signupStyle";
import Button from "../../components/button";
import { fetchSignup, selectUser } from "../../store/reducers/auth";
import toast from "react-hot-toast";

const Signup = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signupSchemas),
  });
  const onSubmits = async (data) => {
    const { firstName, lastName, email, password, passwordConfirmation } = data;
    const result = await dispatch(
      fetchSignup({
        firstName,
        lastName,
        email,
        password,
        passwordConfirmation,
      })
    );

    if (fetchSignup.rejected.match(result)) {
      if (result.payload?.message) {
        console.log(result.payload.message);
        toast.error(result.payload.message);
      }
    }

    if (fetchSignup.fulfilled.match(result)) {
      toast.success("Signup success");
    }
  };

  return (
    <Section padding={"50px 0"}>
      <Container>
        <Row>
          <Col width={"40%"}>
            <HeadingOne>Signup</HeadingOne>
            <Paragraph>sign up and get exclusive offers from us</Paragraph>
            <Form onSubmit={handleSubmit(onSubmits)}>
              <div className="name-parent">
                <div>
                  <LabelForm>first name</LabelForm>
                  <input
                    {...register("firstName")}
                    type="text"
                    placeholder="your first name"
                  />
                  <Error className={"error"}>
                    {errors.firstName && errors.firstName.message}
                  </Error>
                </div>
                <div>
                  <LabelForm>last name</LabelForm>
                  <input
                    {...register("lastName")}
                    type="text"
                    placeholder="your last name"
                  />
                  <Error className={"error"}>
                    {errors.lastName && errors.lastName.message}
                  </Error>
                </div>
              </div>

              <LabelForm>enter your email address</LabelForm>
              <input
                {...register("email")}
                type="email"
                placeholder="name@exampl.com"
              />
              <Error className={"error"}>
                {errors.email && errors.email.message}
              </Error>
              <LabelForm>enter your password</LabelForm>
              <input
                {...register("password")}
                type="password"
                placeholder="************"
              />
              <Error className={"error"}>
                {errors.password && errors.password.message}
              </Error>
              <LabelForm>confirm your password</LabelForm>
              <input
                {...register("passwordConfirmation")}
                type="password"
                placeholder="************"
              />
              <Error className={"error"}>
                {errors.passwordConfirmation &&
                  errors.passwordConfirmation.message}
              </Error>
              <Button type="button" text={"Sign up"} />
            </Form>
            <Paragraph className={"have-account"}>
              have an account ? <Link to="/login">login</Link>
            </Paragraph>
          </Col>
          <ColSignup className={"signup-photo"} width={"60%"}></ColSignup>
        </Row>
      </Container>
    </Section>
  );
};

export default Signup;
