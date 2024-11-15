import express from "express";
import { getUrl } from "../../controllers";

const v1Api = express.Router({ mergeParams: true });

v1Api.get("/*", getUrl);

export default v1Api;
