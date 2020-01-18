import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../services/fireabase";
import { useHistory } from "react-router-dom";

import { database } from "../../services/fireabase";

import { Wrapper, Content } from "../../styles/global";
import Sidebar from "../../components/Sidebar/";
import TopBar from "../../components/TopBar/";
import Table from "../../components/Table/";

export default function Dashboard() {
  let history = useHistory();
  const [order, setOrder] = useState([]);

  useEffect(() => {
    var ref = database.ref("orders");

    // Attach an asynchronous callback to read the data at our posts reference
    ref.on(
      "value",
      function(snapshot) {
        snapshot.forEach(element => {
          setOrder(oldOrder => [...oldOrder, element.val()]);
        });
      },
      function(errorObject) {
        console.log("The read failed: " + errorObject.code);
      }
    );
  }, []);

  return (
    <Wrapper>
      <TopBar />
      <Sidebar />
      <Content>
        <Table
          head={[
            { name: "Cliente", id: "client" },
            { name: "Produtos", id: "order" },
            { name: "Observação", id: "observation" },
            { name: "Valor", id: "price" }
          ]}
          content={order}
          foot={[]}
        />
      </Content>
    </Wrapper>
  );
}
