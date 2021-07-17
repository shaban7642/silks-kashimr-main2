const express = require('express');
require('dotenv/config');
const colors = require('colors');
const connectDB = require('./config/database');
const cors = require('cors');
const app = express();
app.use(cors('*'));
const { readdirSync } = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const { notFound, errorHandler } = require('./middlewares/errorMiddleware');
app.use(express.static(path.join(__dirname, 'public/uploads/')));

app.use(express.json());

connectDB();
// routes middleware
readdirSync('./routes').map((route) =>
    app.use('/api', require('./routes/' + route))
);

// PayPal Config
app.get('/api/config/paypal', (req, res) =>
    res.send(process.env.PAYPAL_CLIENT_ID)
);

// send front app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const port = process.env.PORT || 4000;
app.use(notFound);
app.use(errorHandler);

app.listen(port, () =>
    console.log(`server running ${port}`.yellow.underline.bold)
);
