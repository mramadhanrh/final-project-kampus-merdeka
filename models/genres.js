import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

const Genres = sequelize.define("Genres", {
  name: DataTypes.STRING,
});

export default Genres;
