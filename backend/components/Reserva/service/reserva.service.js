var reserva = require('../model/reserva.model');
var listarreserva = () => {
    return new Promise((resolve, reject) => {
        reserva.find({}).populate('persona areacomun').exec((err, data) => {
            if (err) reject(err);
            resolve(data);
        })
    })
}

var actualizarReserva = (reserva1, estado) => {
    console.log(reserva + " " + estado)
    let id = reserva1
    let estado1 = {
        estado: estado,
    }
    return new Promise((resolve, reject) => {
        reserva.findByIdAndUpdate(id, estado1)
            .exec((err, data) => {
                if (err) {
                    console.log(err);

                    reject(err);
                }
                console.log(data);
                resolve(data)
            })
    })
}

module.exports = {
    listar: listarreserva,
    actualizar: actualizarReserva

}