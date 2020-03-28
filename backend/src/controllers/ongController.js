const generateUniqueId = require('../utils/generateUniqueId')
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

    //para criar ID -> foi pra dentro da pasta utils
        const id = generateUniqueId()

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