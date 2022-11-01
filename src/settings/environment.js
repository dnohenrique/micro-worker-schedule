const env = process.env.NODE_ENV || 'development';

const params = {
    development: {
        serviceAssinaturaUrl: 'http://microservice-assinatura/assinatura',
        serviceBookingUrl: 'http://microservice-reserva-hospedagens',
        serviceAereoUrl: 'http://microservice-reserva-aereo'
    },
    staging: {
        serviceAssinaturaUrl: 'http://microservice-assinatura-staging.platform.ferias.in/assinatura',
        serviceBookingUrl: 'http://microservice-reserva-hospedagens-staging.platform.ferias.in',
        serviceAereoUrl: 'http://microservice-reserva-aereo-staging.platform.ferias.in',
    },
    production: {
        serviceBookingUrl: 'http://microservice-reserva-hospedagens-production.platform.ferias.in',
        serviceAssinaturaUrl: 'http://microservice-assinatura-production.platform.ferias.in/assinatura',
        serviceAereoUrl: 'http://microservice-reserva-aereo-production.platform.ferias.in',
    },
};

module.exports = params[env];
