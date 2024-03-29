import React, { useContext } from "react";
import styled from "styled-components";
import { AiFillFacebook, AiFillGithub, AiFillMail } from "react-icons/ai";
import { ThemeContext } from "../../contexts/ThemeContext";
const ContactStyled = styled.section`
  text-align: center;
  padding: 5em 0;
  h2 {
    padding: 1em;
    font-size: 3em;
    text-align: center;
  }
  a {
    svg {
      border-radius: 50%;
      height: fit-content;
      width: fit-content;
      background-color: #fff;
    }
    font-size: 3em;
    margin: 1em;
  }
  .icons-contact {
    margin-top: 5em;
    display: flex;
    justify-content: center;
  }
  .wrapper {
    margin: 2em auto;
    width: 200px;
    height: 60px;
    position: relative;
    z-index: 1;
    .circle {
      width: 20px;
      height: 20px;
      position: absolute;
      border-radius: 50%;
      background-color: #cecece;
      left: 15%;
      transform-origin: 50%;
      animation: circle7124 0.5s alternate infinite ease;
    }
    .circle:nth-child(2) {
      left: 45%;
      animation-delay: 0.2s;
    }

    .circle:nth-child(3) {
      left: auto;
      right: 15%;
      animation-delay: 0.3s;
    }

    .shadow {
      width: 20px;
      height: 4px;
      border-radius: 50%;
      background-color: rgba(0, 0, 0, 0.9);
      position: absolute;
      top: 62px;
      transform-origin: 50%;
      z-index: -1;
      left: 15%;
      filter: blur(1px);
      animation: shadow046 0.5s alternate infinite ease;
    }
    .shadow:nth-child(4) {
      left: 45%;
      animation-delay: 0.2s;
    }

    .shadow:nth-child(5) {
      left: auto;
      right: 15%;
      animation-delay: 0.3s;
    }
  }

  @keyframes circle7124 {
    0% {
      top: 60px;
      height: 5px;
      border-radius: 50px 50px 25px 25px;
      transform: scaleX(1.7);
    }

    40% {
      height: 20px;
      border-radius: 50%;
      transform: scaleX(1);
    }

    100% {
      top: 0%;
    }
  }

  @keyframes shadow046 {
    0% {
      transform: scaleX(1.5);
    }

    40% {
      transform: scaleX(1);
      opacity: 0.7;
    }

    100% {
      transform: scaleX(0.2);
      opacity: 0.4;
    }
  }
  @media only screen and (max-width: 600px) {
    margin: 0;
    padding: 100px 0px 100px 0px;
  }
`;
export default function Contact() {
  const themeContext = useContext(ThemeContext);

  return (
    <ContactStyled id="contact">
      <h2>Liên Hệ</h2>
      <p>Bạn có thể liên hệ tôi qua những cách bên dưới.</p>
      <div className="wrapper">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
      </div>
      <div className="icons-contact">
        <a href="https://www.facebook.com/Volyhucau11">
          <AiFillFacebook
            color={themeContext.theme ? "#003ba9" : "#0048ff"}
          ></AiFillFacebook>
        </a>
        <a href="https://github.com/trantiendat0110">
          <AiFillGithub
            color={themeContext.theme ? "#333" : "#000"}
          ></AiFillGithub>
        </a>
      </div>
    </ContactStyled>
  );
}
