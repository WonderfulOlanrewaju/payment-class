import { app } from "./app";
import { name } from "../package.json";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

let { dbUrl } = process.env;

mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

let db = mongoose.connection;

db.once("open", () => console.log("connected to DB"));
db.on("error", () => console.err("err occured"));

let port = 3008;
app.listen(port, () => console.log(`${name} sever started on port ${port}`));
