const express = require("express");
const morgan = require("morgan");
const mysql = require("mysql");
const cors = require('cors');
const dbConfig=require('./config.js')
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;


app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));












app.listen(port, () => {
  console.log(`Le serveur demarre sur http://localhost:${port}`);
});
