import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Title, Table } from "./styles";
import { Step, StepHeader, StepButtons } from "../../styles/global";
import { format } from "date-fns";
import { database } from "../../services/fireabase";
import logo from "../../assets/logo.jpg";

export default function History() {
  let history = useHistory();
  const [order, setOrder] = useState([]);

  useEffect(() => {
    //   // db.collection("orders")
    //   //   .get()
    //   //   .then(querySnapshot => {
    //   //     const data = querySnapshot.docs.map(doc => doc.data());
    //   //     console.log(data); // array of cities objects
    //   //     setOrder(data);
    //   //   });
    var ref = database.ref("orders");
    console.log("ref", ref.database);
    // Attach an asynchronous callback to read the data at our posts reference
    ref.on(
      "value",
      function(snapshot) {
        console.log(snapshot);
        snapshot.forEach(element => {
          console.log("el", element.val(), "el");
          setOrder(oldOrder => [...oldOrder, element.val()]);
        });
      },
      function(errorObject) {
        console.log("The read failed: " + errorObject.code);
      }
    );
  }, []);

  return (
    <Step id="print">
      <StepHeader>
        <img src={logo} alt="Logo" />
      </StepHeader>

      <Title>Histórico</Title>
      <Table>
        <thead>
          <tr>
            <th>Info</th>
            <th>Produto|Valor</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {order.length ? (
            order.map((item, index) => {
              console.log("order", order[0]);
              return (
                <tr key={index}>
                  <td>{item.client}</td>
                  <td>
                    {item.order &&
                      item.order.map(
                        item =>
                          item.category +
                          "-" +
                          item.product +
                          " | " +
                          item.qty +
                          "x R$" +
                          item.price
                      )}
                  </td>
                  <td>{format(new Date(item.uid), "dd-MM-yyyy HH:mm:ss")}</td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan="5">Nenhum produto adicionado!</td>
            </tr>
          )}
        </tbody>
        <tfoot></tfoot>
      </Table>

      <StepButtons>
        <button
          onClick={e => {
            history.push("/order/client");
          }}
        >
          CRIAR PEDIDO
        </button>
      </StepButtons>
    </Step>
  );
}
History.displayName = "History";
