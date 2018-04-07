const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

app.use(bodyParser.json());
app.use("/", express.static(path.join(__dirname, "../client/build")));

app.get("/products", function(req, res) {
  request.get(
    { url: "http://autumn-resonance-1298.getsandbox.com/products"},
    function(error, response, body) {
      if (!error && response.statusCode == 200) {
        res.json(body);
      }
    }
  );
});

app.get("/inventory", function(req, res) {
  request.get(
    { url: "http://autumn-resonance-1298.getsandbox.com/inventory" },
    function(error, response, body) {
      if (!error && response.statusCode == 200) {
        res.json(body);
      }
    }
  );
}); 


app.listen(process.env.PORT || 8080);