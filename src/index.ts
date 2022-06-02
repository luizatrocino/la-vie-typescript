import express from 'express';
import handleMiddleware from './middlewares/handleMiddleware';

const app = express();
const routes = require("./routes");

app.use(express.json())
app.use(routes);
app.use(handleMiddleware)


export default app
//quando colocamos o "default", ao importar esse app, não precisamos usar a extração. Exemplo, em um outro arquivo import { app } from "." 
