import React from "react";
import { Col, Container, Row, Section } from "../../style/globalStyle";
import { Link } from "react-router-dom";
import { ColLogin, Form, HeadingOne, Paragraph, LabelForm } from "./loginStyle";
import Button from "../../components/button";
import { useForm } from "react-hook-form";
import { loginSchema } from "../../utils/validation/loginSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { Error, LoadingSection } from "../signup/signupStyle";
import { fetchLogin } from "../../store/reducers/authSlice";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import GridLoader from "react-spinners/GridLoader";
import { useNavigate } from "react-router-dom";



const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.authStore);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });



  const onSubmit = async (data) => {
    const { email, password } = data;
    const result = await dispatch(fetchLogin({ email, password }));
    if (fetchLogin.rejected.match(result)) {
      if (result.payload?.message) {
        toast.error(result.payload.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }

    if (fetchLogin.fulfilled.match(result)) {
      // toast.success("Successfully login!", {
      //   position: "top-center",
      //   autoClose: 5000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      // });
      navigate("/");
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
                <Col width={"30%"}>
                  <HeadingOne>login</HeadingOne>
                  <Paragraph>
                    login with your data that entered during registration
                  </Paragraph>
                  <Form onSubmit={handleSubmit(onSubmit)}>
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
          <Toaster />
        </>
      )}
    </>
  );
};

export default Login;
