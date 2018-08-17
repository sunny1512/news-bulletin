const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var newsinfo = new Schema(
	{
		id: {
			type: Number,
			required: true,
			unique: true,
		},
		headline: {
			type: String,
			required: true,
		},

		url: {
			type: String,
			required: true,
		},
		publisher: {
			type: String,
			required: true,
		},

		category: {
			type: String,
			required: true,
		},
		publishersite: {
			type: String,
			required: true,
		},
		uid: {
			type: Number,
			required: true,
		},
	},
	{ timestamps: true }
);

var newsinfo = mongoose.model('newsinfo', newsinfo, 'newsinfo');

module.exports = newsinfo;
