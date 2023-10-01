import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";
import Authors from "./authors.js";

const AuthorBiographies = sequelize.define("AuthorBiographies", {
  birthplace: DataTypes.STRING,
  education: DataTypes.STRING,
  awards: DataTypes.INTEGER,
  description: DataTypes.TEXT("long"),
});

const authorBioFK = { name: "authorId" };
AuthorBiographies.belongsTo(Authors, { foreignKey: authorBioFK });
Authors.hasOne(AuthorBiographies, { foreignKey: authorBioFK });

export default AuthorBiographies;
