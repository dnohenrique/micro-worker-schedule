/* eslint-disable */
db.getSiblingDB('financeiro').getCollection('movimento_reserva').insert([
    {
        "_id": ObjectId("5f7cb0ec09019e81a051bb1a"),
        "id": UUID("360efe54-dd39-45bc-abae-536c25e60d0f"),
        "pedido": "CA1201707201408F01",
        "data": ISODate("2020-08-11T13:05:40.102Z"),
        "tipo": "Original",
        "checkIn": ISODate("2020-12-15T00:00:00.000Z"),
        "checkOut": ISODate("2020-12-19T00:00:00.000Z"),
        "diarias": 4,
        "produto": "Hotel",
        "prestador": "Cangooroo",
        "fatura": "",
        "status": {
            "pedido": 0,
            "conciliacao": 0
        },
        "assinatura": {
            "id": "58175853-2e0c-4d37-839e-f0c5b900d5f2",
            "cpf": "64949575015",
            "assinante": "Danilo Henrique da Silva Souza"
        },
        "valores": {
            "pedido": NumberDecimal("1080.00"),
            "plano": NumberDecimal("1080.00"),
            "extra": NumberDecimal("0"),
            "multa": NumberDecimal("0")
        },
        "reservas": [
            {
                "_id": "RS123401",
                "numero": "3276.2971",
                "valor": NumberDecimal("1080.00"),
                "valorDiaria": NumberDecimal("270.00"),
                "valorTotalDiarias": NumberDecimal("1080.00"),
                "status": 0,
                "fornecedor": {
                    "razao": "RDC Viagens Ltda",
                    "cnpj": "08857016001107",
                    "alias": "europlusviagenseturismoltda"
                },
                "hospedes": [
                    {
                        "nome": "Danilo Henrique da Silva Souza",
                        "documento": "CPF",
                        "numeroDocumento": "81738839044",
                        "titular": true,
                        "crianca": false
                    },
                    {
                        "nome": "Adriana Diniz",
                        "documento": "CPF",
                        "numeroDocumento": "52698497041",
                        "titular": false,
                        "crianca": false
                    }
                ]
            }
        ],
        "metadata": {
            "ativo": true,
            "dataCriacao": ISODate("2020-08-11T13:05:40.102Z"),
            "dataAtualizacao": null,
            "dataDelecao": null
        }
    },
    {
        "_id": ObjectId("5f7cb0ec09019e81a051bb1b"),
        "id": UUID("4270d49e-da08-4745-922f-453eb6b51cff"),
        "pedido": "CA1201707201408F02",
        "data": ISODate("2020-10-14T18:03:47.224Z"),
        "tipo": "Original",
        "checkIn": ISODate("2020-11-12T18:03:47.224Z"),
        "checkOut": ISODate("2020-11-20T00:00:00.000Z"),
        "diarias": 4,
        "produto": "Hotel",
        "prestador": "Cangooroo",
        "fatura": "",
        "status": {
            "pedido": 0,
            "conciliacao": 3
        },
        "assinatura": {
            "_id": "795144eb-9e93-48ca-b5c5-a21ff62bf0ed",
            "cpf": "95020988030",
            "assinante": "Josicreito Pereira"
        },
        "valores": {
            "pedido": NumberDecimal("1080.00"),
            "plano": NumberDecimal("1080.00"),
            "extra": NumberDecimal("0"),
            "multa": NumberDecimal("0")
        },
        "reservas": [
            {
                "_id": "RS123401",
                "numero": "654321-654301",
                "valor": NumberDecimal("1080.00"),
                "valorDiaria": NumberDecimal("270.00"),
                "valorTotalDiarias": NumberDecimal("1080.00"),
                "status": 1,
                "fornecedor": {
                    "razao": "Férias & Co. Ltda",
                    "cnpj": "08857016001107",
                    "alias": "europlusviagenseturismoltda"
                },
                "hospedes": [
                    {
                        "nome": "Fabiano Soares de Leme",
                        "documento": "CPF",
                        "numeroDocumento": "81738839044",
                        "titular": true,
                        "crianca": false
                    },
                    {
                        "nome": "Adriana Diniz",
                        "documento": "CPF",
                        "numeroDocumento": "52698497041",
                        "titular": false,
                        "crianca": false
                    }
                ]
            }
        ],
        "metadata": {
            "ativo": true,
            "dataCriacao": ISODate("2020-08-11T13:05:40.102Z"),
            "dataAtualizacao": null,
            "dataDelecao": null
        }
    },
    {
        "_id": ObjectId("5f7cb0ec09019e81a051bb1c"),
        "id": UUID("291bbf64-50c0-4c51-8882-3772de4ffde5"),
        "pedido": "CA1201707201408F03",
        "data": ISODate("2020-10-03T18:03:47.224Z"),
        "tipo": "Original",
        "checkIn": ISODate("2020-10-14T18:03:47.224Z"),
        "checkOut": ISODate("2020-10-17T18:03:47.224Z"),
        "diarias": 4,
        "produto": "Hotel",
        "prestador": "Cangooroo",
        "fatura": "",
        "status": {
            "pedido": 0,
            "conciliacao": 0
        },
        "assinatura": {
            "_id": "795144eb-9e93-48ca-b5c5-a21ff62bf0ed",
            "cpf": "55769414030",
            "assinante": "Lourivaldo da Silva"
        },
        "valores": {
            "pedido": NumberDecimal("1234.56"),
            "plano": NumberDecimal("1234.56"),
            "extra": NumberDecimal("345"),
            "multa": NumberDecimal("21")
        },
        "reservas": [
            {
                "_id": "RS123401",
                "numero": "123456-654301",
                "valor": NumberDecimal("1080.00"),
                "valorDiaria": NumberDecimal("137.00"),
                "valorTotalDiarias": NumberDecimal("1234.00"),
                "status": 0,
                "fornecedor": {
                    "razao": "Viajante Ltda",
                    "cnpj": "08857016001107",
                    "alias": "mochileiroviajante"
                },
                "hospedes": [
                    {
                        "nome": "Fabiano Soares de Leme",
                        "documento": "CPF",
                        "numeroDocumento": "81738839044",
                        "titular": true,
                        "crianca": false
                    },
                    {
                        "nome": "Adriana Diniz",
                        "documento": "CPF",
                        "numeroDocumento": "52698497041",
                        "titular": false,
                        "crianca": false
                    }
                ]
            }
        ],
        "metadata": {
            "ativo": true,
            "dataCriacao": ISODate("2020-08-11T13:05:40.102Z"),
            "dataAtualizacao": null,
            "dataDelecao": null
        }
    },
    {
        "_id": ObjectId("5f7cb0ec09019e81a051bb1d"),
        "id": UUID("40538f3a-6fd0-462d-a5e4-263d3b4612fe"),
        "pedido": "CA1201707201408F04",
        "data": ISODate("2020-09-25T18:03:47.224Z"),
        "tipo": "Original",
        "checkIn": ISODate("2020-10-01T18:03:47.224Z"),
        "checkOut": ISODate("2020-10-25T00:00:00.000Z"),
        "diarias": 4,
        "produto": "Hotel",
        "prestador": "Cangooroo",
        "fatura": "",
        "status": {
            "pedido": 0,
            "conciliacao": 2
        },
        "assinatura": {
            "_id": "795144eb-9e93-48ca-b5c5-a21ff62bf0ed",
            "cpf": "36656916058",
            "assinante": "Crodosvaldo Moreira"
        },
        "valores": {
            "pedido": NumberDecimal("1080.00"),
            "plano": NumberDecimal("1080.00"),
            "extra": NumberDecimal("0"),
            "multa": NumberDecimal("0")
        },
        "reservas": [
            {
                "_id": "RS123401",
                "numero": "123456-654301",
                "valor": NumberDecimal("1080.00"),
                "valorDiaria": NumberDecimal("270.00"),
                "valorTotalDiarias": NumberDecimal("1080.00"),
                "status": 2,
                "fornecedor": {
                    "razao": "Europlus Viagens e Turismo Ltda",
                    "cnpj": "08857016001107",
                    "alias": "europlusviagenseturismoltda"
                },
                "hospedes": [
                    {
                        "nome": "Fabiano Soares de Leme",
                        "documento": "CPF",
                        "numeroDocumento": "81738839044",
                        "titular": true,
                        "crianca": false
                    },
                    {
                        "nome": "Adriana Diniz",
                        "documento": "CPF",
                        "numeroDocumento": "52698497041",
                        "titular": false,
                        "crianca": false
                    }
                ]
            }
        ],
        "metadata": {
            "ativo": true,
            "dataCriacao": ISODate("2020-08-11T13:05:40.102Z"),
            "dataAtualizacao": null,
            "dataDelecao": null
        }
    },
    {
        "_id": ObjectId("5f7cb0ec09019e81a051bb1e"),
        "id": UUID("3cdceb44-1c1d-45e1-bb93-a11a99715ce5"),
        "pedido": "CA1201707201408F05",
        "data": ISODate("2020-08-11T13:05:40.102Z"),
        "tipo": "Original",
        "checkIn": ISODate("2020-12-15T00:00:00.000Z"),
        "checkOut": ISODate("2020-12-19T00:00:00.000Z"),
        "diarias": 4,
        "produto": "Hotel",
        "prestador": "Cangooroo",
        "fatura": "",
        "status": {
            "pedido": 0,
            "conciliacao": 3
        },
        "assinatura": {
            "_id": "795144eb-9e93-48ca-b5c5-a21ff62bf0ed",
            "cpf": "34483011081",
            "assinante": "Jucicrede dos Santos"
        },
        "valores": {
            "pedido": NumberDecimal("1080.00"),
            "plano": NumberDecimal("1080.00"),
            "extra": NumberDecimal("0"),
            "multa": NumberDecimal("0")
        },
        "reservas": [
            {
                "_id": "RS123401",
                "numero": "123456-654301",
                "valor": NumberDecimal("1080.00"),
                "valorDiaria": NumberDecimal("270.00"),
                "valorTotalDiarias": NumberDecimal("1080.00"),
                "status": 1,
                "fornecedor": {
                    "razao": "Europlus Viagens e Turismo Ltda",
                    "cnpj": "08857016001107",
                    "alias": "europlusviagenseturismoltda"
                },
                "hospedes": [
                    {
                        "nome": "Fabiano Soares de Leme",
                        "documento": "CPF",
                        "numeroDocumento": "81738839044",
                        "titular": true,
                        "crianca": false
                    },
                    {
                        "nome": "Adriana Diniz",
                        "documento": "CPF",
                        "numeroDocumento": "52698497041",
                        "titular": false,
                        "crianca": false
                    }
                ]
            }
        ],
        "metadata": {
            "ativo": true,
            "dataCriacao": ISODate("2020-08-11T13:05:40.102Z"),
            "dataAtualizacao": null,
            "dataDelecao": null
        }
    },
    {
        "_id": ObjectId("5f7cb0ec09019e81a051bb1f"),
        "id": UUID("abb37f22-0d6d-41e6-9b3e-2018c095dc0e"),
        "pedido": "CA1201707201408F06",
        "data": ISODate("2020-08-11T13:05:40.102Z"),
        "tipo": "Original",
        "checkIn": ISODate("2020-12-15T00:00:00.000Z"),
        "checkOut": ISODate("2020-12-19T00:00:00.000Z"),
        "diarias": 4,
        "produto": "Hotel",
        "prestador": "Cangooroo",
        "fatura": "",
        "status": {
            "pedido": 1,
            "conciliacao": 1
        },
        "assinatura": {
            "_id": "795144eb-9e93-48ca-b5c5-a21ff62bf0ed",
            "cpf": "35107366058",
            "assinante": "Larosnideo Marquinhos"
        },
        "valores": {
            "pedido": NumberDecimal("1080.00"),
            "plano": NumberDecimal("1080.00"),
            "extra": NumberDecimal("0"),
            "multa": NumberDecimal("0")
        },
        "reservas": [
            {
                "_id": "RS123401",
                "numero": "123456-654301",
                "valor": NumberDecimal("1080.00"),
                "valorDiaria": NumberDecimal("270.00"),
                "valorTotalDiarias": NumberDecimal("1080.00"),
                "status": 2,
                "fornecedor": {
                    "razao": "Europlus Viagens e Turismo Ltda",
                    "cnpj": "08857016001107",
                    "alias": "europlusviagenseturismoltda"
                },
                "hospedes": [
                    {
                        "nome": "Fabiano Soares de Leme",
                        "documento": "CPF",
                        "numeroDocumento": "81738839044",
                        "titular": true,
                        "crianca": false
                    },
                    {
                        "nome": "Adriana Diniz",
                        "documento": "CPF",
                        "numeroDocumento": "52698497041",
                        "titular": false,
                        "crianca": false
                    }
                ]
            }
        ],
        "metadata": {
            "ativo": true,
            "dataCriacao": ISODate("2020-08-11T13:05:40.102Z"),
            "dataAtualizacao": null,
            "dataDelecao": null
        }
    },
    {
        "_id": ObjectId("5f7cb0ec09019e81a051bb20"),
        "id": UUID("2e0ca76e-d6b4-43f2-a505-4bc7d1e32b9b"),
        "pedido": "CA1201707201408F07",
        "data": ISODate("2020-08-11T13:05:40.102Z"),
        "tipo": "Multa de Cancelamento",
        "checkIn": ISODate("2020-12-15T00:00:00.000Z"),
        "checkOut": ISODate("2020-12-19T00:00:00.000Z"),
        "diarias": 4,
        "produto": "Hotel",
        "prestador": "Cangooroo",
        "fatura": "",
        "status": {
            "pedido": 2,
            "conciliacao": 0
        },
        "assinatura": {
            "_id": "795144eb-9e93-48ca-b5c5-a21ff62bf0ed",
            "cpf": "58177850059",
            "assinante": "Fabiano Soares de Leme"
        },
        "valores": {
            "pedido": NumberDecimal("1080.00"),
            "plano": NumberDecimal("1080.00"),
            "extra": NumberDecimal("0"),
            "multa": NumberDecimal("0")
        },
        "reservas": [
            {
                "_id": "RS123401",
                "numero": "123456-654301",
                "valor": NumberDecimal("1080.00"),
                "valorDiaria": NumberDecimal("270.00"),
                "valorTotalDiarias": NumberDecimal("1080.00"),
                "status": 0,
                "fornecedor": {
                    "razao": "Europlus Viagens e Turismo Ltda",
                    "cnpj": "08857016001107",
                    "alias": "europlusviagenseturismoltda"
                },
                "hospedes": [
                    {
                        "nome": "Fabiano Soares de Leme",
                        "documento": "CPF",
                        "numeroDocumento": "81738839044",
                        "titular": true,
                        "crianca": false
                    },
                    {
                        "nome": "Adriana Diniz",
                        "documento": "CPF",
                        "numeroDocumento": "52698497041",
                        "titular": false,
                        "crianca": false
                    }
                ]
            }
        ],
        "metadata": {
            "ativo": true,
            "dataCriacao": ISODate("2020-08-11T13:05:40.102Z"),
            "dataAtualizacao": null,
            "dataDelecao": null
        }
    },
    {
        "_id": ObjectId("5f7cb0ec09019e81a051bb21"),
        "id": UUID("19076181-88ca-4d99-a57b-bf01bea73788"),
        "pedido": "CA1201707201408F08",
        "data": ISODate("2020-08-11T13:05:40.102Z"),
        "tipo": "Multa de Cancelamento",
        "checkIn": ISODate("2020-12-15T00:00:00.000Z"),
        "checkOut": ISODate("2020-12-19T00:00:00.000Z"),
        "diarias": 4,
        "produto": "Hotel",
        "prestador": "Cangooroo",
        "fatura": "",
        "status": {
            "pedido": 2,
            "conciliacao": 3
        },
        "assinatura": {
            "_id": "795144eb-9e93-48ca-b5c5-a21ff62bf0ed",
            "cpf": "58177850059",
            "assinante": "Fabiano Soares de Leme"
        },
        "valores": {
            "pedido": NumberDecimal("1080.00"),
            "plano": NumberDecimal("1080.00"),
            "extra": NumberDecimal("0"),
            "multa": NumberDecimal("0")
        },
        "reservas": [
            {
                "_id": "RS123401",
                "numero": "123456-654301",
                "valor": NumberDecimal("1080.00"),
                "valorDiaria": NumberDecimal("270.00"),
                "valorTotalDiarias": NumberDecimal("1080.00"),
                "status": 1,
                "fornecedor": {
                    "razao": "Europlus Viagens e Turismo Ltda",
                    "cnpj": "08857016001107",
                    "alias": "europlusviagenseturismoltda"
                },
                "hospedes": [
                    {
                        "nome": "Fabiano Soares de Leme",
                        "documento": "CPF",
                        "numeroDocumento": "81738839044",
                        "titular": true,
                        "crianca": false
                    },
                    {
                        "nome": "Adriana Diniz",
                        "documento": "CPF",
                        "numeroDocumento": "52698497041",
                        "titular": false,
                        "crianca": false
                    }
                ]
            }
        ],
        "metadata": {
            "ativo": true,
            "dataCriacao": ISODate("2020-08-11T13:05:40.102Z"),
            "dataAtualizacao": null,
            "dataDelecao": null
        }
    },
    {
        "_id": ObjectId("5f7cb0ec09019e81a051bb22"),
        "id": UUID("ecf921d3-eed3-42bd-a242-c62dab52fd86"),
        "pedido": "CA1201707201408F09",
        "data": ISODate("2020-08-11T13:05:40.102Z"),
        "tipo": "Multa de Cancelamento",
        "checkIn": ISODate("2020-12-15T00:00:00.000Z"),
        "checkOut": ISODate("2020-12-19T00:00:00.000Z"),
        "diarias": 4,
        "produto": "Hotel",
        "prestador": "Cangooroo",
        "fatura": "",
        "status": {
            "pedido": 2,
            "conciliacao": 0
        },
        "assinatura": {
            "_id": "795144eb-9e93-48ca-b5c5-a21ff62bf0ed",
            "cpf": "58177850059",
            "assinante": "Fabiano Soares de Leme"
        },
        "valores": {
            "pedido": NumberDecimal("1080.00"),
            "plano": NumberDecimal("1080.00"),
            "extra": NumberDecimal("0"),
            "multa": NumberDecimal("0")
        },
        "reservas": [
            {
                "_id": "RS123401",
                "numero": "123456-654301",
                "valor": NumberDecimal("1080.00"),
                "valorDiaria": NumberDecimal("270.00"),
                "valorTotalDiarias": NumberDecimal("1080.00"),
                "status": 0,
                "fornecedor": {
                    "razao": "Europlus Viagens e Turismo Ltda",
                    "cnpj": "08857016001107",
                    "alias": "europlusviagenseturismoltda"
                },
                "hospedes": [
                    {
                        "nome": "Fabiano Soares de Leme",
                        "documento": "CPF",
                        "numeroDocumento": "81738839044",
                        "titular": true,
                        "crianca": false
                    },
                    {
                        "nome": "Adriana Diniz",
                        "documento": "CPF",
                        "numeroDocumento": "52698497041",
                        "titular": false,
                        "crianca": false
                    }
                ]
            }
        ],
        "metadata": {
            "ativo": true,
            "dataCriacao": ISODate("2020-08-11T13:05:40.102Z"),
            "dataAtualizacao": null,
            "dataDelecao": null
        }
    },
    {
        "_id": ObjectId("5f7cb0ec09019e81a051bb23"),
        "id": UUID("4017c133-dde9-4d8f-9039-71cdb7588591"),
        "pedido": "CA1201707201408F10",
        "data": ISODate("2020-08-11T13:05:40.102Z"),
        "tipo": "Multa de Cancelamento",
        "checkIn": ISODate("2020-12-15T00:00:00.000Z"),
        "checkOut": ISODate("2020-12-19T00:00:00.000Z"),
        "diarias": 4,
        "produto": "Hotel",
        "prestador": "Cangooroo",
        "fatura": "",
        "status": {
            "pedido": 2,
            "conciliacao": 1
        },
        "assinatura": {
            "_id": "795144eb-9e93-48ca-b5c5-a21ff62bf0ed",
            "cpf": "58177850059",
            "assinante": "Fabiano Soares de Leme"
        },
        "valores": {
            "pedido": NumberDecimal("1080.00"),
            "plano": NumberDecimal("1080.00"),
            "extra": NumberDecimal("0"),
            "multa": NumberDecimal("0")
        },
        "reservas": [
            {
                "_id": "RS123401",
                "numero": "123456-654301",
                "valor": NumberDecimal("1080.00"),
                "valorDiaria": NumberDecimal("270.00"),
                "valorTotalDiarias": NumberDecimal("1080.00"),
                "status": 2,
                "fornecedor": {
                    "razao": "Europlus Viagens e Turismo Ltda",
                    "cnpj": "08857016001107",
                    "alias": "europlusviagenseturismoltda"
                },
                "hospedes": [
                    {
                        "nome": "Fabiano Soares de Leme",
                        "documento": "CPF",
                        "numeroDocumento": "81738839044",
                        "titular": true,
                        "crianca": false
                    },
                    {
                        "nome": "Adriana Diniz",
                        "documento": "CPF",
                        "numeroDocumento": "52698497041",
                        "titular": false,
                        "crianca": false
                    }
                ]
            }
        ],
        "metadata": {
            "ativo": true,
            "dataCriacao": ISODate("2020-08-11T13:05:40.102Z"),
            "dataAtualizacao": null,
            "dataDelecao": null
        }
    },
    {
        "_id": ObjectId("5f7cb0ec09019e81a051bb24"),
        "id": UUID("a755cc7b-c407-49bd-9c39-6be9a9ef7ddb"),
        "pedido": "CA1201707201408F11",
        "data": ISODate("2020-08-11T13:05:40.102Z"),
        "tipo": "Multa de Cancelamento",
        "checkIn": ISODate("2020-12-15T00:00:00.000Z"),
        "checkOut": ISODate("2020-12-19T00:00:00.000Z"),
        "diarias": 4,
        "produto": "Hotel",
        "prestador": "Cangooroo",
        "fatura": "",
        "status": {
            "pedido": 2,
            "conciliacao": 3
        },
        "assinatura": {
            "_id": "795144eb-9e93-48ca-b5c5-a21ff62bf0ed",
            "cpf": "58177850059",
            "assinante": "Fabiano Soares de Leme"
        },
        "valores": {
            "pedido": NumberDecimal("1080.00"),
            "plano": NumberDecimal("1080.00"),
            "extra": NumberDecimal("0"),
            "multa": NumberDecimal("0")
        },
        "reservas": [
            {
                "_id": "RS123401",
                "numero": "123456-654301",
                "valor": NumberDecimal("1080.00"),
                "valorDiaria": NumberDecimal("270.00"),
                "valorTotalDiarias": NumberDecimal("1080.00"),
                "status": 1,
                "fornecedor": {
                    "razao": "Europlus Viagens e Turismo Ltda",
                    "cnpj": "08857016001107",
                    "alias": "europlusviagenseturismoltda"
                },
                "hospedes": [
                    {
                        "nome": "Fabiano Soares de Leme",
                        "documento": "CPF",
                        "numeroDocumento": "81738839044",
                        "titular": true,
                        "crianca": false
                    },
                    {
                        "nome": "Adriana Diniz",
                        "documento": "CPF",
                        "numeroDocumento": "52698497041",
                        "titular": false,
                        "crianca": false
                    }
                ]
            }
        ],
        "metadata": {
            "ativo": true,
            "dataCriacao": ISODate("2020-08-11T13:05:40.102Z"),
            "dataAtualizacao": null,
            "dataDelecao": null
        }
    },
    {
        "_id": ObjectId("5f7cb0ec09019e81a051bb25"),
        "id": UUID("9e781c25-8493-4ee5-8d1f-154b3e288535"),
        "pedido": "CA1201707201408F12",
        "data": ISODate("2020-08-11T13:05:40.102Z"),
        "tipo": "Original",
        "checkIn": ISODate("2020-12-15T00:00:00.000Z"),
        "checkOut": ISODate("2020-12-19T00:00:00.000Z"),
        "diarias": 4,
        "produto": "Hotel",
        "prestador": "Cangooroo",
        "fatura": "",
        "status": {
            "pedido": 1,
            "conciliacao": 3
        },
        "assinatura": {
            "_id": "795144eb-9e93-48ca-b5c5-a21ff62bf0ed",
            "cpf": "58177850059",
            "assinante": "Fabiano Soares de Leme"
        },
        "valores": {
            "pedido": NumberDecimal("1080.00"),
            "plano": NumberDecimal("1080.00"),
            "extra": NumberDecimal("0"),
            "multa": NumberDecimal("0")
        },
        "reservas": [
            {
                "_id": "RS123401",
                "numero": "123456-654301",
                "valor": NumberDecimal("1080.00"),
                "valorDiaria": NumberDecimal("270.00"),
                "valorTotalDiarias": NumberDecimal("1080.00"),
                "status": 1,
                "fornecedor": {
                    "razao": "Europlus Viagens e Turismo Ltda",
                    "cnpj": "08857016001107",
                    "alias": "europlusviagenseturismoltda"
                },
                "hospedes": [
                    {
                        "nome": "Fabiano Soares de Leme",
                        "documento": "CPF",
                        "numeroDocumento": "81738839044",
                        "titular": true,
                        "crianca": false
                    },
                    {
                        "nome": "Adriana Diniz",
                        "documento": "CPF",
                        "numeroDocumento": "52698497041",
                        "titular": false,
                        "crianca": false
                    }
                ]
            }
        ],
        "metadata": {
            "ativo": true,
            "dataCriacao": ISODate("2020-08-11T13:05:40.102Z"),
            "dataAtualizacao": null,
            "dataDelecao": null
        }
    },
    {
        "_id": ObjectId("5f7cb0ec09019e81a051bb26"),
        "id": UUID("aed6e716-d3b6-4ae8-863f-e5a70d7a5898"),
        "pedido": "CA1201707201408F13",
        "data": ISODate("2020-08-11T13:05:40.102Z"),
        "tipo": "Original",
        "checkIn": ISODate("2020-12-15T00:00:00.000Z"),
        "checkOut": ISODate("2020-12-19T00:00:00.000Z"),
        "diarias": 4,
        "produto": "Hotel",
        "prestador": "Cangooroo",
        "fatura": "",
        "status": {
            "pedido": 2,
            "conciliacao": 3
        },
        "assinatura": {
            "_id": "795144eb-9e93-48ca-b5c5-a21ff62bf0ed",
            "cpf": "58177850059",
            "assinante": "Fabiano Soares de Leme"
        },
        "valores": {
            "pedido": NumberDecimal("1080.00"),
            "plano": NumberDecimal("1080.00"),
            "extra": NumberDecimal("0"),
            "multa": NumberDecimal("0")
        },
        "reservas": [
            {
                "_id": "RS123401",
                "numero": "123456-654301",
                "valor": NumberDecimal("1080.00"),
                "valorDiaria": NumberDecimal("270.00"),
                "valorTotalDiarias": NumberDecimal("1080.00"),
                "status": 1,
                "fornecedor": {
                    "razao": "Europlus Viagens e Turismo Ltda",
                    "cnpj": "08857016001107",
                    "alias": "europlusviagenseturismoltda"
                },
                "hospedes": [
                    {
                        "nome": "Fabiano Soares de Leme",
                        "documento": "CPF",
                        "numeroDocumento": "81738839044",
                        "titular": true,
                        "crianca": false
                    },
                    {
                        "nome": "Adriana Diniz",
                        "documento": "CPF",
                        "numeroDocumento": "52698497041",
                        "titular": false,
                        "crianca": false
                    }
                ]
            }
        ],
        "metadata": {
            "ativo": true,
            "dataCriacao": ISODate("2020-08-11T13:05:40.102Z"),
            "dataAtualizacao": null,
            "dataDelecao": null
        }
    },
    {
        "_id": ObjectId("5f7cb0ec09019e81a051bb27"),
        "id": UUID("880c23da-9d2e-411c-b8b6-43840992caf3"),
        "pedido": "CA1201707201408F14",
        "data": ISODate("2020-08-11T13:05:40.102Z"),
        "tipo": "Multa de Cancelamento",
        "checkIn": ISODate("2020-12-15T00:00:00.000Z"),
        "checkOut": ISODate("2020-12-19T00:00:00.000Z"),
        "diarias": 4,
        "produto": "Hotel",
        "prestador": "Cangooroo",
        "fatura": "",
        "status": {
            "pedido": 2,
            "conciliacao": 0
        },
        "assinatura": {
            "_id": "795144eb-9e93-48ca-b5c5-a21ff62bf0ed",
            "cpf": "58177850059",
            "assinante": "Fabiano Soares de Leme"
        },
        "valores": {
            "pedido": NumberDecimal("1080.00"),
            "plano": NumberDecimal("1080.00"),
            "extra": NumberDecimal("0"),
            "multa": NumberDecimal("0")
        },
        "reservas": [
            {
                "_id": "RS123401",
                "numero": "123456-654301",
                "valor": NumberDecimal("1080.00"),
                "valorDiaria": NumberDecimal("270.00"),
                "valorTotalDiarias": NumberDecimal("1080.00"),
                "status": 0,
                "fornecedor": {
                    "razao": "Europlus Viagens e Turismo Ltda",
                    "cnpj": "08857016001107",
                    "alias": "europlusviagenseturismoltda"
                },
                "hospedes": [
                    {
                        "nome": "Fabiano Soares de Leme",
                        "documento": "CPF",
                        "numeroDocumento": "81738839044",
                        "titular": true,
                        "crianca": false
                    },
                    {
                        "nome": "Adriana Diniz",
                        "documento": "CPF",
                        "numeroDocumento": "52698497041",
                        "titular": false,
                        "crianca": false
                    }
                ]
            }
        ],
        "metadata": {
            "ativo": true,
            "dataCriacao": ISODate("2020-08-11T13:05:40.102Z"),
            "dataAtualizacao": null,
            "dataDelecao": null
        }
    },
    {
        "_id": ObjectId("5f7cb0ec09019e81a051bb28"),
        "id": UUID("dbe70f95-e2d7-462b-8bfb-57426da7c0f2"),
        "pedido": "CA1201707201408F15",
        "data": ISODate("2020-08-11T13:05:40.102Z"),
        "tipo": "Multa de Cancelamento",
        "checkIn": ISODate("2020-12-15T00:00:00.000Z"),
        "checkOut": ISODate("2020-12-19T00:00:00.000Z"),
        "diarias": 4,
        "produto": "Hotel",
        "prestador": "Cangooroo",
        "fatura": "",
        "status": {
            "pedido": 2,
            "conciliacao": 3
        },
        "assinatura": {
            "_id": "795144eb-9e93-48ca-b5c5-a21ff62bf0ed",
            "cpf": "58177850059",
            "assinante": "Fabiano Soares de Leme"
        },
        "valores": {
            "pedido": NumberDecimal("1080.00"),
            "plano": NumberDecimal("1080.00"),
            "extra": NumberDecimal("0"),
            "multa": NumberDecimal("0")
        },
        "reservas": [
            {
                "_id": "RS123401",
                "numero": "123456-654301",
                "valor": NumberDecimal("1080.00"),
                "valorDiaria": NumberDecimal("270.00"),
                "valorTotalDiarias": NumberDecimal("1080.00"),
                "status": 1,
                "fornecedor": {
                    "razao": "Europlus Viagens e Turismo Ltda",
                    "cnpj": "08857016001107",
                    "alias": "europlusviagenseturismoltda"
                },
                "hospedes": [
                    {
                        "nome": "Fabiano Soares de Leme",
                        "documento": "CPF",
                        "numeroDocumento": "81738839044",
                        "titular": true,
                        "crianca": false
                    },
                    {
                        "nome": "Adriana Diniz",
                        "documento": "CPF",
                        "numeroDocumento": "52698497041",
                        "titular": false,
                        "crianca": false
                    }
                ]
            }
        ],
        "metadata": {
            "ativo": true,
            "dataCriacao": ISODate("2020-08-11T13:05:40.102Z"),
            "dataAtualizacao": null,
            "dataDelecao": null
        }
    },
    {
        "_id": ObjectId("5f7cb0ec09019e81a051bb29"),
        "id": UUID("bbc7689d-f213-4d94-8a77-f8c46b6233d9"),
        "pedido": "CA1201707201408F16",
        "data": ISODate("2020-08-11T13:05:40.102Z"),
        "tipo": "Multa de Cancelamento",
        "checkIn": ISODate("2020-12-15T00:00:00.000Z"),
        "checkOut": ISODate("2020-12-19T00:00:00.000Z"),
        "diarias": 4,
        "produto": "Hotel",
        "prestador": "Cangooroo",
        "fatura": "",
        "status": {
            "pedido": 2,
            "conciliacao": 0
        },
        "assinatura": {
            "_id": "795144eb-9e93-48ca-b5c5-a21ff62bf0ed",
            "cpf": "58177850059",
            "assinante": "Fabiano Soares de Leme"
        },
        "valores": {
            "pedido": NumberDecimal("1080.00"),
            "plano": NumberDecimal("1080.00"),
            "extra": NumberDecimal("0"),
            "multa": NumberDecimal("0")
        },
        "reservas": [
            {
                "_id": "RS123401",
                "numero": "123456-654301",
                "valor": NumberDecimal("1080.00"),
                "valorDiaria": NumberDecimal("270.00"),
                "valorTotalDiarias": NumberDecimal("1080.00"),
                "status": 0,
                "fornecedor": {
                    "razao": "Europlus Viagens e Turismo Ltda",
                    "cnpj": "08857016001107",
                    "alias": "europlusviagenseturismoltda"
                },
                "hospedes": [
                    {
                        "nome": "Fabiano Soares de Leme",
                        "documento": "CPF",
                        "numeroDocumento": "81738839044",
                        "titular": true,
                        "crianca": false
                    },
                    {
                        "nome": "Adriana Diniz",
                        "documento": "CPF",
                        "numeroDocumento": "52698497041",
                        "titular": false,
                        "crianca": false
                    }
                ]
            }
        ],
        "metadata": {
            "ativo": true,
            "dataCriacao": ISODate("2020-08-11T13:05:40.102Z"),
            "dataAtualizacao": null,
            "dataDelecao": null
        }
    },
    {
        "_id": ObjectId("5f7cb0ec09019e81a051bb2a"),
        "id": UUID("7c013a44-56f8-433a-8821-e78abb8c35b5"),
        "pedido": "CA1201707201408F17",
        "data": ISODate("2020-08-11T13:05:40.102Z"),
        "tipo": "Multa de Cancelamento",
        "checkIn": ISODate("2020-12-15T00:00:00.000Z"),
        "checkOut": ISODate("2020-12-19T00:00:00.000Z"),
        "diarias": 4,
        "produto": "Hotel",
        "prestador": "Cangooroo",
        "fatura": "",
        "status": {
            "pedido": 2,
            "conciliacao": 1
        },
        "assinatura": {
            "_id": "795144eb-9e93-48ca-b5c5-a21ff62bf0ed",
            "cpf": "58177850059",
            "assinante": "Fabiano Soares de Leme"
        },
        "valores": {
            "pedido": NumberDecimal("1080.00"),
            "plano": NumberDecimal("1080.00"),
            "extra": NumberDecimal("0"),
            "multa": NumberDecimal("0")
        },
        "reservas": [
            {
                "_id": "RS123401",
                "numero": "123456-654301",
                "valor": NumberDecimal("1080.00"),
                "valorDiaria": NumberDecimal("270.00"),
                "valorTotalDiarias": NumberDecimal("1080.00"),
                "status": 2,
                "fornecedor": {
                    "razao": "Europlus Viagens e Turismo Ltda",
                    "cnpj": "08857016001107",
                    "alias": "europlusviagenseturismoltda"
                },
                "hospedes": [
                    {
                        "nome": "Fabiano Soares de Leme",
                        "documento": "CPF",
                        "numeroDocumento": "81738839044",
                        "titular": true,
                        "crianca": false
                    },
                    {
                        "nome": "Adriana Diniz",
                        "documento": "CPF",
                        "numeroDocumento": "52698497041",
                        "titular": false,
                        "crianca": false
                    }
                ]
            }
        ],
        "metadata": {
            "ativo": true,
            "dataCriacao": ISODate("2020-08-11T13:05:40.102Z"),
            "dataAtualizacao": null,
            "dataDelecao": null
        }
    },
    {
        "_id": ObjectId("5f7cb2f009019e81a051bb2c"),
        "id": UUID("55f2a40a-4fdf-496f-ad31-dd58f56126af"),
        "pedido": "CA1201707201408F18",
        "data": ISODate("2020-08-11T13:05:40.102Z"),
        "tipo": "Multa de Cancelamento",
        "checkIn": ISODate("2020-12-15T00:00:00.000Z"),
        "checkOut": ISODate("2020-12-19T00:00:00.000Z"),
        "diarias": 4,
        "produto": "Hotel",
        "prestador": "Cangooroo",
        "fatura": "",
        "status": {
            "pedido": 2,
            "conciliacao": 3
        },
        "assinatura": {
            "_id": "795144eb-9e93-48ca-b5c5-a21ff62bf0ed",
            "cpf": "58177850059",
            "assinante": "Fabiano Soares de Leme"
        },
        "valores": {
            "pedido": NumberDecimal("1080.00"),
            "plano": NumberDecimal("1080.00"),
            "extra": NumberDecimal("0"),
            "multa": NumberDecimal("0")
        },
        "reservas": [
            {
                "_id": "RS123401",
                "numero": "123456-654301",
                "valor": NumberDecimal("1080.00"),
                "valorDiaria": NumberDecimal("270.00"),
                "valorTotalDiarias": NumberDecimal("1080.00"),
                "status": 1,
                "fornecedor": {
                    "razao": "Europlus Viagens e Turismo Ltda",
                    "cnpj": "08857016001107",
                    "alias": "europlusviagenseturismoltda"
                },
                "hospedes": [
                    {
                        "nome": "Fabiano Soares de Leme",
                        "documento": "CPF",
                        "numeroDocumento": "81738839044",
                        "titular": true,
                        "crianca": false
                    },
                    {
                        "nome": "Adriana Diniz",
                        "documento": "CPF",
                        "numeroDocumento": "52698497041",
                        "titular": false,
                        "crianca": false
                    }
                ]
            }
        ],
        "metadata": {
            "ativo": true,
            "dataCriacao": ISODate("2020-08-11T13:05:40.102Z"),
            "dataAtualizacao": null,
            "dataDelecao": null
        }
    },
    {
        "id": UUID("ac0930d1-db0f-4074-a86f-ea31fcba3b02"),
        "pedido": "CA202101010300F01",
        "data": ISODate("2021-02-01T03:00:00.000Z"),
        "tipo": "Original",
        "checkIn": ISODate("2021-06-22T03:00:00.000Z"),
        "checkOut": ISODate("2020-06-24T03:00:00.000Z"),
        "diarias": 2,
        "produto": "Hotel",
        "prestador": "Cangooroo",
        "fatura": "",
        "status": {
            "pedido": 0,
            "conciliacao": 0
        },
        "assinatura": {
            "_id": "795144eb-9e93-48ca-b5c5-a21ff62bf0ed",
            "cpf": "58177850059",
            "assinante": "Fabiano Soares de Leme"
        },
        "valores": {
            "pedido": NumberDecimal("500.00"),
            "plano": NumberDecimal("500.00"),
            "extra": NumberDecimal("0"),
            "multa": NumberDecimal("0")
        },
        "reservas": [
            {
                "_id": null,
                "numero": "TVE-1",
                "valor": NumberDecimal("500.00"),
                "valorDiaria": NumberDecimal("250.00"),
                "valorTotalDiarias": NumberDecimal("500.00"),
                "status": 0,
                "fornecedor": {
                    "razao": "Teleporte viagens Expressas Ltda",
                    "cnpj": "70727981000159",
                    "alias": "teleporteviagensexpressasltda"
                },
                "hospedes": [
                    {
                        "nome": "Fabiano Soares de Leme",
                        "documento": "CPF",
                        "numeroDocumento": "81738839044",
                        "titular": true,
                        "crianca": false
                    },
                    {
                        "nome": "Adriana Diniz",
                        "documento": "CPF",
                        "numeroDocumento": "52698497041",
                        "titular": false,
                        "crianca": false
                    }
                ]
            }
        ],
        "metadata": {
            "ativo": true,
            "dataCriacao": ISODate("2021-02-02T03:00:00.000Z"),
            "dataAtualizacao": null,
            "dataDelecao": null
        }
    },
    {
        "id": UUID("e3ce4b52-561d-457f-a2c0-77d66f0b30f8"),
        "pedido": "CA202101010300F02",
        "data": ISODate("2021-02-01T03:00:00.000Z"),
        "tipo": "Original",
        "checkIn": ISODate("2021-03-02T03:00:00.000Z"),
        "checkOut": ISODate("2020-03-03T03:00:00.000Z"),
        "diarias": 1,
        "produto": "Hotel",
        "prestador": "Cangooroo",
        "fatura": "",
        "status": {
            "pedido": 0,
            "conciliacao": 0
        },
        "assinatura": {
            "_id": "795144eb-9e93-48ca-b5c5-a21ff62bf0ed",
            "cpf": "58177850059",
            "assinante": "Fabiano Soares de Leme"
        },
        "valores": {
            "pedido": NumberDecimal("1450.00"),
            "plano": NumberDecimal("1450.00"),
            "extra": NumberDecimal("0"),
            "multa": NumberDecimal("0")
        },
        "reservas": [
            {
                "_id": null,
                "numero": "TVE-2",
                "valor": NumberDecimal("800.00"),
                "valorDiaria": NumberDecimal("800.00"),
                "valorTotalDiarias": NumberDecimal("800.00"),
                "status": 0,
                "fornecedor": {
                    "razao": "Teleporte viagens Expressas Ltda",
                    "cnpj": "70727981000159",
                    "alias": "teleporteviagensexpressasltda"
                },
                "hospedes": [
                    {
                        "nome": "Fabiano Soares de Leme",
                        "documento": "CPF",
                        "numeroDocumento": "81738839044",
                        "titular": true,
                        "crianca": false
                    },
                    {
                        "nome": "Adriana Diniz",
                        "documento": "CPF",
                        "numeroDocumento": "52698497041",
                        "titular": false,
                        "crianca": false
                    }
                ]
            },
            {
                "_id": null,
                "numero": "TVE-3",
                "valor": NumberDecimal("650.00"),
                "valorDiaria": NumberDecimal("650.00"),
                "valorTotalDiarias": NumberDecimal("650.00"),
                "status": 0,
                "fornecedor": {
                    "razao": "Teleporte viagens Expressas Ltda",
                    "cnpj": "70727981000159",
                    "alias": "teleporteviagensexpressasltda"
                },
                "hospedes": [
                    {
                        "nome": "Fabiano Soares de Leme",
                        "documento": "CPF",
                        "numeroDocumento": "81738839044",
                        "titular": true,
                        "crianca": false
                    },
                    {
                        "nome": "Adriana Diniz",
                        "documento": "CPF",
                        "numeroDocumento": "52698497041",
                        "titular": false,
                        "crianca": false
                    }
                ]
            }
        ],
        "metadata": {
            "ativo": true,
            "dataCriacao": ISODate("2021-02-02T03:00:00.000Z"),
            "dataAtualizacao": null,
            "dataDelecao": null
        }
    },
    {
        "id": UUID("74535995-c541-4a58-b8cd-f464ef3d2981"),
        "pedido": "CA202101010300F03",
        "data": ISODate("2021-02-01T03:00:00.000Z"),
        "tipo": "Original",
        "checkIn": ISODate("2021-12-15T03:00:00.000Z"),
        "checkOut": ISODate("2020-12-20T03:00:00.000Z"),
        "diarias": 5,
        "produto": "Hotel",
        "prestador": "Cangooroo",
        "fatura": "",
        "status": {
            "pedido": 0,
            "conciliacao": 0
        },
        "assinatura": {
            "_id": "795144eb-9e93-48ca-b5c5-a21ff62bf0ed",
            "cpf": "58177850059",
            "assinante": "Fabiano Soares de Leme"
        },
        "valores": {
            "pedido": NumberDecimal("1025.00"),
            "plano": NumberDecimal("1025.00"),
            "extra": NumberDecimal("0"),
            "multa": NumberDecimal("0")
        },
        "reservas": [
            {
                "_id": null,
                "numero": "TVE-4",
                "valor": NumberDecimal("1025.00"),
                "valorDiaria": NumberDecimal("205.00"),
                "valorTotalDiarias": NumberDecimal("1025.00"),
                "status": 0,
                "fornecedor": {
                    "razao": "Teleporte viagens Expressas Ltda",
                    "cnpj": "70727981000159",
                    "alias": "teleporteviagensexpressasltda"
                },
                "hospedes": [
                    {
                        "nome": "Fabiano Soares de Leme",
                        "documento": "CPF",
                        "numeroDocumento": "81738839044",
                        "titular": true,
                        "crianca": false
                    },
                    {
                        "nome": "Adriana Diniz",
                        "documento": "CPF",
                        "numeroDocumento": "52698497041",
                        "titular": false,
                        "crianca": false
                    }
                ]
            }
        ],
        "metadata": {
            "ativo": true,
            "dataCriacao": ISODate("2021-02-02T03:00:00.000Z"),
            "dataAtualizacao": null,
            "dataDelecao": null
        }
    },
    {
        "id": UUID("9b3c539d-7a3a-451a-b0e3-4bd6081f7b7a"),
        "pedido": "CA202101010300F04",
        "data": ISODate("2021-02-01T03:00:00.000Z"),
        "tipo": "Original",
        "checkIn": ISODate("2021-06-22T03:00:00.000Z"),
        "checkOut": ISODate("2020-06-24T03:00:00.000Z"),
        "diarias": 2,
        "produto": "Hotel",
        "prestador": "Cangooroo",
        "fatura": "",
        "status": {
            "pedido": 0,
            "conciliacao": 0
        },
        "assinatura": {
            "_id": "795144eb-9e93-48ca-b5c5-a21ff62bf0ed",
            "cpf": "58177850059",
            "assinante": "Fabiano Soares de Leme"
        },
        "valores": {
            "pedido": NumberDecimal("500.00"),
            "plano": NumberDecimal("500.00"),
            "extra": NumberDecimal("0"),
            "multa": NumberDecimal("0")
        },
        "reservas": [
            {
                "_id": null,
                "numero": "AV-1",
                "valor": NumberDecimal("500.00"),
                "valorDiaria": NumberDecimal("250.00"),
                "valorTotalDiarias": NumberDecimal("500.00"),
                "status": 0,
                "fornecedor": {
                    "razao": "Anhanguera Viagens ME",
                    "cnpj": "22676293000164",
                    "alias": "anhangueraviagensme"
                },
                "hospedes": [
                    {
                        "nome": "Fabiano Soares de Leme",
                        "documento": "CPF",
                        "numeroDocumento": "81738839044",
                        "titular": true,
                        "crianca": false
                    },
                    {
                        "nome": "Adriana Diniz",
                        "documento": "CPF",
                        "numeroDocumento": "52698497041",
                        "titular": false,
                        "crianca": false
                    }
                ]
            }
        ],
        "metadata": {
            "ativo": true,
            "dataCriacao": ISODate("2021-02-02T03:00:00.000Z"),
            "dataAtualizacao": null,
            "dataDelecao": null
        }
    },
    {
        "id": UUID("29333be3-b6fb-4ebb-987d-1615bd5caac9"),
        "pedido": "CA202101010300F05",
        "data": ISODate("2021-02-01T03:00:00.000Z"),
        "tipo": "Original",
        "checkIn": ISODate("2021-03-02T03:00:00.000Z"),
        "checkOut": ISODate("2020-03-03T03:00:00.000Z"),
        "diarias": 1,
        "produto": "Hotel",
        "prestador": "Cangooroo",
        "fatura": "",
        "status": {
            "pedido": 0,
            "conciliacao": 0
        },
        "assinatura": {
            "_id": "795144eb-9e93-48ca-b5c5-a21ff62bf0ed",
            "cpf": "58177850059",
            "assinante": "Fabiano Soares de Leme"
        },
        "valores": {
            "pedido": NumberDecimal("1450.00"),
            "plano": NumberDecimal("1450.00"),
            "extra": NumberDecimal("0"),
            "multa": NumberDecimal("0")
        },
        "reservas": [
            {
                "_id": null,
                "numero": "AV-2",
                "valor": NumberDecimal("800.00"),
                "valorDiaria": NumberDecimal("800.00"),
                "valorTotalDiarias": NumberDecimal("800.00"),
                "status": 0,
                "fornecedor": {
                    "razao": "Anhanguera Viagens ME",
                    "cnpj": "22676293000164",
                    "alias": "anhangueraviagensme"
                },
                "hospedes": [
                    {
                        "nome": "Fabiano Soares de Leme",
                        "documento": "CPF",
                        "numeroDocumento": "81738839044",
                        "titular": true,
                        "crianca": false
                    },
                    {
                        "nome": "Adriana Diniz",
                        "documento": "CPF",
                        "numeroDocumento": "52698497041",
                        "titular": false,
                        "crianca": false
                    }
                ]
            },
            {
                "_id": null,
                "numero": "AV-3",
                "valor": NumberDecimal("650.00"),
                "valorDiaria": NumberDecimal("650.00"),
                "valorTotalDiarias": NumberDecimal("650.00"),
                "status": 0,
                "fornecedor": {
                    "razao": "Anhanguera Viagens ME",
                    "cnpj": "22676293000164",
                    "alias": "anhangueraviagensme"
                },
                "hospedes": [
                    {
                        "nome": "Fabiano Soares de Leme",
                        "documento": "CPF",
                        "numeroDocumento": "81738839044",
                        "titular": true,
                        "crianca": false
                    },
                    {
                        "nome": "Adriana Diniz",
                        "documento": "CPF",
                        "numeroDocumento": "52698497041",
                        "titular": false,
                        "crianca": false
                    }
                ]
            }
        ],
        "metadata": {
            "ativo": true,
            "dataCriacao": ISODate("2021-02-02T03:00:00.000Z"),
            "dataAtualizacao": null,
            "dataDelecao": null
        }
    },
    {
        "id": UUID("d4f6a76d-4208-47d2-b202-929a373b24c0"),
        "pedido": "CA202101010300F06",
        "data": ISODate("2021-02-01T03:00:00.000Z"),
        "tipo": "Original",
        "checkIn": ISODate("2021-12-15T03:00:00.000Z"),
        "checkOut": ISODate("2020-12-20T03:00:00.000Z"),
        "diarias": 5,
        "produto": "Hotel",
        "prestador": "Cangooroo",
        "fatura": "",
        "status": {
            "pedido": 0,
            "conciliacao": 0
        },
        "assinatura": {
            "_id": "795144eb-9e93-48ca-b5c5-a21ff62bf0ed",
            "cpf": "58177850059",
            "assinante": "Fabiano Soares de Leme"
        },
        "valores": {
            "pedido": NumberDecimal("1000.00"),
            "plano": NumberDecimal("1000.00"),
            "extra": NumberDecimal("0"),
            "multa": NumberDecimal("0")
        },
        "reservas": [
            {
                "_id": null,
                "numero": "AV-4",
                "valor": NumberDecimal("1000.00"),
                "valorDiaria": NumberDecimal("200.00"),
                "valorTotalDiarias": NumberDecimal("1000.00"),
                "status": 0,
                "fornecedor": {
                    "razao": "Anhanguera Viagens ME",
                    "cnpj": "22676293000164",
                    "alias": "anhangueraviagensme"
                },
                "hospedes": [
                    {
                        "nome": "Fabiano Soares de Leme",
                        "documento": "CPF",
                        "numeroDocumento": "81738839044",
                        "titular": true,
                        "crianca": false
                    },
                    {
                        "nome": "Adriana Diniz",
                        "documento": "CPF",
                        "numeroDocumento": "52698497041",
                        "titular": false,
                        "crianca": false
                    }
                ]
            }
        ],
        "metadata": {
            "ativo": true,
            "dataCriacao": ISODate("2021-02-02T03:00:00.000Z"),
            "dataAtualizacao": null,
            "dataDelecao": null
        }
    }
])


/* eslint-disable */
db.getSiblingDB('financeiro').getCollection('movimento_reserva').insert([
    {
        "_id": ObjectId("5fdcef105740d600015d6690"),
        "id": UUID("09ed3664-1408-49f8-b89a-9901c12b8a5c"),
        "pedido": "FC123456789144956B",
        "tipo": "Plano",
        "data": ISODate("2020-11-13T14:48:12.074Z"),
        "checkIn": ISODate("2020-12-15T00:00:00.000Z"),
        "checkOut": ISODate("2020-12-19T00:00:00.000Z"),
        "diarias": 2,
        "produto": "Aereo",
        "prestador": "Skyteam",
        "fatura": "",
        "status": {
            "pedido": 0,
            "conciliacao": 0
        },
        "assinatura": {
            "_id": "0c219fb6-6325-4b5c-822e-61bffaf0585b",
            "cpf": "64949575015",
            "assinante": "ROGERIO MEDEIROS",
            "periodos": [
                {
                    "periodo": 1,
                    "diariasUsadas": 4
                },
                {
                    "periodo": 2,
                    "diariasUsadas": 2
                }
            ]
        },
        "valores": {
            "pedido": NumberDecimal("320.94"),
            "plano": NumberDecimal("320.94"),
            "extra": NumberDecimal("0"),
            "multa": NumberDecimal("0"),
            "totalDiarias": 0
        },
        "reservas": null,
        "reservasAereas": [
            {
                "localizador": "CTLPQB",
                "valorTotalTarifas": "211.8",
                "valorTotalTaxas": "0",
                "valorTotalTaxaDU": "0",
                "valorTotalReserva": "211.8",
                "status": "Pendente",
                "fornecedor": {
                    "razao": null,
                    "cnpj": null,
                    "alias": "Skyteam"
                },
                "passageiros": [
                    {
                        "nome": "Souza/Danilo",
                        "documento": "CPF",
                        "numeroDocumento": "64949575015",
                        "faixaEtaria": "ADT",
                        "bilhetes": [
                            {
                                "numero": "FC444445555A",
                                "fornecedor": {
                                    "razao": "",
                                    "cnpj": "",
                                    "alias": "ND"
                                },
                                "valor": NumberDecimal("105.9"),
                                "valorDiaria": NumberDecimal("160.47"),
                                "valorTotalDiarias": NumberDecimal("320.94"),
                                "taxaDu": NumberDecimal("0"),
                                "taxaDeEmbarque": NumberDecimal("0"),
                                "outrasTaxas": NumberDecimal("0"),
                                "voos": [
                                    {
                                        "numeroVoo": "1074",
                                        "origem": "CGH",
                                        "destino": "SDU",
                                        "saida": ISODate("2020-04-08T09:45:00.000Z"),
                                        "chegada": ISODate("2020-04-08T10:45:00.000Z"),
                                        "conexao": false,
                                        "classe": "Econômica",
                                        "baseTarifaria": "OPOTBOZ"
                                    }
                                ]
                            },
                            {
                                "numero": "FC444445555A",
                                "fornecedor": {
                                    "razao": "",
                                    "cnpj": "",
                                    "alias": "ND"
                                },
                                "valor": NumberDecimal("105.9"),
                                "valorDiaria": NumberDecimal("160.47"),
                                "valorTotalDiarias": NumberDecimal("320.94"),
                                "taxaDu": NumberDecimal("0"),
                                "taxaDeEmbarque": NumberDecimal("0"),
                                "outrasTaxas": NumberDecimal("0"),
                                "voos": [
                                    {
                                        "numeroVoo": "1001",
                                        "origem": "SDU",
                                        "destino": "CGH",
                                        "saida": ISODate("2020-04-16T09:05:00.000Z"),
                                        "chegada": ISODate("2020-04-16T10:10:00.000Z"),
                                        "conexao": false,
                                        "classe": "Econômica",
                                        "baseTarifaria": "OPOTBOZ"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "metadata": {
            "ativo": true,
            "dataCriacao": ISODate("2020-12-18T18:04:00.225Z"),
            "dataAtualizacao": null,
            "dataDelecao": null
        }
    },
    {
        "_id": ObjectId("5fdcef4f5740d600015d6691"),
        "id": UUID("6b4da8fd-539a-434c-8c0e-924901ed091c"),
        "pedido": "FC123456789144956C",
        "tipo": "Multa de Cancelamento",
        "data": ISODate("2020-12-02T19:47:42.100Z"),
        "checkIn": ISODate("2020-12-15T00:00:00.000Z"),
        "checkOut": ISODate("2020-12-19T00:00:00.000Z"),
        "diarias": 0,
        "produto": "Aereo",
        "prestador": "Skyteam",
        "fatura": "",
        "status": {
            "pedido": 2,
            "conciliacao": 0
        },
        "assinatura": {
            "_id": "295caeae-2684-4373-818a-06f03dc98ced",
            "cpf": "64949575015",
            "assinante": "JOSE VICTOR VILELLA NOVAIS",
            "periodos": [
                {
                    "periodo": 1,
                    "diariasUsadas": 4
                },
                {
                    "periodo": 2,
                    "diariasUsadas": 2
                }
            ]
        },
        "valores": {
            "pedido": NumberDecimal("934.63"),
            "plano": NumberDecimal("0"),
            "extra": NumberDecimal("925.281"),
            "multa": NumberDecimal("873.89"),
            "totalDiarias": 0
        },
        "reservas": null,
        "reservasAereas": [
            {
                "localizador": "TMZY6Z",
                "valorTotalTarifas": "789.8",
                "valorTotalTaxas": "431.58",
                "valorTotalTaxaDU": "168.18",
                "valorTotalReserva": "1389.56",
                "status": "Pendente",
                "fornecedor": {
                    "razao": null,
                    "cnpj": null,
                    "alias": "Skyteam"
                },
                "passageiros": [
                    {
                        "nome": "Ferreiro/Caio",
                        "documento": "CPF",
                        "numeroDocumento": "37373407811",
                        "faixaEtaria": "ADT",
                        "bilhetes": [
                            {
                                "numero": "9690001001288",
                                "fornecedor": {
                                    "razao": "",
                                    "cnpj": "",
                                    "alias": "G3"
                                },
                                "valor": NumberDecimal("348.9"),
                                "valorDiaria": NumberDecimal("216"),
                                "valorTotalDiarias": NumberDecimal("0"),
                                "taxaDu": NumberDecimal("84.09"),
                                "taxaDeEmbarque": NumberDecimal("65.85"),
                                "outrasTaxas": NumberDecimal("149.94"),
                                "voos": [
                                    {
                                        "numeroVoo": "2164",
                                        "origem": "GIG",
                                        "destino": "FOR",
                                        "saida": ISODate("2021-04-23T03:35:00.000Z"),
                                        "chegada": ISODate("2021-04-23T06:50:00.000Z"),
                                        "conexao": false,
                                        "classe": "Econômica",
                                        "baseTarifaria": "OPOTDTY"
                                    }
                                ]
                            },
                            {
                                "numero": "9690001001288",
                                "fornecedor": {
                                    "razao": "",
                                    "cnpj": "",
                                    "alias": "G3"
                                },
                                "valor": NumberDecimal("440.9"),
                                "valorDiaria": NumberDecimal("216"),
                                "valorTotalDiarias": NumberDecimal("0"),
                                "taxaDu": NumberDecimal("84.09"),
                                "taxaDeEmbarque": NumberDecimal("65.85"),
                                "outrasTaxas": NumberDecimal("149.94"),
                                "voos": [
                                    {
                                        "numeroVoo": "2175",
                                        "origem": "FOR",
                                        "destino": "GIG",
                                        "saida": ISODate("2021-04-30T06:20:00.000Z"),
                                        "chegada": ISODate("2021-04-30T09:40:00.000Z"),
                                        "conexao": false,
                                        "classe": "Econômica",
                                        "baseTarifaria": "BPOODTZ"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "metadata": {
            "ativo": true,
            "dataCriacao": ISODate("2020-12-18T18:05:03.567Z"),
            "dataAtualizacao": null,
            "dataDelecao": null
        }
    },
    {
        "_id" : ObjectId("608abc352e2f4f8d66e15ebd"),
        "id" : UUID("f1fe7de5-9d97-43e8-a96e-72d14e39225f"),
        "pedido" : "WO4112904211100B8F",
        "tipo" : "Plano + Extra",
        "data" : ISODate("2021-04-29T14:00:28.315Z"),
        "checkIn" : ISODate("2021-04-29T14:00:28.315Z"),
        "checkOut" : ISODate("2021-04-29T14:00:28.315Z"),
        "diarias" : 3,
        "produto" : "Aereo",
        "prestador" : "Skyteam",
        "fatura" : "",
        "status" : {
            "pedido" : 0,
            "conciliacao" : 0
        },
        "assinatura" : {
            "_id" : "2d6be38d-a96e-4982-a72a-37e19e828005",
            "cpf" : "41129364860",
            "assinante" : "ELIDA RAFAELLY SANTOS LOBATO",
            "periodos" : [ 
                {
                    "periodo" : 1,
                    "diariasUsadas" : 3
                }
            ]
        },
        "valores" : {
            "pedido" : NumberDecimal("1678.64"),
            "plano" : NumberDecimal("840"),
            "extra" : NumberDecimal("838.64"),
            "multa" : NumberDecimal("0"),
            "totalDiarias" : 3,
            "ponto" : NumberDecimal("0"),
            "acumulo" : NumberDecimal("0")
        },
        "reservas" : null,
        "reservasAereas" : [ 
            {
                "localizador" : "IIUIYV",
                "valorTotalTarifas" : "1339.22",
                "valorTotalTaxas" : "205.5",
                "valorTotalTaxaDU" : "133.92",
                "valorTotalReserva" : "1678.64",
                "status" : "Pendente",
                "fornecedor" : {
                    "razao" : null,
                    "cnpj" : null,
                    "alias" : "Skyteam"
                },
                "passageiros" : [ 
                    {
                        "nome" : "LOBATO/ÉLIDA RAFAELLY",
                        "documento" : "CPF",
                        "numeroDocumento" : "41129364860",
                        "faixaEtaria" : "ADT",
                        "bilhetes" : [ 
                            {
                                "numero" : "1270002728633",
                                "fornecedor" : {
                                    "razao" : "",
                                    "cnpj" : "",
                                    "alias" : "G3"
                                },
                                "valor" : NumberDecimal("461.8"),
                                "valorDiaria" : NumberDecimal("280"),
                                "valorTotalDiarias" : NumberDecimal("576.48"),
                                "taxaDu" : NumberDecimal("46.18"),
                                "taxaDeEmbarque" : NumberDecimal("68.5"),
                                "outrasTaxas" : NumberDecimal("0"),
                                "voos" : [ 
                                    {
                                        "descricao" : "Ida - 11 ago 2021 (Quarta)",
                                        "numeroVoo" : "1764",
                                        "origem" : "GRU",
                                        "destino" : "SLZ",
                                        "saida" : ISODate("2021-08-11T13:25:00.000Z"),
                                        "chegada" : ISODate("2021-08-11T16:50:00.000Z"),
                                        "conexao" : false,
                                        "classe" : "Econômica",
                                        "baseTarifaria" : "OPOTDOZ"
                                    }, 
                                    {
                                        "descricao" : "Volta - 21 ago 2021 (Sábado)",
                                        "numeroVoo" : "1765",
                                        "origem" : "SLZ",
                                        "destino" : "GRU",
                                        "saida" : ISODate("2021-08-21T17:35:00.000Z"),
                                        "chegada" : ISODate("2021-08-21T21:10:00.000Z"),
                                        "conexao" : false,
                                        "classe" : "Econômica",
                                        "baseTarifaria" : "OPOTDOZ"
                                    }
                                ]
                            }
                        ]
                    }, 
                    {
                        "nome" : "LOBATO/LUCIRENE ",
                        "documento" : "CPF",
                        "numeroDocumento" : "48920843368",
                        "faixaEtaria" : "ADT",
                        "bilhetes" : [ 
                            {
                                "numero" : "1270002728633",
                                "fornecedor" : {
                                    "razao" : "",
                                    "cnpj" : "",
                                    "alias" : "G3"
                                },
                                "valor" : NumberDecimal("461.8"),
                                "valorDiaria" : NumberDecimal("280"),
                                "valorTotalDiarias" : NumberDecimal("576.48"),
                                "taxaDu" : NumberDecimal("46.18"),
                                "taxaDeEmbarque" : NumberDecimal("68.5"),
                                "outrasTaxas" : NumberDecimal("0"),
                                "voos" : [ 
                                    {
                                        "descricao" : "Ida - 11 ago 2021 (Quarta)",
                                        "numeroVoo" : "1764",
                                        "origem" : "GRU",
                                        "destino" : "SLZ",
                                        "saida" : ISODate("2021-08-11T13:25:00.000Z"),
                                        "chegada" : ISODate("2021-08-11T16:50:00.000Z"),
                                        "conexao" : false,
                                        "classe" : "Econômica",
                                        "baseTarifaria" : "OPOTDOZ"
                                    }, 
                                    {
                                        "descricao" : "Volta - 21 ago 2021 (Sábado)",
                                        "numeroVoo" : "1765",
                                        "origem" : "SLZ",
                                        "destino" : "GRU",
                                        "saida" : ISODate("2021-08-21T17:35:00.000Z"),
                                        "chegada" : ISODate("2021-08-21T21:10:00.000Z"),
                                        "conexao" : false,
                                        "classe" : "Econômica",
                                        "baseTarifaria" : "OPOTDOZ"
                                    }
                                ]
                            }
                        ]
                    }, 
                    {
                        "nome" : "ALCARDE/GIOVANNA",
                        "documento" : "CPF",
                        "numeroDocumento" : "53528677813",
                        "faixaEtaria" : "CHD",
                        "bilhetes" : [ 
                            {
                                "numero" : "1270002728633",
                                "fornecedor" : {
                                    "razao" : "",
                                    "cnpj" : "",
                                    "alias" : "G3"
                                },
                                "valor" : NumberDecimal("415.62"),
                                "valorDiaria" : NumberDecimal("280"),
                                "valorTotalDiarias" : NumberDecimal("525.6800000000001"),
                                "taxaDu" : NumberDecimal("41.56"),
                                "taxaDeEmbarque" : NumberDecimal("68.5"),
                                "outrasTaxas" : NumberDecimal("0"),
                                "voos" : [ 
                                    {
                                        "descricao" : "Ida - 11 ago 2021 (Quarta)",
                                        "numeroVoo" : "1764",
                                        "origem" : "GRU",
                                        "destino" : "SLZ",
                                        "saida" : ISODate("2021-08-11T13:25:00.000Z"),
                                        "chegada" : ISODate("2021-08-11T16:50:00.000Z"),
                                        "conexao" : false,
                                        "classe" : "Econômica",
                                        "baseTarifaria" : "OPOTDOZ"
                                    }, 
                                    {
                                        "descricao" : "Volta - 21 ago 2021 (Sábado)",
                                        "numeroVoo" : "1765",
                                        "origem" : "SLZ",
                                        "destino" : "GRU",
                                        "saida" : ISODate("2021-08-21T17:35:00.000Z"),
                                        "chegada" : ISODate("2021-08-21T21:10:00.000Z"),
                                        "conexao" : false,
                                        "classe" : "Econômica",
                                        "baseTarifaria" : "OPOTDOZ"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "metadata" : {
            "ativo" : true,
            "dataCriacao" : ISODate("2021-04-29T14:01:25.722Z"),
            "dataAtualizacao" : null,
            "dataDelecao" : null
        }
    },
{
    "_id" : ObjectId("604ba3d373763e3facf3d14f"),
    "id" : UUID("057407e0-f6b6-441e-b3fd-42c8ff8df87a"),
    "pedido" : "CA4110209201436CB5",
    "tipo" : "Plano",
    "data" : ISODate("2020-09-02T14:36:54.498Z"),
    "checkIn" : ISODate("2020-09-06T00:00:00.000Z"),
    "checkOut" : ISODate("2020-09-07T00:00:00.000Z"),
    "diarias" : 1,
    "produto" : "Hotel",
    "prestador" : "Cangooroo",
    "fatura" : "302911",
    "status" : {
        "pedido" : 0,
        "conciliacao" : 3
    },
    "assinatura" : {
        "_id" : null,
        "cpf" : "41129364860",
        "assinante" : "ELIDA RAFAELLY SANTOS LOBATO",
        "periodos" : [ 
            {
                "periodo" : 1,
                "diariasUsadas" : 1
            }
        ],
        "id" : UUID("2d6be38d-a96e-4982-a72a-37e19e828005")
    },
    "valores" : {
        "pedido" : NumberDecimal("246.3"),
        "plano" : NumberDecimal("246.3"),
        "extra" : NumberDecimal("0"),
        "multa" : NumberDecimal("0"),
        "totalDiarias" : 0,
        "ponto" : NumberDecimal("0"),
        "acumulo" : NumberDecimal("0")
    },
    "reservas" : [ 
        {
            "_id" : null,
            "numero" : "650208-754624",
            "valor" : NumberDecimal("246.3"),
            "valorDiaria" : NumberDecimal("246.3"),
            "valorTotalDiarias" : NumberDecimal("246.3"),
            "status" : 1,
            "fornecedor" : {
                "razao" : "Europlus Viagens e Turismo Ltda",
                "cnpj" : "08857016001107",
                "alias" : "Europlus"
            },
            "hospedes" : [ 
                {
                    "nome" : "ELIDA LOBATO",
                    "documento" : "CPF",
                    "numeroDocumento" : "41129364860",
                    "titular" : true,
                    "crianca" : false
                }, 
                {
                    "nome" : "JESSICA NASCIMENTO",
                    "documento" : "CPF",
                    "numeroDocumento" : null,
                    "titular" : false,
                    "crianca" : false
                }, 
                {
                    "nome" : "GIOVANNA ALCARDE",
                    "documento" : "CPF",
                    "numeroDocumento" : null,
                    "titular" : false,
                    "crianca" : true
                }
            ],
            "valorAjustado" : false
        }
    ],
    "reservasAereas" : null,
    "metadata" : {
        "ativo" : true,
        "dataCriacao" : ISODate("2021-03-12T17:24:35.406Z"),
        "dataAtualizacao" : ISODate("2021-04-19T18:57:52.413Z"),
        "dataDelecao" : null
    }
},{
        "_id" : ObjectId("6068d3a1d4aec90001886d74"),
        "id" : UUID("436d7c22-c141-4bc7-b401-625d64d3f7f9"),
        "pedido" : "CA4110304211743799",
        "tipo" : "Plano",
        "data" : ISODate("2021-04-03T17:43:55.282Z"),
        "checkIn" : ISODate("2021-04-09T00:00:00.000Z"),
        "checkOut" : ISODate("2021-04-10T00:00:00.000Z"),
        "diarias" : 1,
        "produto" : "Hotel",
        "prestador" : "Cangooroo",
        "fatura" : "335581",
        "status" : {
            "pedido" : 0,
            "conciliacao" : 3
        },
        "assinatura" : {
            "cpf" : "41129364860",
            "assinante" : "ELIDA RAFAELLY SANTOS LOBATO",
            "periodos" : [ 
                {
                    "periodo" : 1,
                    "diariasUsadas" : 1
                }
            ],
            "id" : UUID("2d6be38d-a96e-4982-a72a-37e19e828005")
        },
        "valores" : {
            "pedido" : NumberDecimal("259.89"),
            "plano" : NumberDecimal("259.89"),
            "extra" : NumberDecimal("0"),
            "multa" : NumberDecimal("0"),
            "totalDiarias" : 0,
            "ponto" : NumberDecimal("0"),
            "acumulo" : NumberDecimal("16.08")
        },
        "reservas" : [ 
            {
                "_id" : "19866",
                "numero" : "716868-821225",
                "valor" : NumberDecimal("259.89"),
                "valorDiaria" : NumberDecimal("259.89"),
                "valorTotalDiarias" : NumberDecimal("259.89"),
                "status" : 1,
                "fornecedor" : {
                    "razao" : "Europlus Viagens e Turismo Ltda",
                    "cnpj" : "08857016001107",
                    "alias" : "Europlus"
                },
                "hospedes" : [ 
                    {
                        "nome" : "Elida Lobato",
                        "documento" : "CPF",
                        "numeroDocumento" : "41129364860",
                        "titular" : true,
                        "crianca" : false
                    }
                ],
                "valorAjustado" : false
            }
        ],
        "reservasAereas" : null,
        "metadata" : {
            "ativo" : true,
            "dataCriacao" : ISODate("2021-04-03T20:44:17.948Z"),
            "dataAtualizacao" : ISODate("2021-04-19T18:50:11.086Z"),
            "dataDelecao" : null
        }
    }
])