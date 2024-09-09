const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const weekRoutes = require('./Routes/weekRoutes');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
connectDB();

// Налаштування CORS для всіх доменів
app.use(cors({
  origin: '*', // Дозволяє всі домени
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

app.use(express.json());

app.use('/api', weekRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
