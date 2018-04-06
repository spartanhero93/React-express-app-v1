const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

app.use("/", express.static(path.join(__dirname, "../client/build")));

//<==== Routes ====>//
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "../client/build"));
// });

app.get("/inventory/:name", function(req, res) {
  res.json({"message": "inventory"});
  // res.send(req.params)
});


app.get("/products/:name", (req, res) => {
   res.json({"message":"products" });
  //  res.send(req.params);
})



app.listen(process.env.PORT || 8080);