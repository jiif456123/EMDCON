const userController = require('../components/User/controller/user.controller');
const reservaController = require('../components/Reserva/controller/reserva.controller');
const areaComunService = require('../components/Area Comun/controller/areacomun.controller');
const rutas = function(app) {
    app.use('/user', userController)
    app.use('/reserva', reservaController)
    app.use('/areacomun', areaComunService)

}

module.exports = rutas;