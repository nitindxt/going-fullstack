import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("hello there!");
});

app.listen(port, () => console.log(`server is listening at ${port}`));

app.get("/demo", (req, res) => {
  res.set("X-full-stack", "4life"); //custom header
  res.status(418);
  res.send("I prefer coffee");
});
