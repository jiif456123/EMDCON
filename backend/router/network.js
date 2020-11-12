const userController = require('../components/User/controller/user.controller');
const presupuestoController = require('../components/Presupuesto/controller/presupuesto.controllers');
const ingresosController = require('../components/Ingresos/controller/ingresos.controller');
const egresosController = require('../components/Egresos/controller/egresos.controllers');
const rutas = function(app) {
    app.use('/user', userController)
    app.use('/presupuesto', presupuestoController)
    app.use('/ingresos', ingresosController)
    app.use('/egresos', egresosController)
}

module.exports = rutas;