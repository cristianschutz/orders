import React, { useState } from "react";
import Routes from "./routes";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import { OrderProvider } from "./store";
import GlobalStyle from "./styles/global";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [order, setOrder] = useState([]);
  const [infos, setInfos] = useState();

  function orderReset() {
    setOrder([]);
    setInfos();
  }

  function orderChange(e, newOrder = [], infos = "") {
    e.preventDefault();
    if (infos) {
      setInfos(infos);
      toast.success("Mesa adicionada com sucesso!");
    }
    if (newOrder.length !== 0) {
      setOrder(order.concat(newOrder));
      toast.success("Item adicionado ao pedido com sucesso!");
    }
  }

  function orderDel(i) {
    let neworder = order.filter(function(value, index, arr) {
      return index !== i;
    });
    setOrder(neworder);
    toast.success(`Item ${i} removido do pedido com sucesso!`);
  }

  return (
    <OrderProvider value={{ order, infos, orderChange, orderDel, orderReset }}>
      <Routes />
      <GlobalStyle />
      <ToastContainer autoClose={2000} />
    </OrderProvider>
  );
}

export default App;
