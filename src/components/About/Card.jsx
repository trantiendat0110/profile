import React from "react";
import styled from "styled-components";
import aboutmeImg from "../../assets/img/aboutme.svg";
const CardStyled = styled.div`
  margin: auto;
  width: 40%;
  img {
    display: block;
  }
  @media only screen and (max-width: 600px) {
    display: none
  }
`;
export default function Card() {
  return (
    <CardStyled data-aos="fade-right">
      <img width={"400px"} src={aboutmeImg} alt="" />
    </CardStyled>
  );
}
