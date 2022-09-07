import React from "react";
import SwiperComp from "../../components/swiper";
import { Container } from "../../style/globalStyle";
import { SectionHome } from "./homeStyle";

const Home = () => {
  return (
    <>
      <SectionHome>
        <Container>
          <SwiperComp />
        </Container>
      </SectionHome>
    </>
  );
};

export default Home;
