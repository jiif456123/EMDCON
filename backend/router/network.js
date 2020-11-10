const userController = require('../components/User/controller/user.controller');
const loginController = require('../components/login/loginController')
const chatController = require('../components/chat/controller/chat.controller')
const messageController = require('../components/message/controller/message.controller')
const depController = require('../components/departamento/controller/departamento.controller');
const reservaController = require('../components/Reserva/controller/reserva.controller');
const areaComunService = require('../components/Area Comun/controller/areacomun.controller');

const rutas = function(app) {
    app.use('/user', userController)
    app.use('/login', loginController)
    app.use('/chat', chatController)
    app.use('/message', messageController)
    app.use('/departamento', depController) 
    app.use('/reserva', reservaController)
    app.use('/areacomun', areaComunService)
}

module.exports = rutas;