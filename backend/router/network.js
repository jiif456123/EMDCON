const userController = require('../components/User/controller/user.controller');
const rutas = function(app) {
    app.use('/user', userController)
}

module.exports = rutas;