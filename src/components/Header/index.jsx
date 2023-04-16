import React from "react";
import styled from "styled-components";
import Nav from "./Nav";
import avatar from "../../assets/img/avatar.svg";
import SideBar from "./SideBar";

const HeaderStyle = styled.header`
  z-index: 1000;
  box-shadow: 0 0 15px 1px #ececec;
  background-color: #fff;
  height: 87px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  width: 100%;
  left: 0px;
  top: 0px;
  right: 0px;

  @media only screen and (max-width: 600px) {
    height: 50px;
  }
`;
const LogoHeader = styled.a`
  text-decoration: none;
  color: #333;
  margin: auto 0;
  display: flex;
  margin-left: 100px;
  width: 159px;
  .logo-text {
    margin: auto;
    margin-left: 10px;
    .logo-text-name {
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 16px;
    }
    .logo-text-job {
      font-style: normal;
      font-weight: 100;
      font-size: 12px;
      line-height: 14px;
    }
  }
  @media only screen and (max-width: 600px) {
    margin-left: 1em;
    img {
      width: 40px;
      margin: auto;
    }
    .logo-text {
      margin: auto;
    }
  }
`;
export default function Header() {
  return (
    <HeaderStyle id="header">
      <LogoHeader href="#first">
        <div className="logo-image">
          <img width={"65px"} src={avatar} alt="w" />
        </div>
        <div className="logo-text">
          <p className="logo-text-name">Trần Tiến Đạt</p>
          <p className="logo-text-job">Web developer</p>
        </div>
      </LogoHeader>
      <SideBar></SideBar>
      <Nav></Nav>
    </HeaderStyle>
  );
}
