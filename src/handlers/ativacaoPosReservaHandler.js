const ativarAssinaturaPosReservaFeature = require('../features/ativarAssinaturaPosReserva');
exports.handle = async (event) => {
    const evento = event.Records[0];

    const snsMessageEvent = JSON.parse(evento.Sns.Message);

    const orderId = snsMessageEvent.orderID;
    const acaoHttp = snsMessageEvent.acaoHttp;
    const productId = snsMessageEvent.productId;

    console.warn(`OrderId: ${orderId}; ProductId: ${productId}; AcaoHttp: ${acaoHttp}`);

    if (acaoHttp.toString().toUpperCase() === 'POST') {
        try {
            await ativarAssinaturaPosReservaFeature.ativar(orderId, productId);
        } catch (error) {
            console.error(error);
            throw new Error(error);
        }
    }
};
