const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("My New App!");
});

app.listen(3000, () => console.log("Listening on port 3000"));

app.get("/api/heroes", (req, res) => {
  res.send(["Superman", "Iron Man", "Batman", "Hulk"]);
});

app.get("/api/heroes :id", (req, res) => {
  res.send(req.params.id);
});

app.get("/api/heroes :title/:publisher", (req, res) => {
  res.send(req.params);
});

app.get("/api/heroes :title/:publisher", (req, res) => {
  res.send([req.params, req.query]);
});

//Array for Get Method
const movies = [
  {
    id: 1,
    title: "Superman",
  },
  {
    id: 2,
    title: "Thor",
  },
  {
    id: 3,
    title: "Iron Man",
  },
];

//get all movies
app.get("/api/movies", (req, res) => {
  res.send(movies);
});

//get movie by id
app.get("/api/movies/:id", (req, res) => {
  const movie = movies.find((h) => h.id === parseInt(req.params.id));
  if (!movie)
    return res.status(404).send("The movie with the given ID was not found");
  res.send(movies);
});

app.use(express.json());

//add movie
app.get("/api/movies", (req, res) => {
  const movie = {
    id: movies.length + 1,
    title: req.body.title,
  };
  movie.push(movie);
  res.send(movies);
});
