import styled from "styled-components";

export const Header = styled.header`
  height: 50px;
  position: fixed;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: rgba(255, 255, 255, 0.9);

  ul {
    list-style: none;
    padding: 0;
    li {
      padding: 0;

      a {
        padding: 0 15px;
        color: #111;
        text-decoration: none;
        font-size: 14px;

        small {
          font-size: 13px;
        }
      }
    }
  }
`;
