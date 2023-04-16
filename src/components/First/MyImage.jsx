import React from "react";
import styled from "styled-components";
import myImg from "../../assets/img/my-img.svg";
const MyImageStyle = styled.div`
  width: 50%;
  img {
    display: block;
    margin-left: auto;
    transition: all;
    &:hover {
      transform: rotate(5deg) !important;
    }
  }
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;
export default function MyImage() {
  return (
    <MyImageStyle>
      <img
        data-aos="fade-left"
        data-aos-duration="500"
        width={"400px"}
        src={myImg}
        alt=""
      />
    </MyImageStyle>
  );
}
