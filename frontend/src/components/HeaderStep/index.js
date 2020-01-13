import React from "react";

import Header from "./styles.js";

import logo from "../../assets/logo.jpg";

export default function HeaderStep() {
  return (
    <Header>
      <img src={logo} alt="Logo" />
    </Header>
  );
}
