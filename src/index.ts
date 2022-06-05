import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World 3");
});

app.post("/", (req, res) => {
  res.status(200).json({ Hello: "world" });
});

app.listen(port, () => console.log(`App running on port ${port}`));
