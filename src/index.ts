import express from 'express';
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT;
const host = process.env.HOST;

app.get('/', (req, res) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://${host}:${port}`);
});