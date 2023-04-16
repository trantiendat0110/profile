import React from "react";
import styled from "styled-components";
import { MdSchool } from "react-icons/md";
const ExperienceStyled = styled.section`
  padding: 5em 12em;
  h2 {
    padding: 1em;
    font-size: 3em;
    text-align: center;
  }
  span {
    margin: 2em 0;
    color: #fff;
    border-radius: 2em;
    width: fit-content;
    display: block;
    padding: 0.5em;
    background-color: #2449ff;
  }
  p {
    margin-bottom: 3em;
  }
  .experience-school {
    border-bottom: 1px solid #ccc;
  }
  .experience-f8 {
    margin-top: 3em;
  }
  @media only screen and (max-width: 600px) {
    margin: 0;
    padding: 50px 1em 100px 1em;
  }
`;
export default function Experience() {
  return (
    <ExperienceStyled id="experience">
      <h2>Học vấn</h2>
      <div className="experience-school" data-aos="fade-down" data-aos-duration="1000">
        <MdSchool size={"2em"} color="#2449ff"></MdSchool>
        <span>Now 2021</span>
        <p>TỐT NGHIỆP TRƯỜNG CAO ĐẴNG FPT ĐÀ NẴNG</p>
      </div>
      <div className="experience-f8" data-aos="fade-down" data-aos-duration="1400">
        <MdSchool size={"2em"} color="#2449ff"></MdSchool>
        <span>Now 2021</span>
        <p>HOÀ THÀNH CÁC KHOÁ HỌC CƠ BẢN Ở fullstack.edu.vn</p>
      </div>
    </ExperienceStyled>
  );
}
