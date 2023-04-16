import React from "react";
import Card from "./Card";
import styled from "styled-components";
const ProjectStyled = styled.section`
  padding: 5em 12em;
  h2 {
    padding: 1em;
    font-size: 3em;
    text-align: center;
  }
  .list-project {
    align-items: center;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
  @media only screen and (max-width: 600px) {
    margin: 0;
    padding: 50px 0px 100px 0px;
  }
`;
export default function Project() {
  return (
    <ProjectStyled id="project">
      <h2>Dự án</h2>
      <div className="list-project">
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </ProjectStyled>
  );
}
