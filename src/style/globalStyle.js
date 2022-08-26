import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body{
        font-family: muli, sans-serif;
    }

`;

export const Container = styled.div`
  width: 85%;
  margin: 0 auto;
`;

export const Ulist = styled.ul`
  list-style: none;
  padding: 0;
`;

export const flexBox = (display, justify, align, gap, direction, wrap) => {
  return `
        display: ${display};
        justify-content: ${justify};
        gap: ${gap};
        align-items: ${align};
        flex-direction: ${direction};
        flex-wrap: ${wrap};
    `;
};

export const typography = (size, bold) => {
  return `
    font-size: ${size / 16}rem;
    font-weight: ${bold};
    `;
};

export const Section = styled.section`
  padding: ${(props) => props.padding};
  background: ${(props) => props.bg};
  height: ${(props) => props.height};
`;

export const Row = styled.div`
  display: flex;
`;

export const Col = styled.div`
  width: ${(props) => props.width};
`;
