"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var metrics_1 = require("./metrics");
var app = express();
var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
app.set('port', 3000);
app.set('views', __dirname + "/views");
app.set('view engine', 'ejs');
app.get('/metrics.json', function (req, res) {
    metrics_1.MetricsHandler.get(function (err, result) {
        if (err) {
            throw err;
        }
        res.json(result);
    });
});
app.get('/hello/:name', function (req, res) { return res.render('./hello.ejs', { name: req.params.name }); });
app.listen(app.get('port'), function () { return console.log("server listening on " + app.get('port')); });
