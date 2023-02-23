var express = require('express');
var app = express();

const routes = require('express').Router();

routes.get('/', (req, res, next) => {
    res.json('Daniel Allred');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});