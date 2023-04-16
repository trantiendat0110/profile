import React from "react";
import styled from "styled-components";
import banner1 from "../../assets/img/skill-banner1.svg";
import banner2 from "../../assets/img/skill-banner2.svg";
import {
  DiCss3,
  DiHtml5,
  DiJavascript1,
  DiReact,
  DiPhp,
  DiMysql,
  DiFirebase,
} from "react-icons/di";
import { RiComputerLine } from "react-icons/ri";
const SkillStyled = styled.section`
  padding: 4em 12em;
  h2 {
    padding: 1em;
    font-size: 3em;
    text-align: center;
  }
  img {
    border: 1px solid #1966d2;
    border-radius: 1.5em;
    margin-left: auto;
    padding: 1em;
  }
  .main-skill {
    margin-top: 4em;
    display: flex;
    justify-content: space-between;
    .text-main-skill {
      margin: auto;
      font-size: 1.5em;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      span {
        font-size: 2em;
        display: flex;
        justify-content: space-around;
        margin-top: -10px;
        padding: 0.5em;
      }
    }
  }
  .other-skill {
    margin-top: 4em;
    display: flex;
    justify-content: space-between;
    img {
      border-radius: 1.5em;
    }
    .text-other-skill {
      text-align: center;
      flex: 1;
      margin: auto;
      p {
        font-size: 2em;
      }
      span {
        display: block;
        line-height: 2.8em;
      }
    }
  }
  @media only screen and (max-width: 600px) {
    margin: 0;
    padding: 50px 0px 100px 0px;
    img {
      width: 200px;
      margin: auto;
      margin-bottom: 2em;
    }
    .main-skill{
      flex-direction: column;
      img {
        display: none;
      }
    }
    .other-skill{
      flex-direction: column;
    }
  }
`;
export default function Skill() {
  return (
    <SkillStyled id="skill">
      <h2>Kỹ năng</h2>
      <div className="main-skill">
        <div
          className="text-main-skill"
          data-aos="fade-right"
          data-aos-duration="500"
        >
          <p>Frontend Developer</p>
          <span data-aos="fade-right" data-aos-duration="800">
            <DiCss3 color="blue"></DiCss3>
            <DiHtml5 color="red"></DiHtml5>
            <DiJavascript1 color="orange"></DiJavascript1>
            <DiReact color="#61dafb"></DiReact>
          </span>
          <p>Backend Developer</p>
          <span data-aos="fade-right" data-aos-duration="1000">
            <DiPhp color="#7377ad"></DiPhp>
            <DiMysql color="#ffdf05"></DiMysql>
            <DiFirebase color="#1966d2"></DiFirebase>
          </span>
        </div>
        <img
          data-aos-duration="500"
          width={"400px"}
          data-aos="fade-left"
          src={banner1}
          alt=""
        />
      </div>
      <div className="other-skill">
        <img
          width={"400px"}
          src={banner2}
          alt=""
          data-aos="fade-right"
          data-aos-duration="500"
        />
        <div
          className="text-other-skill"
          data-aos="fade-left"
          data-aos-duration="500"
        >
          <p data-aos="fade-left" data-aos-duration="800">
            Orther Skill
          </p>
          <span data-aos="fade-left" data-aos-duration="500">
            Reading basic English
          </span>
          <span data-aos="fade-left" data-aos-duration="1000">
            <RiComputerLine></RiComputerLine> Excel Word ...
          </span>
        </div>
      </div>
    </SkillStyled>
  );
}
