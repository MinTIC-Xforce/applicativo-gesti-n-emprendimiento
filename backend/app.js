import express from 'express';
import productsRoutes from './routes/products.routes.js';
import clientsRoutes from './routes/clients.routes.js';
import salesRoutes from './routes/sales.routes.js';
//import fileupload from 'express-fileupload';

const app = express();

//middlewares
app.use(express.json());

//routes
app.use(productsRoutes)
app.use(clientsRoutes)
app.use(salesRoutes)

export default app;