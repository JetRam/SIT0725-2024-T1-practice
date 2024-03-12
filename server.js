//var express = require("express")
//var app = express()
//var port = process.env.port || 3000;



//app.listen(port, ()=>){
//    console.log("App listening to: "+port)
//})

//let express = require('express');
//let app = express();
//let port = 3000;

//app.get('/add/:num1/:num2', (req, res) => {
    //const num1 = parseFloat(req.params.num1);
    //const num2 = parseFloat(req.params.num2);

    //const sum = num1 + num2;

    //res.send('Sum: ${sum}');
//});


//let PORT = process.env.PORT || 3000;
//app.listen(PORT, ()=>{
   // console.log('Server is running on port${PORT}');
//});

let express = require('express');
let app = express();
let port = 3000;

app.get('/addTheNumbers/:num1/:num2', (req, res) => {
  const num1 = parseFloat(req.params.num1);
  const num2 = parseFloat(req.params.num2);

  const sum = num1 + num2;

  res.send(`Sum: ${sum}`);
});

app.listen(port, () => {
  console.log('Server is running on port${PORT}');
});
