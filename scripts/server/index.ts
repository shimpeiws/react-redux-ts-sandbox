import * as express from 'express';
import { Request, Response } from 'express';

const app = express();

app.get('/', (_: Request, res: Response) => {
  return res.send('Hello world');
});

app.listen(8080, () => {
  console.log('Local Server app listening on port 8080');
});

export default app;
