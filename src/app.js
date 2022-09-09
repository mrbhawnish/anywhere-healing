const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const db = require("../models");
const app = express();
db.sequelize.sync({ force: true })
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(helmet());
app.use(cors());
app.use(morgan('combined'));
app.use('/v1', require('./routes/v1'));
app.get("/", (req,res) => {
    res.status(200).json({ api: "up" });
    
})

module.exports = app;
