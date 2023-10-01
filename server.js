import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";

import sequelize from "./config/sequelize.js";
import { startSequelize } from "./utils/sequelize.js";

// Router
import booksRouter from "./routes/books.js";
import authorsRouter from "./routes/authors.js";

import "./models/index.js";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.raw());
app.use(bodyParser.json());

app.use(express.static("public"));

app.use("/api/books", booksRouter);
app.use("/api/authors", authorsRouter);

app.listen(port, () => {
  startSequelize(sequelize);
  console.log(`Server is running at port ${port}`);
});
