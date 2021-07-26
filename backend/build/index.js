"use strict";
var express = require('express');
var mongoose = require('mongoose');
var app = express();
var url = '';
mongoose.connect(url, { useNewUrlParser: true });
var con = mongoose.connection;
app.use(express.json());
try {
    con.on('open', function () {
        console.log('connected');
    });
}
catch (error) {
    console.log("Error: " + error);
}
var port = 9000;
app.listen(port, function () {
    console.log('Server started');
});
