const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB connection
mongoose.connect('mongodb://localhost/herbify', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Middleware
app.use(express.json());

// Sample routes
app.get('/', (req, res) => res.send('Herbify API running'));

// Starting server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
