const routes = require('express').Router();

const mycontroller = require('../controllers')

routes.get('/', mycontroller.someoneFunction);
routes.get('/name', mycontroller.johndoeFunction);

module.exports = routes;