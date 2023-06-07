import express, { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, world!');
});

const port = 5050;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
