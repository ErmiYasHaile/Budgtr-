// =======================================
//              DEPENDENCIES
// =======================================
const express = require("express");
const app = express();
const port = 3000;

// =======================================
//              DATABASE
// =======================================
const budget = require("./models/budget.js");
// =======================================
//              ROUTES
// =======================================
app.get("/", (req, res) => {
  res.send("<h1> This page is working<h1/>");
});
// console.log(budget)

// middleware
app.use(express.urlencoded({ extended: false }));

// index route
app.get("/budgets", (req, res) => {
  // res.send(budget)
  res.render("index.ejs", {
    budget: budget,
  });
});

// NEW ROUTE
app.get('/budgets/new',(req, res)=>{
  res.render('new.ejs')
})

// show route
app.get("/budgets/:id", (req, res) => {
  // res.send(budget[req.params.id])
  res.render("show.ejs", {
    budget: budget[req.params.id],
  });
});


// POST
app.post('/budgets',(req, res)=>{
  console.log(req.body)
  budget.push(req.body)
  console.log(budget)
  res.redirect('/budgets')
})


// =======================================
//              LISTENER
// =======================================
app.listen(port, () => {
  console.log(`Budgtr app listening on port: ${port}`);
});
