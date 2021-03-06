const mongoose = require('mongoose');
const {Schema} = mongoose

const clienteSchema = new Schema({
    nombres: String,
    apellidos: String,
    documento: String,
    telefono: String,
    email: String,
    contrasena: String,
    rol: String,
    fechaIngreso: {type: Date, default:Date.now},
    placas: []
})

module.exports = mongoose.model('cliente', clienteSchema)