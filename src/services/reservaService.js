const axios = require('axios');
const config = require('../settings/config');

const serviceBookingUrl = config.variables.serviceBookingUrl;
const serviceAereoUrl = config.variables.serviceAereoUrl;

exports.obterCpfAssinante = async (orderId, productId) => {
    try {
        switch (productId) {
            case 2:
                return await obterCpfReservaAereo(orderId);
            default:
                return await obterCpfReservaHotel(orderId);
        }
    } catch (error) {
        console.error(`Erro ao consultar reserva: ${orderId} produtoId: ${productId}`);
        throw new Error(error);
    }
};

const obterCpfReservaHotel = async (orderId) => {
    const request = { bookingDetailFilter: { orderId } };
    const url = `${serviceBookingUrl}/v1/hotel/Booking/searchAll`;
    const retorno = await axios.post(url, request);
    return retorno.data.result.booking[0].bookingFilter.userId;
};

const obterCpfReservaAereo = async (orderId) => {
    const url = `${serviceAereoUrl}/v1/Aereo/Booking/${orderId}`;
    const retorno = await axios.get(url);
    return retorno.data.bookingRequest.userId;
};
