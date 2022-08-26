import styled from "styled-components";
import { Col, flexBox } from "../../style/globalStyle";
import SignupPhoto from "../../assets/4.png";
import { typography } from "../../style/globalStyle";

export const ColSignup = styled(Col)`
  background-image: url(${SignupPhoto});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

export const Error = styled.p`
    color: #e16468;
    margin: 5px 0;
`;

export const Form = styled.form`
  ${flexBox("flex", "center", "start", "10px", "column", "wrap")};
  .name-parent {
    display: flex;
  }
  input {
    border: 1px solid #242424;
    border-radius: 6px;
    text-indent: 10px;
    padding: 12px 0;
    outline: none;
    width: 90%;
    font-size: 16px;
    &::placeholder {
      color: #707070;
      font-size: 16px;
    }
  }

  button {
    background: #fcdd06;
    border-radius: 6px;
    ${typography("22", "400")};
    color: #242424;
    width: 90%;
    outline: none;
    padding: 10px 0;
    border: 1px solid #fcdd06;
    margin: 20px 0;
    cursor: pointer;
  }
`;

export const HeadingOne = styled.h1`
  ${typography("60", "700")};
  text-transform: capitalize;
`;
export const Paragraph = styled.p`
  ${typography("32", "400")};
  line-height: 48px ;
  color: #707070;
  text-transform: capitalize;
  margin: 30px 0;
  &.have-account {
    ${typography("20", "400")};
    color: #707070;
    border-top: 1px solid #707070;
    width: 90%;
    text-align: center;
    padding: 20px 0;
    a{
        text-decoration: none;
        color: #000;
        font-weight: 600;
    }
  }
`;

export const LabelForm = styled.label`
  text-transform: capitalize;
  ${typography("22", "400")};
  margin-top: 30px;
`;

export const LoadingSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;



