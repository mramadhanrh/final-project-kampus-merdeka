import sequelize from "../config/sequelize.js";
import Books from "./books.js";
import Genres from "./genres.js";

const BookGenres = sequelize.define("BookGenres", {});

const bookFK = { name: "bookId" };
const genreFK = { name: "genreId" };
Books.belongsToMany(Genres, { through: BookGenres, foreignKey: bookFK });
Genres.belongsToMany(Books, { through: BookGenres, foreignKey: genreFK });

export default BookGenres;
