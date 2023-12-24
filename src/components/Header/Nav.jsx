import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../contexts/ThemeContext";
const NavStyle = styled.nav`
  margin: auto 0;
  margin-right: 100px;
  display: flex;
  justify-content: space-between;
  a {
    text-decoration: none;
    color: #707070;
    margin-left: 1.5em;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 36px;
    &:focus {
      color: #000;
    }
  } /* The switch - the box around the slider */
  .switch {
    margin-left: 1em;
    display: inline;
    --width-of-switch: 4em;
    --height-of-switch: 2em;
    --size-of-icon: 1.4em;
    --slider-offset: 0.3em;
    position: relative;
    width: var(--width-of-switch);
    height: var(--height-of-switch);
    input {
      opacity: 0;
      width: 0;
      height: 0;
    }
    input:checked + .slider {
      background-color: #303136;
    }

    input:checked + .slider:before {
      left: calc(
        100% - (var(--size-of-icon, 1.4em) + var(--slider-offset, 0.3em))
      );
      background: #303136;
      /* change the value of second inset in box-shadow to change the angle and direction of the moon  */
      box-shadow: inset -3px -2px 5px -2px #8983f7, inset -10px -4px 0 0 #a3dafb;
    }
    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #f4f4f5;
      transition: 0.4s;
      border-radius: 30px;
      box-shadow: 0 0 5px 1px #ccc;
    }

    .slider:before {
      position: absolute;
      content: "";
      height: var(--size-of-icon, 1.4em);
      width: var(--size-of-icon, 1.4em);
      border-radius: 20px;
      left: var(--slider-offset, 0.3em);
      top: 50%;
      transform: translateY(-50%);
      background: linear-gradient(40deg, #ff0080, #ff8c00 70%);
      transition: 0.4s;
    }
  }

  @media only screen and (max-width: 600px) {
    display: none;
    height: 100%;
    width: 100%;
    padding-bottom: 200px;
    a {
      text-align: center;
      margin: 1em 1em;
    }
    .switch {
      margin: auto;
    }
  }
`;
export default function Nav({ style }) {
  const themeContext = useContext(ThemeContext);
  return (
    <NavStyle style={style} className={themeContext.theme ? "light" : "dark"}>
      <a href="#about">Giới thiệu</a>
      <a href="#skill">Kỹ năng</a>
      <a href="#experience">Học vấn</a>
      <a href="#project">Dự án</a>
      <a href="#contact">Liên hệ</a>
      <label className="switch">
        <input
          type="checkbox"
          onChange={() => {
            themeContext.setTheme(!themeContext.theme);
          }}
        />
        <span className="slider"></span>
      </label>
    </NavStyle>
  );
}
