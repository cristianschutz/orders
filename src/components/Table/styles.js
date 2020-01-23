import styled from "styled-components";

export const Container = styled.div`
  form {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 0 0 20px;

    label {
      display: block;
      padding: 0;
      margin: 0 0 10px;
      font-size: 14px;
      font-weight: 700;
      position: relative;
      color: #fff;

      svg {
        position: absolute;
        right: 4px;
        bottom: 2px;
        height: 25px;
        width: 25px;
        z-index: 2;
        pointer-events: none;

        path {
          fill: #222;
        }
      }
    }

    select,
    input {
      font-size: 13px;
      border: 0;
      height: 30px;
      line-height: 30px;
      width: 200px;
      font-weight: 300;
      color: #222;
      border-radius: 0;
      padding: 0 10px;
    }

    select {
      width: 100px;
      appearance: none;
    }
  }

  table {
    background: #fff;
    border-collapse: collapse;
    border-spacing: 0;
    border: 1px solid #cbcbcb;
    empty-cells: show;
    width: 100%;

    thead {
      background: #e0e0e0;

      th {
        padding: 1em;
      }
    }

    td,
    th {
      border-left: 1px solid #cbcbcb;
      padding: 0.5em 1em;
    }

    td {
      border-bottom: 1px solid #cbcbcb;
    }
  }
`;
