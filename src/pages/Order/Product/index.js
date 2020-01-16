import React, { useContext, useState, useEffect } from "react";
import { orderContext, catalog as cat } from "../../../store";
import {
  Step,
  StepHeader,
  StepButtons,
  InputGroup,
  CheckGroup
} from "../../../styles/global";
import { useHistory } from "react-router-dom";
// import logo from "../../../assets/logo.jpg";

export default function Product() {
  // contextapi
  const context = useContext(orderContext);

  // catalog states
  const [catalog, setCatalog] = useState([]);
  const [catalogProducts, setCatalogProducts] = useState([]);
  const [catalogAdditional, setCatalogAdditional] = useState([]);

  // order states
  const [orderCategory, setOrderCategory] = useState([]);
  const [orderProduct, setOrderProduct] = useState([]);
  const [orderAdditional, setOrderAdditional] = useState([]);

  const [orderProductPrice, setOrderProductPrice] = useState(0);
  const [orderAdditionalPrice, setOrderAdditionalPrice] = useState(0);
  const [orderPrice, setOrderPrice] = useState(0);
  const [orderQty, setOrderQty] = useState(1);

  let history = useHistory();
  if (!context.infos) {
    history.push("/order/client");
  }

  useEffect(() => {
    setCatalog(cat);
  }, []);

  function changeCategory(e) {
    let val = e.target.value;
    let filter = catalog && catalog.filter(e => e.name === val);
    if (filter.length) {
      setCatalogProducts(filter[0].options);
    }
    setOrderCategory(val);
  }

  function changeProduct(e) {
    let val = e.target.value;
    let filter = catalogProducts && catalogProducts.filter(e => e.name === val);
    if (filter.length) {
      let remakearray = filter[0].options.map((item, index) => {
        item.isChecked = false;
        return item;
      });
      setCatalogAdditional(remakearray);
      setOrderProduct(val);
      setOrderProductPrice(filter[0].price);
      sum(filter[0].price, orderAdditionalPrice, orderQty);
    }
  }

  function changeAdicional(e) {
    let add = catalogAdditional;
    add.map(item => {
      if (item.name === e.target.value) {
        item.isChecked = !item.isChecked;
      }
      return item;
    });
    setCatalogAdditional(add);

    let checked = "";
    catalogAdditional.map(a => {
      if (a.isChecked === true && a.name) {
        checked += a.name + ",";
      }
    });
    let newStr = checked.substring(0, checked.length - 1);
    setOrderAdditional(newStr);

    let total = catalogAdditional.map(a => {
      return a.isChecked === true && a.price;
    });

    total = total.length > 0 ? total.reduce((a, b) => a + b) : 0;
    setOrderAdditionalPrice(total);
    setOrderQty(1);
    sum(orderProductPrice, total, orderQty);
  }

  function sum(prod, add, qty) {
    console.log(prod, add, qty);
    setOrderPrice((prod + add) * qty);
  }

  return (
    <Step id="order">
      <StepHeader>
        <img src={process.env.REACT_APP_logo} alt="Logo" />
      </StepHeader>
      <form
        action=""
        onChange={e => {
          e.preventDefault();
        }}
        onSubmit={e => {
          context.orderChange(e, {
            category: orderCategory,
            product: orderProduct,
            productPrice: orderProductPrice,
            additional: orderAdditional,
            additionalPrice: orderAdditionalPrice,
            qty: orderQty,
            price: orderPrice
          });
        }}
      >
        <InputGroup>
          <label htmlFor="categoria">Categoria</label>
          <select id="categoria" onChange={e => changeCategory(e)}>
            <option></option>
            {catalog &&
              catalog.map((item, index) => {
                return (
                  <option key={index} defaultValue={item.name}>
                    {item.name}
                  </option>
                );
              })}
          </select>
          <svg viewBox="0 0 256 512">
            <path
              fill="currentColor"
              d="M119.5 326.9L3.5 209.1c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0L128 287.3l100.4-102.2c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.7 4.7 12.3 0 17L136.5 327c-4.7 4.6-12.3 4.6-17-.1z"
            ></path>
          </svg>
        </InputGroup>
        <InputGroup>
          <label htmlFor="produto">Produto</label>
          <select onChange={e => changeProduct(e)} id="produto">
            <option></option>
            {catalogProducts &&
              catalogProducts.map((item, index) => {
                return (
                  <option key={index} defaultValue={item.name}>
                    {item.name}
                  </option>
                );
              })}
          </select>
          <svg viewBox="0 0 256 512">
            <path d="M119.5 326.9L3.5 209.1c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0L128 287.3l100.4-102.2c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.7 4.7 12.3 0 17L136.5 327c-4.7 4.6-12.3 4.6-17-.1z"></path>
          </svg>
        </InputGroup>

        {catalogAdditional.length > 0 && (
          <CheckGroup>
            <h6>Adicional</h6>
            {catalogAdditional.map((item, index) => {
              return (
                <label key={item.name}>
                  <input
                    type="checkbox"
                    onClick={e => {
                      changeAdicional(e);
                    }}
                    value={item.name}
                  />
                  {!item.isChecked ? (
                    <svg viewBox="0 0 448 512">
                      <path
                        fill="currentColor"
                        d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm16 400c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V80c0-8.8 7.2-16 16-16h352c8.8 0 16 7.2 16 16v352z"
                      ></path>
                    </svg>
                  ) : (
                    <svg viewBox="0 0 448 512">
                      <path
                        fill="currentColor"
                        d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm0 32c8.823 0 16 7.178 16 16v352c0 8.822-7.177 16-16 16H48c-8.822 0-16-7.178-16-16V80c0-8.822 7.178-16 16-16h352m-34.301 98.293l-8.451-8.52c-4.667-4.705-12.265-4.736-16.97-.068l-163.441 162.13-68.976-69.533c-4.667-4.705-12.265-4.736-16.97-.068l-8.52 8.451c-4.705 4.667-4.736 12.265-.068 16.97l85.878 86.572c4.667 4.705 12.265 4.736 16.97.068l180.48-179.032c4.704-4.667 4.735-12.265.068-16.97z"
                      ></path>
                    </svg>
                  )}
                  {item.name}
                </label>
              );
            })}
          </CheckGroup>
        )}
        <InputGroup width="48%">
          <label>Quantidade</label>
          <input
            type="number"
            onChange={e => {
              setOrderQty(Number(e.target.value));
              sum(
                orderProductPrice,
                orderAdditionalPrice,
                Number(e.target.value)
              );
            }}
            value={orderQty}
          />
        </InputGroup>
        <InputGroup width="48%">
          <label>Total</label>
          <input type="number" value={orderPrice} disabled />
        </InputGroup>
        <StepButtons>
          <button
            onClick={e => {
              history.push("/order/client");
            }}
          >
            VOLTAR
          </button>
          <button
            onClick={e => {
              history.push("/order/print");
            }}
          >
            VISUALIZAR
          </button>
          <button type="submit">ADICIONAR</button>
        </StepButtons>
      </form>
    </Step>
  );
}
Product.displayName = "Product";
