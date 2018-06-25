var express = require('express')
var bodyParser = require('body-parser')
var app = express()
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var logPasses = [{
	login: "Semen",
	password: "123"
},
{
	login: "neSemen",
	password: "1234"
}]

app.get('/', function (req, res) {
  res.sendFile(__dirname+'/login.html');
})

app.get('/send',function(req,res){
	console.log(req.query);
	var v1 = req.query.value1;
	var v2 = req.query.value2;
	if(!isNaN(v1)&&!isNaN(v2)){
		let v3 = +v1 + +v2;
		res.send("Sum of numbers is "+v3);
	}
	else{
		res.send("There is no numbers!!");
	}
})

app.post('/send',function(req,res){
	console.log(req.body);
	var v1 = req.body.value1;
	var v2 = req.body.value2;
	if(!isNaN(v1)&&!isNaN(v2)){
		let v3 = +v1 + +v2;
		res.send("Sum of numbers is "+v3);
	}
	else{
		res.send("There is no numbers!!");
	}
})



app.post('/loginThose',function(req,res){
	var log = req.body.login;
	var pas = req.body.password;
	for(var i=0;i<logPasses.length;i++){
		if(log==logPasses[i].login&&pas==logPasses[i].password){
			res.send("/content.html")
		}
	};
	res.send("You entered an incorrect login and password!!")
})


 
app.listen(8080)
console.log('run!');