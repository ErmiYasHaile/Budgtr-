// =======================================
//              DEPENDENCIES
// =======================================
const express = require('express');
const app = express();
const port = 3000;

// =======================================
//              DATABASE
// =======================================
// const bakedGoods = require('./models/bakedgoods.js');
const budget = require('./models/budget.js')
// =======================================
//              ROUTES
// =======================================
app.get('/budgets',(req, res)=>{
    res.send('Hello world')
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
  console.log(`Biscoff Bakery app listening on port: ${port}`)
});
