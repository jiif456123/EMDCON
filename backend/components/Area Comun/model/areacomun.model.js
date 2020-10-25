var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var areacomun = new Schema({

    nombre: { type: String },
    fechaCreacion: { type: Date },
    fechaInicio: { type: Date },
    fechaFin: { type: Date },
    horaInicio: { type: Date },
    horaFin: { type: Date },
    asunto: { type: String },
    area: { type: String },
    estado: { type: String }
}, {
    versionKey: false
});

var model = mongoose.model('Areacomun', areacomun);
module.exports = model;