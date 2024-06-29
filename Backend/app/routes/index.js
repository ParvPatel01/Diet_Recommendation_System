const UserRouter = require('./user-route.js');
const DietRouter = require('./diet-route.js')

const basePath = "/api/v1"

const initializeRoutes = (app) => {
    app.use(`${basePath}`, UserRouter)
    app.use(`${basePath}/diet`,DietRouter)
}

module.exports = initializeRoutes
