var mongoose = require('mongoose');
    mongoose.set('debug', true);
    mongoose.connect('mongodb://localhost:27017/myapp');

mongoose.Promise = Promise;

module.exports.Todo = require("./todo");
