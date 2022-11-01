/* eslint-disable */
db.getSiblingDB('financeiro').getCollection('assinatura').insert([
    {
        "_id" : ObjectId("5fc557119ab06f000157434d"),
        "id" : UUID("fe09cd0a-6cd7-4be7-8d03-34a89291d76b"),
        "titular" : "Camilo Teixeira de Melo",
        "documentoAssinante" : "22301591867",
        "documentoEmpresa" : "34008403000107",
        "emailAssinante" : "camilotxm@outlook.com",
        "dataAdesao" : ISODate("2019-12-06T03:00:00.001Z"),
        "dataVigencia" : ISODate("2020-12-06T03:00:00.001Z"),
        "dataCancelamento" : null,
        "dataVigenciaPeriodoTrial" : null,
        "periodo" : 1,
        "valorRealTotal" : NumberDecimal("1080"),
        "valorRealMensal" : NumberDecimal("90"),
        "valorNominalParcela" : NumberDecimal("90"),
        "valorCoparticipacaoEmpresa" : NumberDecimal("90"),
        "idPlano" : UUID("005d9991-e7c7-49ff-a617-fa3ce1bad9e5"),
        "ehDescontoEmFolha" : false,
        "dataAtivacao" : ISODate("2020-12-07T13:36:00.071Z"),"parcelasPlano" : [ 
            {
                "numero" : 1,
                "mesReferencia" : ISODate("2019-12-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("98e49a97-8815-4b76-bd19-33ec32a778aa"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("c5ef2103-ad7e-4003-91ae-2cc23c64ff6f"),
                                "valorRecebido" : null
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 11,
                "mesReferencia" : ISODate("2020-10-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("dd02ab04-bbb9-4414-9128-5da90a664da0"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("767a3e28-0928-44cb-9ad6-48d2d36c9b11"),
                                "valorRecebido" : NumberDecimal("90")
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 10,
                "mesReferencia" : ISODate("2020-09-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("66292957-e38e-4f90-838c-ea787c98f3dc"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("85df9130-6ba8-4dc7-8ff1-403d26674ed5"),
                                "valorRecebido" : NumberDecimal("90")
                            }
                        ]
                    }
                ]
            }
        ],
        "metadata" : {
            "ativo" : true,
            "dataCriacao" : ISODate("2020-11-30T20:33:21.339Z"),
            "dataAtualizacao" : ISODate("2020-12-01T17:39:42.200Z"),
            "dataDelecao" : null
        }
    },{
        "_id" : ObjectId("5fc557119ab06f000157434e"),
        "id" : UUID("bda1c9a7-92a6-4847-a1fd-fb7b8cad740d"),
        "titular" : "Lorena do Carmo Caldas",
        "documentoAssinante" : "04924181528",
        "documentoEmpresa" : "34008403000107",
        "emailAssinante" : "llore.caldas@gmail.com",
        "dataAdesao" : ISODate("2019-12-06T01:52:01.004Z"),
        "dataVigencia" : ISODate("2020-12-06T01:52:01.004Z"),
        "dataCancelamento" : ISODate("2020-03-15T01:52:01.172Z"),
        "dataVigenciaPeriodoTrial" : null,
        "periodo" : 1,
        "valorRealTotal" : NumberDecimal("1080"),
        "valorRealMensal" : NumberDecimal("90"),
        "valorNominalParcela" : NumberDecimal("90"),
        "valorCoparticipacaoEmpresa" : NumberDecimal("90"),
        "idPlano" : UUID("005d9991-e7c7-49ff-a617-fa3ce1bad9e5"),
        "ehDescontoEmFolha" : false,
        "dataAtivacao" : ISODate("2020-12-07T13:36:00.071Z"),"parcelasPlano" : [ 
            {
                "numero" : 1,
                "mesReferencia" : ISODate("2019-12-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("98e49a97-8815-4b76-bd19-33ec32a778aa"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("c5ef2103-ad7e-4003-91ae-2cc23c64ff6f"),
                                "valorRecebido" : null
                            }
                        ]
                    }
                ]
            }
        ],
        "metadata" : {
            "ativo" : true,
            "dataCriacao" : ISODate("2020-11-30T20:33:21.433Z"),
            "dataAtualizacao" : ISODate("2020-11-30T20:40:26.014Z"),
            "dataDelecao" : null
        }
    },{
        "_id" : ObjectId("5fc557119ab06f000157434f"),
        "id" : UUID("4836ea70-580c-4079-9a62-18b0de1af0d6"),
        "titular" : "Renata Martins Batista",
        "documentoAssinante" : "09538032799",
        "documentoEmpresa" : "34008403000107",
        "emailAssinante" : "renata.martinsb@hotmail.com",
        "dataAdesao" : ISODate("2019-12-06T01:58:56.985Z"),
        "dataVigencia" : ISODate("2020-12-06T01:58:56.985Z"),
        "dataCancelamento" : null,
        "dataVigenciaPeriodoTrial" : null,
        "periodo" : 1,
        "valorRealTotal" : NumberDecimal("1080"),
        "valorRealMensal" : NumberDecimal("90"),
        "valorNominalParcela" : NumberDecimal("90"),
        "valorCoparticipacaoEmpresa" : NumberDecimal("90"),
        "idPlano" : UUID("005d9991-e7c7-49ff-a617-fa3ce1bad9e5"),
        "ehDescontoEmFolha" : true,
        "dataAtivacao" : ISODate("2020-12-07T13:36:00.071Z"),"parcelasPlano" : [ 
            {
                "numero" : 1,
                "mesReferencia" : ISODate("2019-12-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("98e49a97-8815-4b76-bd19-33ec32a778aa"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("c5ef2103-ad7e-4003-91ae-2cc23c64ff6f"),
                                "valorRecebido" : null
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 11,
                "mesReferencia" : ISODate("2020-10-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("dd02ab04-bbb9-4414-9128-5da90a664da0"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("767a3e28-0928-44cb-9ad6-48d2d36c9b11"),
                                "valorRecebido" : NumberDecimal("90")
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 10,
                "mesReferencia" : ISODate("2020-09-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("66292957-e38e-4f90-838c-ea787c98f3dc"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("85df9130-6ba8-4dc7-8ff1-403d26674ed5"),
                                "valorRecebido" : NumberDecimal("90")
                            }
                        ]
                    }
                ]
            }
        ],
        "metadata" : {
            "ativo" : true,
            "dataCriacao" : ISODate("2020-11-30T20:33:21.437Z"),
            "dataAtualizacao" : ISODate("2020-12-01T17:39:42.201Z"),
            "dataDelecao" : null
        }
    },{
        "_id" : ObjectId("5fc557119ab06f0001574350"),
        "id" : UUID("58175853-2e0c-4d37-839e-f0c5b900d5f2"),
        "titular" : "Danilo Henrique da Silva Souza",
        "documentoAssinante" : "64949575015",
        "documentoEmpresa" : "34008403000107",
        "emailAssinante" : "danilo_sp_4@hotmail.com",
        "dataAdesao" : ISODate("2019-12-06T13:29:05.783Z"),
        "dataVigencia" : ISODate("2020-12-06T13:29:05.783Z"),
        "dataCancelamento" : null,
        "dataVigenciaPeriodoTrial" : null,
        "periodo" : 1,
        "valorRealTotal" : NumberDecimal("1080"),
        "valorRealMensal" : NumberDecimal("90"),
        "valorNominalParcela" : NumberDecimal("90"),
        "valorCoparticipacaoEmpresa" : NumberDecimal("90"),
        "idPlano" : UUID("005d9991-e7c7-49ff-a617-fa3ce1bad9e5"),
        "ehDescontoEmFolha" : false,
        "dataAtivacao" : ISODate("2020-12-07T13:36:00.071Z"),"parcelasPlano" : [ 
            {
                "numero" : 1,
                "mesReferencia" : ISODate("2019-12-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("98e49a97-8815-4b76-bd19-33ec32a778aa"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("c5ef2103-ad7e-4003-91ae-2cc23c64ff6f"),
                                "valorRecebido" : null
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 11,
                "mesReferencia" : ISODate("2020-10-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("dd02ab04-bbb9-4414-9128-5da90a664da0"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("767a3e28-0928-44cb-9ad6-48d2d36c9b11"),
                                "valorRecebido" : NumberDecimal("90")
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 10,
                "mesReferencia" : ISODate("2020-09-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("66292957-e38e-4f90-838c-ea787c98f3dc"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("85df9130-6ba8-4dc7-8ff1-403d26674ed5"),
                                "valorRecebido" : NumberDecimal("90")
                            }
                        ]
                    }
                ]
            }
        ],
        "metadata" : {
            "ativo" : true,
            "dataCriacao" : ISODate("2020-11-30T20:33:21.440Z"),
            "dataAtualizacao" : ISODate("2020-12-01T17:39:42.203Z"),
            "dataDelecao" : null
        }
    },{
        "_id" : ObjectId("5fc557119ab06f0001574351"),
        "id" : UUID("982ab13c-cb2d-4f07-853f-a8c267dd2fc3"),
        "titular" : "Paula Iervolino Procopio Costa",
        "documentoAssinante" : "33375027842",
        "documentoEmpresa" : "34008403000107",
        "emailAssinante" : "paula.pip@gmail.com",
        "dataAdesao" : ISODate("2019-12-06T14:02:17.234Z"),
        "dataVigencia" : ISODate("2020-12-06T14:02:17.234Z"),
        "dataCancelamento" : null,
        "dataVigenciaPeriodoTrial" : null,
        "periodo" : 1,
        "valorRealTotal" : NumberDecimal("1080"),
        "valorRealMensal" : NumberDecimal("90"),
        "valorNominalParcela" : NumberDecimal("90"),
        "valorCoparticipacaoEmpresa" : NumberDecimal("90"),
        "idPlano" : UUID("005d9991-e7c7-49ff-a617-fa3ce1bad9e5"),
        "ehDescontoEmFolha" : false,
        "dataAtivacao" : ISODate("2020-12-07T13:36:00.071Z"),"parcelasPlano" : [ 
            {
                "numero" : 1,
                "mesReferencia" : ISODate("2019-12-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("98e49a97-8815-4b76-bd19-33ec32a778aa"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("c5ef2103-ad7e-4003-91ae-2cc23c64ff6f"),
                                "valorRecebido" : null
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 11,
                "mesReferencia" : ISODate("2020-10-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("dd02ab04-bbb9-4414-9128-5da90a664da0"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("767a3e28-0928-44cb-9ad6-48d2d36c9b11"),
                                "valorRecebido" : NumberDecimal("90")
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 10,
                "mesReferencia" : ISODate("2020-09-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("66292957-e38e-4f90-838c-ea787c98f3dc"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("85df9130-6ba8-4dc7-8ff1-403d26674ed5"),
                                "valorRecebido" : NumberDecimal("90")
                            }
                        ]
                    }
                ]
            }
        ],
        "metadata" : {
            "ativo" : true,
            "dataCriacao" : ISODate("2020-11-30T20:33:21.444Z"),
            "dataAtualizacao" : ISODate("2020-12-01T17:39:42.204Z"),
            "dataDelecao" : null
        }
    },{
        "_id" : ObjectId("5fc557119ab06f0001574352"),
        "id" : UUID("251d4445-e920-43e5-addd-20db26bd76d8"),
        "titular" : "Bruno Carone",
        "documentoAssinante" : "38436362810",
        "documentoEmpresa" : "34008403000107",
        "emailAssinante" : "b.v.carone@gmail.com",
        "dataAdesao" : ISODate("2019-12-06T15:02:29.413Z"),
        "dataVigencia" : ISODate("2020-12-06T15:02:29.413Z"),
        "dataCancelamento" : null,
        "dataVigenciaPeriodoTrial" : null,
        "periodo" : 1,
        "valorRealTotal" : NumberDecimal("2460"),
        "valorRealMensal" : NumberDecimal("205"),
        "valorNominalParcela" : NumberDecimal("205"),
        "valorCoparticipacaoEmpresa" : NumberDecimal("90"),
        "idPlano" : UUID("30bb9449-b489-4416-9659-b8de544c10e9"),
        "ehDescontoEmFolha" : true,
        "dataAtivacao" : ISODate("2020-12-07T13:36:00.071Z"),"parcelasPlano" : [ 
            {
                "numero" : 1,
                "mesReferencia" : ISODate("2019-12-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("98e49a97-8815-4b76-bd19-33ec32a778aa"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("c5ef2103-ad7e-4003-91ae-2cc23c64ff6f"),
                                "valorRecebido" : null
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 11,
                "mesReferencia" : ISODate("2020-10-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("dd02ab04-bbb9-4414-9128-5da90a664da0"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("767a3e28-0928-44cb-9ad6-48d2d36c9b11"),
                                "valorRecebido" : NumberDecimal("205")
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 10,
                "mesReferencia" : ISODate("2020-09-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("66292957-e38e-4f90-838c-ea787c98f3dc"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("85df9130-6ba8-4dc7-8ff1-403d26674ed5"),
                                "valorRecebido" : NumberDecimal("205")
                            }
                        ]
                    }
                ]
            }
        ],
        "metadata" : {
            "ativo" : true,
            "dataCriacao" : ISODate("2020-11-30T20:33:21.447Z"),
            "dataAtualizacao" : ISODate("2020-12-01T17:39:42.207Z"),
            "dataDelecao" : null
        }
    },{
        "_id" : ObjectId("5fc557119ab06f0001574353"),
        "id" : UUID("91716fc0-860c-4f3a-a767-241af136c329"),
        "titular" : "CLAUDINO VELLOSO BORGES",
        "documentoAssinante" : "01429125497",
        "documentoEmpresa" : "34008403000107",
        "emailAssinante" : "claudinovellosoborges@gmail.com",
        "dataAdesao" : ISODate("2019-12-06T21:04:30.976Z"),
        "dataVigencia" : ISODate("2020-12-06T21:04:30.976Z"),
        "dataCancelamento" : null,
        "dataVigenciaPeriodoTrial" : null,
        "periodo" : 1,
        "valorRealTotal" : NumberDecimal("2460"),
        "valorRealMensal" : NumberDecimal("205"),
        "valorNominalParcela" : NumberDecimal("115"),
        "valorCoparticipacaoEmpresa" : NumberDecimal("90"),
        "idPlano" : UUID("30bb9449-b489-4416-9659-b8de544c10e9"),
        "ehDescontoEmFolha" : false,
        "dataAtivacao" : ISODate("2020-12-07T13:36:00.071Z"),"parcelasPlano" : [ 
            {
                "numero" : 1,
                "mesReferencia" : ISODate("2019-12-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("98e49a97-8815-4b76-bd19-33ec32a778aa"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("c5ef2103-ad7e-4003-91ae-2cc23c64ff6f"),
                                "valorRecebido" : null
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 11,
                "mesReferencia" : ISODate("2020-10-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("dd02ab04-bbb9-4414-9128-5da90a664da0"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("767a3e28-0928-44cb-9ad6-48d2d36c9b11"),
                                "valorRecebido" : NumberDecimal("90")
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 10,
                "mesReferencia" : ISODate("2020-09-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("66292957-e38e-4f90-838c-ea787c98f3dc"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("85df9130-6ba8-4dc7-8ff1-403d26674ed5"),
                                "valorRecebido" : NumberDecimal("90")
                            }
                        ]
                    }
                ]
            }
        ],
        "metadata" : {
            "ativo" : true,
            "dataCriacao" : ISODate("2020-11-30T20:33:21.450Z"),
            "dataAtualizacao" : ISODate("2020-12-01T17:39:42.208Z"),
            "dataDelecao" : null
        }
    },{
        "_id" : ObjectId("5fc557119ab06f0001574354"),
        "id" : UUID("531e3736-3efe-4a7d-9128-adbab1f6d63d"),
        "titular" : "Mirza Cristine Voos",
        "documentoAssinante" : "79183620982",
        "documentoEmpresa" : "34008403000107",
        "emailAssinante" : "mirzacv@gmail.com",
        "dataAdesao" : ISODate("2019-12-06T21:14:27.548Z"),
        "dataVigencia" : ISODate("2020-12-06T21:14:27.548Z"),
        "dataCancelamento" : null,
        "dataVigenciaPeriodoTrial" : null,
        "periodo" : 1,
        "valorRealTotal" : NumberDecimal("1080"),
        "valorRealMensal" : NumberDecimal("90"),
        "valorNominalParcela" : NumberDecimal("90"),
        "valorCoparticipacaoEmpresa" : NumberDecimal("90"),
        "idPlano" : UUID("005d9991-e7c7-49ff-a617-fa3ce1bad9e5"),
        "ehDescontoEmFolha" : false,
        "dataAtivacao" : ISODate("2020-12-07T13:36:00.071Z"),"parcelasPlano" : [ 
            {
                "numero" : 1,
                "mesReferencia" : ISODate("2019-12-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("98e49a97-8815-4b76-bd19-33ec32a778aa"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("c5ef2103-ad7e-4003-91ae-2cc23c64ff6f"),
                                "valorRecebido" : null
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 11,
                "mesReferencia" : ISODate("2020-10-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("dd02ab04-bbb9-4414-9128-5da90a664da0"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("767a3e28-0928-44cb-9ad6-48d2d36c9b11"),
                                "valorRecebido" : NumberDecimal("90")
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 10,
                "mesReferencia" : ISODate("2020-09-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("66292957-e38e-4f90-838c-ea787c98f3dc"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("85df9130-6ba8-4dc7-8ff1-403d26674ed5"),
                                "valorRecebido" : NumberDecimal("90")
                            }
                        ]
                    }
                ]
            }
        ],
        "metadata" : {
            "ativo" : true,
            "dataCriacao" : ISODate("2020-11-30T20:33:21.453Z"),
            "dataAtualizacao" : ISODate("2020-12-01T17:39:42.210Z"),
            "dataDelecao" : null
        }
    },{
        "_id" : ObjectId("5fc557119ab06f0001574355"),
        "id" : UUID("1e32eceb-f384-4a6a-8708-519d51603bce"),
        "titular" : "Osmar Vieira Coelho Neto",
        "documentoAssinante" : "33595792831",
        "documentoEmpresa" : "34008403000107",
        "emailAssinante" : "osmar.v.c.neto@gmail.com",
        "dataAdesao" : ISODate("2019-12-06T22:05:58.696Z"),
        "dataVigencia" : ISODate("2020-12-06T22:05:58.696Z"),
        "dataCancelamento" : null,
        "dataVigenciaPeriodoTrial" : null,
        "periodo" : 1,
        "valorRealTotal" : NumberDecimal("1080"),
        "valorRealMensal" : NumberDecimal("90"),
        "valorNominalParcela" : NumberDecimal("90"),
        "valorCoparticipacaoEmpresa" : NumberDecimal("90"),
        "idPlano" : UUID("005d9991-e7c7-49ff-a617-fa3ce1bad9e5"),
        "ehDescontoEmFolha" : false,
        "dataAtivacao" : ISODate("2020-12-07T13:36:00.071Z"),"parcelasPlano" : [ 
            {
                "numero" : 1,
                "mesReferencia" : ISODate("2019-12-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("98e49a97-8815-4b76-bd19-33ec32a778aa"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("c5ef2103-ad7e-4003-91ae-2cc23c64ff6f"),
                                "valorRecebido" : null
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 11,
                "mesReferencia" : ISODate("2020-10-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("dd02ab04-bbb9-4414-9128-5da90a664da0"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("767a3e28-0928-44cb-9ad6-48d2d36c9b11"),
                                "valorRecebido" : NumberDecimal("90")
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 10,
                "mesReferencia" : ISODate("2020-09-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("66292957-e38e-4f90-838c-ea787c98f3dc"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("85df9130-6ba8-4dc7-8ff1-403d26674ed5"),
                                "valorRecebido" : NumberDecimal("90")
                            }
                        ]
                    }
                ]
            }
        ],
        "metadata" : {
            "ativo" : true,
            "dataCriacao" : ISODate("2020-11-30T20:33:21.456Z"),
            "dataAtualizacao" : ISODate("2020-12-01T17:39:42.212Z"),
            "dataDelecao" : null
        }
    },{
        "_id" : ObjectId("5fc557119ab06f0001574356"),
        "id" : UUID("939310a1-e884-4a42-9016-196f28af7b76"),
        "titular" : "Murilo de Freitas Alves",
        "documentoAssinante" : "35194814801",
        "documentoEmpresa" : "34008403000107",
        "emailAssinante" : "mfreiitas@gmail.com",
        "dataAdesao" : ISODate("2019-12-06T23:18:33.898Z"),
        "dataVigencia" : ISODate("2020-12-06T23:18:33.898Z"),
        "dataCancelamento" : null,
        "dataVigenciaPeriodoTrial" : null,
        "periodo" : 1,
        "valorRealTotal" : NumberDecimal("1080"),
        "valorRealMensal" : NumberDecimal("90"),
        "valorNominalParcela" : NumberDecimal("90"),
        "valorCoparticipacaoEmpresa" : NumberDecimal("0"),
        "idPlano" : UUID("005d9991-e7c7-49ff-a617-fa3ce1bad9e5"),
        "ehDescontoEmFolha" : false,
        "dataAtivacao" : ISODate("2020-12-07T13:36:00.071Z"),"parcelasPlano" : [],
        "metadata" : {
            "ativo" : false,
            "dataCriacao" : ISODate("2020-11-30T20:33:21.459Z"),
            "dataAtualizacao" : null,
            "dataDelecao" : null
        }
    },{
        "_id" : ObjectId("5fc557119ab06f0001574357"),
        "id" : UUID("02051edd-61e5-4e8a-958d-630fee19d61a"),
        "titular" : "Ana Carolina Pagotto Gasparini Cavalheiro",
        "documentoAssinante" : "41000832899",
        "documentoEmpresa" : "34008403000107",
        "emailAssinante" : "Carol.gasparini@hotmail.com",
        "dataAdesao" : ISODate("2019-12-07T17:39:03.489Z"),
        "dataVigencia" : ISODate("2020-12-07T17:39:03.489Z"),
        "dataCancelamento" : null,
        "dataVigenciaPeriodoTrial" : null,
        "periodo" : 1,
        "valorRealTotal" : NumberDecimal("3516"),
        "valorRealMensal" : NumberDecimal("293"),
        "valorNominalParcela" : NumberDecimal("293"),
        "valorCoparticipacaoEmpresa" : NumberDecimal("90"),
        "idPlano" : UUID("df3d6e2c-f124-4b56-b287-327cccb6bf84"),
        "ehDescontoEmFolha" : true,
        "dataAtivacao" : ISODate("2020-12-07T13:36:00.071Z"),"parcelasPlano" : [ 
            {
                "numero" : 1,
                "mesReferencia" : ISODate("2019-12-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("98e49a97-8815-4b76-bd19-33ec32a778aa"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("c5ef2103-ad7e-4003-91ae-2cc23c64ff6f"),
                                "valorRecebido" : null
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 11,
                "mesReferencia" : ISODate("2020-10-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("dd02ab04-bbb9-4414-9128-5da90a664da0"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("767a3e28-0928-44cb-9ad6-48d2d36c9b11"),
                                "valorRecebido" : NumberDecimal("293")
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 10,
                "mesReferencia" : ISODate("2020-09-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("66292957-e38e-4f90-838c-ea787c98f3dc"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("85df9130-6ba8-4dc7-8ff1-403d26674ed5"),
                                "valorRecebido" : NumberDecimal("293")
                            }
                        ]
                    }
                ]
            }
        ],
        "metadata" : {
            "ativo" : true,
            "dataCriacao" : ISODate("2020-11-30T20:33:21.465Z"),
            "dataAtualizacao" : ISODate("2020-12-01T17:39:42.214Z"),
            "dataDelecao" : null
        }
    },{
        "_id" : ObjectId("5fc557119ab06f0001574359"),
        "id" : UUID("943f45e8-6634-4a15-983b-b1e425c52cf1"),
        "titular" : "Erika Michelle DAmatto Lauz Giorgette",
        "documentoAssinante" : "22774500818",
        "documentoEmpresa" : "34008403000107",
        "emailAssinante" : "erikalauz@hotmail.com",
        "dataAdesao" : ISODate("2019-12-09T12:19:29.781Z"),
        "dataVigencia" : ISODate("2020-12-09T12:19:29.781Z"),
        "dataCancelamento" : ISODate("2020-05-27T14:35:00.781Z"),
        "dataVigenciaPeriodoTrial" : null,
        "periodo" : 1,
        "valorRealTotal" : NumberDecimal("1080"),
        "valorRealMensal" : NumberDecimal("90"),
        "valorNominalParcela" : NumberDecimal("90"),
        "valorCoparticipacaoEmpresa" : NumberDecimal("0"),
        "idPlano" : UUID("005d9991-e7c7-49ff-a617-fa3ce1bad9e5"),
        "ehDescontoEmFolha" : false,
        "dataAtivacao" : ISODate("2020-12-07T13:36:00.071Z"),"parcelasPlano" : [],
        "metadata" : {
            "ativo" : true,
            "dataCriacao" : ISODate("2020-11-30T20:33:21.478Z"),
            "dataAtualizacao" : null,
            "dataDelecao" : null
        }
    },{
        "_id" : ObjectId("5fc557119ab06f000157435c"),
        "id" : UUID("c30bce8e-d240-4cd6-9a55-28213c34ee67"),
        "titular" : "Guilherme Martins Duarte",
        "documentoAssinante" : "49787289831",
        "documentoEmpresa" : "34008403000107",
        "emailAssinante" : "guilhermemar09.10@gmail.com",
        "dataAdesao" : ISODate("2019-12-09T21:03:26.644Z"),
        "dataVigencia" : ISODate("2020-12-09T21:03:26.644Z"),
        "dataCancelamento" : null,
        "dataVigenciaPeriodoTrial" : null,
        "periodo" : 1,
        "valorRealTotal" : NumberDecimal("1080"),
        "valorRealMensal" : NumberDecimal("90"),
        "valorNominalParcela" : NumberDecimal("90"),
        "valorCoparticipacaoEmpresa" : NumberDecimal("90"),
        "idPlano" : UUID("005d9991-e7c7-49ff-a617-fa3ce1bad9e5"),
        "ehDescontoEmFolha" : false,
        "dataAtivacao" : ISODate("2020-12-07T13:36:00.071Z"),"parcelasPlano" : [ 
            {
                "numero" : 1,
                "mesReferencia" : ISODate("2019-12-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("98e49a97-8815-4b76-bd19-33ec32a778aa"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("c5ef2103-ad7e-4003-91ae-2cc23c64ff6f"),
                                "valorRecebido" : null
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 11,
                "mesReferencia" : ISODate("2020-10-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("dd02ab04-bbb9-4414-9128-5da90a664da0"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("767a3e28-0928-44cb-9ad6-48d2d36c9b11"),
                                "valorRecebido" : NumberDecimal("90")
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 10,
                "mesReferencia" : ISODate("2020-09-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("66292957-e38e-4f90-838c-ea787c98f3dc"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("85df9130-6ba8-4dc7-8ff1-403d26674ed5"),
                                "valorRecebido" : NumberDecimal("90")
                            }
                        ]
                    }
                ]
            }
        ],
        "metadata" : {
            "ativo" : true,
            "dataCriacao" : ISODate("2020-11-30T20:33:21.488Z"),
            "dataAtualizacao" : ISODate("2020-12-01T17:39:42.216Z"),
            "dataDelecao" : null
        }
    },{
        "_id" : ObjectId("5fc557119ab06f000157435e"),
        "id" : UUID("b413b9aa-c700-4b79-84a3-782f981bedc4"),
        "titular" : "Adriana Carrasco de Andrade Mattioli",
        "documentoAssinante" : "37311058880",
        "documentoEmpresa" : "34008403000107",
        "emailAssinante" : "dricarrasco.ac@gmail.com",
        "dataAdesao" : ISODate("2019-12-10T13:43:26.795Z"),
        "dataVigencia" : ISODate("2020-12-10T13:43:26.795Z"),
        "dataCancelamento" : null,
        "dataVigenciaPeriodoTrial" : null,
        "periodo" : 1,
        "valorRealTotal" : NumberDecimal("1896"),
        "valorRealMensal" : NumberDecimal("158"),
        "valorNominalParcela" : NumberDecimal("158"),
        "valorCoparticipacaoEmpresa" : NumberDecimal("90"),
        "idPlano" : UUID("7077243c-c72f-4f2d-8f2d-7b1ccafe1e6a"),
        "ehDescontoEmFolha" : true,
        "dataAtivacao" : ISODate("2020-12-07T13:36:00.071Z"),"parcelasPlano" : [ 
            {
                "numero" : 1,
                "mesReferencia" : ISODate("2019-12-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("98e49a97-8815-4b76-bd19-33ec32a778aa"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("c5ef2103-ad7e-4003-91ae-2cc23c64ff6f"),
                                "valorRecebido" : null
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 11,
                "mesReferencia" : ISODate("2020-10-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("dd02ab04-bbb9-4414-9128-5da90a664da0"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("767a3e28-0928-44cb-9ad6-48d2d36c9b11"),
                                "valorRecebido" : NumberDecimal("158")
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 10,
                "mesReferencia" : ISODate("2020-09-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("66292957-e38e-4f90-838c-ea787c98f3dc"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("85df9130-6ba8-4dc7-8ff1-403d26674ed5"),
                                "valorRecebido" : NumberDecimal("158")
                            }
                        ]
                    }
                ]
            }
        ],
        "metadata" : {
            "ativo" : true,
            "dataCriacao" : ISODate("2020-11-30T20:33:21.494Z"),
            "dataAtualizacao" : ISODate("2020-12-01T17:39:42.218Z"),
            "dataDelecao" : null
        }
    },{
        "_id" : ObjectId("5fc557119ab06f0001574362"),
        "id" : UUID("e588f05f-45b9-4c18-b5e6-3ed7fb46f955"),
        "titular" : "Solange Tatiana Nogueira Quinones Lopez Pedro",
        "documentoAssinante" : "18712109843",
        "documentoEmpresa" : "34008403000107",
        "emailAssinante" : "solange_tatiana@hotmail.com",
        "dataAdesao" : ISODate("2019-12-12T17:29:28.455Z"),
        "dataVigencia" : ISODate("2020-12-12T17:29:28.455Z"),
        "dataCancelamento" : null,
        "dataVigenciaPeriodoTrial" : null,
        "periodo" : 1,
        "valorRealTotal" : NumberDecimal("1080"),
        "valorRealMensal" : NumberDecimal("90"),
        "valorNominalParcela" : NumberDecimal("90"),
        "valorCoparticipacaoEmpresa" : NumberDecimal("90"),
        "idPlano" : UUID("005d9991-e7c7-49ff-a617-fa3ce1bad9e5"),
        "ehDescontoEmFolha" : false,
        "dataAtivacao" : ISODate("2020-12-07T13:36:00.071Z"),"parcelasPlano" : [ 
            {
                "numero" : 1,
                "mesReferencia" : ISODate("2019-12-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("98e49a97-8815-4b76-bd19-33ec32a778aa"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("c5ef2103-ad7e-4003-91ae-2cc23c64ff6f"),
                                "valorRecebido" : null
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 11,
                "mesReferencia" : ISODate("2020-10-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("dd02ab04-bbb9-4414-9128-5da90a664da0"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("767a3e28-0928-44cb-9ad6-48d2d36c9b11"),
                                "valorRecebido" : NumberDecimal("90")
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 10,
                "mesReferencia" : ISODate("2020-09-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("66292957-e38e-4f90-838c-ea787c98f3dc"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("85df9130-6ba8-4dc7-8ff1-403d26674ed5"),
                                "valorRecebido" : NumberDecimal("90")
                            }
                        ]
                    }
                ]
            }
        ],
        "metadata" : {
            "ativo" : true,
            "dataCriacao" : ISODate("2020-11-30T20:33:21.507Z"),
            "dataAtualizacao" : ISODate("2020-12-01T17:39:42.219Z"),
            "dataDelecao" : null
        }
    },{
        "_id" : ObjectId("5fc557119ab06f0001574364"),
        "id" : UUID("ecff533e-29eb-44e6-8c35-1def74a0ad68"),
        "titular" : "Cinthya da Silva Santos",
        "documentoAssinante" : "41007713801",
        "documentoEmpresa" : "34008403000107",
        "emailAssinante" : "san.cinthya@gmail.com",
        "dataAdesao" : ISODate("2019-12-13T19:32:51.818Z"),
        "dataVigencia" : ISODate("2020-12-13T19:32:51.818Z"),
        "dataCancelamento" : null,
        "dataVigenciaPeriodoTrial" : null,
        "periodo" : 1,
        "valorRealTotal" : NumberDecimal("1080"),
        "valorRealMensal" : NumberDecimal("90"),
        "valorNominalParcela" : NumberDecimal("90"),
        "valorCoparticipacaoEmpresa" : NumberDecimal("90"),
        "idPlano" : UUID("005d9991-e7c7-49ff-a617-fa3ce1bad9e5"),
        "ehDescontoEmFolha" : false,
        "dataAtivacao" : ISODate("2020-12-07T13:36:00.071Z"),"parcelasPlano" : [ 
            {
                "numero" : 1,
                "mesReferencia" : ISODate("2019-12-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("98e49a97-8815-4b76-bd19-33ec32a778aa"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("c5ef2103-ad7e-4003-91ae-2cc23c64ff6f"),
                                "valorRecebido" : null
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 11,
                "mesReferencia" : ISODate("2020-10-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("dd02ab04-bbb9-4414-9128-5da90a664da0"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("767a3e28-0928-44cb-9ad6-48d2d36c9b11"),
                                "valorRecebido" : NumberDecimal("90")
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 10,
                "mesReferencia" : ISODate("2020-09-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("66292957-e38e-4f90-838c-ea787c98f3dc"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("85df9130-6ba8-4dc7-8ff1-403d26674ed5"),
                                "valorRecebido" : NumberDecimal("90")
                            }
                        ]
                    }
                ]
            }
        ],
        "metadata" : {
            "ativo" : true,
            "dataCriacao" : ISODate("2020-11-30T20:33:21.514Z"),
            "dataAtualizacao" : ISODate("2020-12-01T17:39:42.221Z"),
            "dataDelecao" : null
        }
    },{
        "_id" : ObjectId("5fc557119ab06f0001574365"),
        "id" : UUID("fc794777-8edc-4573-824c-b0abca9032e8"),
        "titular" : "Henrique Teixeira Martins",
        "documentoAssinante" : "32812023813",
        "documentoEmpresa" : "34008403000107",
        "emailAssinante" : "henriqueteixeiramartins@gmail.com",
        "dataAdesao" : ISODate("2019-12-16T16:51:50.192Z"),
        "dataVigencia" : ISODate("2020-12-16T16:51:50.192Z"),
        "dataCancelamento" : ISODate("2020-06-16T13:44:00.713Z"),
        "dataVigenciaPeriodoTrial" : null,
        "periodo" : 1,
        "valorRealTotal" : NumberDecimal("1080"),
        "valorRealMensal" : NumberDecimal("90"),
        "valorNominalParcela" : NumberDecimal("90"),
        "valorCoparticipacaoEmpresa" : NumberDecimal("0"),
        "idPlano" : UUID("005d9991-e7c7-49ff-a617-fa3ce1bad9e5"),
        "ehDescontoEmFolha" : false,
        "dataAtivacao" : ISODate("2020-12-07T13:36:00.071Z"),"parcelasPlano" : [],
        "metadata" : {
            "ativo" : false,
            "dataCriacao" : ISODate("2020-11-30T20:33:21.517Z"),
            "dataAtualizacao" : null,
            "dataDelecao" : null
        }
    },{
        "_id" : ObjectId("5fc557119ab06f0001574366"),
        "id" : UUID("647fcd79-88bb-49da-9e1b-85b037a22d10"),
        "titular" : "Fabio Martiniano da Rocha",
        "documentoAssinante" : "34382630843",
        "documentoEmpresa" : "34008403000107",
        "emailAssinante" : "fabiobesouro@gmail.com",
        "dataAdesao" : ISODate("2019-12-18T13:13:48.968Z"),
        "dataVigencia" : ISODate("2020-12-18T13:13:48.968Z"),
        "dataCancelamento" : null,
        "dataVigenciaPeriodoTrial" : null,
        "periodo" : 1,
        "valorRealTotal" : NumberDecimal("1080"),
        "valorRealMensal" : NumberDecimal("90"),
        "valorNominalParcela" : NumberDecimal("90"),
        "valorCoparticipacaoEmpresa" : NumberDecimal("90"),
        "idPlano" : UUID("005d9991-e7c7-49ff-a617-fa3ce1bad9e5"),
        "ehDescontoEmFolha" : false,
        "dataAtivacao" : ISODate("2020-12-07T13:36:00.071Z"),"parcelasPlano" : [ 
            {
                "numero" : 1,
                "mesReferencia" : ISODate("2019-12-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("98e49a97-8815-4b76-bd19-33ec32a778aa"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("c5ef2103-ad7e-4003-91ae-2cc23c64ff6f"),
                                "valorRecebido" : null
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 11,
                "mesReferencia" : ISODate("2020-10-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("dd02ab04-bbb9-4414-9128-5da90a664da0"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("767a3e28-0928-44cb-9ad6-48d2d36c9b11"),
                                "valorRecebido" : NumberDecimal("90")
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 10,
                "mesReferencia" : ISODate("2020-09-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("66292957-e38e-4f90-838c-ea787c98f3dc"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("85df9130-6ba8-4dc7-8ff1-403d26674ed5"),
                                "valorRecebido" : NumberDecimal("90")
                            }
                        ]
                    }
                ]
            }
        ],
        "metadata" : {
            "ativo" : true,
            "dataCriacao" : ISODate("2020-11-30T20:33:21.520Z"),
            "dataAtualizacao" : ISODate("2020-12-01T17:39:42.223Z"),
            "dataDelecao" : null
        }
    },{
        "_id" : ObjectId("5fc557119ab06f0001574367"),
        "id" : UUID("a118ac7e-e484-48f3-93dd-22a03619b88d"),
        "titular" : "PEDRO PAULO TOUSSAINT",
        "documentoAssinante" : "39611653867",
        "documentoEmpresa" : "34008403000107",
        "emailAssinante" : "toussaintpp@gmail.com",
        "dataAdesao" : ISODate("2019-12-19T19:18:27.910Z"),
        "dataVigencia" : ISODate("2020-12-19T19:18:27.910Z"),
        "dataCancelamento" : null,
        "dataVigenciaPeriodoTrial" : null,
        "periodo" : 1,
        "valorRealTotal" : NumberDecimal("2460"),
        "valorRealMensal" : NumberDecimal("205"),
        "valorNominalParcela" : NumberDecimal("115"),
        "valorCoparticipacaoEmpresa" : NumberDecimal("123"),
        "idPlano" : UUID("30bb9449-b489-4416-9659-b8de544c10e9"),
        "ehDescontoEmFolha" : false,
        "dataAtivacao" : ISODate("2020-12-07T13:36:00.071Z"),"parcelasPlano" : [ 
            {
                "numero" : 1,
                "mesReferencia" : ISODate("2019-12-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("98e49a97-8815-4b76-bd19-33ec32a778aa"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("c5ef2103-ad7e-4003-91ae-2cc23c64ff6f"),
                                "valorRecebido" : null
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 11,
                "mesReferencia" : ISODate("2020-10-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("dd02ab04-bbb9-4414-9128-5da90a664da0"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("767a3e28-0928-44cb-9ad6-48d2d36c9b11"),
                                "valorRecebido" : NumberDecimal("90")
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 10,
                "mesReferencia" : ISODate("2020-09-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("66292957-e38e-4f90-838c-ea787c98f3dc"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("85df9130-6ba8-4dc7-8ff1-403d26674ed5"),
                                "valorRecebido" : NumberDecimal("123")
                            }
                        ]
                    }
                ]
            }
        ],
        "metadata" : {
            "ativo" : true,
            "dataCriacao" : ISODate("2020-11-30T20:33:21.524Z"),
            "dataAtualizacao" : ISODate("2020-12-01T17:39:42.225Z"),
            "dataDelecao" : null
        }
    },{
        "_id" : ObjectId("5fc557119ab06f0001574368"),
        "id" : UUID("6f4fea6d-a510-4d94-b4b0-192cb7cef27b"),
        "titular" : "Alcenio Joao Borges Junior",
        "documentoAssinante" : "05118415900",
        "documentoEmpresa" : "34008403000107",
        "emailAssinante" : "alcenio.borges@gmail.com",
        "dataAdesao" : ISODate("2019-12-20T14:55:40.314Z"),
        "dataVigencia" : ISODate("2020-12-20T14:55:40.314Z"),
        "dataCancelamento" : ISODate("2020-02-17T14:55:40.872Z"),
        "dataVigenciaPeriodoTrial" : null,
        "periodo" : 1,
        "valorRealTotal" : NumberDecimal("1080"),
        "valorRealMensal" : NumberDecimal("90"),
        "valorNominalParcela" : NumberDecimal("90"),
        "valorCoparticipacaoEmpresa" : NumberDecimal("0"),
        "idPlano" : UUID("005d9991-e7c7-49ff-a617-fa3ce1bad9e5"),
        "ehDescontoEmFolha" : false,
        "dataAtivacao" : ISODate("2020-12-07T13:36:00.071Z"),"parcelasPlano" : [],
        "metadata" : {
            "ativo" : false,
            "dataCriacao" : ISODate("2020-11-30T20:33:21.527Z"),
            "dataAtualizacao" : null,
            "dataDelecao" : null
        }
    },{
        "_id" : ObjectId("5fc557119ab06f000157436a"),
        "id" : UUID("73cc5e17-869b-40ec-8fed-93e9f6cc0caf"),
        "titular" : "Anderson Ferreira de Oliveira",
        "documentoAssinante" : "37819391898",
        "documentoEmpresa" : "34008403000107",
        "emailAssinante" : "andersonfoliveira@yahoo.com.br",
        "dataAdesao" : ISODate("2019-12-24T15:46:29.982Z"),
        "dataVigencia" : ISODate("2020-12-24T15:46:29.982Z"),
        "dataCancelamento" : null,
        "dataVigenciaPeriodoTrial" : null,
        "periodo" : 1,
        "valorRealTotal" : NumberDecimal("1080"),
        "valorRealMensal" : NumberDecimal("90"),
        "valorNominalParcela" : NumberDecimal("90"),
        "valorCoparticipacaoEmpresa" : NumberDecimal("90"),
        "idPlano" : UUID("005d9991-e7c7-49ff-a617-fa3ce1bad9e5"),
        "ehDescontoEmFolha" : false,
        "dataAtivacao" : ISODate("2020-12-07T13:36:00.071Z"),"parcelasPlano" : [ 
            {
                "numero" : 1,
                "mesReferencia" : ISODate("2019-12-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("98e49a97-8815-4b76-bd19-33ec32a778aa"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("c5ef2103-ad7e-4003-91ae-2cc23c64ff6f"),
                                "valorRecebido" : null
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 11,
                "mesReferencia" : ISODate("2020-10-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("dd02ab04-bbb9-4414-9128-5da90a664da0"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("767a3e28-0928-44cb-9ad6-48d2d36c9b11"),
                                "valorRecebido" : NumberDecimal("90")
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 10,
                "mesReferencia" : ISODate("2020-09-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("66292957-e38e-4f90-838c-ea787c98f3dc"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("85df9130-6ba8-4dc7-8ff1-403d26674ed5"),
                                "valorRecebido" : NumberDecimal("90")
                            }
                        ]
                    }
                ]
            }
        ],
        "metadata" : {
            "ativo" : true,
            "dataCriacao" : ISODate("2020-11-30T20:33:21.534Z"),
            "dataAtualizacao" : ISODate("2020-12-01T17:39:42.227Z"),
            "dataDelecao" : null
        }
    },{
        "_id" : ObjectId("5fc557119ab06f000157436b"),
        "id" : UUID("187bdbd9-f00b-4535-acea-e88c4f5e4ec4"),
        "titular" : "Roberto de Oliveira Barbosa",
        "documentoAssinante" : "28621457857",
        "documentoEmpresa" : "34008403000107",
        "emailAssinante" : "roberto_oliveira_barbosa@live.com",
        "dataAdesao" : ISODate("2019-01-05T19:21:41.283Z"),
        "dataVigencia" : ISODate("2020-01-05T19:21:41.283Z"),
        "dataCancelamento" : ISODate("2020-04-23T15:05:00.802Z"),
        "dataVigenciaPeriodoTrial" : null,
        "periodo" : 1,
        "valorRealTotal" : NumberDecimal("1080"),
        "valorRealMensal" : NumberDecimal("90"),
        "valorNominalParcela" : NumberDecimal("90"),
        "valorCoparticipacaoEmpresa" : NumberDecimal("0"),
        "idPlano" : UUID("005d9991-e7c7-49ff-a617-fa3ce1bad9e5"),
        "ehDescontoEmFolha" : false,
        "dataAtivacao" : ISODate("2020-12-07T13:36:00.071Z"),"parcelasPlano" : [],
        "metadata" : {
            "ativo" : false,
            "dataCriacao" : ISODate("2020-11-30T20:33:21.537Z"),
            "dataAtualizacao" : null,
            "dataDelecao" : null
        }
    },{
        "_id" : ObjectId("5fc557119ab06f000157436c"),
        "id" : UUID("b47c4e44-b00c-4673-b0f1-eddf10f04361"),
        "titular" : "SAMARA LOUBACK FERREIRA",
        "documentoAssinante" : "14235312723",
        "documentoEmpresa" : "04532167000154",
        "emailAssinante" : "samara_louback@hotmail.com",
        "dataAdesao" : ISODate("2020-01-14T10:52:08.283Z"),
        "dataVigencia" : ISODate("2022-01-14T10:52:08.283Z"),
        "dataCancelamento" : null,
        "dataVigenciaPeriodoTrial" : null,
        "periodo" : 1,
        "valorRealTotal" : NumberDecimal("1080"),
        "valorRealMensal" : NumberDecimal("90"),
        "valorNominalParcela" : NumberDecimal("90"),
        "valorCoparticipacaoEmpresa" : NumberDecimal("60"),
        "idPlano" : UUID("005d9991-e7c7-49ff-a617-fa3ce1bad9e5"),
        "ehDescontoEmFolha" : true,
        "dataAtivacao" : ISODate("2020-12-07T13:36:00.071Z"),"parcelasPlano" : [ 
            {
                "numero" : 1,
                "mesReferencia" : ISODate("2021-01-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("f096151a-6818-4a29-aa14-9d61f6a65c8c"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("d46b661e-a585-4eb1-b23a-3e31f85a628a"),
                                "valorRecebido" : null
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 5,
                "mesReferencia" : ISODate("2020-05-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("427a93e4-25dc-4446-b95e-7fdf0a74b664"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("202d1075-3a65-44c5-b654-b22a631f78e8"),
                                "valorRecebido" : NumberDecimal("90")
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 6,
                "mesReferencia" : ISODate("2020-06-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("201998f4-b186-4b80-9dae-9c6b4e3d66e4"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("92ccca6f-b8e1-405d-9efb-02c4f6778a9f"),
                                "valorRecebido" : null
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 7,
                "mesReferencia" : ISODate("2020-07-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("9f29676b-c86d-4629-8f72-a58775cf606f"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("bfcd2c38-137d-44d2-9005-232825b16341"),
                                "valorRecebido" : null
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 8,
                "mesReferencia" : ISODate("2021-08-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("2d7d308a-c2c6-4ca3-b83c-149393daef09"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("ed2e3e15-cdb1-4205-a4a3-cea523d2415a"),
                                "valorRecebido" : null
                            }, 
                            {
                                "idRecebimento" : UUID("537f78a8-c023-4e1c-a3ff-a274ade8ba6b"),
                                "valorRecebido" : null
                            }
                        ]
                    }
                ]
            }
        ],
        "metadata" : {
            "ativo" : true,
            "dataCriacao" : ISODate("2020-11-30T20:33:21.540Z"),
            "dataAtualizacao" : ISODate("2020-12-01T19:03:47.590Z"),
            "dataDelecao" : null
        }
    },{
        "_id" : ObjectId("5fc557119ab06f000157436d"),
        "id" : UUID("d79d177b-c14d-4cf7-977f-a37c7fae5a75"),
        "titular" : "MARCIA RODRIGUES DA CUNHA",
        "documentoAssinante" : "03282591799",
        "documentoEmpresa" : "04532167000154",
        "emailAssinante" : "marcia.cunha.2@hotmail.com",
        "dataAdesao" : ISODate("2020-01-14T11:22:47.305Z"),
        "dataVigencia" : ISODate("2022-01-14T11:22:47.305Z"),
        "dataCancelamento" : null,
        "dataVigenciaPeriodoTrial" : null,
        "periodo" : 1,
        "valorRealTotal" : NumberDecimal("1080"),
        "valorRealMensal" : NumberDecimal("90"),
        "valorNominalParcela" : NumberDecimal("90"),
        "valorCoparticipacaoEmpresa" : NumberDecimal("60"),
        "idPlano" : UUID("005d9991-e7c7-49ff-a617-fa3ce1bad9e5"),
        "ehDescontoEmFolha" : true,
        "dataAtivacao" : ISODate("2020-12-07T13:36:00.071Z"),"parcelasPlano" : [ 
            {
                "numero" : 1,
                "mesReferencia" : ISODate("2021-01-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("f096151a-6818-4a29-aa14-9d61f6a65c8c"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("d46b661e-a585-4eb1-b23a-3e31f85a628a"),
                                "valorRecebido" : null
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 5,
                "mesReferencia" : ISODate("2020-05-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("427a93e4-25dc-4446-b95e-7fdf0a74b664"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("202d1075-3a65-44c5-b654-b22a631f78e8"),
                                "valorRecebido" : NumberDecimal("90")
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 6,
                "mesReferencia" : ISODate("2020-06-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("201998f4-b186-4b80-9dae-9c6b4e3d66e4"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("92ccca6f-b8e1-405d-9efb-02c4f6778a9f"),
                                "valorRecebido" : null
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 7,
                "mesReferencia" : ISODate("2020-07-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("9f29676b-c86d-4629-8f72-a58775cf606f"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("bfcd2c38-137d-44d2-9005-232825b16341"),
                                "valorRecebido" : null
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 8,
                "mesReferencia" : ISODate("2021-08-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("2d7d308a-c2c6-4ca3-b83c-149393daef09"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("ed2e3e15-cdb1-4205-a4a3-cea523d2415a"),
                                "valorRecebido" : null
                            }, 
                            {
                                "idRecebimento" : UUID("537f78a8-c023-4e1c-a3ff-a274ade8ba6b"),
                                "valorRecebido" : null
                            }
                        ]
                    }
                ]
            }
        ],
        "metadata" : {
            "ativo" : true,
            "dataCriacao" : ISODate("2020-11-30T20:33:21.542Z"),
            "dataAtualizacao" : ISODate("2020-12-01T19:03:47.593Z"),
            "dataDelecao" : null
        }
    },{
        "_id" : ObjectId("5fc557119ab06f000157436e"),
        "id" : UUID("45b9d767-bbb2-4bf9-901d-ff0678a7257c"),
        "titular" : "ARTUR PEREIRA DA SILVA",
        "documentoAssinante" : "14537933720",
        "documentoEmpresa" : "04532167000154",
        "emailAssinante" : "artur.pereira@modecenter.com.br",
        "dataAdesao" : ISODate("2020-01-14T11:26:05.693Z"),
        "dataVigencia" : ISODate("2021-01-14T11:26:05.693Z"),
        "dataCancelamento" : ISODate("2020-04-16T12:03:00.693Z"),
        "dataVigenciaPeriodoTrial" : null,
        "periodo" : 1,
        "valorRealTotal" : NumberDecimal("1080"),
        "valorRealMensal" : NumberDecimal("90"),
        "valorNominalParcela" : NumberDecimal("90"),
        "valorCoparticipacaoEmpresa" : NumberDecimal("60"),
        "idPlano" : UUID("005d9991-e7c7-49ff-a617-fa3ce1bad9e5"),
        "ehDescontoEmFolha" : true,
        "dataAtivacao" : ISODate("2020-12-07T13:36:00.071Z"),"parcelasPlano" : [],
        "metadata" : {
            "ativo" : false,
            "dataCriacao" : ISODate("2020-11-30T20:33:21.546Z"),
            "dataAtualizacao" : null,
            "dataDelecao" : null
        }
    },{
        "_id" : ObjectId("5fc557119ab06f000157436f"),
        "id" : UUID("a1662dc6-7ca5-4cc8-b499-c5f858d8064a"),
        "titular" : "JOSENILDO LOPES CAVALCANTE",
        "documentoAssinante" : "43189176817",
        "documentoEmpresa" : "04532167000154",
        "emailAssinante" : "Josenildolopes658@icloud.com",
        "dataAdesao" : ISODate("2020-01-14T11:26:59.188Z"),
        "dataVigencia" : ISODate("2022-01-14T11:26:59.188Z"),
        "dataCancelamento" : null,
        "dataVigenciaPeriodoTrial" : null,
        "periodo" : 1,
        "valorRealTotal" : NumberDecimal("1404"),
        "valorRealMensal" : NumberDecimal("117"),
        "valorNominalParcela" : NumberDecimal("117"),
        "valorCoparticipacaoEmpresa" : NumberDecimal("60"),
        "idPlano" : UUID("2c51afde-4f49-4193-a948-24018d543fb3"),
        "ehDescontoEmFolha" : true,
        "dataAtivacao" : ISODate("2020-12-07T13:36:00.071Z"),"parcelasPlano" : [ 
            {
                "numero" : 1,
                "mesReferencia" : ISODate("2021-01-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("f096151a-6818-4a29-aa14-9d61f6a65c8c"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("d46b661e-a585-4eb1-b23a-3e31f85a628a"),
                                "valorRecebido" : null
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 5,
                "mesReferencia" : ISODate("2020-05-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("427a93e4-25dc-4446-b95e-7fdf0a74b664"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("202d1075-3a65-44c5-b654-b22a631f78e8"),
                                "valorRecebido" : NumberDecimal("117")
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 6,
                "mesReferencia" : ISODate("2020-06-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("201998f4-b186-4b80-9dae-9c6b4e3d66e4"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("92ccca6f-b8e1-405d-9efb-02c4f6778a9f"),
                                "valorRecebido" : null
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 7,
                "mesReferencia" : ISODate("2020-07-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("9f29676b-c86d-4629-8f72-a58775cf606f"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("bfcd2c38-137d-44d2-9005-232825b16341"),
                                "valorRecebido" : null
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 8,
                "mesReferencia" : ISODate("2021-08-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("2d7d308a-c2c6-4ca3-b83c-149393daef09"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("ed2e3e15-cdb1-4205-a4a3-cea523d2415a"),
                                "valorRecebido" : null
                            }, 
                            {
                                "idRecebimento" : UUID("537f78a8-c023-4e1c-a3ff-a274ade8ba6b"),
                                "valorRecebido" : null
                            }
                        ]
                    }
                ]
            }
        ],
        "metadata" : {
            "ativo" : true,
            "dataCriacao" : ISODate("2020-11-30T20:33:21.549Z"),
            "dataAtualizacao" : ISODate("2020-12-01T19:03:47.596Z"),
            "dataDelecao" : null
        }
    },{
        "_id" : ObjectId("5fc557119ab06f0001574370"),
        "id" : UUID("b0e4114b-5799-4bfe-859d-563535620a1f"),
        "titular" : "FRANCIELLE CARDOSO S RABELO",
        "documentoAssinante" : "15537570769",
        "documentoEmpresa" : "04532167000154",
        "emailAssinante" : "francsrabelo@gmail.com",
        "dataAdesao" : ISODate("2020-01-14T11:39:20.295Z"),
        "dataVigencia" : ISODate("2022-01-14T11:39:20.295Z"),
        "dataCancelamento" : null,
        "dataVigenciaPeriodoTrial" : null,
        "periodo" : 1,
        "valorRealTotal" : NumberDecimal("1080"),
        "valorRealMensal" : NumberDecimal("90"),
        "valorNominalParcela" : NumberDecimal("90"),
        "valorCoparticipacaoEmpresa" : NumberDecimal("60"),
        "idPlano" : UUID("005d9991-e7c7-49ff-a617-fa3ce1bad9e5"),
        "ehDescontoEmFolha" : true,
        "dataAtivacao" : ISODate("2020-12-07T13:36:00.071Z"),"parcelasPlano" : [ 
            {
                "numero" : 1,
                "mesReferencia" : ISODate("2021-01-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("f096151a-6818-4a29-aa14-9d61f6a65c8c"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("d46b661e-a585-4eb1-b23a-3e31f85a628a"),
                                "valorRecebido" : null
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 5,
                "mesReferencia" : ISODate("2020-05-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("427a93e4-25dc-4446-b95e-7fdf0a74b664"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("202d1075-3a65-44c5-b654-b22a631f78e8"),
                                "valorRecebido" : NumberDecimal("90")
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 6,
                "mesReferencia" : ISODate("2020-06-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("201998f4-b186-4b80-9dae-9c6b4e3d66e4"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("92ccca6f-b8e1-405d-9efb-02c4f6778a9f"),
                                "valorRecebido" : null
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 7,
                "mesReferencia" : ISODate("2020-07-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("9f29676b-c86d-4629-8f72-a58775cf606f"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("bfcd2c38-137d-44d2-9005-232825b16341"),
                                "valorRecebido" : null
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 8,
                "mesReferencia" : ISODate("2021-08-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("2d7d308a-c2c6-4ca3-b83c-149393daef09"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("ed2e3e15-cdb1-4205-a4a3-cea523d2415a"),
                                "valorRecebido" : null
                            }, 
                            {
                                "idRecebimento" : UUID("537f78a8-c023-4e1c-a3ff-a274ade8ba6b"),
                                "valorRecebido" : null
                            }
                        ]
                    }
                ]
            }
        ],
        "metadata" : {
            "ativo" : true,
            "dataCriacao" : ISODate("2020-11-30T20:33:21.552Z"),
            "dataAtualizacao" : ISODate("2020-12-01T19:03:47.599Z"),
            "dataDelecao" : null
        }
    },{
        "_id" : ObjectId("5fc557119ab06f0001574371"),
        "id" : UUID("9d8762d0-400e-4b74-9216-efbed9eb8f9e"),
        "titular" : "MELISSA SILVA PEREIRA",
        "documentoAssinante" : "13045173730",
        "documentoEmpresa" : "04532167000154",
        "emailAssinante" : "melissapereira18@gmail.com",
        "dataAdesao" : ISODate("2020-01-14T11:44:03.176Z"),
        "dataVigencia" : ISODate("2022-01-14T11:44:03.176Z"),
        "dataCancelamento" : ISODate("2020-03-02T11:44:03.235Z"),
        "dataVigenciaPeriodoTrial" : null,
        "periodo" : 1,
        "valorRealTotal" : NumberDecimal("2460"),
        "valorRealMensal" : NumberDecimal("205"),
        "valorNominalParcela" : NumberDecimal("205"),
        "valorCoparticipacaoEmpresa" : NumberDecimal("60"),
        "idPlano" : UUID("30bb9449-b489-4416-9659-b8de544c10e9"),
        "ehDescontoEmFolha" : true,
        "dataAtivacao" : ISODate("2020-12-07T13:36:00.071Z"),"parcelasPlano" : [],
        "metadata" : {
            "ativo" : false,
            "dataCriacao" : ISODate("2020-11-30T20:33:21.555Z"),
            "dataAtualizacao" : null,
            "dataDelecao" : null
        }
    },{
        "_id" : ObjectId("5fc557119ab06f0001574373"),
        "id" : UUID("109eb321-58d3-43f2-9d3d-da364da95c88"),
        "titular" : "LEILANE DOMINGOS DE NOVAES",
        "documentoAssinante" : "12301562751",
        "documentoEmpresa" : "04532167000154",
        "emailAssinante" : "domingoslei89@gmail.com",
        "dataAdesao" : ISODate("2020-01-14T11:51:43.401Z"),
        "dataVigencia" : ISODate("2021-01-14T11:51:43.401Z"),
        "dataCancelamento" : ISODate("2020-01-21T11:51:43.401Z"),
        "dataVigenciaPeriodoTrial" : null,
        "periodo" : 1,
        "valorRealTotal" : NumberDecimal("1080"),
        "valorRealMensal" : NumberDecimal("90"),
        "valorNominalParcela" : NumberDecimal("90"),
        "valorCoparticipacaoEmpresa" : NumberDecimal("0"),
        "idPlano" : UUID("005d9991-e7c7-49ff-a617-fa3ce1bad9e5"),
        "ehDescontoEmFolha" : false,
        "dataAtivacao" : ISODate("2020-12-07T13:36:00.071Z"),"parcelasPlano" : [],
        "metadata" : {
            "ativo" : false,
            "dataCriacao" : ISODate("2020-11-30T20:33:21.562Z"),
            "dataAtualizacao" : null,
            "dataDelecao" : null
        }
    },{
        "_id" : ObjectId("5fc557119ab06f0001574374"),
        "id" : UUID("e5ff5df6-b3ee-4a9c-b1d0-aaa6d16c194e"),
        "titular" : "GABRIEL MAIA BERALDO",
        "documentoAssinante" : "15620321789",
        "documentoEmpresa" : "04532167000154",
        "emailAssinante" : "gabrielmaiaberaldo@gmail.com",
        "dataAdesao" : ISODate("2020-01-14T12:01:27.965Z"),
        "dataVigencia" : ISODate("2022-01-14T12:01:27.965Z"),
        "dataCancelamento" : null,
        "dataVigenciaPeriodoTrial" : null,
        "periodo" : 1,
        "valorRealTotal" : NumberDecimal("1080"),
        "valorRealMensal" : NumberDecimal("90"),
        "valorNominalParcela" : NumberDecimal("90"),
        "valorCoparticipacaoEmpresa" : NumberDecimal("60"),
        "idPlano" : UUID("005d9991-e7c7-49ff-a617-fa3ce1bad9e5"),
        "ehDescontoEmFolha" : true,
        "dataAtivacao" : ISODate("2020-12-07T13:36:00.071Z"),"parcelasPlano" : [ 
            {
                "numero" : 1,
                "mesReferencia" : ISODate("2021-01-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("f096151a-6818-4a29-aa14-9d61f6a65c8c"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("d46b661e-a585-4eb1-b23a-3e31f85a628a"),
                                "valorRecebido" : null
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 5,
                "mesReferencia" : ISODate("2020-05-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("427a93e4-25dc-4446-b95e-7fdf0a74b664"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("202d1075-3a65-44c5-b654-b22a631f78e8"),
                                "valorRecebido" : NumberDecimal("90")
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 6,
                "mesReferencia" : ISODate("2020-06-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("201998f4-b186-4b80-9dae-9c6b4e3d66e4"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("92ccca6f-b8e1-405d-9efb-02c4f6778a9f"),
                                "valorRecebido" : null
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 7,
                "mesReferencia" : ISODate("2020-07-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("9f29676b-c86d-4629-8f72-a58775cf606f"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("bfcd2c38-137d-44d2-9005-232825b16341"),
                                "valorRecebido" : null
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 8,
                "mesReferencia" : ISODate("2021-08-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("2d7d308a-c2c6-4ca3-b83c-149393daef09"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("ed2e3e15-cdb1-4205-a4a3-cea523d2415a"),
                                "valorRecebido" : null
                            }, 
                            {
                                "idRecebimento" : UUID("537f78a8-c023-4e1c-a3ff-a274ade8ba6b"),
                                "valorRecebido" : null
                            }
                        ]
                    }
                ]
            }
        ],
        "metadata" : {
            "ativo" : true,
            "dataCriacao" : ISODate("2020-11-30T20:33:21.565Z"),
            "dataAtualizacao" : ISODate("2020-12-01T19:03:47.605Z"),
            "dataDelecao" : null
        }
    },{
        "_id" : ObjectId("5fc557119ab06f0001574375"),
        "id" : UUID("4ad44574-9e5f-4207-81ca-d6d0af7f7dbe"),
        "titular" : "SILVIO CESAR DE OLIVEIRA",
        "documentoAssinante" : "04640890770",
        "documentoEmpresa" : "04532167000154",
        "emailAssinante" : "silviocesar.pedrotheo@gmail.com",
        "dataAdesao" : ISODate("2020-01-14T12:39:16.680Z"),
        "dataVigencia" : ISODate("2022-01-14T12:39:16.680Z"),
        "dataCancelamento" : null,
        "dataVigenciaPeriodoTrial" : null,
        "periodo" : 1,
        "valorRealTotal" : NumberDecimal("1404"),
        "valorRealMensal" : NumberDecimal("117"),
        "valorNominalParcela" : NumberDecimal("117"),
        "valorCoparticipacaoEmpresa" : NumberDecimal("60"),
        "idPlano" : UUID("2c51afde-4f49-4193-a948-24018d543fb3"),
        "ehDescontoEmFolha" : true,
        "dataAtivacao" : ISODate("2020-12-07T13:36:00.071Z"),"parcelasPlano" : [ 
            {
                "numero" : 1,
                "mesReferencia" : ISODate("2021-01-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("f096151a-6818-4a29-aa14-9d61f6a65c8c"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("d46b661e-a585-4eb1-b23a-3e31f85a628a"),
                                "valorRecebido" : null
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 5,
                "mesReferencia" : ISODate("2020-05-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("427a93e4-25dc-4446-b95e-7fdf0a74b664"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("202d1075-3a65-44c5-b654-b22a631f78e8"),
                                "valorRecebido" : NumberDecimal("117")
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 6,
                "mesReferencia" : ISODate("2020-06-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("201998f4-b186-4b80-9dae-9c6b4e3d66e4"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("92ccca6f-b8e1-405d-9efb-02c4f6778a9f"),
                                "valorRecebido" : null
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 7,
                "mesReferencia" : ISODate("2020-07-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("9f29676b-c86d-4629-8f72-a58775cf606f"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("bfcd2c38-137d-44d2-9005-232825b16341"),
                                "valorRecebido" : null
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 8,
                "mesReferencia" : ISODate("2021-08-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("2d7d308a-c2c6-4ca3-b83c-149393daef09"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("ed2e3e15-cdb1-4205-a4a3-cea523d2415a"),
                                "valorRecebido" : null
                            }, 
                            {
                                "idRecebimento" : UUID("537f78a8-c023-4e1c-a3ff-a274ade8ba6b"),
                                "valorRecebido" : null
                            }
                        ]
                    }
                ]
            }
        ],
        "metadata" : {
            "ativo" : true,
            "dataCriacao" : ISODate("2020-11-30T20:33:21.568Z"),
            "dataAtualizacao" : ISODate("2020-12-01T19:03:47.608Z"),
            "dataDelecao" : null
        }
    },{
        "_id" : ObjectId("5fc557119ab06f0001574376"),
        "id" : UUID("6e5d2acc-d2ef-410e-84d9-03b11b08041b"),
        "titular" : "SHIRLEY AURORA DA CUNHA",
        "documentoAssinante" : "07078104692",
        "documentoEmpresa" : "04532167000154",
        "emailAssinante" : "shirleycunhatst@gmail.com",
        "dataAdesao" : ISODate("2020-01-14T12:50:15.916Z"),
        "dataVigencia" : ISODate("2022-01-14T12:50:15.916Z"),
        "dataCancelamento" : null,
        "dataVigenciaPeriodoTrial" : null,
        "periodo" : 1,
        "valorRealTotal" : NumberDecimal("1896"),
        "valorRealMensal" : NumberDecimal("158"),
        "valorNominalParcela" : NumberDecimal("158"),
        "valorCoparticipacaoEmpresa" : NumberDecimal("60"),
        "idPlano" : UUID("7077243c-c72f-4f2d-8f2d-7b1ccafe1e6a"),
        "ehDescontoEmFolha" : true,
        "dataAtivacao" : ISODate("2020-12-07T13:36:00.071Z"),"parcelasPlano" : [ 
            {
                "numero" : 5,
                "mesReferencia" : ISODate("2020-05-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("427a93e4-25dc-4446-b95e-7fdf0a74b664"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("202d1075-3a65-44c5-b654-b22a631f78e8"),
                                "valorRecebido" : NumberDecimal("158")
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 6,
                "mesReferencia" : ISODate("2020-06-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("201998f4-b186-4b80-9dae-9c6b4e3d66e4"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("92ccca6f-b8e1-405d-9efb-02c4f6778a9f"),
                                "valorRecebido" : null
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 7,
                "mesReferencia" : ISODate("2020-07-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("9f29676b-c86d-4629-8f72-a58775cf606f"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("bfcd2c38-137d-44d2-9005-232825b16341"),
                                "valorRecebido" : null
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 8,
                "mesReferencia" : ISODate("2021-08-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("2d7d308a-c2c6-4ca3-b83c-149393daef09"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("ed2e3e15-cdb1-4205-a4a3-cea523d2415a"),
                                "valorRecebido" : null
                            }, 
                            {
                                "idRecebimento" : UUID("537f78a8-c023-4e1c-a3ff-a274ade8ba6b"),
                                "valorRecebido" : null
                            }
                        ]
                    }
                ]
            }
        ],
        "metadata" : {
            "ativo" : true,
            "dataCriacao" : ISODate("2020-11-30T20:33:21.571Z"),
            "dataAtualizacao" : ISODate("2020-12-01T19:03:47.611Z"),
            "dataDelecao" : null
        }
    },{
        "_id" : ObjectId("5fc557119ab06f0001574377"),
        "id" : UUID("28fef48d-17ed-42de-8d7a-b2079a1a1c59"),
        "titular" : "RODRIGO TEODORO DA SILVA",
        "documentoAssinante" : "09820235707",
        "documentoEmpresa" : "04532167000154",
        "emailAssinante" : "rodrigo.silva3175@gmail.com",
        "dataAdesao" : ISODate("2020-01-14T13:23:26.176Z"),
        "dataVigencia" : ISODate("2022-01-14T13:23:26.176Z"),
        "dataCancelamento" : null,
        "dataVigenciaPeriodoTrial" : null,
        "periodo" : 1,
        "valorRealTotal" : NumberDecimal("1404"),
        "valorRealMensal" : NumberDecimal("117"),
        "valorNominalParcela" : NumberDecimal("117"),
        "valorCoparticipacaoEmpresa" : NumberDecimal("60"),
        "idPlano" : UUID("2c51afde-4f49-4193-a948-24018d543fb3"),
        "ehDescontoEmFolha" : true,
        "dataAtivacao" : ISODate("2020-12-07T13:36:00.071Z"),"parcelasPlano" : [ 
            {
                "numero" : 5,
                "mesReferencia" : ISODate("2020-05-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("427a93e4-25dc-4446-b95e-7fdf0a74b664"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("202d1075-3a65-44c5-b654-b22a631f78e8"),
                                "valorRecebido" : NumberDecimal("117")
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 6,
                "mesReferencia" : ISODate("2020-06-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("201998f4-b186-4b80-9dae-9c6b4e3d66e4"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("92ccca6f-b8e1-405d-9efb-02c4f6778a9f"),
                                "valorRecebido" : null
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 7,
                "mesReferencia" : ISODate("2020-07-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("9f29676b-c86d-4629-8f72-a58775cf606f"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("bfcd2c38-137d-44d2-9005-232825b16341"),
                                "valorRecebido" : null
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 8,
                "mesReferencia" : ISODate("2021-08-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("2d7d308a-c2c6-4ca3-b83c-149393daef09"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("ed2e3e15-cdb1-4205-a4a3-cea523d2415a"),
                                "valorRecebido" : null
                            }, 
                            {
                                "idRecebimento" : UUID("537f78a8-c023-4e1c-a3ff-a274ade8ba6b"),
                                "valorRecebido" : null
                            }
                        ]
                    }
                ]
            }
        ],
        "metadata" : {
            "ativo" : true,
            "dataCriacao" : ISODate("2020-11-30T20:33:21.574Z"),
            "dataAtualizacao" : ISODate("2020-12-01T19:03:47.613Z"),
            "dataDelecao" : null
        }
    },{
        "_id" : ObjectId("5fc557119ab06f0001574378"),
        "id" : UUID("1a46094c-2fa7-45fe-bab9-00fdea668273"),
        "titular" : "CRISTIELLEN MARCELINO DE OLIVE",
        "documentoAssinante" : "12509827740",
        "documentoEmpresa" : "04532167000154",
        "emailAssinante" : "cristiellen.marcelino@gmail.com",
        "dataAdesao" : ISODate("2020-01-14T13:31:55.422Z"),
        "dataVigencia" : ISODate("2022-01-14T13:31:55.422Z"),
        "dataCancelamento" : null,
        "dataVigenciaPeriodoTrial" : null,
        "periodo" : 1,
        "valorRealTotal" : NumberDecimal("1080"),
        "valorRealMensal" : NumberDecimal("90"),
        "valorNominalParcela" : NumberDecimal("90"),
        "valorCoparticipacaoEmpresa" : NumberDecimal("60"),
        "idPlano" : UUID("005d9991-e7c7-49ff-a617-fa3ce1bad9e5"),
        "ehDescontoEmFolha" : true,
        "dataAtivacao" : ISODate("2020-12-07T13:36:00.071Z"),"parcelasPlano" : [ 
            {
                "numero" : 5,
                "mesReferencia" : ISODate("2020-05-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("427a93e4-25dc-4446-b95e-7fdf0a74b664"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("202d1075-3a65-44c5-b654-b22a631f78e8"),
                                "valorRecebido" : NumberDecimal("90")
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 6,
                "mesReferencia" : ISODate("2020-06-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("201998f4-b186-4b80-9dae-9c6b4e3d66e4"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("92ccca6f-b8e1-405d-9efb-02c4f6778a9f"),
                                "valorRecebido" : null
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 7,
                "mesReferencia" : ISODate("2020-07-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("9f29676b-c86d-4629-8f72-a58775cf606f"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("bfcd2c38-137d-44d2-9005-232825b16341"),
                                "valorRecebido" : null
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 8,
                "mesReferencia" : ISODate("2021-08-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("2d7d308a-c2c6-4ca3-b83c-149393daef09"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("ed2e3e15-cdb1-4205-a4a3-cea523d2415a"),
                                "valorRecebido" : null
                            }, 
                            {
                                "idRecebimento" : UUID("537f78a8-c023-4e1c-a3ff-a274ade8ba6b"),
                                "valorRecebido" : null
                            }
                        ]
                    }
                ]
            }
        ],
        "metadata" : {
            "ativo" : true,
            "dataCriacao" : ISODate("2020-11-30T20:33:21.577Z"),
            "dataAtualizacao" : ISODate("2020-12-01T19:03:47.616Z"),
            "dataDelecao" : null
        }
    },{
        "_id" : ObjectId("5fc557119ab06f0001574379"),
        "id" : UUID("fc8e92dd-6bd0-4df0-ad21-9bc18b098572"),
        "titular" : "MICHELE MARTINS D MARQUES",
        "documentoAssinante" : "09371202785",
        "documentoEmpresa" : "04532167000154",
        "emailAssinante" : "michelemdmarques@gmail.com",
        "dataAdesao" : ISODate("2020-01-14T13:32:21.024Z"),
        "dataVigencia" : ISODate("2022-01-14T13:32:21.024Z"),
        "dataCancelamento" : null,
        "dataVigenciaPeriodoTrial" : null,
        "periodo" : 1,
        "valorRealTotal" : NumberDecimal("1080"),
        "valorRealMensal" : NumberDecimal("90"),
        "valorNominalParcela" : NumberDecimal("90"),
        "valorCoparticipacaoEmpresa" : NumberDecimal("60"),
        "idPlano" : UUID("005d9991-e7c7-49ff-a617-fa3ce1bad9e5"),
        "ehDescontoEmFolha" : true,
        "dataAtivacao" : ISODate("2020-12-07T13:36:00.071Z"),"parcelasPlano" : [ 
            {
                "numero" : 5,
                "mesReferencia" : ISODate("2020-05-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("427a93e4-25dc-4446-b95e-7fdf0a74b664"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("202d1075-3a65-44c5-b654-b22a631f78e8"),
                                "valorRecebido" : NumberDecimal("90")
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 6,
                "mesReferencia" : ISODate("2020-06-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("201998f4-b186-4b80-9dae-9c6b4e3d66e4"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("92ccca6f-b8e1-405d-9efb-02c4f6778a9f"),
                                "valorRecebido" : null
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 7,
                "mesReferencia" : ISODate("2020-07-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("9f29676b-c86d-4629-8f72-a58775cf606f"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("bfcd2c38-137d-44d2-9005-232825b16341"),
                                "valorRecebido" : null
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 8,
                "mesReferencia" : ISODate("2021-08-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("2d7d308a-c2c6-4ca3-b83c-149393daef09"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("ed2e3e15-cdb1-4205-a4a3-cea523d2415a"),
                                "valorRecebido" : null
                            }, 
                            {
                                "idRecebimento" : UUID("537f78a8-c023-4e1c-a3ff-a274ade8ba6b"),
                                "valorRecebido" : null
                            }
                        ]
                    }
                ]
            }
        ],
        "metadata" : {
            "ativo" : true,
            "dataCriacao" : ISODate("2020-11-30T20:33:21.581Z"),
            "dataAtualizacao" : ISODate("2020-12-01T19:03:47.619Z"),
            "dataDelecao" : null
        }
    },{
        "_id" : ObjectId("5fc557119ab06f000157437a"),
        "id" : UUID("6c1d50a5-f334-42b6-9604-24ec5bec1361"),
        "titular" : "MARINA CABRAL BEJA",
        "documentoAssinante" : "14767338727",
        "documentoEmpresa" : "04532167000154",
        "emailAssinante" : "marina.c.beja@gmail.com",
        "dataAdesao" : ISODate("2020-01-14T13:34:35.212Z"),
        "dataVigencia" : ISODate("2022-01-14T13:34:35.212Z"),
        "dataCancelamento" : null,
        "dataVigenciaPeriodoTrial" : null,
        "periodo" : 1,
        "valorRealTotal" : NumberDecimal("1896"),
        "valorRealMensal" : NumberDecimal("158"),
        "valorNominalParcela" : NumberDecimal("158"),
        "valorCoparticipacaoEmpresa" : NumberDecimal("60"),
        "idPlano" : UUID("7077243c-c72f-4f2d-8f2d-7b1ccafe1e6a"),
        "ehDescontoEmFolha" : true,
        "dataAtivacao" : ISODate("2020-12-07T13:36:00.071Z"),"parcelasPlano" : [ 
            {
                "numero" : 5,
                "mesReferencia" : ISODate("2020-05-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("427a93e4-25dc-4446-b95e-7fdf0a74b664"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("202d1075-3a65-44c5-b654-b22a631f78e8"),
                                "valorRecebido" : NumberDecimal("158")
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 6,
                "mesReferencia" : ISODate("2020-06-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("201998f4-b186-4b80-9dae-9c6b4e3d66e4"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("92ccca6f-b8e1-405d-9efb-02c4f6778a9f"),
                                "valorRecebido" : null
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 7,
                "mesReferencia" : ISODate("2020-07-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("9f29676b-c86d-4629-8f72-a58775cf606f"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("bfcd2c38-137d-44d2-9005-232825b16341"),
                                "valorRecebido" : null
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 8,
                "mesReferencia" : ISODate("2021-08-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("2d7d308a-c2c6-4ca3-b83c-149393daef09"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("ed2e3e15-cdb1-4205-a4a3-cea523d2415a"),
                                "valorRecebido" : null
                            }, 
                            {
                                "idRecebimento" : UUID("537f78a8-c023-4e1c-a3ff-a274ade8ba6b"),
                                "valorRecebido" : null
                            }
                        ]
                    }
                ]
            }
        ],
        "metadata" : {
            "ativo" : true,
            "dataCriacao" : ISODate("2020-11-30T20:33:21.584Z"),
            "dataAtualizacao" : ISODate("2020-12-01T19:03:47.621Z"),
            "dataDelecao" : null
        }
    },{
        "_id" : ObjectId("5fc557119ab06f000157437b"),
        "id" : UUID("add95e2b-b2c7-4a2b-ba8a-839097d0fe08"),
        "titular" : "MATEUS DE M PRAGANA BEZERRA",
        "documentoAssinante" : "11619668700",
        "documentoEmpresa" : "04532167000154",
        "emailAssinante" : "mateuspragana@gmail.com",
        "dataAdesao" : ISODate("2020-01-14T13:57:02.397Z"),
        "dataVigencia" : ISODate("2022-01-14T13:57:02.397Z"),
        "dataCancelamento" : null,
        "dataVigenciaPeriodoTrial" : null,
        "periodo" : 1,
        "valorRealTotal" : NumberDecimal("1896"),
        "valorRealMensal" : NumberDecimal("158"),
        "valorNominalParcela" : NumberDecimal("158"),
        "valorCoparticipacaoEmpresa" : NumberDecimal("60"),
        "idPlano" : UUID("7077243c-c72f-4f2d-8f2d-7b1ccafe1e6a"),
        "ehDescontoEmFolha" : true,
        "dataAtivacao" : ISODate("2020-12-07T13:36:00.071Z"),"parcelasPlano" : [ 
            {
                "numero" : 5,
                "mesReferencia" : ISODate("2020-05-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("427a93e4-25dc-4446-b95e-7fdf0a74b664"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("202d1075-3a65-44c5-b654-b22a631f78e8"),
                                "valorRecebido" : NumberDecimal("158")
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 6,
                "mesReferencia" : ISODate("2020-06-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("201998f4-b186-4b80-9dae-9c6b4e3d66e4"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("92ccca6f-b8e1-405d-9efb-02c4f6778a9f"),
                                "valorRecebido" : null
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 7,
                "mesReferencia" : ISODate("2020-07-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("9f29676b-c86d-4629-8f72-a58775cf606f"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("bfcd2c38-137d-44d2-9005-232825b16341"),
                                "valorRecebido" : null
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 8,
                "mesReferencia" : ISODate("2021-08-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("2d7d308a-c2c6-4ca3-b83c-149393daef09"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("ed2e3e15-cdb1-4205-a4a3-cea523d2415a"),
                                "valorRecebido" : null
                            }, 
                            {
                                "idRecebimento" : UUID("537f78a8-c023-4e1c-a3ff-a274ade8ba6b"),
                                "valorRecebido" : null
                            }
                        ]
                    }
                ]
            }
        ],
        "metadata" : {
            "ativo" : true,
            "dataCriacao" : ISODate("2020-11-30T20:33:21.587Z"),
            "dataAtualizacao" : ISODate("2020-12-01T19:03:47.624Z"),
            "dataDelecao" : null
        }
    },{
        "_id" : ObjectId("5fc557119ab06f000157437c"),
        "id" : UUID("c0ddb173-2735-4cab-ada9-a86328944477"),
        "titular" : "DYULIANO CECILIO DE SOUZA",
        "documentoAssinante" : "13212401710",
        "documentoEmpresa" : "04532167000154",
        "emailAssinante" : "dyuliano_cecilio@hotmail.com",
        "dataAdesao" : ISODate("2020-01-14T15:15:30.667Z"),
        "dataVigencia" : ISODate("2022-01-14T15:15:30.667Z"),
        "dataCancelamento" : null,
        "dataVigenciaPeriodoTrial" : null,
        "periodo" : 1,
        "valorRealTotal" : NumberDecimal("1404"),
        "valorRealMensal" : NumberDecimal("117"),
        "valorNominalParcela" : NumberDecimal("117"),
        "valorCoparticipacaoEmpresa" : NumberDecimal("60"),
        "idPlano" : UUID("2c51afde-4f49-4193-a948-24018d543fb3"),
        "ehDescontoEmFolha" : true,
        "dataAtivacao" : ISODate("2020-12-07T13:36:00.071Z"),"parcelasPlano" : [ 
            {
                "numero" : 5,
                "mesReferencia" : ISODate("2020-05-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("427a93e4-25dc-4446-b95e-7fdf0a74b664"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("202d1075-3a65-44c5-b654-b22a631f78e8"),
                                "valorRecebido" : NumberDecimal("117")
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 6,
                "mesReferencia" : ISODate("2020-06-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("201998f4-b186-4b80-9dae-9c6b4e3d66e4"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("92ccca6f-b8e1-405d-9efb-02c4f6778a9f"),
                                "valorRecebido" : null
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 7,
                "mesReferencia" : ISODate("2020-07-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("9f29676b-c86d-4629-8f72-a58775cf606f"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("bfcd2c38-137d-44d2-9005-232825b16341"),
                                "valorRecebido" : null
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 8,
                "mesReferencia" : ISODate("2021-08-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("2d7d308a-c2c6-4ca3-b83c-149393daef09"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("ed2e3e15-cdb1-4205-a4a3-cea523d2415a"),
                                "valorRecebido" : null
                            }, 
                            {
                                "idRecebimento" : UUID("537f78a8-c023-4e1c-a3ff-a274ade8ba6b"),
                                "valorRecebido" : null
                            }
                        ]
                    }
                ]
            }
        ],
        "metadata" : {
            "ativo" : true,
            "dataCriacao" : ISODate("2020-11-30T20:33:21.590Z"),
            "dataAtualizacao" : ISODate("2020-12-01T19:03:47.629Z"),
            "dataDelecao" : null
        }
    },{
        "_id" : ObjectId("5fc557119ab06f000157437d"),
        "id" : UUID("9caac26e-75c8-4ee8-83ef-0e4ed68fa917"),
        "titular" : "LILIAN DE JESUS GOMES ANTENOR",
        "documentoAssinante" : "05728213790",
        "documentoEmpresa" : "04532167000154",
        "emailAssinante" : "Lilica_bjoca@hotmail.com",
        "dataAdesao" : ISODate("2020-01-14T15:45:42.651Z"),
        "dataVigencia" : ISODate("2022-01-14T15:45:42.651Z"),
        "dataCancelamento" : ISODate("2020-06-03T14:47:00.731Z"),
        "dataVigenciaPeriodoTrial" : null,
        "periodo" : 1,
        "valorRealTotal" : NumberDecimal("1080"),
        "valorRealMensal" : NumberDecimal("90"),
        "valorNominalParcela" : NumberDecimal("90"),
        "valorCoparticipacaoEmpresa" : NumberDecimal("0"),
        "idPlano" : UUID("005d9991-e7c7-49ff-a617-fa3ce1bad9e5"),
        "ehDescontoEmFolha" : false,
        "dataAtivacao" : ISODate("2020-12-07T13:36:00.071Z"),"parcelasPlano" : [],
        "metadata" : {
            "ativo" : false,
            "dataCriacao" : ISODate("2020-11-30T20:33:21.593Z"),
            "dataAtualizacao" : null,
            "dataDelecao" : null
        }
    },{
        "_id" : ObjectId("5fc557119ab06f000157437e"),
        "id" : UUID("1ab14425-7dbf-4d97-9702-61d6d1f107e9"),
        "titular" : "MARCO ANTONIO ARAUJO SILVA",
        "documentoAssinante" : "06124354829",
        "documentoEmpresa" : "04532167000154",
        "emailAssinante" : "marcoalemao@gmail.com",
        "dataAdesao" : ISODate("2020-01-14T22:17:52.127Z"),
        "dataVigencia" : ISODate("2022-01-14T22:17:52.127Z"),
        "dataCancelamento" : null,
        "dataVigenciaPeriodoTrial" : null,
        "periodo" : 1,
        "valorRealTotal" : NumberDecimal("1404"),
        "valorRealMensal" : NumberDecimal("117"),
        "valorNominalParcela" : NumberDecimal("117"),
        "valorCoparticipacaoEmpresa" : NumberDecimal("60"),
        "idPlano" : UUID("2c51afde-4f49-4193-a948-24018d543fb3"),
        "ehDescontoEmFolha" : true,
        "dataAtivacao" : ISODate("2020-12-07T13:36:00.071Z"),"parcelasPlano" : [ 
            {
                "numero" : 5,
                "mesReferencia" : ISODate("2020-05-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("427a93e4-25dc-4446-b95e-7fdf0a74b664"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("202d1075-3a65-44c5-b654-b22a631f78e8"),
                                "valorRecebido" : NumberDecimal("117")
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 6,
                "mesReferencia" : ISODate("2020-06-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("201998f4-b186-4b80-9dae-9c6b4e3d66e4"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("92ccca6f-b8e1-405d-9efb-02c4f6778a9f"),
                                "valorRecebido" : null
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 7,
                "mesReferencia" : ISODate("2020-07-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("9f29676b-c86d-4629-8f72-a58775cf606f"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("bfcd2c38-137d-44d2-9005-232825b16341"),
                                "valorRecebido" : null
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 8,
                "mesReferencia" : ISODate("2021-08-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("2d7d308a-c2c6-4ca3-b83c-149393daef09"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("ed2e3e15-cdb1-4205-a4a3-cea523d2415a"),
                                "valorRecebido" : null
                            }, 
                            {
                                "idRecebimento" : UUID("537f78a8-c023-4e1c-a3ff-a274ade8ba6b"),
                                "valorRecebido" : null
                            }
                        ]
                    }
                ]
            }
        ],
        "metadata" : {
            "ativo" : true,
            "dataCriacao" : ISODate("2020-11-30T20:33:21.596Z"),
            "dataAtualizacao" : ISODate("2020-12-01T19:03:47.632Z"),
            "dataDelecao" : null
        }
    },{
        "_id" : ObjectId("5fc557119ab06f0001574380"),
        "id" : UUID("6378c922-3e90-4d51-8eb3-114365938f12"),
        "titular" : "ALEXSANDRA APARECIDA TEIXEIRA",
        "documentoAssinante" : "07547983723",
        "documentoEmpresa" : "04532167000154",
        "emailAssinante" : "alexateixeira2015@bol.com.br",
        "dataAdesao" : ISODate("2020-01-21T12:32:57.599Z"),
        "dataVigencia" : ISODate("2022-01-21T12:32:57.599Z"),
        "dataCancelamento" : null,
        "dataVigenciaPeriodoTrial" : null,
        "periodo" : 1,
        "valorRealTotal" : NumberDecimal("1404"),
        "valorRealMensal" : NumberDecimal("117"),
        "valorNominalParcela" : NumberDecimal("117"),
        "valorCoparticipacaoEmpresa" : NumberDecimal("60"),
        "idPlano" : UUID("2c51afde-4f49-4193-a948-24018d543fb3"),
        "ehDescontoEmFolha" : true,
        "dataAtivacao" : ISODate("2020-12-07T13:36:00.071Z"),"parcelasPlano" : [ 
            {
                "numero" : 5,
                "mesReferencia" : ISODate("2020-05-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("427a93e4-25dc-4446-b95e-7fdf0a74b664"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("202d1075-3a65-44c5-b654-b22a631f78e8"),
                                "valorRecebido" : NumberDecimal("117")
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 6,
                "mesReferencia" : ISODate("2020-06-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("201998f4-b186-4b80-9dae-9c6b4e3d66e4"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("92ccca6f-b8e1-405d-9efb-02c4f6778a9f"),
                                "valorRecebido" : null
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 7,
                "mesReferencia" : ISODate("2020-07-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("9f29676b-c86d-4629-8f72-a58775cf606f"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("bfcd2c38-137d-44d2-9005-232825b16341"),
                                "valorRecebido" : null
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 8,
                "mesReferencia" : ISODate("2021-08-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("2d7d308a-c2c6-4ca3-b83c-149393daef09"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("ed2e3e15-cdb1-4205-a4a3-cea523d2415a"),
                                "valorRecebido" : null
                            }, 
                            {
                                "idRecebimento" : UUID("537f78a8-c023-4e1c-a3ff-a274ade8ba6b"),
                                "valorRecebido" : null
                            }
                        ]
                    }
                ]
            }
        ],
        "metadata" : {
            "ativo" : true,
            "dataCriacao" : ISODate("2020-11-30T20:33:21.603Z"),
            "dataAtualizacao" : ISODate("2020-12-01T19:03:47.635Z"),
            "dataDelecao" : null
        }
    },{
        "_id" : ObjectId("5fc557119ab06f0001574382"),
        "id" : UUID("b1cd3e85-9a4e-4df6-9d5b-d78c879c679f"),
        "titular" : "VICTOR HUGO SELVATI",
        "documentoAssinante" : "15778798725",
        "documentoEmpresa" : "04532167000154",
        "emailAssinante" : "vselvati@gmail.com",
        "dataAdesao" : ISODate("2020-01-26T22:15:33.592Z"),
        "dataVigencia" : ISODate("2022-01-26T22:15:33.592Z"),
        "dataCancelamento" : null,
        "dataVigenciaPeriodoTrial" : null,
        "periodo" : 1,
        "valorRealTotal" : NumberDecimal("1080"),
        "valorRealMensal" : NumberDecimal("90"),
        "valorNominalParcela" : NumberDecimal("90"),
        "valorCoparticipacaoEmpresa" : NumberDecimal("60"),
        "idPlano" : UUID("005d9991-e7c7-49ff-a617-fa3ce1bad9e5"),
        "ehDescontoEmFolha" : true,
        "dataAtivacao" : ISODate("2020-12-07T13:36:00.071Z"),"parcelasPlano" : [ 
            {
                "numero" : 5,
                "mesReferencia" : ISODate("2020-05-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("427a93e4-25dc-4446-b95e-7fdf0a74b664"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("202d1075-3a65-44c5-b654-b22a631f78e8"),
                                "valorRecebido" : NumberDecimal("90")
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 6,
                "mesReferencia" : ISODate("2020-06-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("201998f4-b186-4b80-9dae-9c6b4e3d66e4"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("92ccca6f-b8e1-405d-9efb-02c4f6778a9f"),
                                "valorRecebido" : null
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 7,
                "mesReferencia" : ISODate("2020-07-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("9f29676b-c86d-4629-8f72-a58775cf606f"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("bfcd2c38-137d-44d2-9005-232825b16341"),
                                "valorRecebido" : null
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 8,
                "mesReferencia" : ISODate("2021-08-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("2d7d308a-c2c6-4ca3-b83c-149393daef09"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("ed2e3e15-cdb1-4205-a4a3-cea523d2415a"),
                                "valorRecebido" : null
                            }, 
                            {
                                "idRecebimento" : UUID("537f78a8-c023-4e1c-a3ff-a274ade8ba6b"),
                                "valorRecebido" : null
                            }
                        ]
                    }
                ]
            }
        ],
        "metadata" : {
            "ativo" : true,
            "dataCriacao" : ISODate("2020-11-30T20:33:21.609Z"),
            "dataAtualizacao" : ISODate("2020-12-01T19:03:47.638Z"),
            "dataDelecao" : null
        }
    },{
        "_id" : ObjectId("5fc557119ab06f0001574385"),
        "id" : UUID("e1e3459a-91a2-4799-938b-c355b3ed417a"),
        "titular" : "RODRIGO DE CARVALHO FERNANDES",
        "documentoAssinante" : "43840664810",
        "documentoEmpresa" : "04532167000154",
        "emailAssinante" : "rodrigocarvalhofernandes@outlook.com",
        "dataAdesao" : ISODate("2020-02-13T13:43:54.090Z"),
        "dataVigencia" : ISODate("2022-02-13T13:43:54.090Z"),
        "dataCancelamento" : null,
        "dataVigenciaPeriodoTrial" : null,
        "periodo" : 1,
        "valorRealTotal" : NumberDecimal("1404"),
        "valorRealMensal" : NumberDecimal("117"),
        "valorNominalParcela" : NumberDecimal("117"),
        "valorCoparticipacaoEmpresa" : NumberDecimal("60"),
        "idPlano" : UUID("2c51afde-4f49-4193-a948-24018d543fb3"),
        "ehDescontoEmFolha" : true,
        "dataAtivacao" : ISODate("2020-12-07T13:36:00.071Z"),"parcelasPlano" : [ 
            {
                "numero" : 4,
                "mesReferencia" : ISODate("2020-05-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("427a93e4-25dc-4446-b95e-7fdf0a74b664"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("202d1075-3a65-44c5-b654-b22a631f78e8"),
                                "valorRecebido" : NumberDecimal("117")
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 5,
                "mesReferencia" : ISODate("2020-06-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("201998f4-b186-4b80-9dae-9c6b4e3d66e4"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("92ccca6f-b8e1-405d-9efb-02c4f6778a9f"),
                                "valorRecebido" : null
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 6,
                "mesReferencia" : ISODate("2020-07-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("9f29676b-c86d-4629-8f72-a58775cf606f"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("bfcd2c38-137d-44d2-9005-232825b16341"),
                                "valorRecebido" : null
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 7,
                "mesReferencia" : ISODate("2021-08-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("2d7d308a-c2c6-4ca3-b83c-149393daef09"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("ed2e3e15-cdb1-4205-a4a3-cea523d2415a"),
                                "valorRecebido" : null
                            }, 
                            {
                                "idRecebimento" : UUID("537f78a8-c023-4e1c-a3ff-a274ade8ba6b"),
                                "valorRecebido" : null
                            }
                        ]
                    }
                ]
            }
        ],
        "metadata" : {
            "ativo" : true,
            "dataCriacao" : ISODate("2020-11-30T20:33:21.618Z"),
            "dataAtualizacao" : ISODate("2020-12-01T19:03:47.641Z"),
            "dataDelecao" : null
        }
    },{
        "_id" : ObjectId("5fc557119ab06f0001574386"),
        "id" : UUID("e50d3c3c-2afc-46f8-8703-f8f7c68ce726"),
        "titular" : "JOSE ROBERTO DE MORAES",
        "documentoAssinante" : "09359153702",
        "documentoEmpresa" : "04532167000154",
        "emailAssinante" : "j.robertomoraes02@gmail.com",
        "dataAdesao" : ISODate("2020-02-13T14:45:40.059Z"),
        "dataVigencia" : ISODate("2022-02-13T14:45:40.059Z"),
        "dataCancelamento" : null,
        "dataVigenciaPeriodoTrial" : null,
        "periodo" : 1,
        "valorRealTotal" : NumberDecimal("1404"),
        "valorRealMensal" : NumberDecimal("117"),
        "valorNominalParcela" : NumberDecimal("117"),
        "valorCoparticipacaoEmpresa" : NumberDecimal("60"),
        "idPlano" : UUID("2c51afde-4f49-4193-a948-24018d543fb3"),
        "ehDescontoEmFolha" : true,
        "dataAtivacao" : ISODate("2020-12-07T13:36:00.071Z"),"parcelasPlano" : [ 
            {
                "numero" : 4,
                "mesReferencia" : ISODate("2020-05-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("427a93e4-25dc-4446-b95e-7fdf0a74b664"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("202d1075-3a65-44c5-b654-b22a631f78e8"),
                                "valorRecebido" : NumberDecimal("117")
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 5,
                "mesReferencia" : ISODate("2020-06-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("201998f4-b186-4b80-9dae-9c6b4e3d66e4"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("92ccca6f-b8e1-405d-9efb-02c4f6778a9f"),
                                "valorRecebido" : null
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 6,
                "mesReferencia" : ISODate("2020-07-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("9f29676b-c86d-4629-8f72-a58775cf606f"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("bfcd2c38-137d-44d2-9005-232825b16341"),
                                "valorRecebido" : null
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 7,
                "mesReferencia" : ISODate("2021-08-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("2d7d308a-c2c6-4ca3-b83c-149393daef09"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("ed2e3e15-cdb1-4205-a4a3-cea523d2415a"),
                                "valorRecebido" : null
                            }, 
                            {
                                "idRecebimento" : UUID("537f78a8-c023-4e1c-a3ff-a274ade8ba6b"),
                                "valorRecebido" : null
                            }
                        ]
                    }
                ]
            }
        ],
        "metadata" : {
            "ativo" : true,
            "dataCriacao" : ISODate("2020-11-30T20:33:21.621Z"),
            "dataAtualizacao" : ISODate("2020-12-01T19:03:47.643Z"),
            "dataDelecao" : null
        }
    },{
        "_id" : ObjectId("5fc557119ab06f0001574388"),
        "id" : UUID("9456f6dc-25aa-4e8d-ab2d-49e02e09f3e5"),
        "titular" : "ANDERSON NUNES",
        "documentoAssinante" : "05424067727",
        "documentoEmpresa" : "04532167000154",
        "emailAssinante" : "andersoncassyonunes7@gmail.com",
        "dataAdesao" : ISODate("2020-02-17T17:44:50.657Z"),
        "dataVigencia" : ISODate("2022-02-17T17:44:50.657Z"),
        "dataCancelamento" : null,
        "dataVigenciaPeriodoTrial" : null,
        "periodo" : 1,
        "valorRealTotal" : NumberDecimal("1080"),
        "valorRealMensal" : NumberDecimal("90"),
        "valorNominalParcela" : NumberDecimal("90"),
        "valorCoparticipacaoEmpresa" : NumberDecimal("60"),
        "idPlano" : UUID("005d9991-e7c7-49ff-a617-fa3ce1bad9e5"),
        "ehDescontoEmFolha" : true,
        "dataAtivacao" : ISODate("2020-12-07T13:36:00.071Z"),"parcelasPlano" : [ 
            {
                "numero" : 4,
                "mesReferencia" : ISODate("2020-05-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("427a93e4-25dc-4446-b95e-7fdf0a74b664"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("202d1075-3a65-44c5-b654-b22a631f78e8"),
                                "valorRecebido" : NumberDecimal("90")
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 5,
                "mesReferencia" : ISODate("2020-06-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("201998f4-b186-4b80-9dae-9c6b4e3d66e4"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("92ccca6f-b8e1-405d-9efb-02c4f6778a9f"),
                                "valorRecebido" : null
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 6,
                "mesReferencia" : ISODate("2020-07-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("9f29676b-c86d-4629-8f72-a58775cf606f"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("bfcd2c38-137d-44d2-9005-232825b16341"),
                                "valorRecebido" : null
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 7,
                "mesReferencia" : ISODate("2021-08-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("2d7d308a-c2c6-4ca3-b83c-149393daef09"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("ed2e3e15-cdb1-4205-a4a3-cea523d2415a"),
                                "valorRecebido" : null
                            }, 
                            {
                                "idRecebimento" : UUID("537f78a8-c023-4e1c-a3ff-a274ade8ba6b"),
                                "valorRecebido" : null
                            }
                        ]
                    }
                ]
            }
        ],
        "metadata" : {
            "ativo" : true,
            "dataCriacao" : ISODate("2020-11-30T20:33:21.627Z"),
            "dataAtualizacao" : ISODate("2020-12-01T19:03:47.646Z"),
            "dataDelecao" : null
        }
    },{
        "_id" : ObjectId("5fc557119ab06f0001574389"),
        "id" : UUID("4b82a8c3-2c4f-42cb-8d2e-21469b01f74d"),
        "titular" : "Ubaldo Francisco Pereira Junior",
        "documentoAssinante" : "00325084505",
        "documentoEmpresa" : "34008403000107",
        "emailAssinante" : "eng.ubaldo@gmail.com",
        "dataAdesao" : ISODate("2019-12-17T19:55:41.761Z"),
        "dataVigencia" : ISODate("2020-02-17T19:55:41.761Z"),
        "dataCancelamento" : null,
        "dataVigenciaPeriodoTrial" : null,
        "periodo" : 1,
        "valorRealTotal" : NumberDecimal("1080"),
        "valorRealMensal" : NumberDecimal("90"),
        "valorNominalParcela" : NumberDecimal("90"),
        "valorCoparticipacaoEmpresa" : NumberDecimal("90"),
        "idPlano" : UUID("005d9991-e7c7-49ff-a617-fa3ce1bad9e5"),
        "ehDescontoEmFolha" : false,
        "dataAtivacao" : ISODate("2020-12-07T13:36:00.071Z"),"parcelasPlano" : [],
        "metadata" : {
            "ativo" : true,
            "dataCriacao" : ISODate("2020-11-30T20:33:21.630Z"),
            "dataAtualizacao" : null,
            "dataDelecao" : null
        }
    },{
        "_id" : ObjectId("5fc557119ab06f000157438f"),
        "id" : UUID("ef1728dc-c09e-41b4-945a-68f4b23ce2c6"),
        "titular" : "CARLOS HENRIQUE S DE AGUIAR",
        "documentoAssinante" : "02124400711",
        "documentoEmpresa" : "04532167000154",
        "emailAssinante" : "r92197275@gmail.com",
        "dataAdesao" : ISODate("2020-01-14T11:38:32.244Z"),
        "dataVigencia" : ISODate("2021-01-14T11:38:32.244Z"),
        "dataCancelamento" : null,
        "dataVigenciaPeriodoTrial" : null,
        "periodo" : 1,
        "valorRealTotal" : NumberDecimal("3516"),
        "valorRealMensal" : NumberDecimal("293"),
        "valorNominalParcela" : NumberDecimal("293"),
        "valorCoparticipacaoEmpresa" : NumberDecimal("0"),
        "idPlano" : UUID("df3d6e2c-f124-4b56-b287-327cccb6bf84"),
        "ehDescontoEmFolha" : false,
        "dataAtivacao" : ISODate("2020-12-07T13:36:00.071Z"),"parcelasPlano" : [],
        "metadata" : {
            "ativo" : false,
            "dataCriacao" : ISODate("2020-11-30T20:33:21.649Z"),
            "dataAtualizacao" : null,
            "dataDelecao" : null
        }
    },{
        "_id" : ObjectId("5fc557119ab06f0001574391"),
        "id" : UUID("295caeae-2684-4373-818a-06f03dc98ced"),
        "titular" : "JOSE VICTOR VILELLA NOVAIS",
        "documentoAssinante" : "13506936697",
        "documentoEmpresa" : "04532167000154",
        "emailAssinante" : "jose.victorcovers@gmail.com",
        "dataAdesao" : ISODate("2020-01-14T11:44:24.888Z"),
        "dataVigencia" : ISODate("2021-01-14T11:44:24.888Z"),
        "dataCancelamento" : null,
        "dataVigenciaPeriodoTrial" : null,
        "periodo" : 1,
        "valorRealTotal" : NumberDecimal("1080"),
        "valorRealMensal" : NumberDecimal("90"),
        "valorNominalParcela" : NumberDecimal("90"),
        "valorCoparticipacaoEmpresa" : NumberDecimal("0"),
        "idPlano" : UUID("005d9991-e7c7-49ff-a617-fa3ce1bad9e5"),
        "ehDescontoEmFolha" : false,
        "dataAtivacao" : ISODate("2020-12-07T13:36:00.071Z"),"parcelasPlano" : [],
        "metadata" : {
            "ativo" : false,
            "dataCriacao" : ISODate("2020-11-30T20:33:21.655Z"),
            "dataAtualizacao" : null,
            "dataDelecao" : null
        }
    },{
        "_id" : ObjectId("5fc557119ab06f0001574394"),
        "id" : UUID("0c219fb6-6325-4b5c-822e-61bffaf0585b"),
        "titular" : "ROGERIO MEDEIROS",
        "documentoAssinante" : "97500194749",
        "documentoEmpresa" : "04532167000154",
        "emailAssinante" : "gerinhomedeiros123@gmail.com",
        "dataAdesao" : ISODate("2020-02-20T18:23:53.217Z"),
        "dataVigencia" : ISODate("2022-02-20T18:23:53.217Z"),
        "dataCancelamento" : null,
        "dataVigenciaPeriodoTrial" : null,
        "periodo" : 1,
        "valorRealTotal" : NumberDecimal("2460"),
        "valorRealMensal" : NumberDecimal("205"),
        "valorNominalParcela" : NumberDecimal("205"),
        "valorCoparticipacaoEmpresa" : NumberDecimal("60"),
        "idPlano" : UUID("30bb9449-b489-4416-9659-b8de544c10e9"),
        "ehDescontoEmFolha" : true,
        "dataAtivacao" : ISODate("2020-12-07T13:36:00.071Z"),"parcelasPlano" : [ 
            {
                "numero" : 4,
                "mesReferencia" : ISODate("2020-05-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("427a93e4-25dc-4446-b95e-7fdf0a74b664"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("202d1075-3a65-44c5-b654-b22a631f78e8"),
                                "valorRecebido" : NumberDecimal("205")
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 5,
                "mesReferencia" : ISODate("2020-06-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("201998f4-b186-4b80-9dae-9c6b4e3d66e4"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("92ccca6f-b8e1-405d-9efb-02c4f6778a9f"),
                                "valorRecebido" : null
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 6,
                "mesReferencia" : ISODate("2020-07-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("9f29676b-c86d-4629-8f72-a58775cf606f"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("bfcd2c38-137d-44d2-9005-232825b16341"),
                                "valorRecebido" : null
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 7,
                "mesReferencia" : ISODate("2021-08-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("2d7d308a-c2c6-4ca3-b83c-149393daef09"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("ed2e3e15-cdb1-4205-a4a3-cea523d2415a"),
                                "valorRecebido" : null
                            }, 
                            {
                                "idRecebimento" : UUID("537f78a8-c023-4e1c-a3ff-a274ade8ba6b"),
                                "valorRecebido" : null
                            }
                        ]
                    }
                ]
            }
        ],
        "metadata" : {
            "ativo" : true,
            "dataCriacao" : ISODate("2020-11-30T20:33:21.665Z"),
            "dataAtualizacao" : ISODate("2020-12-01T19:03:47.649Z"),
            "dataDelecao" : null
        }
    },{
        "_id" : ObjectId("5fc557119ab06f0001574396"),
        "id" : UUID("5b179951-a234-4086-ae7b-59e101b94551"),
        "titular" : "FABIANA DE CARVALHO S LAMEIRA",
        "documentoAssinante" : "15974920783",
        "documentoEmpresa" : "04532167000154",
        "emailAssinante" : "fabiana.scarvalho@hotmail.com",
        "dataAdesao" : ISODate("2020-02-21T01:09:40.069Z"),
        "dataVigencia" : ISODate("2022-02-21T01:09:40.069Z"),
        "dataCancelamento" : null,
        "dataVigenciaPeriodoTrial" : null,
        "periodo" : 1,
        "valorRealTotal" : NumberDecimal("1080"),
        "valorRealMensal" : NumberDecimal("90"),
        "valorNominalParcela" : NumberDecimal("90"),
        "valorCoparticipacaoEmpresa" : NumberDecimal("60"),
        "idPlano" : UUID("005d9991-e7c7-49ff-a617-fa3ce1bad9e5"),
        "ehDescontoEmFolha" : true,
        "dataAtivacao" : ISODate("2020-12-07T13:36:00.071Z"),"parcelasPlano" : [ 
            {
                "numero" : 4,
                "mesReferencia" : ISODate("2020-05-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("427a93e4-25dc-4446-b95e-7fdf0a74b664"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("202d1075-3a65-44c5-b654-b22a631f78e8"),
                                "valorRecebido" : NumberDecimal("90")
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 5,
                "mesReferencia" : ISODate("2020-06-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("201998f4-b186-4b80-9dae-9c6b4e3d66e4"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("92ccca6f-b8e1-405d-9efb-02c4f6778a9f"),
                                "valorRecebido" : null
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 6,
                "mesReferencia" : ISODate("2020-07-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("9f29676b-c86d-4629-8f72-a58775cf606f"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("bfcd2c38-137d-44d2-9005-232825b16341"),
                                "valorRecebido" : null
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 7,
                "mesReferencia" : ISODate("2021-08-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("2d7d308a-c2c6-4ca3-b83c-149393daef09"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("ed2e3e15-cdb1-4205-a4a3-cea523d2415a"),
                                "valorRecebido" : null
                            }, 
                            {
                                "idRecebimento" : UUID("537f78a8-c023-4e1c-a3ff-a274ade8ba6b"),
                                "valorRecebido" : null
                            }
                        ]
                    }
                ]
            }
        ],
        "metadata" : {
            "ativo" : true,
            "dataCriacao" : ISODate("2020-11-30T20:33:21.674Z"),
            "dataAtualizacao" : ISODate("2020-12-01T19:03:47.651Z"),
            "dataDelecao" : null
        }
    },{
        "_id" : ObjectId("5fc557119ab06f0001574398"),
        "id" : UUID("878f8617-8b82-4ade-8c77-cd3a7eaa42bd"),
        "titular" : "Diego Alberto Teixeira",
        "documentoAssinante" : "33063757802",
        "documentoEmpresa" : "34008403000107",
        "emailAssinante" : "diegoteixeir4@gmail.com",
        "dataAdesao" : ISODate("2020-02-27T21:12:10.642Z"),
        "dataVigencia" : ISODate("2021-02-27T21:12:10.642Z"),
        "dataCancelamento" : null,
        "dataVigenciaPeriodoTrial" : null,
        "periodo" : 1,
        "valorRealTotal" : NumberDecimal("1080"),
        "valorRealMensal" : NumberDecimal("90"),
        "valorNominalParcela" : NumberDecimal("90"),
        "valorCoparticipacaoEmpresa" : NumberDecimal("90"),
        "idPlano" : UUID("005d9991-e7c7-49ff-a617-fa3ce1bad9e5"),
        "ehDescontoEmFolha" : false,
        "dataAtivacao" : ISODate("2020-12-07T13:36:00.071Z"),"parcelasPlano" : [ 
            {
                "numero" : 1,
                "mesReferencia" : ISODate("2021-02-01T03:00:00.000Z"),
                "cobrancas" : []
            }, 
            {
                "numero" : 9,
                "mesReferencia" : ISODate("2020-10-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("dd02ab04-bbb9-4414-9128-5da90a664da0"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("767a3e28-0928-44cb-9ad6-48d2d36c9b11"),
                                "valorRecebido" : NumberDecimal("90")
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 8,
                "mesReferencia" : ISODate("2020-09-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("66292957-e38e-4f90-838c-ea787c98f3dc"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("85df9130-6ba8-4dc7-8ff1-403d26674ed5"),
                                "valorRecebido" : NumberDecimal("90")
                            }
                        ]
                    }
                ]
            }
        ],
        "metadata" : {
            "ativo" : true,
            "dataCriacao" : ISODate("2020-11-30T20:33:21.682Z"),
            "dataAtualizacao" : ISODate("2020-12-01T17:39:42.229Z"),
            "dataDelecao" : null
        }
    },{
        "_id" : ObjectId("5fc557119ab06f000157439e"),
        "id" : UUID("ebe5b00a-3360-45ca-91d0-e3a02952b019"),
        "titular" : "William Alves dos Santos da Silva",
        "documentoAssinante" : "38931972814",
        "documentoEmpresa" : "34008403000107",
        "emailAssinante" : "williamfmu@hotmail.com",
        "dataAdesao" : ISODate("2020-03-26T15:12:24.968Z"),
        "dataVigencia" : ISODate("2021-03-26T15:12:24.968Z"),
        "dataCancelamento" : ISODate("2020-05-28T18:10:00.475Z"),
        "dataVigenciaPeriodoTrial" : null,
        "periodo" : 1,
        "valorRealTotal" : NumberDecimal("1080"),
        "valorRealMensal" : NumberDecimal("90"),
        "valorNominalParcela" : NumberDecimal("90"),
        "valorCoparticipacaoEmpresa" : NumberDecimal("0"),
        "idPlano" : UUID("005d9991-e7c7-49ff-a617-fa3ce1bad9e5"),
        "ehDescontoEmFolha" : false,
        "dataAtivacao" : ISODate("2020-12-07T13:36:00.071Z"),"parcelasPlano" : [],
        "metadata" : {
            "ativo" : false,
            "dataCriacao" : ISODate("2020-11-30T20:33:21.701Z"),
            "dataAtualizacao" : null,
            "dataDelecao" : null
        }
    },{
        "_id" : ObjectId("5fc557119ab06f000157439f"),
        "id" : UUID("d6913ac3-0504-4b73-93fc-71216c7d52f2"),
        "titular" : "Monica Luciana Tardiola",
        "documentoAssinante" : "25636656807",
        "documentoEmpresa" : "34008403000107",
        "emailAssinante" : "mltardiola@hotmail.com",
        "dataAdesao" : ISODate("2020-03-26T18:02:05.726Z"),
        "dataVigencia" : ISODate("2021-03-26T18:02:05.726Z"),
        "dataCancelamento" : null,
        "dataVigenciaPeriodoTrial" : null,
        "periodo" : 1,
        "valorRealTotal" : NumberDecimal("1080"),
        "valorRealMensal" : NumberDecimal("90"),
        "valorNominalParcela" : NumberDecimal("90"),
        "valorCoparticipacaoEmpresa" : NumberDecimal("90"),
        "idPlano" : UUID("005d9991-e7c7-49ff-a617-fa3ce1bad9e5"),
        "ehDescontoEmFolha" : false,
        "dataAtivacao" : ISODate("2020-12-07T13:36:00.071Z"),"parcelasPlano" : [ 
            {
                "numero" : 12,
                "mesReferencia" : ISODate("2021-02-01T03:00:00.000Z"),
                "cobrancas" : []
            }, 
            {
                "numero" : 1,
                "mesReferencia" : ISODate("2021-03-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("9af523d7-9ba2-4d31-943c-01fee35545f5"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("d5ea387c-a0ff-4cc6-9158-bbab8e5edea5"),
                                "valorRecebido" : null
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 8,
                "mesReferencia" : ISODate("2020-10-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("dd02ab04-bbb9-4414-9128-5da90a664da0"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("767a3e28-0928-44cb-9ad6-48d2d36c9b11"),
                                "valorRecebido" : NumberDecimal("90")
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 7,
                "mesReferencia" : ISODate("2020-09-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("66292957-e38e-4f90-838c-ea787c98f3dc"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("85df9130-6ba8-4dc7-8ff1-403d26674ed5"),
                                "valorRecebido" : NumberDecimal("90")
                            }
                        ]
                    }
                ]
            }
        ],
        "metadata" : {
            "ativo" : true,
            "dataCriacao" : ISODate("2020-11-30T20:33:21.704Z"),
            "dataAtualizacao" : ISODate("2020-12-01T17:39:42.231Z"),
            "dataDelecao" : null
        }
    },{
        "_id" : ObjectId("5fc557119ab06f00015743a0"),
        "id" : UUID("959aa115-fcfd-4421-bb62-f1774eb42b84"),
        "titular" : "Elaine Rodrigues",
        "documentoAssinante" : "26491517810",
        "documentoEmpresa" : "34008403000107",
        "emailAssinante" : "erodrigues.er@gmail.com",
        "dataAdesao" : ISODate("2020-03-26T22:32:42.319Z"),
        "dataVigencia" : ISODate("2021-03-26T22:32:42.319Z"),
        "dataCancelamento" : null,
        "dataVigenciaPeriodoTrial" : null,
        "periodo" : 1,
        "valorRealTotal" : NumberDecimal("1080"),
        "valorRealMensal" : NumberDecimal("90"),
        "valorNominalParcela" : NumberDecimal("90"),
        "valorCoparticipacaoEmpresa" : NumberDecimal("90"),
        "idPlano" : UUID("005d9991-e7c7-49ff-a617-fa3ce1bad9e5"),
        "ehDescontoEmFolha" : true,
        "dataAtivacao" : ISODate("2020-12-07T13:36:00.071Z"),"parcelasPlano" : [ 
            {
                "numero" : 12,
                "mesReferencia" : ISODate("2021-02-01T03:00:00.000Z"),
                "cobrancas" : []
            }, 
            {
                "numero" : 1,
                "mesReferencia" : ISODate("2021-03-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("9af523d7-9ba2-4d31-943c-01fee35545f5"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("d5ea387c-a0ff-4cc6-9158-bbab8e5edea5"),
                                "valorRecebido" : null
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 8,
                "mesReferencia" : ISODate("2020-10-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("dd02ab04-bbb9-4414-9128-5da90a664da0"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("767a3e28-0928-44cb-9ad6-48d2d36c9b11"),
                                "valorRecebido" : NumberDecimal("90")
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 7,
                "mesReferencia" : ISODate("2020-09-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("66292957-e38e-4f90-838c-ea787c98f3dc"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("85df9130-6ba8-4dc7-8ff1-403d26674ed5"),
                                "valorRecebido" : NumberDecimal("90")
                            }
                        ]
                    }
                ]
            }
        ],
        "metadata" : {
            "ativo" : true,
            "dataCriacao" : ISODate("2020-11-30T20:33:21.707Z"),
            "dataAtualizacao" : ISODate("2020-12-01T17:39:42.232Z"),
            "dataDelecao" : null
        }
    },{
        "_id" : ObjectId("5fc557119ab06f00015743a1"),
        "id" : UUID("26c0bbc0-7606-4947-80dc-36911d328791"),
        "titular" : "Christiane Maria Pedrosa Hiroshe",
        "documentoAssinante" : "30304894850",
        "documentoEmpresa" : "34008403000107",
        "emailAssinante" : "chiroshe@gmail.com",
        "dataAdesao" : ISODate("2020-03-31T11:13:46.587Z"),
        "dataVigencia" : ISODate("2021-03-31T11:13:46.587Z"),
        "dataCancelamento" : null,
        "dataVigenciaPeriodoTrial" : null,
        "periodo" : 1,
        "valorRealTotal" : NumberDecimal("1080"),
        "valorRealMensal" : NumberDecimal("90"),
        "valorNominalParcela" : NumberDecimal("90"),
        "valorCoparticipacaoEmpresa" : NumberDecimal("90"),
        "idPlano" : UUID("005d9991-e7c7-49ff-a617-fa3ce1bad9e5"),
        "ehDescontoEmFolha" : true,
        "dataAtivacao" : ISODate("2020-12-07T13:36:00.071Z"),"parcelasPlano" : [ 
            {
                "numero" : 12,
                "mesReferencia" : ISODate("2021-02-01T03:00:00.000Z"),
                "cobrancas" : []
            }, 
            {
                "numero" : 1,
                "mesReferencia" : ISODate("2021-03-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("9af523d7-9ba2-4d31-943c-01fee35545f5"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("d5ea387c-a0ff-4cc6-9158-bbab8e5edea5"),
                                "valorRecebido" : null
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 8,
                "mesReferencia" : ISODate("2020-10-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("dd02ab04-bbb9-4414-9128-5da90a664da0"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("767a3e28-0928-44cb-9ad6-48d2d36c9b11"),
                                "valorRecebido" : NumberDecimal("90")
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 7,
                "mesReferencia" : ISODate("2020-09-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("66292957-e38e-4f90-838c-ea787c98f3dc"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("85df9130-6ba8-4dc7-8ff1-403d26674ed5"),
                                "valorRecebido" : NumberDecimal("90")
                            }
                        ]
                    }
                ]
            }
        ],
        "metadata" : {
            "ativo" : true,
            "dataCriacao" : ISODate("2020-11-30T20:33:21.711Z"),
            "dataAtualizacao" : ISODate("2020-12-01T17:39:42.234Z"),
            "dataDelecao" : null
        }
    },{
        "_id" : ObjectId("5fc557119ab06f00015743a2"),
        "id" : UUID("b8d68195-caa5-41ad-a8cf-d6d02ad9e595"),
        "titular" : "Caio Ferreiro",
        "documentoAssinante" : "37373407811",
        "documentoEmpresa" : "34008403000107",
        "emailAssinante" : "ferreiro.caio@gmail.com",
        "dataAdesao" : ISODate("2020-04-08T18:09:04.941Z"),
        "dataVigencia" : ISODate("2021-04-08T18:09:04.941Z"),
        "dataCancelamento" : null,
        "dataVigenciaPeriodoTrial" : null,
        "periodo" : 1,
        "valorRealTotal" : NumberDecimal("1080"),
        "valorRealMensal" : NumberDecimal("90"),
        "valorNominalParcela" : NumberDecimal("90"),
        "valorCoparticipacaoEmpresa" : NumberDecimal("90"),
        "idPlano" : UUID("005d9991-e7c7-49ff-a617-fa3ce1bad9e5"),
        "ehDescontoEmFolha" : true,
        "dataAtivacao" : ISODate("2020-12-07T13:36:00.071Z"),"parcelasPlano" : [ 
            {
                "numero" : 11,
                "mesReferencia" : ISODate("2021-02-01T03:00:00.000Z"),
                "cobrancas" : []
            }, 
            {
                "numero" : 12,
                "mesReferencia" : ISODate("2021-03-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("9af523d7-9ba2-4d31-943c-01fee35545f5"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("d5ea387c-a0ff-4cc6-9158-bbab8e5edea5"),
                                "valorRecebido" : NumberDecimal("90")
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 1,
                "mesReferencia" : ISODate("2021-04-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("71667f08-c45a-4ca1-a7e2-e476e6f27bed"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("31de0986-207d-48bf-9313-8b9e9a35f71d"),
                                "valorRecebido" : NumberDecimal("50")
                            }, 
                            {
                                "idRecebimento" : UUID("13d30f9a-3417-4c56-82a4-e77f9a66265f"),
                                "valorRecebido" : NumberDecimal("50")
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 7,
                "mesReferencia" : ISODate("2020-10-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("dd02ab04-bbb9-4414-9128-5da90a664da0"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("767a3e28-0928-44cb-9ad6-48d2d36c9b11"),
                                "valorRecebido" : NumberDecimal("90")
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 6,
                "mesReferencia" : ISODate("2020-09-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("66292957-e38e-4f90-838c-ea787c98f3dc"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("85df9130-6ba8-4dc7-8ff1-403d26674ed5"),
                                "valorRecebido" : NumberDecimal("90")
                            }
                        ]
                    }
                ]
            }
        ],
        "metadata" : {
            "ativo" : true,
            "dataCriacao" : ISODate("2020-11-30T20:33:21.714Z"),
            "dataAtualizacao" : ISODate("2020-12-01T17:39:42.236Z"),
            "dataDelecao" : null
        }
    },{
        "_id" : ObjectId("5fc557119ab06f00015743a3"),
        "id" : UUID("b9256917-1d31-466a-9137-7be08a3ab406"),
        "titular" : "Leandro Teixeira Santos",
        "documentoAssinante" : "22579615873",
        "documentoEmpresa" : "34008403000107",
        "emailAssinante" : "le_drums_n_bass@hotmail.com",
        "dataAdesao" : ISODate("2020-04-15T20:15:14.667Z"),
        "dataVigencia" : ISODate("2021-04-15T20:15:14.667Z"),
        "dataCancelamento" : null,
        "dataVigenciaPeriodoTrial" : null,
        "periodo" : 1,
        "valorRealTotal" : NumberDecimal("1080"),
        "valorRealMensal" : NumberDecimal("90"),
        "valorNominalParcela" : NumberDecimal("90"),
        "valorCoparticipacaoEmpresa" : NumberDecimal("90"),
        "idPlano" : UUID("005d9991-e7c7-49ff-a617-fa3ce1bad9e5"),
        "ehDescontoEmFolha" : false,
        "dataAtivacao" : ISODate("2020-12-07T13:36:00.071Z"),"parcelasPlano" : [ 
            {
                "numero" : 11,
                "mesReferencia" : ISODate("2021-02-01T03:00:00.000Z"),
                "cobrancas" : []
            }, 
            {
                "numero" : 12,
                "mesReferencia" : ISODate("2021-03-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("9af523d7-9ba2-4d31-943c-01fee35545f5"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("d5ea387c-a0ff-4cc6-9158-bbab8e5edea5"),
                                "valorRecebido" : null
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 1,
                "mesReferencia" : ISODate("2021-04-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("71667f08-c45a-4ca1-a7e2-e476e6f27bed"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("31de0986-207d-48bf-9313-8b9e9a35f71d"),
                                "valorRecebido" : NumberDecimal("50")
                            }, 
                            {
                                "idRecebimento" : UUID("13d30f9a-3417-4c56-82a4-e77f9a66265f"),
                                "valorRecebido" : NumberDecimal("50")
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 7,
                "mesReferencia" : ISODate("2020-10-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("dd02ab04-bbb9-4414-9128-5da90a664da0"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("767a3e28-0928-44cb-9ad6-48d2d36c9b11"),
                                "valorRecebido" : NumberDecimal("90")
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 6,
                "mesReferencia" : ISODate("2020-09-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("66292957-e38e-4f90-838c-ea787c98f3dc"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("85df9130-6ba8-4dc7-8ff1-403d26674ed5"),
                                "valorRecebido" : NumberDecimal("90")
                            }
                        ]
                    }
                ]
            }
        ],
        "metadata" : {
            "ativo" : true,
            "dataCriacao" : ISODate("2020-11-30T20:33:21.717Z"),
            "dataAtualizacao" : ISODate("2020-12-01T17:39:42.238Z"),
            "dataDelecao" : null
        }
    },{
        "_id" : ObjectId("5fc557119ab06f00015743a5"),
        "id" : UUID("afcc05bd-c9d0-4c48-b55a-7573c5fe7da0"),
        "titular" : "Felipe da Silva Chan",
        "documentoAssinante" : "08775272962",
        "documentoEmpresa" : "34008403000107",
        "emailAssinante" : "contato.felipechan@gmail.com",
        "dataAdesao" : ISODate("2020-06-08T16:47:33.547Z"),
        "dataVigencia" : ISODate("2021-06-08T16:57:08.721Z"),
        "dataCancelamento" : null,
        "dataVigenciaPeriodoTrial" : null,
        "periodo" : 1,
        "valorRealTotal" : NumberDecimal("1080"),
        "valorRealMensal" : NumberDecimal("90"),
        "valorNominalParcela" : NumberDecimal("90"),
        "valorCoparticipacaoEmpresa" : NumberDecimal("90"),
        "idPlano" : UUID("005d9991-e7c7-49ff-a617-fa3ce1bad9e5"),
        "ehDescontoEmFolha" : false,
        "dataAtivacao" : ISODate("2020-12-07T13:36:00.071Z"),"parcelasPlano" : [ 
            {
                "numero" : 9,
                "mesReferencia" : ISODate("2021-02-01T03:00:00.000Z"),
                "cobrancas" : []
            }, 
            {
                "numero" : 10,
                "mesReferencia" : ISODate("2021-03-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("9af523d7-9ba2-4d31-943c-01fee35545f5"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("d5ea387c-a0ff-4cc6-9158-bbab8e5edea5"),
                                "valorRecebido" : null
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 11,
                "mesReferencia" : ISODate("2021-04-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("71667f08-c45a-4ca1-a7e2-e476e6f27bed"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("31de0986-207d-48bf-9313-8b9e9a35f71d"),
                                "valorRecebido" : NumberDecimal("50")
                            }, 
                            {
                                "idRecebimento" : UUID("13d30f9a-3417-4c56-82a4-e77f9a66265f"),
                                "valorRecebido" : NumberDecimal("50")
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 12,
                "mesReferencia" : ISODate("2021-05-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("f0096f5b-20f6-4274-b708-eff02c4b4522"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("c4e22ff4-993e-4f52-a5f0-855f81e21e6f"),
                                "valorRecebido" : null
                            }, 
                            {
                                "idRecebimento" : UUID("95088f01-6513-4fdb-abbc-78592ca8ebbc"),
                                "valorRecebido" : null
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 5,
                "mesReferencia" : ISODate("2020-10-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("dd02ab04-bbb9-4414-9128-5da90a664da0"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("767a3e28-0928-44cb-9ad6-48d2d36c9b11"),
                                "valorRecebido" : NumberDecimal("90")
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 4,
                "mesReferencia" : ISODate("2020-09-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("66292957-e38e-4f90-838c-ea787c98f3dc"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("85df9130-6ba8-4dc7-8ff1-403d26674ed5"),
                                "valorRecebido" : NumberDecimal("90")
                            }
                        ]
                    }
                ]
            }
        ],
        "metadata" : {
            "ativo" : true,
            "dataCriacao" : ISODate("2020-11-30T20:33:21.723Z"),
            "dataAtualizacao" : ISODate("2020-12-01T17:39:42.240Z"),
            "dataDelecao" : null
        }
    },{
        "_id" : ObjectId("5fc557119ab06f00015743a6"),
        "id" : UUID("df8d2ac7-e8ef-490e-9492-1178b97be5f0"),
        "titular" : "Letícia Ayumi Miura",
        "documentoAssinante" : "37546278805",
        "documentoEmpresa" : "34008403000107",
        "emailAssinante" : "leticiaayumi.pro@gmail.com",
        "dataAdesao" : ISODate("2020-06-16T17:28:34.825Z"),
        "dataVigencia" : ISODate("2021-06-16T17:29:33.921Z"),
        "dataCancelamento" : null,
        "dataVigenciaPeriodoTrial" : ISODate("2020-06-23T00:00:00.000Z"),
        "periodo" : 1,
        "valorRealTotal" : NumberDecimal("1080"),
        "valorRealMensal" : NumberDecimal("90"),
        "valorNominalParcela" : NumberDecimal("90"),
        "valorCoparticipacaoEmpresa" : NumberDecimal("90"),
        "idPlano" : UUID("005d9991-e7c7-49ff-a617-fa3ce1bad9e5"),
        "ehDescontoEmFolha" : false,
        "dataAtivacao" : ISODate("2020-12-07T13:36:00.071Z"),"parcelasPlano" : [ 
            {
                "numero" : 9,
                "mesReferencia" : ISODate("2021-02-01T03:00:00.000Z"),
                "cobrancas" : []
            }, 
            {
                "numero" : 10,
                "mesReferencia" : ISODate("2021-03-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("9af523d7-9ba2-4d31-943c-01fee35545f5"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("d5ea387c-a0ff-4cc6-9158-bbab8e5edea5"),
                                "valorRecebido" : null
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 11,
                "mesReferencia" : ISODate("2021-04-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("71667f08-c45a-4ca1-a7e2-e476e6f27bed"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("31de0986-207d-48bf-9313-8b9e9a35f71d"),
                                "valorRecebido" : NumberDecimal("50")
                            }, 
                            {
                                "idRecebimento" : UUID("13d30f9a-3417-4c56-82a4-e77f9a66265f"),
                                "valorRecebido" : NumberDecimal("50")
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 12,
                "mesReferencia" : ISODate("2021-05-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("f0096f5b-20f6-4274-b708-eff02c4b4522"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("c4e22ff4-993e-4f52-a5f0-855f81e21e6f"),
                                "valorRecebido" : null
                            }, 
                            {
                                "idRecebimento" : UUID("95088f01-6513-4fdb-abbc-78592ca8ebbc"),
                                "valorRecebido" : null
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 5,
                "mesReferencia" : ISODate("2020-10-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("dd02ab04-bbb9-4414-9128-5da90a664da0"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("767a3e28-0928-44cb-9ad6-48d2d36c9b11"),
                                "valorRecebido" : NumberDecimal("90")
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 4,
                "mesReferencia" : ISODate("2020-09-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("66292957-e38e-4f90-838c-ea787c98f3dc"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("85df9130-6ba8-4dc7-8ff1-403d26674ed5"),
                                "valorRecebido" : NumberDecimal("90")
                            }
                        ]
                    }
                ]
            }
        ],
        "metadata" : {
            "ativo" : true,
            "dataCriacao" : ISODate("2020-11-30T20:33:21.726Z"),
            "dataAtualizacao" : ISODate("2020-12-01T17:39:42.242Z"),
            "dataDelecao" : null
        }
    },{
        "_id" : ObjectId("5fc557119ab06f00015743a7"),
        "id" : UUID("ec07c34d-3d78-4bfa-bdb3-c717332484b5"),
        "titular" : "Luiz Felipe do Nascimento Brito",
        "documentoAssinante" : "95131558204",
        "documentoEmpresa" : "34008403000107",
        "emailAssinante" : "felipebrito1@gmail.com",
        "dataAdesao" : ISODate("2020-06-29T12:44:28.320Z"),
        "dataVigencia" : ISODate("2021-06-29T12:49:00.920Z"),
        "dataCancelamento" : null,
        "dataVigenciaPeriodoTrial" : ISODate("2020-07-06T00:00:00.000Z"),
        "periodo" : 1,
        "valorRealTotal" : NumberDecimal("1080"),
        "valorRealMensal" : NumberDecimal("90"),
        "valorNominalParcela" : NumberDecimal("90"),
        "valorCoparticipacaoEmpresa" : NumberDecimal("90"),
        "idPlano" : UUID("005d9991-e7c7-49ff-a617-fa3ce1bad9e5"),
        "ehDescontoEmFolha" : false,
        "dataAtivacao" : ISODate("2020-12-07T13:36:00.071Z"),"parcelasPlano" : [ 
            {
                "numero" : 9,
                "mesReferencia" : ISODate("2021-02-01T03:00:00.000Z"),
                "cobrancas" : []
            }, 
            {
                "numero" : 10,
                "mesReferencia" : ISODate("2021-03-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("9af523d7-9ba2-4d31-943c-01fee35545f5"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("d5ea387c-a0ff-4cc6-9158-bbab8e5edea5"),
                                "valorRecebido" : null
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 11,
                "mesReferencia" : ISODate("2021-04-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("71667f08-c45a-4ca1-a7e2-e476e6f27bed"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("31de0986-207d-48bf-9313-8b9e9a35f71d"),
                                "valorRecebido" : NumberDecimal("50")
                            }, 
                            {
                                "idRecebimento" : UUID("13d30f9a-3417-4c56-82a4-e77f9a66265f"),
                                "valorRecebido" : NumberDecimal("50")
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 12,
                "mesReferencia" : ISODate("2021-05-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("f0096f5b-20f6-4274-b708-eff02c4b4522"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("c4e22ff4-993e-4f52-a5f0-855f81e21e6f"),
                                "valorRecebido" : null
                            }, 
                            {
                                "idRecebimento" : UUID("95088f01-6513-4fdb-abbc-78592ca8ebbc"),
                                "valorRecebido" : null
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 5,
                "mesReferencia" : ISODate("2020-10-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("dd02ab04-bbb9-4414-9128-5da90a664da0"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("767a3e28-0928-44cb-9ad6-48d2d36c9b11"),
                                "valorRecebido" : NumberDecimal("90")
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 4,
                "mesReferencia" : ISODate("2020-09-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("66292957-e38e-4f90-838c-ea787c98f3dc"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("85df9130-6ba8-4dc7-8ff1-403d26674ed5"),
                                "valorRecebido" : NumberDecimal("90")
                            }
                        ]
                    }
                ]
            }
        ],
        "metadata" : {
            "ativo" : true,
            "dataCriacao" : ISODate("2020-11-30T20:33:21.730Z"),
            "dataAtualizacao" : ISODate("2020-12-01T17:39:42.244Z"),
            "dataDelecao" : null
        }
    },{
        "_id" : ObjectId("5fc557119ab06f00015743a8"),
        "id" : UUID("8caf9944-8c4e-4ff7-b38c-bcc24b3b7e4d"),
        "titular" : "Paulo Toshio Ohashi Neto",
        "documentoAssinante" : "01991810202",
        "documentoEmpresa" : "34008403000107",
        "emailAssinante" : "paulotoshioneto@gmail.com",
        "dataAdesao" : ISODate("2020-06-29T13:52:01.181Z"),
        "dataVigencia" : ISODate("2021-06-29T13:52:26.899Z"),
        "dataCancelamento" : null,
        "dataVigenciaPeriodoTrial" : ISODate("2020-07-06T00:00:00.000Z"),
        "periodo" : 1,
        "valorRealTotal" : NumberDecimal("1080"),
        "valorRealMensal" : NumberDecimal("90"),
        "valorNominalParcela" : NumberDecimal("90"),
        "valorCoparticipacaoEmpresa" : NumberDecimal("90"),
        "idPlano" : UUID("005d9991-e7c7-49ff-a617-fa3ce1bad9e5"),
        "ehDescontoEmFolha" : false,
        "dataAtivacao" : ISODate("2020-12-07T13:36:00.071Z"),"parcelasPlano" : [ 
            {
                "numero" : 9,
                "mesReferencia" : ISODate("2021-02-01T03:00:00.000Z"),
                "cobrancas" : []
            }, 
            {
                "numero" : 10,
                "mesReferencia" : ISODate("2021-03-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("9af523d7-9ba2-4d31-943c-01fee35545f5"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("d5ea387c-a0ff-4cc6-9158-bbab8e5edea5"),
                                "valorRecebido" : null
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 11,
                "mesReferencia" : ISODate("2021-04-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("71667f08-c45a-4ca1-a7e2-e476e6f27bed"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("31de0986-207d-48bf-9313-8b9e9a35f71d"),
                                "valorRecebido" : NumberDecimal("20")
                            }, 
                            {
                                "idRecebimento" : UUID("13d30f9a-3417-4c56-82a4-e77f9a66265f"),
                                "valorRecebido" : NumberDecimal("20")
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 12,
                "mesReferencia" : ISODate("2021-05-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("f0096f5b-20f6-4274-b708-eff02c4b4522"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("c4e22ff4-993e-4f52-a5f0-855f81e21e6f"),
                                "valorRecebido" : null
                            }, 
                            {
                                "idRecebimento" : UUID("95088f01-6513-4fdb-abbc-78592ca8ebbc"),
                                "valorRecebido" : null
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 5,
                "mesReferencia" : ISODate("2020-10-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("dd02ab04-bbb9-4414-9128-5da90a664da0"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("767a3e28-0928-44cb-9ad6-48d2d36c9b11"),
                                "valorRecebido" : NumberDecimal("90")
                            }
                        ]
                    }
                ]
            }, 
            {
                "numero" : 4,
                "mesReferencia" : ISODate("2020-09-01T03:00:00.000Z"),
                "cobrancas" : [ 
                    {
                        "idContaReceber" : UUID("66292957-e38e-4f90-838c-ea787c98f3dc"),
                        "tipoRecebimento" : "NotaDebito",
                        "recebimentos" : [ 
                            {
                                "idRecebimento" : UUID("85df9130-6ba8-4dc7-8ff1-403d26674ed5"),
                                "valorRecebido" : NumberDecimal("90")
                            }
                        ]
                    }
                ]
            }
        ],
        "metadata" : {
            "ativo" : true,
            "dataCriacao" : ISODate("2020-11-30T20:33:21.733Z"),
            "dataAtualizacao" : ISODate("2020-12-01T17:39:42.246Z"),
            "dataDelecao" : null
        }
    },{
        "_id" : ObjectId("5fc557119ab06f00015743e0"),
        "id" : UUID("67b18f2d-0966-44bc-9151-722af726776b"),
        "titular" : "Jean Christian Silva Casimiro",
        "documentoAssinante" : "24657333895",
        "documentoEmpresa" : "34008403000107",
        "emailAssinante" : "jcasimirobr@gmail.com",
        "dataAdesao" : ISODate("2020-07-24T16:03:42.705Z"),
        "dataVigencia" : ISODate("2021-07-24T16:35:46.082Z"),
        "dataCancelamento" : ISODate("2020-08-12T18:42:53.430Z"),
        "dataVigenciaPeriodoTrial" : ISODate("2020-07-31T00:00:00.000Z"),
        "periodo" : 1,
        "valorRealTotal" : NumberDecimal("4932"),
        "valorRealMensal" : NumberDecimal("411"),
        "valorNominalParcela" : NumberDecimal("321"),
        "valorCoparticipacaoEmpresa" : NumberDecimal("90"),
        "idPlano" : UUID("c9b53d9a-8461-4c1e-b9b6-b3d23d09211b"),
        "ehDescontoEmFolha" : false,
        "dataAtivacao" : ISODate("2020-12-07T13:36:00.071Z"),"parcelasPlano" : [],
        "metadata" : {
            "ativo" : false,
            "dataCriacao" : ISODate("2020-11-30T20:33:21.971Z"),
            "dataAtualizacao" : null,
            "dataDelecao" : null
        }
    },
{
    "_id" : ObjectId("5fcd6dbf64ef140001f1d4fc"),
    "id" : UUID("87a11de7-8e10-43db-b4de-cfd1fcca7567"),
    "titular" : "AZIZA PIMENTA KURC",
    "documentoAssinante" : "77270940215",
    "documentoEmpresa" : "04224173000144",
    "emailAssinante" : "Azizakurc@gmail.com",
    "dataAdesao" : ISODate("2020-02-20T23:26:50.452Z"),
    "dataAtivacao" : ISODate("2020-02-27T23:26:50.452Z"),
    "dataVigencia" : ISODate("2021-02-20T23:26:50.452Z"),
    "dataCancelamento" : null,
    "dataVigenciaPeriodoTrial" : ISODate("2020-02-27T23:26:50.452Z"),
    "periodo" : 1.0,
    "valorRealTotal" : NumberDecimal("3516"),
    "valorRealMensal" : NumberDecimal("293"),
    "valorNominalParcela" : NumberDecimal("293"),
    "valorCoparticipacaoEmpresa" : NumberDecimal("0"),
    "idPlano" : UUID("df3d6e2c-f124-4b56-b287-327cccb6bf84"),
    "ehDescontoEmFolha" : true,
    "parcelasPlano" : [ 
        {
            "numero" : 3,
            "mesReferencia" : ISODate("2020-04-01T03:00:00.000Z"),
            "cobrancas" : [ 
                {
                    "idContaReceber" : UUID("c90315d6-254f-4d24-b529-1de63e12d355"),
                    "tipoRecebimento" : "NotaDebito",
                    "recebimentos" : [ 
                        {
                            "idRecebimento" : UUID("4bb2d044-01e7-47cf-b911-ecd28ebbb1ad"),
                            "valorRecebido" : NumberDecimal("293")
                        }
                    ]
                }
            ]
        }, 
        {
            "numero" : 4,
            "mesReferencia" : ISODate("2020-05-01T03:00:00.000Z"),
            "cobrancas" : [ 
                {
                    "idContaReceber" : UUID("ea549fbb-a478-4d36-b942-3f58aa2c9760"),
                    "tipoRecebimento" : "NotaDebito",
                    "recebimentos" : [ 
                        {
                            "idRecebimento" : UUID("cae9e5a6-ecdd-4d92-9d9b-34cb759709e8"),
                            "valorRecebido" : NumberDecimal("293")
                        }
                    ]
                }
            ]
        }, 
        {
            "numero" : 5,
            "mesReferencia" : ISODate("2020-06-01T03:00:00.000Z"),
            "cobrancas" : [ 
                {
                    "idContaReceber" : UUID("809ab297-147c-4121-b3c5-d8623baa9072"),
                    "tipoRecebimento" : "NotaDebito",
                    "recebimentos" : [ 
                        {
                            "idRecebimento" : UUID("6bb8db5c-b111-459b-af77-88f619070f50"),
                            "valorRecebido" : NumberDecimal("293")
                        }
                    ]
                }
            ]
        }, 
        {
            "numero" : 6,
            "mesReferencia" : ISODate("2020-07-01T03:00:00.000Z"),
            "cobrancas" : [ 
                {
                    "idContaReceber" : UUID("14566bfe-31f6-4148-91bb-1b9ff6b42149"),
                    "tipoRecebimento" : "NotaDebito",
                    "recebimentos" : [ 
                        {
                            "idRecebimento" : UUID("e6d24e59-0b82-4dd3-a239-41a8b8998195"),
                            "valorRecebido" : NumberDecimal("293")
                        }
                    ]
                }
            ]
        }, 
        {
            "numero" : 7,
            "mesReferencia" : ISODate("2020-08-01T03:00:00.000Z"),
            "cobrancas" : [ 
                {
                    "idContaReceber" : UUID("ff5feebf-6856-431a-bc4d-99f9a2133386"),
                    "tipoRecebimento" : "NotaDebito",
                    "recebimentos" : [ 
                        {
                            "idRecebimento" : UUID("0c2a1b8c-d1a9-41b5-8edd-6c9b1dc82eaa"),
                            "valorRecebido" : NumberDecimal("293")
                        }
                    ]
                }
            ]
        }, 
        {
            "numero" : 8,
            "mesReferencia" : ISODate("2020-09-01T03:00:00.000Z"),
            "cobrancas" : [ 
                {
                    "idContaReceber" : UUID("6975492e-a2e5-4a5e-a1d8-39ad834305c3"),
                    "tipoRecebimento" : "NotaDebito",
                    "recebimentos" : [ 
                        {
                            "idRecebimento" : UUID("a66f763d-c3d5-43a1-b07d-ea9dd74c98d1"),
                            "valorRecebido" : NumberDecimal("293")
                        }
                    ]
                }
            ]
        }, 
        {
            "numero" : 9,
            "mesReferencia" : ISODate("2020-10-01T03:00:00.000Z"),
            "cobrancas" : [ 
                {
                    "idContaReceber" : UUID("406a93d7-711b-419a-abcd-62588744e78c"),
                    "tipoRecebimento" : "NotaDebito",
                    "recebimentos" : [ 
                        {
                            "idRecebimento" : UUID("db08a443-5417-4644-98f1-cff31982ccc8"),
                            "valorRecebido" : NumberDecimal("293")
                        }
                    ]
                }
            ]
        }, 
        {
            "numero" : 10,
            "mesReferencia" : ISODate("2020-11-01T03:00:00.000Z"),
            "cobrancas" : [ 
                {
                    "idContaReceber" : UUID("0aece89c-b727-4086-85c8-25fd8e44f41c"),
                    "tipoRecebimento" : "NotaDebito",
                    "recebimentos" : [ 
                        {
                            "idRecebimento" : UUID("3233ddde-2d52-4483-a633-3d225ef51ece"),
                            "valorRecebido" : NumberDecimal("293")
                        }
                    ]
                }
            ]
        }, 
        {
            "numero" : 1,
            "mesReferencia" : ISODate("2020-02-01T03:00:00.000Z"),
            "cobrancas" : [ 
                {
                    "idContaReceber" : UUID("13e96eb4-df56-49b0-a639-09772e3a2b33"),
                    "tipoRecebimento" : "NotaDebito",
                    "recebimentos" : [ 
                        {
                            "idRecebimento" : UUID("3274813d-4593-45f2-9bae-332fbacce0e5"),
                            "valorRecebido" : NumberDecimal("293")
                        }
                    ]
                }
            ]
        }, 
        {
            "numero" : 2,
            "mesReferencia" : ISODate("2020-03-01T03:00:00.000Z"),
            "cobrancas" : [ 
                {
                    "idContaReceber" : UUID("e2e9d960-ba4c-4ab7-97c7-cbd69f94eb76"),
                    "tipoRecebimento" : "NotaDebito",
                    "recebimentos" : [ 
                        {
                            "idRecebimento" : UUID("f4773711-a74f-4ed8-93ca-57fc96713e22"),
                            "valorRecebido" : NumberDecimal("293")
                        }
                    ]
                }
            ]
        }, 
        {
            "numero" : 11,
            "mesReferencia" : ISODate("2020-12-01T03:00:00.000Z"),
            "cobrancas" : [ 
                {
                    "idContaReceber" : UUID("cc30c6b8-3489-4a3a-a54d-9479e4a1eb9c"),
                    "tipoRecebimento" : "NotaDebito",
                    "recebimentos" : [ 
                        {
                            "idRecebimento" : UUID("23f3934b-6ae0-4329-9702-3a62174170e2"),
                            "valorRecebido" : NumberDecimal("293")
                        }
                    ]
                }
            ]
        }, 
        {
            "numero" : 12,
            "mesReferencia" : ISODate("2021-01-01T03:00:00.000Z"),
            "cobrancas" : [ 
                {
                    "idContaReceber" : UUID("3d63ffa2-ac6d-49e5-bc2b-aedff793b503"),
                    "tipoRecebimento" : "NotaDebito",
                    "recebimentos" : [ 
                        {
                            "idRecebimento" : UUID("62b472d9-2dfc-4dba-9157-d84bce7051ba"),
                            "valorRecebido" : NumberDecimal("293")
                        }
                    ]
                }
            ]
        }
    ],
    "metadata" : {
        "ativo" : true,
        "dataCriacao" : ISODate("2020-12-06T23:48:15.930Z"),
        "dataAtualizacao" : ISODate("2021-03-29T18:33:08.620Z"),
        "dataDelecao" : null
    }
},
{
    "_id" : ObjectId("603e1e0ffeb801cfd4dc10f3"),
    "id" : UUID("400e8f11-c40e-417c-ac96-a4dc2e76afac"),
    "titular" : "AZIZA PIMENTA KURC",
    "documentoAssinante" : "77270940215",
    "documentoEmpresa" : "04224173000144",
    "emailAssinante" : "Azizakurc@gmail.com",
    "dataAdesao" : ISODate("2021-02-21T23:26:50.452Z"),
    "dataAtivacao" : ISODate("2021-02-21T23:26:50.452Z"),
    "dataVigencia" : ISODate("2022-02-20T23:26:50.452Z"),
    "dataCancelamento" : null,
    "dataVigenciaPeriodoTrial" : ISODate("2021-02-21T23:26:50.452Z"),
    "periodo" : 2,
    "valorRealTotal" : NumberDecimal("3516"),
    "valorRealMensal" : NumberDecimal("293"),
    "valorNominalParcela" : NumberDecimal("293"),
    "valorCoparticipacaoEmpresa" : NumberDecimal("0"),
    "idPlano" : UUID("df3d6e2c-f124-4b56-b287-327cccb6bf84"),
    "ehDescontoEmFolha" : true,
    "parcelasPlano" : [ 
        {
            "numero" : 1,
            "mesReferencia" : ISODate("2021-02-01T03:00:00.000Z"),
            "cobrancas" : [ 
                {
                    "idContaReceber" : UUID("3e0aaf80-310c-411f-a560-f5e95cab10e5"),
                    "tipoRecebimento" : "NotaDebito",
                    "recebimentos" : [ 
                        {
                            "idRecebimento" : UUID("cace0319-b742-4ed4-bce6-9ae26cbcf077"),
                            "valorRecebido" : NumberDecimal("293")
                        }
                    ]
                }
            ]
        }, 
        {
            "numero" : 2,
            "mesReferencia" : ISODate("2021-03-01T03:00:00.000Z"),
            "cobrancas" : [ 
                {
                    "idContaReceber" : UUID("fa35b146-b9e9-4cf9-a449-f30fe7670118"),
                    "tipoRecebimento" : "NotaDebito",
                    "recebimentos" : [ 
                        {
                            "idRecebimento" : UUID("76e7f223-ee65-4780-9971-df5f42bae708"),
                            "valorRecebido" : null
                        }
                    ]
                }
            ]
        }
    ],
    "metadata" : {
        "ativo" : true,
        "dataCriacao" : ISODate("2021-03-02T11:14:23.028Z"),
        "dataAtualizacao" : ISODate("2021-04-09T18:26:49.148Z"),
        "dataDelecao" : null
    }
},
{
    "_id" : ObjectId("6002115e6bc85f00017d4d61"),
    "id" : UUID("1d3af393-dbce-4c61-a9b8-3d776d1ab734"),
    "titular" : "Rodrigo Esposito Velloso Borges",
    "documentoAssinante" : "29436679866",
    "documentoEmpresa" : "66939570000150",
    "emailAssinante" : "rodrigo.velloso@rdcviagens.com.br",
    "dataAdesao" : ISODate("2021-01-15T22:02:18.210Z"),
    "dataAtivacao" : ISODate("2021-01-23T03:00:31.460Z"),
    "dataVigencia" : ISODate("2022-01-23T03:00:31.460Z"),
    "dataCancelamento" : null,
    "dataVigenciaPeriodoTrial" : ISODate("2021-01-22T22:04:14.581Z"),
    "periodo" : 1,
    "valorRealTotal" : NumberDecimal("4932"),
    "valorRealMensal" : NumberDecimal("411"),
    "valorNominalParcela" : NumberDecimal("321"),
    "valorCoparticipacaoEmpresa" : NumberDecimal("90"),
    "idPlano" : UUID("c9b53d9a-8461-4c1e-b9b6-b3d23d09211b"),
    "ehDescontoEmFolha" : false,
    "parcelasPlano" : [ 
        {
            "numero" : 1,
            "mesReferencia" : ISODate("2021-01-01T03:00:00.000Z"),
            "cobrancas" : [ 
                {
                    "idContaReceber" : UUID("59c8e1cf-7ff4-4742-b305-5e8ef23558d8"),
                    "tipoRecebimento" : "CartaoRecorrencia",
                    "recebimentos" : [ 
                        {
                            "idRecebimento" : UUID("1d532c0b-dc4f-42b2-8806-f395d1baaf54"),
                            "valorRecebido" : NumberDecimal("321")
                        }
                    ]
                }, 
                {
                    "idContaReceber" : UUID("0078b87f-2a4e-404b-a194-41897355c18d"),
                    "tipoRecebimento" : "NotaDebito",
                    "recebimentos" : [ 
                        {
                            "idRecebimento" : UUID("94210c7b-5260-4c66-9a45-f6449ddd1d1e"),
                            "valorRecebido" : NumberDecimal("90")
                        }
                    ]
                }
            ]
        }, 
        {
            "numero" : 2,
            "mesReferencia" : ISODate("2021-02-01T03:00:00.000Z"),
            "cobrancas" : [ 
                {
                    "idContaReceber" : UUID("891d452f-78b3-4345-baaf-d4a2d721523d"),
                    "tipoRecebimento" : "NotaDebito",
                    "recebimentos" : [ 
                        {
                            "idRecebimento" : UUID("74160bb9-2d94-4bbf-8009-3e64f7b51a64"),
                            "valorRecebido" : NumberDecimal("90")
                        }
                    ]
                }
            ]
        }, 
        {
            "numero" : 2,
            "mesReferencia" : ISODate("2021-02-01T03:00:00.000Z"),
            "cobrancas" : [ 
                {
                    "idContaReceber" : UUID("59c8e1cf-7ff4-4742-b305-5e8ef23558d8"),
                    "tipoRecebimento" : "CartaoRecorrencia",
                    "recebimentos" : [ 
                        {
                            "idRecebimento" : UUID("33b800f8-95f8-4ada-aefa-764d95b387b9"),
                            "valorRecebido" : NumberDecimal("321")
                        }
                    ]
                }
            ]
        }, 
        {
            "numero" : 3,
            "mesReferencia" : ISODate("2021-03-01T03:00:00.000Z"),
            "cobrancas" : [ 
                {
                    "idContaReceber" : UUID("59c8e1cf-7ff4-4742-b305-5e8ef23558d8"),
                    "tipoRecebimento" : "CartaoRecorrencia",
                    "recebimentos" : [ 
                        {
                            "idRecebimento" : UUID("d7fb8076-e841-45d4-a8a0-37e4009cf2b7"),
                            "valorRecebido" : null
                        }
                    ]
                }, 
                {
                    "idContaReceber" : UUID("183900a5-cef8-4a1f-9891-4cb5983e03a9"),
                    "tipoRecebimento" : "NotaDebito",
                    "recebimentos" : [ 
                        {
                            "idRecebimento" : UUID("6ff68355-416b-464b-9daa-aaedac327a2d"),
                            "valorRecebido" : null
                        }
                    ]
                }
            ]
        }
    ],
    "metadata" : {
        "ativo" : true,
        "dataCriacao" : ISODate("2021-01-15T22:04:14.685Z"),
        "dataAtualizacao" : ISODate("2021-04-08T12:00:29.200Z"),
        "dataDelecao" : null
    }
},
{
    "_id" : ObjectId("5fd41591be9a000001789f03"),
    "id" : UUID("6e46fcfb-cd04-42a2-b481-5f958282ca92"),
    "titular" : "GUILHERME ALMEIDA ZENI",
    "documentoAssinante" : "38065944817",
    "documentoEmpresa" : "00609634000146",
    "emailAssinante" : "gzeni@ciandt.com",
    "dataAdesao" : ISODate("2020-12-12T00:57:06.874Z"),
    "dataAtivacao" : ISODate("2020-12-20T00:00:02.461Z"),
    "dataVigencia" : ISODate("2021-12-20T00:00:02.461Z"),
    "dataCancelamento" : null,
    "dataVigenciaPeriodoTrial" : ISODate("2020-12-19T00:57:53.195Z"),
    "periodo" : 1,
    "valorRealTotal" : NumberDecimal("1968"),
    "valorRealMensal" : NumberDecimal("164"),
    "valorNominalParcela" : NumberDecimal("164"),
    "valorCoparticipacaoEmpresa" : NumberDecimal("0"),
    "idPlano" : UUID("13dd8ce0-8e66-40ba-82e7-75c0b0f74cb8"),
    "ehDescontoEmFolha" : false,
    "parcelasPlano" : [ 
        {
            "numero" : 1,
            "mesReferencia" : ISODate("2020-12-01T03:00:00.000Z"),
            "cobrancas" : [ 
                {
                    "idContaReceber" : UUID("233464d4-4555-48ff-9eb7-0303e2ff6406"),
                    "tipoRecebimento" : "CartaoRecorrencia",
                    "recebimentos" : [ 
                        {
                            "idRecebimento" : UUID("388c4b5c-3e08-4736-8938-ffc2360dc265"),
                            "valorRecebido" : NumberDecimal("164.0")
                        }
                    ]
                }
            ]
        }, 
        {
            "numero" : 2,
            "mesReferencia" : ISODate("2021-01-01T03:00:00.000Z"),
            "cobrancas" : [ 
                {
                    "idContaReceber" : UUID("233464d4-4555-48ff-9eb7-0303e2ff6406"),
                    "tipoRecebimento" : "CartaoRecorrencia",
                    "recebimentos" : [ 
                        {
                            "idRecebimento" : UUID("072a47a9-75cf-4d97-84cd-89e12f581358"),
                            "valorRecebido" : NumberDecimal("164.0")
                        }
                    ]
                }
            ]
        }, 
        {
            "numero" : 4,
            "mesReferencia" : ISODate("2021-03-01T03:00:00.000Z"),
            "cobrancas" : [ 
                {
                    "idContaReceber" : UUID("233464d4-4555-48ff-9eb7-0303e2ff6406"),
                    "tipoRecebimento" : "CartaoRecorrencia",
                    "recebimentos" : [ 
                        {
                            "idRecebimento" : UUID("9fa3eb34-9b8b-4d09-83b6-156f944505a7"),
                            "valorRecebido" : null
                        }
                    ]
                }
            ]
        }, 
        {
            "numero" : 3,
            "mesReferencia" : ISODate("2021-02-01T03:00:00.000Z"),
            "cobrancas" : [ 
                {
                    "idContaReceber" : UUID("233464d4-4555-48ff-9eb7-0303e2ff6406"),
                    "tipoRecebimento" : "CartaoRecorrencia",
                    "recebimentos" : [ 
                        {
                            "idRecebimento" : UUID("e32a347b-4c54-4518-95f5-b2897ab1f533"),
                            "valorRecebido" : NumberDecimal("164")
                        }
                    ]
                }
            ]
        }, 
        {
            "numero" : 5,
            "mesReferencia" : ISODate("2021-04-01T03:00:00.000Z"),
            "cobrancas" : [ 
                {
                    "idContaReceber" : UUID("233464d4-4555-48ff-9eb7-0303e2ff6406"),
                    "tipoRecebimento" : "CartaoRecorrencia",
                    "recebimentos" : [ 
                        {
                            "idRecebimento" : UUID("30c4c161-850d-437a-bdf9-f88352ceae53"),
                            "valorRecebido" : null
                        }
                    ]
                }
            ]
        }
    ],
    "metadata" : {
        "ativo" : true,
        "dataCriacao" : ISODate("2020-12-12T00:57:53.302Z"),
        "dataAtualizacao" : ISODate("2021-04-19T12:49:10.601Z"),
        "dataDelecao" : null
    }
},
{
    "_id" : ObjectId("5fcd6dbf64ef140001f1d4d9"),
    "id" : UUID("5d8868e1-06f6-4028-bdf6-f13593637f2b"),
    "titular" : "BRENO MUNIZ SILVA",
    "documentoAssinante" : "15798532771",
    "documentoEmpresa" : "04532167000154",
    "emailAssinante" : "brenomuniz9415@gmail.com",
    "dataAdesao" : ISODate("2020-01-14T11:48:38.175Z"),
    "dataAtivacao" : ISODate("2020-01-21T11:48:38.175Z"),
    "dataVigencia" : ISODate("2021-01-21T11:48:38.175Z"),
    "dataCancelamento" : null,
    "dataVigenciaPeriodoTrial" : ISODate("2020-01-21T11:48:38.175Z"),
    "periodo" : 1.0,
    "valorRealTotal" : NumberDecimal("2460"),
    "valorRealMensal" : NumberDecimal("205"),
    "valorNominalParcela" : NumberDecimal("205"),
    "valorCoparticipacaoEmpresa" : NumberDecimal("60"),
    "idPlano" : UUID("30bb9449-b489-4416-9659-b8de544c10e9"),
    "ehDescontoEmFolha" : true,
    "parcelasPlano" : [ 
        {
            "numero" : 4,
            "mesReferencia" : ISODate("2020-04-01T03:00:00.000Z"),
            "cobrancas" : [ 
                {
                    "idContaReceber" : UUID("942594e2-28c8-4a22-acbe-198421e397fc"),
                    "tipoRecebimento" : "NotaDebito",
                    "recebimentos" : [ 
                        {
                            "idRecebimento" : UUID("69e9248a-e05b-4ea5-b897-a75396b200ab"),
                            "valorRecebido" : NumberDecimal("145")
                        }, 
                        {
                            "idRecebimento" : UUID("b0ab1709-3d06-4c0d-8e90-aec834e53e45"),
                            "valorRecebido" : NumberDecimal("60")
                        }
                    ]
                }
            ]
        }, 
        {
            "numero" : 5,
            "mesReferencia" : ISODate("2020-05-01T03:00:00.000Z"),
            "cobrancas" : [ 
                {
                    "idContaReceber" : UUID("d4356d9b-3a3f-4ff8-86d2-7ad9a4b0248c"),
                    "tipoRecebimento" : "NotaDebito",
                    "recebimentos" : [ 
                        {
                            "idRecebimento" : UUID("835e700c-c050-44a3-b733-488773289a27"),
                            "valorRecebido" : NumberDecimal("145")
                        }, 
                        {
                            "idRecebimento" : UUID("e2454e02-e75d-4d4a-b284-a577be202137"),
                            "valorRecebido" : NumberDecimal("60")
                        }
                    ]
                }
            ]
        }, 
        {
            "numero" : 6,
            "mesReferencia" : ISODate("2020-06-01T03:00:00.000Z"),
            "cobrancas" : [ 
                {
                    "idContaReceber" : UUID("5f244d7f-77f6-486e-991a-14c617c9251a"),
                    "tipoRecebimento" : "NotaDebito",
                    "recebimentos" : [ 
                        {
                            "idRecebimento" : UUID("7aeb5d2e-9550-40a2-9d8f-2ebad2c31666"),
                            "valorRecebido" : NumberDecimal("1310.0")
                        }, 
                        {
                            "idRecebimento" : UUID("7b220af2-cd10-4e30-a663-67bd54011ced"),
                            "valorRecebido" : NumberDecimal("1310.0")
                        }
                    ]
                }
            ]
        }, 
        {
            "numero" : 7,
            "mesReferencia" : ISODate("2020-07-01T03:00:00.000Z"),
            "cobrancas" : [ 
                {
                    "idContaReceber" : UUID("4b51e77c-f61c-4313-bf87-3d0b42504a43"),
                    "tipoRecebimento" : "NotaDebito",
                    "recebimentos" : [ 
                        {
                            "idRecebimento" : UUID("6846cd8a-8772-4dc5-9526-be0a894303d2"),
                            "valorRecebido" : NumberDecimal("145")
                        }, 
                        {
                            "idRecebimento" : UUID("bedd8149-94d5-428f-91a2-059278813855"),
                            "valorRecebido" : NumberDecimal("60")
                        }
                    ]
                }
            ]
        }, 
        {
            "numero" : 8,
            "mesReferencia" : ISODate("2020-08-01T03:00:00.000Z"),
            "cobrancas" : [ 
                {
                    "idContaReceber" : UUID("3d82b5c5-8c94-4e07-a9a7-a6e790320ac2"),
                    "tipoRecebimento" : "NotaDebito",
                    "recebimentos" : [ 
                        {
                            "idRecebimento" : UUID("90a9b769-509d-472a-9c2a-c3854bdedb6f"),
                            "valorRecebido" : NumberDecimal("205")
                        }
                    ]
                }
            ]
        }, 
        {
            "numero" : 9,
            "mesReferencia" : ISODate("2020-09-01T03:00:00.000Z"),
            "cobrancas" : [ 
                {
                    "idContaReceber" : UUID("6f89e255-dfdf-4ff0-800b-e51d16c54912"),
                    "tipoRecebimento" : "NotaDebito",
                    "recebimentos" : [ 
                        {
                            "idRecebimento" : UUID("9a1c2dd1-c8fd-4d4a-8243-02732cb908d8"),
                            "valorRecebido" : NumberDecimal("205")
                        }
                    ]
                }
            ]
        }, 
        {
            "numero" : 10,
            "mesReferencia" : ISODate("2020-10-01T03:00:00.000Z"),
            "cobrancas" : [ 
                {
                    "idContaReceber" : UUID("25894546-477d-4e87-adde-8def714f97d0"),
                    "tipoRecebimento" : "NotaDebito",
                    "recebimentos" : [ 
                        {
                            "idRecebimento" : UUID("dac37025-4561-4028-bb18-12e7eeb867d2"),
                            "valorRecebido" : NumberDecimal("205")
                        }
                    ]
                }
            ]
        }, 
        {
            "numero" : 11,
            "mesReferencia" : ISODate("2020-11-01T03:00:00.000Z"),
            "cobrancas" : [ 
                {
                    "idContaReceber" : UUID("6f0e423d-9582-4e77-9075-caa63a5d75d2"),
                    "tipoRecebimento" : "NotaDebito",
                    "recebimentos" : [ 
                        {
                            "idRecebimento" : UUID("14eee523-62ad-4fc3-8187-33b16b4653a8"),
                            "valorRecebido" : NumberDecimal("205")
                        }
                    ]
                }
            ]
        }, 
        {
            "numero" : 1,
            "mesReferencia" : ISODate("2020-01-01T03:00:00.000Z"),
            "cobrancas" : [ 
                {
                    "idContaReceber" : UUID("072c3516-35bd-46a7-b692-65f401f8d20a"),
                    "tipoRecebimento" : "NotaDebito",
                    "recebimentos" : [ 
                        {
                            "idRecebimento" : UUID("3628f82d-8088-4f24-b906-f786dff8e4f4"),
                            "valorRecebido" : NumberDecimal("205")
                        }
                    ]
                }
            ]
        }, 
        {
            "numero" : 2,
            "mesReferencia" : ISODate("2020-02-01T03:00:00.000Z"),
            "cobrancas" : [ 
                {
                    "idContaReceber" : UUID("856088bd-1c8f-4b28-b928-6ae0ebc0704e"),
                    "tipoRecebimento" : "NotaDebito",
                    "recebimentos" : [ 
                        {
                            "idRecebimento" : UUID("6bbb7cad-2230-482c-87b3-216f17580a3b"),
                            "valorRecebido" : NumberDecimal("205")
                        }
                    ]
                }
            ]
        }, 
        {
            "numero" : 3,
            "mesReferencia" : ISODate("2020-03-01T03:00:00.000Z"),
            "cobrancas" : [ 
                {
                    "idContaReceber" : UUID("b1670a03-2380-4ccc-8b92-b83c9a075739"),
                    "tipoRecebimento" : "NotaDebito",
                    "recebimentos" : [ 
                        {
                            "idRecebimento" : UUID("7727dfb1-2384-4953-a594-8da6d96de164"),
                            "valorRecebido" : NumberDecimal("205")
                        }
                    ]
                }
            ]
        }, 
        {
            "numero" : 12,
            "mesReferencia" : ISODate("2020-12-01T03:00:00.000Z"),
            "cobrancas" : [ 
                {
                    "idContaReceber" : UUID("82d6df47-d679-4c28-b166-23fb72d11560"),
                    "tipoRecebimento" : "NotaDebito",
                    "recebimentos" : [ 
                        {
                            "idRecebimento" : UUID("a8303a7f-4f66-471b-8c5b-edd2e7340e1f"),
                            "valorRecebido" : NumberDecimal("205")
                        }
                    ]
                }
            ]
        }
    ],
    "metadata" : {
        "ativo" : true,
        "dataCriacao" : ISODate("2020-12-06T23:48:15.872Z"),
        "dataAtualizacao" : ISODate("2021-03-29T18:58:09.091Z"),
        "dataDelecao" : null
    }
},
{
    "_id" : ObjectId("5fcd6dbf64ef140001f1d51c"),
    "id" : UUID("2d6be38d-a96e-4982-a72a-37e19e828005"),
    "titular" : "ELIDA RAFAELLY SANTOS LOBATO",
    "documentoAssinante" : "41129364860",
    "documentoEmpresa" : "65082455000149",
    "emailAssinante" : "LOBATO.ELIDA@GMAIL.COM",
    "dataAdesao" : ISODate("2020-07-08T13:03:34.029Z"),
    "dataAtivacao" : ISODate("2020-07-15T13:03:34.029Z"),
    "dataVigencia" : ISODate("2021-07-08T13:03:34.029Z"),
    "dataCancelamento" : null,
    "dataVigenciaPeriodoTrial" : ISODate("2020-07-15T13:03:34.029Z"),
    "periodo" : 1.0,
    "valorRealTotal" : NumberDecimal("2460"),
    "valorRealMensal" : NumberDecimal("205"),
    "valorNominalParcela" : NumberDecimal("205"),
    "valorCoparticipacaoEmpresa" : NumberDecimal("90"),
    "idPlano" : UUID("30bb9449-b489-4416-9659-b8de544c10e9"),
    "ehDescontoEmFolha" : true,
    "parcelasPlano" : [ 
        {
            "numero" : 1,
            "mesReferencia" : ISODate("2020-07-01T03:00:00.000Z"),
            "cobrancas" : [ 
                {
                    "idContaReceber" : UUID("37b42782-9a25-4a42-a9c3-bc9b733949ec"),
                    "tipoRecebimento" : "NotaDebito",
                    "recebimentos" : [ 
                        {
                            "idRecebimento" : UUID("d1c3ba22-33dc-4a8b-b8f3-5453454cfb6b"),
                            "valorRecebido" : NumberDecimal("205")
                        }
                    ]
                }
            ]
        }, 
        {
            "numero" : 2,
            "mesReferencia" : ISODate("2020-08-01T03:00:00.000Z"),
            "cobrancas" : [ 
                {
                    "idContaReceber" : UUID("049d9d51-a891-4730-9c7d-ae27031036b9"),
                    "tipoRecebimento" : "NotaDebito",
                    "recebimentos" : [ 
                        {
                            "idRecebimento" : UUID("d4d8125b-1384-4277-84b6-8566b7769194"),
                            "valorRecebido" : NumberDecimal("205")
                        }
                    ]
                }
            ]
        }, 
        {
            "numero" : 3,
            "mesReferencia" : ISODate("2020-09-01T03:00:00.000Z"),
            "cobrancas" : [ 
                {
                    "idContaReceber" : UUID("8fc8e4d9-25d3-4fd6-96d1-7567a8d85485"),
                    "tipoRecebimento" : "NotaDebito",
                    "recebimentos" : [ 
                        {
                            "idRecebimento" : UUID("5b20664f-9d63-43ad-94a7-836b3a841ac9"),
                            "valorRecebido" : NumberDecimal("205")
                        }
                    ]
                }
            ]
        }, 
        {
            "numero" : 4,
            "mesReferencia" : ISODate("2020-10-01T03:00:00.000Z"),
            "cobrancas" : [ 
                {
                    "idContaReceber" : UUID("28f6be8b-12be-4911-88ea-98e9c732b3b2"),
                    "tipoRecebimento" : "NotaDebito",
                    "recebimentos" : [ 
                        {
                            "idRecebimento" : UUID("ff19f8c0-5910-4d6e-9435-d80282767ce7"),
                            "valorRecebido" : NumberDecimal("205")
                        }
                    ]
                }
            ]
        }, 
        {
            "numero" : 5,
            "mesReferencia" : ISODate("2020-11-01T03:00:00.000Z"),
            "cobrancas" : [ 
                {
                    "idContaReceber" : UUID("294e509b-9bdd-447e-a056-87589bff8904"),
                    "tipoRecebimento" : "NotaDebito",
                    "recebimentos" : [ 
                        {
                            "idRecebimento" : UUID("b73a9700-07d6-46bb-b61b-8bf7148f89f7"),
                            "valorRecebido" : NumberDecimal("205")
                        }
                    ]
                }
            ]
        }, 
        {
            "numero" : 6,
            "mesReferencia" : ISODate("2020-12-01T03:00:00.000Z"),
            "cobrancas" : [ 
                {
                    "idContaReceber" : UUID("9d50b71a-dae7-463b-92bb-a86d8bd3a32c"),
                    "tipoRecebimento" : "NotaDebito",
                    "recebimentos" : [ 
                        {
                            "idRecebimento" : UUID("c0cfc635-a8d9-46f6-b9ae-18923e957d77"),
                            "valorRecebido" : NumberDecimal("205")
                        }
                    ]
                }
            ]
        }, 
        {
            "numero" : 7,
            "mesReferencia" : ISODate("2021-01-01T03:00:00.000Z"),
            "cobrancas" : [ 
                {
                    "idContaReceber" : UUID("a4575a58-a0f1-4284-9e3c-340e028752c2"),
                    "tipoRecebimento" : "NotaDebito",
                    "recebimentos" : [ 
                        {
                            "idRecebimento" : UUID("b0b760ae-2c27-40fd-b339-77bf9b505638"),
                            "valorRecebido" : NumberDecimal("205")
                        }
                    ]
                }
            ]
        }, 
        {
            "numero" : 8,
            "mesReferencia" : ISODate("2021-02-01T03:00:00.000Z"),
            "cobrancas" : [ 
                {
                    "idContaReceber" : UUID("ef932b24-7a66-4bf9-8abb-4810327ca0ed"),
                    "tipoRecebimento" : "NotaDebito",
                    "recebimentos" : [ 
                        {
                            "idRecebimento" : UUID("6211e2bd-3fbb-45ba-836f-fe8ee077a86c"),
                            "valorRecebido" : null
                        }
                    ]
                }
            ]
        }, 
        {
            "numero" : 9,
            "mesReferencia" : ISODate("2021-03-01T03:00:00.000Z"),
            "cobrancas" : [ 
                {
                    "idContaReceber" : UUID("128fb05e-194f-4c7f-9d16-076b25c77c4b"),
                    "tipoRecebimento" : "NotaDebito",
                    "recebimentos" : [ 
                        {
                            "idRecebimento" : UUID("9a190b30-99c7-4da4-90e7-e983503919d9"),
                            "valorRecebido" : null
                        }
                    ]
                }
            ]
        }
    ],
    "metadata" : {
        "ativo" : true,
        "dataCriacao" : ISODate("2020-12-06T23:48:15.970Z"),
        "dataAtualizacao" : ISODate("2021-04-01T13:43:45.909Z"),
        "dataDelecao" : null
    }
}
])
