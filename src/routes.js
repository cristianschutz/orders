import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/";
import Login from "./pages/Login/";
import History from "./pages/History/";
import { orderContext } from "./store";
import Client from "./pages/Order/Client/";
import Print from "./pages/Order/Print/";
import Product from "./pages/Order/Product/";

export default function Routes() {
  const context = useContext(orderContext);
  let user = context.user;

  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/"
          exact
          component={() => (user ? <Dashboard /> : <Login />)}
        />
        <Route path="/login" exact component={() => <Login />} />
        <Route
          path="/order"
          exact
          component={() => (user ? <Client /> : <Login />)}
        />
        <Route
          path="/order/client"
          exact
          component={() => (user ? <Client /> : <Login />)}
        />
        <Route
          path="/order/product"
          component={() => (user ? <Product /> : <Login />)}
        />
        <Route
          path="/order/print"
          component={() => (user ? <Print /> : <Login />)}
        />
        <Route
          path="/history"
          component={() => (user ? <History /> : <Login />)}
        />
        <Route
          path="/dashboard"
          component={() => (user ? <Dashboard /> : <Login />)}
        />
      </Switch>
    </BrowserRouter>
  );
}
