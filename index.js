const express = require('express');

const app = express();

const dbSetup = require('./database/setup');
require('dotenv').config();

const port = process.env.PORT;

dbSetup();

app.use(express.json());

const userRoutes = require('./routes/userRoutes');
app.use(userRoutes);


app.listen(port, () => {
    console.log(`Server is running at port ${port}.`);
});