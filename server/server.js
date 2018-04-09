const express = require("express");
const path = require("path");
const app = express();
const axios = require("axios")
const rp = require("request-promise-native");

app.use("/", express.static(path.join(__dirname, "../client/build")));

app.get("/getItems", (req, res) => {
  Promise.all([
    rp("http://autumn-resonance-1298.getsandbox.com/inventory"),
    rp("http://autumn-resonance-1298.getsandbox.com/products")
  ])
  .then(([inventory, products]) => {
    let [arr1, arr2] = [JSON.parse(inventory).inventory, JSON.parse(products)];
    combinedArr = arr1.map(items_1 => {
      return Object.assign(
        items_1,
        arr2.find(items_2 => {
          return items_2 && items_1.name === items_2.name;
        })
      );
    });
    res.send(combinedArr);
  });
});

app.get("/getItems/:item", (req, res) => {
  Promise.all([
    rp(`http://autumn-resonance-1298.getsandbox.com/inventory/${req.params.item}`),
    rp(`http://autumn-resonance-1298.getsandbox.com/products/${req.params.item}`)
  ])
    .then(([quantity, product]) => {
      let [item_amount, item_price] = [
        JSON.parse(quantity).inventory[0],
        JSON.parse(product).product[0]
      ];
      combinedObject = { ...item_amount, ...item_price };
      res.send(combinedObject);
    })
    .catch(err => console.log(err));
}); 

app.listen(process.env.PORT || 8080);