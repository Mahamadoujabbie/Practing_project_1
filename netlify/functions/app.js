//setting up express and serverless-http
const express = require("express");
const serverless = require("serverless-http");
const images = require("./json");
const cors = require("cors");
const app = express();

//Middleware
app.use(express.json());
app.use(cors());

//routes
app.get("/", (reg, res) => {
  res.json({
    message: "hello my developers",
  });
});

app.get("/images", (reg, res) => {
  res.status(200).json(images);
});

//exporting express
module.exports.handler = serverless(app);
