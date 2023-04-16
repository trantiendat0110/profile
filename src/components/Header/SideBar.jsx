import React, { useState } from "react";
import { FaListUl } from "react-icons/fa";
import styled from "styled-components";
import Nav from "./Nav";
const SideBarStyled = styled.div`
  display: none;
  margin: auto;
  margin-right: 1em;
  span {
    display: none;
    font-size: 1.5em;
    background-color: rgb(108, 99, 255);
    color: #fff;
    padding: 0.2em 0.4em 0.1em;
    border-radius: 0.5em;
  }
  .wrapper {
    position: fixed;
    right: 0;
    top: 0;
    bottom: 0;
    width: 150px;
    background-color: #fff;
    box-shadow: 0 0 1px 1px #e4e4e4;
    animation: sidebar 0.2s ease-in;
  }
  .close-side {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #333;
    opacity: 0.4;
  }
  @keyframes sidebar {
    from {
      transform: translateX(100px);
    }
    to {
      transform: translateX(0);
    }
  }
  @media only screen and (max-width: 600px) {
    display: block;
    span {
      display: block;
    }
  }
`;
const styleNavBar = {
  display: "flex",
  flexDirection: "column",
};
export default function SideBar() {
  const [sidebar, setSidebar] = useState(false);

  return (
    <SideBarStyled>
      <span
        onClick={() => {
          setSidebar(!sidebar);
        }}
      >
        <FaListUl></FaListUl>
      </span>
      {sidebar ? (
        <>
          <div
            onClick={() => {
              setSidebar(!sidebar);
            }}
            className="close-side"
          ></div>
          <div
            className="wrapper"
            onClick={() => {
              setSidebar(!sidebar);
            }}
          >
            <Nav style={styleNavBar}></Nav>
          </div>
        </>
      ) : (
        ""
      )}
    </SideBarStyled>
  );
}
