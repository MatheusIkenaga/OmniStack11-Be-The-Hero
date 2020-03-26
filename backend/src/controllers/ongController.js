const crypto = require('crypto')
const connection = require('../database/connection');

module.exports = {


    // método para listar
    async index (request, response){ 
        const ongs = await connection('ongs').select('*');

        return response.json(ongs);
    },


    //método para inserir
    async create (request, response){
        const {name, email, whatsapp, city, uf } = request.body;

    //para criar ID
        const id = crypto.randomBytes(4).toString('HEX');

        // o await espera o insert ser todo executado para prosseguir no código
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })

        return response.json({ id });
        }
}