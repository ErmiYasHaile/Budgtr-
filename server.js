// =======================================
//              DEPENDENCIES
// =======================================
const express = require('express');
const app = express();
const port = 3000;


// =======================================
//              DATABASE
// =======================================
const budget = require('./models/budget.js')
// =======================================
//              ROUTES
// =======================================
app.get('/',(req, res)=>{
    res.send('<h1> This page is working<h1/>')
})

console.log(budget)
// middleware 


// index route
app.get('/budgets', (req, res)=>{
  // res.send(budget)
  res.render('index.ejs',{
    budget: budget
  })
})

/// NEW ROUTE




/// POST


// show route


// =======================================
//              LISTENER
// =======================================
app.listen(port, () => {
  console.log(`Budgtr app listening on port: ${port}`)
});
