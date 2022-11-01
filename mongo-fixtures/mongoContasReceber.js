/* eslint-disable */
db.getSiblingDB('financeiro').getCollection('contas_receber').insert([
    {
        "_id" : ObjectId("5fc55776ddbacf0001a671a9"),
        "id" : UUID("98e49a97-8815-4b76-bd19-33ec32a778aa"),
        "metaData" : {
            "ativo" : true,
            "dataCriacao" : ISODate("2020-11-30T20:35:02.732Z"),
            "dataAtualizacao" : ISODate("2020-11-30T20:40:25.963Z"),
            "dataDelecao" : null
        },
        "titular" : "FERIAS & CO. VIAGENS E TURISMO LTDA",
        "identificadorFiscal" : "34008403000107",
        "valorNominal" : NumberDecimal("1916"),
        "recebimentos" : [ 
            {
                "recebimentoId" : UUID("c5ef2103-ad7e-4003-91ae-2cc23c64ff6f"),
                "billId" : NumberLong(4285844),
                "billItemId" : NumberLong(10132857),
                "chargeId" : NumberLong(4209891),
                "dataRecebimento" : ISODate("2020-11-30T02:00:00.000Z"),
                "dataVencimento" : ISODate("2020-12-30T03:01:00.000Z"),
                "dataEmissao" : ISODate("2020-11-30T20:35:14.431Z"),
                "dataCancelamento" : null,
                "juros" : null,
                "multa" : null,
                "desconto" : null,
                "divergencia" : null,
                "valorNominal" : NumberDecimal("1916"),
                "valorRecebido" : NumberDecimal("1916.0"),
                "formaRecebimento" : "BOLETO",
                "situacao" : "RECEBIDO",
                "tipo": "Assinatura"
            }
        ]
    },{
        "_id" : ObjectId("5fc629b1ddbacf0001a671aa"),
        "id" : UUID("083ee351-080b-4197-a6b6-6266c623f37a"),
        "metaData" : {
            "ativo" : true,
            "dataCriacao" : ISODate("2020-12-01T11:32:01.329Z"),
            "dataAtualizacao" : ISODate("2020-12-01T13:56:10.191Z"),
            "dataDelecao" : null
        },
        "titular" : "FERIAS & CO. VIAGENS E TURISMO LTDA",
        "identificadorFiscal" : "34008403000107",
        "valorNominal" : NumberDecimal("900"),
        "recebimentos" : [ 
            {
                "recebimentoId" : UUID("a196640e-9020-44e0-9c6c-420385d110ac"),
                "billId" : null,
                "billItemId" : null,
                "chargeId" : null,
                "dataRecebimento" : null,
                "dataVencimento" : ISODate("2020-12-31T03:01:00.000Z"),
                "dataEmissao" : null,
                "dataCancelamento" : null,
                "juros" : null,
                "multa" : null,
                "desconto" : null,
                "divergencia" : null,			
                "valorNominal" : null,
                "valorRecebido" : null,
                "formaRecebimento" : "BOLETO",
                "situacao" : "PENDENTE_CANCELAMENTO",
                "tipo": "Assinatura"
            }, 
            {
                "recebimentoId" : UUID("ea165593-fb27-4261-9e4e-7ab43ce02580"),
                "billId" : null,
                "billItemId" : null,
                "chargeId" : null,
                "dataRecebimento" : null,
                "dataVencimento" : ISODate("2021-01-30T03:01:00.000Z"),
                "dataEmissao" : null,
                "dataCancelamento" : null,
                "juros" : null,
                "multa" : null,
                "desconto" : null,
                "divergencia" : null,			
                "valorNominal" : null,
                "valorRecebido" : null,
                "formaRecebimento" : "BOLETO",
                "situacao" : "PENDENTE_CANCELAMENTO",
                "tipo": "Assinatura"
            }
        ]
    },{
        "_id" : ObjectId("5fc62a29ddbacf0001a671ab"),
        "id" : UUID("f90340ed-7ef4-4c58-b538-4836aee72803"),
        "metaData" : {
            "ativo" : true,
            "dataCriacao" : ISODate("2020-12-01T11:34:01.136Z"),
            "dataAtualizacao" : ISODate("2020-12-01T13:55:43.800Z"),
            "dataDelecao" : null
        },
        "titular" : "FERIAS & CO. VIAGENS E TURISMO LTDA",
        "identificadorFiscal" : "34008403000107",
        "valorNominal" : NumberDecimal("810"),
        "recebimentos" : [ 
            {
                "recebimentoId" : UUID("7629b524-4c80-4e2a-bb2e-413701d10863"),
                "billId" : null,
                "billItemId" : null,
                "chargeId" : null,
                "dataRecebimento" : null,
                "dataVencimento" : ISODate("2020-12-31T03:01:00.000Z"),
                "dataEmissao" : null,
                "dataCancelamento" : null,
                "juros" : null,
                "multa" : null,
                "desconto" : null,
                "divergencia" : null,			
                "valorNominal" : null,
                "valorRecebido" : null,
                "formaRecebimento" : "BOLETO",
                "situacao" : "PENDENTE_CANCELAMENTO",
                "tipo": "Assinatura"
            }, 
            {
                "recebimentoId" : UUID("6f91b7c3-d052-48cb-a7c4-d9c3bf5440a6"),
                "billId" : null,
                "billItemId" : null,
                "chargeId" : null,
                "dataRecebimento" : null,
                "dataVencimento" : ISODate("2021-01-30T03:01:00.000Z"),
                "dataEmissao" : null,
                "dataCancelamento" : null,
                "juros" : null,
                "multa" : null,
                "desconto" : null,
                "divergencia" : null,			
                "valorNominal" : null,
                "valorRecebido" : null,
                "formaRecebimento" : "BOLETO",
                "situacao" : "PENDENTE_CANCELAMENTO",
                "tipo": "Assinatura"
            }
        ]
    },{
        "_id" : ObjectId("5fc62af3ddbacf0001a671ac"),
        "id" : UUID("71667f08-c45a-4ca1-a7e2-e476e6f27bed"),
        "metaData" : {
            "ativo" : true,
            "dataCriacao" : ISODate("2020-12-01T11:37:23.361Z"),
            "dataAtualizacao" : ISODate("2020-12-01T11:53:27.281Z"),
            "dataDelecao" : null
        },
        "titular" : "FERIAS & CO. VIAGENS E TURISMO LTDA",
        "identificadorFiscal" : "34008403000107",
        "valorNominal" : NumberDecimal("540"),
        "recebimentos" : [ 
            {
                "recebimentoId" : UUID("31de0986-207d-48bf-9313-8b9e9a35f71d"),
                "billId" : NumberLong(4289373),
                "billItemId" : NumberLong(10137064),
                "chargeId" : NumberLong(4213071),
                "dataRecebimento" : ISODate("2020-12-01T02:00:00.000Z"),
                "dataVencimento" : ISODate("2020-12-31T03:01:00.000Z"),
                "dataEmissao" : ISODate("2020-12-01T11:52:58.558Z"),
                "dataCancelamento" : null,
                "juros" : null,
                "multa" : null,
                "desconto" : null,
                "divergencia" : null,			
                "valorNominal" : NumberDecimal("270"),
                "valorRecebido" : NumberDecimal("270.0"),
                "formaRecebimento" : "BOLETO",
                "situacao" : "RECEBIDO",
                "tipo": "Assinatura"
            }, 
            {
                "recebimentoId" : UUID("13d30f9a-3417-4c56-82a4-e77f9a66265f"),
                "billId" : NumberLong(4289374),
                "billItemId" : NumberLong(10137065),
                "chargeId" : NumberLong(4213072),
                "dataRecebimento" : ISODate("2020-12-01T02:00:00.000Z"),
                "dataVencimento" : ISODate("2021-01-30T03:01:00.000Z"),
                "dataEmissao" : ISODate("2020-12-01T11:52:59.001Z"),
                "dataCancelamento" : null,
                "juros" : null,
                "multa" : null,
                "desconto" : null,
                "divergencia" : null,			
                "valorNominal" : NumberDecimal("270"),
                "valorRecebido" : NumberDecimal("270.0"),
                "formaRecebimento" : "BOLETO",
                "situacao" : "RECEBIDO",
                "tipo": "Assinatura"
            }
        ]
    },{
        "_id" : ObjectId("5fc64bb0ddbacf0001a671ad"),
        "id" : UUID("0cbd66bb-5307-4021-9b48-da6a5696821a"),
        "metaData" : {
            "ativo" : true,
            "dataCriacao" : ISODate("2020-12-01T13:57:04.790Z"),
            "dataAtualizacao" : ISODate("2020-12-01T16:41:27.390Z"),
            "dataDelecao" : null
        },
        "titular" : "FERIAS & CO. VIAGENS E TURISMO LTDA",
        "identificadorFiscal" : "34008403000107",
        "valorNominal" : NumberDecimal("810"),
        "recebimentos" : [ 
            {
                "recebimentoId" : UUID("37de9b6d-340f-454d-9fa7-4d5d6110febe"),
                "billId" : null,
                "billItemId" : null,
                "chargeId" : null,
                "dataRecebimento" : null,
                "dataVencimento" : ISODate("2020-12-31T03:01:00.000Z"),
                "dataEmissao" : null,
                "dataCancelamento" : null,
                "juros" : null,
                "multa" : null,
                "desconto" : null,
                "divergencia" : null,			
                "valorNominal" : null,
                "valorRecebido" : null,
                "formaRecebimento" : "BOLETO",
                "situacao" : "PENDENTE_CANCELAMENTO",
                "tipo": "Assinatura"
            }
        ]
    },{
        "_id" : ObjectId("5fc67296ddbacf0001a671ae"),
        "id" : UUID("ef62ec8b-0d61-4124-a291-9d1d035e7ada"),
        "metaData" : {
            "ativo" : false,
            "dataCriacao" : ISODate("2020-12-01T16:43:02.389Z"),
            "dataAtualizacao" : null,
            "dataDelecao" : ISODate("2020-12-01T16:46:07.542Z")
        },
        "titular" : "FERIAS & CO. VIAGENS E TURISMO LTDA",
        "identificadorFiscal" : "34008403000107",
        "valorNominal" : NumberDecimal("810"),
        "recebimentos" : [ 
            {
                "recebimentoId" : UUID("2e57b914-d328-46cc-b7b8-54fc4c8f216b"),
                "billId" : null,
                "billItemId" : null,
                "chargeId" : null,
                "dataRecebimento" : null,
                "dataVencimento" : ISODate("2020-12-31T03:01:00.000Z"),
                "dataEmissao" : null,
                "dataCancelamento" : null,
                "juros" : null,
                "multa" : null,
                "desconto" : null,
                "divergencia" : null,			
                "valorNominal" : null,
                "valorRecebido" : null,
                "formaRecebimento" : "BOLETO",
                "situacao" : "PENDENTE",
                "tipo": "Assinatura"
            }
        ]
    },{
        "_id" : ObjectId("5fc67a6cddbacf0001a671b0"),
        "id" : UUID("9af523d7-9ba2-4d31-943c-01fee35545f5"),
        "metaData" : {
            "ativo" : true,
            "dataCriacao" : ISODate("2020-12-01T17:16:28.272Z"),
            "dataAtualizacao" : ISODate("2020-12-01T17:17:29.461Z"),
            "dataDelecao" : null
        },
        "titular" : "FERIAS & CO. VIAGENS E TURISMO LTDA",
        "identificadorFiscal" : "34008403000107",
        "valorNominal" : NumberDecimal("810"),
        "recebimentos" : [ 
            {
                "recebimentoId" : UUID("d5ea387c-a0ff-4cc6-9158-bbab8e5edea5"),
                "billId" : NumberLong(4291146),
                "billItemId" : NumberLong(10139775),
                "chargeId" : NumberLong(4214812),
                "dataRecebimento" : ISODate("2020-12-01T17:17:29.065Z"),
                "dataVencimento" : ISODate("2020-12-31T03:01:00.000Z"),
                "dataEmissao" : ISODate("2020-12-01T17:16:53.217Z"),
                "dataCancelamento" : null,
                "juros" : null,
                "multa" : null,
                "desconto" : null,
                "divergencia" : null,			
                "valorNominal" : NumberDecimal("810"),
                "valorRecebido" : NumberDecimal("500.0"),
                "formaRecebimento" : "BOLETO",
                "situacao" : "PARCIALMENTE_RECEBIDO",
                "tipo": "Assinatura"
            }
        ]
    },{
        "_id" : ObjectId("5fc67e12ddbacf0001a671b1"),
        "id" : UUID("f0096f5b-20f6-4274-b708-eff02c4b4522"),
        "metaData" : {
            "ativo" : true,
            "dataCriacao" : ISODate("2020-12-01T17:32:02.352Z"),
            "dataAtualizacao" : ISODate("2020-12-01T17:32:25.130Z"),
            "dataDelecao" : null
        },
        "titular" : "FERIAS & CO. VIAGENS E TURISMO LTDA",
        "identificadorFiscal" : "34008403000107",
        "valorNominal" : NumberDecimal("360"),
        "recebimentos" : [ 
            {
                "recebimentoId" : UUID("c4e22ff4-993e-4f52-a5f0-855f81e21e6f"),
                "billId" : NumberLong(4291156),
                "billItemId" : NumberLong(10139788),
                "chargeId" : NumberLong(4214822),
                "dataRecebimento" : ISODate("2020-12-01T02:00:00.000Z"),
                "dataVencimento" : ISODate("2020-12-31T03:01:00.000Z"),
                "dataEmissao" : ISODate("2020-12-01T17:32:11.014Z"),
                "dataCancelamento" : null,
                "juros" : null,
                "multa" : null,
                "desconto" : null,
                "divergencia" : null,			
                "valorNominal" : NumberDecimal("180"),
                "valorRecebido" : NumberDecimal("180.0"),
                "formaRecebimento" : "BOLETO",
                "situacao" : "RECEBIDO",
                "tipo": "Assinatura"
            }, 
            {
                "recebimentoId" : UUID("95088f01-6513-4fdb-abbc-78592ca8ebbc"),
                "billId" : NumberLong(4291157),
                "billItemId" : NumberLong(10139789),
                "chargeId" : NumberLong(4214823),
                "dataRecebimento" : ISODate("2020-12-01T02:00:00.000Z"),
                "dataVencimento" : ISODate("2021-01-30T03:01:00.000Z"),
                "dataEmissao" : ISODate("2020-12-01T17:32:11.460Z"),
                "dataCancelamento" : null,
                "juros" : null,
                "multa" : null,
                "desconto" : null,
                "divergencia" : null,			
                "valorNominal" : NumberDecimal("180"),
                "valorRecebido" : NumberDecimal("180.0"),
                "formaRecebimento" : "BOLETO",
                "situacao" : "RECEBIDO",
                "tipo": "Assinatura"
            }
        ]
    },{
        "_id" : ObjectId("5fc67eb8ddbacf0001a671b2"),
        "id" : UUID("dd02ab04-bbb9-4414-9128-5da90a664da0"),
        "metaData" : {
            "ativo" : true,
            "dataCriacao" : ISODate("2020-12-01T17:34:48.559Z"),
            "dataAtualizacao" : ISODate("2020-12-01T17:35:10.911Z"),
            "dataDelecao" : null
        },
        "titular" : "FERIAS & CO. VIAGENS E TURISMO LTDA",
        "identificadorFiscal" : "34008403000107",
        "valorNominal" : NumberDecimal("2726"),
        "recebimentos" : [ 
            {
                "recebimentoId" : UUID("767a3e28-0928-44cb-9ad6-48d2d36c9b11"),
                "billId" : NumberLong(4291160),
                "billItemId" : NumberLong(10139792),
                "chargeId" : NumberLong(4214826),
                "dataRecebimento" : ISODate("2020-12-01T02:00:00.000Z"),
                "dataVencimento" : ISODate("2020-12-31T03:01:00.000Z"),
                "dataEmissao" : ISODate("2020-12-01T17:34:54.353Z"),
                "dataCancelamento" : null,
                "juros" : null,
                "multa" : null,
                "desconto" : null,
                "divergencia" : null,			
                "valorNominal" : NumberDecimal("2726"),
                "valorRecebido" : NumberDecimal("2726.0"),
                "formaRecebimento" : "BOLETO",
                "situacao" : "RECEBIDO",
                "tipo": "Assinatura"
            }
        ]
    },{
        "_id" : ObjectId("5fc67fbbddbacf0001a671b3"),
        "id" : UUID("66292957-e38e-4f90-838c-ea787c98f3dc"),
        "metaData" : {
            "ativo" : true,
            "dataCriacao" : ISODate("2020-12-01T17:39:07.774Z"),
            "dataAtualizacao" : ISODate("2020-12-01T17:39:42.182Z"),
            "dataDelecao" : null
        },
        "titular" : "FERIAS & CO. VIAGENS E TURISMO LTDA",
        "identificadorFiscal" : "34008403000107",
        "valorNominal" : NumberDecimal("2759"),
        "recebimentos" : [ 
            {
                "recebimentoId" : UUID("85df9130-6ba8-4dc7-8ff1-403d26674ed5"),
                "billId" : NumberLong(4291163),
                "billItemId" : NumberLong(10139799),
                "chargeId" : NumberLong(4214829),
                "dataRecebimento" : ISODate("2020-12-01T02:00:00.000Z"),
                "dataVencimento" : ISODate("2020-12-31T03:01:00.000Z"),
                "dataEmissao" : ISODate("2020-12-01T17:39:12.287Z"),
                "dataCancelamento" : null,
                "juros" : null,
                "multa" : null,
                "desconto" : null,
                "divergencia" : null,			
                "valorNominal" : NumberDecimal("2759"),
                "valorRecebido" : NumberDecimal("2759.0"),
                "formaRecebimento" : "BOLETO",
                "situacao" : "RECEBIDO",
                "tipo": "Assinatura"
            }
        ]
    },
    {
        "_id" : ObjectId("5fd926fdb39bf80001e21840"),
        "id" : UUID("c50ca77a-3472-446b-84f0-3f9375f7aeee"),
        "metaData" : {
            "ativo" : true,
            "dataCriacao" : ISODate("2020-12-15T21:13:33.896Z"),
            "dataAtualizacao" : null,
            "dataDelecao" : null
        },
        "titular" : "Van Daime",
        "identificadorFiscal" : "27160335015",
        "valorNominal" : NumberDecimal("1500"),
        "recebimentos" : [ 
            {
                "recebimentoId" : UUID("38be7973-56a1-4893-b55f-9fc244dcf9e4"),
                "billId" : NumberLong(123654),
                "billItemId" : NumberLong(0),
                "chargeId" : NumberLong(45678123),
                "dataRecebimento" : null,
                "dataVencimento" : ISODate("2020-12-16T18:09:32.837Z"),
                "dataEmissao" : ISODate("2020-12-15T18:09:32.837Z"),
                "dataCancelamento" : null,
                "juros" : NumberDecimal("0"),
                "multa" : NumberDecimal("0"),
                "desconto" : NumberDecimal("0"),
                "divergencia" : NumberDecimal("0"),
                "valorNominal" : NumberDecimal("30"),
                "valorRecebido" : NumberDecimal("0"),
                "formaRecebimento" : "CartaoExtra",
                "situacao" : "EMITIDO",
                "tipo" : "ExtraReserva",
                "cartao" : {
                    "transacao" : {
                        "_id" : NumberLong(11111122),
                        "ocorrencia" : ISODate("2020-12-16T18:09:32.837Z"),
                        "adquirente" : "cielo",
                        "bandeira" : "visa",
                        "nsu" : "0001",
                        "pedido" : null,
                        "valorLiquido" : null,
                        "valorEstornado" : null
                    },
                    "parcelas" : [ 
                        {
                            "numero" : 1,
                            "valorNominal" : "10",
                            "valorRecebido" : null,
                            "valorLiquido" : null,
                            "valorTaxa" : null,
                            "status" : "PAGO",
                            "taxa" : null,
                            "vencimento" : ISODate("2021-01-15T18:09:32.837Z"),
                            "recebimento" : null
                        }, 
                        {
                            "numero" : 2,
                            "valorNominal" : "10",
                            "valorRecebido" : null,
                            "valorLiquido" : null,
                            "valorTaxa" : null,
                            "status" : "PAGO",
                            "taxa" : null,
                            "vencimento" : ISODate("2021-02-14T18:09:32.837Z"),
                            "recebimento" : null
                        }, 
                        {
                            "numero" : 3,
                            "valorNominal" : "10",
                            "valorRecebido" : null,
                            "valorLiquido" : null,
                            "valorTaxa" : null,
                            "status" : "PAGO",
                            "taxa" : null,
                            "vencimento" : ISODate("2021-03-16T18:09:32.837Z"),
                            "recebimento" : null
                        }
                    ]
                }
            }
        ]
    },{
        "_id" : ObjectId("5fd92787b39bf80001e21841"),
        "id" : UUID("81554a7b-76b3-4642-9e1b-f723525101ed"),
        "metaData" : {
            "ativo" : true,
            "dataCriacao" : ISODate("2020-12-15T21:15:51.166Z"),
            "dataAtualizacao" : null,
            "dataDelecao" : null
        },
        "titular" : "Cilon",
        "identificadorFiscal" : "46158405000",
        "valorNominal" : NumberDecimal("1500"),
        "recebimentos" : [ 
            {
                "recebimentoId" : UUID("fd44a6cc-eb1f-4704-a108-7e2f66d6841f"),
                "billId" : NumberLong(156212345),
                "billItemId" : NumberLong(12),
                "chargeId" : NumberLong(45678123),
                "dataRecebimento" : null,
                "dataVencimento" : ISODate("2020-12-16T18:09:32.837Z"),
                "dataEmissao" : ISODate("2020-12-15T18:09:32.837Z"),
                "dataCancelamento" : null,
                "juros" : NumberDecimal("0"),
                "multa" : NumberDecimal("0"),
                "desconto" : NumberDecimal("0"),
                "divergencia" : NumberDecimal("0"),
                "valorNominal" : NumberDecimal("1500"),
                "valorRecebido" : NumberDecimal("0"),
                "formaRecebimento" : "CartaoExtra",
                "situacao" : "EMITIDO",
                "tipo" : "ExtraReserva",
                "cartao" : {
                    "transacao" : {
                        "_id" : NumberLong(11111122),
                        "ocorrencia" : ISODate("2020-12-16T18:09:32.837Z"),
                        "adquirente" : "cielo",
                        "bandeira" : "visa",
                        "nsu" : "0001",
                        "pedido" : null,
                        "valorLiquido" : null,
                        "valorEstornado" : null
                    },
                    "parcelas" : [ 
                        {
                            "numero" : 1,
                            "valorNominal" : "500",
                            "valorRecebido" : null,
                            "valorLiquido" : null,
                            "valorTaxa" : null,
                            "status" : "PAGO",
                            "taxa" : null,
                            "vencimento" : ISODate("2021-01-15T18:09:32.837Z"),
                            "recebimento" : null
                        }, 
                        {
                            "numero" : 2,
                            "valorNominal" : "500",
                            "valorRecebido" : null,
                            "valorLiquido" : null,
                            "valorTaxa" : null,
                            "status" : "PAGO",
                            "taxa" : null,
                            "vencimento" : ISODate("2021-02-14T18:09:32.837Z"),
                            "recebimento" : null
                        }, 
                        {
                            "numero" : 3,
                            "valorNominal" : "500",
                            "valorRecebido" : null,
                            "valorLiquido" : null,
                            "valorTaxa" : null,
                            "status" : "PAGO",
                            "taxa" : null,
                            "vencimento" : ISODate("2021-03-16T18:09:32.837Z"),
                            "recebimento" : null
                        }
                    ]
                }
            }
        ]
    },{
        "_id" : ObjectId("5fd927d0b39bf80001e21842"),
        "id" : UUID("a31c2610-2364-4725-b75b-789ebe6fc4a0"),
        "metaData" : {
            "ativo" : true,
            "dataCriacao" : ISODate("2020-12-15T21:17:04.595Z"),
            "dataAtualizacao" : null,
            "dataDelecao" : null
        },
        "titular" : "Carmem Melo",
        "identificadorFiscal" : "23166115080",
        "valorNominal" : NumberDecimal("2530"),
        "recebimentos" : [ 
            {
                "recebimentoId" : UUID("bff84594-8510-4aba-9980-84814acbbf89"),
                "billId" : NumberLong(156212345),
                "billItemId" : NumberLong(13),
                "chargeId" : NumberLong(4567238123),
                "dataRecebimento" : null,
                "dataVencimento" : ISODate("2020-12-16T18:09:32.837Z"),
                "dataEmissao" : ISODate("2020-12-15T18:09:32.837Z"),
                "dataCancelamento" : null,
                "juros" : NumberDecimal("0"),
                "multa" : NumberDecimal("0"),
                "desconto" : NumberDecimal("0"),
                "divergencia" : NumberDecimal("0"),
                "valorNominal" : NumberDecimal("2530"),
                "valorRecebido" : NumberDecimal("0"),
                "formaRecebimento" : "CartaoExtra",
                "situacao" : "EMITIDO",
                "tipo" : "ExtraReserva",
                "cartao" : {
                    "transacao" : {
                        "_id" : NumberLong(11111122),
                        "ocorrencia" : ISODate("2020-12-16T18:09:32.837Z"),
                        "adquirente" : "cielo",
                        "bandeira" : "visa",
                        "nsu" : "0001",
                        "pedido" : null,
                        "valorLiquido" : null,
                        "valorEstornado" : null
                    },
                    "parcelas" : [ 
                        {
                            "numero" : 1,
                            "valorNominal" : "632.5",
                            "valorRecebido" : null,
                            "valorLiquido" : null,
                            "valorTaxa" : null,
                            "status" : "PAGO",
                            "taxa" : null,
                            "vencimento" : ISODate("2021-01-15T18:09:32.837Z"),
                            "recebimento" : null
                        }, 
                        {
                            "numero" : 2,
                            "valorNominal" : "632.5",
                            "valorRecebido" : null,
                            "valorLiquido" : null,
                            "valorTaxa" : null,
                            "status" : "PAGO",
                            "taxa" : null,
                            "vencimento" : ISODate("2021-02-14T18:09:32.837Z"),
                            "recebimento" : null
                        }, 
                        {
                            "numero" : 3,
                            "valorNominal" : "632.5",
                            "valorRecebido" : null,
                            "valorLiquido" : null,
                            "valorTaxa" : null,
                            "status" : "PAGO",
                            "taxa" : null,
                            "vencimento" : ISODate("2021-03-16T18:09:32.837Z"),
                            "recebimento" : null
                        }, 
                        {
                            "numero" : 4,
                            "valorNominal" : "632.5",
                            "valorRecebido" : null,
                            "valorLiquido" : null,
                            "valorTaxa" : null,
                            "status" : "PAGO",
                            "taxa" : null,
                            "vencimento" : ISODate("2021-04-15T18:09:32.837Z"),
                            "recebimento" : null
                        }
                    ]
                }
            }
        ]
    },{
        "_id" : ObjectId("5fd92853b39bf80001e21844"),
        "id" : UUID("96639d12-e5ce-47d0-b9a4-dbd79d05ac16"),
        "metaData" : {
            "ativo" : true,
            "dataCriacao" : ISODate("2020-12-15T21:19:15.878Z"),
            "dataAtualizacao" : null,
            "dataDelecao" : null
        },
        "titular" : "Roberto Carlos",
        "identificadorFiscal" : "02540117058",
        "valorNominal" : NumberDecimal("2112.02"),
        "recebimentos" : [ 
            {
                "recebimentoId" : UUID("01c67090-a35c-447a-b321-f81f2c153ac2"),
                "billId" : NumberLong(156212345),
                "billItemId" : NumberLong(13),
                "chargeId" : NumberLong(4567238123),
                "dataRecebimento" : null,
                "dataVencimento" : ISODate("2020-12-16T18:09:32.837Z"),
                "dataEmissao" : ISODate("2020-12-15T18:09:32.837Z"),
                "dataCancelamento" : null,
                "juros" : NumberDecimal("0"),
                "multa" : NumberDecimal("0"),
                "desconto" : NumberDecimal("0"),
                "divergencia" : NumberDecimal("0"),
                "valorNominal" : NumberDecimal("2112.02"),
                "valorRecebido" : NumberDecimal("0"),
                "formaRecebimento" : "CartaoExtra",
                "situacao" : "EMITIDO",
                "tipo" : "ExtraReserva",
                "cartao" : {
                    "transacao" : {
                        "_id" : NumberLong(11111122),
                        "ocorrencia" : ISODate("2020-12-16T18:09:32.837Z"),
                        "adquirente" : "cielo",
                        "bandeira" : "visa",
                        "nsu" : "0001",
                        "pedido" : null,
                        "valorLiquido" : null,
                        "valorEstornado" : null
                    },
                    "parcelas" : [ 
                        {
                            "numero" : 1,
                            "valorNominal" : "352",
                            "valorRecebido" : null,
                            "valorLiquido" : null,
                            "valorTaxa" : null,
                            "status" : "PAGO",
                            "taxa" : null,
                            "vencimento" : ISODate("2021-01-15T18:09:32.837Z"),
                            "recebimento" : null
                        }, 
                        {
                            "numero" : 2,
                            "valorNominal" : "352",
                            "valorRecebido" : null,
                            "valorLiquido" : null,
                            "valorTaxa" : null,
                            "status" : "PAGO",
                            "taxa" : null,
                            "vencimento" : ISODate("2021-02-14T18:09:32.837Z"),
                            "recebimento" : null
                        }, 
                        {
                            "numero" : 3,
                            "valorNominal" : "352",
                            "valorRecebido" : null,
                            "valorLiquido" : null,
                            "valorTaxa" : null,
                            "status" : "PAGO",
                            "taxa" : null,
                            "vencimento" : ISODate("2021-03-16T18:09:32.837Z"),
                            "recebimento" : null
                        }, 
                        {
                            "numero" : 4,
                            "valorNominal" : "352",
                            "valorRecebido" : null,
                            "valorLiquido" : null,
                            "valorTaxa" : null,
                            "status" : "PAGO",
                            "taxa" : null,
                            "vencimento" : ISODate("2021-04-15T18:09:32.837Z"),
                            "recebimento" : null
                        }, 
                        {
                            "numero" : 5,
                            "valorNominal" : "352",
                            "valorRecebido" : null,
                            "valorLiquido" : null,
                            "valorTaxa" : null,
                            "status" : "PAGO",
                            "taxa" : null,
                            "vencimento" : ISODate("2021-05-15T18:09:32.837Z"),
                            "recebimento" : null
                        }, 
                        {
                            "numero" : 6,
                            "valorNominal" : "352.02",
                            "valorRecebido" : null,
                            "valorLiquido" : null,
                            "valorTaxa" : null,
                            "status" : "PAGO",
                            "taxa" : null,
                            "vencimento" : ISODate("2021-06-14T18:09:32.837Z"),
                            "recebimento" : null
                        }
                    ]
                }
            }
        ]
    },{
        "_id" : ObjectId("5fd92918b39bf80001e21845"),
        "id" : UUID("21bb5a9a-eedc-40a3-bdf0-032d42fbabf7"),
        "metaData" : {
            "ativo" : true,
            "dataCriacao" : ISODate("2020-12-15T21:22:32.690Z"),
            "dataAtualizacao" : null,
            "dataDelecao" : null
        },
        "titular" : "Rita Facada",
        "identificadorFiscal" : "52100072005",
        "valorNominal" : NumberDecimal("2040"),
        "recebimentos" : [ 
            {
                "recebimentoId" : UUID("affd309a-c952-41ce-b174-2288552da637"),
                "billId" : NumberLong(1562112345),
                "billItemId" : NumberLong(15),
                "chargeId" : NumberLong(4567238123),
                "dataRecebimento" : null,
                "dataVencimento" : ISODate("2020-12-16T18:09:32.837Z"),
                "dataEmissao" : ISODate("2020-12-15T18:09:32.837Z"),
                "dataCancelamento" : null,
                "juros" : NumberDecimal("0"),
                "multa" : NumberDecimal("0"),
                "desconto" : NumberDecimal("0"),
                "divergencia" : NumberDecimal("0"),
                "valorNominal" : NumberDecimal("2040"),
                "valorRecebido" : NumberDecimal("0"),
                "formaRecebimento" : "CartaoExtra",
                "situacao" : "EMITIDO",
                "tipo" : "ExtraReserva",
                "cartao" : {
                    "transacao" : {
                        "_id" : NumberLong(11111122),
                        "ocorrencia" : ISODate("2020-12-16T18:09:32.837Z"),
                        "adquirente" : "cielo",
                        "bandeira" : "visa",
                        "nsu" : "0001",
                        "pedido" : null,
                        "valorLiquido" : null,
                        "valorEstornado" : null
                    },
                    "parcelas" : [ 
                        {
                            "numero" : 1,
                            "valorNominal" : "408",
                            "valorRecebido" : null,
                            "valorLiquido" : null,
                            "valorTaxa" : null,
                            "status" : "PAGO",
                            "taxa" : null,
                            "vencimento" : ISODate("2021-01-15T18:09:32.837Z"),
                            "recebimento" : null
                        }, 
                        {
                            "numero" : 2,
                            "valorNominal" : "408",
                            "valorRecebido" : null,
                            "valorLiquido" : null,
                            "valorTaxa" : null,
                            "status" : "PAGO",
                            "taxa" : null,
                            "vencimento" : ISODate("2021-02-14T18:09:32.837Z"),
                            "recebimento" : null
                        }, 
                        {
                            "numero" : 3,
                            "valorNominal" : "408",
                            "valorRecebido" : null,
                            "valorLiquido" : null,
                            "valorTaxa" : null,
                            "status" : "PAGO",
                            "taxa" : null,
                            "vencimento" : ISODate("2021-03-16T18:09:32.837Z"),
                            "recebimento" : null
                        }, 
                        {
                            "numero" : 4,
                            "valorNominal" : "408",
                            "valorRecebido" : null,
                            "valorLiquido" : null,
                            "valorTaxa" : null,
                            "status" : "PAGO",
                            "taxa" : null,
                            "vencimento" : ISODate("2021-04-15T18:09:32.837Z"),
                            "recebimento" : null
                        }, 
                        {
                            "numero" : 5,
                            "valorNominal" : "408",
                            "valorRecebido" : null,
                            "valorLiquido" : null,
                            "valorTaxa" : null,
                            "status" : "PAGO",
                            "taxa" : null,
                            "vencimento" : ISODate("2021-05-15T18:09:32.837Z"),
                            "recebimento" : null
                        }
                    ]
                }
            }
        ]
    },
    {
        "_id" : ObjectId("5fce809cf71e5400018d55c6"),
        "id" : UUID("ef64d2b2-d307-4a90-93e8-19718e2f923b"),
        "metaData" : {
            "ativo" : true,
            "dataCriacao" : ISODate("2020-12-15T21:13:33.896Z"),
            "dataAtualizacao" : null,
            "dataDelecao" : null
        },
        "titular" : "Lucas Mariano da Silva",
        "identificadorFiscal" : "06247512015",
        "valorNominal" : NumberDecimal("2300"),
        "recebimentos" : [ 
            {
                "recebimentoId" : UUID("be0f7f41-50e3-4c28-b064-6c69974359ca"),
                "billId" : NumberLong(773399),
                "billItemId" : NumberLong(0),
                "chargeId" : NumberLong(45678123),
                "dataRecebimento" : null,
                "dataVencimento" : ISODate("2020-12-16T18:09:32.837Z"),
                "dataEmissao" : ISODate("2020-12-15T18:09:32.837Z"),
                "dataCancelamento" : null,
                "juros" : NumberDecimal("0"),
                "multa" : NumberDecimal("0"),
                "desconto" : NumberDecimal("0"),
                "divergencia" : NumberDecimal("0"),
                "valorNominal" : NumberDecimal("30"),
                "valorRecebido" : NumberDecimal("0"),
                "formaRecebimento" : "CartaoRecorrencia",
                "situacao" : "EMITIDO",
                "tipo" : "CartaoRecorrencia",
                "cartao" : {
                    "transacao" : {
                        "_id" : NumberLong(11111122),
                        "ocorrencia" : ISODate("2020-12-16T18:09:32.837Z"),
                        "adquirente" : "cielo",
                        "bandeira" : "visa",
                        "nsu" : "0001",
                        "pedido" : null,
                        "valorLiquido" : null,
                        "valorEstornado" : null
                    },
                    "parcelas" : [ 
                        {
                            "numero" : 1,
                            "valorNominal" : "10",
                            "valorRecebido" : null,
                            "valorLiquido" : null,
                            "valorTaxa" : null,
                            "status" : "PAGO",
                            "taxa" : null,
                            "vencimento" : ISODate("2021-01-15T18:09:32.837Z"),
                            "recebimento" : null
                        }, 
                        {
                            "numero" : 2,
                            "valorNominal" : "10",
                            "valorRecebido" : null,
                            "valorLiquido" : null,
                            "valorTaxa" : null,
                            "status" : "PAGO",
                            "taxa" : null,
                            "vencimento" : ISODate("2021-02-14T18:09:32.837Z"),
                            "recebimento" : null
                        }, 
                        {
                            "numero" : 3,
                            "valorNominal" : "10",
                            "valorRecebido" : null,
                            "valorLiquido" : null,
                            "valorTaxa" : null,
                            "status" : "PAGO",
                            "taxa" : null,
                            "vencimento" : ISODate("2021-03-16T18:09:32.837Z"),
                            "recebimento" : null
                        }
                    ]
                }
            }
        ]
    },
    {
        "_id" : ObjectId("5feb06fee1092100015a8784"),
        "id" : UUID("a5712526-3432-406e-9369-ce0afd05ab58"),
        "metaData" : {
            "ativo" : true,
            "dataCriacao" : ISODate("2020-12-15T21:13:33.896Z"),
            "dataAtualizacao" : null,
            "dataDelecao" : null
        },
        "titular" : "João Miguel Oliveira",
        "identificadorFiscal" : "30056070039",
        "valorNominal" : NumberDecimal("6800"),
        "recebimentos" : [ 
            {
                "recebimentoId" : UUID("acad11af-cda5-4bbc-a88a-1315da0919d4"),
                "billId" : NumberLong(449321),
                "billItemId" : NumberLong(0),
                "chargeId" : NumberLong(45678123),
                "dataRecebimento" : null,
                "dataVencimento" : ISODate("2020-12-16T18:09:32.837Z"),
                "dataEmissao" : ISODate("2020-12-15T18:09:32.837Z"),
                "dataCancelamento" : null,
                "juros" : NumberDecimal("0"),
                "multa" : NumberDecimal("0"),
                "desconto" : NumberDecimal("0"),
                "divergencia" : NumberDecimal("0"),
                "valorNominal" : NumberDecimal("30"),
                "valorRecebido" : NumberDecimal("0"),
                "formaRecebimento" : "CartaoRecorrencia",
                "situacao" : "EMITIDO",
                "tipo" : "CartaoRecorrencia",
                "cartao" : {
                    "transacao" : {
                        "_id" : NumberLong(11111122),
                        "ocorrencia" : ISODate("2020-12-16T18:09:32.837Z"),
                        "adquirente" : "cielo",
                        "bandeira" : "visa",
                        "nsu" : "0001",
                        "pedido" : null,
                        "valorLiquido" : null,
                        "valorEstornado" : null
                    },
                    "parcelas" : [ 
                        {
                            "numero" : 1,
                            "valorNominal" : "12",
                            "valorRecebido" : null,
                            "valorLiquido" : null,
                            "valorTaxa" : null,
                            "status" : "PAGO",
                            "taxa" : null,
                            "vencimento" : ISODate("2021-01-15T18:09:32.837Z"),
                            "recebimento" : null
                        }, 
                        {
                            "numero" : 2,
                            "valorNominal" : "50",
                            "valorRecebido" : null,
                            "valorLiquido" : null,
                            "valorTaxa" : null,
                            "status" : "PAGO",
                            "taxa" : null,
                            "vencimento" : ISODate("2021-02-14T18:09:32.837Z"),
                            "recebimento" : null
                        }
                    ]
                }
            }
        ]
    },
    {
        "_id" : ObjectId("5ff37a8de1092100015a878b"),
        "id" : UUID("fb429326-88fc-4984-8244-616afa2550c4"),
        "metaData" : {
            "ativo" : true,
            "dataCriacao" : ISODate("2020-12-15T21:13:33.896Z"),
            "dataAtualizacao" : null,
            "dataDelecao" : null
        },
        "titular" : "Antonio Augusto de Almeida",
        "identificadorFiscal" : "66901994010",
        "valorNominal" : NumberDecimal("7800"),
        "recebimentos" : [ 
            {
                "recebimentoId" : UUID("b7369436-ae2e-4c62-bdd0-2daf995d747b"),
                "billId" : NumberLong(713240),
                "billItemId" : NumberLong(0),
                "chargeId" : NumberLong(45678123),
                "dataRecebimento" : null,
                "dataVencimento" : ISODate("2020-12-16T18:09:32.837Z"),
                "dataEmissao" : ISODate("2020-12-15T18:09:32.837Z"),
                "dataCancelamento" : null,
                "juros" : NumberDecimal("0"),
                "multa" : NumberDecimal("0"),
                "desconto" : NumberDecimal("0"),
                "divergencia" : NumberDecimal("0"),
                "valorNominal" : NumberDecimal("30"),
                "valorRecebido" : NumberDecimal("0"),
                "formaRecebimento" : "CartaoRecorrencia",
                "situacao" : "EMITIDO",
                "tipo" : "CartaoRecorrencia",
                "cartao" : {
                    "transacao" : {
                        "_id" : NumberLong(11111122),
                        "ocorrencia" : ISODate("2020-12-01T18:09:32.837Z"),
                        "adquirente" : "cielo",
                        "bandeira" : "visa",
                        "nsu" : "0001",
                        "pedido" : null,
                        "valorLiquido" : null,
                        "valorEstornado" : null
                    },
                    "parcelas" : [ 
                        {
                            "numero" : 1,
                            "valorNominal" : "12",
                            "valorRecebido" : null,
                            "valorLiquido" : null,
                            "valorTaxa" : null,
                            "status" : "PAGO",
                            "taxa" : null,
                            "vencimento" : ISODate("2021-01-15T18:09:32.837Z"),
                            "recebimento" : null
                        }, 
                        {
                            "numero" : 2,
                            "valorNominal" : "50",
                            "valorRecebido" : null,
                            "valorLiquido" : null,
                            "valorTaxa" : null,
                            "status" : "PAGO",
                            "taxa" : null,
                            "vencimento" : ISODate("2021-02-14T18:09:32.837Z"),
                            "recebimento" : null
                        }
                    ]
                }
            }
        ]
    },
    {
        "_id" : ObjectId("5ff3c655e1092100015a878c"),
        "id" : UUID("d828f941-edec-49e2-8922-39e4c359a3dd"),
        "metaData" : {
            "ativo" : true,
            "dataCriacao" : ISODate("2020-12-15T21:13:33.896Z"),
            "dataAtualizacao" : null,
            "dataDelecao" : null
        },
        "titular" : "Bruna Sampaio Gluszewicz ",
        "identificadorFiscal" : "49860817057",
        "valorNominal" : NumberDecimal("7800"),
        "recebimentos" : [ 
            {
                "recebimentoId" : UUID("4aab21e4-f500-4dd9-889c-405d4f49e30b"),
                "billId" : NumberLong(548899),
                "billItemId" : NumberLong(0),
                "chargeId" : NumberLong(45678123),
                "dataRecebimento" : null,
                "dataVencimento" : ISODate("2020-12-16T18:09:32.837Z"),
                "dataEmissao" : ISODate("2020-12-15T18:09:32.837Z"),
                "dataCancelamento" : null,
                "juros" : NumberDecimal("0"),
                "multa" : NumberDecimal("0"),
                "desconto" : NumberDecimal("0"),
                "divergencia" : NumberDecimal("0"),
                "valorNominal" : NumberDecimal("30"),
                "valorRecebido" : NumberDecimal("0"),
                "formaRecebimento" : "CartaoRecorrencia",
                "situacao" : "EMITIDO",
                "tipo" : "CartaoRecorrencia",
                "cartao" : {
                    "transacao" : {
                        "_id" : NumberLong(11111122),
                        "ocorrencia" : ISODate("2020-12-04T18:09:32.837Z"),
                        "adquirente" : "cielo",
                        "bandeira" : "visa",
                        "nsu" : "0001",
                        "pedido" : null,
                        "valorLiquido" : null,
                        "valorEstornado" : null
                    },
                    "parcelas" : [ 
                        {
                            "numero" : 1,
                            "valorNominal" : "12",
                            "valorRecebido" : null,
                            "valorLiquido" : null,
                            "valorTaxa" : null,
                            "status" : "PAGO",
                            "taxa" : null,
                            "vencimento" : ISODate("2021-01-15T18:09:32.837Z"),
                            "recebimento" : null
                        }                    
                    ]
                }
            }
        ]
    },
    {
        "_id" : ObjectId("5ff855269216880001c5c798"),
        "id" : UUID("c69deb58-c402-41d8-a307-6fd925b9499f"),
        "metaData" : {
            "ativo" : true,
            "dataCriacao" : ISODate("2020-12-15T21:13:33.896Z"),
            "dataAtualizacao" : null,
            "dataDelecao" : null
        },
        "titular" : "Alzenir Jose Barbosa",
        "identificadorFiscal" : "09607863097",
        "valorNominal" : NumberDecimal("5532"),
        "recebimentos" : [ 
            {
                "recebimentoId" : UUID("336c9fc6-a1b4-4ddf-b2d5-c92ebad9fd8b"),
                "billId" : NumberLong(331269),
                "billItemId" : NumberLong(0),
                "chargeId" : NumberLong(45678123),
                "dataRecebimento" : null,
                "dataVencimento" : ISODate("2020-12-16T18:09:32.837Z"),
                "dataEmissao" : ISODate("2020-12-15T18:09:32.837Z"),
                "dataCancelamento" : null,
                "juros" : NumberDecimal("0"),
                "multa" : NumberDecimal("0"),
                "desconto" : NumberDecimal("0"),
                "divergencia" : NumberDecimal("0"),
                "valorNominal" : NumberDecimal("30"),
                "valorRecebido" : NumberDecimal("0"),
                "formaRecebimento" : "CartaoRecorrencia",
                "situacao" : "EMITIDO",
                "tipo" : "CartaoRecorrencia",
                "cartao" : {
                    "transacao" : {
                        "_id" : NumberLong(11111122),
                        "ocorrencia" : ISODate("2020-12-09T18:09:32.837Z"),
                        "adquirente" : "cielo",
                        "bandeira" : "visa",
                        "nsu" : "0001",
                        "pedido" : null,
                        "valorLiquido" : null,
                        "valorEstornado" : null
                    },
                    "parcelas" : [ 
                        {
                            "numero" : 1,
                            "valorNominal" : "12",
                            "valorRecebido" : null,
                            "valorLiquido" : null,
                            "valorTaxa" : null,
                            "status" : "PAGO",
                            "taxa" : null,
                            "vencimento" : ISODate("2021-01-15T18:09:32.837Z"),
                            "recebimento" : null
                        }                    
                    ]
                }
            }
        ]
    },
    {
        "_id" : ObjectId("5ffc75259216880001c5c7ab"),
        "id" : UUID("26425186-69ed-456a-852e-498807b79669"),
        "metaData" : {
            "ativo" : true,
            "dataCriacao" : ISODate("2020-12-15T21:13:33.896Z"),
            "dataAtualizacao" : null,
            "dataDelecao" : null
        },
        "titular" : "Rafael Duarte",
        "identificadorFiscal" : "38789641027",
        "valorNominal" : NumberDecimal("1900"),
        "recebimentos" : [ 
            {
                "recebimentoId" : UUID("2ff53104-9f92-4c6d-b279-70fd57a21288"),
                "billId" : NumberLong(101303),
                "billItemId" : NumberLong(0),
                "chargeId" : NumberLong(45678123),
                "dataRecebimento" : null,
                "dataVencimento" : ISODate("2020-12-16T18:09:32.837Z"),
                "dataEmissao" : ISODate("2020-12-15T18:09:32.837Z"),
                "dataCancelamento" : null,
                "juros" : NumberDecimal("0"),
                "multa" : NumberDecimal("0"),
                "desconto" : NumberDecimal("0"),
                "divergencia" : NumberDecimal("0"),
                "valorNominal" : NumberDecimal("30"),
                "valorRecebido" : NumberDecimal("0"),
                "formaRecebimento" : "CartaoRecorrencia",
                "situacao" : "EMITIDO",
                "tipo" : "CartaoRecorrencia",
                "cartao" : {
                    "transacao" : {
                        "_id" : NumberLong(11111122),
                        "ocorrencia" : ISODate("2020-12-11T18:09:32.837Z"),
                        "adquirente" : "cielo",
                        "bandeira" : "visa",
                        "nsu" : "0001",
                        "pedido" : null,
                        "valorLiquido" : null,
                        "valorEstornado" : null
                    },
                    "parcelas" : [ 
                        {
                            "numero" : 1,
                            "valorNominal" : "12",
                            "valorRecebido" : null,
                            "valorLiquido" : null,
                            "valorTaxa" : null,
                            "status" : "PAGO",
                            "taxa" : null,
                            "vencimento" : ISODate("2021-01-15T18:09:32.837Z"),
                            "recebimento" : null
                        }                    
                    ]
                }
            }
        ]
    },
    {
        "_id" : ObjectId("5ffdea189216880001c5c7b7"),
        "id" : UUID("9fa036c1-776e-42f2-bf40-646379979811"),
        "metaData" : {
            "ativo" : true,
            "dataCriacao" : ISODate("2020-12-15T21:13:33.896Z"),
            "dataAtualizacao" : null,
            "dataDelecao" : null
        },
        "titular" : "Alexandro Gomes dos Santos",
        "identificadorFiscal" : "79832936071",
        "valorNominal" : NumberDecimal("1600"),
        "recebimentos" : [ 
            {
                "recebimentoId" : UUID("256c5fb4-b5bf-43f9-a803-6b96b046d18a"),
                "billId" : NumberLong(329876),
                "billItemId" : NumberLong(0),
                "chargeId" : NumberLong(45678123),
                "dataRecebimento" : null,
                "dataVencimento" : ISODate("2020-12-16T18:09:32.837Z"),
                "dataEmissao" : ISODate("2020-12-15T18:09:32.837Z"),
                "dataCancelamento" : null,
                "juros" : NumberDecimal("0"),
                "multa" : NumberDecimal("0"),
                "desconto" : NumberDecimal("0"),
                "divergencia" : NumberDecimal("0"),
                "valorNominal" : NumberDecimal("30"),
                "valorRecebido" : NumberDecimal("0"),
                "formaRecebimento" : "CartaoRecorrencia",
                "situacao" : "EMITIDO",
                "tipo" : "CartaoRecorrencia",
                "cartao" : {
                    "transacao" : {
                        "_id" : NumberLong(11111122),
                        "ocorrencia" : ISODate("2020-12-17T18:09:32.837Z"),
                        "adquirente" : "cielo",
                        "bandeira" : "visa",
                        "nsu" : "0001",
                        "pedido" : null,
                        "valorLiquido" : null,
                        "valorEstornado" : null
                    },
                    "parcelas" : [ 
                        {
                            "numero" : 1,
                            "valorNominal" : "12",
                            "valorRecebido" : null,
                            "valorLiquido" : null,
                            "valorTaxa" : null,
                            "status" : "PAGO",
                            "taxa" : null,
                            "vencimento" : ISODate("2021-01-15T18:09:32.837Z"),
                            "recebimento" : null
                        }                    
                    ]
                }
            }
        ]
    },
    {
        "_id" : ObjectId("5fff496b4620380001f5b846"),
        "id" : UUID("b35ccd7a-0e5d-498a-aec2-f033001850d7"),
        "metaData" : {
            "ativo" : true,
            "dataCriacao" : ISODate("2020-12-15T21:13:33.896Z"),
            "dataAtualizacao" : null,
            "dataDelecao" : null
        },
        "titular" : "Thiago Vieira Nascimento",
        "identificadorFiscal" : "14578163008",
        "valorNominal" : NumberDecimal("1200"),
        "recebimentos" : [ 
            {
                "recebimentoId" : UUID("fa230ddc-73b2-4ee8-bc0a-f7d6a6dff36b"),
                "billId" : NumberLong(400555),
                "billItemId" : NumberLong(0),
                "chargeId" : NumberLong(45678123),
                "dataRecebimento" : null,
                "dataVencimento" : ISODate("2020-12-16T18:09:32.837Z"),
                "dataEmissao" : ISODate("2020-12-15T18:09:32.837Z"),
                "dataCancelamento" : null,
                "juros" : NumberDecimal("0"),
                "multa" : NumberDecimal("0"),
                "desconto" : NumberDecimal("0"),
                "divergencia" : NumberDecimal("0"),
                "valorNominal" : NumberDecimal("30"),
                "valorRecebido" : NumberDecimal("0"),
                "formaRecebimento" : "CartaoRecorrencia",
                "situacao" : "EMITIDO",
                "tipo" : "CartaoRecorrencia",
                "cartao" : {
                    "transacao" : {
                        "_id" : NumberLong(11111122),
                        "ocorrencia" : ISODate("2020-12-21T18:09:32.837Z"),
                        "adquirente" : "cielo",
                        "bandeira" : "visa",
                        "nsu" : "0001",
                        "pedido" : null,
                        "valorLiquido" : null,
                        "valorEstornado" : null
                    },
                    "parcelas" : [ 
                        {
                            "numero" : 1,
                            "valorNominal" : "12",
                            "valorRecebido" : null,
                            "valorLiquido" : null,
                            "valorTaxa" : null,
                            "status" : "PAGO",
                            "taxa" : null,
                            "vencimento" : ISODate("2021-01-15T18:09:32.837Z"),
                            "recebimento" : null
                        }                    
                    ]
                }
            }
        ]
    },
    {
        "_id" : ObjectId("5fff46284620380001f5b844"),
        "id" : UUID("297c9203-bb15-4d03-9f7d-bd5220e5d968"),
        "metaData" : {
            "ativo" : true,
            "dataCriacao" : ISODate("2020-12-15T21:13:33.896Z"),
            "dataAtualizacao" : null,
            "dataDelecao" : null
        },
        "titular" : "Geraldo Pereira",
        "identificadorFiscal" : "49288776087",
        "valorNominal" : NumberDecimal("8755"),
        "recebimentos" : [ 
            {
                "recebimentoId" : UUID("df0057cf-4867-4898-b980-f725f2688bf4"),
                "billId" : NumberLong(653221),
                "billItemId" : NumberLong(0),
                "chargeId" : NumberLong(45678123),
                "dataRecebimento" : null,
                "dataVencimento" : ISODate("2020-12-16T18:09:32.837Z"),
                "dataEmissao" : ISODate("2020-12-15T18:09:32.837Z"),
                "dataCancelamento" : null,
                "juros" : NumberDecimal("0"),
                "multa" : NumberDecimal("0"),
                "desconto" : NumberDecimal("0"),
                "divergencia" : NumberDecimal("0"),
                "valorNominal" : NumberDecimal("30"),
                "valorRecebido" : NumberDecimal("0"),
                "formaRecebimento" : "CartaoRecorrencia",
                "situacao" : "EMITIDO",
                "tipo" : "CartaoRecorrencia",
                "cartao" : {
                    "transacao" : {
                        "_id" : NumberLong(11111122),
                        "ocorrencia" : ISODate("2020-12-19T18:09:32.837Z"),
                        "adquirente" : "cielo",
                        "bandeira" : "visa",
                        "nsu" : "0001",
                        "pedido" : null,
                        "valorLiquido" : null,
                        "valorEstornado" : null
                    },
                    "parcelas" : [ 
                        {
                            "numero" : 1,
                            "valorNominal" : "12",
                            "valorRecebido" : null,
                            "valorLiquido" : null,
                            "valorTaxa" : null,
                            "status" : "PAGO",
                            "taxa" : null,
                            "vencimento" : ISODate("2021-01-15T18:09:32.837Z"),
                            "recebimento" : null
                        }                    
                    ]
                }
            }
        ]
    },
    
    {
        "_id" : ObjectId("5ffc74c59216880001c5c7a9"),
        "id" : UUID("0550f789-431e-42ab-9269-2d250b1b0395"),
        "metaData" : {
            "ativo" : true,
            "dataCriacao" : ISODate("2020-12-15T21:13:33.896Z"),
            "dataAtualizacao" : null,
            "dataDelecao" : null
        },
        "titular" : "Silvio Teixeira da Silva",
        "identificadorFiscal" : "82276844086",
        "valorNominal" : NumberDecimal("2299"),
        "recebimentos" : [ 
            {
                "recebimentoId" : UUID("835192ab-7a66-4652-991a-6b994195adcc"),
                "billId" : NumberLong(451100),
                "billItemId" : NumberLong(0),
                "chargeId" : NumberLong(45678123),
                "dataRecebimento" : null,
                "dataVencimento" : ISODate("2020-12-16T18:09:32.837Z"),
                "dataEmissao" : ISODate("2020-12-15T18:09:32.837Z"),
                "dataCancelamento" : null,
                "juros" : NumberDecimal("0"),
                "multa" : NumberDecimal("0"),
                "desconto" : NumberDecimal("0"),
                "divergencia" : NumberDecimal("0"),
                "valorNominal" : NumberDecimal("30"),
                "valorRecebido" : NumberDecimal("0"),
                "formaRecebimento" : "CartaoRecorrencia",
                "situacao" : "EMITIDO",
                "tipo" : "CartaoRecorrencia",
                "cartao" : {
                    "transacao" : {
                        "_id" : NumberLong(11111122),
                        "ocorrencia" : ISODate("2020-12-22T18:09:32.837Z"),
                        "adquirente" : "cielo",
                        "bandeira" : "visa",
                        "nsu" : "0001",
                        "pedido" : null,
                        "valorLiquido" : null,
                        "valorEstornado" : null
                    },
                    "parcelas" : [ 
                        {
                            "numero" : 1,
                            "valorNominal" : "12",
                            "valorRecebido" : null,
                            "valorLiquido" : null,
                            "valorTaxa" : null,
                            "status" : "PAGO",
                            "taxa" : null,
                            "vencimento" : ISODate("2021-01-15T18:09:32.837Z"),
                            "recebimento" : null
                        }                    
                    ]
                }
            }
        ]
    },
    {
        "_id" : ObjectId("5fff1f448e206700012ed152"),
        "id" : UUID("5294b4d3-6443-4dfe-b9f4-776c206f3f6b"),
        "metaData" : {
            "ativo" : true,
            "dataCriacao" : ISODate("2020-12-15T21:13:33.896Z"),
            "dataAtualizacao" : null,
            "dataDelecao" : null
        },
        "titular" : "Fernando Santana",
        "identificadorFiscal" : "17924199020",
        "valorNominal" : NumberDecimal("4222"),
        "recebimentos" : [ 
            {
                "recebimentoId" : UUID("5c3ce695-a5aa-4b1b-850c-1d0ef92bc43d"),
                "billId" : NumberLong(332111),
                "billItemId" : NumberLong(0),
                "chargeId" : NumberLong(45678123),
                "dataRecebimento" : null,
                "dataVencimento" : ISODate("2020-12-16T18:09:32.837Z"),
                "dataEmissao" : ISODate("2020-12-15T18:09:32.837Z"),
                "dataCancelamento" : null,
                "juros" : NumberDecimal("0"),
                "multa" : NumberDecimal("0"),
                "desconto" : NumberDecimal("0"),
                "divergencia" : NumberDecimal("0"),
                "valorNominal" : NumberDecimal("30"),
                "valorRecebido" : NumberDecimal("0"),
                "formaRecebimento" : "CartaoRecorrencia",
                "situacao" : "EMITIDO",
                "tipo" : "CartaoRecorrencia",
                "cartao" : {
                    "transacao" : {
                        "_id" : NumberLong(11111122),
                        "ocorrencia" : ISODate("2020-12-23T18:09:32.837Z"),
                        "adquirente" : "cielo",
                        "bandeira" : "visa",
                        "nsu" : "0001",
                        "pedido" : null,
                        "valorLiquido" : null,
                        "valorEstornado" : null
                    },
                    "parcelas" : [ 
                        {
                            "numero" : 1,
                            "valorNominal" : "12",
                            "valorRecebido" : null,
                            "valorLiquido" : null,
                            "valorTaxa" : null,
                            "status" : "PAGO",
                            "taxa" : null,
                            "vencimento" : ISODate("2021-01-15T18:09:32.837Z"),
                            "recebimento" : null
                        }                    
                    ]
                }
            }
        ]
    },
    {
        "_id" : ObjectId("5fea2868e1092100015a877f"),
        "id" : UUID("8b62c6ce-46fd-45cf-9451-a52e0a30cd58"),
        "metaData" : {
            "ativo" : true,
            "dataCriacao" : ISODate("2020-12-15T21:13:33.896Z"),
            "dataAtualizacao" : null,
            "dataDelecao" : null
        },
        "titular" : "Bruna de Carvalho",
        "identificadorFiscal" : "20305517082",
        "valorNominal" : NumberDecimal("1245"),
        "recebimentos" : [ 
            {
                "recebimentoId" : UUID("fee30fdd-f559-4eff-8628-7f70f552b98b"),
                "billId" : NumberLong(668811),
                "billItemId" : NumberLong(0),
                "chargeId" : NumberLong(45678123),
                "dataRecebimento" : null,
                "dataVencimento" : ISODate("2020-12-16T18:09:32.837Z"),
                "dataEmissao" : ISODate("2020-12-15T18:09:32.837Z"),
                "dataCancelamento" : null,
                "juros" : NumberDecimal("0"),
                "multa" : NumberDecimal("0"),
                "desconto" : NumberDecimal("0"),
                "divergencia" : NumberDecimal("0"),
                "valorNominal" : NumberDecimal("30"),
                "valorRecebido" : NumberDecimal("0"),
                "formaRecebimento" : "CartaoRecorrencia",
                "situacao" : "EMITIDO",
                "tipo" : "CartaoRecorrencia",
                "cartao" : {
                    "transacao" : {
                        "_id" : NumberLong(11111122),
                        "ocorrencia" : ISODate("2020-12-25T18:09:32.837Z"),
                        "adquirente" : "cielo",
                        "bandeira" : "visa",
                        "nsu" : "0001",
                        "pedido" : null,
                        "valorLiquido" : null,
                        "valorEstornado" : null
                    },
                    "parcelas" : [ 
                        {
                            "numero" : 1,
                            "valorNominal" : "12",
                            "valorRecebido" : null,
                            "valorLiquido" : null,
                            "valorTaxa" : null,
                            "status" : "PAGO",
                            "taxa" : null,
                            "vencimento" : ISODate("2021-01-15T18:09:32.837Z"),
                            "recebimento" : null
                        }                    
                    ]
                }
            }
        ]
    },
    
    {
        "_id" : ObjectId("5fe248a4e1092100015a8773"),
        "id" : UUID("5cb66d3d-ef31-4cf0-809e-5a0f3d25bccb"),
        "metaData" : {
            "ativo" : true,
            "dataCriacao" : ISODate("2020-12-15T21:13:33.896Z"),
            "dataAtualizacao" : null,
            "dataDelecao" : null
        },
        "titular" : "Adriano da Silva Cardoso",
        "identificadorFiscal" : "17578735039",
        "valorNominal" : NumberDecimal("1457"),
        "recebimentos" : [ 
            {
                "recebimentoId" : UUID("34345b97-cc94-4bfd-8031-e00f8184a55d"),
                "billId" : NumberLong(127631),
                "billItemId" : NumberLong(0),
                "chargeId" : NumberLong(45678123),
                "dataRecebimento" : null,
                "dataVencimento" : ISODate("2020-12-16T18:09:32.837Z"),
                "dataEmissao" : ISODate("2020-12-15T18:09:32.837Z"),
                "dataCancelamento" : null,
                "juros" : NumberDecimal("0"),
                "multa" : NumberDecimal("0"),
                "desconto" : NumberDecimal("0"),
                "divergencia" : NumberDecimal("0"),
                "valorNominal" : NumberDecimal("30"),
                "valorRecebido" : NumberDecimal("0"),
                "formaRecebimento" : "CartaoRecorrencia",
                "situacao" : "EMITIDO",
                "tipo" : "CartaoRecorrencia",
                "cartao" : {
                    "transacao" : {
                        "_id" : NumberLong(11111122),
                        "ocorrencia" : ISODate("2020-12-28T18:09:32.837Z"),
                        "adquirente" : "cielo",
                        "bandeira" : "visa",
                        "nsu" : "0001",
                        "pedido" : null,
                        "valorLiquido" : null,
                        "valorEstornado" : null
                    },
                    "parcelas" : [ 
                        {
                            "numero" : 1,
                            "valorNominal" : "12",
                            "valorRecebido" : null,
                            "valorLiquido" : null,
                            "valorTaxa" : null,
                            "status" : "PAGO",
                            "taxa" : null,
                            "vencimento" : ISODate("2021-01-15T18:09:32.837Z"),
                            "recebimento" : null
                        }                    
                    ]
                }
            }
        ]
    },
    {
        "_id" : ObjectId("60072e1afe8d3f9efd203c62"),
        "id" : UUID("be306dec-35ff-4f24-af75-8fe49f6afdb6"),
        "metaData" : {
            "ativo" : true,
            "dataCriacao" : ISODate("2020-12-15T21:13:33.896Z"),
            "dataAtualizacao" : null,
            "dataDelecao" : null
        },
        "titular" : "Adriano da Silva Cardoso",
        "identificadorFiscal" : "19784726092",
        "valorNominal" : NumberDecimal("1457"),
        "recebimentos" : [ 
            {
                "recebimentoId" : UUID("34345b97-cc94-4bfd-8031-e00f8184a55d"),
                "billId" : NumberLong(127631),
                "billItemId" : NumberLong(0),
                "chargeId" : NumberLong(45678123),
                "dataRecebimento" : null,
                "dataVencimento" : ISODate("2020-12-16T18:09:32.837Z"),
                "dataEmissao" : ISODate("2020-12-15T18:09:32.837Z"),
                "dataCancelamento" : null,
                "juros" : NumberDecimal("0"),
                "multa" : NumberDecimal("0"),
                "desconto" : NumberDecimal("0"),
                "divergencia" : NumberDecimal("0"),
                "valorNominal" : NumberDecimal("30"),
                "valorRecebido" : NumberDecimal("0"),
                "formaRecebimento" : "CartaoRecorrencia",
                "situacao" : "REPROVADO_GATEWAY",
                "tipo" : "CartaoRecorrencia",
                "cartao" : {
                    "transacao" : {
                        "_id" : NumberLong(11111122),
                        "ocorrencia" : ISODate("2020-12-28T18:09:32.837Z"),
                        "adquirente" : "cielo",
                        "bandeira" : "visa",
                        "nsu" : "0001",
                        "pedido" : null,
                        "valorLiquido" : null,
                        "valorEstornado" : null
                    },
                    "parcelas" : [ 
                        {
                            "numero" : 1.0,
                            "valorNominal" : "12",
                            "valorRecebido" : null,
                            "valorLiquido" : null,
                            "valorTaxa" : null,
                            "status" : "PAGO",
                            "taxa" : null,
                            "vencimento" : ISODate("2021-01-15T18:09:32.837Z"),
                            "recebimento" : null
                        }
                    ]
                }
            }
        ]
        },
        {
            "_id": ObjectId("601858c7c728d400019b7a06"),
            "id": UUID("6e858a2d-24e0-4063-ae96-63e1ec800a2f"),
            "metaData": {
                "ativo": true,
                "dataCriacao": ISODate("2021-02-01T19:38:47.365Z"),
                "dataAtualizacao": null,
                "dataDelecao": null
            },
            "titular": "DEIVID OLIVEIRA DE ARAUJO",
            "identificadorFiscal": "73376922187",
            "valorNominal": NumberDecimal("955.19"),
            "recebimentos": [
                {
                    "recebimentoId": UUID("c1467897-9b1d-4b37-bea6-5025a73264f3"),
                    "billId": NumberLong(98500346),
                    "billItemId": NumberLong(119564851),
                    "chargeId": NumberLong(98853955),
                    "dataRecebimento": null,
                    "dataVencimento": ISODate("2021-01-26T02:59:59.000Z"),
                    "dataEmissao": ISODate("2021-01-25T21:45:58.000Z"),
                    "dataCancelamento": null,
                    "juros": NumberDecimal("0"),
                    "multa": NumberDecimal("0"),
                    "desconto": NumberDecimal("0"),
                    "divergencia": NumberDecimal("0"),
                    "valorNominal": NumberDecimal("955.19"),
                    "valorRecebido": NumberDecimal("0"),
                    "formaRecebimento": "CartaoExtra",
                    "situacao": "PAGO",
                    "divergenciaAssinaturas": null,
                    "tipo": "ExtraReserva",
                    "cartao": {
                        "transacao": {
                            "_id": NumberLong(171716540),
                            "ocorrencia": ISODate("2021-01-25T21:45:58.000Z"),
                            "adquirente": null,
                            "bandeira": "MasterCard",
                            "cartaoUltimosDigitos": null,
                            "cartaoValidade": null,
                            "nsu": "000000000069007",
                            "pedido": "CA7332501211846746",
                            "valorLiquido": null,
                            "valorEstornado": null
                        },
                        "parcelas": [
                            {
                                "numero": 1.0,
                                "valorNominal": NumberDecimal("191.03"),
                                "valorTotal": null,
                                "valorLiquido": null,
                                "valorTaxa": null,
                                "percentualTaxa": null,
                                "status": "PAGO",
                                "banco": null,
                                "agencia": null,
                                "conta": null,
                                "dataVencimento": ISODate("2021-02-24T21:45:58.000Z"),
                                "dataRecebimento": null
                            },
                            {
                                "numero": 2.0,
                                "valorNominal": NumberDecimal("191.03"),
                                "valorTotal": null,
                                "valorLiquido": null,
                                "valorTaxa": null,
                                "percentualTaxa": null,
                                "status": "PAGO",
                                "banco": null,
                                "agencia": null,
                                "conta": null,
                                "dataVencimento": ISODate("2021-03-26T21:45:58.000Z"),
                                "dataRecebimento": null
                            },
                            {
                                "numero": 3.0,
                                "valorNominal": NumberDecimal("191.03"),
                                "valorTotal": null,
                                "valorLiquido": null,
                                "valorTaxa": null,
                                "percentualTaxa": null,
                                "status": "PAGO",
                                "banco": null,
                                "agencia": null,
                                "conta": null,
                                "dataVencimento": ISODate("2021-04-25T21:45:58.000Z"),
                                "dataRecebimento": null
                            },
                            {
                                "numero": 4.0,
                                "valorNominal": NumberDecimal("191.03"),
                                "valorTotal": null,
                                "valorLiquido": null,
                                "valorTaxa": null,
                                "percentualTaxa": null,
                                "status": "PAGO",
                                "banco": null,
                                "agencia": null,
                                "conta": null,
                                "dataVencimento": ISODate("2021-05-25T21:45:58.000Z"),
                                "dataRecebimento": null
                            },
                            {
                                "numero": 5.0,
                                "valorNominal": NumberDecimal("191.07"),
                                "valorTotal": null,
                                "valorLiquido": null,
                                "valorTaxa": null,
                                "percentualTaxa": null,
                                "status": "PAGO",
                                "banco": null,
                                "agencia": null,
                                "conta": null,
                                "dataVencimento": ISODate("2021-06-24T21:45:58.000Z"),
                                "dataRecebimento": null
                            }
                        ]
                    }
                }
            ]
        }, {
            "_id": ObjectId("601858c8c728d400019b7a07"),
            "id": UUID("561fd55c-9744-4f5e-94a9-49e79541b33d"),
            "metaData": {
                "ativo": true,
                "dataCriacao": ISODate("2021-02-01T19:38:48.115Z"),
                "dataAtualizacao": null,
                "dataDelecao": null
            },
            "titular": "EDILMA ALVES OLIVEIRA ROCHA",
            "identificadorFiscal": "14803990867",
            "valorNominal": NumberDecimal("0.0"),
            "recebimentos": [
                {
                    "recebimentoId": UUID("58e37417-1b5e-4579-80d3-95d04d5a40cc"),
                    "billId": NumberLong(98540681),
                    "billItemId": NumberLong(119616422),
                    "chargeId": NumberLong(98897667),
                    "dataRecebimento": null,
                    "dataVencimento": ISODate("2021-01-27T02:59:59.000Z"),
                    "dataEmissao": ISODate("2021-01-26T12:30:46.000Z"),
                    "dataCancelamento": null,
                    "juros": NumberDecimal("0"),
                    "multa": NumberDecimal("0"),
                    "desconto": NumberDecimal("0"),
                    "divergencia": NumberDecimal("0"),
                    "valorNominal": NumberDecimal("0.0"),
                    "valorRecebido": NumberDecimal("0"),
                    "formaRecebimento": "CartaoExtra",
                    "situacao": "ESTORNO",
                    "divergenciaAssinaturas": null,
                    "tipo": "ExtraReserva",
                    "cartao": {
                        "transacao": {
                            "_id": NumberLong(171788229),
                            "ocorrencia": ISODate("2021-01-26T12:30:46.000Z"),
                            "adquirente": null,
                            "bandeira": "MasterCard",
                            "cartaoUltimosDigitos": null,
                            "cartaoValidade": null,
                            "nsu": "000000000075023",
                            "pedido": null,
                            "valorLiquido": null,
                            "valorEstornado": null
                        },
                        "parcelas": []
                    }
                }
            ]
        }, {
            "_id": ObjectId("601858c8c728d400019b7a08"),
            "id": UUID("3ed0cb7d-054b-44f6-9cc6-ff3d8a7a35be"),
            "metaData": {
                "ativo": true,
                "dataCriacao": ISODate("2021-02-01T19:38:48.861Z"),
                "dataAtualizacao": null,
                "dataDelecao": null
            },
            "titular": "EDILMA ALVES OLIVEIRA ROCHA",
            "identificadorFiscal": "14803990867",
            "valorNominal": NumberDecimal("0.0"),
            "recebimentos": [
                {
                    "recebimentoId": UUID("c16ef1f0-7382-4a35-b03d-e4ea2de58a9a"),
                    "billId": NumberLong(98540784),
                    "billItemId": NumberLong(119616552),
                    "chargeId": NumberLong(98897799),
                    "dataRecebimento": null,
                    "dataVencimento": ISODate("2021-01-27T02:59:59.000Z"),
                    "dataEmissao": ISODate("2021-01-26T12:31:25.000Z"),
                    "dataCancelamento": null,
                    "juros": NumberDecimal("0"),
                    "multa": NumberDecimal("0"),
                    "desconto": NumberDecimal("0"),
                    "divergencia": NumberDecimal("0"),
                    "valorNominal": NumberDecimal("0.0"),
                    "valorRecebido": NumberDecimal("0"),
                    "formaRecebimento": "CartaoExtra",
                    "situacao": "ESTORNO",
                    "divergenciaAssinaturas": null,
                    "tipo": "ExtraReserva",
                    "cartao": {
                        "transacao": {
                            "_id": NumberLong(171788630),
                            "ocorrencia": ISODate("2021-01-26T12:31:25.000Z"),
                            "adquirente": null,
                            "bandeira": "MasterCard",
                            "cartaoUltimosDigitos": null,
                            "cartaoValidade": null,
                            "nsu": "000000000076007",
                            "pedido": null,
                            "valorLiquido": null,
                            "valorEstornado": null
                        },
                        "parcelas": []
                    }
                }
            ]
        }, {
            "_id": ObjectId("601858c9c728d400019b7a09"),
            "id": UUID("73b03c8c-8ba1-4417-9ad3-b479471fa8a5"),
            "metaData": {
                "ativo": true,
                "dataCriacao": ISODate("2021-02-01T19:38:49.746Z"),
                "dataAtualizacao": null,
                "dataDelecao": null
            },
            "titular": "EDILMA ALVES OLIVEIRA ROCHA",
            "identificadorFiscal": "14803990867",
            "valorNominal": NumberDecimal("0.0"),
            "recebimentos": [
                {
                    "recebimentoId": UUID("f2a6d536-a4c1-472f-8d8d-20d93208ca8e"),
                    "billId": NumberLong(98541265),
                    "billItemId": NumberLong(119617189),
                    "chargeId": NumberLong(98898281),
                    "dataRecebimento": null,
                    "dataVencimento": ISODate("2021-01-27T02:59:59.000Z"),
                    "dataEmissao": ISODate("2021-01-26T12:33:26.000Z"),
                    "dataCancelamento": null,
                    "juros": NumberDecimal("0"),
                    "multa": NumberDecimal("0"),
                    "desconto": NumberDecimal("0"),
                    "divergencia": NumberDecimal("0"),
                    "valorNominal": NumberDecimal("0.0"),
                    "valorRecebido": NumberDecimal("0"),
                    "formaRecebimento": "CartaoExtra",
                    "situacao": "ESTORNO",
                    "divergenciaAssinaturas": null,
                    "tipo": "ExtraReserva",
                    "cartao": {
                        "transacao": {
                            "_id": NumberLong(171789796),
                            "ocorrencia": ISODate("2021-01-26T12:33:26.000Z"),
                            "adquirente": null,
                            "bandeira": "Visa",
                            "cartaoUltimosDigitos": null,
                            "cartaoValidade": null,
                            "nsu": "000000000076009",
                            "pedido": null,
                            "valorLiquido": null,
                            "valorEstornado": null
                        },
                        "parcelas": []
                    }
                }
            ]
        }, {
            "_id": ObjectId("601858cac728d400019b7a0a"),
            "id": UUID("dbae8c64-d39f-4010-9aab-d0bc948e1f9c"),
            "metaData": {
                "ativo": true,
                "dataCriacao": ISODate("2021-02-01T19:38:50.602Z"),
                "dataAtualizacao": null,
                "dataDelecao": null
            },
            "titular": "FERNANDO BATISTA DA ROCHA",
            "identificadorFiscal": "36242980894",
            "valorNominal": NumberDecimal("345.37"),
            "recebimentos": [
                {
                    "recebimentoId": UUID("04f82fe3-125a-4851-a1f4-bbb365735028"),
                    "billId": NumberLong(98602977),
                    "billItemId": NumberLong(119694357),
                    "chargeId": NumberLong(98994654),
                    "dataRecebimento": null,
                    "dataVencimento": ISODate("2021-01-27T02:59:59.000Z"),
                    "dataEmissao": ISODate("2021-01-26T22:26:38.000Z"),
                    "dataCancelamento": null,
                    "juros": NumberDecimal("0"),
                    "multa": NumberDecimal("0"),
                    "desconto": NumberDecimal("0"),
                    "divergencia": NumberDecimal("0"),
                    "valorNominal": NumberDecimal("345.37"),
                    "valorRecebido": NumberDecimal("0"),
                    "formaRecebimento": "CartaoExtra",
                    "situacao": "PAGO",
                    "divergenciaAssinaturas": null,
                    "tipo": "ExtraReserva",
                    "cartao": {
                        "transacao": {
                            "_id": NumberLong(171956013),
                            "ocorrencia": ISODate("2021-01-26T22:26:38.000Z"),
                            "adquirente": null,
                            "bandeira": "Visa",
                            "cartaoUltimosDigitos": null,
                            "cartaoValidade": null,
                            "nsu": "000000000069011",
                            "pedido": "CA3622601211926710",
                            "valorLiquido": null,
                            "valorEstornado": null
                        },
                        "parcelas": [
                            {
                                "numero": 1.0,
                                "valorNominal": NumberDecimal("115.12"),
                                "valorTotal": null,
                                "valorLiquido": null,
                                "valorTaxa": null,
                                "percentualTaxa": null,
                                "status": "PAGO",
                                "banco": null,
                                "agencia": null,
                                "conta": null,
                                "dataVencimento": ISODate("2021-02-25T22:26:38.000Z"),
                                "dataRecebimento": null
                            },
                            {
                                "numero": 2.0,
                                "valorNominal": NumberDecimal("115.12"),
                                "valorTotal": null,
                                "valorLiquido": null,
                                "valorTaxa": null,
                                "percentualTaxa": null,
                                "status": "PAGO",
                                "banco": null,
                                "agencia": null,
                                "conta": null,
                                "dataVencimento": ISODate("2021-03-27T22:26:38.000Z"),
                                "dataRecebimento": null
                            },
                            {
                                "numero": 3.0,
                                "valorNominal": NumberDecimal("115.13"),
                                "valorTotal": null,
                                "valorLiquido": null,
                                "valorTaxa": null,
                                "percentualTaxa": null,
                                "status": "PAGO",
                                "banco": null,
                                "agencia": null,
                                "conta": null,
                                "dataVencimento": ISODate("2021-04-26T22:26:38.000Z"),
                                "dataRecebimento": null
                            }
                        ]
                    }
                }
            ]
        }, {
            "_id": ObjectId("601858cbc728d400019b7a0b"),
            "id": UUID("536e4886-b264-41f4-aea2-bd02d1063b23"),
            "metaData": {
                "ativo": true,
                "dataCriacao": ISODate("2021-02-01T19:38:51.465Z"),
                "dataAtualizacao": null,
                "dataDelecao": null
            },
            "titular": "EDILMA ALVES OLIVEIRA ROCHA",
            "identificadorFiscal": "14803990867",
            "valorNominal": NumberDecimal("0.0"),
            "recebimentos": [
                {
                    "recebimentoId": UUID("824c69ed-1680-4ffd-bf63-b1f01c97dfe7"),
                    "billId": NumberLong(98652752),
                    "billItemId": NumberLong(119759873),
                    "chargeId": NumberLong(99053857),
                    "dataRecebimento": null,
                    "dataVencimento": ISODate("2021-01-28T02:59:59.000Z"),
                    "dataEmissao": ISODate("2021-01-27T13:25:48.000Z"),
                    "dataCancelamento": null,
                    "juros": NumberDecimal("0"),
                    "multa": NumberDecimal("0"),
                    "desconto": NumberDecimal("0"),
                    "divergencia": NumberDecimal("0"),
                    "valorNominal": NumberDecimal("0.0"),
                    "valorRecebido": NumberDecimal("0"),
                    "formaRecebimento": "CartaoExtra",
                    "situacao": "ESTORNO",
                    "divergenciaAssinaturas": null,
                    "tipo": "ExtraReserva",
                    "cartao": {
                        "transacao": {
                            "_id": NumberLong(172057234),
                            "ocorrencia": ISODate("2021-01-27T13:25:48.000Z"),
                            "adquirente": null,
                            "bandeira": "MasterCard",
                            "cartaoUltimosDigitos": null,
                            "cartaoValidade": null,
                            "nsu": "000000000080001",
                            "pedido": null,
                            "valorLiquido": null,
                            "valorEstornado": null
                        },
                        "parcelas": []
                    }
                }
            ]
        }, {
            "_id": ObjectId("601858ccc728d400019b7a0c"),
            "id": UUID("6b315d5a-585b-4f00-bb90-6a140ed3dfb1"),
            "metaData": {
                "ativo": true,
                "dataCriacao": ISODate("2021-02-01T19:38:52.148Z"),
                "dataAtualizacao": null,
                "dataDelecao": null
            },
            "titular": "EDILMA ALVES OLIVEIRA ROCHA",
            "identificadorFiscal": "14803990867",
            "valorNominal": NumberDecimal("0.0"),
            "recebimentos": [
                {
                    "recebimentoId": UUID("7c23a0b1-0b72-43af-b956-bc7f583ce500"),
                    "billId": NumberLong(98652781),
                    "billItemId": NumberLong(119759904),
                    "chargeId": NumberLong(99053908),
                    "dataRecebimento": null,
                    "dataVencimento": ISODate("2021-01-28T02:59:59.000Z"),
                    "dataEmissao": ISODate("2021-01-27T13:26:14.000Z"),
                    "dataCancelamento": null,
                    "juros": NumberDecimal("0"),
                    "multa": NumberDecimal("0"),
                    "desconto": NumberDecimal("0"),
                    "divergencia": NumberDecimal("0"),
                    "valorNominal": NumberDecimal("0.0"),
                    "valorRecebido": NumberDecimal("0"),
                    "formaRecebimento": "CartaoExtra",
                    "situacao": "ESTORNO",
                    "divergenciaAssinaturas": null,
                    "tipo": "ExtraReserva",
                    "cartao": {
                        "transacao": {
                            "_id": NumberLong(172057468),
                            "ocorrencia": ISODate("2021-01-27T13:26:14.000Z"),
                            "adquirente": null,
                            "bandeira": "Visa",
                            "cartaoUltimosDigitos": null,
                            "cartaoValidade": null,
                            "nsu": "000000000080003",
                            "pedido": null,
                            "valorLiquido": null,
                            "valorEstornado": null
                        },
                        "parcelas": []
                    }
                }
            ]
        }, {
            "_id": ObjectId("601858ccc728d400019b7a0d"),
            "id": UUID("b1840d9f-1b4a-4a43-96c3-86782af1ffa0"),
            "metaData": {
                "ativo": true,
                "dataCriacao": ISODate("2021-02-01T19:38:52.970Z"),
                "dataAtualizacao": null,
                "dataDelecao": null
            },
            "titular": "EDILMA ALVES OLIVEIRA ROCHA",
            "identificadorFiscal": "14803990867",
            "valorNominal": NumberDecimal("40.74"),
            "recebimentos": [
                {
                    "recebimentoId": UUID("bccb28bb-e078-4256-8d7d-fdab313481c0"),
                    "billId": NumberLong(98789960),
                    "billItemId": NumberLong(119933149),
                    "chargeId": NumberLong(99244626),
                    "dataRecebimento": null,
                    "dataVencimento": ISODate("2021-01-29T02:59:59.000Z"),
                    "dataEmissao": ISODate("2021-01-28T16:20:53.000Z"),
                    "dataCancelamento": null,
                    "juros": NumberDecimal("0"),
                    "multa": NumberDecimal("0"),
                    "desconto": NumberDecimal("0"),
                    "divergencia": NumberDecimal("0"),
                    "valorNominal": NumberDecimal("40.74"),
                    "valorRecebido": NumberDecimal("0"),
                    "formaRecebimento": "CartaoExtra",
                    "situacao": "PAGO",
                    "divergenciaAssinaturas": null,
                    "tipo": "ExtraReserva",
                    "cartao": {
                        "transacao": {
                            "_id": NumberLong(172392295),
                            "ocorrencia": ISODate("2021-01-28T16:20:53.000Z"),
                            "adquirente": null,
                            "bandeira": "Visa",
                            "cartaoUltimosDigitos": null,
                            "cartaoValidade": null,
                            "nsu": "000000000083005",
                            "pedido": "CA1482801211320A36",
                            "valorLiquido": null,
                            "valorEstornado": null
                        },
                        "parcelas": [
                            {
                                "numero": 1.0,
                                "valorNominal": NumberDecimal("40.74"),
                                "valorTotal": null,
                                "valorLiquido": null,
                                "valorTaxa": null,
                                "percentualTaxa": null,
                                "status": "PAGO",
                                "banco": null,
                                "agencia": null,
                                "conta": null,
                                "dataVencimento": ISODate("2021-02-27T16:20:53.000Z"),
                                "dataRecebimento": null
                            }
                        ]
                    }
                }
            ]
        }, {
            "_id": ObjectId("601858cdc728d400019b7a0e"),
            "id": UUID("2d0aac4a-719c-4cc7-987b-3df2274c30c3"),
            "metaData": {
                "ativo": true,
                "dataCriacao": ISODate("2021-02-01T19:38:53.695Z"),
                "dataAtualizacao": null,
                "dataDelecao": null
            },
            "titular": "INAMARA QUEIROS DE SOUSA",
            "identificadorFiscal": "33462458884",
            "valorNominal": NumberDecimal("60.88"),
            "recebimentos": [
                {
                    "recebimentoId": UUID("8e31b59b-6e8f-4565-a1f1-2bdced9ac4bf"),
                    "billId": NumberLong(98871976),
                    "billItemId": NumberLong(120042162),
                    "chargeId": NumberLong(99366782),
                    "dataRecebimento": null,
                    "dataVencimento": ISODate("2021-01-30T02:59:59.000Z"),
                    "dataEmissao": ISODate("2021-01-29T15:29:49.000Z"),
                    "dataCancelamento": null,
                    "juros": NumberDecimal("0"),
                    "multa": NumberDecimal("0"),
                    "desconto": NumberDecimal("0"),
                    "divergencia": NumberDecimal("0"),
                    "valorNominal": NumberDecimal("60.88"),
                    "valorRecebido": NumberDecimal("0"),
                    "formaRecebimento": "CartaoExtra",
                    "situacao": "PAGO",
                    "divergenciaAssinaturas": null,
                    "tipo": "ExtraReserva",
                    "cartao": {
                        "transacao": {
                            "_id": NumberLong(172600065),
                            "ocorrencia": ISODate("2021-01-29T15:29:49.000Z"),
                            "adquirente": null,
                            "bandeira": "Visa",
                            "cartaoUltimosDigitos": null,
                            "cartaoValidade": null,
                            "nsu": "000000000082009",
                            "pedido": null,
                            "valorLiquido": null,
                            "valorEstornado": null
                        },
                        "parcelas": [
                            {
                                "numero": 1.0,
                                "valorNominal": NumberDecimal("60.88"),
                                "valorTotal": null,
                                "valorLiquido": null,
                                "valorTaxa": null,
                                "percentualTaxa": null,
                                "status": "PAGO",
                                "banco": null,
                                "agencia": null,
                                "conta": null,
                                "dataVencimento": ISODate("2021-02-28T15:29:49.000Z"),
                                "dataRecebimento": null
                            }
                        ]
                    }
                }
            ]
        }, {
            "_id": ObjectId("601858cec728d400019b7a0f"),
            "id": UUID("1746700b-3165-43f6-874f-51674f0bc24a"),
            "metaData": {
                "ativo": true,
                "dataCriacao": ISODate("2021-02-01T19:38:54.401Z"),
                "dataAtualizacao": null,
                "dataDelecao": null
            },
            "titular": "MILANA COSME SILVA",
            "identificadorFiscal": "15332210736",
            "valorNominal": NumberDecimal("83.89"),
            "recebimentos": [
                {
                    "recebimentoId": UUID("77a00e83-a680-4e08-9919-a5d23ce525aa"),
                    "billId": NumberLong(99110086),
                    "billItemId": NumberLong(120365242),
                    "chargeId": NumberLong(99703735),
                    "dataRecebimento": null,
                    "dataVencimento": ISODate("2021-02-02T02:59:59.000Z"),
                    "dataEmissao": ISODate("2021-02-01T14:56:09.000Z"),
                    "dataCancelamento": null,
                    "juros": NumberDecimal("0"),
                    "multa": NumberDecimal("0"),
                    "desconto": NumberDecimal("0"),
                    "divergencia": NumberDecimal("0"),
                    "valorNominal": NumberDecimal("83.89"),
                    "valorRecebido": NumberDecimal("0"),
                    "formaRecebimento": "CartaoExtra",
                    "situacao": "PAGO",
                    "divergenciaAssinaturas": null,
                    "tipo": "ExtraReserva",
                    "cartao": {
                        "transacao": {
                            "_id": NumberLong(173182409),
                            "ocorrencia": ISODate("2021-02-01T14:56:09.000Z"),
                            "adquirente": null,
                            "bandeira": "MasterCard",
                            "cartaoUltimosDigitos": null,
                            "cartaoValidade": null,
                            "nsu": "000000000082011",
                            "pedido": null,
                            "valorLiquido": null,
                            "valorEstornado": null
                        },
                        "parcelas": [
                            {
                                "numero": 1.0,
                                "valorNominal": NumberDecimal("83.89"),
                                "valorTotal": null,
                                "valorLiquido": null,
                                "valorTaxa": null,
                                "percentualTaxa": null,
                                "status": "PAGO",
                                "banco": null,
                                "agencia": null,
                                "conta": null,
                                "dataVencimento": ISODate("2021-03-03T14:56:09.000Z"),
                                "dataRecebimento": null
                            }
                        ]
                    }
                }
            ]
        },
        
{
    "_id" : ObjectId("5fce8f5ef71e5400018d55d3"),
    "id" : UUID("c90315d6-254f-4d24-b529-1de63e12d355"),
    "metaData" : {
        "ativo" : true,
        "dataCriacao" : ISODate("2020-12-07T20:23:58.948Z"),
        "dataAtualizacao" : ISODate("2020-12-08T12:53:50.575Z"),
        "dataDelecao" : null
    },
    "titular" : "Escola Beit Yaacov",
    "identificadorFiscal" : "04224173000144",
    "valorNominal" : NumberDecimal("293"),
    "recebimentos" : [ 
        {
            "recebimentoId" : UUID("4bb2d044-01e7-47cf-b911-ecd28ebbb1ad"),
            "billId" : NumberLong(73156590),
            "billItemId" : NumberLong(87309022),
            "chargeId" : NumberLong(71220302),
            "dataRecebimento" : ISODate("2020-06-03T00:00:00.000Z"),
            "dataVencimento" : ISODate("2020-06-03T23:59:59.000Z"),
            "dataEmissao" : ISODate("2020-05-04T13:45:18.000Z"),
            "dataCancelamento" : null,
            "juros" : NumberDecimal("0"),
            "multa" : NumberDecimal("0"),
            "desconto" : null,
            "divergencia" : NumberDecimal("-0.0"),
            "valorNominal" : NumberDecimal("293"),
            "valorRecebido" : NumberDecimal("293.0"),
            "formaRecebimento" : "BOLETO",
            "situacao" : "RECEBIDO"
        }
    ]
},{
    "_id" : ObjectId("5fce923bf71e5400018d55d9"),
    "id" : UUID("ea549fbb-a478-4d36-b942-3f58aa2c9760"),
    "metaData" : {
        "ativo" : true,
        "dataCriacao" : ISODate("2020-12-07T20:36:11.347Z"),
        "dataAtualizacao" : ISODate("2020-12-08T12:55:04.399Z"),
        "dataDelecao" : null
    },
    "titular" : "Escola Beit Yaacov",
    "identificadorFiscal" : "04224173000144",
    "valorNominal" : NumberDecimal("293"),
    "recebimentos" : [ 
        {
            "recebimentoId" : UUID("cae9e5a6-ecdd-4d92-9d9b-34cb759709e8"),
            "billId" : NumberLong(75792362),
            "billItemId" : NumberLong(90630887),
            "chargeId" : NumberLong(73835751),
            "dataRecebimento" : ISODate("2020-07-02T00:00:00.000Z"),
            "dataVencimento" : ISODate("2020-07-01T23:59:59.000Z"),
            "dataEmissao" : ISODate("2020-06-01T10:48:19.000Z"),
            "dataCancelamento" : null,
            "juros" : NumberDecimal("0"),
            "multa" : NumberDecimal("0"),
            "desconto" : null,
            "divergencia" : NumberDecimal("-0.0"),
            "valorNominal" : NumberDecimal("293"),
            "valorRecebido" : NumberDecimal("293.0"),
            "formaRecebimento" : "BOLETO",
            "situacao" : "RECEBIDO"
        }
    ]
},{
    "_id" : ObjectId("5fce9454f71e5400018d55de"),
    "id" : UUID("809ab297-147c-4121-b3c5-d8623baa9072"),
    "metaData" : {
        "ativo" : true,
        "dataCriacao" : ISODate("2020-12-07T20:45:08.025Z"),
        "dataAtualizacao" : ISODate("2020-12-08T12:55:32.735Z"),
        "dataDelecao" : null
    },
    "titular" : "Escola Beit Yaacov",
    "identificadorFiscal" : "04224173000144",
    "valorNominal" : NumberDecimal("293"),
    "recebimentos" : [ 
        {
            "recebimentoId" : UUID("6bb8db5c-b111-459b-af77-88f619070f50"),
            "billId" : NumberLong(78519140),
            "billItemId" : NumberLong(94066380),
            "chargeId" : NumberLong(76575378),
            "dataRecebimento" : ISODate("2020-08-03T00:00:00.000Z"),
            "dataVencimento" : ISODate("2020-07-31T00:00:00.000Z"),
            "dataEmissao" : ISODate("2020-07-01T00:00:00.000Z"),
            "dataCancelamento" : null,
            "juros" : NumberDecimal("0"),
            "multa" : NumberDecimal("0"),
            "desconto" : null,
            "divergencia" : NumberDecimal("-0.0"),
            "valorNominal" : NumberDecimal("293"),
            "valorRecebido" : NumberDecimal("293.0"),
            "formaRecebimento" : "BOLETO",
            "situacao" : "RECEBIDO"
        }
    ]
},{
    "_id" : ObjectId("5fce964ef71e5400018d55e3"),
    "id" : UUID("14566bfe-31f6-4148-91bb-1b9ff6b42149"),
    "metaData" : {
        "ativo" : true,
        "dataCriacao" : ISODate("2020-12-07T20:53:34.648Z"),
        "dataAtualizacao" : ISODate("2020-12-08T12:55:38.758Z"),
        "dataDelecao" : null
    },
    "titular" : "Escola Beit Yaacov",
    "identificadorFiscal" : "04224173000144",
    "valorNominal" : NumberDecimal("293"),
    "recebimentos" : [ 
        {
            "recebimentoId" : UUID("e6d24e59-0b82-4dd3-a239-41a8b8998195"),
            "billId" : NumberLong(81330573),
            "billItemId" : NumberLong(97658435),
            "chargeId" : NumberLong(79465319),
            "dataRecebimento" : ISODate("2020-09-03T00:00:00.000Z"),
            "dataVencimento" : ISODate("2020-09-02T23:59:59.000Z"),
            "dataEmissao" : ISODate("2020-08-03T00:00:00.000Z"),
            "dataCancelamento" : null,
            "juros" : NumberDecimal("0"),
            "multa" : NumberDecimal("0"),
            "desconto" : null,
            "divergencia" : NumberDecimal("-0.0"),
            "valorNominal" : NumberDecimal("293"),
            "valorRecebido" : NumberDecimal("293.0"),
            "formaRecebimento" : "BOLETO",
            "situacao" : "RECEBIDO"
        }
    ]
},{
    "_id" : ObjectId("5fce9f59bad08c0001b24e92"),
    "id" : UUID("ff5feebf-6856-431a-bc4d-99f9a2133386"),
    "metaData" : {
        "ativo" : true,
        "dataCriacao" : ISODate("2020-12-07T21:32:09.474Z"),
        "dataAtualizacao" : ISODate("2020-12-08T12:55:46.079Z"),
        "dataDelecao" : null
    },
    "titular" : "Escola Beit Yaacov",
    "identificadorFiscal" : "04224173000144",
    "valorNominal" : NumberDecimal("293"),
    "recebimentos" : [ 
        {
            "recebimentoId" : UUID("0c2a1b8c-d1a9-41b5-8edd-6c9b1dc82eaa"),
            "billId" : NumberLong(84033030),
            "billItemId" : NumberLong(101029652),
            "chargeId" : NumberLong(82259373),
            "dataRecebimento" : ISODate("2020-10-01T00:00:00.000Z"),
            "dataVencimento" : ISODate("2020-10-01T00:00:00.000Z"),
            "dataEmissao" : ISODate("2020-09-01T00:00:00.000Z"),
            "dataCancelamento" : null,
            "juros" : NumberDecimal("0"),
            "multa" : NumberDecimal("0"),
            "desconto" : null,
            "divergencia" : NumberDecimal("-0.0"),
            "valorNominal" : NumberDecimal("293"),
            "valorRecebido" : NumberDecimal("293.0"),
            "formaRecebimento" : "BOLETO",
            "situacao" : "RECEBIDO"
        }
    ]
},{
    "_id" : ObjectId("5fcea2eebad08c0001b24e9e"),
    "id" : UUID("6975492e-a2e5-4a5e-a1d8-39ad834305c3"),
    "metaData" : {
        "ativo" : true,
        "dataCriacao" : ISODate("2020-12-07T21:47:26.257Z"),
        "dataAtualizacao" : ISODate("2020-12-08T12:55:52.829Z"),
        "dataDelecao" : null
    },
    "titular" : "Escola Beit Yaacov",
    "identificadorFiscal" : "04224173000144",
    "valorNominal" : NumberDecimal("293"),
    "recebimentos" : [ 
        {
            "recebimentoId" : UUID("a66f763d-c3d5-43a1-b07d-ea9dd74c98d1"),
            "billId" : NumberLong(87218388),
            "billItemId" : NumberLong(104963399),
            "chargeId" : NumberLong(85545863),
            "dataRecebimento" : ISODate("2020-11-03T00:00:00.000Z"),
            "dataVencimento" : ISODate("2020-10-31T00:00:00.000Z"),
            "dataEmissao" : ISODate("2020-10-01T00:00:00.000Z"),
            "dataCancelamento" : null,
            "juros" : NumberDecimal("0"),
            "multa" : NumberDecimal("0"),
            "desconto" : null,
            "divergencia" : NumberDecimal("-0.0"),
            "valorNominal" : NumberDecimal("293"),
            "valorRecebido" : NumberDecimal("293.0"),
            "formaRecebimento" : "BOLETO",
            "situacao" : "RECEBIDO"
        }
    ]
},{
    "_id" : ObjectId("5fcea4aebad08c0001b24eaa"),
    "id" : UUID("406a93d7-711b-419a-abcd-62588744e78c"),
    "metaData" : {
        "ativo" : true,
        "dataCriacao" : ISODate("2020-12-07T21:54:54.965Z"),
        "dataAtualizacao" : ISODate("2020-12-21T19:05:22.587Z"),
        "dataDelecao" : null
    },
    "titular" : "Escola Beit Yaacov",
    "identificadorFiscal" : "04224173000144",
    "valorNominal" : NumberDecimal("293"),
    "recebimentos" : [ 
        {
            "recebimentoId" : UUID("db08a443-5417-4644-98f1-cff31982ccc8"),
            "billId" : NumberLong(90423790),
            "billItemId" : NumberLong(108987770),
            "chargeId" : NumberLong(89044990),
            "dataRecebimento" : ISODate("2020-12-04T03:00:00.000Z"),
            "dataVencimento" : ISODate("2020-12-03T00:00:00.000Z"),
            "dataEmissao" : ISODate("2020-11-03T00:00:00.000Z"),
            "dataCancelamento" : null,
            "juros" : NumberDecimal("0"),
            "multa" : NumberDecimal("0"),
            "desconto" : null,
            "divergencia" : NumberDecimal("-5.95"),
            "valorNominal" : NumberDecimal("293"),
            "valorRecebido" : NumberDecimal("293.0"),
            "formaRecebimento" : "BOLETO",
            "situacao" : "RECEBIDO"
        }
    ]
},{
    "_id" : ObjectId("5fcea8e3bad08c0001b24eb4"),
    "id" : UUID("0aece89c-b727-4086-85c8-25fd8e44f41c"),
    "metaData" : {
        "ativo" : true,
        "dataCriacao" : ISODate("2020-12-07T22:12:51.963Z"),
        "dataAtualizacao" : ISODate("2021-01-08T20:46:26.287Z"),
        "dataDelecao" : null
    },
    "titular" : "Escola Beit Yaacov",
    "identificadorFiscal" : "04224173000144",
    "valorNominal" : NumberDecimal("293"),
    "recebimentos" : [ 
        {
            "recebimentoId" : UUID("3233ddde-2d52-4483-a633-3d225ef51ece"),
            "billId" : NumberLong(93240198),
            "billItemId" : NumberLong(112756393),
            "chargeId" : NumberLong(92340513),
            "dataRecebimento" : ISODate("2020-12-31T03:00:00.000Z"),
            "dataVencimento" : ISODate("2020-12-30T00:00:00.000Z"),
            "dataEmissao" : ISODate("2020-12-01T00:00:00.000Z"),
            "dataCancelamento" : null,
            "juros" : NumberDecimal("0"),
            "multa" : NumberDecimal("0"),
            "desconto" : null,
            "divergencia" : NumberDecimal("-5.95"),
            "valorNominal" : NumberDecimal("293"),
            "valorRecebido" : NumberDecimal("293.0"),
            "formaRecebimento" : "BOLETO",
            "situacao" : "RECEBIDO"
        }
    ]
},{
    "_id" : ObjectId("5fceb6cfbad08c0001b24ec5"),
    "id" : UUID("13e96eb4-df56-49b0-a639-09772e3a2b33"),
    "metaData" : {
        "ativo" : true,
        "dataCriacao" : ISODate("2020-12-07T23:12:15.630Z"),
        "dataAtualizacao" : ISODate("2020-12-08T12:56:20.480Z"),
        "dataDelecao" : null
    },
    "titular" : "Escola Beit Yaacov",
    "identificadorFiscal" : "04224173000144",
    "valorNominal" : NumberDecimal("293"),
    "recebimentos" : [ 
        {
            "recebimentoId" : UUID("3274813d-4593-45f2-9bae-332fbacce0e5"),
            "billId" : NumberLong(67393252),
            "billItemId" : NumberLong(80284070),
            "chargeId" : NumberLong(65581635),
            "dataRecebimento" : ISODate("2020-04-02T00:00:00.000Z"),
            "dataVencimento" : ISODate("2020-04-01T23:59:59.000Z"),
            "dataEmissao" : ISODate("2020-03-02T17:44:30.000Z"),
            "dataCancelamento" : null,
            "juros" : NumberDecimal("0"),
            "multa" : NumberDecimal("0"),
            "desconto" : null,
            "divergencia" : NumberDecimal("-0.0"),
            "valorNominal" : NumberDecimal("293"),
            "valorRecebido" : NumberDecimal("293.0"),
            "formaRecebimento" : "BOLETO",
            "situacao" : "RECEBIDO"
        }
    ]
},{
    "_id" : ObjectId("5fceb81cbad08c0001b24ecb"),
    "id" : UUID("e2e9d960-ba4c-4ab7-97c7-cbd69f94eb76"),
    "metaData" : {
        "ativo" : true,
        "dataCriacao" : ISODate("2020-12-07T23:17:48.999Z"),
        "dataAtualizacao" : ISODate("2020-12-08T12:56:28.034Z"),
        "dataDelecao" : null
    },
    "titular" : "Escola Beit Yaacov",
    "identificadorFiscal" : "04224173000144",
    "valorNominal" : NumberDecimal("293"),
    "recebimentos" : [ 
        {
            "recebimentoId" : UUID("f4773711-a74f-4ed8-93ca-57fc96713e22"),
            "billId" : NumberLong(74183067),
            "billItemId" : NumberLong(88586142),
            "chargeId" : NumberLong(72243355),
            "dataRecebimento" : ISODate("2020-06-03T00:00:00.000Z"),
            "dataVencimento" : ISODate("2020-06-03T23:59:59.000Z"),
            "dataEmissao" : ISODate("2020-05-13T16:23:10.000Z"),
            "dataCancelamento" : null,
            "juros" : NumberDecimal("0"),
            "multa" : NumberDecimal("0"),
            "desconto" : null,
            "divergencia" : NumberDecimal("-0.0"),
            "valorNominal" : NumberDecimal("293"),
            "valorRecebido" : NumberDecimal("293.0"),
            "formaRecebimento" : "BOLETO",
            "situacao" : "RECEBIDO"
        }
    ]
},{
    "_id" : ObjectId("5ff35885bb7753000124b608"),
    "id" : UUID("cc30c6b8-3489-4a3a-a54d-9479e4a1eb9c"),
    "metaData" : {
        "ativo" : true,
        "dataCriacao" : ISODate("2021-01-04T18:03:49.839Z"),
        "dataAtualizacao" : ISODate("2021-02-04T20:37:30.901Z"),
        "dataDelecao" : null
    },
    "titular" : "Escola Beit Yaacov",
    "identificadorFiscal" : "04224173000144",
    "valorNominal" : NumberDecimal("410"),
    "recebimentos" : [ 
        {
            "recebimentoId" : UUID("23f3934b-6ae0-4329-9702-3a62174170e2"),
            "billId" : NumberLong(96426304),
            "billItemId" : NumberLong(116880691),
            "chargeId" : NumberLong(96243710),
            "dataRecebimento" : ISODate("2021-02-01T03:00:00.000Z"),
            "dataVencimento" : ISODate("2021-01-30T03:01:00.000Z"),
            "dataEmissao" : ISODate("2021-01-04T18:04:12.183Z"),
            "dataCancelamento" : null,
            "juros" : NumberDecimal("0"),
            "multa" : NumberDecimal("0"),
            "desconto" : NumberDecimal("0"),
            "divergencia" : NumberDecimal("-8.47"),
            "valorNominal" : NumberDecimal("410"),
            "valorRecebido" : NumberDecimal("410.0"),
            "formaRecebimento" : "BOLETO",
            "situacao" : "RECEBIDO",
            "tipo" : "Assinatura",
            "cartao" : null,
            "divergenciaAssinaturas" : false
        }
    ]
},{
    "_id" : ObjectId("60183ea854069f00018b3a13"),
    "id" : UUID("3d63ffa2-ac6d-49e5-bc2b-aedff793b503"),
    "metaData" : {
        "ativo" : true,
        "dataCriacao" : ISODate("2021-02-01T17:47:20.929Z"),
        "dataAtualizacao" : ISODate("2021-03-08T12:13:28.293Z"),
        "dataDelecao" : null
    },
    "titular" : "Escola Beit Yaacov",
    "identificadorFiscal" : "04224173000144",
    "valorNominal" : NumberDecimal("410"),
    "recebimentos" : [ 
        {
            "recebimentoId" : UUID("62b472d9-2dfc-4dba-9157-d84bce7051ba"),
            "billId" : NumberLong(99121864),
            "billItemId" : NumberLong(120380330),
            "chargeId" : NumberLong(99723241),
            "dataRecebimento" : ISODate("2021-03-04T03:00:00.000Z"),
            "dataVencimento" : ISODate("2021-03-03T03:01:00.000Z"),
            "dataEmissao" : ISODate("2021-02-01T17:47:39.904Z"),
            "dataCancelamento" : null,
            "juros" : NumberDecimal("0"),
            "multa" : NumberDecimal("0"),
            "desconto" : NumberDecimal("0"),
            "divergencia" : NumberDecimal("-8.33"),
            "valorNominal" : NumberDecimal("410"),
            "valorRecebido" : NumberDecimal("410.0"),
            "formaRecebimento" : "BOLETO",
            "situacao" : "RECEBIDO",
            "divergenciaAssinaturas" : false,
            "tipo" : "Assinatura",
            "cartao" : null
        }
    ]
},{
    "_id" : ObjectId("603e3b20fcf5170001f8ec53"),
    "id" : UUID("3e0aaf80-310c-411f-a560-f5e95cab10e5"),
    "metaData" : {
        "ativo" : true,
        "dataCriacao" : ISODate("2021-03-02T13:18:24.541Z"),
        "dataAtualizacao" : ISODate("2021-04-09T18:26:49.107Z"),
        "dataDelecao" : null
    },
    "titular" : "Escola Beit Yaacov",
    "identificadorFiscal" : "04224173000144",
    "valorNominal" : NumberDecimal("410"),
    "recebimentos" : [ 
        {
            "recebimentoId" : UUID("cace0319-b742-4ed4-bce6-9ae26cbcf077"),
            "billId" : NumberLong(102241136),
            "billItemId" : NumberLong(124385651),
            "chargeId" : NumberLong(104101400),
            "dataRecebimento" : ISODate("2021-03-31T03:00:00.000Z"),
            "dataVencimento" : ISODate("2021-03-30T03:01:00.000Z"),
            "dataEmissao" : ISODate("2021-03-02T13:18:35.077Z"),
            "dataCancelamento" : null,
            "juros" : NumberDecimal("0"),
            "multa" : NumberDecimal("0"),
            "desconto" : NumberDecimal("0"),
            "divergencia" : NumberDecimal("-8.33"),
            "valorNominal" : NumberDecimal("410"),
            "valorRecebido" : NumberDecimal("410.0"),
            "formaRecebimento" : "BOLETO",
            "situacao" : "RECEBIDO",
            "divergenciaAssinaturas" : false,
            "tipo" : "Assinatura",
            "cartao" : null
        }
    ]
},{
    "_id" : ObjectId("6065d4bb2cbd190001ff25ac"),
    "id" : UUID("fa35b146-b9e9-4cf9-a449-f30fe7670118"),
    "metaData" : {
        "ativo" : true,
        "dataCriacao" : ISODate("2021-04-01T14:12:11.378Z"),
        "dataAtualizacao" : ISODate("2021-04-01T14:12:29.409Z"),
        "dataDelecao" : null
    },
    "titular" : "ESCOLA BEIT YAACOV",
    "identificadorFiscal" : "04224173000144",
    "valorNominal" : NumberDecimal("410"),
    "recebimentos" : [ 
        {
            "recebimentoId" : UUID("76e7f223-ee65-4780-9971-df5f42bae708"),
            "billId" : NumberLong(105246048),
            "billItemId" : NumberLong(128278703),
            "chargeId" : NumberLong(108633411),
            "dataRecebimento" : null,
            "dataVencimento" : ISODate("2021-04-30T03:01:00.000Z"),
            "dataEmissao" : ISODate("2021-04-01T14:12:29.392Z"),
            "dataCancelamento" : null,
            "juros" : NumberDecimal("0"),
            "multa" : NumberDecimal("0"),
            "desconto" : NumberDecimal("0"),
            "divergencia" : NumberDecimal("0"),
            "valorNominal" : NumberDecimal("410"),
            "valorRecebido" : NumberDecimal("0"),
            "formaRecebimento" : "BOLETO",
            "situacao" : "EMITIDO",
            "divergenciaAssinaturas" : null,
            "tipo" : "Assinatura",
            "cartao" : null
        }
    ]
},
{
    "_id" : ObjectId("5fce9b3fbad08c0001b24e86"),
    "id" : UUID("be511c5f-0e5d-4c8b-bf19-0d41bfc10b3b"),
    "metaData" : {
        "ativo" : true,
        "dataCriacao" : ISODate("2020-12-07T21:14:39.410Z"),
        "dataAtualizacao" : ISODate("2020-12-08T13:51:51.550Z"),
        "dataDelecao" : null
    },
    "titular" : "RDC FERIAS, VIAGENS E TURISMO LTDA",
    "identificadorFiscal" : "66939570000150",
    "valorNominal" : NumberDecimal("336"),
    "recebimentos" : [ 
        {
            "recebimentoId" : UUID("66d1bbb8-65be-4242-b54a-ff9d397e501f"),
            "billId" : NumberLong(82634623),
            "billItemId" : NumberLong(99309025),
            "chargeId" : NumberLong(80848177),
            "dataRecebimento" : ISODate("2020-08-31T00:00:00.000Z"),
            "dataVencimento" : ISODate("2020-09-02T00:00:00.000Z"),
            "dataEmissao" : ISODate("2020-08-17T00:00:00.000Z"),
            "dataCancelamento" : null,
            "juros" : NumberDecimal("0"),
            "multa" : NumberDecimal("0"),
            "desconto" : null,
            "divergencia" : NumberDecimal("-0.0"),
            "valorNominal" : NumberDecimal("336"),
            "valorRecebido" : NumberDecimal("336.0"),
            "formaRecebimento" : "BOLETO",
            "situacao" : "RECEBIDO"
        }
    ]
},{
    "_id" : ObjectId("5fce9b7bbad08c0001b24e87"),
    "id" : UUID("8f717257-7549-4d5d-a94b-bf565244b06e"),
    "metaData" : {
        "ativo" : true,
        "dataCriacao" : ISODate("2020-12-07T21:15:39.484Z"),
        "dataAtualizacao" : ISODate("2020-12-08T13:52:16.032Z"),
        "dataDelecao" : null
    },
    "titular" : "RDC FERIAS, VIAGENS E TURISMO LTDA",
    "identificadorFiscal" : "66939570000150",
    "valorNominal" : NumberDecimal("336"),
    "recebimentos" : [ 
        {
            "recebimentoId" : UUID("e44226fd-ddc9-4854-84c8-a7bbe6869c77"),
            "billId" : NumberLong(82634748),
            "billItemId" : NumberLong(99309179),
            "chargeId" : NumberLong(80848305),
            "dataRecebimento" : ISODate("2020-08-31T00:00:00.000Z"),
            "dataVencimento" : ISODate("2020-09-02T00:00:00.000Z"),
            "dataEmissao" : ISODate("2020-08-17T00:00:00.000Z"),
            "dataCancelamento" : null,
            "juros" : NumberDecimal("0"),
            "multa" : NumberDecimal("0"),
            "desconto" : null,
            "divergencia" : NumberDecimal("-0.0"),
            "valorNominal" : NumberDecimal("336"),
            "valorRecebido" : NumberDecimal("336.0"),
            "formaRecebimento" : "BOLETO",
            "situacao" : "RECEBIDO"
        }
    ]
},{
    "_id" : ObjectId("5fce9bc0bad08c0001b24e88"),
    "id" : UUID("e1dc81a6-3866-41e5-aeb2-19c51d2c7f1e"),
    "metaData" : {
        "ativo" : true,
        "dataCriacao" : ISODate("2020-12-07T21:16:48.254Z"),
        "dataAtualizacao" : ISODate("2020-12-08T13:52:42.622Z"),
        "dataDelecao" : null
    },
    "titular" : "RDC FERIAS, VIAGENS E TURISMO LTDA",
    "identificadorFiscal" : "66939570000150",
    "valorNominal" : NumberDecimal("336"),
    "recebimentos" : [ 
        {
            "recebimentoId" : UUID("dc94b95b-4417-4d9e-8fce-e36aaac16ee9"),
            "billId" : NumberLong(82634817),
            "billItemId" : NumberLong(99309262),
            "chargeId" : NumberLong(80848339),
            "dataRecebimento" : ISODate("2020-08-31T00:00:00.000Z"),
            "dataVencimento" : ISODate("2020-09-02T00:00:00.000Z"),
            "dataEmissao" : ISODate("2020-08-17T00:00:00.000Z"),
            "dataCancelamento" : null,
            "juros" : NumberDecimal("0"),
            "multa" : NumberDecimal("0"),
            "desconto" : null,
            "divergencia" : NumberDecimal("-0.0"),
            "valorNominal" : NumberDecimal("336"),
            "valorRecebido" : NumberDecimal("336.0"),
            "formaRecebimento" : "BOLETO",
            "situacao" : "RECEBIDO"
        }
    ]
},{
    "_id" : ObjectId("5fce9be6bad08c0001b24e89"),
    "id" : UUID("ab5ef70e-b5d4-4c84-9429-2bf4c7d142d2"),
    "metaData" : {
        "ativo" : true,
        "dataCriacao" : ISODate("2020-12-07T21:17:26.464Z"),
        "dataAtualizacao" : ISODate("2020-12-08T13:53:04.270Z"),
        "dataDelecao" : null
    },
    "titular" : "RDC FERIAS, VIAGENS E TURISMO LTDA",
    "identificadorFiscal" : "66939570000150",
    "valorNominal" : NumberDecimal("336"),
    "recebimentos" : [ 
        {
            "recebimentoId" : UUID("e04291fe-c14e-4b82-9730-f0dd24482bd5"),
            "billId" : NumberLong(82634840),
            "billItemId" : NumberLong(99309288),
            "chargeId" : NumberLong(80848362),
            "dataRecebimento" : ISODate("2020-08-31T00:00:00.000Z"),
            "dataVencimento" : ISODate("2020-09-02T00:00:00.000Z"),
            "dataEmissao" : ISODate("2020-08-17T00:00:00.000Z"),
            "dataCancelamento" : null,
            "juros" : NumberDecimal("0"),
            "multa" : NumberDecimal("0"),
            "desconto" : null,
            "divergencia" : NumberDecimal("-0.0"),
            "valorNominal" : NumberDecimal("336"),
            "valorRecebido" : NumberDecimal("336.0"),
            "formaRecebimento" : "BOLETO",
            "situacao" : "RECEBIDO"
        }
    ]
},{
    "_id" : ObjectId("5fce9c67bad08c0001b24e8a"),
    "id" : UUID("541d2361-b3cb-4c2e-9857-981b8030f666"),
    "metaData" : {
        "ativo" : true,
        "dataCriacao" : ISODate("2020-12-07T21:19:35.939Z"),
        "dataAtualizacao" : ISODate("2020-12-08T13:53:38.054Z"),
        "dataDelecao" : null
    },
    "titular" : "RDC FERIAS, VIAGENS E TURISMO LTDA",
    "identificadorFiscal" : "66939570000150",
    "valorNominal" : NumberDecimal("3023"),
    "recebimentos" : [ 
        {
            "recebimentoId" : UUID("33b7eac1-451c-4e8a-9645-54a010ffbc10"),
            "billId" : NumberLong(82634874),
            "billItemId" : NumberLong(99309331),
            "chargeId" : NumberLong(80848395),
            "dataRecebimento" : ISODate("2020-09-03T00:00:00.000Z"),
            "dataVencimento" : ISODate("2020-09-02T00:00:00.000Z"),
            "dataEmissao" : ISODate("2020-08-17T00:00:00.000Z"),
            "dataCancelamento" : null,
            "juros" : NumberDecimal("0"),
            "multa" : NumberDecimal("0"),
            "desconto" : null,
            "divergencia" : NumberDecimal("-0.0"),
            "valorNominal" : NumberDecimal("3023"),
            "valorRecebido" : NumberDecimal("3023.0"),
            "formaRecebimento" : "BOLETO",
            "situacao" : "RECEBIDO"
        }
    ]
},{
    "_id" : ObjectId("5fce9fc0bad08c0001b24e94"),
    "id" : UUID("1062a967-4dfb-43b7-8f6b-c310277a2733"),
    "metaData" : {
        "ativo" : false,
        "dataCriacao" : ISODate("2020-12-07T21:33:52.238Z"),
        "dataAtualizacao" : null,
        "dataDelecao" : ISODate("2020-12-07T21:37:43.787Z")
    },
    "titular" : "RDC FERIAS, VIAGENS E TURISMO LTDA",
    "identificadorFiscal" : "66939570000150",
    "valorNominal" : NumberDecimal("3968"),
    "recebimentos" : [ 
        {
            "recebimentoId" : UUID("70ba56d3-d52f-41b1-a058-023f6bbad651"),
            "billId" : null,
            "billItemId" : null,
            "chargeId" : null,
            "dataRecebimento" : null,
            "dataVencimento" : ISODate("2021-01-06T03:01:00.000Z"),
            "dataEmissao" : null,
            "dataCancelamento" : null,
            "juros" : null,
            "multa" : null,
            "desconto" : null,
            "divergencia" : null,
            "valorNominal" : null,
            "valorRecebido" : null,
            "formaRecebimento" : "BOLETO",
            "situacao" : "PENDENTE"
        }
    ]
},{
    "_id" : ObjectId("5fcea0c4bad08c0001b24e95"),
    "id" : UUID("69782bbf-0969-468a-9d94-18685aded912"),
    "metaData" : {
        "ativo" : true,
        "dataCriacao" : ISODate("2020-12-07T21:38:12.903Z"),
        "dataAtualizacao" : ISODate("2020-12-08T13:54:08.359Z"),
        "dataDelecao" : null
    },
    "titular" : "RDC FERIAS, VIAGENS E TURISMO LTDA",
    "identificadorFiscal" : "66939570000150",
    "valorNominal" : NumberDecimal("4126"),
    "recebimentos" : [ 
        {
            "recebimentoId" : UUID("6f5236bb-659c-439f-b75e-ebf2c22a33de"),
            "billId" : NumberLong(84041756),
            "billItemId" : NumberLong(101040317),
            "chargeId" : NumberLong(82267866),
            "dataRecebimento" : ISODate("2020-10-01T00:00:00.000Z"),
            "dataVencimento" : ISODate("2020-10-01T00:00:00.000Z"),
            "dataEmissao" : ISODate("2020-09-01T00:00:00.000Z"),
            "dataCancelamento" : null,
            "juros" : NumberDecimal("0"),
            "multa" : NumberDecimal("0"),
            "desconto" : null,
            "divergencia" : NumberDecimal("-0.0"),
            "valorNominal" : NumberDecimal("4126"),
            "valorRecebido" : NumberDecimal("4126.0"),
            "formaRecebimento" : "BOLETO",
            "situacao" : "RECEBIDO"
        }
    ]
},{
    "_id" : ObjectId("5fcea362bad08c0001b24ea0"),
    "id" : UUID("12900a02-8ac5-4737-ad82-90a14ffc7290"),
    "metaData" : {
        "ativo" : true,
        "dataCriacao" : ISODate("2020-12-07T21:49:22.175Z"),
        "dataAtualizacao" : ISODate("2020-12-08T13:54:40.488Z"),
        "dataDelecao" : null
    },
    "titular" : "RDC FERIAS, VIAGENS E TURISMO LTDA",
    "identificadorFiscal" : "66939570000150",
    "valorNominal" : NumberDecimal("6300"),
    "recebimentos" : [ 
        {
            "recebimentoId" : UUID("a4f244f3-959c-4867-841f-3997cd122881"),
            "billId" : NumberLong(87229114),
            "billItemId" : NumberLong(104976661),
            "chargeId" : NumberLong(85556695),
            "dataRecebimento" : ISODate("2020-10-28T00:00:00.000Z"),
            "dataVencimento" : ISODate("2020-10-31T00:00:00.000Z"),
            "dataEmissao" : ISODate("2020-10-01T00:00:00.000Z"),
            "dataCancelamento" : null,
            "juros" : NumberDecimal("0"),
            "multa" : NumberDecimal("0"),
            "desconto" : null,
            "divergencia" : NumberDecimal("-0.0"),
            "valorNominal" : NumberDecimal("6300"),
            "valorRecebido" : NumberDecimal("6300.0"),
            "formaRecebimento" : "BOLETO",
            "situacao" : "RECEBIDO"
        }
    ]
},{
    "_id" : ObjectId("5fcea57dbad08c0001b24eac"),
    "id" : UUID("092e9f4f-93e6-471b-8814-6b2e0699e5ba"),
    "metaData" : {
        "ativo" : true,
        "dataCriacao" : ISODate("2020-12-07T21:58:21.008Z"),
        "dataAtualizacao" : ISODate("2020-12-21T19:21:22.661Z"),
        "dataDelecao" : null
    },
    "titular" : "RDC FERIAS, VIAGENS E TURISMO LTDA",
    "identificadorFiscal" : "66939570000150",
    "valorNominal" : NumberDecimal("7344"),
    "recebimentos" : [ 
        {
            "recebimentoId" : UUID("92030b96-9a59-4d0e-b397-84eab81bba31"),
            "billId" : NumberLong(90425137),
            "billItemId" : NumberLong(108989267),
            "chargeId" : NumberLong(89046721),
            "dataRecebimento" : ISODate("2020-12-04T03:00:00.000Z"),
            "dataVencimento" : ISODate("2020-12-03T00:00:00.000Z"),
            "dataEmissao" : ISODate("2020-11-03T00:00:00.000Z"),
            "dataCancelamento" : null,
            "juros" : NumberDecimal("0"),
            "multa" : NumberDecimal("0"),
            "desconto" : null,
            "divergencia" : NumberDecimal("-149.30"),
            "valorNominal" : NumberDecimal("7344"),
            "valorRecebido" : NumberDecimal("7344.0"),
            "formaRecebimento" : "BOLETO",
            "situacao" : "RECEBIDO"
        }
    ]
},{
    "_id" : ObjectId("5fcea970bad08c0001b24eb6"),
    "id" : UUID("49f92fc6-b6f2-4d59-a54d-16448632dc20"),
    "metaData" : {
        "ativo" : true,
        "dataCriacao" : ISODate("2020-12-07T22:15:12.262Z"),
        "dataAtualizacao" : ISODate("2021-01-08T20:47:25.661Z"),
        "dataDelecao" : null
    },
    "titular" : "RDC FERIAS, VIAGENS E TURISMO LTDA",
    "identificadorFiscal" : "66939570000150",
    "valorNominal" : NumberDecimal("8387"),
    "recebimentos" : [ 
        {
            "recebimentoId" : UUID("ce3e638c-071d-42e0-ac66-fbc49e36ce46"),
            "billId" : NumberLong(93248847),
            "billItemId" : NumberLong(112767246),
            "chargeId" : NumberLong(92354872),
            "dataRecebimento" : ISODate("2020-12-30T03:00:00.000Z"),
            "dataVencimento" : ISODate("2020-12-31T00:00:00.000Z"),
            "dataEmissao" : ISODate("2020-12-01T00:00:00.000Z"),
            "dataCancelamento" : null,
            "juros" : NumberDecimal("0"),
            "multa" : NumberDecimal("0"),
            "desconto" : null,
            "divergencia" : NumberDecimal("-0.0"),
            "valorNominal" : NumberDecimal("8387"),
            "valorRecebido" : NumberDecimal("8387.0"),
            "formaRecebimento" : "BOLETO",
            "situacao" : "RECEBIDO"
        }
    ]
},{
    "_id" : ObjectId("5ff35b2bbb7753000124b60a"),
    "id" : UUID("701adb1e-f2f3-4c75-8d16-bd8ea1980841"),
    "metaData" : {
        "ativo" : true,
        "dataCriacao" : ISODate("2021-01-04T18:15:07.673Z"),
        "dataAtualizacao" : ISODate("2021-02-18T17:30:14.438Z"),
        "dataDelecao" : null
    },
    "titular" : "RDC FERIAS, VIAGENS E TURISMO LTDA",
    "identificadorFiscal" : "66939570000150",
    "valorNominal" : NumberDecimal("8358"),
    "recebimentos" : [ 
        {
            "recebimentoId" : UUID("bafb86c2-24c2-49cb-a911-cdc420f142ff"),
            "billId" : NumberLong(96426732),
            "billItemId" : NumberLong(116881244),
            "chargeId" : NumberLong(96244218),
            "dataRecebimento" : ISODate("2021-02-03T03:00:00.000Z"),
            "dataVencimento" : ISODate("2021-02-03T03:01:00.000Z"),
            "dataEmissao" : ISODate("2021-01-04T18:15:27.717Z"),
            "dataCancelamento" : null,
            "juros" : NumberDecimal("0"),
            "multa" : NumberDecimal("0"),
            "desconto" : NumberDecimal("0"),
            "divergencia" : NumberDecimal("-0.0"),
            "valorNominal" : NumberDecimal("8358"),
            "valorRecebido" : NumberDecimal("8358.0"),
            "formaRecebimento" : "BOLETO",
            "situacao" : "RECEBIDO",
            "tipo" : "Assinatura",
            "cartao" : null,
            "divergenciaAssinaturas" : false
        }
    ]
},{
    "_id" : ObjectId("6018596154069f00018b3a1b"),
    "id" : UUID("0078b87f-2a4e-404b-a194-41897355c18d"),
    "metaData" : {
        "ativo" : true,
        "dataCriacao" : ISODate("2021-02-01T19:41:21.491Z"),
        "dataAtualizacao" : ISODate("2021-03-08T12:14:11.985Z"),
        "dataDelecao" : null
    },
    "titular" : "RDC FERIAS, VIAGENS E TURISMO LTDA",
    "identificadorFiscal" : "66939570000150",
    "valorNominal" : NumberDecimal("9293"),
    "recebimentos" : [ 
        {
            "recebimentoId" : UUID("94210c7b-5260-4c66-9a45-f6449ddd1d1e"),
            "billId" : NumberLong(99128459),
            "billItemId" : NumberLong(120388256),
            "chargeId" : NumberLong(99736445),
            "dataRecebimento" : ISODate("2021-03-04T03:00:00.000Z"),
            "dataVencimento" : ISODate("2021-03-03T03:01:00.000Z"),
            "dataEmissao" : ISODate("2021-02-01T19:41:48.172Z"),
            "dataCancelamento" : null,
            "juros" : NumberDecimal("0"),
            "multa" : NumberDecimal("0"),
            "desconto" : NumberDecimal("0"),
            "divergencia" : NumberDecimal("-188.92"),
            "valorNominal" : NumberDecimal("9293"),
            "valorRecebido" : NumberDecimal("9293.0"),
            "formaRecebimento" : "BOLETO",
            "situacao" : "RECEBIDO",
            "divergenciaAssinaturas" : false,
            "tipo" : "Assinatura",
            "cartao" : null
        }
    ]
},{
    "_id" : ObjectId("603e4646fcf5170001f8ec59"),
    "id" : UUID("891d452f-78b3-4345-baaf-d4a2d721523d"),
    "metaData" : {
        "ativo" : true,
        "dataCriacao" : ISODate("2021-03-02T14:05:58.385Z"),
        "dataAtualizacao" : ISODate("2021-04-08T12:00:29.020Z"),
        "dataDelecao" : null
    },
    "titular" : "RDC FERIAS, VIAGENS E TURISMO LTDA",
    "identificadorFiscal" : "66939570000150",
    "valorNominal" : NumberDecimal("8680"),
    "recebimentos" : [ 
        {
            "recebimentoId" : UUID("74160bb9-2d94-4bbf-8009-3e64f7b51a64"),
            "billId" : NumberLong(102252639),
            "billItemId" : NumberLong(124399880),
            "chargeId" : NumberLong(104117430),
            "dataRecebimento" : ISODate("2021-04-05T03:00:00.000Z"),
            "dataVencimento" : ISODate("2021-04-01T03:01:00.000Z"),
            "dataEmissao" : ISODate("2021-03-02T14:06:37.403Z"),
            "dataCancelamento" : null,
            "juros" : NumberDecimal("0"),
            "multa" : NumberDecimal("0"),
            "desconto" : NumberDecimal("0"),
            "divergencia" : NumberDecimal("-185.05"),
            "valorNominal" : NumberDecimal("8680"),
            "valorRecebido" : NumberDecimal("8680.0"),
            "formaRecebimento" : "BOLETO",
            "situacao" : "RECEBIDO",
            "divergenciaAssinaturas" : false,
            "tipo" : "Assinatura",
            "cartao" : null
        }
    ]
},{
    "_id" : ObjectId("6065d36d2cbd190001ff25aa"),
    "id" : UUID("183900a5-cef8-4a1f-9891-4cb5983e03a9"),
    "metaData" : {
        "ativo" : true,
        "dataCriacao" : ISODate("2021-04-01T14:06:37.059Z"),
        "dataAtualizacao" : ISODate("2021-04-01T14:06:49.228Z"),
        "dataDelecao" : null
    },
    "titular" : "RDC FERIAS, VIAGENS E TURISMO LTDA",
    "identificadorFiscal" : "66939570000150",
    "valorNominal" : NumberDecimal("9401"),
    "recebimentos" : [ 
        {
            "recebimentoId" : UUID("6ff68355-416b-464b-9daa-aaedac327a2d"),
            "billId" : NumberLong(105244511),
            "billItemId" : NumberLong(128276779),
            "chargeId" : NumberLong(108631408),
            "dataRecebimento" : null,
            "dataVencimento" : ISODate("2021-05-01T03:01:00.000Z"),
            "dataEmissao" : ISODate("2021-04-01T14:06:49.206Z"),
            "dataCancelamento" : null,
            "juros" : NumberDecimal("0"),
            "multa" : NumberDecimal("0"),
            "desconto" : NumberDecimal("0"),
            "divergencia" : NumberDecimal("0"),
            "valorNominal" : NumberDecimal("9401"),
            "valorRecebido" : NumberDecimal("0"),
            "formaRecebimento" : "BOLETO",
            "situacao" : "EMITIDO",
            "divergenciaAssinaturas" : null,
            "tipo" : "Assinatura",
            "cartao" : null
        }
    ]
},
{
    "_id" : ObjectId("600b915027fe6100017e67bb"),
    "id" : UUID("59c8e1cf-7ff4-4742-b305-5e8ef23558d8"),
    "metaData" : {
        "ativo" : true,
        "dataCriacao" : ISODate("2021-01-23T03:00:32.629Z"),
        "dataAtualizacao" : ISODate("2021-03-27T07:00:35.029Z"),
        "dataDelecao" : null
    },
    "titular" : "Rodrigo Esposito Velloso Borges",
    "identificadorFiscal" : "29436679866",
    "valorNominal" : NumberDecimal("3852"),
    "recebimentos" : [ 
        {
            "recebimentoId" : UUID("1d532c0b-dc4f-42b2-8806-f395d1baaf54"),
            "billId" : NumberLong(98256389),
            "billItemId" : NumberLong(119251107),
            "chargeId" : NumberLong(98534045),
            "dataRecebimento" : ISODate("2021-02-23T03:00:00.000Z"),
            "dataVencimento" : ISODate("2021-01-24T02:59:59.000Z"),
            "dataEmissao" : ISODate("2021-01-23T03:00:36.000Z"),
            "dataCancelamento" : null,
            "juros" : NumberDecimal("0"),
            "multa" : NumberDecimal("0"),
            "desconto" : NumberDecimal("0"),
            "divergencia" : NumberDecimal("0"),
            "valorNominal" : NumberDecimal("321.0"),
            "valorRecebido" : NumberDecimal("316.09"),
            "formaRecebimento" : "CartaoRecorrencia",
            "situacao" : "RECEBIDO",
            "divergenciaAssinaturas" : null,
            "tipo" : "CartaoRecorrencia",
            "cartao" : {
                "transacao" : {
                    "_id" : NumberLong(171163567),
                    "ocorrencia" : ISODate("2021-01-23T03:00:39.000Z"),
                    "adquirente" : "Cielo",
                    "bandeira" : "MasterCard",
                    "cartaoUltimosDigitos" : "6140",
                    "cartaoValidade" : ISODate("2023-11-01T02:59:59.000Z"),
                    "nsu" : "000000000012012",
                    "pedido" : null,
                    "valorLiquido" : NumberDecimal("316.0887"),
                    "valorEstornado" : null
                },
                "parcelas" : [ 
                    {
                        "numero" : 1,
                        "valorNominal" : NumberDecimal("321"),
                        "valorTotal" : NumberDecimal("321"),
                        "valorLiquido" : NumberDecimal("316.09"),
                        "valorTaxa" : NumberDecimal("4.911299999999983"),
                        "percentualTaxa" : NumberDecimal("1.53"),
                        "status" : "RECEBIDO",
                        "banco" : "Banco do Brasil",
                        "agencia" : "3221",
                        "conta" : "75370",
                        "dataVencimento" : ISODate("2021-01-24T02:59:59.000Z"),
                        "dataRecebimento" : ISODate("2021-02-23T03:00:00.000Z")
                    }
                ]
            }
        }, 
        {
            "recebimentoId" : UUID("33b800f8-95f8-4ada-aefa-764d95b387b9"),
            "billId" : NumberLong(101420520),
            "billItemId" : NumberLong(123322660),
            "chargeId" : NumberLong(102929779),
            "dataRecebimento" : ISODate("2021-03-26T03:00:00.000Z"),
            "dataVencimento" : ISODate("2021-02-24T02:59:59.000Z"),
            "dataEmissao" : ISODate("2021-02-23T13:19:28.000Z"),
            "dataCancelamento" : null,
            "juros" : NumberDecimal("0"),
            "multa" : NumberDecimal("0"),
            "desconto" : NumberDecimal("0"),
            "divergencia" : NumberDecimal("0"),
            "valorNominal" : NumberDecimal("321.0"),
            "valorRecebido" : NumberDecimal("316.09"),
            "formaRecebimento" : "CartaoRecorrencia",
            "situacao" : "RECEBIDO",
            "divergenciaAssinaturas" : null,
            "tipo" : "CartaoRecorrencia",
            "cartao" : {
                "transacao" : {
                    "_id" : NumberLong(178676444),
                    "ocorrencia" : ISODate("2021-02-23T13:19:31.000Z"),
                    "adquirente" : "Cielo",
                    "bandeira" : "cielo_v3",
                    "cartaoUltimosDigitos" : "6140",
                    "cartaoValidade" : ISODate("2023-11-01T02:59:59.000Z"),
                    "nsu" : "000000000029016",
                    "pedido" : null,
                    "valorLiquido" : NumberDecimal("316.0887"),
                    "valorEstornado" : null
                },
                "parcelas" : [ 
                    {
                        "numero" : 1,
                        "valorNominal" : NumberDecimal("321"),
                        "valorTotal" : NumberDecimal("321"),
                        "valorLiquido" : NumberDecimal("316.09"),
                        "valorTaxa" : NumberDecimal("4.911299999999983"),
                        "percentualTaxa" : NumberDecimal("1.53"),
                        "status" : "RECEBIDO",
                        "banco" : "Banco do Brasil",
                        "agencia" : "3221",
                        "conta" : "75370",
                        "dataVencimento" : ISODate("2021-02-24T02:59:59.000Z"),
                        "dataRecebimento" : ISODate("2021-03-26T03:00:00.000Z")
                    }
                ]
            }
        }, 
        {
            "recebimentoId" : UUID("d7fb8076-e841-45d4-a8a0-37e4009cf2b7"),
            "billId" : NumberLong(104413623),
            "billItemId" : NumberLong(127180717),
            "chargeId" : NumberLong(107323772),
            "dataRecebimento" : null,
            "dataVencimento" : ISODate("2021-03-24T02:59:59.000Z"),
            "dataEmissao" : ISODate("2021-03-23T12:20:16.000Z"),
            "dataCancelamento" : null,
            "juros" : null,
            "multa" : null,
            "desconto" : NumberDecimal("0"),
            "divergencia" : null,
            "valorNominal" : NumberDecimal("321.0"),
            "valorRecebido" : null,
            "formaRecebimento" : "CartaoRecorrencia",
            "situacao" : "PAGO",
            "divergenciaAssinaturas" : null,
            "tipo" : "CartaoRecorrencia",
            "cartao" : {
                "transacao" : {
                    "_id" : NumberLong(186203459),
                    "ocorrencia" : ISODate("2021-03-23T12:20:19.000Z"),
                    "adquirente" : "MasterCard",
                    "bandeira" : "cielo_v3",
                    "cartaoUltimosDigitos" : "6140",
                    "cartaoValidade" : ISODate("2023-11-01T02:59:59.000Z"),
                    "nsu" : "000000000041024",
                    "pedido" : null,
                    "valorLiquido" : null,
                    "valorEstornado" : null
                },
                "parcelas" : [ 
                    {
                        "numero" : 1,
                        "valorNominal" : NumberDecimal("321.0"),
                        "valorTotal" : null,
                        "valorLiquido" : null,
                        "valorTaxa" : null,
                        "percentualTaxa" : null,
                        "status" : "PAGO",
                        "banco" : null,
                        "agencia" : null,
                        "conta" : null,
                        "dataVencimento" : ISODate("2021-03-24T02:59:59.000Z"),
                        "dataRecebimento" : null
                    }
                ]
            }
        }
    ]
},
{
    "_id" : ObjectId("5fde9413bb7753000124b5d4"),
    "id" : UUID("ae557bb1-4c46-430c-89e1-2b6f6f970a16"),
    "metaData" : {
        "ativo" : false,
        "dataCriacao" : ISODate("2020-12-20T00:00:19.658Z"),
        "dataAtualizacao" : ISODate("2020-12-20T00:01:09.975Z"),
        "dataDelecao" : ISODate("2020-12-21T19:24:03.791Z")
    },
    "titular" : "GUILHERME ALMEIDA ZENI",
    "identificadorFiscal" : "38065944817",
    "valorNominal" : NumberDecimal("1968"),
    "recebimentos" : [ 
        {
            "recebimentoId" : UUID("6ad6b35d-3934-467d-9a1e-6ba261a26b0f"),
            "billId" : NumberLong(95023812),
            "billItemId" : NumberLong(115055653),
            "chargeId" : NumberLong(94617004),
            "dataRecebimento" : ISODate("2020-12-20T00:00:25.000Z"),
            "dataVencimento" : ISODate("2020-12-20T02:59:59.000Z"),
            "dataEmissao" : ISODate("2020-12-20T00:00:22.000Z"),
            "dataCancelamento" : null,
            "juros" : NumberDecimal("0"),
            "multa" : NumberDecimal("0"),
            "desconto" : NumberDecimal("0"),
            "divergencia" : NumberDecimal("0.0"),
            "valorNominal" : NumberDecimal("164.0"),
            "valorRecebido" : NumberDecimal("164.0"),
            "formaRecebimento" : "CartaoRecorrencia",
            "situacao" : "RECEBIDO",
            "tipo" : "CartaoRecorrencia",
            "cartao" : null
        }
    ]
},
{
    "_id" : ObjectId("5fde9449bb7753000124b5d5"),
    "id" : UUID("233464d4-4555-48ff-9eb7-0303e2ff6406"),
    "metaData" : {
        "ativo" : true,
        "dataCriacao" : ISODate("2020-12-20T00:01:13.301Z"),
        "dataAtualizacao" : ISODate("2021-04-19T15:48:35.643Z"),
        "dataDelecao" : null
    },
    "titular" : "GUILHERME ALMEIDA ZENI",
    "identificadorFiscal" : "38065944817",
    "valorNominal" : NumberDecimal("1968"),
    "recebimentos" : [ 
        {
            "recebimentoId" : UUID("388c4b5c-3e08-4736-8938-ffc2360dc265"),
            "billId" : NumberLong(95023831),
            "billItemId" : NumberLong(115055673),
            "chargeId" : NumberLong(94617023),
            "dataRecebimento" : ISODate("2021-01-20T00:01:00.000Z"),
            "dataVencimento" : ISODate("2020-12-20T02:59:59.000Z"),
            "dataEmissao" : ISODate("2020-12-20T00:01:14.000Z"),
            "dataCancelamento" : null,
            "juros" : NumberDecimal("0"),
            "multa" : NumberDecimal("0"),
            "desconto" : NumberDecimal("0"),
            "divergencia" : NumberDecimal("0"),
            "valorNominal" : NumberDecimal("164.0"),
            "valorRecebido" : NumberDecimal("161.49"),
            "formaRecebimento" : "CartaoRecorrencia",
            "situacao" : "RECEBIDO",
            "divergenciaAssinaturas" : null,
            "tipo" : "CartaoRecorrencia",
            "cartao" : {
                "transacao" : {
                    "_id" : NumberLong(164036250),
                    "ocorrencia" : ISODate("2020-12-20T00:01:15.000Z"),
                    "adquirente" : "Cielo",
                    "bandeira" : "MasterCard",
                    "cartaoUltimosDigitos" : "4578",
                    "cartaoValidade" : ISODate("2028-09-01T02:59:59.000Z"),
                    "nsu" : "000000000003004",
                    "pedido" : null,
                    "valorLiquido" : NumberDecimal("161.4908"),
                    "valorEstornado" : null
                },
                "parcelas" : [ 
                    {
                        "numero" : 1,
                        "valorNominal" : NumberDecimal("164"),
                        "valorTotal" : NumberDecimal("164"),
                        "valorLiquido" : NumberDecimal("161.49"),
                        "valorTaxa" : NumberDecimal("2.5091999999999928"),
                        "percentualTaxa" : NumberDecimal("1.53"),
                        "status" : "RECEBIDO",
                        "banco" : null,
                        "agencia" : null,
                        "conta" : null,
                        "dataVencimento" : ISODate("2020-12-20T02:59:59.000Z"),
                        "dataRecebimento" : ISODate("2021-01-19T21:01:00.000Z")
                    }
                ]
            }
        }, 
        {
            "recebimentoId" : UUID("072a47a9-75cf-4d97-84cd-89e12f581358"),
            "billId" : NumberLong(97897031),
            "billItemId" : NumberLong(118789092),
            "chargeId" : NumberLong(98064921),
            "dataRecebimento" : ISODate("2021-02-19T14:08:00.000Z"),
            "dataVencimento" : ISODate("2021-01-20T02:59:59.000Z"),
            "dataEmissao" : ISODate("2021-01-19T14:08:32.000Z"),
            "dataCancelamento" : null,
            "juros" : NumberDecimal("0"),
            "multa" : NumberDecimal("0"),
            "desconto" : NumberDecimal("0"),
            "divergencia" : NumberDecimal("0"),
            "valorNominal" : NumberDecimal("164.0"),
            "valorRecebido" : NumberDecimal("161.49"),
            "formaRecebimento" : "CartaoRecorrencia",
            "situacao" : "RECEBIDO",
            "divergenciaAssinaturas" : null,
            "tipo" : "CartaoRecorrencia",
            "cartao" : {
                "transacao" : {
                    "_id" : NumberLong(170325689),
                    "ocorrencia" : ISODate("2021-01-19T14:08:34.000Z"),
                    "adquirente" : "Cielo",
                    "bandeira" : "MasterCard",
                    "cartaoUltimosDigitos" : "4578",
                    "cartaoValidade" : ISODate("2028-09-01T02:59:59.000Z"),
                    "nsu" : "000000000010002",
                    "pedido" : null,
                    "valorLiquido" : NumberDecimal("161.4908"),
                    "valorEstornado" : null
                },
                "parcelas" : [ 
                    {
                        "numero" : 1,
                        "valorNominal" : NumberDecimal("164"),
                        "valorTotal" : NumberDecimal("164"),
                        "valorLiquido" : NumberDecimal("161.49"),
                        "valorTaxa" : NumberDecimal("2.5091999999999928"),
                        "percentualTaxa" : NumberDecimal("1.53"),
                        "status" : "RECEBIDO",
                        "banco" : null,
                        "agencia" : null,
                        "conta" : null,
                        "dataVencimento" : ISODate("2021-01-20T02:59:59.000Z"),
                        "dataRecebimento" : ISODate("2021-02-19T11:08:00.000Z")
                    }
                ]
            }
        }, 
        {
            "recebimentoId" : UUID("9fa3eb34-9b8b-4d09-83b6-156f944505a7"),
            "billId" : NumberLong(104059493),
            "billItemId" : NumberLong(126721570),
            "chargeId" : NumberLong(106827870),
            "dataRecebimento" : null,
            "dataVencimento" : ISODate("2021-03-20T02:59:59.000Z"),
            "dataEmissao" : ISODate("2021-03-19T13:52:58.000Z"),
            "dataCancelamento" : null,
            "juros" : NumberDecimal("0"),
            "multa" : NumberDecimal("0"),
            "desconto" : NumberDecimal("0"),
            "divergencia" : NumberDecimal("0"),
            "valorNominal" : NumberDecimal("164.0"),
            "valorRecebido" : NumberDecimal("0"),
            "formaRecebimento" : "CartaoRecorrencia",
            "situacao" : "PAGO",
            "divergenciaAssinaturas" : null,
            "tipo" : "CartaoRecorrencia",
            "cartao" : {
                "transacao" : {
                    "_id" : NumberLong(185357807),
                    "ocorrencia" : ISODate("2021-03-19T13:52:59.000Z"),
                    "adquirente" : "MasterCard",
                    "bandeira" : "cielo_v3",
                    "cartaoUltimosDigitos" : "4578",
                    "cartaoValidade" : ISODate("2028-09-01T02:59:59.000Z"),
                    "nsu" : "000000000042006",
                    "pedido" : null,
                    "valorLiquido" : null,
                    "valorEstornado" : null
                },
                "parcelas" : [ 
                    {
                        "numero" : 1,
                        "valorNominal" : NumberDecimal("164.0"),
                        "valorTotal" : null,
                        "valorLiquido" : null,
                        "valorTaxa" : null,
                        "percentualTaxa" : null,
                        "status" : "PAGO",
                        "banco" : null,
                        "agencia" : null,
                        "conta" : null,
                        "dataVencimento" : ISODate("2021-03-20T02:59:59.000Z"),
                        "dataRecebimento" : null
                    }
                ]
            }
        }, 
        {
            "recebimentoId" : UUID("e32a347b-4c54-4518-95f5-b2897ab1f533"),
            "billId" : NumberLong(101047085),
            "billItemId" : NumberLong(122838750),
            "chargeId" : NumberLong(102407438),
            "dataRecebimento" : ISODate("2021-03-22T03:00:00.000Z"),
            "dataVencimento" : ISODate("2021-02-20T02:59:59.000Z"),
            "dataEmissao" : ISODate("2021-02-19T14:52:55.000Z"),
            "dataCancelamento" : null,
            "juros" : NumberDecimal("0"),
            "multa" : NumberDecimal("0"),
            "desconto" : NumberDecimal("0"),
            "divergencia" : NumberDecimal("0"),
            "valorNominal" : NumberDecimal("164.0"),
            "valorRecebido" : NumberDecimal("161.49"),
            "formaRecebimento" : "CartaoRecorrencia",
            "situacao" : "RECEBIDO",
            "divergenciaAssinaturas" : null,
            "tipo" : "CartaoRecorrencia",
            "cartao" : {
                "transacao" : {
                    "_id" : NumberLong(177781199),
                    "ocorrencia" : ISODate("2021-02-19T14:52:57.000Z"),
                    "adquirente" : "Cielo",
                    "bandeira" : "cielo_v3",
                    "cartaoUltimosDigitos" : "4578",
                    "cartaoValidade" : ISODate("2028-09-01T02:59:59.000Z"),
                    "nsu" : "000000000026004",
                    "pedido" : null,
                    "valorLiquido" : NumberDecimal("161.4908"),
                    "valorEstornado" : null
                },
                "parcelas" : [ 
                    {
                        "numero" : 1,
                        "valorNominal" : NumberDecimal("164"),
                        "valorTotal" : NumberDecimal("164"),
                        "valorLiquido" : NumberDecimal("161.49"),
                        "valorTaxa" : NumberDecimal("2.5091999999999928"),
                        "percentualTaxa" : NumberDecimal("1.53"),
                        "status" : "RECEBIDO",
                        "banco" : "Banco do Brasil",
                        "agencia" : "3221",
                        "conta" : "75370",
                        "dataVencimento" : ISODate("2021-02-20T02:59:59.000Z"),
                        "dataRecebimento" : ISODate("2021-03-22T03:00:00.000Z")
                    }
                ]
            }
        }, 
        {
            "recebimentoId" : UUID("30c4c161-850d-437a-bdf9-f88352ceae53"),
            "billId" : NumberLong(107031267),
            "billItemId" : NumberLong(130582785),
            "chargeId" : NumberLong(110840337),
            "dataRecebimento" : null,
            "dataVencimento" : ISODate("2021-04-20T02:59:59.000Z"),
            "dataEmissao" : ISODate("2021-04-19T12:49:05.000Z"),
            "dataCancelamento" : null,
            "juros" : null,
            "multa" : null,
            "desconto" : NumberDecimal("0"),
            "divergencia" : null,
            "valorNominal" : NumberDecimal("164.0"),
            "valorRecebido" : null,
            "formaRecebimento" : "CartaoRecorrencia",
            "situacao" : "PAGO",
            "divergenciaAssinaturas" : null,
            "tipo" : "CartaoRecorrencia",
            "cartao" : {
                "transacao" : {
                    "_id" : NumberLong(192434144),
                    "ocorrencia" : ISODate("2021-04-19T12:49:07.000Z"),
                    "adquirente" : "MasterCard",
                    "bandeira" : "cielo_v3",
                    "cartaoUltimosDigitos" : "4578",
                    "cartaoValidade" : ISODate("2028-09-01T02:59:59.000Z"),
                    "nsu" : "000000000060004",
                    "pedido" : null,
                    "valorLiquido" : null,
                    "valorEstornado" : null
                },
                "parcelas" : [ 
                    {
                        "numero" : 1,
                        "valorNominal" : NumberDecimal("164.0"),
                        "valorTotal" : null,
                        "valorLiquido" : null,
                        "valorTaxa" : null,
                        "percentualTaxa" : null,
                        "status" : "PAGO",
                        "banco" : null,
                        "agencia" : null,
                        "conta" : null,
                        "dataVencimento" : ISODate("2021-04-20T02:59:59.000Z"),
                        "dataRecebimento" : null
                    }
                ]
            }
        }
    ]
},

{
    "_id" : ObjectId("5fce878df71e5400018d55ce"),
    "id" : UUID("7f471426-2077-4ff9-b427-ec0df6df6cb5"),
    "metaData" : {
        "ativo" : false,
        "dataCriacao" : ISODate("2020-12-07T19:50:37.157Z"),
        "dataAtualizacao" : null,
        "dataDelecao" : ISODate("2020-12-07T19:59:06.885Z")
    },
    "titular" : "Bmb Mode Center Indústria, Comércio e Serviços LTDA",
    "identificadorFiscal" : "04532167000154",
    "valorNominal" : NumberDecimal("2630"),
    "recebimentos" : [ 
        {
            "recebimentoId" : UUID("3012f649-bc31-4ae6-b37c-f7d323772135"),
            "billId" : null,
            "billItemId" : null,
            "chargeId" : null,
            "dataRecebimento" : null,
            "dataVencimento" : ISODate("2021-01-06T03:01:00.000Z"),
            "dataEmissao" : null,
            "dataCancelamento" : null,
            "juros" : null,
            "multa" : null,
            "desconto" : null,
            "divergencia" : null,
            "valorNominal" : null,
            "valorRecebido" : null,
            "formaRecebimento" : "BOLETO",
            "situacao" : "PENDENTE"
        }, 
        {
            "recebimentoId" : UUID("301df56b-7160-4d1a-a9bf-e73b386913da"),
            "billId" : null,
            "billItemId" : null,
            "chargeId" : null,
            "dataRecebimento" : null,
            "dataVencimento" : ISODate("2021-03-07T03:01:00.000Z"),
            "dataEmissao" : null,
            "dataCancelamento" : null,
            "juros" : null,
            "multa" : null,
            "desconto" : null,
            "divergencia" : null,
            "valorNominal" : null,
            "valorRecebido" : null,
            "formaRecebimento" : "BOLETO",
            "situacao" : "PENDENTE"
        }
    ]
},{
    "_id" : ObjectId("5fce8a48f71e5400018d55cf"),
    "id" : UUID("942594e2-28c8-4a22-acbe-198421e397fc"),
    "metaData" : {
        "ativo" : true,
        "dataCriacao" : ISODate("2020-12-07T20:02:16.839Z"),
        "dataAtualizacao" : ISODate("2020-12-08T14:13:03.212Z"),
        "dataDelecao" : null
    },
    "titular" : "Bmb Mode Center Indústria, Comércio e Serviços LTDA",
    "identificadorFiscal" : "04532167000154",
    "valorNominal" : NumberDecimal("2720"),
    "recebimentos" : [ 
        {
            "recebimentoId" : UUID("69e9248a-e05b-4ea5-b897-a75396b200ab"),
            "billId" : NumberLong(73160764),
            "billItemId" : NumberLong(87314411),
            "chargeId" : NumberLong(71224459),
            "dataRecebimento" : ISODate("2020-06-03T00:00:00.000Z"),
            "dataVencimento" : ISODate("2020-06-03T23:59:59.000Z"),
            "dataEmissao" : ISODate("2020-05-04T14:35:06.000Z"),
            "dataCancelamento" : null,
            "juros" : NumberDecimal("0"),
            "multa" : NumberDecimal("0"),
            "desconto" : null,
            "divergencia" : NumberDecimal("-0.0"),
            "valorNominal" : NumberDecimal("1340"),
            "valorRecebido" : NumberDecimal("1340.0"),
            "formaRecebimento" : "BOLETO",
            "situacao" : "RECEBIDO"
        }, 
        {
            "recebimentoId" : UUID("b0ab1709-3d06-4c0d-8e90-aec834e53e45"),
            "billId" : NumberLong(73160828),
            "billItemId" : NumberLong(87314486),
            "chargeId" : NumberLong(71224524),
            "dataRecebimento" : ISODate("2020-08-04T00:00:00.000Z"),
            "dataVencimento" : ISODate("2020-08-02T23:59:59.000Z"),
            "dataEmissao" : ISODate("2020-05-04T14:36:10.000Z"),
            "dataCancelamento" : null,
            "juros" : NumberDecimal("0"),
            "multa" : NumberDecimal("0"),
            "desconto" : null,
            "divergencia" : NumberDecimal("-0.0"),
            "valorNominal" : NumberDecimal("1380"),
            "valorRecebido" : NumberDecimal("1380.0"),
            "formaRecebimento" : "BOLETO",
            "situacao" : "RECEBIDO"
        }
    ]
},{
    "_id" : ObjectId("5fce9003f71e5400018d55d4"),
    "id" : UUID("d4356d9b-3a3f-4ff8-86d2-7ad9a4b0248c"),
    "metaData" : {
        "ativo" : true,
        "dataCriacao" : ISODate("2020-12-07T20:26:43.474Z"),
        "dataAtualizacao" : ISODate("2020-12-08T14:12:09.550Z"),
        "dataDelecao" : null
    },
    "titular" : "Bmb Mode Center Indústria, Comércio e Serviços LTDA",
    "identificadorFiscal" : "04532167000154",
    "valorNominal" : NumberDecimal("2720"),
    "recebimentos" : [ 
        {
            "recebimentoId" : UUID("835e700c-c050-44a3-b733-488773289a27"),
            "billId" : NumberLong(75812888),
            "billItemId" : NumberLong(90657574),
            "chargeId" : NumberLong(73855843),
            "dataRecebimento" : ISODate("2020-07-02T00:00:00.000Z"),
            "dataVencimento" : ISODate("2020-07-01T23:59:59.000Z"),
            "dataEmissao" : ISODate("2020-06-01T12:34:32.000Z"),
            "dataCancelamento" : null,
            "juros" : NumberDecimal("0"),
            "multa" : NumberDecimal("0"),
            "desconto" : null,
            "divergencia" : NumberDecimal("-0.0"),
            "valorNominal" : NumberDecimal("1340"),
            "valorRecebido" : NumberDecimal("1340.0"),
            "formaRecebimento" : "BOLETO",
            "situacao" : "RECEBIDO"
        }, 
        {
            "recebimentoId" : UUID("e2454e02-e75d-4d4a-b284-a577be202137"),
            "billId" : NumberLong(75813250),
            "billItemId" : NumberLong(90657996),
            "chargeId" : NumberLong(73856223),
            "dataRecebimento" : ISODate("2020-09-01T00:00:00.000Z"),
            "dataVencimento" : ISODate("2020-08-30T23:59:59.000Z"),
            "dataEmissao" : ISODate("2020-06-01T12:40:08.000Z"),
            "dataCancelamento" : null,
            "juros" : NumberDecimal("0"),
            "multa" : NumberDecimal("0"),
            "desconto" : null,
            "divergencia" : NumberDecimal("-0.0"),
            "valorNominal" : NumberDecimal("1380"),
            "valorRecebido" : NumberDecimal("1380.0"),
            "formaRecebimento" : "BOLETO",
            "situacao" : "RECEBIDO"
        }
    ]
},{
    "_id" : ObjectId("5fce9317f71e5400018d55da"),
    "id" : UUID("5f244d7f-77f6-486e-991a-14c617c9251a"),
    "metaData" : {
        "ativo" : true,
        "dataCriacao" : ISODate("2020-12-07T20:39:51.538Z"),
        "dataAtualizacao" : ISODate("2020-12-08T14:11:03.161Z"),
        "dataDelecao" : null
    },
    "titular" : "Bmb Mode Center Indústria, Comércio e Serviços LTDA",
    "identificadorFiscal" : "04532167000154",
    "valorNominal" : NumberDecimal("2630"),
    "recebimentos" : [ 
        {
            "recebimentoId" : UUID("7aeb5d2e-9550-40a2-9d8f-2ebad2c31666"),
            "billId" : NumberLong(78519060),
            "billItemId" : NumberLong(94066286),
            "chargeId" : NumberLong(76575292),
            "dataRecebimento" : ISODate("2020-08-03T00:00:00.000Z"),
            "dataVencimento" : ISODate("2020-07-31T00:00:00.000Z"),
            "dataEmissao" : ISODate("2020-07-01T00:00:00.000Z"),
            "dataCancelamento" : null,
            "juros" : NumberDecimal("0"),
            "multa" : NumberDecimal("0"),
            "desconto" : null,
            "divergencia" : NumberDecimal("2E-13"),
            "valorNominal" : NumberDecimal("1309.9999999999998"),
            "valorRecebido" : NumberDecimal("1310.0"),
            "formaRecebimento" : "BOLETO",
            "situacao" : "RECEBIDO"
        }, 
        {
            "recebimentoId" : UUID("7b220af2-cd10-4e30-a663-67bd54011ced"),
            "billId" : NumberLong(78519101),
            "billItemId" : NumberLong(94066337),
            "chargeId" : NumberLong(76575335),
            "dataRecebimento" : ISODate("2020-09-30T00:00:00.000Z"),
            "dataVencimento" : ISODate("2020-09-29T00:00:00.000Z"),
            "dataEmissao" : ISODate("2020-07-01T00:00:00.000Z"),
            "dataCancelamento" : null,
            "juros" : NumberDecimal("0"),
            "multa" : NumberDecimal("0"),
            "desconto" : null,
            "divergencia" : NumberDecimal("-0.0"),
            "valorNominal" : NumberDecimal("1320"),
            "valorRecebido" : NumberDecimal("1320.0"),
            "formaRecebimento" : "BOLETO",
            "situacao" : "RECEBIDO"
        }
    ]
},{
    "_id" : ObjectId("5fce94c4f71e5400018d55df"),
    "id" : UUID("4b51e77c-f61c-4313-bf87-3d0b42504a43"),
    "metaData" : {
        "ativo" : true,
        "dataCriacao" : ISODate("2020-12-07T20:47:00.953Z"),
        "dataAtualizacao" : ISODate("2020-12-08T14:10:04.937Z"),
        "dataDelecao" : null
    },
    "titular" : "Bmb Mode Center Indústria, Comércio e Serviços LTDA",
    "identificadorFiscal" : "04532167000154",
    "valorNominal" : NumberDecimal("2630"),
    "recebimentos" : [ 
        {
            "recebimentoId" : UUID("6846cd8a-8772-4dc5-9526-be0a894303d2"),
            "billId" : NumberLong(81331549),
            "billItemId" : NumberLong(97659614),
            "chargeId" : NumberLong(79466046),
            "dataRecebimento" : ISODate("2020-09-02T00:00:00.000Z"),
            "dataVencimento" : ISODate("2020-09-02T23:59:59.000Z"),
            "dataEmissao" : ISODate("2020-08-03T00:00:00.000Z"),
            "dataCancelamento" : null,
            "juros" : NumberDecimal("0"),
            "multa" : NumberDecimal("0"),
            "desconto" : null,
            "divergencia" : NumberDecimal("2E-13"),
            "valorNominal" : NumberDecimal("1309.9999999999998"),
            "valorRecebido" : NumberDecimal("1310.0"),
            "formaRecebimento" : "BOLETO",
            "situacao" : "RECEBIDO"
        }, 
        {
            "recebimentoId" : UUID("bedd8149-94d5-428f-91a2-059278813855"),
            "billId" : NumberLong(81331632),
            "billItemId" : NumberLong(97659710),
            "chargeId" : NumberLong(79466089),
            "dataRecebimento" : ISODate("2020-11-03T00:00:00.000Z"),
            "dataVencimento" : ISODate("2020-11-01T23:59:59.000Z"),
            "dataEmissao" : ISODate("2020-08-03T00:00:00.000Z"),
            "dataCancelamento" : null,
            "juros" : NumberDecimal("0"),
            "multa" : NumberDecimal("0"),
            "desconto" : null,
            "divergencia" : NumberDecimal("-0.0"),
            "valorNominal" : NumberDecimal("1320"),
            "valorRecebido" : NumberDecimal("1320.0"),
            "formaRecebimento" : "BOLETO",
            "situacao" : "RECEBIDO"
        }
    ]
},{
    "_id" : ObjectId("5fce9e5ebad08c0001b24e8e"),
    "id" : UUID("3d82b5c5-8c94-4e07-a9a7-a6e790320ac2"),
    "metaData" : {
        "ativo" : true,
        "dataCriacao" : ISODate("2020-12-07T21:27:58.089Z"),
        "dataAtualizacao" : ISODate("2020-12-08T14:08:27.440Z"),
        "dataDelecao" : null
    },
    "titular" : "Bmb Mode Center Indústria, Comércio e Serviços LTDA",
    "identificadorFiscal" : "04532167000154",
    "valorNominal" : NumberDecimal("2630"),
    "recebimentos" : [ 
        {
            "recebimentoId" : UUID("90a9b769-509d-472a-9c2a-c3854bdedb6f"),
            "billId" : NumberLong(84038413),
            "billItemId" : NumberLong(101036258),
            "chargeId" : NumberLong(82264642),
            "dataRecebimento" : ISODate("2020-10-01T00:00:00.000Z"),
            "dataVencimento" : ISODate("2020-10-01T00:00:00.000Z"),
            "dataEmissao" : ISODate("2020-09-01T00:00:00.000Z"),
            "dataCancelamento" : null,
            "juros" : NumberDecimal("0"),
            "multa" : NumberDecimal("0"),
            "desconto" : null,
            "divergencia" : NumberDecimal("-0.0"),
            "valorNominal" : NumberDecimal("2630"),
            "valorRecebido" : NumberDecimal("2630.0"),
            "formaRecebimento" : "BOLETO",
            "situacao" : "RECEBIDO"
        }
    ]
},{
    "_id" : ObjectId("5fcea242bad08c0001b24e9a"),
    "id" : UUID("6f89e255-dfdf-4ff0-800b-e51d16c54912"),
    "metaData" : {
        "ativo" : true,
        "dataCriacao" : ISODate("2020-12-07T21:44:34.651Z"),
        "dataAtualizacao" : ISODate("2020-12-08T14:08:13.208Z"),
        "dataDelecao" : null
    },
    "titular" : "Bmb Mode Center Indústria, Comércio e Serviços LTDA",
    "identificadorFiscal" : "04532167000154",
    "valorNominal" : NumberDecimal("2450"),
    "recebimentos" : [ 
        {
            "recebimentoId" : UUID("9a1c2dd1-c8fd-4d4a-8243-02732cb908d8"),
            "billId" : NumberLong(87219602),
            "billItemId" : NumberLong(104964909),
            "chargeId" : NumberLong(85547109),
            "dataRecebimento" : ISODate("2020-11-03T00:00:00.000Z"),
            "dataVencimento" : ISODate("2020-10-31T00:00:00.000Z"),
            "dataEmissao" : ISODate("2020-10-01T00:00:00.000Z"),
            "dataCancelamento" : null,
            "juros" : NumberDecimal("0"),
            "multa" : NumberDecimal("0"),
            "desconto" : null,
            "divergencia" : NumberDecimal("-0.0"),
            "valorNominal" : NumberDecimal("2450"),
            "valorRecebido" : NumberDecimal("2450.0"),
            "formaRecebimento" : "BOLETO",
            "situacao" : "RECEBIDO"
        }
    ]
},{
    "_id" : ObjectId("5fcea41abad08c0001b24ea5"),
    "id" : UUID("25894546-477d-4e87-adde-8def714f97d0"),
    "metaData" : {
        "ativo" : true,
        "dataCriacao" : ISODate("2020-12-07T21:52:26.666Z"),
        "dataAtualizacao" : ISODate("2020-12-21T19:13:36.954Z"),
        "dataDelecao" : null
    },
    "titular" : "Bmb Mode Center Indústria, Comércio e Serviços LTDA",
    "identificadorFiscal" : "04532167000154",
    "valorNominal" : NumberDecimal("2698"),
    "recebimentos" : [ 
        {
            "recebimentoId" : UUID("dac37025-4561-4028-bb18-12e7eeb867d2"),
            "billId" : NumberLong(90424110),
            "billItemId" : NumberLong(108988125),
            "chargeId" : NumberLong(89045397),
            "dataRecebimento" : ISODate("2020-12-04T03:00:00.000Z"),
            "dataVencimento" : ISODate("2020-12-03T00:00:00.000Z"),
            "dataEmissao" : ISODate("2020-11-03T00:00:00.000Z"),
            "dataCancelamento" : null,
            "juros" : NumberDecimal("0"),
            "multa" : NumberDecimal("0"),
            "desconto" : null,
            "divergencia" : NumberDecimal("-54.85"),
            "valorNominal" : NumberDecimal("2698"),
            "valorRecebido" : NumberDecimal("2698.0"),
            "formaRecebimento" : "BOLETO",
            "situacao" : "RECEBIDO"
        }
    ]
},{
    "_id" : ObjectId("5fcea845bad08c0001b24eb0"),
    "id" : UUID("6f0e423d-9582-4e77-9075-caa63a5d75d2"),
    "metaData" : {
        "ativo" : true,
        "dataCriacao" : ISODate("2020-12-07T22:10:13.802Z"),
        "dataAtualizacao" : ISODate("2021-01-08T20:20:59.964Z"),
        "dataDelecao" : null
    },
    "titular" : "Bmb Mode Center Indústria, Comércio e Serviços LTDA",
    "identificadorFiscal" : "04532167000154",
    "valorNominal" : NumberDecimal("2788"),
    "recebimentos" : [ 
        {
            "recebimentoId" : UUID("14eee523-62ad-4fc3-8187-33b16b4653a8"),
            "billId" : NumberLong(93240324),
            "billItemId" : NumberLong(112756557),
            "chargeId" : NumberLong(92340699),
            "dataRecebimento" : ISODate("2020-12-31T03:00:00.000Z"),
            "dataVencimento" : ISODate("2020-12-31T00:00:00.000Z"),
            "dataEmissao" : ISODate("2020-12-01T00:00:00.000Z"),
            "dataCancelamento" : null,
            "juros" : NumberDecimal("0"),
            "multa" : NumberDecimal("0"),
            "desconto" : null,
            "divergencia" : NumberDecimal("-0.0"),
            "valorNominal" : NumberDecimal("2788"),
            "valorRecebido" : NumberDecimal("2788.0"),
            "formaRecebimento" : "BOLETO",
            "situacao" : "RECEBIDO"
        }
    ]
},{
    "_id" : ObjectId("5fceb4a1bad08c0001b24ec4"),
    "id" : UUID("bf3e9a34-3648-4859-bda5-d3f1a713df41"),
    "metaData" : {
        "ativo" : false,
        "dataCriacao" : ISODate("2020-12-07T23:02:57.522Z"),
        "dataAtualizacao" : null,
        "dataDelecao" : ISODate("2020-12-07T23:06:48.077Z")
    },
    "titular" : "Bmb Mode Center Indústria, Comércio e Serviços LTDA",
    "identificadorFiscal" : "04532167000154",
    "valorNominal" : NumberDecimal("2011"),
    "recebimentos" : [ 
        {
            "recebimentoId" : UUID("23536087-42ef-41e1-965a-3d412188abf4"),
            "billId" : null,
            "billItemId" : null,
            "chargeId" : null,
            "dataRecebimento" : null,
            "dataVencimento" : ISODate("2021-01-06T03:01:00.000Z"),
            "dataEmissao" : null,
            "dataCancelamento" : null,
            "juros" : null,
            "multa" : null,
            "desconto" : null,
            "divergencia" : null,
            "valorNominal" : null,
            "valorRecebido" : null,
            "formaRecebimento" : "BOLETO",
            "situacao" : "PENDENTE"
        }
    ]
},{
    "_id" : ObjectId("5fceba66bad08c0001b24ecc"),
    "id" : UUID("7243f377-2ff4-4090-8bbc-7e188c17de38"),
    "metaData" : {
        "ativo" : false,
        "dataCriacao" : ISODate("2020-12-07T23:27:34.149Z"),
        "dataAtualizacao" : null,
        "dataDelecao" : ISODate("2020-12-07T23:29:29.325Z")
    },
    "titular" : "Bmb Mode Center Indústria, Comércio e Serviços LTDA",
    "identificadorFiscal" : "04532167000154",
    "valorNominal" : NumberDecimal("2036"),
    "recebimentos" : [ 
        {
            "recebimentoId" : UUID("0095cf59-1792-4f13-9e3b-bd65e2c17c03"),
            "billId" : null,
            "billItemId" : null,
            "chargeId" : null,
            "dataRecebimento" : null,
            "dataVencimento" : ISODate("2021-01-06T03:01:00.000Z"),
            "dataEmissao" : null,
            "dataCancelamento" : null,
            "juros" : null,
            "multa" : null,
            "desconto" : null,
            "divergencia" : null,
            "valorNominal" : null,
            "valorRecebido" : null,
            "formaRecebimento" : "BOLETO",
            "situacao" : "PENDENTE"
        }
    ]
},{
    "_id" : ObjectId("5fcfadb4bad08c0001b24ed6"),
    "id" : UUID("072c3516-35bd-46a7-b692-65f401f8d20a"),
    "metaData" : {
        "ativo" : true,
        "dataCriacao" : ISODate("2020-12-08T16:45:40.965Z"),
        "dataAtualizacao" : ISODate("2020-12-08T16:46:43.751Z"),
        "dataDelecao" : null
    },
    "titular" : "Bmb Mode Center Indústria, Comércio e Serviços LTDA",
    "identificadorFiscal" : "04532167000154",
    "valorNominal" : NumberDecimal("2486"),
    "recebimentos" : [ 
        {
            "recebimentoId" : UUID("3628f82d-8088-4f24-b906-f786dff8e4f4"),
            "billId" : NumberLong(65288179),
            "billItemId" : NumberLong(77759860),
            "chargeId" : NumberLong(63526003),
            "dataRecebimento" : ISODate("2020-03-05T00:00:00.000Z"),
            "dataVencimento" : ISODate("2020-03-04T23:59:59.000Z"),
            "dataEmissao" : ISODate("2020-02-07T10:49:14.000Z"),
            "dataCancelamento" : null,
            "juros" : NumberDecimal("0"),
            "multa" : NumberDecimal("0"),
            "desconto" : null,
            "divergencia" : NumberDecimal("-0.0"),
            "valorNominal" : NumberDecimal("2486"),
            "valorRecebido" : NumberDecimal("2486.0"),
            "formaRecebimento" : "BOLETO",
            "situacao" : "RECEBIDO"
        }
    ]
},{
    "_id" : ObjectId("5fcfae77bad08c0001b24ed7"),
    "id" : UUID("856088bd-1c8f-4b28-b928-6ae0ebc0704e"),
    "metaData" : {
        "ativo" : true,
        "dataCriacao" : ISODate("2020-12-08T16:48:55.285Z"),
        "dataAtualizacao" : ISODate("2020-12-08T16:49:37.782Z"),
        "dataDelecao" : null
    },
    "titular" : "Bmb Mode Center Indústria, Comércio e Serviços LTDA",
    "identificadorFiscal" : "04532167000154",
    "valorNominal" : NumberDecimal("3015"),
    "recebimentos" : [ 
        {
            "recebimentoId" : UUID("6bbb7cad-2230-482c-87b3-216f17580a3b"),
            "billId" : NumberLong(67393465),
            "billItemId" : NumberLong(80284304),
            "chargeId" : NumberLong(65581838),
            "dataRecebimento" : ISODate("2020-04-02T00:00:00.000Z"),
            "dataVencimento" : ISODate("2020-04-01T23:59:59.000Z"),
            "dataEmissao" : ISODate("2020-03-02T17:48:26.000Z"),
            "dataCancelamento" : null,
            "juros" : NumberDecimal("0"),
            "multa" : NumberDecimal("0"),
            "desconto" : null,
            "divergencia" : NumberDecimal("-0.0"),
            "valorNominal" : NumberDecimal("3015"),
            "valorRecebido" : NumberDecimal("3015.0"),
            "formaRecebimento" : "BOLETO",
            "situacao" : "RECEBIDO"
        }
    ]
},{
    "_id" : ObjectId("5fcfaf09bad08c0001b24ed8"),
    "id" : UUID("b1670a03-2380-4ccc-8b92-b83c9a075739"),
    "metaData" : {
        "ativo" : true,
        "dataCriacao" : ISODate("2020-12-08T16:51:21.553Z"),
        "dataAtualizacao" : ISODate("2020-12-08T16:52:02.034Z"),
        "dataDelecao" : null
    },
    "titular" : "Bmb Mode Center Indústria, Comércio e Serviços LTDA",
    "identificadorFiscal" : "04532167000154",
    "valorNominal" : NumberDecimal("2810"),
    "recebimentos" : [ 
        {
            "recebimentoId" : UUID("7727dfb1-2384-4953-a594-8da6d96de164"),
            "billId" : NumberLong(69984284),
            "billItemId" : NumberLong(83403488),
            "chargeId" : NumberLong(68117840),
            "dataRecebimento" : ISODate("2020-05-05T00:00:00.000Z"),
            "dataVencimento" : ISODate("2020-05-01T23:59:59.000Z"),
            "dataEmissao" : ISODate("2020-04-01T11:30:21.000Z"),
            "dataCancelamento" : null,
            "juros" : NumberDecimal("0"),
            "multa" : NumberDecimal("0"),
            "desconto" : null,
            "divergencia" : NumberDecimal("-0.0"),
            "valorNominal" : NumberDecimal("2810"),
            "valorRecebido" : NumberDecimal("2810.0"),
            "formaRecebimento" : "BOLETO",
            "situacao" : "RECEBIDO"
        }
    ]
},{
    "_id" : ObjectId("5ff32f9bbb7753000124b603"),
    "id" : UUID("373d7a93-3848-4f20-ba6b-50a385149b45"),
    "metaData" : {
        "ativo" : false,
        "dataCriacao" : ISODate("2021-01-04T15:09:15.161Z"),
        "dataAtualizacao" : null,
        "dataDelecao" : ISODate("2021-01-04T15:10:45.480Z")
    },
    "titular" : "Bmb Mode Center Indústria, Comércio e Serviços LTDA",
    "identificadorFiscal" : "04532167000154",
    "valorNominal" : NumberDecimal("4653"),
    "recebimentos" : [ 
        {
            "recebimentoId" : UUID("ba12b54d-fd80-4c1b-910f-9e51384617e3"),
            "billId" : null,
            "billItemId" : null,
            "chargeId" : null,
            "dataRecebimento" : null,
            "dataVencimento" : ISODate("2021-02-03T03:01:00.000Z"),
            "dataEmissao" : null,
            "dataCancelamento" : null,
            "juros" : NumberDecimal("0"),
            "multa" : NumberDecimal("0"),
            "desconto" : NumberDecimal("0"),
            "divergencia" : NumberDecimal("0"),
            "valorNominal" : NumberDecimal("0"),
            "valorRecebido" : NumberDecimal("0"),
            "formaRecebimento" : "BOLETO",
            "situacao" : "PENDENTE",
            "tipo" : "Assinatura",
            "cartao" : null
        }
    ]
},{
    "_id" : ObjectId("5ff3300bbb7753000124b604"),
    "id" : UUID("82d6df47-d679-4c28-b166-23fb72d11560"),
    "metaData" : {
        "ativo" : true,
        "dataCriacao" : ISODate("2021-01-04T15:11:07.122Z"),
        "dataAtualizacao" : ISODate("2021-02-18T17:30:10.220Z"),
        "dataDelecao" : null
    },
    "titular" : "Bmb Mode Center Indústria, Comércio e Serviços LTDA",
    "identificadorFiscal" : "04532167000154",
    "valorNominal" : NumberDecimal("4743"),
    "recebimentos" : [ 
        {
            "recebimentoId" : UUID("a8303a7f-4f66-471b-8c5b-edd2e7340e1f"),
            "billId" : NumberLong(96423245),
            "billItemId" : NumberLong(116876771),
            "chargeId" : NumberLong(96239913),
            "dataRecebimento" : ISODate("2021-02-03T03:00:00.000Z"),
            "dataVencimento" : ISODate("2021-02-03T03:01:00.000Z"),
            "dataEmissao" : ISODate("2021-01-04T15:11:41.078Z"),
            "dataCancelamento" : null,
            "juros" : NumberDecimal("0"),
            "multa" : NumberDecimal("0"),
            "desconto" : NumberDecimal("0"),
            "divergencia" : NumberDecimal("-0.0"),
            "valorNominal" : NumberDecimal("4743"),
            "valorRecebido" : NumberDecimal("4743.0"),
            "formaRecebimento" : "BOLETO",
            "situacao" : "RECEBIDO",
            "tipo" : "Assinatura",
            "cartao" : null,
            "divergenciaAssinaturas" : false
        }
    ]
},{
    "_id" : ObjectId("60185e7c54069f00018b3a1c"),
    "id" : UUID("8215bdb3-3919-4b06-a965-0b5bdd52c3c0"),
    "metaData" : {
        "ativo" : true,
        "dataCriacao" : ISODate("2021-02-01T20:03:08.472Z"),
        "dataAtualizacao" : ISODate("2021-03-08T12:06:07.431Z"),
        "dataDelecao" : null
    },
    "titular" : "Bmb Mode Center Indústria, Comércio e Serviços LTDA",
    "identificadorFiscal" : "04532167000154",
    "valorNominal" : NumberDecimal("3800"),
    "recebimentos" : [ 
        {
            "recebimentoId" : UUID("7a636a2d-02b3-4261-9606-221a461130f0"),
            "billId" : NumberLong(99129611),
            "billItemId" : NumberLong(120389630),
            "chargeId" : NumberLong(99739218),
            "dataRecebimento" : ISODate("2021-03-04T03:00:00.000Z"),
            "dataVencimento" : ISODate("2021-03-03T03:01:00.000Z"),
            "dataEmissao" : ISODate("2021-02-01T20:03:19.789Z"),
            "dataCancelamento" : null,
            "juros" : NumberDecimal("0"),
            "multa" : NumberDecimal("0"),
            "desconto" : NumberDecimal("0"),
            "divergencia" : NumberDecimal("-77.25"),
            "valorNominal" : NumberDecimal("3800"),
            "valorRecebido" : NumberDecimal("3800.0"),
            "formaRecebimento" : "BOLETO",
            "situacao" : "RECEBIDO",
            "divergenciaAssinaturas" : false,
            "tipo" : "Assinatura",
            "cartao" : null
        }
    ]
},{
    "_id" : ObjectId("603e3e55fcf5170001f8ec55"),
    "id" : UUID("497221fd-5e44-4f48-931f-000bec413b78"),
    "metaData" : {
        "ativo" : false,
        "dataCriacao" : ISODate("2021-03-02T13:32:05.069Z"),
        "dataAtualizacao" : null,
        "dataDelecao" : ISODate("2021-03-02T13:41:39.965Z")
    },
    "titular" : "Bmb Mode Center Indústria, Comércio e Serviços LTDA",
    "identificadorFiscal" : "04532167000154",
    "valorNominal" : NumberDecimal("3388"),
    "recebimentos" : [ 
        {
            "recebimentoId" : UUID("ae5eb088-ee9a-4a65-a469-d76b02936bcf"),
            "billId" : null,
            "billItemId" : null,
            "chargeId" : null,
            "dataRecebimento" : null,
            "dataVencimento" : ISODate("2021-04-01T03:01:00.000Z"),
            "dataEmissao" : null,
            "dataCancelamento" : null,
            "juros" : NumberDecimal("0"),
            "multa" : NumberDecimal("0"),
            "desconto" : NumberDecimal("0"),
            "divergencia" : NumberDecimal("0"),
            "valorNominal" : NumberDecimal("0"),
            "valorRecebido" : NumberDecimal("0"),
            "formaRecebimento" : "BOLETO",
            "situacao" : "PENDENTE",
            "divergenciaAssinaturas" : null,
            "tipo" : "Assinatura",
            "cartao" : null
        }
    ]
},{
    "_id" : ObjectId("603e750dfcf5170001f8ec5a"),
    "id" : UUID("f5740166-d378-4537-9d8e-9eb3b3a88381"),
    "metaData" : {
        "ativo" : true,
        "dataCriacao" : ISODate("2021-03-02T17:25:33.478Z"),
        "dataAtualizacao" : ISODate("2021-04-08T11:59:59.390Z"),
        "dataDelecao" : null
    },
    "titular" : "Bmb Mode Center Indústria, Comércio e Serviços LTDA",
    "identificadorFiscal" : "04532167000154",
    "valorNominal" : NumberDecimal("3478"),
    "recebimentos" : [ 
        {
            "recebimentoId" : UUID("3b038f00-85b1-4a52-a856-314259f24783"),
            "billId" : NumberLong(102275273),
            "billItemId" : NumberLong(124427563),
            "chargeId" : NumberLong(104158962),
            "dataRecebimento" : ISODate("2021-04-05T03:00:00.000Z"),
            "dataVencimento" : ISODate("2021-04-01T03:01:00.000Z"),
            "dataEmissao" : ISODate("2021-03-02T17:27:09.802Z"),
            "dataCancelamento" : null,
            "juros" : NumberDecimal("0"),
            "multa" : NumberDecimal("0"),
            "desconto" : NumberDecimal("0"),
            "divergencia" : NumberDecimal("-74.15"),
            "valorNominal" : NumberDecimal("3478"),
            "valorRecebido" : NumberDecimal("3478.0"),
            "formaRecebimento" : "BOLETO",
            "situacao" : "RECEBIDO",
            "divergenciaAssinaturas" : false,
            "tipo" : "Assinatura",
            "cartao" : null
        }
    ]
},{
    "_id" : ObjectId("6065d0482cbd190001ff25a6"),
    "id" : UUID("03041a6a-0a12-4253-8d41-64aa5440d406"),
    "metaData" : {
        "ativo" : true,
        "dataCriacao" : ISODate("2021-04-01T13:53:12.042Z"),
        "dataAtualizacao" : ISODate("2021-04-01T13:53:28.285Z"),
        "dataDelecao" : null
    },
    "titular" : "BMB MODE CENTER IND. COM E SERVIÇOS LTDA",
    "identificadorFiscal" : "04532167000154",
    "valorNominal" : NumberDecimal("3705"),
    "recebimentos" : [ 
        {
            "recebimentoId" : UUID("36e38c20-8bcd-47ca-940c-20e50ca6e84d"),
            "billId" : NumberLong(105240726),
            "billItemId" : NumberLong(128271937),
            "chargeId" : NumberLong(108626335),
            "dataRecebimento" : null,
            "dataVencimento" : ISODate("2021-05-01T03:01:00.000Z"),
            "dataEmissao" : ISODate("2021-04-01T13:53:28.271Z"),
            "dataCancelamento" : null,
            "juros" : NumberDecimal("0"),
            "multa" : NumberDecimal("0"),
            "desconto" : NumberDecimal("0"),
            "divergencia" : NumberDecimal("0"),
            "valorNominal" : NumberDecimal("3705"),
            "valorRecebido" : NumberDecimal("0"),
            "formaRecebimento" : "BOLETO",
            "situacao" : "EMITIDO",
            "divergenciaAssinaturas" : null,
            "tipo" : "Assinatura",
            "cartao" : null
        }
    ]
}
    
    ])