var mongoose = require("mongoose");


mongoose.connect("mongodb+srv://albert:***********@cluster0.vehvp.mongodb.net/json_api?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.set("debug", true);
mongoose.set('useFindAndModify', false);
	
mongoose.Promise= Promise;


module.exports.Todo = require("./todo");
