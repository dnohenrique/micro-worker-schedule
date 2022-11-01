const reservaService = require('../services/reservaService');
const assinaturaService = require('../services/assinaturaService');
exports.ativar = async (orderId, productId) => {
    try {
        const cpf = await reservaService.obterCpfAssinante(orderId, productId);
        const resultado = await assinaturaService.ativar(cpf);
        console.log(`Ativacao assinatura => Resultado: ${resultado} | CPF: ${cpf} | Reserva: ${orderId} | ProdutoId: ${productId}`);
    } catch (error) {
        console.error(error);
        throw new Error(error);
    }
};