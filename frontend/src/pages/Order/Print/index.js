import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { orderContext } from "../../../store";
import { Title, Table } from "./styles";
import {
  Step,
  StepHeader,
  StepButtons,
  InputGroup
} from "../../../styles/global";
import { format } from "date-fns";
import { toast } from "react-toastify";
import { auth, database } from "../../../services/fireabase";
import logo from "../../../assets/logo.jpg";

export default function Print() {
  const context = useContext(orderContext);
  let order = context.order;
  let infos = context.infos;
  const [observation, setObservation] = useState();
  let history = useHistory();

  if (!infos || !order) {
    history.push("/order/client");
  }

  async function save() {
    const data = {
      user: auth.currentUser.providerData[0],
      client: infos.client,
      type: infos.table,
      observation: observation ? observation : "",
      order: order,
      uid: new Date().getTime()
    };

    await database
      .ref("orders/" + data.uid)
      .set(data)
      .then(docref => {
        toast.success("Pedido salvo");
        context.orderReset();
      })
      .catch(error => {
        toast.error("Pedido não salvo!");
      });
  }

  async function send() {
    infos.data = format(new Date(), "HH:mm:ss - dd/MM/yyyy");
    try {
      save();
      history.push("/order/client");
    } catch (err) {
      toast.error("Não foi possível emitir o pedido!");
    }
  }

  return (
    <Step id="print">
      <StepHeader>
        <img src={logo} alt="Logo" />
      </StepHeader>
      <Title>Pedido</Title>
      <Table>
        <thead>
          <tr>
            <th>Produto</th>
            <th>Qnt.</th>
            <th>Valor</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          {order.length ? (
            order.map((item, index) => {
              return (
                <tr key={index}>
                  <td>
                    {item.category} - {item.product}
                    {item.additional && " - Adicional: " + item.additional}
                  </td>
                  <td>{item.qty}</td>
                  <td>
                    R$ {(item.productPrice + item.additionalPrice) * item.qty}
                  </td>
                  <td>
                    <button onClick={e => context.orderDel(index)}>
                      <svg
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                      >
                        <path
                          fill="currentColor"
                          d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"
                        ></path>
                      </svg>
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan="4">Nenhum produto adicionado!</td>
            </tr>
          )}
          {observation && (
            <tr>
              <td colSpan="4">
                <strong>{observation}</strong>
              </td>
            </tr>
          )}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="4">
              {infos && infos.client}, {infos && infos.table}.
              <br />
              <small>Data: {format(new Date(), "HH:mm:ss - dd/MM/yyyy")}</small>
            </td>
          </tr>
        </tfoot>
      </Table>

      <InputGroup>
        <label htmlFor="observacao">Observação</label>
        <textarea
          id="observacao"
          onChange={e => setObservation(e.target.value)}
          value={observation}
        ></textarea>
      </InputGroup>

      <StepButtons>
        <button
          onClick={e => {
            history.push("/order/product");
          }}
        >
          VOLTAR
        </button>
        <button
          onClick={e => {
            context.orderReset();
            history.push("/order/client");
          }}
        >
          NOVO PEDIDO
        </button>
        <button
          onClick={e => {
            send();
          }}
        >
          IMPRIMIR
        </button>
      </StepButtons>
    </Step>
  );
}
Print.displayName = "Print";
