import express from "express";
import path from "path";
import "./db";
import movieRouter from "./movieRouter";

const app = express();

const initLogger = (req, res, next) => {
  console.log(
    `================================================================`
  );
  next();
};
app.use(initLogger);
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use("/", movieRouter);

// Codesanbox does not need PORT :)
app.listen(() => console.log(`✅  Server Ready!`));
