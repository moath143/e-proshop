import styled from "styled-components";

export const ProfileSection = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  gap: 2%;
`;

export const Dashboard = styled.div`
  flex-basis: 30%;
  background: #f2f2f2;
  padding: 20px;
  border-radius: 16px;
  .photo {
    display: flex;
    align-items: center;
    gap: 4%;
    img {
      flex-basis: 48%;
      border: 4px solid #fcdd06;
    }
    p {
      flex-basis: 48%;
      font-size: 24px;
      font-weight: bold;
      text-transform: capitalize;
    }
  }
  ul {
    margin-top: 20px;
    li {
      padding: 15px 0;
      a {
        text-transform: capitalize;
        font-size: 20px;
        font-weight: 700;
        text-decoration: none;
        color: #242424;
      }
      &:last-of-type {
        border-top: 1px solid #b9b9b9;
      }
    }
  }
`;
export const Information = styled.div`
  flex-basis: 68%;
  background: #f2f2f2;
  padding: 51px 20px;
  border-radius: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4%;
  .info {
    flex-basis: 48%;
    p:first-child {
      font-size: 24px;
      font-weight: bold;
      text-transform: capitalize;
    }
    ul {
      margin-top: 20px;
      li {
        padding: 15px 0;
        display: flex;
        gap: 4%;
        font-size: 24px;
        span {
          color: #707070;
          text-transform: capitalize;
          flex-basis: 48%;
        }
        p {
          flex-basis: 48%;
        }
      }
    }
    button {
      background: #fcdd06;
      color: #000;
      border: none;
      border-radius: 5px;
      padding: 13px 35px;
      font-size: 20px;
      cursor: pointer;
      text-transform: capitalize;
      margin-top: 50px;
    }
  }
  .update-photo {
    flex-basis: 48%;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      border: 4px solid #fcdd06;
    }
    button {
      background: #fcdd06;
      color: #000;
      border: none;
      border-radius: 5px;
      padding: 13px 35px;
      font-size: 20px;
      cursor: pointer;
      text-transform: capitalize;
      margin-top: 50px;
    }
  }
`;
