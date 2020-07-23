const mongoose = require("mongoose");
const User = require("./user");
const Post = require("./post");
var materializedPlugin = require('mongoose-materialized');
const conn = require('./connection');



var unitSchema = mongoose.Schema({
    type: String,
    value: String,
    desc: String,
    currentHead: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
    postList:[{type: mongoose.Schema.Types.ObjectId, ref:'Post'}]
});
unitSchema.plugin(materializedPlugin);

module.exports = conn.model('Unit',unitSchema);