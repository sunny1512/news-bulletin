const mongoose = require('mongoose');
const userInfoSchema = mongoose.Schema({
	username: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	emailid: {
		type: String,
		required: true,
	},
	updated_at: { type: Date, default: Date.now },
});
var userInfo = mongoose.model('userinfo', userInfoSchema);
module.exports = userInfo;
