import React from "react";
import styled from "styled-components";
const NavStyle = styled.nav`
  margin: auto 0;
  margin-right: 100px;
  a {
    text-decoration: none;
    color: #707070;
    margin-left: 1.5em;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 36px;
    &:focus {
      color: #000;
    }
  }
  @media only screen and (max-width: 600px) {
    display: none;
    width: 100%;
    a {
      text-align: center;
      margin: 1em 1em;
    }
  }
`;
export default function Nav({ style }) {
  return (
    <NavStyle style={style}>
      <a href="#about">Giới thiệu</a>
      <a href="#skill">Kỹ năng</a>
      <a href="#experience">Học vấn</a>
      <a href="#project">Dự án</a>
      <a href="#contact">Liên hệ</a>
    </NavStyle>
  );
}
