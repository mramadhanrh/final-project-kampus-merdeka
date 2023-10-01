import express from "express";
import { HTTP_STATUS_MESSAGE } from "../constants/httpStatusMessage.js";
import { createBook, findBookById } from "../services/books.js";

/**
 *
 * @param {express.Request} request
 * @param {express.Response} response
 * @param {express.NextFunction} next
 */
export const getBookById = async (request, response) => {
  try {
    const { id } = request.params;
    const book = await findBookById(id);
    if (!book) response.status(404);

    response.json({
      data: book,
      message: HTTP_STATUS_MESSAGE[response.status],
    });
  } catch (e) {
    next(e);
  }
};

/**
 *
 * @param {express.Request} request
 * @param {express.Response} response
 * @param {express.NextFunction} next
 */
export const postCreateBook = async (request, response, next) => {
  try {
    const { title, releaseYear, authorId, publisherId } = request.body;
    const book = await createBook(title, releaseYear, authorId, publisherId);

    response.json({
      data: book,
      message: HTTP_STATUS_MESSAGE[response.status],
    });
  } catch (e) {
    next(e);
  }
};
