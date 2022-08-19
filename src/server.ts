import express from 'express';
import { userRouter } from './routes/user.routes';

const app = express();

app.use(express.json());
app.use(userRouter);

app.get('/', (request, response) => {
  return response.send('Aplicação está funcionando')
});

const PORT = 3000;
app.listen(PORT, () => console.log('Server is Running on PORT', PORT));