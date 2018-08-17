var mongoose = require('mongoose');
var userinfo = require('../model/userinfo.js');
var userInfoController = {};
userInfoController.save = function(req, res) {
	var user = new userinfo(req.body);
	user.save(function(err) {
		if (err) {
			console.log(err);
			res.statusCode = 400;
			res.send();
		} else {
			res.statusCode = 201;
			res.send();
		}
	});
};
userInfoController.update = function(req, res) {
	if (req.body.username === undefined) {
		res.statusCode = 400;
		res.send();
	}
	userinfo.findByIdAndUpdate(
		req.body.username,
		{
			$set: {
				password: req.body.password,
			},
		},
		{
			new: true,
		},
		function(err, userinfo) {
			if (err) {
				console.log(err);
				res.statusCode = 400;
				res.send();
			} else {
				res.statusCode = 201;
				res.send();
			}
		}
	);
};
userInfoController.show = function(req, res) {
	if (req.params.username == undefined) {
		res.statusCode = 400;
		res.send();
	}
	userinfo.findOne({ username: req.params.id }).exec(function(err, employee) {
		if (err) {
			console.log('Unable to find');
			res.statusCode = 400;
			res.send();
		} else {
			res.statusCode = 200;
			res.send();
		}
	});
};
module.exports = userInfoController;
