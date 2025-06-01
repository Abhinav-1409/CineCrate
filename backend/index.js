const express = require("express");
const dotenv = require("dotenv");
const app = express();

dotenv.config();
const PORT = process.env.PORT || 3000;
app.use(express.json());

const { sql, addMovies } = require("./db");

app.get("/", (req, res) => {
  res.send("Hello!!");
});

app.get("/genres", async (req, res) => {
  const genres = await sql`SELECT  * FROM genres`;
  res.send(genres);
});
app.get("/tables", async (req, res) => {
  const result = await sql`SELECT table_name
  FROM information_schema.tables
  WHERE table_schema = 'public'
    AND table_type = 'BASE TABLE';
`;
  res.send(result);
});
// let moviesID = [];
app.get("/movies", async (req, res) => {
  const movies = await sql`SELECT 
    m.*,
    COALESCE(ARRAY_AGG(g.name) FILTER (WHERE g.name IS NOT NULL), '{}') AS genres
FROM 
    movies m
LEFT JOIN 
    movie_genre mg ON m.id = mg.movie
LEFT JOIN 
    genres g ON g.id = mg.genres
GROUP BY 
    m.id
ORDER BY 
    m.id
LIMIT 100;
`;
  res.send(movies);
});

app.listen(PORT, () => {
  console.log("Server Running Successfully " + PORT + "!!");
});
