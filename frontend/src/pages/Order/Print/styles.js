import styled from "styled-components";

export const Title = styled.h1`
  font-size: 18px;
  color: #000;
  margin: 20px auto;
  text-align: center;
  max-width: 220px;
  width: 100%;
`;

export const Table = styled.table`
  width: 100%;
  margin: 0 auto 20px;
  border-spacing: inherit;

  button {
    background: none;
    border: 0;
    padding: 0;
    margin: 0;

    svg {
      width: 10px;
    }
  }

  td {
    font-size: 11px;
    padding: 10px;
    text-align: center;
  }

  thead {
    text-align: center;
    background: #000;

    th {
      color: #fff;
      font-size: 13px;
      padding: 10px;
      text-align: center;
    }
  }

  tbody {
    tr {
      background: rgba(255, 255, 255, 0.5);

      &:nth-child(odd) {
        background: rgba(255, 255, 255, 0.2);
      }
    }
  }

  tfoot {
    background: #000;
    color: #fff;
    td {
      text-align: right;
    }
  }

  img {
    margin: 5px auto;
    max-width: 100%;
    width: 60px;
    display: block;
    filter: grayscale(1);
  }
`;
