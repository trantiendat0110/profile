import React from "react";
import styled from "styled-components";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
const IntroductionStyle = styled.div`
  margin: auto 0;
  font-size: 1.5em;
  p {
    margin: 0.5em 0;
  }
  b {
    margin-left: -10px;
    font-size: 2em;
  }
  .icons {
    span {
      margin-right: 1em;
    }
    .icon-facebook {
      color: #104088;
    }
    .icon-instagram {
      color: #9024a1;
    }
    .icon-youtube {
      color: #dc4e41;
    }
  }
  button {
    margin-top: 2em;
    margin-left: -5px;
    padding: 1.3em 3em;
    font-size: 0.5em;
    border: 1px solid rgb(108 99 255 / 50%);
    text-transform: uppercase;
    letter-spacing: 2.5px;
    font-weight: 500;
    color: #000;
    background-color: #fff;
    border-radius: 2em;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;
  }

  button:hover {
    background-color: rgb(108 99 255);
    box-shadow: 0px 15px 20px rgb(108 99 255 / 50%);
    color: #fff;
    transform: translateY(-7px);
  }

  button:active {
    transform: translateY(-1px);
  }
  .typewriter {
    width: 21.5ch;
    white-space: nowrap;
    overflow: hidden;
    border-right: 4px solid #212121;
    animation: cursor 1s step-start infinite,
      text 3s steps(18) alternate infinite;
  }

  @keyframes cursor {
    0%,
    100% {
      border-color: #212121;
    }
  }

  @keyframes text {
    0% {
      width: 0;
    }
    50% {
      width: 5.5ch;
    }
    80% {
      width: 10ch;
    }
    100% {
      width: 21.5ch;
    }
  }
  @media only screen and (max-width: 600px) {
    margin: auto;
  }
`;
export default function Intro() {
  return (
    <IntroductionStyle>
      <p data-aos="fade-right" data-aos-duration="500">
        Hello i'm
      </p>
      <p data-aos="fade-right" data-aos-duration="800">
        <b>Trần Tiến Đạt</b>
      </p>
      <p data-aos="fade-right" data-aos-duration="1000" className="typewriter">
        I'm Front end Developer
      </p>
      <div>
        <div className="icons">
          <span className="icon-facebook">
            <BsFacebook></BsFacebook>
          </span>
          <span className="icon-instagram">
            <BsInstagram></BsInstagram>
          </span>
          <span className="icon-youtube">
            <BsYoutube></BsYoutube>
          </span>
        </div>
      </div>
      <button>GET MY CV</button>
    </IntroductionStyle>
  );
}
