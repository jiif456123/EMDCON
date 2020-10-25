var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var reserva = new Schema({

    nombre: { type: String },
    areacomun: { type: String },
    evento: { type: Date },
    persona: { type: Date },
    fechaInicio: { type: Date },
    fechaFin: { type: Date },
    horaInicio: { type: Date },
    horaFin: { type: Date },
    estado: { type: String },
    urlfoto: { type: String },

}, {
    versionKey: false
});

var model = mongoose.model('Reserva', reserva);
module.exports = model;