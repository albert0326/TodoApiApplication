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

var PORT = process.env.PORT || 3000;
app.listen(PORT, function(){
	console.log(`server is listening on ${PORT}`)
});