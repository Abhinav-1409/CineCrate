const express = require("express");
const dotenv = require("dotenv");
const app = express();

dotenv.config();
const PORT = process.env.PORT || 3000;

const { sql } = require("./db");

app.get("/", (req, res) => {
  res.send("Hello!!");
});

app.get("/genres", async (req, res) => {
  const genres = await sql`SELECT  * FROM genres`;
  res.send(genres);
});
app.get("/tables", async (req,res)=>{
  const result = await sql`SELECT table_name
  FROM information_schema.tables
  WHERE table_schema = 'public'
    AND table_type = 'BASE TABLE';
`;
res.send(result);
})

app.listen(PORT, () => {
  console.log("Server Running Successfully " + PORT + "!!");
});
