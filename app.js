const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { router: userRoutes } = require('./routes/users'); 
const catbookRoutes = require('./routes/catbooks'); 

const app = express();

require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

app.use('/api/users', userRoutes); 
app.use('/api/catbooks', catbookRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
