import React from "react";
import { Col, Container, Row, Section } from "../../style/globalStyle";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupSchemas } from "../../utils/validation/signupSchema";
import { useDispatch, useSelector } from "react-redux";
import GridLoader from "react-spinners/GridLoader";
import {
  ColSignup,
  Form,
  HeadingOne,
  Paragraph,
  LabelForm,
  Error,
  LoadingSection,
} from "./signupStyle";
import Button from "../../components/button";
import { fetchSignup } from "../../store/reducers/authSlice";
import toast, { Toaster } from "react-hot-toast";

const Signup = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.authStore.isLoading);
  let navigate = useNavigate();

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

    if (fetchSignup.fulfilled.match(result)) {
      toast.success("Successfully registered!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      navigate("/login");
    }
    if (fetchSignup.rejected.match(result)) {
      if (result.payload?.message) {
        toast.error(result.payload.message);
      }
    }


  };

  return (
    <>
      {loading ? (
        <LoadingSection>
          <GridLoader color="#fcdd06" size={20} />
        </LoadingSection>
      ) : (
        <>
          <Section padding={"50px 0"}>
            <Container>
              <Row>
                <Col width={"40%"}>
                  <HeadingOne>Signup</HeadingOne>
                  <Paragraph>
                    sign up and get exclusive offers from us
                  </Paragraph>
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
          <Toaster
            toastOptions={{
              className: "",
              style: {
                border: "1px solid #713200",
                padding: "16px",
                color: "#713200",
                fontSize: "1.2rem",
                width: "100%",
                fontWeight: "bold",
              },
            }}
          />
        </>
      )}
    </>
  );
};

export default Signup;
