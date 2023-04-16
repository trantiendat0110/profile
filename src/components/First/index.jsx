import React from "react";
import Intro from "./Intro";
import styled from "styled-components";
import MyImage from "./MyImage";
const WrapperStyle = styled.section`
  margin-top: 0;
  display: flex;
  justify-content: space-between;
  padding: 180px 180px 90px 180px;
  background-color: #fdfdfd;
  @media only screen and (max-width: 600px) {
    margin: 0;
    padding: 100px 0px 100px 0px;
  }
`;
export default function First() {
  return (
    <div id="first">
      <WrapperStyle>
        <Intro></Intro>
        <MyImage></MyImage>
      </WrapperStyle>
    </div>
  );
}
