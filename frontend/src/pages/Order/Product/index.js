import React, { useContext, useState } from "react";
import { orderContext, catalog } from "../../../store";
import {
  Step,
  StepHeader,
  StepButtons,
  InputGroup,
  CheckGroup
} from "../../../styles/global";
import { useHistory } from "react-router-dom";
import logo from "../../../assets/logo.jpg";

export default function Product() {
  const [categories, setCategories] = useState(catalog);
  const [category, setCategory] = useState([]);
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState([]);
  const [additionals, setAdditionals] = useState([]);
  const [additional, setAdditional] = useState([]);
  const [additionalCount, setAdditionalCount] = useState();
  const [qty, setQty] = useState(1);

  const [countProduct, setCountProduct] = useState(1);
  const [countProductQty, setCountProductQty] = useState(0);
  const [countTotal, setCountTotal] = useState(0);
  const context = useContext(orderContext);
  let history = useHistory();

  if (!context.infos) {
    history.push("/order/client");
  }

  function changeCategory(e) {
    let val = e.target.value;
    let filter = catalog && catalog.filter(e => e.name === val);
    if (filter.length) {
      setProducts(filter[0].options);
    }
    setCategory(val);
  }

  function changeProduct(e) {
    let val = e.target.value;
    let filter = products && products.filter(e => e.name === val);
    if (filter) {
      setAdditionals(
        filter[0].options.map((item, index) => {
          item.isChecked = false;
          return item;
        })
      );
      setProduct(val);
      setCountProduct(filter[0].price);
      setCountProductQty(filter[0].price);
    }
  }

  function changeAdicional(e) {
    let add = additionals;
    add.map(item => {
      if (item.name === e.target.value) {
        item.isChecked = !item.isChecked;
      }
      return item;
    });
    setAdditional(add);

    let total = additionals.map(a => {
      return a.isChecked === true && a.price;
    });
    total = total.length > 0 ? total.reduce((a, b) => a + b) : 0;
    setAdditionalCount(total);
    setQty(1);
    return false;
  }

  return (
    <Step id="order">
      <StepHeader>
        <img src={logo} alt="Logo" />
      </StepHeader>
      <form
        action=""
        onChange={e => {
          e.preventDefault();
        }}
        onSubmit={e => {
          context.orderChange(e, {
            category,
            product,
            additional,
            qty,
            countProduct,
            price: countProductQty
          });
        }}
      >
        <InputGroup>
          <label htmlFor="categoria">Categoria</label>
          <select id="categoria" onChange={e => changeCategory(e)}>
            <option></option>
            {categories &&
              categories.map((item, index) => {
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
            {products &&
              products.map((item, index) => {
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
        {additionals.length > 0 && (
          <CheckGroup>
            <h6>Adicional</h6>
            {additionals.map((item, index) => {
              return (
                <label>
                  <input
                    type="checkbox"
                    key={item.name}
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
              setQty(e.target.value);
            }}
            value={qty}
          />
        </InputGroup>
        <InputGroup width="48%">
          <label>Total</label>
          <input
            type="number"
            onChange={e => setCountProductQty(e.target.value)}
            value={
              (countProduct + additionalCount) * qty
                ? (countProduct + additionalCount) * qty
                : countProduct * qty
            }
          />
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
