const axios = require('axios');
const config = require('../settings/config');
const serviceAssinaturaUrl = config.variables.serviceAssinaturaUrl;
exports.handle = async () => {
    try {
        const url = `${serviceAssinaturaUrl}/ativar/trial`;
       await axios.put(url, {});
       console.log(`Tarefa agendada foi executada. URL: ${url}`);
    } catch (error) {
        console.error(error);
        throw new Error(error);
    }
};
