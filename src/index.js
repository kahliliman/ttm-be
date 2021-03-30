import express from "express";
import logger from "morgan";
import firebase from "firebase";
import db from "./models";
import firebaseConfig from "./configs/firebase";

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3100;

db.sequelize
  .authenticate()
  .then(() =>
    console.log(
      `Database ${process.env.DB_DATABASE} connected on port:${process.env.DB_PORT}`
    )
  )
  .catch((err) => console.log(`Database connection error: ${err}`));

firebase.initializeApp(firebaseConfig);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).send("<h1>Tours & Travel Backend!</h1>");
});

app.use((req, res) => {
  res.status(404).send("<h1>404</h1>");
});

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
