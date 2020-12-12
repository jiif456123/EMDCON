var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var documento = new Schema({
    nombre: { type: String },
    resumen: { type: String },
    categoria: { type: String },
    filePath: { type: String },
}, {
    versionKey: false
});

var model = mongoose.model('Documento', documento);
module.exports = model;