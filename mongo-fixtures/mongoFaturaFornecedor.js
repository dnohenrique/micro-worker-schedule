/* eslint-disable */
db.getSiblingDB('financeiro').getCollection('fatura_fornecedor').insert([
    {
        "_id": UUID("03cec73e-a56f-4abb-b006-e7c5fc94b4f8"),
        "numero": "32145-74631",
        "razao": "LDS Operadora Turistica Eireli - EzLink",
        "cnpj": "84752400000143",
        "valorTotal": NumberDecimal("500.00"),
        "emissao": ISODate("2020-03-01T11:20:51.000Z"),
        "entrada": ISODate("2020-03-04T11:20:51.000Z"),
        "vencimento": ISODate("2020-03-08T11:20:51.000Z"),
        "reservas": [
            {
                "numero": "74631",
                "checkIn": ISODate("2020-03-01T11:20:51.000Z"),
                "checkOut": ISODate("2020-03-03T11:20:51.000Z"),
                "diarias": 2,
                "valor": NumberDecimal("250.00"),
                "deduzir": false
            }
        ],
        "metadado": {
            "ativo": true,
            "dataCriacao": ISODate("2020-10-13T23:18:02.000Z"),
            "dataAtualizacao": null,
            "dataDelecao": null
        }
    },
    {
        "_id": UUID("97439f71-087a-403a-bb03-41e3c79f8658"),
        "numero": "79546-65478",
        "razao": "Trend Viagens Operadora de Turismo S.A",
        "cnpj": "50924973000195",
        "valorTotal": NumberDecimal("3000.00"),
        "emissao": ISODate("2020-03-01T11:20:51.000Z"),
        "entrada": ISODate("2020-03-04T11:20:51.000Z"),
        "vencimento": ISODate("2020-03-08T11:20:51.000Z"),
        "reservas": [
            {
                "numero": "65478",
                "checkIn": ISODate("2020-03-01T11:20:51.000Z"),
                "checkOut": ISODate("2020-03-03T11:20:51.000Z"),
                "diarias": 2,
                "valor": NumberDecimal("250.00"),
                "deduzir": false
            }
        ],
        "metadado": {
            "ativo": true,
            "dataCriacao": ISODate("2020-10-13T23:18:02.000Z"),
            "dataAtualizacao": null,
            "dataDelecao": null
        }
    },
    {
        "_id": UUID("f872f5f6-5a8c-47e7-b88b-61cf005458b8"),
        "numero": "54793-01264",
        "razao": "Europlus Viagens e Turismo Ltda",
        "cnpj": "08474949000135",
        "valorTotal": NumberDecimal("1000.00"),
        "emissao": ISODate("2020-03-01T11:20:51.000Z"),
        "entrada": ISODate("2020-03-04T11:20:51.000Z"),
        "vencimento": ISODate("2020-03-08T11:20:51.000Z"),
        "reservas": [
        ],
        "metadado": {
            "ativo": true,
            "dataCriacao": ISODate("2020-10-13T23:18:02.000Z"),
            "dataAtualizacao": null,
            "dataDelecao": null
        }
    },
    {
        "_id": UUID("4c4a1801-95d9-4ff3-b641-d69ce5e89e19"),
        "numero": "4444-5555",
        "razao": "Anhanguera Viagens ME",
        "cnpj": "22676293000164",
        "valorTotal": NumberDecimal("2950.00"),
        "emissao": ISODate("2021-02-01T03:00:00.000Z"),
        "entrada": ISODate("2021-02-02T03:00:00.000Z"),
        "vencimento": ISODate("2021-03-01T03:00:00.000Z"),
        "reservas": [
            {
                "numero": "AV-1",
                "checkIn": ISODate("2021-06-22T03:00:00.000Z"),
                "checkOut": ISODate("2021-06-24T03:00:00.000Z"),
                "diarias": 2,
                "valor": NumberDecimal("250.00"),
                "deduzir": false
            },
            {
                "numero": "AV-2",
                "checkIn": ISODate("2021-03-02T03:00:00.000Z"),
                "checkOut": ISODate("2021-03-03T03:00:00.000Z"),
                "diarias": 1,
                "valor": NumberDecimal("800.00"),
                "deduzir": false
            },
            {
                "numero": "AV-3",
                "checkIn": ISODate("2021-03-02T03:00:00.000Z"),
                "checkOut": ISODate("2021-03-03T03:00:00.000Z"),
                "diarias": 1,
                "valor": NumberDecimal("650.00"),
                "deduzir": false
            },
            {
                "numero": "AV-4",
                "checkIn": ISODate("2021-12-15T03:00:00.000Z"),
                "checkOut": ISODate("2021-12-20T03:00:00.000Z"),
                "diarias": 5,
                "valor": NumberDecimal("200.00"),
                "deduzir": false
            }
        ],
        "metadado": {
            "ativo": true,
            "dataCriacao": ISODate("2021-02-02T03:00:00.000Z"),
            "dataAtualizacao": null,
            "dataDelecao": null
        },
    },
    {
        "_id": UUID("c9c104b7-e375-47b6-9bc5-def35999d6ad"),
        "numero": "1111-0000",
        "razao": "Teleporte viagens Expressas Ltda",
        "cnpj": "70727981000159",
        "valorTotal": NumberDecimal("2950.00"),
        "emissao": ISODate("2021-02-01T03:00:00.000Z"),
        "entrada": ISODate("2021-02-02T03:00:00.000Z"),
        "vencimento": ISODate("2021-03-01T03:00:00.000Z"),
        "reservas": [
            {
                "numero": "TVE-1",
                "checkIn": ISODate("2021-06-22T03:00:00.000Z"),
                "checkOut": ISODate("2021-06-24T03:00:00.000Z"),
                "diarias": 2,
                "valor": NumberDecimal("250.00"),
                "deduzir": false
            },
            {
                "numero": "TVE-2",
                "checkIn": ISODate("2021-03-02T03:00:00.000Z"),
                "checkOut": ISODate("2021-03-03T03:00:00.000Z"),
                "diarias": 1,
                "valor": NumberDecimal("800.00"),
                "deduzir": false
            },
            {
                "numero": "TVE-3",
                "checkIn": ISODate("2021-03-02T03:00:00.000Z"),
                "checkOut": ISODate("2021-03-03T03:00:00.000Z"),
                "diarias": 1,
                "valor": NumberDecimal("650.00"),
                "deduzir": false
            },
            {
                "numero": "TVE-4",
                "checkIn": ISODate("2021-12-15T03:00:00.000Z"),
                "checkOut": ISODate("2021-12-20T03:00:00.000Z"),
                "diarias": 5,
                "valor": NumberDecimal("200.00"),
                "deduzir": false
            }
        ],
        "metadado": {
            "ativo": true,
            "dataCriacao": ISODate("2021-02-02T03:00:00.000Z"),
            "dataAtualizacao": null,
            "dataDelecao": null
        },
    }
]);