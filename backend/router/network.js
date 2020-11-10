const userController = require('../components/User/controller/user.controller');
const loginController = require('../components/login/loginController')
const chatController = require('../components/chat/controller/chat.controller')
const messageController = require('../components/message/controller/message.controller')
const depController = require('../components/departamento/controller/departamento.controller');

const rutas = function(app) {
    app.use('/user', userController)
    app.use('/login', loginController)
    app.use('/chat', chatController)
    app.use('/message', messageController)
    app.use('/departamento', depController) 
}

module.exports = rutas;