const express = require("express");
const router = require("./src/routes/api.js");
const app = express();

const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const path = require("path");

//mongoose connect..........
let URL =
  "mongodb+srv://azizulhakim68178:azizulhakim68178@cluster0.syaab.mongodb.net/18-pre-record-video";
let option = {
  user: "azizulhakim68178",
  pass: "azizulhakim68178",
  autoIndex: true,
};
mongoose
  .connect(URL, option)
  .then((res) => {
    console.log("db is connected");
  })
  .catch((err) => {
    console.log("db is not connected");
    console.log(err);
    process.exit(1);
  });

//use all package .....................
app.use(cookieParser());
app.use(mongoSanitize());
app.use(cors());
app.use(helmet());
app.use(hpp());
app.use(xss());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const limiter = rateLimit({ windowMs: 15 * 60 * 1000 });
app.use(limiter);

app.set("etag", false);

// All routes handle........................
app.use("/api", router);

//Add React Frontend Routing................
/* app.use(express.static("client/dist"));

// Add React Front End Routing
app.get("*", function (req, res) {
  res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
}); */

module.exports = app;
