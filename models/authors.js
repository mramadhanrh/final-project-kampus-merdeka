import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

const Authors = sequelize.define("Authors", {
  firstName: DataTypes.STRING,
  lastName: DataTypes.STRING,
  nationality: DataTypes.STRING,
  birthDate: DataTypes.DATE,
});

export default Authors;
