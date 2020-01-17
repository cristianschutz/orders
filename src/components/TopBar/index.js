import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { orderContext } from "../../store";
import { Header } from "./styles";

export default function TopBar() {
  const context = useContext(orderContext);
  return (
    <Header>
      <ul>
        <li>
          <Link to="/dashboard">
            Bem vindo,{" "}
            <small>
              {context.user.displayName
                ? context.user.displayName
                : context.user.email}
            </small>
          </Link>
        </li>
      </ul>
    </Header>
  );
}
