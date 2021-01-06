const pagoService = require('../service/pago.service');
const http = require('../../../utils/http');
const code = require('../../../utils/status');
const e = require('express');
const router = require('express').Router();

router.get('/', (req, res) => { //get

    pagoService.listar()
        .then(
            (data) => http.ok(req, res, code.status.Ok.code, data))
        .catch(
            (errorMessage) => http.err(req, res, code.status.Internal_Server_Error.code, errorMessage, errorMessage));
});

router.post('/', (req, res) => { //post

    let pago = req.body;

    pagoService.registrar(pago)
        .then(
            (data) => http.ok(req, res, code.status.Ok.code, data))
        .catch(
            (errorMessage) => http.err(req, res, code.status.Internal_Server_Error.code, errorMessage, errorMessage));
});


router.get('/:id', (req, res) => {

    let id = req.params.id;

    pagoService.listarID(id).then((data) => {
        http.ok(req, res, code.status.Ok.code, data);
    }).catch((error) => {
        http.err(req, res, code.status.Internal_Server_Error.code, error, error)
    });
});

router.put('/:id', (req, res) => {

    let id = req.params.id;
    let pago = req.body;

    console.log(id);

    pagoService.modificar(id, pago).then((data) => {
        http.ok(req, res, code.status.Ok.code, data);
    }).catch((error) => {
        http.err(req, res, code.status.Internal_Server_Error.code, error, error)
    });
});


router.delete('/:id', (req, res) => {
    let id = req.params.id;
    console.log(id);

    pagoService.eliminar(id)
        .then((data) => {
            http.ok(req, res, code.status.Ok.code, data);
        })
        .catch((error) => {
            http.err(req, res, code.status.Internal_Server_Error, err);
        })
});

module.exports = router;