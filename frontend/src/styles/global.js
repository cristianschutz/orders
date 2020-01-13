import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background: #ae2a20;
    -webkit-font-smoothing: antialiased!important;
  }

  body, input, button {
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
  }
`;

export const Container = styled.div`
  max-width: 100%;
  background: #fff;
  width: 600px;
  margin: 30px auto;
  border-radius: 4px;
`;

export const StepHeader = styled.header`
  img {
    margin: 0 auto;
    max-width: 200px;
  }
`;

export const Step = styled.section`
  height: auto;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  align-content: center;
  width: 480px;
  margin: 0 auto;
  max-width: 100%;
  padding: 0 15px 30px;
  transition: all 0.2s ease-in-out;

  & > form {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;

export const StepButtons = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin: 0 auto;

  a,
  button {
    background: #f2f2f2;
    border-radius: 5px;
    border: 0;
    color: #000;
    display: inline-flex;
    font-size: 14px;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    height: 50px;
    max-width: 300px;
    text-align: center;
    text-decoration: none;
    width: 100%;
    max-width: 45%;
    align-self: flex-end;

    & + a,
    & + button {
      margin-left: 10px;
    }
  }
`;

export const CheckGroup = styled.div`
  margin-bottom: 20px;
  max-width: 100%;
  position: relative;
  width: ${props => (props.width ? props.width : "100%")};

  h6 {
    display: block;
    padding: 0;
    margin: 0 0 10px;
    font-size: 14px;
    font-weight: 700;
    color: #fff;
  }

  input {
    opacity: 0;
    position: absolute;
  }

  label {
    float: left;
    padding: 0;
    margin: 0 10px 15px 0;
    font-size: 14px;
    font-weight: 400;
    color: #fff;
  }

  svg {
    float: left;
    width: 18px;
    margin-right: 5px;
    margin-top: -2px;
  }

  &:after {
    content: "";
    display: table;
    clear: both;
  }
`;

export const InputGroup = styled.div`
  margin-bottom: 20px;
  max-width: 100%;
  position: relative;
  width: ${props => (props.width ? props.width : "100%")};

  label {
    display: block;
    padding: 0;
    margin: 0 0 10px;
    font-size: 14px;
    font-weight: 700;
    color: #fff;
  }

  select,
  textarea,
  input[type="text"],
  input[type="password"],
  input[type="number"] {
    appearance: none;
    height: 50px;
    color: #fff;
    font-weight: 300;
    background: #000;
    border: 0;
    font-size: 18px;
    border-radius: 6px;
    line-height: 50px;
    padding: 0 15px;
    width: 100%;
  }

  select {
    padding-right: 35px;
  }

  textarea {
    height: 70px;
    padding-top: 15px;
    padding-bottom: 15px;
    line-height: 20px;
  }

  svg {
    position: absolute;
    right: 10px;
    bottom: 4px;
    width: 20px;
    z-index: 2;
    pointer-events: none;

    path {
      fill: #fff;
    }
  }
`;
