import express from "express";

const PORT = 4000;

const app = express();

app.listen(PORT, () => {
  console.log(`Server listenting on port http://localhost:${PORT}`);
});
