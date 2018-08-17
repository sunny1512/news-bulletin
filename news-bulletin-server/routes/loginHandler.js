var express = require('express');
var loginHandler = express.Router();
var user = require('../controllers/userInfoController');

loginHandler.get('/login', user.show);
loginHandler.post('/signup', user.save);
loginHandler.put('/forgotpassword', user.update);

module.exports = loginHandler;
