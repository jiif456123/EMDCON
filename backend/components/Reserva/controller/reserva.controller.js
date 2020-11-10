const http = require('../../../utils/http');
const code = require('../../../utils/status');
const reservaService = require('../service/reserva.service');
const router = require('express').Router();


router.get('/', (req, res) => {
    reservaService.listar().then(data => {
        http.ok(req, res, code.status.Ok.code, data)

    }).catch(err => {
        http.err(req, res, code.status.Internal_Server_Error.code, err)


    })
})

router.post('/actualizar', (req, res) => {
    console.log(req.body);
    let reserva = req.body.reserva;
    let estado = req.body.estado;
    reservaService.actualizar(reserva, estado).then(data => {
        http.ok(req, res, code.status.Ok.code, data)

    }).catch(err => {
        http.err(req, res, code.status.Internal_Server_Error.code, err)
    })
})

module.exports = router;