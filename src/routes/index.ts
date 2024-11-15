import express from "express";
import v1Api from "./v1";

const api = express.Router({ mergeParams: true });

api.use("/v1/", v1Api);
export default api;
