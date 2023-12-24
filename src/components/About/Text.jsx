import React from "react";
import styled from "styled-components";
const TextStyled = styled.div`
  width: 50%;
  h1 {
    font-weight: 400;
    font-size: 60px;
    line-height: 96px;
    color: #c4c4c4;
  }
  h3 {
    font-weight: 400;
    font-size: 36px;
    line-height: 43px;
  }
  p {
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
  }
  button {
    position: relative;
    bottom: -50px;
    cursor: pointer;
    display: inline-block;
    border: none;
    padding: 12px 24px;
    border-radius: 2em;
    transition: all 0.2s ease-in;
    position: relative;
    overflow: hidden;
    font-size: 19px;
    color: black;
    z-index: 1;
    a {
      padding: 12px 24px;
      width: 100%;
      text-decoration: none;
    }
    &:before {
      content: "";
      position: absolute;
      left: 50%;
      transform: translateX(-50%) scaleY(1) scaleX(1.25);
      top: 100%;
      width: 140%;
      height: 180%;
      background-color: rgba(0, 0, 0, 0.05);
      border-radius: 50%;
      display: block;
      transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
      z-index: -1;
    }

    &:after {
      content: "";
      position: absolute;
      left: 55%;
      transform: translateX(-50%) scaleY(1) scaleX(1.45);
      top: 180%;
      width: 160%;
      height: 190%;
      background-color: #6c63ff;
      border-radius: 50%;
      display: block;
      transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
      z-index: -1;
    }

    &:hover {
      color: #ffffff;
    }
    &:hover a {
      color: #ffffff !important;
    }
    &:hover:before {
      top: -35%;
      background-color: #6c63ff;
      transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
    }

    &:hover:after {
      top: -45%;
      background-color: #6c63ff;
      transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
    }
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
    text-align: center;
    h1 {
      line-height: 46px;
      font-size: 30px;
    }
    h3 {
      font-size: 26px;
    }
    p {
      padding: 0 2em;
      font-size: 14px;
    }
  }
`;
export default function Text() {
  return (
    <TextStyled>
      <h3 data-aos="fade-left" data-aos-duration="500">
        VỀ TÔI
      </h3>
      <h1 data-aos="fade-left" data-aos-duration="800">
        TRẦN TIẾN ĐẠT
      </h1>
      <p data-aos="fade-left" data-aos-duration="1000">
        Tôi là một sinh viên mới tốt nghiệp chuyên ngành Thiết kế Web. Với tính
        cách năng động, ham học hỏi và chăm chỉ, tôi mong muốn được làm việc với
        tư cách là một thực tập sinh CNTT. Tôi sẽ cố gắng hoàn thành tốt nhiệm
        vụ được giao, học hỏi thêm kinh nghiệm chuyên môn và không ngừng phấn
        đấu để trở thành một cán bộ quản lý kỹ thuật giỏi trong những năm tới.{" "}
      </p>
      <button data-aos="fade-up" data-aos-duration="800">
        <a href="#contact">Liên hệ</a>
      </button>
    </TextStyled>
  );
}
