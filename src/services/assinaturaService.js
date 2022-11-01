const axios = require('axios');
const config = require('../settings/config');

const serviceAssinaturaUrl = config.variables.serviceAssinaturaUrl;

exports.ativar = async (cpf) => {
    const url = `${serviceAssinaturaUrl}/ativar/${cpf}`;
    try {
        const retorno = await axios.put(url, {});
        return retorno.data.result.data;
    } catch (error) {
        console.error(`Erro ativar assinatura CPF: ${cpf}`);
        throw new Error(error);
    }
};
