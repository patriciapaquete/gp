const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Entidade = new Schema({
    entidadeId: mongoose.ObjectId,
    predefinido: Boolean,
    nome : String
})

var Utilizador = new Schema({
    utilizadorId: mongoose.ObjectId,
    email: String,
    password: String,
    nome: String,
    genero: {type: String, maxlength: 1},
    dataDeNascimento: Date,
    comissaoGestao: Boolean,
    aprovado: Boolean,
    entidades: [entidadeId],
    externo: Boolean,
    dataCriacao: Date,
    fotoPerfilCaminho: String,
    projetosFavoritos: [projetoId]
})

var Inscricao = new Schema({
    inscricaoId : mongoose.ObjectId,
    utilizadorId : Utilizador.utilizadorId,
    projetoId : Projeto.projetoId,
    presente: Boolean,
    avaliacao : [{valor: Number, descricao: String}],
    cancelado : Boolean,
})