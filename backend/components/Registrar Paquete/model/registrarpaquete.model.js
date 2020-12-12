var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var paquete = new Schema({

    cantidad: { type: Number },
    descripcion: { type: String },
    fechaEmitida: { type: Date },
    estado: { type: String },


}, {
    versionKey: false
});

var model = mongoose.model('Paquete', paquete);
module.exports = model;