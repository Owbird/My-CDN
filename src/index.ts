import express from "express";
import api from "./routes";
import cors from "cors";
import "express-async-errors";
import { errorHandler } from "./middlewares";

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());

app.use(express.json());
app.use(api);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

export default app;
