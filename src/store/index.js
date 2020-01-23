import React from "react";

export const orderContext = React.createContext({});
export const OrderProvider = orderContext.Provider;
export const OrderConsumer = orderContext.Consumer;
const optionsHamburger = [
  { name: "Cebola", price: 2 },
  { name: "Rúcula", price: 2 },
  { name: "Bacon", price: 3 },
  { name: "Bife", price: 5 },
  { name: "Ovo", price: 1 },
  { name: "Queijo", price: 1 },
  { name: "Queijo Cheddar", price: 1 },
  { name: "Calabresa", price: 1 },
  { name: "Pimentão", price: 2 }
];
const optionsDog = [
  { name: "Queijo", price: 1 },
  { name: "Vinagrete", price: 1 }
];
export const catalog = [
  {
    name: "Hambúrguer",
    options: [
      {
        name: "Help Hambúrguer Tradicional",
        price: 15.0,
        options: optionsHamburger
      },
      { name: "Smash Burger", price: 11.0, options: optionsHamburger },
      { name: "Smash Burger Duplo", price: 15.0, options: optionsHamburger }
    ]
  },
  {
    name: "Hot Dog",
    options: [
      { name: "Help Dog Simples", price: 7.5, options: optionsDog },
      { name: "Help Dog Duplo", price: 9.5, options: optionsDog },
      { name: "Help Dog Bacon", price: 12.0, options: optionsDog },
      { name: "Help Dog Calabresa", price: 12.0, options: optionsDog },
      { name: "Help Dog Salame", price: 12.0, options: optionsDog },
      { name: "Help Dog Frango", price: 12.0, options: optionsDog },
      { name: "Help Dog Strogonoff", price: 13, options: optionsDog }
    ]
  },
  {
    name: "Lanches",
    options: [
      { name: "Porção de Fritas P (250g)", price: 10.0, options: [] },
      { name: "Porção de Fritas G (500g)", price: 17.0, options: [] },
      {
        name: "Porção de Fritas com cheddar e bacon (500g)",
        price: 21.0,
        options: []
      },
      { name: "Misto quente", price: 21.0, options: [] }
    ]
  },
  {
    name: "Bebidas",
    options: [
      { name: "Água (500ml)", price: 2.5, options: [] },
      { name: "Café Espresso (170ml)", price: 4.0, options: [] },
      { name: "Café com leite (170ml)", price: 5.0, options: [] },
      { name: "Suco Morango (300ml)", price: 6.0, options: [] },
      { name: "Suco Abacaxi (300ml)", price: 6.0, options: [] },
      { name: "Suco Abacaxi com hortelã (300ml)", price: 6.0, options: [] },
      { name: "Suco Laranja (300ml)", price: 6.0, options: [] },
      { name: "Suco Limão (300ml)", price: 6.0, options: [] },
      { name: "Suco Uva (300ml)", price: 6.0, options: [] },
      { name: "Kombucha Morango (250ml)", price: 6.0, options: [] },
      { name: "Kombucha Maracujá (250ml)", price: 5.0, options: [] },
      { name: "Refrigerante Lata", price: 3.5, options: [] },
      { name: "Refrigerante 600ml", price: 4.5, options: [] },
      { name: "Refrigerante 2L", price: 8.0, options: [] },
      { name: "Coca-Cola 2L", price: 8.5, options: [] }
    ]
  },
  {
    name: "Sobremesas",
    options: [
      { name: "Milkshake Kitkat", price: 8.5, options: [] },
      { name: "Milkshake Ovomaltine", price: 8.5, options: [] },
      { name: "Milkshake Morango", price: 8.5, options: [] }
    ]
  }
];
