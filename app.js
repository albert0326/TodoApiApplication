var express= require("express"),
	app= express(),
	bodyParser= require("body-parser");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/views"));

var todoRoutes = require("./routes/todos");
app.use("/api/todos", todoRoutes);

app.get("/", function(req, res){
	res.sendFile("index.html");
});

app.listen("3001", function(){
	console.log("server listening to port 3001")
});