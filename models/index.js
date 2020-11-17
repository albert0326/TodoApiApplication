var mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/json_api', {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.set("debug", true);
mongoose.set('useFindAndModify', false);
	
mongoose.Promise= Promise;

module.exports.Todo = require("./todo");