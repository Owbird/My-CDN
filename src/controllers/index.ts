import { getContent } from "@/services";
import { Request, Response } from "express";

export const getUrl = async (req: Request, res: Response) => {
  const { "0": path } = req.params;

  const url = await getContent(path);

  res.redirect(url);
};
