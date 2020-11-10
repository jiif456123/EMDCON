var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var reserva = new Schema({

    nombre: { type: String },
    areacomun: { type: Schema.Types.ObjectId, ref: 'Areacomun' },
    evento: { type: String },
    persona: { type: Schema.Types.ObjectId, ref: 'User' },
    fechaInicio: { type: Date },
    fechaFin: { type: Date },
    horaInicio: { type: Date },
    horaFin: { type: Date },
    estado: { type: String },
}, {
    versionKey: false
});

var model = mongoose.model('Reserva', reserva);
module.exports = model;