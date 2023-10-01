import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";
import Authors from "./authors.js";
import Publishers from "./publishers.js";

const Books = sequelize.define("Books", {
  title: DataTypes.STRING,
  releaseYear: DataTypes.DATE,
});

const authorBooksFK = { name: "authorId", allowNull: true };
Authors.hasMany(Books, { foreignKey: authorBooksFK });
Books.belongsTo(Authors, { foreignKey: authorBooksFK });

const publisherBooksFK = { name: "publisherId", allowNull: true };
Publishers.hasMany(Books, { foreignKey: publisherBooksFK });
Books.belongsTo(Publishers, { foreignKey: publisherBooksFK });

export default Books;
