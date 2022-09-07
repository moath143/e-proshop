import styled from 'styled-components'

export const SlideProducts = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  gap: 4%;
  height: calc(100vh - 80px);

  > div {
    flex-basis: 48%;
  }

  .info {
    text-transform: capitalize;
    display: flex;
    flex-flow: column wrap;
    align-items: flex-start;
    h1 {
      margin: 10px 0;
      color: #242424;
      font-weight: bold;
      font-size: 50px;
    }
    p {
      color: #242424;
    }
    button {
      margin-top: 30px;
      border: none;
      background-color: #fcdd06;
      padding: 10px 30px;
      font-size: 18px;
      border-radius: 4px;
      cursor: pointer;
    }
  }

  .img {
    img {
      width: 100%;
    }
  }
`;