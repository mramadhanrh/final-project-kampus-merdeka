import dotenv from "dotenv";

// Allow us to use process.env
dotenv.config();

export default {
  url: process.env.DB_URL,
};
