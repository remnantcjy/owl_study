var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var mysql = require('mysql2')

var connection = mysql.createConnection({
  host : 'localhost',
  port : 3306,
  user : 'root',
  password : '0314',
  databases : 'owl'
})

connection.connect();

app.listen(3000, function(){
  console.log("start! express server on 3000");
})


app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine', 'ejs')

//url routing
app.get('/', function(req, res){
  console.log('test');
  //res.send("<h1>hi !!! send data</h1>")
  res.sendFile(__dirname + "/public/main.html")
})

app.get('/main', function(req, res){
  res.sendFile(__dirname + "/public/main.html")
})

app.post('/email_post', function(req,res){
  //get : req.param('email')
  console.log(req.body.email);
  //res.send("<h1>welcome " + req.body.email + "</h1>")
  res.render('email.ejs', {'email' : req.body.email})
})

app.post('/ajax_send_email', function(req, res){
  console.log(req.body.email)
  //check validation about input value => select db
  var email = req.body.email;
  var responseData = {};

  var query = connection.query('select name from user where email="' + email + '"', function(err, rows){
    if(err) throw err;
    if(rows[0]){
      console.log(rows[0]);

    //  responseData.result = "ok";
    //  responseData.name = rows[0].name;
    } else{
      console.log('none : ' + rows[0]);
    }
  })

  res.json(responseData)
})
