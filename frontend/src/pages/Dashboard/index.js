import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../services/fireabase";
import { useHistory } from "react-router-dom";

import { Step, StepHeader, StepButtons } from "../../styles/global";
// import logo from "../../assets/logo.jpg";

export default function Dashboard() {
  let history = useHistory();
  return (
    <Step id="dashboard">
      <StepHeader>
        <img src={process.env.REACT_APP_logo} alt="Logo" />
      </StepHeader>

      <StepButtons>
        <button
          onClick={e =>
            auth.signOut().then(function() {
              history.push("/login");
            })
          }
        >
          LOGOUT
        </button>
        <Link to="/history">HISTÓRICO</Link>
        <Link to="/order/client">CRIAR PEDIDO</Link>
      </StepButtons>
    </Step>
  );
}
