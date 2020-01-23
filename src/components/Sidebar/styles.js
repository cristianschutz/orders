import styled from "styled-components";

export const Aside = styled.aside`
  position: relative;
  left: 0;
  width: 200px;
  background: #111;
  transition: all 0.2s ease-in-out;
  height: 100vh;
  z-index: 2;

  &.close {
    margin-left: -200px;
  }

  button.close {
    align-items: center;
    background: none;
    border: 0;
    display: flex;
    height: 45px;
    justify-content: center;
    left: 100%;
    margin-left: 15px;
    outline: none;
    padding: 0;
    position: absolute;
    top: 2px;
    width: 35px;

    span {
      background: rgba(0, 0, 0, 0.5);
      border-radius: 2px;
      display: block;
      font-size: 0;
      height: 4px;
      position: relative;
      width: 100%;

      &:before,
      &:after {
        background: inherit;
        border-radius: inherit;
        content: "";
        display: block;
        height: 100%;
        position: absolute;
        top: -10px;
        width: 100%;
      }

      &:after {
        top: 10px;
      }
    }
  }

  .logo {
    align-items: center;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    padding: 10px 0;

    img {
      display: block;
      height: 50px;
      margin: 0 auto;
      max-width: 100%;
    }
  }

  ul {
    padding: 0;

    li {
      display: block;

      a {
        align-items: center;
        color: rgba(255, 255, 255, 0.5);
        display: flex;
        font-size: 14px;
        font-weight: 400;
        padding: 5px 10px;
        text-decoration: none;
        transition: all 0.3s ease-in-out;

        &:hover {
          color: #fff;
        }
      }
    }
  }
`;
