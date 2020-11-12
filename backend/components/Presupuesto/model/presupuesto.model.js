var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var reporte = new Schema({

    asunto: { type: Number, default: 6 },
    mes: { type: String },
    fechaPago: { type: Date },
    monto: { type: Number },
    estado: { type: Number, default: 1 },
    tipoAsunto: { type: Number, default: 1 }
}, {
    versionKey: false
});

var model = mongoose.model('Reporte', reporte);
module.exports = model;