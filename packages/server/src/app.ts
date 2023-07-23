import express from 'express';
import Factory from './factory';
import Middlewares from './middlewares/User';
import swaggerUi from 'swagger-ui-express'

import swaggerDocument from '../swagger.json'

const app = express();

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.use('/user', Factory.userRouter);
app.use('/categories', Factory.categoryRouter);
app.use('/products', Factory.productRouter);

app.use(Middlewares.error);

export default app;