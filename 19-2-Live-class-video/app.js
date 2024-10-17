import express from "express";
import cors from "cors";
import helmet from "helmet";
import ratLimit from "express-rate-limit";
import mongoose from "mongoose";

import {
  DATABASE,
  PORT,
  REQUEST_NUMBER,
  REQUEST_TIME,
  WEB_CACHE,
} from "./app/config/config.js";
import router from "./routes/api.js";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(helmet());

//Rate limiting...........................
const limiter = ratLimit({ windowMs: REQUEST_TIME, max: REQUEST_NUMBER });
app.use(limiter);

//Cache.................
app.set("etag", WEB_CACHE);

//Database connection.......................................
mongoose
  .connect(DATABASE, { autoIndex: true })
  .then(() => {
    console.log("db is connected");
  })
  .catch((error) => {
    console.log("db is not connnect");
    console.log(error);
    process.exit(1);
  });

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server is runing at http://localhost:${PORT}`);
});
