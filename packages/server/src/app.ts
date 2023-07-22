import express from 'express';
import Factory from './factory';
import Middlewares from './middlewares/User';

const app = express();

app.use(express.json());

app.use('/user', Factory.userRouter);

app.use(Middlewares.error);

export default app;