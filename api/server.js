const express = require("express");

const Tacos = require("../tacos/tacosModel.js");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ api: "up", dbenv: process.env.DB_ENV });
});

server.get("/tacos", (req, res) => {
  Tacos.getAll()
    .then(tacos => {
      res.status(200).json(tacos);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = server;
