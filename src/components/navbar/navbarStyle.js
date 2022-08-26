import styled from "styled-components";
import { typography } from "../../style/globalStyle";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: row wrap;
  gap: 2%;
`;
export const Brand = styled.div`
  flex-basis: 24%;
  h1 {
    a {
      color: #fff;
      text-decoration: none;
    }
    ${typography(40, "bold")};
    span {
      color: #fcdd06;
    }
  }
`;
export const SearchNav = styled.div`
  flex-basis: 48%;
  form {
    display: flex;
    input {
      width: 80%;
      text-indent: 10px;
      outline: none;
      border: none;
      border-radius: 5px 0 0 5px;
      background: #fff;
      padding: 10px 0;
      ${typography(16, "normal")};
    }
    button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 20%;
      gap: 3%;
      border: none;
      border-radius: 0 5px 5px 0;
      background: #fcdd06;
      color: #000;
      ${typography(16, "normal")};
      cursor: pointer;
    }
  }
`;
export const CommerceNav = styled.div`
  flex-basis: 23.5%;
  ul {
    display: flex;
    justify-content: space-evenly;
    gap: 3%;
    li {
      a {
        color: #fff;
        text-decoration: none;
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 10px;
        text-transform: uppercase;
        .fa-solid {
          font-size: 24px;
        }
      }
    }
  }
`;
