const express = require('express');
const dotenv = require('dotenv');
const initialize = require('./app/app.js');

dotenv.config();

const app = express();
const port = process.env.PORT;
initialize(app);

app.listen(port, () => console.log(`Server running on port ${port}`));
