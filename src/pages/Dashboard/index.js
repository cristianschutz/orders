import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { auth } from "../../services/fireabase";
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
    var orders = [];
    // Attach an asynchronous callback to read the data at our posts reference
    ref.on(
      "value",
      function(snapshot) {
        let total = 0;
        snapshot.forEach(element => {
          let values = element.val();
          let order =
            values.order &&
            values.order.map(item => {
              total = total + Number(item.price);
              let product = item.product
                ? "<strong>" +
                  item.category +
                  " - " +
                  item.product +
                  "</strong>: R$ " +
                  item.productPrice
                : "";

              let additional = item.additional
                ? "<br /> (" +
                  item.additional +
                  ": R$ " +
                  item.additionalPrice +
                  ")"
                : "";
              return (
                product + additional + " x " + item.qty + " = R$" + item.price
              );
            });
          values.order = values.order && order.join("<br />");
          values.price = total;
          let date = new Date(values.uid);
          values.date =
            date.getDate() +
            "/" +
            (date.getMonth() + 1) +
            "/" +
            date.getFullYear() +
            " - " +
            date.getHours() +
            ":" +
            date.getMinutes();
          total = 0;
          orders = [...orders, values];
        });
        setOrder(orders);
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
        {order.length >= 1 && (
          <Table
            head={[
              { name: "Cliente", id: "client" },
              { name: "Produtos", id: "order" },
              { name: "Observação", id: "observation" },
              { name: "Valor", id: "price" },
              { name: "Data", id: "date" }
            ]}
            content={order.reverse()}
            foot={[]}
          />
        )}
      </Content>
    </Wrapper>
  );
}
