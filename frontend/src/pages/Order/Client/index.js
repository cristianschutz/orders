import React, { useContext, useState } from "react";
import { orderContext } from "../../../store";
import { useHistory } from "react-router-dom";

import {
  Step,
  StepHeader,
  StepButtons,
  InputGroup
} from "../../../styles/global";
import logo from "../../../assets/logo.jpg";

export default function Client() {
  const context = useContext(orderContext);
  let infos = context.infos;
  const [client, setClient] = useState(infos ? infos.client : "");
  const [table, setTable] = useState(infos ? infos.table : "");
  let history = useHistory();

  return (
    <Step id="table">
      <StepHeader>
        <img src={logo} alt="Logo" />
      </StepHeader>
      <form
        action=""
        onChange={e => {
          e.preventDefault();
        }}
        onSubmit={e => {
          context.orderChange(e, [], {
            client,
            table
          });
          history.push("/order/product");
        }}
      >
        <InputGroup>
          <label>Tipo</label>
          <select
            value={table}
            onChange={e => {
              setTable(e.target.value);
            }}
          >
            <option value=""></option>
            <option value="Para Levar">Para Levar</option>
            <option value="Delivery">Delivery</option>
            <option value="Mesa 1">Mesa 1</option>
            <option value="Mesa 2">Mesa 2</option>
            <option value="Mesa 3">Mesa 3</option>
            <option value="Mesa 4">Mesa 4</option>
            <option value="Mesa 5">Mesa 5</option>
            <option value="Mesa 6">Mesa 6</option>
            <option value="Mesa 7">Mesa 7</option>
            <option value="Mesa 8">Mesa 8</option>
            <option value="Mesa 9">Mesa 9</option>
            <option value="Mesa 10">Mesa 10</option>
            <option value="Mesa 11">Mesa 11</option>
          </select>
          <svg viewBox="0 0 256 512">
            <path
              fill="currentColor"
              d="M119.5 326.9L3.5 209.1c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0L128 287.3l100.4-102.2c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.7 4.7 12.3 0 17L136.5 327c-4.7 4.6-12.3 4.6-17-.1z"
            ></path>
          </svg>
        </InputGroup>
        <InputGroup>
          <label>Cliente</label>
          <input
            type="text"
            name="client"
            onChange={e => {
              setClient(e.target.value);
            }}
            value={client}
          />
        </InputGroup>
        <StepButtons>
          <button onClick={e => history.push("/")}>VOLTAR</button>
          <button type="submit">PRÓXIMO</button>
        </StepButtons>
      </form>
    </Step>
  );
}
