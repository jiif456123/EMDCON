let DepService = require('../service/departamento.service')
let router = require('express').Router()

router.post('/', (req, res)=>{
    let dep = req.body;
    console.log(dep);
    DepService.crear(dep).then(data=>{
        res.json(data)
    }).catch(err=>{
        res.json(err)
    })
})

module.exports = router