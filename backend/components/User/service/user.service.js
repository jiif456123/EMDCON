var User = require('../model/user.model');
var bcrypt = require('bcrypt');

var listarUsuarios = () => {

    let query = {
        estado: { $ne: 3 }
    };

    return new Promise((resolve, reject) => {
        User.find(query).populate('departamento').exec((err, listaUsuarios) => {
            if (err) reject(err);
            resolve(listaUsuarios);
        });
    });
};

var listarResidente = () => {

    let query = {
        rol : 'RESIDENTE'
    }
    return new Promise((resolve, reject) => {
        User.find(query).exec((err, listaUsuarios) => {
            if (err) reject(err);
            resolve(listaUsuarios);
        });
    });
}

var listarAdmin = () => {

    let query = {
        rol :{$ne:'RESIDENTE'}
    }
    return new Promise((resolve, reject) => {
        User.find(query).exec((err, listaUsuarios) => {
            if (err) reject(err);
            resolve(listaUsuarios);
        });
    });
}

var registarUsuario = (usuario) => {

    let objUsuario = new User({
        rol: usuario.rol,
        nombre: usuario.nombre,
        apellidoPaterno: usuario.apellidoPaterno,
        apellidoMaterno: usuario.apellidoMaterno,
        username: usuario.username,
        password: bcrypt.hashSync(usuario.password, 10),
        celular: usuario.celular,
        foto: usuario.foto,
        dni: usuario.dni,
        departamento: usuario.departamento
    });

    return new Promise((resolve, reject) => {
        objUsuario.save(objUsuario, (err, usuario) => {
            if (err) reject(err);
            console.log(usuario);
            resolve(usuario);
        });
    });
};


var modificarUsuarios = (id, usuario) => {

    console.log(usuario, ' [usuario]');

    return new Promise((resolve, reject) => {
        User.findByIdAndUpdate(id, usuario, (err, usuarios) => {

            if (err) {
                reject(err);
            }
            resolve(usuarios);
        });
    });
};

module.exports = {
    listar: listarUsuarios,
    registrar: registarUsuario,
    modificar: modificarUsuarios,
    listarResidente: listarResidente,
    listarAdmin: listarAdmin
};