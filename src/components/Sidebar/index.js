import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Aside } from "./styles";

export default function Sidebar() {
  const [toggle, setToggle] = useState(false);

  function toogleAside() {
    setToggle(!toggle);
  }

  return (
    <Aside className={toggle && "close"} onClick={e => toogleAside()}>
      <button className="close">
        <span>FECHAR</span>
      </button>
      <div className="logo">
        <img src={process.env.REACT_APP_logo} alt="Logo" />
      </div>
      <ul>
        <li>
          <Link to="/history">Histórico</Link>
          <Link to="/order">Criar Pedido</Link>
        </li>
      </ul>
    </Aside>
  );
}
