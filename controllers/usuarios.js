const { response, request } = require('express');




const usuariosGet = (req = request, res = response) => {

    const query = req.query;//obtener todos los datos del cliente
    const {saludo, nombre, apikey } = req.query; //desctructurandop para obtenr los datos que desee

    res.json({
        messages: 'get API controlador',
        query,
        saludo,
        nombre,
        apikey
    });
};



const usuariosPut = (req = request, res = response) => {

    //const id = req.params.id;
    const {id } = req.params;//desctructuramos
    res.json({
        messages: 'put API controlador',
        id
    });
};



const usuariosPost = (req = request, res = response) => {

    //desctructurando lectura y parceo del body
    const {edad, nombre} = req.body;


    res.json({
        messages: 'post API controlador',
        nombre,
        edad
    });
};


const usuariosDelete = (req = request, res = response) => {
    res.json({
        messages: 'delete API controlador'
    });
};


const usuariosPatch = (req = request, res = response) => {
    res.json({
        messages: 'patch API controlador'
    });
};




module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch

}