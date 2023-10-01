import Authors from "../models/authors.js";

export const createAuthor = async (
  firstName,
  lastName,
  nationality,
  birthDate
) => {
  return await Authors.create({
    firstName,
    lastName,
    nationality,
    birthDate,
  });
};
