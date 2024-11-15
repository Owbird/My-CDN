import { type Response } from "express";

const responseCodes = {
  HTTP_200_OK: 200,
  HTTP_201_CREATED: 201,
  HTTP_400_BAD_REQUEST: 400,
  HTTP_401_UNAUTHORIZED: 401,
  HTTP_404_NOT_FOUND: 404,
  HTTP_500_INTERNAL_SERVER_ERROR: 500,
};

type Status = keyof typeof responseCodes;

type ResponseData = {
  message: string;
} & (
  | {
      status: "success";
      data: any;
    }
  | {
      status: "error";
      errors: any[];
    }
);

export class API {
  static json = (
    res: Response,
    status: Status,
    data: ResponseData,
  ): Response => {
    return res.status(responseCodes[status]).json(data);
  };
}
