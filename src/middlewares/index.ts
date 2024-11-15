import { API } from "@/utils";
import type { NextFunction, Request, Response } from "express";
import { z } from "zod";

export const errorHandler = (
  error: Error,
  _: Request,
  res: Response,
  __: NextFunction,
) => {
  console.error(`[!] ${error.name}: ${error.message}`);
  if (error instanceof z.ZodError) {
    API.json(res, "HTTP_400_BAD_REQUEST", {
      message: "Invalid fields",
      status: "error",
      errors: error.errors,
    });
    return;
  }

  API.json(res, "HTTP_500_INTERNAL_SERVER_ERROR", {
    message: "An unknown error occurred",
    status: "error",
    errors: [],
  });
};

