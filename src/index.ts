import express from "express";
const PORT = 8000;

const app = express();

app.get('/', (_req, res) => {
  res.send('HELLO WORLD')
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`))
