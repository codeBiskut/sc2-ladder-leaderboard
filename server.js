const express = require('express');
const db = require('./config/connection');
const { engine } = require ('express-handlebars');
const axios = require('axios')
const authRoutes = require('./routes/auth/authRoutes')
const PORT = process.env.PORT || 3001;
const app = express();

// Set up Handlebars as the view engine
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

// Define routes
app.use('/', require('./routes/index'));
app.use('/auth', authRoutes);
app.use(express.static('public'));

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API running on port ${PORT}!`);
    });
});