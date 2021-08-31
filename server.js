'use strict';

const express = require('express');

const cors = require('cors');

const axios = require('axios');

require('dotenv').config();

const server= express();

server.use(cors());

server.use(express.json());
const mongoose = require('mongoose');
const PORT=process.env.PORT || 3002;

mongoose.connect('mongodb://localhost:27017/Crypto',{useNewUrlParser:true, useUnifiedTopology:true});

const {seedFunction}=require('./models/MainSchema')

seedFunction();

const Crypto=require('./controllers/Crypto');

const {addData,getData,deleteData,updateData}=require('./controllers/CryptoFav');


server.get('/Cryptos',Crypto);
server.post('/cryptoAdd',addData);
server.get('cryptoGet',getData);
server.delete('cryptoDelete:/id',deleteData);
server.put('cryptoupdate:/id',updateData);

server.get('/',(req,res)=>{res.send('hello from the server')});

server.listen(PORT,()=>{console.log(`hello from port ${PORT}`)});

