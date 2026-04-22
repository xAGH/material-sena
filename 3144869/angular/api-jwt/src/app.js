const express = require('express');
const authRoutes = require('./routes/auth.route');

const app = express();
app.use(express.json());

// Rutas
app.use('/api/auth', authRoutes);

module.exports = app;