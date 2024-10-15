import express from 'express';
import connectDB from './config/db';
import corsOptions from './config/cors';
import cors from 'cors';
import authRoutes from './routes/authRoutes';
import userRoutes from './routes/userRoutes';
import movieRoutes from './routes/movieRoutes';
import dotenv from 'dotenv';
import path from 'path';
import swaggerUi from 'swagger-ui-express';

import swaggerDocs from "./Swagger/swaggerOptions"

dotenv.config();
connectDB();

const app = express();





app.use(cors(corsOptions));
app.use(express.json()); 


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use('/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/movies', movieRoutes);
app.use('/posters', express.static(path.join(__dirname, '../public/posters')));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});