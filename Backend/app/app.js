const cors = require('cors');
const initializeRoutes = require('./routes/index.js');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');

const initialize = (app) => {
    app.use(cors());
    app.use(bodyparser.json())
    app.use(bodyparser.urlencoded())
    mongoose.connect(process.env.MONGO_CONNECTION)
    initializeRoutes(app)
}

module.exports = initialize;