import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../contexts/ThemeContext";
const FooterStyled = styled.footer`
  height: 100px;
  p {
    background-color: rgb(108 99 255);
    color: #fff;
    font-size: 1.5em;
    text-align: center;
    line-height: 100px;
  }
  @media only screen and (max-width: 600px) {
    height: 50px;
    margin-bottom: 2em;
    p {
      font-size: 1em;
    }
  }
`;
const lightStyle = {
  backgroundColor: "#000",
};
export default function Footer() {
  const themeContext = useContext(ThemeContext);

  return (
    <FooterStyled>
      <p style={!themeContext.theme ? lightStyle : null}>
        Cảm ơn đã ghé thăm trang web của tôi !
      </p>
    </FooterStyled>
  );
}
