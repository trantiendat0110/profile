import React from "react";
import styled from "styled-components";
import Text from "./Text";
import Card from "./Card";
const AboutStyled = styled.section`
  padding: 165px 0;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 600px) {
    padding: 65px 0;
    display: block;
  }
`;
export default function AboutMe() {
  return (
    <AboutStyled id="about">
      <Card></Card>
      <Text></Text>
    </AboutStyled>
  );
}
