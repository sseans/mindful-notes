const express = require("express");
const app = express();

app.listen(3001, () => console.log("server started"));

app.get("/", (req, res) => {
  res.status(200).send({
    yes: true,
    no: false,
  });
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.send({ upload: "approved" });
});

app.get("/tshirt", (req, res) => {
  res.status(200).send({
    tshirt: true,
    size: "large",
  });
});
