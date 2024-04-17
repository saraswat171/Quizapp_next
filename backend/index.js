const express = require('express');
const cors = require('cors');
require("dotenv").config();

const { Sequelize, sequelize } = require('./models');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.text());
app.use(cors());

app.use('/', require('./route'))
app.listen(process.env.PORT,   async() => {
   try{
    await sequelize.authenticate();
    console.log("sequelize connected")
   }
   catch(err){
    console.log("error is" , err)
   }
    console.log(`Server is running on port ${process.env.PORT}`);
});
