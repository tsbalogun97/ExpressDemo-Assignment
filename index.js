

const express = require('express')
// --- bring in Express/Import

const app = express()
// --- connects express instance to variable(app)
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

const port = 3006

app.get("/", (req, res) => {
  // res.send(`<h1>Hello World</h1>`);
  res.render(`Index`)
});
// app.get("/home", (req, res) => {
//   res.render("Home");
// });
const food = ['yam','rice',' beans','garri','fufu']

const favMovies = ['ConAir','Batman Forever', '007: The Man With The Golden Gun','Power','apple','fall','speed']





// --- creat routes based on path /rest
// app.get('/:indexOfFoodArray', (req,res)=>{
// res.send(food[req.params.indexOfFoodArray])
// })
// app.get('/:indexOfFavMoviesArray', (req,res)=>{
// res.send(favMovies[req.params.indexOfFavMoviesArray])
// })


app.get('/food/:food', (req,res)=>{
// res.send(favMovies[req.params.indexOfFavMoviesArray])
res.render(`Food`,{food:food[req.params.food]})
})
app.get('/movies/:movies', (req,res)=>{
// res.send(favMovies[req.params.indexOfFavMoviesArray])
res.render(`Movies`,{movies:favMovies[req.params.movies]})
})




// --- Home Route


app.listen(port,(req,res)=>{
  console.log("server is now listening on port 3006")
})
// --- creates the server based on port value