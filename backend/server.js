import express from "express";
import meds from "./data/meds.js";

const port = 5000;

const app = express();

app.get("/", (req, res) => {
  res.send("Api is running...");
});

app.get('/api/meds', (req,res) => {
  res.json(meds);
})

app.get('/api/meds/:id', (req,res) => {
  const med = meds.find((p) => p._id === req.params.id)
  res.json(med);
})

app.listen(port, () => console.log(`Server running on port ${port}`));
