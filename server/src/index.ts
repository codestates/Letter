console.log("typescript");
const http = require ("http");
import express, { Request, Response, NextFunction, Express } from 'express';
import cors from 'cors';

const cookieParser: Function = require('cookie-parser');
const app: Express = express();
const port: number = 80;
app.use(
    cors({
      credentials: true,
      origin: ["http://localhost:3000"],
      methods: ['PATCH', 'POST', 'DELETE', 'GET', 'PUT', 'OPTIONS'],
    }),
  );
app.use(cookieParser());
app.get('/', (req: Request, res: Response): void => {
    res.send('It is Letter Server !');
  });
  
app.listen(port, () => {
    console.log('localhost ' + port + ' opened!!');
});
  