import React from "react";
import styled from "styled-components";
import First from "../../components/First";
import AboutMe from "../../components/About";
import Skill from "../../components/Skill";
import Experience from "../../components/Experience";
import Project from "../../components/Project";
import Contact from "../../components/Contact";
const WrapperHomePage = styled.div`
  margin: 0px 100px;
  @media only screen and (max-width: 600px) {
    overflow: hidden;
    margin: 0px;
  }
`;
export default function Home() {
  return (
    <div id="home-page">
      <WrapperHomePage>
        <First></First>
        <AboutMe></AboutMe>
        <Skill></Skill>
        <Experience></Experience>
        <Project></Project>
        <Contact></Contact>
      </WrapperHomePage>
    </div>
  );
}
