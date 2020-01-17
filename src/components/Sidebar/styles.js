import styled from "styled-components";

export const Aside = styled.aside`
  position: fixed;
  left: 0;
  width: 200px;
  background: #111;
  transition: all 0.2s ease-in-out;
  height: 100%;

  &.close {
    left: -200px;
  }

  button.close {
    position: absolute;
    left: 100%;
    margin-left: 15px;
    top: 2px;
    width: 35px;
    height: 45px;
    border: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    outline: none;

    span {
      background: rgba(0, 0, 0, 0.5);
      font-size: 0;
      position: relative;
      width: 100%;
      display: block;
      height: 4px;
      border-radius: 2px;

      &:before,
      &:after {
        border-radius: inherit;
        background: inherit;
        content: "";
        display: block;
        height: 100%;
        position: absolute;
        width: 100%;
        top: -10px;
      }

      &:after {
        top: 10px;
      }
    }
  }

  .logo {
    padding: 10px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;

    img {
      max-width: 100%;
      display: block;
      margin: 0 auto;
      height: 50px;
    }
  }

  ul {
    padding: 0;

    li {
      display: block;

      a {
        display: flex;
        align-items: center;
        font-size: 14px;
        font-weight: 400;
        color: rgba(255, 255, 255, 0.5);
        padding: 20px 10px;
        text-decoration: none;
        transition: all 0.3s ease-in-out;

        &:hover {
          color: #fff;
        }
      }
    }
  }
`;
