import express from "express";
import { db } from "./db.js";
import cors from "cors";
import userRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js";
import cookieParser from "cookie-parser";

const router = express.Router()

const app = express();

app.use(express.json());
// to send any json object
app.use(cors({
  origin: "http://localhost:3000",
}));
app.use(cookieParser());

// login,logout,register

app.use("/api/users", userRoutes)
app.use("/api/auth", authRoutes)


// 

app.get("/", (req, res) => {
  const q = "SELECT * FROM movies";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/single/:idmovies", (req, res) => {
  const idmovies = req.params.idmovies;
  const q = "SELECT (`title`,`desc`,`price`) FROM movies WHERE idmovies = ?";

  db.query(q,[idmovies], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

// Get database
app.get("/movies", (req, res) => {
  const q = "SELECT * FROM movies";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

// Insert database
app.post("/movies", (req, res) => {
  const q = "Insert into movies (`title`,`desc`,`price`,`cover`) VALUES(?)";
  const VALUES = [
    req.body.title,
    req.body.desc,
    req.body.price,
    req.body.cover,
  ];

  db.query(q, [VALUES], (err, data) => {
    if (err) return res.json(err);
    return res.json("Movie created successfully.");
  });
});

// Delete database
app.delete("/movies/:idmovies", (req, res) => {
  const idmovies = req.params.idmovies;
  const q = "DELETE FROM movies where idmovies = ?";

  db.query(q, [idmovies], (err, data) => {
    if (err) return res.json(err);
    return res.json("Movie deleted successfully.");
  });
});


// Update database
app.put("/movies/:idmovies", (req, res) => {
  const idmovies = req.params.idmovies;
  const q =
    "UPDATE movies SET `title` = ?, `desc` = ?, `price` = ?, `cover` = ? WHERE idmovies = ? ";

  const values = [
    req.body.title,
    req.body.desc,
    req.body.price,
    req.body.cover,
  ];

  values.push(idmovies);

  db.query(q, values, (err, data) => {
    if (err) return res.json(err);
    return res.json("Movie updated successfully.");
  });

  // db.query(q, [...VALUES,idmovies], (err,data)=>{
  //     if (err) return res.json(err);
  //     return res.json("Movie updated successfully.");
  // })
});


app.listen(8800, () => {
  console.log("Connected to backend!");
});
