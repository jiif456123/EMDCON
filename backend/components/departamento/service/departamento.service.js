
let Departamento = require('../model/departamento.model');


let guardar = (dep) => {
    let newDep = new Departamento({
        nombre: dep.nombre,
    })
    return new Promise((resolve, reject)=>{
        newDep.save(newDep, (err, data)=>{
            if(err) reject(err)
            resolve(data)
        })
    })
}

module.exports = {
    crear: guardar,
}
