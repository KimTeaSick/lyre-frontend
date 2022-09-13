import express, { Application } from "express";

const app: Application = express();

app.listen(8080, () => {
  console.log("app");
});
