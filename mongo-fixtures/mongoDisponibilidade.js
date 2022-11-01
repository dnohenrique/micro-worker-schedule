/* eslint-disable */
db.getSiblingDB('availability').getCollection('BrokerCredentials').insert([
    {
        "_id": ObjectId("5d5aafd9fa5651fe2d68dac2"),
        "TimeOut": 25000.0,
        "TypeBroker": 1.0,
        "User": "fc_webservice_teste",
        "UserRdc": "fc_webservice_simulador",
        "UserSignInRdc": "katia.martins@rdcviagens.com",
        "Password": "ferias@2019",
        "PasswordRdc": "Simulador@21",
        "PasswordSignInRdc": "1234",
        "UrlAvailability": "https://ws-rdc.cangooroo.net/ws/Rest/Hotel.svc/Search",
        "UrlSignInRdc": "http://homolog.api.novosite.rdc-ferias.com.br/api/SignIn",
        "UrlAvailabilityRdc": "http://hmgreserva.rdcferias.com.br/api",
        "UrlDetails": "http://ws-rdc.cangooroo.net/ws/Rest/Hotel.svc/Search",
        "UrlAutoComplete": "http://commons.t4w.com.br/new/api/v1/mapping/autocomplete/all/{0}/managerId/271/token/1e11e5e9-9828-4718-8ba4-b61c7817e0b8/400",
        "UrlCommon": "http://commons.t4w.com.br/new/api/v1/mapping/hotel/@idHotel@/token/1e11e5e9-9828-4718-8ba4-b61c7817e0b8?managerId=271",
        "Active": 1.0,
        "Instability": true,
        "DayUpdateGoogle": 30
    }
])
