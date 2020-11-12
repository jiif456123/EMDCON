var areacomun = require('../model/areacomun.model');

var listarareacomun = () => {
    return new Promise((resolve, reject) => {
        areacomun.find({}).exec((err, data) => {
            if (err) reject(err);
            resolve(data);

        })
    })
}

module.exports = {
    listar: listarareacomun
}