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
app.get('/budget',(req, res)=>{
    res.send('This page is working')
})


// middleware 


// index route


/// NEW ROUTE




/// POST


// show route


// =======================================
//              LISTENER
// =======================================
app.listen(port, () => {
  console.log(`Budgtr app listening on port: ${port}`)
});
