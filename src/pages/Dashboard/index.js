import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../services/fireabase";
import { useHistory } from "react-router-dom";

import Sidebar from "../../components/Sidebar/";
import TopBar from "../../components/TopBar/";
// import logo from "../../assets/logo.jpg";

export default function Dashboard() {
  let history = useHistory();
  return (
    <>
      <TopBar />
      <Sidebar />
    </>
  );
}
