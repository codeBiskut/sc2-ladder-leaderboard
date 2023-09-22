const express = require('express');
const db = require('./config/connection');
const { engine } = require ('express-handlebars');
const axios = require('axios')
const homeRoutes = require('./routes/index')
const authRoutes = require('./routes/auth/authRoutes')
const apiRoutes = require('./routes/api/index')
const PORT = process.env.PORT || 3001;
const app = express();

// Set up Handlebars as the view engine
const hbsOptions = {
    allowProtoPropertiesByDefault: true
};

app.engine('handlebars', engine({ ...hbsOptions }));
app.set('view engine', 'handlebars');

// Define routes
app.use('/', homeRoutes);
app.use('/leaderboard', homeRoutes)
app.use('/api', apiRoutes);
app.use('/auth', authRoutes);
app.use(express.static('public'));

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API running on port ${PORT}!`);
    });
});