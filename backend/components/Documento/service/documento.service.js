let documento = require('../model/documento.model');


let guardar = (dep) => {
    let newDoc = new documento({
        nombre: dep.nombre,
        resumen: dep.resumen,
        filePath: dep.filePath,
        categoria: dep.categoria,
    })
    return new Promise((resolve, reject) => {
        newDoc.save(newDoc, (err, data) => {
            if (err) reject(err)
            resolve(data)
        })
    })
}

var listar = () => {
    return new Promise((resolve, reject) => {
        documento.find({}).exec((err, data) => {
            if (err) reject(err);
            resolve(data);
        })
    })
}


module.exports = {
    crear: guardar,
    listar: listar
}
