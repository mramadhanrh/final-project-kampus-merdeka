import express from "express";
import { createAuthor } from "../services/authors.js";
import { HTTP_STATUS_MESSAGE } from "../constants/httpStatusMessage.js";

/**
 *
 * @param {express.Request} request
 * @param {express.Response} response
 * @param {express.NextFunction} next
 */
export const postCreateAuthor = async (request, response, next) => {
  try {
    const { firstName, lastName, nationality, birthDate } = request.body;

    const author = await createAuthor(
      firstName,
      lastName,
      nationality,
      birthDate
    );
    response.json({
      data: author,
      message: HTTP_STATUS_MESSAGE[response.status],
    });
  } catch (e) {
    next(e);
  }
};
