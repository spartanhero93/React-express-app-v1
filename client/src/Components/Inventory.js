import React from 'react'

const Inventory = props => {
  const itemsQuantity = props.inventory;
  const itemsPrices = props.products;
  const products = [];
  const quanity = [];
  const prices = [];


  itemsQuantity.forEach(item => {
    products.push(item.name);
    quanity.push(item.inventory);
  });

  itemsPrices.forEach(item => {
    prices.push(item.price)
  })

  console.log("Items & Price arr = " + typeof(itemsPrices));
  console.log("Items & Quanity arr = " + typeof itemsQuantity);
  return (
    <div>
      <h1>First Product {products[0]}</h1>
      <h1>Its Quantity {quanity[0]}</h1>
      <h1>Its Price: ${prices[0]}</h1>
    </div>
  )
}

export default Inventory;