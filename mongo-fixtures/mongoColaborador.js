/* eslint-disable */
db.getSiblingDB('colaborador').getCollection('colaboradores').insert([
    {
        "_id": ObjectId("5de1a46c20b0ae0001fde6c6"),
        "id": "22301591867",
        "nome": "Camilo Teixeira de Melo",
        "dataNascimento": ISODate("1981-11-12T00:00:00Z"),
        "cpf": "22301591867",
        "celular": "11922442244",
        "emailPessoal": null,
        "empresas": [
            {
                "_id": "34008403000107",
                "nomeFantasia": null,
                "razaoSocial": null,
                "segmento": null,
                "empresaProprietariaId": "34008403000107",
                "site": null,
                "tipo": null,
                "coparticipacao": "90",
                "ativo": true,
                "centroCusto": "Recursos Humanos",
                "grupoOrganizacional": null,
                "cnpj": "34008403000107",
                "colaboradorRh": {
                    "telefone": "3341597218",
                    "ramal": "799",
                    "emailCorporativo": "leandro.santos@ferias.co",
                    "matricula": "00000000001",
                    "descontoFolha": true,
                    "cargo": "Head de TI",
                    "area": "Tecnologia",
                    "departamento": "TI",
                    "coparticipacao": null
                },
                "dataCriacao": ISODate("2019-11-29T23:06:20.774Z"),
                "dataAtualizacao": null,
                "dataDelecao": null
            }
        ],
        "planos": [
            {
                "_id": UUID("0882d661-bcf4-4353-9cba-8df606441f20"),
                "empresaId": "34008403000107",
                "titulo": "Padrão 14 Diárias",
                "tipoPlano": "Padrão",
                "valorPlano": "317",
                "diariasTotais": 14,
                "diariasDisponiveis": 14,
                "valorDiariaMinima": "0.01",
                "valorDiariaMaxima": "216",
                "vigencia": ISODate("2021-11-30T00:20:10.203Z"),
                "ativo": true,
                "dataAdesao": ISODate("2019-11-30T00:20:10.203Z"),
                "status": "Ativo",
                "billing": null,
                "fingerprint": {
                    "timestamp": ISODate("2019-11-30T00:20:10.220Z"),
                    "servidor": "172.17.0.6",
                    "geolocalizacao": "51.165691;10.451526",
                    "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.120 Safari/537.36",
                    "ip": "91.213.103.0",
                    "termoUso": "Aqui esta o termo xpto",
                    "termoDesconto": "Aqui esta o termo de desconto xpto"
                }
            }
        ],
        "dataCriacao": ISODate("2019-11-29T23:06:20.774Z"),
        "dataAtualizacao": ISODate("2020-05-12T20:44:47.990Z"),
        "dataDelecao": null,
        "endereco": null,
        "aceitaContatoWhatsapp": false,
        "carteira": {
            "pontos": {
                "saldo": NumberDecimal("0"),
                "quantidadePendente": NumberDecimal("0"),
                "pontosAcumulados": [],
                "historicoTransacaoPontos": []
            },
            "diarias": {
                "historicoTransacaoDiarias": []
            }
        }
    },
    {
        "_id": ObjectId("5de1a46e20b0ae0001fde6c7"),
        "id": "54005010016",
        "nome": "Leandro Santos",
        "dataNascimento": ISODate("1981-11-12T00:00:00Z"),
        "cpf": "54005010016",
        "celular": "11922442244",
        "emailPessoal": null,
        "empresas": [
            {
                "_id": "15696589000181",
                "nomeFantasia": null,
                "razaoSocial": null,
                "segmento": null,
                "empresaProprietariaId": "10782454000204",
                "site": null,
                "tipo": null,
                "coparticipacao": "90",
                "ativo": true,
                "centroCusto": "Recursos Humanos",
                "grupoOrganizacional": null,
                "cnpj": "15696589000181",
                "colaboradorRh": {
                    "telefone": "3341597218",
                    "ramal": "799",
                    "emailCorporativo": "leandro.santos@ferias.co",
                    "matricula": "00000000001",
                    "descontoFolha": true,
                    "cargo": "Head de TI",
                    "area": "Tecnologia",
                    "departamento": "TI",
                    "coparticipacao": null
                },
                "dataCriacao": ISODate("2019-11-29T23:06:22.496Z"),
                "dataAtualizacao": null,
                "dataDelecao": null
            }
        ],
        "planos": [
            {
                "_id": UUID("0882d661-bcf4-4353-9cba-8df606441f20"),
                "empresaId": "15696589000181",
                "titulo": "Padrão 14 Diárias",
                "tipoPlano": "Padrão",
                "valorPlano": "317",
                "diariasTotais": 14,
                "diariasDisponiveis": 14,
                "valorDiariaMinima": "0.01",
                "valorDiariaMaxima": "216",
                "vigencia": ISODate("2021-11-30T00:20:13.825Z"),
                "ativo": true,
                "dataAdesao": ISODate("2019-11-30T00:20:13.825Z"),
                "status": "Ativo",
                "billing": null,
                "fingerprint": {
                    "timestamp": ISODate("2019-11-30T00:20:13.847Z"),
                    "servidor": "172.17.0.6",
                    "geolocalizacao": "51.165691;10.451526",
                    "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.120 Safari/537.36",
                    "ip": "91.213.103.0",
                    "termoUso": "Aqui esta o termo xpto",
                    "termoDesconto": "Aqui esta o termo de desconto xpto"
                }
            }
        ],
        "dataCriacao": ISODate("2019-11-29T23:06:22.496Z"),
        "dataAtualizacao": ISODate("2020-05-12T19:48:16.013Z"),
        "dataDelecao": null,
        "endereco": null,
        "aceitaContatoWhatsapp": false,
        "carteira": {
            "pontos": {
                "saldo": NumberDecimal("0"),
                "quantidadePendente": NumberDecimal("0"),
                "pontosAcumulados": [],
                "historicoTransacaoPontos": []
            },
            "diarias": {
                "historicoTransacaoDiarias": []
            }
        }
    },
    {
        "_id" : ObjectId("5de1a46e20b0ae0001fde6c8"),
        "id" : "64949575015",
        "nome" : "Danilo Souza",
        "dataNascimento" : ISODate("1981-11-12T00:00:00.000Z"),
        "cpf" : "64949575015",
        "celular" : "11922442244",
        "emailPessoal" : "thalita.galvao@ferias.co",
        "empresas" : [ 
            {
                "_id" : "34008403000107",
                "nomeFantasia" : null,
                "razaoSocial" : null,
                "segmento" : null,
                "empresaProprietariaId" : "34008403000107",
                "site" : null,
                "tipo" : null,
                "coparticipacao" : NumberDecimal("90"),
                "ativo" : true,
                "centroCusto" : "Recursos Humanos",
                "grupoOrganizacional" : null,
                "cnpj" : "34008403000107",
                "colaboradorRh" : {
                    "telefone" : "3341597218",
                    "ramal" : "799",
                    "emailCorporativo" : "leandro.santos@ferias.co",
                    "matricula" : "00000000001",
                    "descontoFolha" : true,
                    "cargo" : "Head de TI",
                    "area" : "Tecnologia",
                    "departamento" : "TI",
                    "coparticipacao" : null
                },
                "dataCriacao" : ISODate("2019-11-29T23:06:22.496Z"),
                "dataAtualizacao" : null,
                "dataDelecao" : null
            }
        ],
        "planos" : [ 
            {
                "_id" : UUID("0882d661-bcf4-4353-9cba-8df606441f20"),
                "empresaId" : "15696589000181",
                "titulo" : "Padrão 14 Diárias",
                "tipoPlano" : "Padrão",
                "valorPlano" : "317",
                "diariasTotais" : 14,
                "diariasDisponiveis" : 13,
                "valorDiariaMinima" : "0.01",
                "valorDiariaMaxima" : "2160",
                "vigencia" : ISODate("2021-11-30T00:20:13.825Z"),
                "ativo" : true,
                "dataAdesao" : ISODate("2019-11-30T00:20:13.825Z"),
                "status" : "Ativo",
                "billing" : null,
                "fingerprint" : {
                    "timestamp" : ISODate("2019-11-30T00:20:13.847Z"),
                    "servidor" : "172.17.0.6",
                    "geolocalizacao" : "51.165691;10.451526",
                    "userAgent" : "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.120 Safari/537.36",
                    "ip" : "91.213.103.0",
                    "termoUso" : "Aqui esta o termo xpto",
                    "termoDesconto" : "Aqui esta o termo de desconto xpto"
                },
                "dataConfirmacaoAdesao" : null,
                "periodo" : 1
            }
        ],
        "dataCriacao" : ISODate("2019-11-29T23:06:22.496Z"),
        "dataAtualizacao" : ISODate("2021-02-04T20:08:11.362Z"),
        "dataDelecao" : null,
        "endereco" : null,
        "aceitaContatoWhatsapp" : false,
        "carteira" : {
            "pontos" : {
                "saldo" : NumberDecimal("5000"),
                "quantidadePendente" : NumberDecimal("28487"),
                "pontosAcumulados" : [ 
                    {
                        "_id" : UUID("190fa44e-becf-4f1b-af53-2fbaa4ceaeb7"),
                        "quantidadeInicial" : NumberDecimal("5000"),
                        "status" : "Confirmado",
                        "notificacao" : true,
                        "origem" : "Reserva",
                        "descricao" : "Reserva: Matsubara Hotel (São Paulo, São Paulo, Brasil)",
                        "codigoReferenciaOrigem" : "CA6490610201221A8A",
                        "pontosRestantes" : NumberDecimal("5000"),
                        "valorDinheiro" : NumberDecimal("0.06"),
                        "idPlano" : UUID("d127b728-f84b-4dc1-926a-924cd402e49e"),
                        "dataRegistro" : ISODate("2020-10-06T12:21:47.857Z"),
                        "dataVencimento" : ISODate("2021-12-09T17:49:30.595Z"),
                        "dataPrevisaoEfetivacao" : ISODate("2021-03-21T00:00:00.000Z")
                    }, 
                    {
                        "_id" : UUID("e5556093-79a8-4470-80e0-3961e40a832f"),
                        "quantidadeInicial" : NumberDecimal("28487"),
                        "status" : "Pendente",
                        "notificacao" : false,
                        "origem" : "Reserva",
                        "descricao" : "Reserva: Vila Galé Fortaleza (Fortaleza, Ceará, Brasil)",
                        "codigoReferenciaOrigem" : "CA6490402211708A7F",
                        "pontosRestantes" : NumberDecimal("28487"),
                        "valorDinheiro" : NumberDecimal("0.06"),
                        "idPlano" : UUID("0882d661-bcf4-4353-9cba-8df606441f20"),
                        "dataRegistro" : ISODate("2021-02-04T20:08:30.019Z"),
                        "dataVencimento" : ISODate("2021-11-30T00:20:13.825Z"),
                        "dataPrevisaoEfetivacao" : ISODate("2021-05-14T00:00:00.000Z")
                    }
                ],
                "historicoTransacaoPontos" : [ 
                    {
                        "_id" : UUID("03acf020-2e58-40fc-9d63-0192cb9ca8a6"),
                        "quantidade" : NumberDecimal("5000"),
                        "status" : "Cancelado",
                        "origem" : "Reserva",
                        "descricao" : "Débito referente a reserva do GIG-SSA, SSA-FOR",
                        "codigoReferenciaOrigem" : null,
                        "tipoTransacao" : "Debito",
                        "tipoMovimento" : "Debito",
                        "idReferenciaTransacao" : [],
                        "dataRegistro" : ISODate("2021-02-04T17:10:52.472Z"),
                        "dataAtualizacao" : ISODate("2021-02-04T18:39:24.547Z"),
                        "tipoCredito" : "Pontos",
                        "idPlano" : UUID("00000000-0000-0000-0000-000000000000"),
                        "planoPeriodo" : 0,
                        "pontosUtilizados" : [ 
                            {
                                "_id" : UUID("434f78eb-b68e-4e76-939c-2321deca8151"),
                                "idCreditoPontos" : UUID("190fa44e-becf-4f1b-af53-2fbaa4ceaeb7"),
                                "quantidade" : "5000"
                            }
                        ]
                    }, 
                    {
                        "_id" : UUID("b612c08a-e8fe-49c6-8e06-42482762b450"),
                        "quantidade" : NumberDecimal("5000"),
                        "status" : "Confirmado",
                        "origem" : "Reserva",
                        "descricao" : "Crédito referente a reserva do GIG-SSA, SSA-FOR",
                        "codigoReferenciaOrigem" : null,
                        "tipoTransacao" : "Credito",
                        "tipoMovimento" : "Estorno",
                        "idReferenciaTransacao" : [ 
                            "03acf020-2e58-40fc-9d63-0192cb9ca8a6"
                        ],
                        "dataRegistro" : ISODate("2021-02-04T18:39:24.547Z"),
                        "dataAtualizacao" : null,
                        "tipoCredito" : "Pontos",
                        "idPlano" : UUID("00000000-0000-0000-0000-000000000000"),
                        "planoPeriodo" : 0,
                        "pontosUtilizados" : [ 
                            {
                                "_id" : UUID("af3be188-fe07-4d2f-b141-73026960f026"),
                                "idCreditoPontos" : UUID("190fa44e-becf-4f1b-af53-2fbaa4ceaeb7"),
                                "quantidade" : "5000"
                            }
                        ]
                    }, 
                    {
                        "_id" : UUID("6c96357f-a999-4ab9-84ab-9208ce06aaed"),
                        "quantidade" : NumberDecimal("28487"),
                        "status" : "Pendente",
                        "origem" : "Reserva",
                        "descricao" : "Reserva: Vila Galé Fortaleza (Fortaleza, Ceará, Brasil)",
                        "codigoReferenciaOrigem" : "CA6490402211708A7F",
                        "tipoTransacao" : "Credito",
                        "tipoMovimento" : "Credito",
                        "idReferenciaTransacao" : [],
                        "dataRegistro" : ISODate("2021-02-04T20:08:30.022Z"),
                        "dataAtualizacao" : null,
                        "tipoCredito" : "Pontos",
                        "idPlano" : UUID("00000000-0000-0000-0000-000000000000"),
                        "planoPeriodo" : 0,
                        "pontosUtilizados" : [ 
                            {
                                "_id" : UUID("f95046f4-2298-4761-989c-c270d239787f"),
                                "idCreditoPontos" : UUID("e5556093-79a8-4470-80e0-3961e40a832f"),
                                "quantidade" : "28487"
                            }
                        ]
                    }
                ]
            },
            "diarias" : {
                "historicoTransacaoDiarias" : [ 
                    {
                        "_id" : UUID("16b5f587-81d2-40a6-b16d-3c2642dfa3e8"),
                        "quantidade" : NumberDecimal("3"),
                        "status" : "Confirmado",
                        "origem" : "Reserva",
                        "descricao" : "Débito referente a reserva do CLH Suites Curitiba (Curitiba, Paraná, Brasil)",
                        "codigoReferenciaOrigem" : "CA1201707201408F01",
                        "tipoTransacao" : "Debito",
                        "tipoMovimento" : "Debito",
                        "idReferenciaTransacao" : [],
                        "dataRegistro" : ISODate("2021-02-26T12:57:51.487Z"),
                        "dataAtualizacao" : null,
                        "tipoCredito" : "Diarias",
                        "idPlano" : UUID("00000000-0000-0000-0000-000000000000"),
                        "planoPeriodo" : 2,
                        "pontosUtilizados" : null
                    } 
                ]
            }
        }
    },
    {
        "_id": ObjectId("5ea73ca502a37f0001b33d54"),
        "id": "33829117523",
        "nome": "Agata Teste QA",
        "dataNascimento": ISODate("1989-05-18T00:00:00.000Z"),
        "cpf": "33829117523",
        "celular": "11548487878",
        "emailPessoal": null,
        "empresas": [
            {
                "_id": "04020662000184",
                "nomeFantasia": "Filial Dos Qa's",
                "razaoSocial": "Torp and Sons",
                "segmento": "Information Technology and Services",
                "empresaProprietariaId": "65082455000220",
                "site": "xiomara@mante.co.uk",
                "tipo": null,
                "coparticipacao": NumberDecimal("90"),
                "ativo": true,
                "centroCusto": "Matriz",
                "grupoOrganizacional": null,
                "cnpj": "04020662000184",
                "colaboradorRh": {
                    "telefone": "",
                    "ramal": "",
                    "emailCorporativo": "",
                    "matricula": "321",
                    "descontoFolha": false,
                    "cargo": "",
                    "area": "",
                    "departamento": "",
                    "coparticipacao": null
                },
                "dataCriacao": ISODate("2020-04-27T20:12:21.796Z"),
                "dataAtualizacao": null,
                "dataDelecao": null
            }
        ],
        "planos": [ 
            {
                "_id" : UUID("3338f00e-8589-4113-bd09-fc66eaa832c6"),
                "empresaId" : "04020662000184",
                "titulo" : "Hotéis de 3 e 4 estrelas",
                "tipoPlano" : "Padrão",
                "valorPlano" : "90",
                "diariasTotais" : 4,
                "diariasDisponiveis" : 4,
                "valorDiariaMinima" : "0.01",
                "valorDiariaMaxima" : "226.0",
                "vigencia" : ISODate("2022-12-02T13:55:13.443Z"),
                "ativo" : true,
                "dataAdesao" : ISODate("2020-12-02T13:54:53.778Z"),
                "status" : "Ativo",
                "billing" : null,
                "fingerprint" : {
                    "timestamp" : ISODate("2020-12-02T13:54:54.561Z"),
                    "servidor" : "172.17.0.15",
                    "geolocalizacao" : ";",
                    "userAgent" : "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.66 Safari/537.36",
                    "ip" : "187.255.42.110, 10.42.7.110",
                    "termoUso" : "\n<p>Seja bem-vindo à Férias & Co, sua plataforma de benefícios de viagens"
                },
                "dataConfirmacaoAdesao" : ISODate("2020-12-02T13:55:13.443Z"),
                "periodo" : 1
            }
        ],
        "dataCriacao": ISODate("2020-04-27T20:12:21.796Z"),
        "dataAtualizacao": ISODate("2020-06-23T18:09:48.032Z"),
        "dataDelecao": null,
        "endereco": {
            "cep": "02215010",
            "logradouro": "Rua Eurico Sodré",
            "numero": 910,
            "complemento": "Casa 1",
            "bairro": "Vila Medeiros",
            "municipio": "São Paulo",
            "municipioCodigoIbge": "50308",
            "estadoSigla": "SP",
            "estadoCodigoIbge": "35"
        },
        "aceitaContatoWhatsapp": true,
        "carteira": {
            "pontos": {
                "saldo": NumberDecimal("0"),
                "quantidadePendente": NumberDecimal("0"),
                "pontosAcumulados": [],
                "historicoTransacaoPontos": []
            },
            "diarias": {
                "historicoTransacaoDiarias": []
            }
        }
    },
    {
        "_id" : ObjectId("5fc76f92e582880001839031"),
        "id" : "27832933585",
        "nome" : "Daniel Teste QA",
        "dataNascimento" : ISODate("1985-12-22T00:00:00.000Z"),
        "cpf" : "27832933585",
        "celular" : "11977777777",
        "emailPessoal" : "diego.teixeira@ferias.co",
        "empresas" : [ 
            {
                "_id" : "24345252000110",
                "nomeFantasia" : "AMD TESTE",
                "razaoSocial" : "AMD TESTE",
                "segmento" : "Indústria",
                "empresaProprietariaId" : "24345252000110",
                "site" : "www.amd.com.br",
                "tipo" : "Cliente",
                "coparticipacao" : NumberDecimal("0"),
                "ativo" : true,
                "centroCusto" : null,
                "grupoOrganizacional" : null,
                "cnpj" : "24345252000110",
                "colaboradorRh" : {
                    "telefone" : "",
                    "ramal" : "",
                    "emailCorporativo" : "",
                    "matricula" : "261",
                    "descontoFolha" : false,
                    "cargo" : "",
                    "area" : "",
                    "departamento" : "",
                    "coparticipacao" : NumberDecimal("55")
                },
                "dataCriacao" : ISODate("2020-12-02T10:42:26.434Z"),
                "dataAtualizacao" : ISODate("2020-12-02T13:09:47.356Z"),
                "dataDelecao" : null
            }
        ],
        "planos" : [ 
            {
                "_id" : UUID("005d9991-e7c7-49ff-a617-fa3ce1bad9e5"),
                "empresaId" : "24345252000110",
                "titulo" : "Hotéis de 3 e 4 estrelas",
                "tipoPlano" : "Padrão",
                "valorPlano" : "90",
                "diariasTotais" : 4,
                "diariasDisponiveis" : 4,
                "valorDiariaMinima" : "0.01",
                "valorDiariaMaxima" : "216",
                "vigencia" : ISODate("2022-12-02T13:55:13.443Z"),
                "ativo" : true,
                "dataAdesao" : ISODate("2020-12-02T13:54:53.778Z"),
                "status" : "Ativo",
                "billing" : null,
                "fingerprint" : {
                    "timestamp" : ISODate("2020-12-02T13:54:54.561Z"),
                    "servidor" : "172.17.0.15",
                    "geolocalizacao" : ";",
                    "userAgent" : "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.66 Safari/537.36",
                    "ip" : "187.255.42.110, 10.42.7.110",
                    "termoUso" : "\n<p>Seja bem-vindo à Férias & Co, sua plataforma de benefícios de viagens"
                },
                "dataConfirmacaoAdesao" : ISODate("2020-12-02T13:55:13.443Z"),
                "periodo" : 1
            }
        ],
        "endereco" : {
            "cep" : "07020010",
            "logradouro" : "Avenida Emílio Ribas",
            "numero" : 435,
            "complemento" : "casa",
            "bairro" : "Jardim Tijuco",
            "municipio" : "Guarulhos",
            "municipioCodigoIbge" : "18800",
            "estadoSigla" : "SP",
            "estadoCodigoIbge" : "35"
        },
        "dataCriacao" : ISODate("2020-12-02T10:42:26.434Z"),
        "dataAtualizacao" : ISODate("2020-12-02T13:55:13.446Z"),
        "dataDelecao" : null,
        "aceitaContatoWhatsapp" : false,
        "carteira" : {
            "pontos" : {
                "saldo" : NumberDecimal("0"),
                "quantidadePendente" : NumberDecimal("0"),
                "pontosAcumulados" : [],
                "historicoTransacaoPontos" : []
            },
            "diarias" : {
                "historicoTransacaoDiarias" : []
            }
        }
    },
    {
        "_id" : ObjectId("5e1cb7b54ef791000138a433"),
        "id" : "07078104692",
        "nome" : "SHIRLEY AURORA DA CUNHA",
        "dataNascimento" : ISODate("1984-06-03T00:00:00.000Z"),
        "cpf" : "07078104692",
        "celular" : "24999381318",
        "emailPessoal" : "shirleycunhatst@gmail.com",
        "empresas" : [ 
            {
                "_id" : "04532167000154",
                "nomeFantasia" : "Bmb Mode Center",
                "razaoSocial" : "Bmb Mode Center Indústria, Comércio e Serviços LTDA",
                "segmento" : "Outros",
                "empresaProprietariaId" : "04532167000154",
                "site" : "www.modecenter.com.br",
                "tipo" : "Cliente",
                "coparticipacao" : NumberDecimal("60"),
                "ativo" : true,
                "centroCusto" : "10000010",
                "grupoOrganizacional" : null,
                "cnpj" : "04532167000154",
                "colaboradorRh" : {
                    "telefone" : "",
                    "ramal" : "",
                    "emailCorporativo" : "",
                    "matricula" : "907",
                    "descontoFolha" : true,
                    "cargo" : "",
                    "area" : "",
                    "departamento" : "",
                    "coparticipacao" : null
                },
                "dataCriacao" : ISODate("2020-01-14T12:50:15.697Z"),
                "dataAtualizacao" : ISODate("2020-11-24T13:29:32.271Z"),
                "dataDelecao" : null
            }
        ],
        "planos" : [ 
            {
                "_id" : UUID("7077243c-c72f-4f2d-8f2d-7b1ccafe1e6a"),
                "empresaId" : "04532167000154",
                "titulo" : "Hotéis de 3 e 4 estrelas",
                "tipoPlano" : "Padrão",
                "valorPlano" : "158",
                "diariasTotais" : 7,
                "diariasDisponiveis" : 0,
                "valorDiariaMinima" : "0.01",
                "valorDiariaMaxima" : "216",
                "vigencia" : ISODate("2022-01-14T12:50:15.916Z"),
                "ativo" : true,
                "dataAdesao" : ISODate("2020-01-14T12:50:15.916Z"),
                "status" : "Ativo",
                "billing" : null,
                "fingerprint" : {
                    "timestamp" : ISODate("2020-01-14T12:50:15.959Z"),
                    "servidor" : "172.17.0.4",
                    "geolocalizacao" : "-14.235004;-51.92528",
                    "userAgent" : "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.117 Safari/537.36",
                    "ip" : "189.84.161.105",
                    "termoUso" : "\n<p>Seja bem-vindo à Férias & Co, sua plataforma de benefícios de viagens (“<span class=\"underline-text\">Plataforma</span>”).</p>\n<p>Por favor, leia atentamente os termos e condições abaixo estipulados (“<span class=\"underline-text\">Termos de Uso</span>”) \n    para utilizar a Plataforma e todos os serviços disponibilizados de maneira adequada.</p>\n<p><strong>CASO NÃO CONCORDE COM QUAISQUER DISPOSITIVOS DOS TERMOS DE USO, NÃO ACESSE OU UTILIZE \n    A NOSSA PLATAFORMA. SEU ACESSO E UTILIZAÇÃO REPRESENTAM SUA ACEITAÇÃO INTEGRAL E INCONDICIONAL \n    AOS TERMOS DE USO. \n    A <a href=\"assets/documents/ferias-e-co-politica-de-privacidade2019-11-22_v2.pdf\" target=\"_blank\">POLÍTICA DE PRIVACIDADE</a> \n    INTEGRA OS PRESENTES TERMOS DE USO. ESTA PLATAFORMA É DIRECIONADA APENAS PARA MAIORES DE 18 ANOS DE IDADE. \n    SE VOCÊ POSSUI MENOS DE 18 ANOS, POR FAVOR, CESSE IMEDIATAMENTE O ACESSO À PLATAFORMA.</strong>\n</p><br />\n<p><strong>1.</strong> <span class=\"underline-text\">Finalidade da Plataforma.</span> \n    A Plataforma tem a finalidade de proporcionar a colaboradores de empresas \n    associadas (“Associadas”) à Férias&Co a possibilidade de adquirir um plano de assinatura de benefícios \n    de viagem, sendo os colaboradores das Associadas os usuários finais (“Usuários”) da Plataforma. Por \n    meio da Plataforma, os Usuários podem adquirir um dos planos de assinaturas disponíveis, de acordo com \n    as configurações e contratações entre a Associada que o cadastrou inicialmente e a Férias&Co. Após a \n    aquisição de um dos planos de assinatura, o Usuário poderá contratar os serviços relacionados a viagem \n    e turismo disponíveis na Plataforma, tais como a reserva de hotéis, passagens aéreas, entre outros, \n    conforme aplicável. \n</p><br />\n<p><strong>2.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Controle e desenvolvimento da Plataforma.</span></span>\n    A Plataforma é controlada e desenvolvida pela <strong>FERIAS & CO. VIAGENS E TURISMO LTDA. (“Férias&Co”)</strong>, \n    pessoa jurídica inscrita no CNPJ/MF sob o nº 34.008.403/0001-07, com sede na Rua Manoel Coelho, 600 cj 211, Centro, \n    na cidade de São Caetano do Sul, Estado de São Paulo.\n</p><br />\n<p><strong>3.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Uso da Plataforma.</span></span> \n    O uso da Plataforma será efetuado exclusivamente através do acesso à rede mundial de computadores (Internet). \n    Para tanto, os Usuários deverão estar providos dos equipamentos necessários e apropriados, de acordo com as \n    especificações técnicas necessárias para o funcionamento da Plataforma, tais como computador com programa de \n    navegação (browser) devidamente instalado e licenciado, modem, bem como dos serviços de provimento e \n    infraestrutura de acesso à Internet.\n</p><br />\n<p><strong>4.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Acesso à Plataforma pelo Usuário.</span></span>\n    A Plataforma poderá ser acessada pelo Usuário por meio do site “www.ferias.co”. O Usuário poderá ter acesso à Plataforma \n    apenas após o envio das informações dos Usuários pela Associada em que presta serviços, momento em que terá a possibilidade \n    de registrar-se na Plataforma, criando um login e senha de acesso. O Usuário poderá então escolher e adquirir um dos planos \n    de assinatura. As opções de aquisição de planos de assinatura, conforme mencionado acima, bem como as formas de pagamento \n    pelos planos de assinatura, estarão diretamente relacionados às condições contratuais entre a Férias&Co e a Associada a \n    qual o Usuário está vinculado.\n</p>\n<p>A Férias&Co disponibiliza ao seu Usuário uma diversa gama de serviços de viagem e turismo, apresentando uma lista de empresas parceiras. \n</p>\n<p>O Usuário terá um período de carência de 6 (seis) mensalidades antes de utilizar os benefícios de seu plano, iniciando-se a partir do \n    primeiro dia do 7º (sétimo) mês subsequente ao da subscrição e cadastramento, encerrando-se no último dia do 18º (décimo oitavo) mês \n    de pagamento da mensalidade e assim sucessivamente. Tal período de carência apenas será dispensado mediante cadastro dos dados do \n    cartão de crédito e permissão de pagamento de parcelas no caso de rescisão contratual.\n</p><br />\n<p><strong>5.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Tipos de assinatura.</span></span>\n    A Férias&Co disponibiliza ao Usuário cinco (5) tipos de planos de benefícios para assinatura: Padrão, Superior, Premium, Especial e Exclusivo:\n</p>\n<p>\n    A Férias&Co reserva-se ao direito de alterar a cobertura dos planos acima mencionados, bem como de criar e remover categorias de planos. \n    ESTA SEÇÃO CONTÉM UMA BREVE DESCRIÇÃO DOS BENEFÍCIOS INCLUÍDOS EM CADA PLANO. O USUÁRIO DEVERÁ LER COM ATENÇÃO, NO MOMENTO DA CONTRATAÇÃO \n    E/OU DA UTILIZAÇÃO DE BENEFÍCIOS AS RESTRIÇÕES E OS REQUISITOS RELACIONADOS AO USO DOS BENEFÍCIOS. A FÉRIAS&CO. NÃO SE RESPONSABILIZA [\n    PELO USO INADEQUADO DOS BENEFÍCIOS POR PARTE DO USUÁRIO. EM CASO DE EXTINÇÃO DO PLANO, ELE PERMANECERÁ VIGENTE ATÉ COMPLETAR O PERÍODO \n    DE 12 MESES DE SUA AQUISIÇÃO. PASSADO ESSE PERÍODO, CASO O USUÁRIO QUEIRA CONTINUAR A USUFRUIR DOS BENEFÍCIOS, ELE DEVERÁ ESCOLHER UM \n    NOVO PLANO PARA DAR CONTINUIDADE A SUA RELAÇÃO COM A FÉRIAS&CO.\n</p><br />\n<p><strong>6.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Pagamento das assinaturas.</span></span>\n    A aquisição de um dos planos de assinatura disponíveis na Plataforma está sujeita ao pagamento pelo Usuário. A Férias&Co, por padrão, \n    oferece duas formas possíveis de pagamento: (i) o desconto em folha de pagamento, feito diretamente pela Associada; ou (ii) cartão de crédito, \n    por meio de cobrança mensal ao Usuário, estando a duração dos pagamentos vinculada diretamente à vigência do contrato entre a Associada a que o \n    Usuário está vinculado e a Férias&Co. Caso ocorra alguma falha no pagamento por meio de cartão de crédito, a Férias&Co tentará realizar mais \n    outras duas cobranças dentro do período de uma (1) semana, para que o Usuário regularize sua situação. Caso a situação não seja regularizada, \n    sua assinatura será automaticamente cancelada. Para faturamento por cartão de crédito, a Férias&Co utiliza um terceiro processador de pagamentos. \n    O processamento de tais pagamentos estará sujeito aos termos, às condições e às políticas de privacidade da empresa responsável por processar o \n    pagamento, além destes Termos. A Férias&Co não será responsável por erros cometidos pelo por esse terceiro. Além disso, a Férias&Co se reserva o \n    direito de corrigir quaisquer erros ou enganos cometidos no processo de faturamento mesmo que o pagamento já tenha sido solicitado ou recebido. \n    A Férias&Co não é responsável por quaisquer impostos que possam se aplicar à aquisição de Assinaturas ou sobre os produtos e serviços fornecidos. \n    Uma vez contratado, o plano será anual e seu pagamento será dividido em 12 parcelas mensais e estará sujeito à renovação automática por iguais \n    períodos de tempo.\n</p><br />\n<p><strong>7.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Cancelamento dos planos de assinatura:</span></span>\nCaso o Usuário pretenda o cancelamento de seu plano sem que tenha utilizado as diárias proporcionais aos valores pagos, o mesmo terá direito a recebê-las de \nforma proporcional ao valor pago, comprometendo-se a utilizar as referidas diárias durante a vigência do plano contratado. Caso o Usuário não se interesse \npela conversão dos valores pagos em diárias, poderá optar em receber o valor pago com a retenção do percentual de 20% a título de taxa administrativa. Para \nos casos em que o uso de diárias for maior que o pagamento efetuado, será necessário para o cancelamento o pagamento proporcional as diárias utilizadas. Para \nos casos de cancelamento com uso integral de seu plano, fica obrigado o Usuário a efetuar o pagamento de todas as parcelas restantes do plano contratado.\n</p><br />\n<p><strong>7.1</strong> <span class=\"underline-text\"><span class=\"italic-text\">Desligamento do Usuário e Associada:</span></span>\nPara os casos de desligamento entre Usuário e Associada, os planos que tiveram utilização total somente poderão ser cancelados após o pagamento integral das \nparcelas remanescentes. Nesse cenário, é facultado aos Usuários manterem seus planos ativos até o final do período aquisitivo, assumindo o pagamento integral \nda mensalidade por meio de cartão de crédito, que deverá ser informado no portal Férias&Co. Para os casos de desligamento sem que o usuário tenha utilizado as \ndiárias proporcionais aos valores pagos, o mesmo terá direito a recebê-las de forma proporcional ao valor pago, comprometendo-se a utilizar referidas diárias \ndurante a vigência do plano contratado, sob pena de desistência da utilização das diárias. Para os casos de desligamento com a utilização superior ao valor \npago, será cobrado o valor proporcional de uso das diárias pelo Usuário o qual assume o valor integral das mensalidades restantes através de pagamento via \ncartão de crédito cadastrado na plataforma. Poderá o Usuário, caso faça esta opção, assumir o pagamento integral do restante das mensalidades para utilização \ntotal do plano contratado. Já para os casos de desligamento sem a utilização do plano contratado, será liberado na plataforma as diárias proporcionais aos \nvalores pagos para utilização, tendo a possibilidade, também, de o Usuário assumir o pagamento integral do restante das mensalidades por meio de cartão de \ncrédito para utilização total do plano contratado durante sua vigência. Caso o Usuário não se interesse pela conversão dos valores pagos em diárias ou o \npagamento complementar do plano para uso integral das diárias contratadas, poderá optar em receber o valor pago com a retenção do percentual de 20% a título \nde taxa administrativa.\n<br><br>\nMensalidade integral do plano atualizada para os casos de desligamento entre Usuário e Associada até o final do período aquisitivo: R$ 158,00.\n</p><br>\n<p><strong>7.2</strong> <span class=\"underline-text\"><span class=\"italic-text\">Violação ao Termo de Uso:</span></span>\nPara o caso de cancelamento do plano de assinatura por violação aos Termos de Uso, o Usuário não fará jus a nenhum tipo de reembolso das quantias já pagas e \ndeverá pagar imediatamente os valores pendentes, caso tenha utilizado algum benefício de seu plano de assinaturas.\n</p><br />\n<p><strong>8.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Segurança do Usuário.</span></span>\n    A Férias&Co empreende e sempre empreenderá seus melhores esforços para garantir uma experiência agradável e segura da Plataforma para o Usuário. \n    Para garantir que um acesso seguro, recomenda-se ao Usuário que não entregue sua senha a ninguém, sendo de sua inteira responsabilidade manter \n    e manter todos os nomes de usuários e senhas confidenciais. Além disso, o Usuário é o único responsável por todas e quaisquer atividades que \n    ocorram em sua conta e será o único responsável por todo o uso de sua conta e senha e todos os danos diretos e indiretos resultantes da não \n    observância de referido requisito de segurança. O Usuário deverá notificar à Férias&Co imediatamente sobre qualquer uso não autorizado de \n    qualquer conta ou qualquer outra violação de segurança. A Férias&Co não pode e não será responsável por qualquer perda ou dano decorrente da \n    falha do Usuário em cumprir com estes requisitos.\n</p><br />\n<p><strong>9.</strong> <span class=\"underline-text\"><span class=\"italic-text\">\nVeracidade das informações fornecidas pelo Usuário e pelas Associadas.</span></span>\n    O Usuário se compromete a fornecer informações verdadeiras, exatas, atuais e completas quando de seu cadastramento para uso da Plataforma, \n    bem como a manter sempre atualizadas as referidas informações, seja junto da Plataforma ou junto à Associada que está vinculado. O fornecimento \n    de informação falsa ou a utilização indevida de dados de terceiros constitui crime tipificado pelo Código Penal Brasileiro. \n    A FÉRIAS&CO NÃO VERIFICA OU ASSUME QUALQUER RESPONSABILIDADE QUANTO À CONFIABILIDADE, EXATIDÃO, VALIDADE, ATUALIDADE, UTILIDADE, \n    INTEGRIDADE, PERTINÊNCIA, OPORTUNIDADE OU ABRANGÊNCIA DAS INFORMAÇÕES INSERIDAS PELO USUÁRIO OU PELAS ASSOCIADAS NA PLATAFORMA. \n    TODAS AS INFORMAÇÕES RELATIVAS AO CADASTRO DOS USUÁRIOS NA PLATAFORMA, TANTO SEUS DADOS PESSOAIS, COMO OUTROS DADOS E INFORMAÇÕES \n    QUE A PLATAFORMA PERMITE ARMAZENAR E GERENCIAR, SERÃO INSERIDAS NA PLATAFORMA PELO USUÁRIO OU PELAS ASSOCIADAS SOB SUA EXCLUSIVA \n    RESPONSABILIDADE.\n</p><br />\n<p><strong>10.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Privacidade do Usuário.</span></span>\n    A Política de Privacidade da Plataforma explicita de que maneira são tratadas as informações pessoais dos Usuários e como sua privacidade \n    é protegida, quando da utilização da Plataforma. O acesso à Política de Privacidade está <a href=\"assets/documents/ferias-e-co-politica-de-privacidade2019-11-22_v2.pdf\" target=\"_blank\">disponível no pdf</a>.\n</p><br />\n<p><strong>11.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Links a sites de terceiros.</span></span>\n    Nosso site pode conter links externos para outros sites detidos por terceiros que não são detidos ou controlados pela Férias&Co. \n    A Férias&Co não possui qualquer controle e não assume qualquer responsabilidade pelo conteúdo, políticas de privacidade ou práticas \n    de quaisquer serviços e sites de terceiros. Recomendamos a leitura dos termos e condições e das políticas de privacidade dos \n    sites de terceiros que visitar.\n</p><br />\n<p><strong>12.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Declarações do Usuário.</span></span>\n    O acesso à Plataforma pelos Usuário está diretamente vinculado ao estrito cumprimento destes Termos de Uso. Portanto, ao aceitar estes \n    Termos de Uso, o Usuário declara que: (a) seguirá os Termos de Uso e todas as leis aplicáveis; (b) fornecerá somente informações \n    verdadeiras e precisas; (c) não irá assediar, ameaçar ou abusar de outras pessoas ao usar a Plataforma; (d) não interferirá o uso ou \n    acesso à Plataforma de outros Usuários;(e) não publicará nenhum conteúdo obsceno ou ofensivo a terceiros, bem como discriminatório ou \n    preconceituoso por motivos de raça, gênero, orientação sexual, religião, entre outros; (f) não publicará nenhum conteúdo calunioso, \n    difamatório ou injurioso, ou que invada a privacidade alheia; (g) não coletará ou armazenará informações pessoais identificáveis \n    sobre quaisquer terceiros na Plataforma, ou perseguir de outra forma, contatar indevidamente ou assediar qualquer Usuário; (h) não \n    postará nenhum conteúdo que contenha vírus, bots, cavalos de Tróia, código nocivo ou outro software ou programa de computador \n    projetado para interromper a funcionalidade da Plataforma, a capacidade dos Usuários de desfrutar da Plataforma ou o funcionamento \n    adequado de qualquer software, hardware ou equipamento ou materiais utilizados em conexão com a Plataforma; (i) não usará nenhuma \n    informação na Plataforma para fins comerciais, exceto quando expressamente autorizado pela Férias & Co; (j) não pesquisará, ligará ou \n    vinculará nenhum dado ou informação a ou por meio da Plataforma sem o expresso consentimento e autorização da Férias & Co; e (k) não \n    enviará qualquer publicidade não solicitada, informações promocionais, e-mail ou outras solicitações em massa (incluindo, sem limitação, \n    lixo eletrônico, \"spam\", cartas em cadeia ou esquemas de pirâmide de qualquer tipo) a qualquer pessoa através do uso da Plataforma. \n    Caso alguma dessas diretrizes sejam definidas acima ou qualquer outro aspecto destes Termos de Uso, reservamos o direito de suspender \n    ou rescindir os direitos de uso da Plataforma sem aviso prévio.\n</p><br />\n<p><strong>13.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Consequências das violações aos Termos de Uso pelo Usuário.</span></span>\n    Sem prejuízo de outras medidas que entender cabíveis, a Férias&Co poderá advertir, suspender ou cancelar, temporária ou definitivamente, \n    o cadastro do Usuário, a qualquer tempo, iniciando as ações legais cabíveis e/ou suspendendo a execução destes Termos se o Usuário não \n    cumprir qualquer dispositivo aqui previsto. A Férias&Co ainda poderá tomar tais medidas se não puder ser verificada a identidade do \n    Usuário ou caso qualquer informação fornecida por ele esteja incorreta.\n</p><br />\n<p><strong>14.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Interrupções no uso da Plataforma.</span></span>\n    O USO DA PLATAFORMA ESTÁ SUJEITO A INTERRUPÇÕES, ATRASOS E PROBLEMAS INERENTES AO USO DA INTERNET E OUTROS TIPOS DE COMUNICAÇÃO ELETRÔNICA. \n    A FÉRIAS&CO NÃO SERÁ RESPONSÁVEL POR QUALQUER DESSAS INTERRUPÇÕES, ATRASOS OU PROBLEMAS, NEM POR EVENTUAIS DEFEITOS OU LIMITAÇÕES DOS \n    EQUIPAMENTOS OU DO BROWSER UTILIZADOS PELO USUÁRIO OU AINDA POR EVENTUAIS DEFEITOS OU LIMITAÇÕES DOS SERVIÇOS DE PROVIMENTO E INFRA-ESTRUTURA \n    DE ACESSO À INTERNET CONTRATADOS PELO USUÁRIO.\n</p><br />\n<p><strong>15.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Responsabilidade da Férias&Co perante atos de terceiros:</span></span>\n    O USUÁRIO DECLARA, ACEITA E RECONHECE QUE A FÉRIAS&CO NÃO POSSUI HOTÉIS, COMPANHIAS DE TRANSPORTE AÉREO, FERROVIÁRIO, MARINHO OU TERRESTRE E NÃO PRESTA \n    SERVIÇOS DE HOTELARIA OU DE TRANSPORTE AÉREO, FERROVIÁRIO, MARINHO OU TERRESTRE, SENDO TAIS SERVIÇOS PRESTADOS EXCLUSIVAMENTE PELOS PARCEIROS CREDENCIADOS \n    CONSTANTES DA PLATAFORMA E TAIS PARCEIROS CREDENCIADOS SÃO E SERÃO, PERANTE TODOS OS USUÁRIOS, INTEGRAL, ÚNICA E EXCLUSIVAMENTE RESPONSÁVEIS PELOS SERVIÇOS \n    PRESTADOS POR CADA UM DELES E SUAS CONSEQUÊNCIAS NOS TERMOS DA LEI, ESPECIALMENTE DA LEI Nº 10.406/2002 (CÓDIGO CIVIL) E DA LEI Nº 8.078/1990 (CÓDIGO DE \n    DEFESA DO CONSUMIDOR). A FÉRIAS&CO. NÃO PRESTA DECLARAÇÕES OU ASSUME QUALQUER OBRIGAÇÃO EM NOME, BENEFÍCIO OU PELOS PARCEIROS CREDENCIADOS QUE POSSAM SER \n    ACESSADOS NA PLATAFORMA.\n</p><br />\n<p><strong>16.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Licença limitada de uso à Plataforma.</span></span>\n    A Férias&Co concede ao Usuário uma licença limitada, não exclusiva e intransferível para utilizar a Plataforma de acordo com estes Termos de Uso.\n</p><br />\n<p><strong>17.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Propriedade intelectual da Férias&Co.</span></span>\n    Os Usuários reconhecem e concordam que a Férias&Co é a exclusiva titular de todos os direitos autorais e de propriedade intelectual relacionados \n    à Plataforma, e que tais direitos são protegidos pela Lei n.º 9.609, de 19 de fevereiro de 1998, e demais normas aplicáveis. O aceite aos presentes \n    Termos de Uso não implica a cessão ou transferência ao Usuário ou às Associadas de quaisquer direitos relativos à Plataforma, salvo aqueles direitos \n    expressamente previstos nestes Termos de Uso, observadas as limitações e demais condições aqui estabelecidas. É expressamente vedado aos Usuários \n    modificar ou tentar modificar qualquer funcionalidade da Plataforma. Além disso, o Usuário concorda em não reproduzir, duplicar, copiar, vender, \n    revender ou explorar qualquer parte das informações e conteúdo da Plataforma, bem como se obriga a utilizar a Plataforma de forma lícita e para as \n    finalidades autorizadas, sendo vedada a reprodução, distribuição, transformação, comercialização ou modificação, sem a prévia e expressa autorização \n    da Férias&Co, bem como fica vedado o fornecimento de login e senha para terceiros. O nome comercial Férias & Co., a marca Férias & Co., e os produtos \n    associados a essa marca são de exclusiva titularidade da Férias&Co e outras empresas de seu grupo econômico, não assistindo aos Usuários quaisquer \n    direitos eles relacionados. Nenhuma disposição destes Termos de Uso será interpretada como concessão aos Usuários de qualquer direito, título ou \n    interesse em qualquer propriedade intelectual da Férias&Co.\n</p><br />\n<p><strong>18.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Disponibilidade da Plataforma.</span></span>\n    A FÉRIAS&CO EMPREENDERÁ SEUS MELHORES ESFORÇOS PARA QUE A PLATAFORMA ESTEJA DISPONÍVEL 99,9% DO TEMPO. CONTUDO, A PLATAFORMA PODERÁ ESTAR INACESSÍVEL \n    EM MOMENTOS DE MANUTENÇÃO PREVENTIVA E DE MANUTENÇÃO DE QUAISQUER ERROS OU FALHAS. A FÉRIAS&CO NÃO ASSEGURA A IMPOSSIBILIDADE DO SEU SISTEMA E \n    SERVIDORES PODEREM SER ATACADOS, INVADIDOS, MODIFICADOS OU LESADOS, DE QUALQUER FORMA, POR TERCEIROS.\n</p><br />\n<p><strong>19.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Limitação de Responsabilidade.</span></span>\n    A FÉRIAS&CO NÃO SERÁ RESPONSÁVEL (I) PELA QUALIDADE OU DISPONIBILIDADE DA CONEXÃO DO DISPOSITIVO DO USUÁRIO À INTERNET EM QUALQUER CIRCUNSTÂNCIA; \n    (II) PELA IMPOSSIBILIDADE DE UTILIZAÇÃO DE QUAISQUER INFORMAÇÕES OU SERVIÇOS DISPONIVEIS EM RAZÃO DA INCOMPATIBILIDADE DA CONFIGURAÇÃO TÉCNICA DE \n    CONEXÃO DOS USUÁRIOS; E (III) POR QUAISQUER DANOS SOFRIDOS PELOS USUÁRIOS EM RAZÃO DA UTILIZAÇÃO DA PLATAFORMA DE FORMA DIVERSA DA ESTABELECIDA \n    NESTES TERMOS DE USO. \n</p><br />\n<p><strong>20.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Modificações aos Termos de Uso.</span></span>\n    A Férias&Co poderá, a seu exclusivo critério, realizar quaisquer modificações e/ou adições aos presentes Termos de Uso. Em caso de modificação \n    destes Termos de Uso, a Férias&Co irá disponibilizar um aviso na Plataforma e os novos Termos de Uso entrarão imediatamente em vigor, salvo na \n    hipótese em que as alterações sejam substanciais, hipótese em que podemos pedir uma nova manifestação de aquiescência. Salvo nessa última hipótese, \n    o acesso e utilização da Plataforma após a publicação das alterações representa a aceitação integral e incondicional aos novos Termos de Uso.\n</p><br />\n<p><strong>21.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Validade e eficácia dos Termos de Uso.</span></span>\n    A nulidade ou invalidade de qualquer cláusula destes Termos de Uso não prejudicará a validade e eficácia das demais cláusulas e dos próprios Termos de Uso.\n</p><br />\n<p><strong>22.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Lei aplicável e Foro.</span></span>\n    Os presentes Termos de Uso são regidos pelas leis da República Federativa do Brasil e fica eleito o foro da Capital do Estado de São Paulo, \n    com exclusão de qualquer outro, por mais privilegiado que seja ou possa vir a ser, para dirimir quaisquer litígios ou controvérsias oriundas \n    dos presentes Termos de Uso.\n</p><br />\n<p><strong>23.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Limitação de Responsabilidade.</span></span>\n    Quaisquer dúvidas, críticas, sugestões e /ou reclamações poderão ser feitas pelo e-mail “contato@ferias.co”.\n</p><br />\n",
                    "termoDesconto" : "\n        <p>Pelo presente Termo de Adesão e Autorização de Débito em Folha de Pagamento, o signatário da presente\n        autoriza expressamente a Empresa, acima identificada, a realizar a retenção e desconto mensal, em folha\n        de pagamento, do valor contratado por mim a título de plano de assinaturas do Programa Férias & Co.,\n        conforme opção de assinatura por mim realizada diretamente na plataforma do Programa Férias & Co.,\n        mediante utilização do meu <span class=\"italic-text\">login</span> e senha pessoal, inclusive em caso de\n        renovação ou alteração das\n        condições do plano de assinatura, não sendo necessário para tanto qualquer aditamento a este\n        instrumento.</p><br />\n\n      <p>Ao assinar este instrumento, declaro ainda que (<span class=\"underline-text\">i</span>) sou plenamente\n        capaz de compreender as condições do\n        plano de assinaturas a que aderi, sou civilmente capaz e tenho condições jurídicas e financeiras de\n        cumprir as obrigações por mim assumidas; e (<span class=\"underline-text\">ii</span>) este instrumento é\n        devidamente assinado e formalizado e\n        constitui obrigação válida e vinculante, exequível de acordo com os termos e condições aqui previstos.\n      </p><br />\n\n      <p>Expressamente declaro ainda, estar ciente:</p><br />\n\n\n      <div class=\"topics\">\n        <p>\n          <li>\n            Dos termos, condições de uso e política do Férias&Co. disponíveis para consulta na plataforma\n            “Férias & Co”, à qual tenho acesso por meio de senha e login pessoais e individualizados;\n          </li>\n\n        </p><br />\n        <p>\n          <li>\n            Que a adesão ao programa Férias&Co., bem como a qualquer dos planos de assinatura, é opcional\n            e deve ser formalizada com o preenchimento e assinatura deste Termo de Adesão e Autorização de Débito em\n            Folha de\n            Pagamento;\n          </li>\n        </p><br />\n        <p>\n          <li>\n            Que a adesão ao programa Férias&Co., seu prazo, termos e condições constam dos Termos de\n            Uso, Política de Privacidade e demais políticas, termos e condições constantes da Plataforma, aos\n            quais aderi ao efetuar a contratação do meu plano de assinaturas e que me obrigo a cumprir\n            irrestritamente, sob pena de rescisão do meu plano de assinatura “Férias & Co”, além das demais\n            penalidades aplicáveis previstas em Lei;\n          </li>\n        </p><br />\n        <p>\n          <li>\n            Que o <span class=\"italic-text\">login</span> e senha de acesso à plataforma Férias&Co. são pessoais e\n            intransferíveis, de forma\n            que assumo total responsabilidade caso eu transmita a qualquer terceiro tais dados;\n          </li>\n        </p><br />\n\n        <p>\n          <li>\n            Que inexiste qualquer relação entre a contratação de parceiros credenciados ao Férias&Co e o\n            exercício das minhas atividades ou vínculo empregatício junto à Empresa e que as condições\n            especiais oferecidas pelo programa Férias&Co. não possuem caráter remuneratório ou de benefício;\n          </li>\n        </p><br />\n\n        <p>\n          <li>\n            Que o Férias&Co. não possui hotéis ou empresas de transporte aéreo ou terrestre e não presta\n            serviços de hotelaria ou de transporte aéreo ou terrestre, sendo os parceiros credenciados exclusiva\n            e integralmente responsáveis, nos termos da Lei, pelos serviços por elas prestados. O serviço a ser\n            fornecido pela Férias&Co. limita-se ao acesso à plataforma “Férias & Co” e à intermediação do\n            signatários com os parceiros credenciados nela constantes, não sendo a Férias & Co. obrigada a\n            executar os serviços de turismo que forem contratados pelo signatário diretamente com o parceiro\n            credenciado, nem é a Contratada responsável por falhas, seja do signatário ou do parceiro\n            credenciado, em uma contratação;\n          </li>\n        </p><br />\n\n        <p>\n          <li>\n            Que o acesso à Plataforma requerer acesso à internet em condições técnicas compatíveis às\n            exigidas pela Plataforma. Ademais, por se tratar de serviço oferecido online, o Férias & Co. está\n            sujeito a eventuais interrupções, suspensões ou bugs temporários, que poderão ou não ser sanáveis\n            pela Contratada ou seus prestadores de serviços, sem que isto justifique a rescisão deste Contrato\n            ou revisão de seus termos e condições;\n          </li>\n        </p><br />\n\n        <p>\n          <li>\n            Que a cada renovação do plano de assinaturas contratado por mim, os planos de assinaturas\n            disponíveis, seu preço, termos e condições e os serviços correspondentes oferecidos pela Férias &\n            Co poderão ser alterados, adicionados, excluídos ou complementados, a critério da Férias & Co.\n            Alterações dos termos e condições de um plano de assinaturas no curso de seu prazo de contratação\n            requererão adesão do signatário para serem implementadas e válidas.\n          </li>\n        </p><br />\n\n        <p>\n          <li>\n            Que minha assinatura poderá ser cancelada por decisão individual minha, da Férias & Co ou da\n            Empresa, observados os Termos de Uso da Plataforma e as condições de transição em caso de\n            rescisão, conforme constantes da Plataforma.\n          </li>\n        </p><br />\n      </div>\n\n      <p> Este instrumento é regido e será interpretado de acordo com as Leis da República Federativa do Brasil.\n        As Partes elegem o foro de [São Paulo, Estado de São Paulo], para dirimir quaisquer questões oriundas do\n        presente Contrato, renunciando a qualquer outro, por mais privilegiado que seja.\n      </p>\n"
                },
                "dataConfirmacaoAdesao" : null,
                "periodo" : 1
            }, 
            {
                "empresaId" : "04532167000154",
                "titulo" : "Hotéis de 3 e 4 estrelas",
                "tipoPlano" : "Padrão",
                "valorPlano" : "158",
                "diariasTotais" : 7,
                "diariasDisponiveis" : 7,
                "valorDiariaMinima" : "0.01",
                "valorDiariaMaxima" : "216",
                "vigencia" : ISODate("2023-01-14T12:50:15.916Z"),
                "ativo" : true,
                "dataAdesao" : ISODate("2021-01-15T12:50:15.916Z"),
                "status" : "Ativo",
                "billing" : null,
                "fingerprint" : {
                    "timestamp" : "2020-01-14T12:50:15.959Z",
                    "servidor" : "172.17.0.4",
                    "geolocalizacao" : "-14.235004;-51.92528",
                    "userAgent" : "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.117 Safari/537.36",
                    "ip" : "189.84.161.105",
                    "termoUso" : "\n<p>Seja bem-vindo à Férias & Co, sua plataforma de benefícios de viagens (“<span class=\"underline-text\">Plataforma</span>”).</p>\n<p>Por favor, leia atentamente os termos e condições abaixo estipulados (“<span class=\"underline-text\">Termos de Uso</span>”) \n    para utilizar a Plataforma e todos os serviços disponibilizados de maneira adequada.</p>\n<p><strong>CASO NÃO CONCORDE COM QUAISQUER DISPOSITIVOS DOS TERMOS DE USO, NÃO ACESSE OU UTILIZE \n    A NOSSA PLATAFORMA. SEU ACESSO E UTILIZAÇÃO REPRESENTAM SUA ACEITAÇÃO INTEGRAL E INCONDICIONAL \n    AOS TERMOS DE USO. \n    A <a href=\"assets/documents/ferias-e-co-politica-de-privacidade2019-11-22_v2.pdf\" target=\"_blank\">POLÍTICA DE PRIVACIDADE</a> \n    INTEGRA OS PRESENTES TERMOS DE USO. ESTA PLATAFORMA É DIRECIONADA APENAS PARA MAIORES DE 18 ANOS DE IDADE. \n    SE VOCÊ POSSUI MENOS DE 18 ANOS, POR FAVOR, CESSE IMEDIATAMENTE O ACESSO À PLATAFORMA.</strong>\n</p><br />\n<p><strong>1.</strong> <span class=\"underline-text\">Finalidade da Plataforma.</span> \n    A Plataforma tem a finalidade de proporcionar a colaboradores de empresas \n    associadas (“Associadas”) à Férias&Co a possibilidade de adquirir um plano de assinatura de benefícios \n    de viagem, sendo os colaboradores das Associadas os usuários finais (“Usuários”) da Plataforma. Por \n    meio da Plataforma, os Usuários podem adquirir um dos planos de assinaturas disponíveis, de acordo com \n    as configurações e contratações entre a Associada que o cadastrou inicialmente e a Férias&Co. Após a \n    aquisição de um dos planos de assinatura, o Usuário poderá contratar os serviços relacionados a viagem \n    e turismo disponíveis na Plataforma, tais como a reserva de hotéis, passagens aéreas, entre outros, \n    conforme aplicável. \n</p><br />\n<p><strong>2.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Controle e desenvolvimento da Plataforma.</span></span>\n    A Plataforma é controlada e desenvolvida pela <strong>FERIAS & CO. VIAGENS E TURISMO LTDA. (“Férias&Co”)</strong>, \n    pessoa jurídica inscrita no CNPJ/MF sob o nº 34.008.403/0001-07, com sede na Rua Manoel Coelho, 600 cj 211, Centro, \n    na cidade de São Caetano do Sul, Estado de São Paulo.\n</p><br />\n<p><strong>3.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Uso da Plataforma.</span></span> \n    O uso da Plataforma será efetuado exclusivamente através do acesso à rede mundial de computadores (Internet). \n    Para tanto, os Usuários deverão estar providos dos equipamentos necessários e apropriados, de acordo com as \n    especificações técnicas necessárias para o funcionamento da Plataforma, tais como computador com programa de \n    navegação (browser) devidamente instalado e licenciado, modem, bem como dos serviços de provimento e \n    infraestrutura de acesso à Internet.\n</p><br />\n<p><strong>4.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Acesso à Plataforma pelo Usuário.</span></span>\n    A Plataforma poderá ser acessada pelo Usuário por meio do site “www.ferias.co”. O Usuário poderá ter acesso à Plataforma \n    apenas após o envio das informações dos Usuários pela Associada em que presta serviços, momento em que terá a possibilidade \n    de registrar-se na Plataforma, criando um login e senha de acesso. O Usuário poderá então escolher e adquirir um dos planos \n    de assinatura. As opções de aquisição de planos de assinatura, conforme mencionado acima, bem como as formas de pagamento \n    pelos planos de assinatura, estarão diretamente relacionados às condições contratuais entre a Férias&Co e a Associada a \n    qual o Usuário está vinculado.\n</p>\n<p>A Férias&Co disponibiliza ao seu Usuário uma diversa gama de serviços de viagem e turismo, apresentando uma lista de empresas parceiras. \n</p>\n<p>O Usuário terá um período de carência de 6 (seis) mensalidades antes de utilizar os benefícios de seu plano, iniciando-se a partir do \n    primeiro dia do 7º (sétimo) mês subsequente ao da subscrição e cadastramento, encerrando-se no último dia do 18º (décimo oitavo) mês \n    de pagamento da mensalidade e assim sucessivamente. Tal período de carência apenas será dispensado mediante cadastro dos dados do \n    cartão de crédito e permissão de pagamento de parcelas no caso de rescisão contratual.\n</p><br />\n<p><strong>5.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Tipos de assinatura.</span></span>\n    A Férias&Co disponibiliza ao Usuário cinco (5) tipos de planos de benefícios para assinatura: Padrão, Superior, Premium, Especial e Exclusivo:\n</p>\n<p>\n    A Férias&Co reserva-se ao direito de alterar a cobertura dos planos acima mencionados, bem como de criar e remover categorias de planos. \n    ESTA SEÇÃO CONTÉM UMA BREVE DESCRIÇÃO DOS BENEFÍCIOS INCLUÍDOS EM CADA PLANO. O USUÁRIO DEVERÁ LER COM ATENÇÃO, NO MOMENTO DA CONTRATAÇÃO \n    E/OU DA UTILIZAÇÃO DE BENEFÍCIOS AS RESTRIÇÕES E OS REQUISITOS RELACIONADOS AO USO DOS BENEFÍCIOS. A FÉRIAS&CO. NÃO SE RESPONSABILIZA [\n    PELO USO INADEQUADO DOS BENEFÍCIOS POR PARTE DO USUÁRIO. EM CASO DE EXTINÇÃO DO PLANO, ELE PERMANECERÁ VIGENTE ATÉ COMPLETAR O PERÍODO \n    DE 12 MESES DE SUA AQUISIÇÃO. PASSADO ESSE PERÍODO, CASO O USUÁRIO QUEIRA CONTINUAR A USUFRUIR DOS BENEFÍCIOS, ELE DEVERÁ ESCOLHER UM \n    NOVO PLANO PARA DAR CONTINUIDADE A SUA RELAÇÃO COM A FÉRIAS&CO.\n</p><br />\n<p><strong>6.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Pagamento das assinaturas.</span></span>\n    A aquisição de um dos planos de assinatura disponíveis na Plataforma está sujeita ao pagamento pelo Usuário. A Férias&Co, por padrão, \n    oferece duas formas possíveis de pagamento: (i) o desconto em folha de pagamento, feito diretamente pela Associada; ou (ii) cartão de crédito, \n    por meio de cobrança mensal ao Usuário, estando a duração dos pagamentos vinculada diretamente à vigência do contrato entre a Associada a que o \n    Usuário está vinculado e a Férias&Co. Caso ocorra alguma falha no pagamento por meio de cartão de crédito, a Férias&Co tentará realizar mais \n    outras duas cobranças dentro do período de uma (1) semana, para que o Usuário regularize sua situação. Caso a situação não seja regularizada, \n    sua assinatura será automaticamente cancelada. Para faturamento por cartão de crédito, a Férias&Co utiliza um terceiro processador de pagamentos. \n    O processamento de tais pagamentos estará sujeito aos termos, às condições e às políticas de privacidade da empresa responsável por processar o \n    pagamento, além destes Termos. A Férias&Co não será responsável por erros cometidos pelo por esse terceiro. Além disso, a Férias&Co se reserva o \n    direito de corrigir quaisquer erros ou enganos cometidos no processo de faturamento mesmo que o pagamento já tenha sido solicitado ou recebido. \n    A Férias&Co não é responsável por quaisquer impostos que possam se aplicar à aquisição de Assinaturas ou sobre os produtos e serviços fornecidos. \n    Uma vez contratado, o plano será anual e seu pagamento será dividido em 12 parcelas mensais e estará sujeito à renovação automática por iguais \n    períodos de tempo.\n</p><br />\n<p><strong>7.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Cancelamento dos planos de assinatura:</span></span>\nCaso o Usuário pretenda o cancelamento de seu plano sem que tenha utilizado as diárias proporcionais aos valores pagos, o mesmo terá direito a recebê-las de \nforma proporcional ao valor pago, comprometendo-se a utilizar as referidas diárias durante a vigência do plano contratado. Caso o Usuário não se interesse \npela conversão dos valores pagos em diárias, poderá optar em receber o valor pago com a retenção do percentual de 20% a título de taxa administrativa. Para \nos casos em que o uso de diárias for maior que o pagamento efetuado, será necessário para o cancelamento o pagamento proporcional as diárias utilizadas. Para \nos casos de cancelamento com uso integral de seu plano, fica obrigado o Usuário a efetuar o pagamento de todas as parcelas restantes do plano contratado.\n</p><br />\n<p><strong>7.1</strong> <span class=\"underline-text\"><span class=\"italic-text\">Desligamento do Usuário e Associada:</span></span>\nPara os casos de desligamento entre Usuário e Associada, os planos que tiveram utilização total somente poderão ser cancelados após o pagamento integral das \nparcelas remanescentes. Nesse cenário, é facultado aos Usuários manterem seus planos ativos até o final do período aquisitivo, assumindo o pagamento integral \nda mensalidade por meio de cartão de crédito, que deverá ser informado no portal Férias&Co. Para os casos de desligamento sem que o usuário tenha utilizado as \ndiárias proporcionais aos valores pagos, o mesmo terá direito a recebê-las de forma proporcional ao valor pago, comprometendo-se a utilizar referidas diárias \ndurante a vigência do plano contratado, sob pena de desistência da utilização das diárias. Para os casos de desligamento com a utilização superior ao valor \npago, será cobrado o valor proporcional de uso das diárias pelo Usuário o qual assume o valor integral das mensalidades restantes através de pagamento via \ncartão de crédito cadastrado na plataforma. Poderá o Usuário, caso faça esta opção, assumir o pagamento integral do restante das mensalidades para utilização \ntotal do plano contratado. Já para os casos de desligamento sem a utilização do plano contratado, será liberado na plataforma as diárias proporcionais aos \nvalores pagos para utilização, tendo a possibilidade, também, de o Usuário assumir o pagamento integral do restante das mensalidades por meio de cartão de \ncrédito para utilização total do plano contratado durante sua vigência. Caso o Usuário não se interesse pela conversão dos valores pagos em diárias ou o \npagamento complementar do plano para uso integral das diárias contratadas, poderá optar em receber o valor pago com a retenção do percentual de 20% a título \nde taxa administrativa.\n<br><br>\nMensalidade integral do plano atualizada para os casos de desligamento entre Usuário e Associada até o final do período aquisitivo: R$ 158,00.\n</p><br>\n<p><strong>7.2</strong> <span class=\"underline-text\"><span class=\"italic-text\">Violação ao Termo de Uso:</span></span>\nPara o caso de cancelamento do plano de assinatura por violação aos Termos de Uso, o Usuário não fará jus a nenhum tipo de reembolso das quantias já pagas e \ndeverá pagar imediatamente os valores pendentes, caso tenha utilizado algum benefício de seu plano de assinaturas.\n</p><br />\n<p><strong>8.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Segurança do Usuário.</span></span>\n    A Férias&Co empreende e sempre empreenderá seus melhores esforços para garantir uma experiência agradável e segura da Plataforma para o Usuário. \n    Para garantir que um acesso seguro, recomenda-se ao Usuário que não entregue sua senha a ninguém, sendo de sua inteira responsabilidade manter \n    e manter todos os nomes de usuários e senhas confidenciais. Além disso, o Usuário é o único responsável por todas e quaisquer atividades que \n    ocorram em sua conta e será o único responsável por todo o uso de sua conta e senha e todos os danos diretos e indiretos resultantes da não \n    observância de referido requisito de segurança. O Usuário deverá notificar à Férias&Co imediatamente sobre qualquer uso não autorizado de \n    qualquer conta ou qualquer outra violação de segurança. A Férias&Co não pode e não será responsável por qualquer perda ou dano decorrente da \n    falha do Usuário em cumprir com estes requisitos.\n</p><br />\n<p><strong>9.</strong> <span class=\"underline-text\"><span class=\"italic-text\">\nVeracidade das informações fornecidas pelo Usuário e pelas Associadas.</span></span>\n    O Usuário se compromete a fornecer informações verdadeiras, exatas, atuais e completas quando de seu cadastramento para uso da Plataforma, \n    bem como a manter sempre atualizadas as referidas informações, seja junto da Plataforma ou junto à Associada que está vinculado. O fornecimento \n    de informação falsa ou a utilização indevida de dados de terceiros constitui crime tipificado pelo Código Penal Brasileiro. \n    A FÉRIAS&CO NÃO VERIFICA OU ASSUME QUALQUER RESPONSABILIDADE QUANTO À CONFIABILIDADE, EXATIDÃO, VALIDADE, ATUALIDADE, UTILIDADE, \n    INTEGRIDADE, PERTINÊNCIA, OPORTUNIDADE OU ABRANGÊNCIA DAS INFORMAÇÕES INSERIDAS PELO USUÁRIO OU PELAS ASSOCIADAS NA PLATAFORMA. \n    TODAS AS INFORMAÇÕES RELATIVAS AO CADASTRO DOS USUÁRIOS NA PLATAFORMA, TANTO SEUS DADOS PESSOAIS, COMO OUTROS DADOS E INFORMAÇÕES \n    QUE A PLATAFORMA PERMITE ARMAZENAR E GERENCIAR, SERÃO INSERIDAS NA PLATAFORMA PELO USUÁRIO OU PELAS ASSOCIADAS SOB SUA EXCLUSIVA \n    RESPONSABILIDADE.\n</p><br />\n<p><strong>10.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Privacidade do Usuário.</span></span>\n    A Política de Privacidade da Plataforma explicita de que maneira são tratadas as informações pessoais dos Usuários e como sua privacidade \n    é protegida, quando da utilização da Plataforma. O acesso à Política de Privacidade está <a href=\"assets/documents/ferias-e-co-politica-de-privacidade2019-11-22_v2.pdf\" target=\"_blank\">disponível no pdf</a>.\n</p><br />\n<p><strong>11.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Links a sites de terceiros.</span></span>\n    Nosso site pode conter links externos para outros sites detidos por terceiros que não são detidos ou controlados pela Férias&Co. \n    A Férias&Co não possui qualquer controle e não assume qualquer responsabilidade pelo conteúdo, políticas de privacidade ou práticas \n    de quaisquer serviços e sites de terceiros. Recomendamos a leitura dos termos e condições e das políticas de privacidade dos \n    sites de terceiros que visitar.\n</p><br />\n<p><strong>12.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Declarações do Usuário.</span></span>\n    O acesso à Plataforma pelos Usuário está diretamente vinculado ao estrito cumprimento destes Termos de Uso. Portanto, ao aceitar estes \n    Termos de Uso, o Usuário declara que: (a) seguirá os Termos de Uso e todas as leis aplicáveis; (b) fornecerá somente informações \n    verdadeiras e precisas; (c) não irá assediar, ameaçar ou abusar de outras pessoas ao usar a Plataforma; (d) não interferirá o uso ou \n    acesso à Plataforma de outros Usuários;(e) não publicará nenhum conteúdo obsceno ou ofensivo a terceiros, bem como discriminatório ou \n    preconceituoso por motivos de raça, gênero, orientação sexual, religião, entre outros; (f) não publicará nenhum conteúdo calunioso, \n    difamatório ou injurioso, ou que invada a privacidade alheia; (g) não coletará ou armazenará informações pessoais identificáveis \n    sobre quaisquer terceiros na Plataforma, ou perseguir de outra forma, contatar indevidamente ou assediar qualquer Usuário; (h) não \n    postará nenhum conteúdo que contenha vírus, bots, cavalos de Tróia, código nocivo ou outro software ou programa de computador \n    projetado para interromper a funcionalidade da Plataforma, a capacidade dos Usuários de desfrutar da Plataforma ou o funcionamento \n    adequado de qualquer software, hardware ou equipamento ou materiais utilizados em conexão com a Plataforma; (i) não usará nenhuma \n    informação na Plataforma para fins comerciais, exceto quando expressamente autorizado pela Férias & Co; (j) não pesquisará, ligará ou \n    vinculará nenhum dado ou informação a ou por meio da Plataforma sem o expresso consentimento e autorização da Férias & Co; e (k) não \n    enviará qualquer publicidade não solicitada, informações promocionais, e-mail ou outras solicitações em massa (incluindo, sem limitação, \n    lixo eletrônico, \"spam\", cartas em cadeia ou esquemas de pirâmide de qualquer tipo) a qualquer pessoa através do uso da Plataforma. \n    Caso alguma dessas diretrizes sejam definidas acima ou qualquer outro aspecto destes Termos de Uso, reservamos o direito de suspender \n    ou rescindir os direitos de uso da Plataforma sem aviso prévio.\n</p><br />\n<p><strong>13.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Consequências das violações aos Termos de Uso pelo Usuário.</span></span>\n    Sem prejuízo de outras medidas que entender cabíveis, a Férias&Co poderá advertir, suspender ou cancelar, temporária ou definitivamente, \n    o cadastro do Usuário, a qualquer tempo, iniciando as ações legais cabíveis e/ou suspendendo a execução destes Termos se o Usuário não \n    cumprir qualquer dispositivo aqui previsto. A Férias&Co ainda poderá tomar tais medidas se não puder ser verificada a identidade do \n    Usuário ou caso qualquer informação fornecida por ele esteja incorreta.\n</p><br />\n<p><strong>14.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Interrupções no uso da Plataforma.</span></span>\n    O USO DA PLATAFORMA ESTÁ SUJEITO A INTERRUPÇÕES, ATRASOS E PROBLEMAS INERENTES AO USO DA INTERNET E OUTROS TIPOS DE COMUNICAÇÃO ELETRÔNICA. \n    A FÉRIAS&CO NÃO SERÁ RESPONSÁVEL POR QUALQUER DESSAS INTERRUPÇÕES, ATRASOS OU PROBLEMAS, NEM POR EVENTUAIS DEFEITOS OU LIMITAÇÕES DOS \n    EQUIPAMENTOS OU DO BROWSER UTILIZADOS PELO USUÁRIO OU AINDA POR EVENTUAIS DEFEITOS OU LIMITAÇÕES DOS SERVIÇOS DE PROVIMENTO E INFRA-ESTRUTURA \n    DE ACESSO À INTERNET CONTRATADOS PELO USUÁRIO.\n</p><br />\n<p><strong>15.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Responsabilidade da Férias&Co perante atos de terceiros:</span></span>\n    O USUÁRIO DECLARA, ACEITA E RECONHECE QUE A FÉRIAS&CO NÃO POSSUI HOTÉIS, COMPANHIAS DE TRANSPORTE AÉREO, FERROVIÁRIO, MARINHO OU TERRESTRE E NÃO PRESTA \n    SERVIÇOS DE HOTELARIA OU DE TRANSPORTE AÉREO, FERROVIÁRIO, MARINHO OU TERRESTRE, SENDO TAIS SERVIÇOS PRESTADOS EXCLUSIVAMENTE PELOS PARCEIROS CREDENCIADOS \n    CONSTANTES DA PLATAFORMA E TAIS PARCEIROS CREDENCIADOS SÃO E SERÃO, PERANTE TODOS OS USUÁRIOS, INTEGRAL, ÚNICA E EXCLUSIVAMENTE RESPONSÁVEIS PELOS SERVIÇOS \n    PRESTADOS POR CADA UM DELES E SUAS CONSEQUÊNCIAS NOS TERMOS DA LEI, ESPECIALMENTE DA LEI Nº 10.406/2002 (CÓDIGO CIVIL) E DA LEI Nº 8.078/1990 (CÓDIGO DE \n    DEFESA DO CONSUMIDOR). A FÉRIAS&CO. NÃO PRESTA DECLARAÇÕES OU ASSUME QUALQUER OBRIGAÇÃO EM NOME, BENEFÍCIO OU PELOS PARCEIROS CREDENCIADOS QUE POSSAM SER \n    ACESSADOS NA PLATAFORMA.\n</p><br />\n<p><strong>16.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Licença limitada de uso à Plataforma.</span></span>\n    A Férias&Co concede ao Usuário uma licença limitada, não exclusiva e intransferível para utilizar a Plataforma de acordo com estes Termos de Uso.\n</p><br />\n<p><strong>17.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Propriedade intelectual da Férias&Co.</span></span>\n    Os Usuários reconhecem e concordam que a Férias&Co é a exclusiva titular de todos os direitos autorais e de propriedade intelectual relacionados \n    à Plataforma, e que tais direitos são protegidos pela Lei n.º 9.609, de 19 de fevereiro de 1998, e demais normas aplicáveis. O aceite aos presentes \n    Termos de Uso não implica a cessão ou transferência ao Usuário ou às Associadas de quaisquer direitos relativos à Plataforma, salvo aqueles direitos \n    expressamente previstos nestes Termos de Uso, observadas as limitações e demais condições aqui estabelecidas. É expressamente vedado aos Usuários \n    modificar ou tentar modificar qualquer funcionalidade da Plataforma. Além disso, o Usuário concorda em não reproduzir, duplicar, copiar, vender, \n    revender ou explorar qualquer parte das informações e conteúdo da Plataforma, bem como se obriga a utilizar a Plataforma de forma lícita e para as \n    finalidades autorizadas, sendo vedada a reprodução, distribuição, transformação, comercialização ou modificação, sem a prévia e expressa autorização \n    da Férias&Co, bem como fica vedado o fornecimento de login e senha para terceiros. O nome comercial Férias & Co., a marca Férias & Co., e os produtos \n    associados a essa marca são de exclusiva titularidade da Férias&Co e outras empresas de seu grupo econômico, não assistindo aos Usuários quaisquer \n    direitos eles relacionados. Nenhuma disposição destes Termos de Uso será interpretada como concessão aos Usuários de qualquer direito, título ou \n    interesse em qualquer propriedade intelectual da Férias&Co.\n</p><br />\n<p><strong>18.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Disponibilidade da Plataforma.</span></span>\n    A FÉRIAS&CO EMPREENDERÁ SEUS MELHORES ESFORÇOS PARA QUE A PLATAFORMA ESTEJA DISPONÍVEL 99,9% DO TEMPO. CONTUDO, A PLATAFORMA PODERÁ ESTAR INACESSÍVEL \n    EM MOMENTOS DE MANUTENÇÃO PREVENTIVA E DE MANUTENÇÃO DE QUAISQUER ERROS OU FALHAS. A FÉRIAS&CO NÃO ASSEGURA A IMPOSSIBILIDADE DO SEU SISTEMA E \n    SERVIDORES PODEREM SER ATACADOS, INVADIDOS, MODIFICADOS OU LESADOS, DE QUALQUER FORMA, POR TERCEIROS.\n</p><br />\n<p><strong>19.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Limitação de Responsabilidade.</span></span>\n    A FÉRIAS&CO NÃO SERÁ RESPONSÁVEL (I) PELA QUALIDADE OU DISPONIBILIDADE DA CONEXÃO DO DISPOSITIVO DO USUÁRIO À INTERNET EM QUALQUER CIRCUNSTÂNCIA; \n    (II) PELA IMPOSSIBILIDADE DE UTILIZAÇÃO DE QUAISQUER INFORMAÇÕES OU SERVIÇOS DISPONIVEIS EM RAZÃO DA INCOMPATIBILIDADE DA CONFIGURAÇÃO TÉCNICA DE \n    CONEXÃO DOS USUÁRIOS; E (III) POR QUAISQUER DANOS SOFRIDOS PELOS USUÁRIOS EM RAZÃO DA UTILIZAÇÃO DA PLATAFORMA DE FORMA DIVERSA DA ESTABELECIDA \n    NESTES TERMOS DE USO. \n</p><br />\n<p><strong>20.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Modificações aos Termos de Uso.</span></span>\n    A Férias&Co poderá, a seu exclusivo critério, realizar quaisquer modificações e/ou adições aos presentes Termos de Uso. Em caso de modificação \n    destes Termos de Uso, a Férias&Co irá disponibilizar um aviso na Plataforma e os novos Termos de Uso entrarão imediatamente em vigor, salvo na \n    hipótese em que as alterações sejam substanciais, hipótese em que podemos pedir uma nova manifestação de aquiescência. Salvo nessa última hipótese, \n    o acesso e utilização da Plataforma após a publicação das alterações representa a aceitação integral e incondicional aos novos Termos de Uso.\n</p><br />\n<p><strong>21.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Validade e eficácia dos Termos de Uso.</span></span>\n    A nulidade ou invalidade de qualquer cláusula destes Termos de Uso não prejudicará a validade e eficácia das demais cláusulas e dos próprios Termos de Uso.\n</p><br />\n<p><strong>22.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Lei aplicável e Foro.</span></span>\n    Os presentes Termos de Uso são regidos pelas leis da República Federativa do Brasil e fica eleito o foro da Capital do Estado de São Paulo, \n    com exclusão de qualquer outro, por mais privilegiado que seja ou possa vir a ser, para dirimir quaisquer litígios ou controvérsias oriundas \n    dos presentes Termos de Uso.\n</p><br />\n<p><strong>23.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Limitação de Responsabilidade.</span></span>\n    Quaisquer dúvidas, críticas, sugestões e /ou reclamações poderão ser feitas pelo e-mail “contato@ferias.co”.\n</p><br />\n",
                    "termoDesconto" : "\n        <p>Pelo presente Termo de Adesão e Autorização de Débito em Folha de Pagamento, o signatário da presente\n        autoriza expressamente a Empresa, acima identificada, a realizar a retenção e desconto mensal, em folha\n        de pagamento, do valor contratado por mim a título de plano de assinaturas do Programa Férias & Co.,\n        conforme opção de assinatura por mim realizada diretamente na plataforma do Programa Férias & Co.,\n        mediante utilização do meu <span class=\"italic-text\">login</span> e senha pessoal, inclusive em caso de\n        renovação ou alteração das\n        condições do plano de assinatura, não sendo necessário para tanto qualquer aditamento a este\n        instrumento.</p><br />\n\n      <p>Ao assinar este instrumento, declaro ainda que (<span class=\"underline-text\">i</span>) sou plenamente\n        capaz de compreender as condições do\n        plano de assinaturas a que aderi, sou civilmente capaz e tenho condições jurídicas e financeiras de\n        cumprir as obrigações por mim assumidas; e (<span class=\"underline-text\">ii</span>) este instrumento é\n        devidamente assinado e formalizado e\n        constitui obrigação válida e vinculante, exequível de acordo com os termos e condições aqui previstos.\n      </p><br />\n\n      <p>Expressamente declaro ainda, estar ciente:</p><br />\n\n\n      <div class=\"topics\">\n        <p>\n          <li>\n            Dos termos, condições de uso e política do Férias&Co. disponíveis para consulta na plataforma\n            “Férias & Co”, à qual tenho acesso por meio de senha e login pessoais e individualizados;\n          </li>\n\n        </p><br />\n        <p>\n          <li>\n            Que a adesão ao programa Férias&Co., bem como a qualquer dos planos de assinatura, é opcional\n            e deve ser formalizada com o preenchimento e assinatura deste Termo de Adesão e Autorização de Débito em\n            Folha de\n            Pagamento;\n          </li>\n        </p><br />\n        <p>\n          <li>\n            Que a adesão ao programa Férias&Co., seu prazo, termos e condições constam dos Termos de\n            Uso, Política de Privacidade e demais políticas, termos e condições constantes da Plataforma, aos\n            quais aderi ao efetuar a contratação do meu plano de assinaturas e que me obrigo a cumprir\n            irrestritamente, sob pena de rescisão do meu plano de assinatura “Férias & Co”, além das demais\n            penalidades aplicáveis previstas em Lei;\n          </li>\n        </p><br />\n        <p>\n          <li>\n            Que o <span class=\"italic-text\">login</span> e senha de acesso à plataforma Férias&Co. são pessoais e\n            intransferíveis, de forma\n            que assumo total responsabilidade caso eu transmita a qualquer terceiro tais dados;\n          </li>\n        </p><br />\n\n        <p>\n          <li>\n            Que inexiste qualquer relação entre a contratação de parceiros credenciados ao Férias&Co e o\n            exercício das minhas atividades ou vínculo empregatício junto à Empresa e que as condições\n            especiais oferecidas pelo programa Férias&Co. não possuem caráter remuneratório ou de benefício;\n          </li>\n        </p><br />\n\n        <p>\n          <li>\n            Que o Férias&Co. não possui hotéis ou empresas de transporte aéreo ou terrestre e não presta\n            serviços de hotelaria ou de transporte aéreo ou terrestre, sendo os parceiros credenciados exclusiva\n            e integralmente responsáveis, nos termos da Lei, pelos serviços por elas prestados. O serviço a ser\n            fornecido pela Férias&Co. limita-se ao acesso à plataforma “Férias & Co” e à intermediação do\n            signatários com os parceiros credenciados nela constantes, não sendo a Férias & Co. obrigada a\n            executar os serviços de turismo que forem contratados pelo signatário diretamente com o parceiro\n            credenciado, nem é a Contratada responsável por falhas, seja do signatário ou do parceiro\n            credenciado, em uma contratação;\n          </li>\n        </p><br />\n\n        <p>\n          <li>\n            Que o acesso à Plataforma requerer acesso à internet em condições técnicas compatíveis às\n            exigidas pela Plataforma. Ademais, por se tratar de serviço oferecido online, o Férias & Co. está\n            sujeito a eventuais interrupções, suspensões ou bugs temporários, que poderão ou não ser sanáveis\n            pela Contratada ou seus prestadores de serviços, sem que isto justifique a rescisão deste Contrato\n            ou revisão de seus termos e condições;\n          </li>\n        </p><br />\n\n        <p>\n          <li>\n            Que a cada renovação do plano de assinaturas contratado por mim, os planos de assinaturas\n            disponíveis, seu preço, termos e condições e os serviços correspondentes oferecidos pela Férias &\n            Co poderão ser alterados, adicionados, excluídos ou complementados, a critério da Férias & Co.\n            Alterações dos termos e condições de um plano de assinaturas no curso de seu prazo de contratação\n            requererão adesão do signatário para serem implementadas e válidas.\n          </li>\n        </p><br />\n\n        <p>\n          <li>\n            Que minha assinatura poderá ser cancelada por decisão individual minha, da Férias & Co ou da\n            Empresa, observados os Termos de Uso da Plataforma e as condições de transição em caso de\n            rescisão, conforme constantes da Plataforma.\n          </li>\n        </p><br />\n      </div>\n\n      <p> Este instrumento é regido e será interpretado de acordo com as Leis da República Federativa do Brasil.\n        As Partes elegem o foro de [São Paulo, Estado de São Paulo], para dirimir quaisquer questões oriundas do\n        presente Contrato, renunciando a qualquer outro, por mais privilegiado que seja.\n      </p>\n"
                },
                "dataConfirmacaoAdesao" : null,
                "periodo" : 2
            }
        ],
        "dataCriacao" : ISODate("2020-01-13T18:32:21.068Z"),
        "dataAtualizacao" : ISODate("2020-11-24T13:29:32.271Z"),
        "dataDelecao" : null,
        "endereco" : null,
        "aceitaContatoWhatsapp" : false,
        "carteira" : {
            "pontos" : {
                "saldo" : NumberDecimal("0"),
                "quantidadePendente" : NumberDecimal("0"),
                "pontosAcumulados" : [],
                "historicoTransacaoPontos" : []
            },
            "diarias" : {
                "historicoTransacaoDiarias" : [ 
                    {
                        "_id" : UUID("0d0e41b8-1e2f-4eb0-a06c-29851d6615da"),
                        "quantidade" : NumberDecimal("7"),
                        "status" : "Confirmado",
                        "origem" : "Reserva",
                        "descricao" : "Débito referente a reserva do Hotel Paradiso Corporate (Cabo Frio, Rio de Janeiro, Brasil)",
                        "codigoReferenciaOrigem" : "CA070151020222684D",
                        "tipoTransacao" : "Debito",
                        "tipoMovimento" : "Debito",
                        "idReferenciaTransacao" : [],
                        "dataRegistro" : ISODate("2020-10-16T01:26:00.179Z"),
                        "dataAtualizacao" : null,
                        "tipoCredito" : "Diarias",
                        "idPlano" : UUID("7077243c-c72f-4f2d-8f2d-7b1ccafe1e6a"),
                        "pontosUtilizados" : null
                    }, 
                    {
                        "_id" : UUID("4c4999a7-4363-4502-a470-2007c1b2abb3"),
                        "quantidade" : 7.0,
                        "status" : "Confirmado",
                        "origem" : "Renovação",
                        "descricao" : "Renovação Automática do Seu Plano",
                        "codigoReferenciaOrigem" : null,
                        "tipoTransacao" : "Credito",
                        "tipoMovimento" : "Credito",
                        "idReferenciaTransacao" : [],
                        "dataRegistro" : ISODate("2021-01-18T12:58:15.407Z"),
                        "dataAtualizacao" : null,
                        "tipoCredito" : "Diarias",
                        "idPlano" : UUID("7077243c-c72f-4f2d-8f2d-7b1ccafe1e6a"),
                        "planoPeriodo" : 2.0,
                        "pontosUtilizados" : null
                    }
                ]
            }
        }
    },
	{
		"_id" : ObjectId("60ab7be24bc0cb8a293602aa"),
		"id" : "79464696087",
		"nome" : "Michel Teste Indicador PtConfirmado",
		"dataNascimento" : ISODate("1981-05-20T00:00:00.000Z"),
		"cpf" : "79464696087",
		"celular" : "11968775432",
		"emailPessoal" : "michelteste.indicador@gmail.com",
		"empresas" : [ 
			{
				"_id" : "10782454000115",
				"nomeFantasia" : "RDC FÉRIAS ME",
				"razaoSocial" : "RDC VIAGENS E TURISMO LTDA – ME (MATRIZ)",
				"segmento" : "Agências de viagens",
				"empresaProprietariaId" : "10782454000115",
				"site" : "http://www.rdcferias.com.br",
				"tipo" : null,
				"coparticipacao" : NumberDecimal("90"),
				"ativo" : true,
				"centroCusto" : "",
				"grupoOrganizacional" : "",
				"cnpj" : "10782454000115",
				"colaboradorRh" : {
					"telefone" : "",
					"ramal" : "",
					"emailCorporativo" : "michelteste.indicador@rdcviagens.com.br",
					"matricula" : "",
					"descontoFolha" : true,
					"cargo" : "",
					"area" : "",
					"departamento" : "",
					"coparticipacao" : null
				},
				"dataCriacao" : ISODate("2020-03-11T21:08:36.011Z"),
				"dataAtualizacao" : ISODate("2020-03-11T21:08:36.015Z"),
				"dataDelecao" : null
			}
		],
		"planos" : [ 
			{
				"_id" : UUID("005d9991-e7c7-49ff-a617-fa3ce1bad9e5"),
				"empresaId" : "10782454000115",
				"titulo" : "Hotéis de 3 e 4 estrelas",
				"tipoPlano" : "Padrão",
				"valorPlano" : "90",
				"diariasTotais" : 4,
				"diariasDisponiveis" : 0,
				"valorDiariaMinima" : "0.01",
				"valorDiariaMaxima" : "216",
				"vigencia" : ISODate("2023-02-16T17:53:52.841Z"),
				"ativo" : true,
				"dataAdesao" : ISODate("2021-02-16T17:53:52.841Z"),
				"status" : "Ativo",
				"billing" : null,
				"fingerprint" : {
					"timestamp" : ISODate("2021-02-16T17:53:52.841Z"),
					"servidor" : "172.17.0.3",
					"geolocalizacao" : ";",
					"userAgent" : "Amazon CloudFront",
					"ip" : "181.191.198.135, 130.176.151.162, 10.42.2.162",
					"termoUso" : "\n<p>Seja bem-vindo à Férias & Co, sua plataforma de benefícios de viagens (“<span class=\"underline-text\">Plataforma</span>”).</p>\n<p>Por favor, leia atentamente os termos e condições abaixo estipulados (“<span class=\"underline-text\">Termos de Uso</span>”) \n    para utilizar a Plataforma e todos os serviços disponibilizados de maneira adequada.</p>\n<p><strong>CASO NÃO CONCORDE COM QUAISQUER DISPOSITIVOS DOS TERMOS DE USO, NÃO ACESSE OU UTILIZE \n    A NOSSA PLATAFORMA. SEU ACESSO E UTILIZAÇÃO REPRESENTAM SUA ACEITAÇÃO INTEGRAL E INCONDICIONAL \n    AOS TERMOS DE USO. \n    A <a href=\"assets/documents/ferias-e-co-politica-de-privacidade2019-11-22_v2.pdf\" target=\"_blank\">POLÍTICA DE PRIVACIDADE</a> \n    INTEGRA OS PRESENTES TERMOS DE USO. ESTA PLATAFORMA É DIRECIONADA APENAS PARA MAIORES DE 18 ANOS DE IDADE. \n    SE VOCÊ POSSUI MENOS DE 18 ANOS, POR FAVOR, CESSE IMEDIATAMENTE O ACESSO À PLATAFORMA.</strong>\n</p><br />\n<p><strong>1.</strong> <span class=\"underline-text\">Finalidade da Plataforma.</span> \n    A Plataforma tem a finalidade de proporcionar a colaboradores de empresas \n    associadas (“Associadas”) à Férias&Co a possibilidade de adquirir um plano de assinatura de benefícios \n    de viagem, sendo os colaboradores das Associadas os usuários finais (“Usuários”) da Plataforma. Por \n    meio da Plataforma, os Usuários podem adquirir um dos planos de assinaturas disponíveis, de acordo com \n    as configurações e contratações entre a Associada que o cadastrou inicialmente e a Férias&Co. Após a \n    aquisição de um dos planos de assinatura, o Usuário poderá contratar os serviços relacionados a viagem \n    e turismo disponíveis na Plataforma, tais como a reserva de hotéis, passagens aéreas, entre outros, \n    conforme aplicável. \n</p><br />\n<p><strong>2.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Controle e desenvolvimento da Plataforma.</span></span>\n    A Plataforma é controlada e desenvolvida pela <strong>FERIAS & CO. VIAGENS E TURISMO LTDA. (“Férias&Co”)</strong>, \n    pessoa jurídica inscrita no CNPJ/MF sob o nº 34.008.403/0001-07, com sede na Rua Manoel Coelho, 600 cj 211, Centro, \n    na cidade de São Caetano do Sul, Estado de São Paulo.\n</p><br />\n<p><strong>3.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Uso da Plataforma.</span></span> \n    O uso da Plataforma será efetuado exclusivamente através do acesso à rede mundial de computadores (Internet). \n    Para tanto, os Usuários deverão estar providos dos equipamentos necessários e apropriados, de acordo com as \n    especificações técnicas necessárias para o funcionamento da Plataforma, tais como computador com programa de \n    navegação (browser) devidamente instalado e licenciado, modem, bem como dos serviços de provimento e \n    infraestrutura de acesso à Internet.\n</p><br />\n<p><strong>4.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Acesso à Plataforma pelo Usuário.</span></span>\n    A Plataforma poderá ser acessada pelo Usuário por meio do site “www.ferias.co”. O Usuário poderá ter acesso à Plataforma \n    apenas após o envio das informações dos Usuários pela Associada em que presta serviços, momento em que terá a possibilidade \n    de registrar-se na Plataforma, criando um login e senha de acesso. O Usuário poderá então escolher e adquirir um dos planos \n    de assinatura. As opções de aquisição de planos de assinatura, conforme mencionado acima, bem como as formas de pagamento \n    pelos planos de assinatura, estarão diretamente relacionados às condições contratuais entre a Férias&Co e a Associada a \n    qual o Usuário está vinculado.\n</p>\n<p>A Férias&Co disponibiliza ao seu Usuário uma diversa gama de serviços de viagem e turismo, apresentando uma lista de empresas parceiras. \n</p>\n<p>O Usuário terá um período de carência de 6 (seis) mensalidades antes de utilizar os benefícios de seu plano, iniciando-se a partir do \n    primeiro dia do 7º (sétimo) mês subsequente ao da subscrição e cadastramento, encerrando-se no último dia do 18º (décimo oitavo) mês \n    de pagamento da mensalidade e assim sucessivamente. Tal período de carência apenas será dispensado mediante cadastro dos dados do \n    cartão de crédito e permissão de pagamento de parcelas no caso de rescisão contratual.\n</p><br />\n<p><strong>5.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Tipos de assinatura.</span></span>\n    A Férias&Co disponibiliza ao Usuário cinco (5) tipos de planos de benefícios para assinatura: Padrão, Superior, Premium, Especial e Exclusivo:\n</p>\n<p>\n    A Férias&Co reserva-se ao direito de alterar a cobertura dos planos acima mencionados, bem como de criar e remover categorias de planos. \n    ESTA SEÇÃO CONTÉM UMA BREVE DESCRIÇÃO DOS BENEFÍCIOS INCLUÍDOS EM CADA PLANO. O USUÁRIO DEVERÁ LER COM ATENÇÃO, NO MOMENTO DA CONTRATAÇÃO \n    E/OU DA UTILIZAÇÃO DE BENEFÍCIOS AS RESTRIÇÕES E OS REQUISITOS RELACIONADOS AO USO DOS BENEFÍCIOS. A FÉRIAS&CO. NÃO SE RESPONSABILIZA [\n    PELO USO INADEQUADO DOS BENEFÍCIOS POR PARTE DO USUÁRIO. EM CASO DE EXTINÇÃO DO PLANO, ELE PERMANECERÁ VIGENTE ATÉ COMPLETAR O PERÍODO \n    DE 12 MESES DE SUA AQUISIÇÃO. PASSADO ESSE PERÍODO, CASO O USUÁRIO QUEIRA CONTINUAR A USUFRUIR DOS BENEFÍCIOS, ELE DEVERÁ ESCOLHER UM \n    NOVO PLANO PARA DAR CONTINUIDADE A SUA RELAÇÃO COM A FÉRIAS&CO.\n</p><br />\n<p><strong>6.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Pagamento das assinaturas.</span></span>\n    A aquisição de um dos planos de assinatura disponíveis na Plataforma está sujeita ao pagamento pelo Usuário. A Férias&Co, por padrão, \n    oferece duas formas possíveis de pagamento: (i) o desconto em folha de pagamento, feito diretamente pela Associada; ou (ii) cartão de crédito, \n    por meio de cobrança mensal ao Usuário, estando a duração dos pagamentos vinculada diretamente à vigência do contrato entre a Associada a que o \n    Usuário está vinculado e a Férias&Co. Caso ocorra alguma falha no pagamento por meio de cartão de crédito, a Férias&Co tentará realizar mais \n    outras duas cobranças dentro do período de uma (1) semana, para que o Usuário regularize sua situação. Caso a situação não seja regularizada, \n    sua assinatura será automaticamente cancelada. Para faturamento por cartão de crédito, a Férias&Co utiliza um terceiro processador de pagamentos. \n    O processamento de tais pagamentos estará sujeito aos termos, às condições e às políticas de privacidade da empresa responsável por processar o \n    pagamento, além destes Termos. A Férias&Co não será responsável por erros cometidos pelo por esse terceiro. Além disso, a Férias&Co se reserva o \n    direito de corrigir quaisquer erros ou enganos cometidos no processo de faturamento mesmo que o pagamento já tenha sido solicitado ou recebido. \n    A Férias&Co não é responsável por quaisquer impostos que possam se aplicar à aquisição de Assinaturas ou sobre os produtos e serviços fornecidos. \n    Uma vez contratado, o plano será anual e seu pagamento será dividido em 12 parcelas mensais e estará sujeito à renovação automática por iguais \n    períodos de tempo.\n</p><br />\n<p><strong>7.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Cancelamento dos planos de assinatura:</span></span>\nCaso o Usuário pretenda o cancelamento de seu plano sem que tenha utilizado as diárias proporcionais aos valores pagos, o mesmo terá direito a recebê-las de \nforma proporcional ao valor pago, comprometendo-se a utilizar as referidas diárias durante a vigência do plano contratado. Caso o Usuário não se interesse \npela conversão dos valores pagos em diárias, poderá optar em receber o valor pago com a retenção do percentual de 20% a título de taxa administrativa. Para \nos casos em que o uso de diárias for maior que o pagamento efetuado, será necessário para o cancelamento o pagamento proporcional as diárias utilizadas. Para \nos casos de cancelamento com uso integral de seu plano, fica obrigado o Usuário a efetuar o pagamento de todas as parcelas restantes do plano contratado.\n</p><br />\n<p><strong>7.1</strong> <span class=\"underline-text\"><span class=\"italic-text\">Desligamento do Usuário e Associada:</span></span>\nPara os casos de desligamento entre Usuário e Associada, os planos que tiveram utilização total somente poderão ser cancelados após o pagamento integral das \nparcelas remanescentes. Nesse cenário, é facultado aos Usuários manterem seus planos ativos até o final do período aquisitivo, assumindo o pagamento integral \nda mensalidade por meio de cartão de crédito, que deverá ser informado no portal Férias&Co. Para os casos de desligamento sem que o usuário tenha utilizado as \ndiárias proporcionais aos valores pagos, o mesmo terá direito a recebê-las de forma proporcional ao valor pago, comprometendo-se a utilizar referidas diárias \ndurante a vigência do plano contratado, sob pena de desistência da utilização das diárias. Para os casos de desligamento com a utilização superior ao valor \npago, será cobrado o valor proporcional de uso das diárias pelo Usuário o qual assume o valor integral das mensalidades restantes através de pagamento via \ncartão de crédito cadastrado na plataforma. Poderá o Usuário, caso faça esta opção, assumir o pagamento integral do restante das mensalidades para utilização \ntotal do plano contratado. Já para os casos de desligamento sem a utilização do plano contratado, será liberado na plataforma as diárias proporcionais aos \nvalores pagos para utilização, tendo a possibilidade, também, de o Usuário assumir o pagamento integral do restante das mensalidades por meio de cartão de \ncrédito para utilização total do plano contratado durante sua vigência. Caso o Usuário não se interesse pela conversão dos valores pagos em diárias ou o \npagamento complementar do plano para uso integral das diárias contratadas, poderá optar em receber o valor pago com a retenção do percentual de 20% a título \nde taxa administrativa.\n<br><br>\nMensalidade integral do plano atualizada para os casos de desligamento entre Usuário e Associada até o final do período aquisitivo: R$ 90,00.\n</p><br>\n<p><strong>7.2</strong> <span class=\"underline-text\"><span class=\"italic-text\">Violação ao Termo de Uso:</span></span>\nPara o caso de cancelamento do plano de assinatura por violação aos Termos de Uso, o Usuário não fará jus a nenhum tipo de reembolso das quantias já pagas e \ndeverá pagar imediatamente os valores pendentes, caso tenha utilizado algum benefício de seu plano de assinaturas.\n</p><br />\n<p><strong>8.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Segurança do Usuário.</span></span>\n    A Férias&Co empreende e sempre empreenderá seus melhores esforços para garantir uma experiência agradável e segura da Plataforma para o Usuário. \n    Para garantir que um acesso seguro, recomenda-se ao Usuário que não entregue sua senha a ninguém, sendo de sua inteira responsabilidade manter \n    e manter todos os nomes de usuários e senhas confidenciais. Além disso, o Usuário é o único responsável por todas e quaisquer atividades que \n    ocorram em sua conta e será o único responsável por todo o uso de sua conta e senha e todos os danos diretos e indiretos resultantes da não \n    observância de referido requisito de segurança. O Usuário deverá notificar à Férias&Co imediatamente sobre qualquer uso não autorizado de \n    qualquer conta ou qualquer outra violação de segurança. A Férias&Co não pode e não será responsável por qualquer perda ou dano decorrente da \n    falha do Usuário em cumprir com estes requisitos.\n</p><br />\n<p><strong>9.</strong> <span class=\"underline-text\"><span class=\"italic-text\">\nVeracidade das informações fornecidas pelo Usuário e pelas Associadas.</span></span>\n    O Usuário se compromete a fornecer informações verdadeiras, exatas, atuais e completas quando de seu cadastramento para uso da Plataforma, \n    bem como a manter sempre atualizadas as referidas informações, seja junto da Plataforma ou junto à Associada que está vinculado. O fornecimento \n    de informação falsa ou a utilização indevida de dados de terceiros constitui crime tipificado pelo Código Penal Brasileiro. \n    A FÉRIAS&CO NÃO VERIFICA OU ASSUME QUALQUER RESPONSABILIDADE QUANTO À CONFIABILIDADE, EXATIDÃO, VALIDADE, ATUALIDADE, UTILIDADE, \n    INTEGRIDADE, PERTINÊNCIA, OPORTUNIDADE OU ABRANGÊNCIA DAS INFORMAÇÕES INSERIDAS PELO USUÁRIO OU PELAS ASSOCIADAS NA PLATAFORMA. \n    TODAS AS INFORMAÇÕES RELATIVAS AO CADASTRO DOS USUÁRIOS NA PLATAFORMA, TANTO SEUS DADOS PESSOAIS, COMO OUTROS DADOS E INFORMAÇÕES \n    QUE A PLATAFORMA PERMITE ARMAZENAR E GERENCIAR, SERÃO INSERIDAS NA PLATAFORMA PELO USUÁRIO OU PELAS ASSOCIADAS SOB SUA EXCLUSIVA \n    RESPONSABILIDADE.\n</p><br />\n<p><strong>10.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Privacidade do Usuário.</span></span>\n    A Política de Privacidade da Plataforma explicita de que maneira são tratadas as informações pessoais dos Usuários e como sua privacidade \n    é protegida, quando da utilização da Plataforma. O acesso à Política de Privacidade está <a href=\"assets/documents/ferias-e-co-politica-de-privacidade2019-11-22_v2.pdf\" target=\"_blank\">disponível no pdf</a>.\n</p><br />\n<p><strong>11.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Links a sites de terceiros.</span></span>\n    Nosso site pode conter links externos para outros sites detidos por terceiros que não são detidos ou controlados pela Férias&Co. \n    A Férias&Co não possui qualquer controle e não assume qualquer responsabilidade pelo conteúdo, políticas de privacidade ou práticas \n    de quaisquer serviços e sites de terceiros. Recomendamos a leitura dos termos e condições e das políticas de privacidade dos \n    sites de terceiros que visitar.\n</p><br />\n<p><strong>12.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Declarações do Usuário.</span></span>\n    O acesso à Plataforma pelos Usuário está diretamente vinculado ao estrito cumprimento destes Termos de Uso. Portanto, ao aceitar estes \n    Termos de Uso, o Usuário declara que: (a) seguirá os Termos de Uso e todas as leis aplicáveis; (b) fornecerá somente informações \n    verdadeiras e precisas; (c) não irá assediar, ameaçar ou abusar de outras pessoas ao usar a Plataforma; (d) não interferirá o uso ou \n    acesso à Plataforma de outros Usuários;(e) não publicará nenhum conteúdo obsceno ou ofensivo a terceiros, bem como discriminatório ou \n    preconceituoso por motivos de raça, gênero, orientação sexual, religião, entre outros; (f) não publicará nenhum conteúdo calunioso, \n    difamatório ou injurioso, ou que invada a privacidade alheia; (g) não coletará ou armazenará informações pessoais identificáveis \n    sobre quaisquer terceiros na Plataforma, ou perseguir de outra forma, contatar indevidamente ou assediar qualquer Usuário; (h) não \n    postará nenhum conteúdo que contenha vírus, bots, cavalos de Tróia, código nocivo ou outro software ou programa de computador \n    projetado para interromper a funcionalidade da Plataforma, a capacidade dos Usuários de desfrutar da Plataforma ou o funcionamento \n    adequado de qualquer software, hardware ou equipamento ou materiais utilizados em conexão com a Plataforma; (i) não usará nenhuma \n    informação na Plataforma para fins comerciais, exceto quando expressamente autorizado pela Férias & Co; (j) não pesquisará, ligará ou \n    vinculará nenhum dado ou informação a ou por meio da Plataforma sem o expresso consentimento e autorização da Férias & Co; e (k) não \n    enviará qualquer publicidade não solicitada, informações promocionais, e-mail ou outras solicitações em massa (incluindo, sem limitação, \n    lixo eletrônico, \"spam\", cartas em cadeia ou esquemas de pirâmide de qualquer tipo) a qualquer pessoa através do uso da Plataforma. \n    Caso alguma dessas diretrizes sejam definidas acima ou qualquer outro aspecto destes Termos de Uso, reservamos o direito de suspender \n    ou rescindir os direitos de uso da Plataforma sem aviso prévio.\n</p><br />\n<p><strong>13.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Consequências das violações aos Termos de Uso pelo Usuário.</span></span>\n    Sem prejuízo de outras medidas que entender cabíveis, a Férias&Co poderá advertir, suspender ou cancelar, temporária ou definitivamente, \n    o cadastro do Usuário, a qualquer tempo, iniciando as ações legais cabíveis e/ou suspendendo a execução destes Termos se o Usuário não \n    cumprir qualquer dispositivo aqui previsto. A Férias&Co ainda poderá tomar tais medidas se não puder ser verificada a identidade do \n    Usuário ou caso qualquer informação fornecida por ele esteja incorreta.\n</p><br />\n<p><strong>14.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Interrupções no uso da Plataforma.</span></span>\n    O USO DA PLATAFORMA ESTÁ SUJEITO A INTERRUPÇÕES, ATRASOS E PROBLEMAS INERENTES AO USO DA INTERNET E OUTROS TIPOS DE COMUNICAÇÃO ELETRÔNICA. \n    A FÉRIAS&CO NÃO SERÁ RESPONSÁVEL POR QUALQUER DESSAS INTERRUPÇÕES, ATRASOS OU PROBLEMAS, NEM POR EVENTUAIS DEFEITOS OU LIMITAÇÕES DOS \n    EQUIPAMENTOS OU DO BROWSER UTILIZADOS PELO USUÁRIO OU AINDA POR EVENTUAIS DEFEITOS OU LIMITAÇÕES DOS SERVIÇOS DE PROVIMENTO E INFRA-ESTRUTURA \n    DE ACESSO À INTERNET CONTRATADOS PELO USUÁRIO.\n</p><br />\n<p><strong>15.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Responsabilidade da Férias&Co perante atos de terceiros:</span></span>\n    O USUÁRIO DECLARA, ACEITA E RECONHECE QUE A FÉRIAS&CO NÃO POSSUI HOTÉIS, COMPANHIAS DE TRANSPORTE AÉREO, FERROVIÁRIO, MARINHO OU TERRESTRE E NÃO PRESTA \n    SERVIÇOS DE HOTELARIA OU DE TRANSPORTE AÉREO, FERROVIÁRIO, MARINHO OU TERRESTRE, SENDO TAIS SERVIÇOS PRESTADOS EXCLUSIVAMENTE PELOS PARCEIROS CREDENCIADOS \n    CONSTANTES DA PLATAFORMA E TAIS PARCEIROS CREDENCIADOS SÃO E SERÃO, PERANTE TODOS OS USUÁRIOS, INTEGRAL, ÚNICA E EXCLUSIVAMENTE RESPONSÁVEIS PELOS SERVIÇOS \n    PRESTADOS POR CADA UM DELES E SUAS CONSEQUÊNCIAS NOS TERMOS DA LEI, ESPECIALMENTE DA LEI Nº 10.406/2002 (CÓDIGO CIVIL) E DA LEI Nº 8.078/1990 (CÓDIGO DE \n    DEFESA DO CONSUMIDOR). A FÉRIAS&CO. NÃO PRESTA DECLARAÇÕES OU ASSUME QUALQUER OBRIGAÇÃO EM NOME, BENEFÍCIO OU PELOS PARCEIROS CREDENCIADOS QUE POSSAM SER \n    ACESSADOS NA PLATAFORMA.\n</p><br />\n<p><strong>16.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Licença limitada de uso à Plataforma.</span></span>\n    A Férias&Co concede ao Usuário uma licença limitada, não exclusiva e intransferível para utilizar a Plataforma de acordo com estes Termos de Uso.\n</p><br />\n<p><strong>17.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Propriedade intelectual da Férias&Co.</span></span>\n    Os Usuários reconhecem e concordam que a Férias&Co é a exclusiva titular de todos os direitos autorais e de propriedade intelectual relacionados \n    à Plataforma, e que tais direitos são protegidos pela Lei n.º 9.609, de 19 de fevereiro de 1998, e demais normas aplicáveis. O aceite aos presentes \n    Termos de Uso não implica a cessão ou transferência ao Usuário ou às Associadas de quaisquer direitos relativos à Plataforma, salvo aqueles direitos \n    expressamente previstos nestes Termos de Uso, observadas as limitações e demais condições aqui estabelecidas. É expressamente vedado aos Usuários \n    modificar ou tentar modificar qualquer funcionalidade da Plataforma. Além disso, o Usuário concorda em não reproduzir, duplicar, copiar, vender, \n    revender ou explorar qualquer parte das informações e conteúdo da Plataforma, bem como se obriga a utilizar a Plataforma de forma lícita e para as \n    finalidades autorizadas, sendo vedada a reprodução, distribuição, transformação, comercialização ou modificação, sem a prévia e expressa autorização \n    da Férias&Co, bem como fica vedado o fornecimento de login e senha para terceiros. O nome comercial Férias & Co., a marca Férias & Co., e os produtos \n    associados a essa marca são de exclusiva titularidade da Férias&Co e outras empresas de seu grupo econômico, não assistindo aos Usuários quaisquer \n    direitos eles relacionados. Nenhuma disposição destes Termos de Uso será interpretada como concessão aos Usuários de qualquer direito, título ou \n    interesse em qualquer propriedade intelectual da Férias&Co.\n</p><br />\n<p><strong>18.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Disponibilidade da Plataforma.</span></span>\n    A FÉRIAS&CO EMPREENDERÁ SEUS MELHORES ESFORÇOS PARA QUE A PLATAFORMA ESTEJA DISPONÍVEL 99,9% DO TEMPO. CONTUDO, A PLATAFORMA PODERÁ ESTAR INACESSÍVEL \n    EM MOMENTOS DE MANUTENÇÃO PREVENTIVA E DE MANUTENÇÃO DE QUAISQUER ERROS OU FALHAS. A FÉRIAS&CO NÃO ASSEGURA A IMPOSSIBILIDADE DO SEU SISTEMA E \n    SERVIDORES PODEREM SER ATACADOS, INVADIDOS, MODIFICADOS OU LESADOS, DE QUALQUER FORMA, POR TERCEIROS.\n</p><br />\n<p><strong>19.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Limitação de Responsabilidade.</span></span>\n    A FÉRIAS&CO NÃO SERÁ RESPONSÁVEL (I) PELA QUALIDADE OU DISPONIBILIDADE DA CONEXÃO DO DISPOSITIVO DO USUÁRIO À INTERNET EM QUALQUER CIRCUNSTÂNCIA; \n    (II) PELA IMPOSSIBILIDADE DE UTILIZAÇÃO DE QUAISQUER INFORMAÇÕES OU SERVIÇOS DISPONIVEIS EM RAZÃO DA INCOMPATIBILIDADE DA CONFIGURAÇÃO TÉCNICA DE \n    CONEXÃO DOS USUÁRIOS; E (III) POR QUAISQUER DANOS SOFRIDOS PELOS USUÁRIOS EM RAZÃO DA UTILIZAÇÃO DA PLATAFORMA DE FORMA DIVERSA DA ESTABELECIDA \n    NESTES TERMOS DE USO. \n</p><br />\n<p><strong>20.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Modificações aos Termos de Uso.</span></span>\n    A Férias&Co poderá, a seu exclusivo critério, realizar quaisquer modificações e/ou adições aos presentes Termos de Uso. Em caso de modificação \n    destes Termos de Uso, a Férias&Co irá disponibilizar um aviso na Plataforma e os novos Termos de Uso entrarão imediatamente em vigor, salvo na \n    hipótese em que as alterações sejam substanciais, hipótese em que podemos pedir uma nova manifestação de aquiescência. Salvo nessa última hipótese, \n    o acesso e utilização da Plataforma após a publicação das alterações representa a aceitação integral e incondicional aos novos Termos de Uso.\n</p><br />\n<p><strong>21.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Validade e eficácia dos Termos de Uso.</span></span>\n    A nulidade ou invalidade de qualquer cláusula destes Termos de Uso não prejudicará a validade e eficácia das demais cláusulas e dos próprios Termos de Uso.\n</p><br />\n<p><strong>22.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Lei aplicável e Foro.</span></span>\n    Os presentes Termos de Uso são regidos pelas leis da República Federativa do Brasil e fica eleito o foro da Capital do Estado de São Paulo, \n    com exclusão de qualquer outro, por mais privilegiado que seja ou possa vir a ser, para dirimir quaisquer litígios ou controvérsias oriundas \n    dos presentes Termos de Uso.\n</p><br />\n<p><strong>23.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Limitação de Responsabilidade.</span></span>\n    Quaisquer dúvidas, críticas, sugestões e /ou reclamações poderão ser feitas pelo e-mail “contato@ferias.co”.\n</p><br />\n",
					"termoDesconto" : "\n        <p>Pelo presente Termo de Adesão e Autorização de Débito em Folha de Pagamento, o signatário da presente\n        autoriza expressamente a Empresa, acima identificada, a realizar a retenção e desconto mensal, em folha\n        de pagamento, do valor contratado por mim a título de plano de assinaturas do Programa Férias & Co.,\n        conforme opção de assinatura por mim realizada diretamente na plataforma do Programa Férias & Co.,\n        mediante utilização do meu <span class=\"italic-text\">login</span> e senha pessoal, inclusive em caso de\n        renovação ou alteração das\n        condições do plano de assinatura, não sendo necessário para tanto qualquer aditamento a este\n        instrumento.</p><br />\n\n      <p>Ao assinar este instrumento, declaro ainda que (<span class=\"underline-text\">i</span>) sou plenamente\n        capaz de compreender as condições do\n        plano de assinaturas a que aderi, sou civilmente capaz e tenho condições jurídicas e financeiras de\n        cumprir as obrigações por mim assumidas; e (<span class=\"underline-text\">ii</span>) este instrumento é\n        devidamente assinado e formalizado e\n        constitui obrigação válida e vinculante, exequível de acordo com os termos e condições aqui previstos.\n      </p><br />\n\n      <p>Expressamente declaro ainda, estar ciente:</p><br />\n\n\n      <div class=\"topics\">\n        <p>\n          <li>\n            Dos termos, condições de uso e política do Férias&Co. disponíveis para consulta na plataforma\n            “Férias & Co”, à qual tenho acesso por meio de senha e login pessoais e individualizados;\n          </li>\n\n        </p><br />\n        <p>\n          <li>\n            Que a adesão ao programa Férias&Co., bem como a qualquer dos planos de assinatura, é opcional\n            e deve ser formalizada com o preenchimento e assinatura deste Termo de Adesão e Autorização de Débito em\n            Folha de\n            Pagamento;\n          </li>\n        </p><br />\n        <p>\n          <li>\n            Que a adesão ao programa Férias&Co., seu prazo, termos e condições constam dos Termos de\n            Uso, Política de Privacidade e demais políticas, termos e condições constantes da Plataforma, aos\n            quais aderi ao efetuar a contratação do meu plano de assinaturas e que me obrigo a cumprir\n            irrestritamente, sob pena de rescisão do meu plano de assinatura “Férias & Co”, além das demais\n            penalidades aplicáveis previstas em Lei;\n          </li>\n        </p><br />\n        <p>\n          <li>\n            Que o <span class=\"italic-text\">login</span> e senha de acesso à plataforma Férias&Co. são pessoais e\n            intransferíveis, de forma\n            que assumo total responsabilidade caso eu transmita a qualquer terceiro tais dados;\n          </li>\n        </p><br />\n\n        <p>\n          <li>\n            Que inexiste qualquer relação entre a contratação de parceiros credenciados ao Férias&Co e o\n            exercício das minhas atividades ou vínculo empregatício junto à Empresa e que as condições\n            especiais oferecidas pelo programa Férias&Co. não possuem caráter remuneratório ou de benefício;\n          </li>\n        </p><br />\n\n        <p>\n          <li>\n            Que o Férias&Co. não possui hotéis ou empresas de transporte aéreo ou terrestre e não presta\n            serviços de hotelaria ou de transporte aéreo ou terrestre, sendo os parceiros credenciados exclusiva\n            e integralmente responsáveis, nos termos da Lei, pelos serviços por elas prestados. O serviço a ser\n            fornecido pela Férias&Co. limita-se ao acesso à plataforma “Férias & Co” e à intermediação do\n            signatários com os parceiros credenciados nela constantes, não sendo a Férias & Co. obrigada a\n            executar os serviços de turismo que forem contratados pelo signatário diretamente com o parceiro\n            credenciado, nem é a Contratada responsável por falhas, seja do signatário ou do parceiro\n            credenciado, em uma contratação;\n          </li>\n        </p><br />\n\n        <p>\n          <li>\n            Que o acesso à Plataforma requerer acesso à internet em condições técnicas compatíveis às\n            exigidas pela Plataforma. Ademais, por se tratar de serviço oferecido online, o Férias & Co. está\n            sujeito a eventuais interrupções, suspensões ou bugs temporários, que poderão ou não ser sanáveis\n            pela Contratada ou seus prestadores de serviços, sem que isto justifique a rescisão deste Contrato\n            ou revisão de seus termos e condições;\n          </li>\n        </p><br />\n\n        <p>\n          <li>\n            Que a cada renovação do plano de assinaturas contratado por mim, os planos de assinaturas\n            disponíveis, seu preço, termos e condições e os serviços correspondentes oferecidos pela Férias &\n            Co poderão ser alterados, adicionados, excluídos ou complementados, a critério da Férias & Co.\n            Alterações dos termos e condições de um plano de assinaturas no curso de seu prazo de contratação\n            requererão adesão do signatário para serem implementadas e válidas.\n          </li>\n        </p><br />\n\n        <p>\n          <li>\n            Que minha assinatura poderá ser cancelada por decisão individual minha, da Férias & Co ou da\n            Empresa, observados os Termos de Uso da Plataforma e as condições de transição em caso de\n            rescisão, conforme constantes da Plataforma.\n          </li>\n        </p><br />\n      </div>\n\n      <p> Este instrumento é regido e será interpretado de acordo com as Leis da República Federativa do Brasil.\n        As Partes elegem o foro de [São Paulo, Estado de São Paulo], para dirimir quaisquer questões oriundas do\n        presente Contrato, renunciando a qualquer outro, por mais privilegiado que seja.\n      </p>\n"
				},
				"dataConfirmacaoAdesao" : ISODate("2021-02-16T17:53:52.841Z"),
				"periodo" : 1
			}
		],
		"mgmIndicacoesEfetuadas" : [ 
			{
				"nomeIndicado" : "Maria Teste Indicado PtConfirmado",
				"cpfIndicado" : "40289198003",
				"razaoSocialIndicado" : "RDC VIAGENS E TURISMO LTDA – ME (MATRIZ)",
				"cnpjIndicado" : "10782454000115",
				"emailIndicado" : "mariateste.indicado@rdcviagens.com.br",
				"dataIndicacao" : ISODate("2021-03-18T17:53:52.841Z"),
				"status" : "Confirmado",
				"recompensa" : {
					"idRecompensa" : UUID("49d8e5e4-c8b5-4887-8555-c6da266b42f4"),
					"idPlano" : UUID("005d9991-e7c7-49ff-a617-fa3ce1bad9e5"),
					"nomePlano" : "Padrão - 4 diárias",
					"dataAdesao" : ISODate("2021-03-19T17:53:52.841Z"),
					"dataLiberacaoRecompensa" : ISODate("2021-05-22T17:53:52.841Z"),
					"motivoLiberacaoRecompensa" : "Se passaram 60 dias que o colaborador indicado assinou o plano",
					"valor" : NumberDecimal("100.00"),
					"pontos" : 10000
				}
			}
		],
		"mgmIndicacoesRecebidas" : null,
		"endereco" : {
			"cep" : "07082290",
			"logradouro" : "Rua Vicenzo Paciullo",
			"numero" : 277,
			"complemento" : "Ap 102 BL 2",
			"bairro" : "Jardim Las Vegas",
			"municipio" : "Guarulhos",
			"municipioCodigoIbge" : "18800",
			"estadoSigla" : "SP",
			"estadoCodigoIbge" : "35"
		},
		"aceitaContatoWhatsapp" : true,
		"aceitaReceberIndicacoesMgm" : false,
		"dataCriacao" : ISODate("2021-02-16T17:53:52.841Z"),
		"dataAtualizacao" : ISODate("2021-05-22T17:53:52.841Z"),
		"dataDelecao" : null,
		"carteira" : {
			"pontos" : {
				"saldo" : NumberDecimal("10000"),
				"quantidadePendente" : NumberDecimal("0"),
				"pontosAcumulados" : [ 
					{
						"_id" : UUID("e251a065-317d-4d65-a1e1-d5cb4b90dc32"),
						"quantidadeInicial" : NumberDecimal("10000"),
						"status" : "Confirmado",
						"notificacao" : true,
						"origem" : "MgmIndiqueGanhe",
						"descricao" : "Parabéns!",
						"codigoReferenciaOrigem" : "",
						"pontosRestantes" : NumberDecimal("0"),
						"valorDinheiro" : NumberDecimal("0.06"),
						"idPlano" : UUID("005d9991-e7c7-49ff-a617-fa3ce1bad9e5"),
						"dataRegistro" : ISODate("2021-05-22T17:53:52.841Z"),
						"dataVencimento" : ISODate("2022-05-22T17:53:52.841Z"),
						"dataPrevisaoEfetivacao" : ISODate("2021-05-22T17:53:52.841Z")
					}
				],
				"historicoTransacaoPontos" : [ 
					{
						"_id" : UUID("25ecec68-45ea-498c-899d-b620d09e5cd5"),
						"quantidade" : NumberDecimal("10000"),
						"status" : "Confirmado",
						"origem" : "MgmIndiqueGanhe",
						"descricao" : "Parabéns!",
						"codigoReferenciaOrigem" : "",
						"tipoTransacao" : "Credito",
						"tipoMovimento" : "Credito",
						"idReferenciaTransacao" : [],
						"dataRegistro" : ISODate("2021-03-19T17:53:52.841Z"),
						"dataAtualizacao" : null,
						"tipoCredito" : "Pontos",
						"idPlano" : UUID("005d9991-e7c7-49ff-a617-fa3ce1bad9e5"),
						"planoPeriodo" : 1,
						"pontosUtilizados" : [ 
							{
								"_id" : UUID("996d29bc-e9b1-4d09-a844-4d4e514c3837"),
								"idCreditoPontos" : UUID("ef00d8b8-70e0-4e6f-bc3d-3808d3ad104a"),
								"quantidade" : "10000"
							}
						]
					}, 
					{
						"_id" : UUID("5a9dbf57-f5d8-4388-9991-688c21bb9317"),
						"quantidade" : NumberDecimal("10000"),
						"status" : "Confirmado",
						"origem" : "MgmIndiqueGanhe",
						"descricao" : "Parabéns!",
						"codigoReferenciaOrigem" : "",
						"tipoTransacao" : "Credito",
						"tipoMovimento" : "Credito",
						"idReferenciaTransacao" : [],
						"dataRegistro" : ISODate("2021-05-22T17:53:52.841Z"),
						"dataAtualizacao" : null,
						"tipoCredito" : "Pontos",
						"idPlano" : UUID("005d9991-e7c7-49ff-a617-fa3ce1bad9e5"),
						"planoPeriodo" : 1,
						"pontosUtilizados" : [ 
							{
								"_id" : UUID("982d5a2f-73bc-4943-83a5-0ad2ef0bcd22"),
								"idCreditoPontos" : UUID("5d8538f6-5359-4bac-9d37-26ea683169ff"),
								"quantidade" : "10000"
							}
						]
					}
				]
			},
			"diarias" : {
				"historicoTransacaoDiarias" : [ 
					{
						"_id" : UUID("f9588802-7d50-4e61-b362-760c45c4ba10"),
						"quantidade" : NumberDecimal("4"),
						"status" : "Confirmado",
						"origem" : "Reserva",
						"descricao" : "Débito referente a reserva do Deck da Villa Pousada (Ubatuba, São Paulo, Brasil)",
						"codigoReferenciaOrigem" : null,
						"tipoTransacao" : "Debito",
						"tipoMovimento" : "Debito",
						"idReferenciaTransacao" : [],
						"dataRegistro" : ISODate("2021-03-29T21:19:08.810Z"),
						"dataAtualizacao" : ISODate("2021-03-29T21:19:08.810Z"),
						"tipoCredito" : "Diarias",
						"idPlano" : UUID("005d9991-e7c7-49ff-a617-fa3ce1bad9e5"),
						"planoPeriodo" : 1,
						"pontosUtilizados" : null
					}
				]
			}
		},
		"notificarIntencaoUpgrade" : false,
		"dataNotificarIntencaoUpgrade" : null,
		"idPlanoIntencaoUpgrade" : UUID("00000000-0000-0000-0000-000000000000"),
		"equipes" : [],
		"verPremiacao" : false,
		"historicoPremiacoes" : []
	},
	{
		"_id" : ObjectId("60ab7be24bc0cb8a293602ab"),
		"id" : "40289198003",
		"nome" : "Maria Teste Indicado PtConfirmado",
		"dataNascimento" : ISODate("1983-06-12T00:00:00.000Z"),
		"cpf" : "40289198003",
		"celular" : "11971567041",
		"emailPessoal" : "mariateste.indicado@gmail.com",
		"empresas" : [ 
			{
				"_id" : "10782454000115",
				"nomeFantasia" : "RDC FÉRIAS ME",
				"razaoSocial" : "RDC VIAGENS E TURISMO LTDA – ME (MATRIZ)",
				"segmento" : "Agências de viagens",
				"empresaProprietariaId" : "10782454000115",
				"site" : "http://www.rdcferias.com.br",
				"tipo" : null,
				"coparticipacao" : NumberDecimal("90"),
				"ativo" : true,
				"centroCusto" : "",
				"grupoOrganizacional" : "",
				"cnpj" : "10782454000115",
				"colaboradorRh" : {
					"telefone" : "",
					"ramal" : "",
					"emailCorporativo" : "mariateste.indicado@rdcviagens.com.br",
					"matricula" : "",
					"descontoFolha" : true,
					"cargo" : "",
					"area" : "",
					"departamento" : "",
					"coparticipacao" : null
				},
				"dataCriacao" : ISODate("2020-03-11T21:08:36.011Z"),
				"dataAtualizacao" : ISODate("2020-03-11T21:08:36.015Z"),
				"dataDelecao" : null
			}
		],
		"planos" : [ 
			{
				"_id" : UUID("005d9991-e7c7-49ff-a617-fa3ce1bad9e5"),
				"empresaId" : "10782454000115",
				"titulo" : "Hotéis de 3 e 4 estrelas",
				"tipoPlano" : "Padrão",
				"valorPlano" : "90",
				"diariasTotais" : 4,
				"diariasDisponiveis" : 4,
				"valorDiariaMinima" : "0.01",
				"valorDiariaMaxima" : "216",
				"vigencia" : ISODate("2023-03-19T17:53:52.841Z"),
				"ativo" : true,
				"dataAdesao" : ISODate("2021-03-19T17:53:52.841Z"),
				"status" : "Ativo",
				"billing" : null,
				"fingerprint" : {
					"timestamp" : ISODate("2021-03-19T17:53:52.841Z"),
					"servidor" : "172.17.0.3",
					"geolocalizacao" : ";",
					"userAgent" : "Amazon CloudFront",
					"ip" : "181.191.198.135, 130.176.151.162, 10.42.2.162",
					"termoUso" : "\n<p>Seja bem-vindo à Férias & Co, sua plataforma de benefícios de viagens (“<span class=\"underline-text\">Plataforma</span>”).</p>\n<p>Por favor, leia atentamente os termos e condições abaixo estipulados (“<span class=\"underline-text\">Termos de Uso</span>”) \n    para utilizar a Plataforma e todos os serviços disponibilizados de maneira adequada.</p>\n<p><strong>CASO NÃO CONCORDE COM QUAISQUER DISPOSITIVOS DOS TERMOS DE USO, NÃO ACESSE OU UTILIZE \n    A NOSSA PLATAFORMA. SEU ACESSO E UTILIZAÇÃO REPRESENTAM SUA ACEITAÇÃO INTEGRAL E INCONDICIONAL \n    AOS TERMOS DE USO. \n    A <a href=\"assets/documents/ferias-e-co-politica-de-privacidade2019-11-22_v2.pdf\" target=\"_blank\">POLÍTICA DE PRIVACIDADE</a> \n    INTEGRA OS PRESENTES TERMOS DE USO. ESTA PLATAFORMA É DIRECIONADA APENAS PARA MAIORES DE 18 ANOS DE IDADE. \n    SE VOCÊ POSSUI MENOS DE 18 ANOS, POR FAVOR, CESSE IMEDIATAMENTE O ACESSO À PLATAFORMA.</strong>\n</p><br />\n<p><strong>1.</strong> <span class=\"underline-text\">Finalidade da Plataforma.</span> \n    A Plataforma tem a finalidade de proporcionar a colaboradores de empresas \n    associadas (“Associadas”) à Férias&Co a possibilidade de adquirir um plano de assinatura de benefícios \n    de viagem, sendo os colaboradores das Associadas os usuários finais (“Usuários”) da Plataforma. Por \n    meio da Plataforma, os Usuários podem adquirir um dos planos de assinaturas disponíveis, de acordo com \n    as configurações e contratações entre a Associada que o cadastrou inicialmente e a Férias&Co. Após a \n    aquisição de um dos planos de assinatura, o Usuário poderá contratar os serviços relacionados a viagem \n    e turismo disponíveis na Plataforma, tais como a reserva de hotéis, passagens aéreas, entre outros, \n    conforme aplicável. \n</p><br />\n<p><strong>2.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Controle e desenvolvimento da Plataforma.</span></span>\n    A Plataforma é controlada e desenvolvida pela <strong>FERIAS & CO. VIAGENS E TURISMO LTDA. (“Férias&Co”)</strong>, \n    pessoa jurídica inscrita no CNPJ/MF sob o nº 34.008.403/0001-07, com sede na Rua Manoel Coelho, 600 cj 211, Centro, \n    na cidade de São Caetano do Sul, Estado de São Paulo.\n</p><br />\n<p><strong>3.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Uso da Plataforma.</span></span> \n    O uso da Plataforma será efetuado exclusivamente através do acesso à rede mundial de computadores (Internet). \n    Para tanto, os Usuários deverão estar providos dos equipamentos necessários e apropriados, de acordo com as \n    especificações técnicas necessárias para o funcionamento da Plataforma, tais como computador com programa de \n    navegação (browser) devidamente instalado e licenciado, modem, bem como dos serviços de provimento e \n    infraestrutura de acesso à Internet.\n</p><br />\n<p><strong>4.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Acesso à Plataforma pelo Usuário.</span></span>\n    A Plataforma poderá ser acessada pelo Usuário por meio do site “www.ferias.co”. O Usuário poderá ter acesso à Plataforma \n    apenas após o envio das informações dos Usuários pela Associada em que presta serviços, momento em que terá a possibilidade \n    de registrar-se na Plataforma, criando um login e senha de acesso. O Usuário poderá então escolher e adquirir um dos planos \n    de assinatura. As opções de aquisição de planos de assinatura, conforme mencionado acima, bem como as formas de pagamento \n    pelos planos de assinatura, estarão diretamente relacionados às condições contratuais entre a Férias&Co e a Associada a \n    qual o Usuário está vinculado.\n</p>\n<p>A Férias&Co disponibiliza ao seu Usuário uma diversa gama de serviços de viagem e turismo, apresentando uma lista de empresas parceiras. \n</p>\n<p>O Usuário terá um período de carência de 6 (seis) mensalidades antes de utilizar os benefícios de seu plano, iniciando-se a partir do \n    primeiro dia do 7º (sétimo) mês subsequente ao da subscrição e cadastramento, encerrando-se no último dia do 18º (décimo oitavo) mês \n    de pagamento da mensalidade e assim sucessivamente. Tal período de carência apenas será dispensado mediante cadastro dos dados do \n    cartão de crédito e permissão de pagamento de parcelas no caso de rescisão contratual.\n</p><br />\n<p><strong>5.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Tipos de assinatura.</span></span>\n    A Férias&Co disponibiliza ao Usuário cinco (5) tipos de planos de benefícios para assinatura: Padrão, Superior, Premium, Especial e Exclusivo:\n</p>\n<p>\n    A Férias&Co reserva-se ao direito de alterar a cobertura dos planos acima mencionados, bem como de criar e remover categorias de planos. \n    ESTA SEÇÃO CONTÉM UMA BREVE DESCRIÇÃO DOS BENEFÍCIOS INCLUÍDOS EM CADA PLANO. O USUÁRIO DEVERÁ LER COM ATENÇÃO, NO MOMENTO DA CONTRATAÇÃO \n    E/OU DA UTILIZAÇÃO DE BENEFÍCIOS AS RESTRIÇÕES E OS REQUISITOS RELACIONADOS AO USO DOS BENEFÍCIOS. A FÉRIAS&CO. NÃO SE RESPONSABILIZA [\n    PELO USO INADEQUADO DOS BENEFÍCIOS POR PARTE DO USUÁRIO. EM CASO DE EXTINÇÃO DO PLANO, ELE PERMANECERÁ VIGENTE ATÉ COMPLETAR O PERÍODO \n    DE 12 MESES DE SUA AQUISIÇÃO. PASSADO ESSE PERÍODO, CASO O USUÁRIO QUEIRA CONTINUAR A USUFRUIR DOS BENEFÍCIOS, ELE DEVERÁ ESCOLHER UM \n    NOVO PLANO PARA DAR CONTINUIDADE A SUA RELAÇÃO COM A FÉRIAS&CO.\n</p><br />\n<p><strong>6.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Pagamento das assinaturas.</span></span>\n    A aquisição de um dos planos de assinatura disponíveis na Plataforma está sujeita ao pagamento pelo Usuário. A Férias&Co, por padrão, \n    oferece duas formas possíveis de pagamento: (i) o desconto em folha de pagamento, feito diretamente pela Associada; ou (ii) cartão de crédito, \n    por meio de cobrança mensal ao Usuário, estando a duração dos pagamentos vinculada diretamente à vigência do contrato entre a Associada a que o \n    Usuário está vinculado e a Férias&Co. Caso ocorra alguma falha no pagamento por meio de cartão de crédito, a Férias&Co tentará realizar mais \n    outras duas cobranças dentro do período de uma (1) semana, para que o Usuário regularize sua situação. Caso a situação não seja regularizada, \n    sua assinatura será automaticamente cancelada. Para faturamento por cartão de crédito, a Férias&Co utiliza um terceiro processador de pagamentos. \n    O processamento de tais pagamentos estará sujeito aos termos, às condições e às políticas de privacidade da empresa responsável por processar o \n    pagamento, além destes Termos. A Férias&Co não será responsável por erros cometidos pelo por esse terceiro. Além disso, a Férias&Co se reserva o \n    direito de corrigir quaisquer erros ou enganos cometidos no processo de faturamento mesmo que o pagamento já tenha sido solicitado ou recebido. \n    A Férias&Co não é responsável por quaisquer impostos que possam se aplicar à aquisição de Assinaturas ou sobre os produtos e serviços fornecidos. \n    Uma vez contratado, o plano será anual e seu pagamento será dividido em 12 parcelas mensais e estará sujeito à renovação automática por iguais \n    períodos de tempo.\n</p><br />\n<p><strong>7.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Cancelamento dos planos de assinatura:</span></span>\nCaso o Usuário pretenda o cancelamento de seu plano sem que tenha utilizado as diárias proporcionais aos valores pagos, o mesmo terá direito a recebê-las de \nforma proporcional ao valor pago, comprometendo-se a utilizar as referidas diárias durante a vigência do plano contratado. Caso o Usuário não se interesse \npela conversão dos valores pagos em diárias, poderá optar em receber o valor pago com a retenção do percentual de 20% a título de taxa administrativa. Para \nos casos em que o uso de diárias for maior que o pagamento efetuado, será necessário para o cancelamento o pagamento proporcional as diárias utilizadas. Para \nos casos de cancelamento com uso integral de seu plano, fica obrigado o Usuário a efetuar o pagamento de todas as parcelas restantes do plano contratado.\n</p><br />\n<p><strong>7.1</strong> <span class=\"underline-text\"><span class=\"italic-text\">Desligamento do Usuário e Associada:</span></span>\nPara os casos de desligamento entre Usuário e Associada, os planos que tiveram utilização total somente poderão ser cancelados após o pagamento integral das \nparcelas remanescentes. Nesse cenário, é facultado aos Usuários manterem seus planos ativos até o final do período aquisitivo, assumindo o pagamento integral \nda mensalidade por meio de cartão de crédito, que deverá ser informado no portal Férias&Co. Para os casos de desligamento sem que o usuário tenha utilizado as \ndiárias proporcionais aos valores pagos, o mesmo terá direito a recebê-las de forma proporcional ao valor pago, comprometendo-se a utilizar referidas diárias \ndurante a vigência do plano contratado, sob pena de desistência da utilização das diárias. Para os casos de desligamento com a utilização superior ao valor \npago, será cobrado o valor proporcional de uso das diárias pelo Usuário o qual assume o valor integral das mensalidades restantes através de pagamento via \ncartão de crédito cadastrado na plataforma. Poderá o Usuário, caso faça esta opção, assumir o pagamento integral do restante das mensalidades para utilização \ntotal do plano contratado. Já para os casos de desligamento sem a utilização do plano contratado, será liberado na plataforma as diárias proporcionais aos \nvalores pagos para utilização, tendo a possibilidade, também, de o Usuário assumir o pagamento integral do restante das mensalidades por meio de cartão de \ncrédito para utilização total do plano contratado durante sua vigência. Caso o Usuário não se interesse pela conversão dos valores pagos em diárias ou o \npagamento complementar do plano para uso integral das diárias contratadas, poderá optar em receber o valor pago com a retenção do percentual de 20% a título \nde taxa administrativa.\n<br><br>\nMensalidade integral do plano atualizada para os casos de desligamento entre Usuário e Associada até o final do período aquisitivo: R$ 90,00.\n</p><br>\n<p><strong>7.2</strong> <span class=\"underline-text\"><span class=\"italic-text\">Violação ao Termo de Uso:</span></span>\nPara o caso de cancelamento do plano de assinatura por violação aos Termos de Uso, o Usuário não fará jus a nenhum tipo de reembolso das quantias já pagas e \ndeverá pagar imediatamente os valores pendentes, caso tenha utilizado algum benefício de seu plano de assinaturas.\n</p><br />\n<p><strong>8.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Segurança do Usuário.</span></span>\n    A Férias&Co empreende e sempre empreenderá seus melhores esforços para garantir uma experiência agradável e segura da Plataforma para o Usuário. \n    Para garantir que um acesso seguro, recomenda-se ao Usuário que não entregue sua senha a ninguém, sendo de sua inteira responsabilidade manter \n    e manter todos os nomes de usuários e senhas confidenciais. Além disso, o Usuário é o único responsável por todas e quaisquer atividades que \n    ocorram em sua conta e será o único responsável por todo o uso de sua conta e senha e todos os danos diretos e indiretos resultantes da não \n    observância de referido requisito de segurança. O Usuário deverá notificar à Férias&Co imediatamente sobre qualquer uso não autorizado de \n    qualquer conta ou qualquer outra violação de segurança. A Férias&Co não pode e não será responsável por qualquer perda ou dano decorrente da \n    falha do Usuário em cumprir com estes requisitos.\n</p><br />\n<p><strong>9.</strong> <span class=\"underline-text\"><span class=\"italic-text\">\nVeracidade das informações fornecidas pelo Usuário e pelas Associadas.</span></span>\n    O Usuário se compromete a fornecer informações verdadeiras, exatas, atuais e completas quando de seu cadastramento para uso da Plataforma, \n    bem como a manter sempre atualizadas as referidas informações, seja junto da Plataforma ou junto à Associada que está vinculado. O fornecimento \n    de informação falsa ou a utilização indevida de dados de terceiros constitui crime tipificado pelo Código Penal Brasileiro. \n    A FÉRIAS&CO NÃO VERIFICA OU ASSUME QUALQUER RESPONSABILIDADE QUANTO À CONFIABILIDADE, EXATIDÃO, VALIDADE, ATUALIDADE, UTILIDADE, \n    INTEGRIDADE, PERTINÊNCIA, OPORTUNIDADE OU ABRANGÊNCIA DAS INFORMAÇÕES INSERIDAS PELO USUÁRIO OU PELAS ASSOCIADAS NA PLATAFORMA. \n    TODAS AS INFORMAÇÕES RELATIVAS AO CADASTRO DOS USUÁRIOS NA PLATAFORMA, TANTO SEUS DADOS PESSOAIS, COMO OUTROS DADOS E INFORMAÇÕES \n    QUE A PLATAFORMA PERMITE ARMAZENAR E GERENCIAR, SERÃO INSERIDAS NA PLATAFORMA PELO USUÁRIO OU PELAS ASSOCIADAS SOB SUA EXCLUSIVA \n    RESPONSABILIDADE.\n</p><br />\n<p><strong>10.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Privacidade do Usuário.</span></span>\n    A Política de Privacidade da Plataforma explicita de que maneira são tratadas as informações pessoais dos Usuários e como sua privacidade \n    é protegida, quando da utilização da Plataforma. O acesso à Política de Privacidade está <a href=\"assets/documents/ferias-e-co-politica-de-privacidade2019-11-22_v2.pdf\" target=\"_blank\">disponível no pdf</a>.\n</p><br />\n<p><strong>11.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Links a sites de terceiros.</span></span>\n    Nosso site pode conter links externos para outros sites detidos por terceiros que não são detidos ou controlados pela Férias&Co. \n    A Férias&Co não possui qualquer controle e não assume qualquer responsabilidade pelo conteúdo, políticas de privacidade ou práticas \n    de quaisquer serviços e sites de terceiros. Recomendamos a leitura dos termos e condições e das políticas de privacidade dos \n    sites de terceiros que visitar.\n</p><br />\n<p><strong>12.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Declarações do Usuário.</span></span>\n    O acesso à Plataforma pelos Usuário está diretamente vinculado ao estrito cumprimento destes Termos de Uso. Portanto, ao aceitar estes \n    Termos de Uso, o Usuário declara que: (a) seguirá os Termos de Uso e todas as leis aplicáveis; (b) fornecerá somente informações \n    verdadeiras e precisas; (c) não irá assediar, ameaçar ou abusar de outras pessoas ao usar a Plataforma; (d) não interferirá o uso ou \n    acesso à Plataforma de outros Usuários;(e) não publicará nenhum conteúdo obsceno ou ofensivo a terceiros, bem como discriminatório ou \n    preconceituoso por motivos de raça, gênero, orientação sexual, religião, entre outros; (f) não publicará nenhum conteúdo calunioso, \n    difamatório ou injurioso, ou que invada a privacidade alheia; (g) não coletará ou armazenará informações pessoais identificáveis \n    sobre quaisquer terceiros na Plataforma, ou perseguir de outra forma, contatar indevidamente ou assediar qualquer Usuário; (h) não \n    postará nenhum conteúdo que contenha vírus, bots, cavalos de Tróia, código nocivo ou outro software ou programa de computador \n    projetado para interromper a funcionalidade da Plataforma, a capacidade dos Usuários de desfrutar da Plataforma ou o funcionamento \n    adequado de qualquer software, hardware ou equipamento ou materiais utilizados em conexão com a Plataforma; (i) não usará nenhuma \n    informação na Plataforma para fins comerciais, exceto quando expressamente autorizado pela Férias & Co; (j) não pesquisará, ligará ou \n    vinculará nenhum dado ou informação a ou por meio da Plataforma sem o expresso consentimento e autorização da Férias & Co; e (k) não \n    enviará qualquer publicidade não solicitada, informações promocionais, e-mail ou outras solicitações em massa (incluindo, sem limitação, \n    lixo eletrônico, \"spam\", cartas em cadeia ou esquemas de pirâmide de qualquer tipo) a qualquer pessoa através do uso da Plataforma. \n    Caso alguma dessas diretrizes sejam definidas acima ou qualquer outro aspecto destes Termos de Uso, reservamos o direito de suspender \n    ou rescindir os direitos de uso da Plataforma sem aviso prévio.\n</p><br />\n<p><strong>13.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Consequências das violações aos Termos de Uso pelo Usuário.</span></span>\n    Sem prejuízo de outras medidas que entender cabíveis, a Férias&Co poderá advertir, suspender ou cancelar, temporária ou definitivamente, \n    o cadastro do Usuário, a qualquer tempo, iniciando as ações legais cabíveis e/ou suspendendo a execução destes Termos se o Usuário não \n    cumprir qualquer dispositivo aqui previsto. A Férias&Co ainda poderá tomar tais medidas se não puder ser verificada a identidade do \n    Usuário ou caso qualquer informação fornecida por ele esteja incorreta.\n</p><br />\n<p><strong>14.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Interrupções no uso da Plataforma.</span></span>\n    O USO DA PLATAFORMA ESTÁ SUJEITO A INTERRUPÇÕES, ATRASOS E PROBLEMAS INERENTES AO USO DA INTERNET E OUTROS TIPOS DE COMUNICAÇÃO ELETRÔNICA. \n    A FÉRIAS&CO NÃO SERÁ RESPONSÁVEL POR QUALQUER DESSAS INTERRUPÇÕES, ATRASOS OU PROBLEMAS, NEM POR EVENTUAIS DEFEITOS OU LIMITAÇÕES DOS \n    EQUIPAMENTOS OU DO BROWSER UTILIZADOS PELO USUÁRIO OU AINDA POR EVENTUAIS DEFEITOS OU LIMITAÇÕES DOS SERVIÇOS DE PROVIMENTO E INFRA-ESTRUTURA \n    DE ACESSO À INTERNET CONTRATADOS PELO USUÁRIO.\n</p><br />\n<p><strong>15.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Responsabilidade da Férias&Co perante atos de terceiros:</span></span>\n    O USUÁRIO DECLARA, ACEITA E RECONHECE QUE A FÉRIAS&CO NÃO POSSUI HOTÉIS, COMPANHIAS DE TRANSPORTE AÉREO, FERROVIÁRIO, MARINHO OU TERRESTRE E NÃO PRESTA \n    SERVIÇOS DE HOTELARIA OU DE TRANSPORTE AÉREO, FERROVIÁRIO, MARINHO OU TERRESTRE, SENDO TAIS SERVIÇOS PRESTADOS EXCLUSIVAMENTE PELOS PARCEIROS CREDENCIADOS \n    CONSTANTES DA PLATAFORMA E TAIS PARCEIROS CREDENCIADOS SÃO E SERÃO, PERANTE TODOS OS USUÁRIOS, INTEGRAL, ÚNICA E EXCLUSIVAMENTE RESPONSÁVEIS PELOS SERVIÇOS \n    PRESTADOS POR CADA UM DELES E SUAS CONSEQUÊNCIAS NOS TERMOS DA LEI, ESPECIALMENTE DA LEI Nº 10.406/2002 (CÓDIGO CIVIL) E DA LEI Nº 8.078/1990 (CÓDIGO DE \n    DEFESA DO CONSUMIDOR). A FÉRIAS&CO. NÃO PRESTA DECLARAÇÕES OU ASSUME QUALQUER OBRIGAÇÃO EM NOME, BENEFÍCIO OU PELOS PARCEIROS CREDENCIADOS QUE POSSAM SER \n    ACESSADOS NA PLATAFORMA.\n</p><br />\n<p><strong>16.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Licença limitada de uso à Plataforma.</span></span>\n    A Férias&Co concede ao Usuário uma licença limitada, não exclusiva e intransferível para utilizar a Plataforma de acordo com estes Termos de Uso.\n</p><br />\n<p><strong>17.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Propriedade intelectual da Férias&Co.</span></span>\n    Os Usuários reconhecem e concordam que a Férias&Co é a exclusiva titular de todos os direitos autorais e de propriedade intelectual relacionados \n    à Plataforma, e que tais direitos são protegidos pela Lei n.º 9.609, de 19 de fevereiro de 1998, e demais normas aplicáveis. O aceite aos presentes \n    Termos de Uso não implica a cessão ou transferência ao Usuário ou às Associadas de quaisquer direitos relativos à Plataforma, salvo aqueles direitos \n    expressamente previstos nestes Termos de Uso, observadas as limitações e demais condições aqui estabelecidas. É expressamente vedado aos Usuários \n    modificar ou tentar modificar qualquer funcionalidade da Plataforma. Além disso, o Usuário concorda em não reproduzir, duplicar, copiar, vender, \n    revender ou explorar qualquer parte das informações e conteúdo da Plataforma, bem como se obriga a utilizar a Plataforma de forma lícita e para as \n    finalidades autorizadas, sendo vedada a reprodução, distribuição, transformação, comercialização ou modificação, sem a prévia e expressa autorização \n    da Férias&Co, bem como fica vedado o fornecimento de login e senha para terceiros. O nome comercial Férias & Co., a marca Férias & Co., e os produtos \n    associados a essa marca são de exclusiva titularidade da Férias&Co e outras empresas de seu grupo econômico, não assistindo aos Usuários quaisquer \n    direitos eles relacionados. Nenhuma disposição destes Termos de Uso será interpretada como concessão aos Usuários de qualquer direito, título ou \n    interesse em qualquer propriedade intelectual da Férias&Co.\n</p><br />\n<p><strong>18.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Disponibilidade da Plataforma.</span></span>\n    A FÉRIAS&CO EMPREENDERÁ SEUS MELHORES ESFORÇOS PARA QUE A PLATAFORMA ESTEJA DISPONÍVEL 99,9% DO TEMPO. CONTUDO, A PLATAFORMA PODERÁ ESTAR INACESSÍVEL \n    EM MOMENTOS DE MANUTENÇÃO PREVENTIVA E DE MANUTENÇÃO DE QUAISQUER ERROS OU FALHAS. A FÉRIAS&CO NÃO ASSEGURA A IMPOSSIBILIDADE DO SEU SISTEMA E \n    SERVIDORES PODEREM SER ATACADOS, INVADIDOS, MODIFICADOS OU LESADOS, DE QUALQUER FORMA, POR TERCEIROS.\n</p><br />\n<p><strong>19.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Limitação de Responsabilidade.</span></span>\n    A FÉRIAS&CO NÃO SERÁ RESPONSÁVEL (I) PELA QUALIDADE OU DISPONIBILIDADE DA CONEXÃO DO DISPOSITIVO DO USUÁRIO À INTERNET EM QUALQUER CIRCUNSTÂNCIA; \n    (II) PELA IMPOSSIBILIDADE DE UTILIZAÇÃO DE QUAISQUER INFORMAÇÕES OU SERVIÇOS DISPONIVEIS EM RAZÃO DA INCOMPATIBILIDADE DA CONFIGURAÇÃO TÉCNICA DE \n    CONEXÃO DOS USUÁRIOS; E (III) POR QUAISQUER DANOS SOFRIDOS PELOS USUÁRIOS EM RAZÃO DA UTILIZAÇÃO DA PLATAFORMA DE FORMA DIVERSA DA ESTABELECIDA \n    NESTES TERMOS DE USO. \n</p><br />\n<p><strong>20.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Modificações aos Termos de Uso.</span></span>\n    A Férias&Co poderá, a seu exclusivo critério, realizar quaisquer modificações e/ou adições aos presentes Termos de Uso. Em caso de modificação \n    destes Termos de Uso, a Férias&Co irá disponibilizar um aviso na Plataforma e os novos Termos de Uso entrarão imediatamente em vigor, salvo na \n    hipótese em que as alterações sejam substanciais, hipótese em que podemos pedir uma nova manifestação de aquiescência. Salvo nessa última hipótese, \n    o acesso e utilização da Plataforma após a publicação das alterações representa a aceitação integral e incondicional aos novos Termos de Uso.\n</p><br />\n<p><strong>21.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Validade e eficácia dos Termos de Uso.</span></span>\n    A nulidade ou invalidade de qualquer cláusula destes Termos de Uso não prejudicará a validade e eficácia das demais cláusulas e dos próprios Termos de Uso.\n</p><br />\n<p><strong>22.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Lei aplicável e Foro.</span></span>\n    Os presentes Termos de Uso são regidos pelas leis da República Federativa do Brasil e fica eleito o foro da Capital do Estado de São Paulo, \n    com exclusão de qualquer outro, por mais privilegiado que seja ou possa vir a ser, para dirimir quaisquer litígios ou controvérsias oriundas \n    dos presentes Termos de Uso.\n</p><br />\n<p><strong>23.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Limitação de Responsabilidade.</span></span>\n    Quaisquer dúvidas, críticas, sugestões e /ou reclamações poderão ser feitas pelo e-mail “contato@ferias.co”.\n</p><br />\n",
					"termoDesconto" : "\n        <p>Pelo presente Termo de Adesão e Autorização de Débito em Folha de Pagamento, o signatário da presente\n        autoriza expressamente a Empresa, acima identificada, a realizar a retenção e desconto mensal, em folha\n        de pagamento, do valor contratado por mim a título de plano de assinaturas do Programa Férias & Co.,\n        conforme opção de assinatura por mim realizada diretamente na plataforma do Programa Férias & Co.,\n        mediante utilização do meu <span class=\"italic-text\">login</span> e senha pessoal, inclusive em caso de\n        renovação ou alteração das\n        condições do plano de assinatura, não sendo necessário para tanto qualquer aditamento a este\n        instrumento.</p><br />\n\n      <p>Ao assinar este instrumento, declaro ainda que (<span class=\"underline-text\">i</span>) sou plenamente\n        capaz de compreender as condições do\n        plano de assinaturas a que aderi, sou civilmente capaz e tenho condições jurídicas e financeiras de\n        cumprir as obrigações por mim assumidas; e (<span class=\"underline-text\">ii</span>) este instrumento é\n        devidamente assinado e formalizado e\n        constitui obrigação válida e vinculante, exequível de acordo com os termos e condições aqui previstos.\n      </p><br />\n\n      <p>Expressamente declaro ainda, estar ciente:</p><br />\n\n\n      <div class=\"topics\">\n        <p>\n          <li>\n            Dos termos, condições de uso e política do Férias&Co. disponíveis para consulta na plataforma\n            “Férias & Co”, à qual tenho acesso por meio de senha e login pessoais e individualizados;\n          </li>\n\n        </p><br />\n        <p>\n          <li>\n            Que a adesão ao programa Férias&Co., bem como a qualquer dos planos de assinatura, é opcional\n            e deve ser formalizada com o preenchimento e assinatura deste Termo de Adesão e Autorização de Débito em\n            Folha de\n            Pagamento;\n          </li>\n        </p><br />\n        <p>\n          <li>\n            Que a adesão ao programa Férias&Co., seu prazo, termos e condições constam dos Termos de\n            Uso, Política de Privacidade e demais políticas, termos e condições constantes da Plataforma, aos\n            quais aderi ao efetuar a contratação do meu plano de assinaturas e que me obrigo a cumprir\n            irrestritamente, sob pena de rescisão do meu plano de assinatura “Férias & Co”, além das demais\n            penalidades aplicáveis previstas em Lei;\n          </li>\n        </p><br />\n        <p>\n          <li>\n            Que o <span class=\"italic-text\">login</span> e senha de acesso à plataforma Férias&Co. são pessoais e\n            intransferíveis, de forma\n            que assumo total responsabilidade caso eu transmita a qualquer terceiro tais dados;\n          </li>\n        </p><br />\n\n        <p>\n          <li>\n            Que inexiste qualquer relação entre a contratação de parceiros credenciados ao Férias&Co e o\n            exercício das minhas atividades ou vínculo empregatício junto à Empresa e que as condições\n            especiais oferecidas pelo programa Férias&Co. não possuem caráter remuneratório ou de benefício;\n          </li>\n        </p><br />\n\n        <p>\n          <li>\n            Que o Férias&Co. não possui hotéis ou empresas de transporte aéreo ou terrestre e não presta\n            serviços de hotelaria ou de transporte aéreo ou terrestre, sendo os parceiros credenciados exclusiva\n            e integralmente responsáveis, nos termos da Lei, pelos serviços por elas prestados. O serviço a ser\n            fornecido pela Férias&Co. limita-se ao acesso à plataforma “Férias & Co” e à intermediação do\n            signatários com os parceiros credenciados nela constantes, não sendo a Férias & Co. obrigada a\n            executar os serviços de turismo que forem contratados pelo signatário diretamente com o parceiro\n            credenciado, nem é a Contratada responsável por falhas, seja do signatário ou do parceiro\n            credenciado, em uma contratação;\n          </li>\n        </p><br />\n\n        <p>\n          <li>\n            Que o acesso à Plataforma requerer acesso à internet em condições técnicas compatíveis às\n            exigidas pela Plataforma. Ademais, por se tratar de serviço oferecido online, o Férias & Co. está\n            sujeito a eventuais interrupções, suspensões ou bugs temporários, que poderão ou não ser sanáveis\n            pela Contratada ou seus prestadores de serviços, sem que isto justifique a rescisão deste Contrato\n            ou revisão de seus termos e condições;\n          </li>\n        </p><br />\n\n        <p>\n          <li>\n            Que a cada renovação do plano de assinaturas contratado por mim, os planos de assinaturas\n            disponíveis, seu preço, termos e condições e os serviços correspondentes oferecidos pela Férias &\n            Co poderão ser alterados, adicionados, excluídos ou complementados, a critério da Férias & Co.\n            Alterações dos termos e condições de um plano de assinaturas no curso de seu prazo de contratação\n            requererão adesão do signatário para serem implementadas e válidas.\n          </li>\n        </p><br />\n\n        <p>\n          <li>\n            Que minha assinatura poderá ser cancelada por decisão individual minha, da Férias & Co ou da\n            Empresa, observados os Termos de Uso da Plataforma e as condições de transição em caso de\n            rescisão, conforme constantes da Plataforma.\n          </li>\n        </p><br />\n      </div>\n\n      <p> Este instrumento é regido e será interpretado de acordo com as Leis da República Federativa do Brasil.\n        As Partes elegem o foro de [São Paulo, Estado de São Paulo], para dirimir quaisquer questões oriundas do\n        presente Contrato, renunciando a qualquer outro, por mais privilegiado que seja.\n      </p>\n"
				},
				"dataConfirmacaoAdesao" : ISODate("2021-03-27T03:00:00.000Z"),
				"periodo" : 1
			}
		],
		"mgmIndicacoesEfetuadas" : null,
		"mgmIndicacoesRecebidas" : [ 
			{
				"nomeIndicador" : "Michel Teste Indicador PtConfirmado",
				"cpfIndicador" : "79464696087",
				"razaoSocialIndicador" : "RDC VIAGENS E TURISMO LTDA – ME (MATRIZ)",
				"cnpjIndicador" : "10782454000115",
				"dataIndicacao" : ISODate("2021-03-18T17:53:52.841Z"),
				"status" : "Confirmado",
				"recompensa" : {
					"idRecompensa" : UUID("657942f6-b44b-4dc1-ab7a-b40f9b18f62d"),
					"idPlano" : UUID("005d9991-e7c7-49ff-a617-fa3ce1bad9e5"),
					"nomePlano" : "Padrão - 4 diárias",
					"dataAdesao" : ISODate("2021-03-19T17:53:52.841Z"),
					"dataLiberacaoRecompensa" : ISODate("2021-03-27T03:00:00.000Z"),
					"motivoLiberacaoRecompensa" : "Uso de 80% das diárias",
					"valor" : NumberDecimal("150.00"),
					"pontos" : 10500
				}
			}
		],
		"endereco" : {
			"cep" : "07123100",
			"logradouro" : "Rua Belo Jardin",
			"numero" : 179,
			"complemento" : "",
			"bairro" : "Jardim Santa Clara",
			"municipio" : "Guarulhos",
			"municipioCodigoIbge" : "18800",
			"estadoSigla" : "SP",
			"estadoCodigoIbge" : "35"
		},
		"aceitaContatoWhatsapp" : true,
		"aceitaReceberIndicacoesMgm" : true,
		"dataCriacao" : ISODate("2021-02-16T17:53:52.841Z"),
		"dataAtualizacao" : ISODate("2021-03-19T17:53:52.841Z"),
		"dataDelecao" : null,
		"carteira" : {
			"pontos" : {
				"saldo" : NumberDecimal("10500"),
				"quantidadePendente" : NumberDecimal("0"),
				"pontosAcumulados" : [ 
					{
						"_id" : UUID("07fa2548-c50d-4d60-8cbe-bd5f81f7f699"),
						"quantidadeInicial" : NumberDecimal("10500"),
						"status" : "Confirmado",
						"notificacao" : true,
						"origem" : "MgmIndiqueGanhe",
						"descricao" : "Parabéns!",
						"codigoReferenciaOrigem" : "",
						"pontosRestantes" : NumberDecimal("0"),
						"valorDinheiro" : NumberDecimal("0.06"),
						"idPlano" : UUID("005d9991-e7c7-49ff-a617-fa3ce1bad9e5"),
						"dataRegistro" : ISODate("2021-03-19T17:53:52.841Z"),
						"dataVencimento" : ISODate("2022-03-19T17:53:52.841Z"),
						"dataPrevisaoEfetivacao" : ISODate("2021-03-19T17:53:52.841Z")
					}
				],
				"historicoTransacaoPontos" : [ 
					{
						"_id" : UUID("c102ccc2-0a6f-402a-8bfb-c5068fcc4c2c"),
						"quantidade" : NumberDecimal("10500"),
						"status" : "Confirmado",
						"origem" : "MgmIndiqueGanhe",
						"descricao" : "Parabéns!",
						"codigoReferenciaOrigem" : "",
						"tipoTransacao" : "Credito",
						"tipoMovimento" : "Credito",
						"idReferenciaTransacao" : [],
						"dataRegistro" : ISODate("2021-03-19T17:53:52.841Z"),
						"dataAtualizacao" : null,
						"tipoCredito" : "Pontos",
						"idPlano" : UUID("005d9991-e7c7-49ff-a617-fa3ce1bad9e5"),
						"planoPeriodo" : 1,
						"pontosUtilizados" : [ 
							{
								"_id" : UUID("fd1d5492-ca78-4f37-a34f-0b27ceed31df"),
								"idCreditoPontos" : UUID("0d653b80-09c7-4923-9aa7-9edc30146cd3"),
								"quantidade" : "10500"
							}
						]
					}, 
					{
						"_id" : UUID("143a5a55-d45f-4e7a-875c-49691c2add1c"),
						"quantidade" : NumberDecimal("10500"),
						"status" : "Confirmado",
						"origem" : "MgmIndiqueGanhe",
						"descricao" : "Parabéns!",
						"codigoReferenciaOrigem" : "",
						"tipoTransacao" : "Credito",
						"tipoMovimento" : "Credito",
						"idReferenciaTransacao" : [],
						"dataRegistro" : ISODate("2021-03-27T03:00:00.000Z"),
						"dataAtualizacao" : null,
						"tipoCredito" : "Pontos",
						"idPlano" : UUID("005d9991-e7c7-49ff-a617-fa3ce1bad9e5"),
						"planoPeriodo" : 1,
						"pontosUtilizados" : [ 
							{
								"_id" : UUID("3836581c-14e0-4700-a5da-759884852aba"),
								"idCreditoPontos" : UUID("1d80c345-53c3-46de-b28b-34c934e721f1"),
								"quantidade" : "10500"
							}
						]
					}
				]
			},
			"diarias" : {
				"historicoTransacaoDiarias" : []
			}
		},
		"notificarIntencaoUpgrade" : false,
		"dataNotificarIntencaoUpgrade" : null,
		"idPlanoIntencaoUpgrade" : UUID("00000000-0000-0000-0000-000000000000"),
		"equipes" : [],
		"verPremiacao" : false,
		"historicoPremiacoes" : []
	},
	{
		"_id" : ObjectId("60ab7be24bc0cb8a293602ac"),
		"id" : "57573109016",
		"nome" : "Freddy Teste Indicador PtConfirmado",
		"dataNascimento" : ISODate("1981-05-20T00:00:00.000Z"),
		"cpf" : "57573109016",
		"celular" : "11978654432",
		"emailPessoal" : "freddyteste.indicador@gmail.com",
		"empresas" : [ 
			{
				"_id" : "34008403000107",
				"nomeFantasia" : "Férias & Co",
				"razaoSocial" : "FERIAS & CO. VIAGENS E TURISMO LTDA",
				"segmento" : "Benefícios",
				"empresaProprietariaId" : "34008403000107",
				"site" : "http://www.ferias.co",
				"tipo" : "Cliente",
				"coparticipacao" : NumberDecimal("90"),
				"ativo" : true,
				"centroCusto" : null,
				"grupoOrganizacional" : null,
				"cnpj" : "34008403000107",
				"colaboradorRh" : {
					"telefone" : "",
					"ramal" : "",
					"emailCorporativo" : "freddyteste.indicador@ferias.co",
					"matricula" : "",
					"descontoFolha" : false,
					"cargo" : "",
					"area" : "TI",
					"departamento" : "",
					"coparticipacao" : null
				},
				"dataCriacao" : ISODate("2021-03-19T16:51:46.240Z"),
				"dataAtualizacao" : null,
				"dataDelecao" : null
			}
		],
		"planos" : [ 
			{
				"_id" : UUID("005d9991-e7c7-49ff-a617-fa3ce1bad9e5"),
				"empresaId" : "34008403000107",
				"titulo" : "Hotéis de 3 e 4 estrelas",
				"tipoPlano" : "Padrão",
				"valorPlano" : "90",
				"diariasTotais" : 4,
				"diariasDisponiveis" : 0,
				"valorDiariaMinima" : "0.01",
				"valorDiariaMaxima" : "216",
				"vigencia" : ISODate("2023-02-16T17:53:52.841Z"),
				"ativo" : true,
				"dataAdesao" : ISODate("2021-02-16T17:53:52.841Z"),
				"status" : "Ativo",
				"billing" : null,
				"fingerprint" : {
					"timestamp" : ISODate("2021-02-16T17:53:52.841Z"),
					"servidor" : "172.17.0.3",
					"geolocalizacao" : ";",
					"userAgent" : "Amazon CloudFront",
					"ip" : "181.191.198.135, 130.176.151.162, 10.42.2.162",
					"termoUso" : "\n<p>Seja bem-vindo à Férias & Co, sua plataforma de benefícios de viagens (“<span class=\"underline-text\">Plataforma</span>”).</p>\n<p>Por favor, leia atentamente os termos e condições abaixo estipulados (“<span class=\"underline-text\">Termos de Uso</span>”) \n    para utilizar a Plataforma e todos os serviços disponibilizados de maneira adequada.</p>\n<p><strong>CASO NÃO CONCORDE COM QUAISQUER DISPOSITIVOS DOS TERMOS DE USO, NÃO ACESSE OU UTILIZE \n    A NOSSA PLATAFORMA. SEU ACESSO E UTILIZAÇÃO REPRESENTAM SUA ACEITAÇÃO INTEGRAL E INCONDICIONAL \n    AOS TERMOS DE USO. \n    A <a href=\"assets/documents/ferias-e-co-politica-de-privacidade2019-11-22_v2.pdf\" target=\"_blank\">POLÍTICA DE PRIVACIDADE</a> \n    INTEGRA OS PRESENTES TERMOS DE USO. ESTA PLATAFORMA É DIRECIONADA APENAS PARA MAIORES DE 18 ANOS DE IDADE. \n    SE VOCÊ POSSUI MENOS DE 18 ANOS, POR FAVOR, CESSE IMEDIATAMENTE O ACESSO À PLATAFORMA.</strong>\n</p><br />\n<p><strong>1.</strong> <span class=\"underline-text\">Finalidade da Plataforma.</span> \n    A Plataforma tem a finalidade de proporcionar a colaboradores de empresas \n    associadas (“Associadas”) à Férias&Co a possibilidade de adquirir um plano de assinatura de benefícios \n    de viagem, sendo os colaboradores das Associadas os usuários finais (“Usuários”) da Plataforma. Por \n    meio da Plataforma, os Usuários podem adquirir um dos planos de assinaturas disponíveis, de acordo com \n    as configurações e contratações entre a Associada que o cadastrou inicialmente e a Férias&Co. Após a \n    aquisição de um dos planos de assinatura, o Usuário poderá contratar os serviços relacionados a viagem \n    e turismo disponíveis na Plataforma, tais como a reserva de hotéis, passagens aéreas, entre outros, \n    conforme aplicável. \n</p><br />\n<p><strong>2.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Controle e desenvolvimento da Plataforma.</span></span>\n    A Plataforma é controlada e desenvolvida pela <strong>FERIAS & CO. VIAGENS E TURISMO LTDA. (“Férias&Co”)</strong>, \n    pessoa jurídica inscrita no CNPJ/MF sob o nº 34.008.403/0001-07, com sede na Rua Manoel Coelho, 600 cj 211, Centro, \n    na cidade de São Caetano do Sul, Estado de São Paulo.\n</p><br />\n<p><strong>3.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Uso da Plataforma.</span></span> \n    O uso da Plataforma será efetuado exclusivamente através do acesso à rede mundial de computadores (Internet). \n    Para tanto, os Usuários deverão estar providos dos equipamentos necessários e apropriados, de acordo com as \n    especificações técnicas necessárias para o funcionamento da Plataforma, tais como computador com programa de \n    navegação (browser) devidamente instalado e licenciado, modem, bem como dos serviços de provimento e \n    infraestrutura de acesso à Internet.\n</p><br />\n<p><strong>4.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Acesso à Plataforma pelo Usuário.</span></span>\n    A Plataforma poderá ser acessada pelo Usuário por meio do site “www.ferias.co”. O Usuário poderá ter acesso à Plataforma \n    apenas após o envio das informações dos Usuários pela Associada em que presta serviços, momento em que terá a possibilidade \n    de registrar-se na Plataforma, criando um login e senha de acesso. O Usuário poderá então escolher e adquirir um dos planos \n    de assinatura. As opções de aquisição de planos de assinatura, conforme mencionado acima, bem como as formas de pagamento \n    pelos planos de assinatura, estarão diretamente relacionados às condições contratuais entre a Férias&Co e a Associada a \n    qual o Usuário está vinculado.\n</p>\n<p>A Férias&Co disponibiliza ao seu Usuário uma diversa gama de serviços de viagem e turismo, apresentando uma lista de empresas parceiras. \n</p>\n<p>O Usuário terá um período de carência de 6 (seis) mensalidades antes de utilizar os benefícios de seu plano, iniciando-se a partir do \n    primeiro dia do 7º (sétimo) mês subsequente ao da subscrição e cadastramento, encerrando-se no último dia do 18º (décimo oitavo) mês \n    de pagamento da mensalidade e assim sucessivamente. Tal período de carência apenas será dispensado mediante cadastro dos dados do \n    cartão de crédito e permissão de pagamento de parcelas no caso de rescisão contratual.\n</p><br />\n<p><strong>5.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Tipos de assinatura.</span></span>\n    A Férias&Co disponibiliza ao Usuário cinco (5) tipos de planos de benefícios para assinatura: Padrão, Superior, Premium, Especial e Exclusivo:\n</p>\n<p>\n    A Férias&Co reserva-se ao direito de alterar a cobertura dos planos acima mencionados, bem como de criar e remover categorias de planos. \n    ESTA SEÇÃO CONTÉM UMA BREVE DESCRIÇÃO DOS BENEFÍCIOS INCLUÍDOS EM CADA PLANO. O USUÁRIO DEVERÁ LER COM ATENÇÃO, NO MOMENTO DA CONTRATAÇÃO \n    E/OU DA UTILIZAÇÃO DE BENEFÍCIOS AS RESTRIÇÕES E OS REQUISITOS RELACIONADOS AO USO DOS BENEFÍCIOS. A FÉRIAS&CO. NÃO SE RESPONSABILIZA [\n    PELO USO INADEQUADO DOS BENEFÍCIOS POR PARTE DO USUÁRIO. EM CASO DE EXTINÇÃO DO PLANO, ELE PERMANECERÁ VIGENTE ATÉ COMPLETAR O PERÍODO \n    DE 12 MESES DE SUA AQUISIÇÃO. PASSADO ESSE PERÍODO, CASO O USUÁRIO QUEIRA CONTINUAR A USUFRUIR DOS BENEFÍCIOS, ELE DEVERÁ ESCOLHER UM \n    NOVO PLANO PARA DAR CONTINUIDADE A SUA RELAÇÃO COM A FÉRIAS&CO.\n</p><br />\n<p><strong>6.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Pagamento das assinaturas.</span></span>\n    A aquisição de um dos planos de assinatura disponíveis na Plataforma está sujeita ao pagamento pelo Usuário. A Férias&Co, por padrão, \n    oferece duas formas possíveis de pagamento: (i) o desconto em folha de pagamento, feito diretamente pela Associada; ou (ii) cartão de crédito, \n    por meio de cobrança mensal ao Usuário, estando a duração dos pagamentos vinculada diretamente à vigência do contrato entre a Associada a que o \n    Usuário está vinculado e a Férias&Co. Caso ocorra alguma falha no pagamento por meio de cartão de crédito, a Férias&Co tentará realizar mais \n    outras duas cobranças dentro do período de uma (1) semana, para que o Usuário regularize sua situação. Caso a situação não seja regularizada, \n    sua assinatura será automaticamente cancelada. Para faturamento por cartão de crédito, a Férias&Co utiliza um terceiro processador de pagamentos. \n    O processamento de tais pagamentos estará sujeito aos termos, às condições e às políticas de privacidade da empresa responsável por processar o \n    pagamento, além destes Termos. A Férias&Co não será responsável por erros cometidos pelo por esse terceiro. Além disso, a Férias&Co se reserva o \n    direito de corrigir quaisquer erros ou enganos cometidos no processo de faturamento mesmo que o pagamento já tenha sido solicitado ou recebido. \n    A Férias&Co não é responsável por quaisquer impostos que possam se aplicar à aquisição de Assinaturas ou sobre os produtos e serviços fornecidos. \n    Uma vez contratado, o plano será anual e seu pagamento será dividido em 12 parcelas mensais e estará sujeito à renovação automática por iguais \n    períodos de tempo.\n</p><br />\n<p><strong>7.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Cancelamento dos planos de assinatura:</span></span>\nCaso o Usuário pretenda o cancelamento de seu plano sem que tenha utilizado as diárias proporcionais aos valores pagos, o mesmo terá direito a recebê-las de \nforma proporcional ao valor pago, comprometendo-se a utilizar as referidas diárias durante a vigência do plano contratado. Caso o Usuário não se interesse \npela conversão dos valores pagos em diárias, poderá optar em receber o valor pago com a retenção do percentual de 20% a título de taxa administrativa. Para \nos casos em que o uso de diárias for maior que o pagamento efetuado, será necessário para o cancelamento o pagamento proporcional as diárias utilizadas. Para \nos casos de cancelamento com uso integral de seu plano, fica obrigado o Usuário a efetuar o pagamento de todas as parcelas restantes do plano contratado.\n</p><br />\n<p><strong>7.1</strong> <span class=\"underline-text\"><span class=\"italic-text\">Desligamento do Usuário e Associada:</span></span>\nPara os casos de desligamento entre Usuário e Associada, os planos que tiveram utilização total somente poderão ser cancelados após o pagamento integral das \nparcelas remanescentes. Nesse cenário, é facultado aos Usuários manterem seus planos ativos até o final do período aquisitivo, assumindo o pagamento integral \nda mensalidade por meio de cartão de crédito, que deverá ser informado no portal Férias&Co. Para os casos de desligamento sem que o usuário tenha utilizado as \ndiárias proporcionais aos valores pagos, o mesmo terá direito a recebê-las de forma proporcional ao valor pago, comprometendo-se a utilizar referidas diárias \ndurante a vigência do plano contratado, sob pena de desistência da utilização das diárias. Para os casos de desligamento com a utilização superior ao valor \npago, será cobrado o valor proporcional de uso das diárias pelo Usuário o qual assume o valor integral das mensalidades restantes através de pagamento via \ncartão de crédito cadastrado na plataforma. Poderá o Usuário, caso faça esta opção, assumir o pagamento integral do restante das mensalidades para utilização \ntotal do plano contratado. Já para os casos de desligamento sem a utilização do plano contratado, será liberado na plataforma as diárias proporcionais aos \nvalores pagos para utilização, tendo a possibilidade, também, de o Usuário assumir o pagamento integral do restante das mensalidades por meio de cartão de \ncrédito para utilização total do plano contratado durante sua vigência. Caso o Usuário não se interesse pela conversão dos valores pagos em diárias ou o \npagamento complementar do plano para uso integral das diárias contratadas, poderá optar em receber o valor pago com a retenção do percentual de 20% a título \nde taxa administrativa.\n<br><br>\nMensalidade integral do plano atualizada para os casos de desligamento entre Usuário e Associada até o final do período aquisitivo: R$ 90,00.\n</p><br>\n<p><strong>7.2</strong> <span class=\"underline-text\"><span class=\"italic-text\">Violação ao Termo de Uso:</span></span>\nPara o caso de cancelamento do plano de assinatura por violação aos Termos de Uso, o Usuário não fará jus a nenhum tipo de reembolso das quantias já pagas e \ndeverá pagar imediatamente os valores pendentes, caso tenha utilizado algum benefício de seu plano de assinaturas.\n</p><br />\n<p><strong>8.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Segurança do Usuário.</span></span>\n    A Férias&Co empreende e sempre empreenderá seus melhores esforços para garantir uma experiência agradável e segura da Plataforma para o Usuário. \n    Para garantir que um acesso seguro, recomenda-se ao Usuário que não entregue sua senha a ninguém, sendo de sua inteira responsabilidade manter \n    e manter todos os nomes de usuários e senhas confidenciais. Além disso, o Usuário é o único responsável por todas e quaisquer atividades que \n    ocorram em sua conta e será o único responsável por todo o uso de sua conta e senha e todos os danos diretos e indiretos resultantes da não \n    observância de referido requisito de segurança. O Usuário deverá notificar à Férias&Co imediatamente sobre qualquer uso não autorizado de \n    qualquer conta ou qualquer outra violação de segurança. A Férias&Co não pode e não será responsável por qualquer perda ou dano decorrente da \n    falha do Usuário em cumprir com estes requisitos.\n</p><br />\n<p><strong>9.</strong> <span class=\"underline-text\"><span class=\"italic-text\">\nVeracidade das informações fornecidas pelo Usuário e pelas Associadas.</span></span>\n    O Usuário se compromete a fornecer informações verdadeiras, exatas, atuais e completas quando de seu cadastramento para uso da Plataforma, \n    bem como a manter sempre atualizadas as referidas informações, seja junto da Plataforma ou junto à Associada que está vinculado. O fornecimento \n    de informação falsa ou a utilização indevida de dados de terceiros constitui crime tipificado pelo Código Penal Brasileiro. \n    A FÉRIAS&CO NÃO VERIFICA OU ASSUME QUALQUER RESPONSABILIDADE QUANTO À CONFIABILIDADE, EXATIDÃO, VALIDADE, ATUALIDADE, UTILIDADE, \n    INTEGRIDADE, PERTINÊNCIA, OPORTUNIDADE OU ABRANGÊNCIA DAS INFORMAÇÕES INSERIDAS PELO USUÁRIO OU PELAS ASSOCIADAS NA PLATAFORMA. \n    TODAS AS INFORMAÇÕES RELATIVAS AO CADASTRO DOS USUÁRIOS NA PLATAFORMA, TANTO SEUS DADOS PESSOAIS, COMO OUTROS DADOS E INFORMAÇÕES \n    QUE A PLATAFORMA PERMITE ARMAZENAR E GERENCIAR, SERÃO INSERIDAS NA PLATAFORMA PELO USUÁRIO OU PELAS ASSOCIADAS SOB SUA EXCLUSIVA \n    RESPONSABILIDADE.\n</p><br />\n<p><strong>10.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Privacidade do Usuário.</span></span>\n    A Política de Privacidade da Plataforma explicita de que maneira são tratadas as informações pessoais dos Usuários e como sua privacidade \n    é protegida, quando da utilização da Plataforma. O acesso à Política de Privacidade está <a href=\"assets/documents/ferias-e-co-politica-de-privacidade2019-11-22_v2.pdf\" target=\"_blank\">disponível no pdf</a>.\n</p><br />\n<p><strong>11.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Links a sites de terceiros.</span></span>\n    Nosso site pode conter links externos para outros sites detidos por terceiros que não são detidos ou controlados pela Férias&Co. \n    A Férias&Co não possui qualquer controle e não assume qualquer responsabilidade pelo conteúdo, políticas de privacidade ou práticas \n    de quaisquer serviços e sites de terceiros. Recomendamos a leitura dos termos e condições e das políticas de privacidade dos \n    sites de terceiros que visitar.\n</p><br />\n<p><strong>12.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Declarações do Usuário.</span></span>\n    O acesso à Plataforma pelos Usuário está diretamente vinculado ao estrito cumprimento destes Termos de Uso. Portanto, ao aceitar estes \n    Termos de Uso, o Usuário declara que: (a) seguirá os Termos de Uso e todas as leis aplicáveis; (b) fornecerá somente informações \n    verdadeiras e precisas; (c) não irá assediar, ameaçar ou abusar de outras pessoas ao usar a Plataforma; (d) não interferirá o uso ou \n    acesso à Plataforma de outros Usuários;(e) não publicará nenhum conteúdo obsceno ou ofensivo a terceiros, bem como discriminatório ou \n    preconceituoso por motivos de raça, gênero, orientação sexual, religião, entre outros; (f) não publicará nenhum conteúdo calunioso, \n    difamatório ou injurioso, ou que invada a privacidade alheia; (g) não coletará ou armazenará informações pessoais identificáveis \n    sobre quaisquer terceiros na Plataforma, ou perseguir de outra forma, contatar indevidamente ou assediar qualquer Usuário; (h) não \n    postará nenhum conteúdo que contenha vírus, bots, cavalos de Tróia, código nocivo ou outro software ou programa de computador \n    projetado para interromper a funcionalidade da Plataforma, a capacidade dos Usuários de desfrutar da Plataforma ou o funcionamento \n    adequado de qualquer software, hardware ou equipamento ou materiais utilizados em conexão com a Plataforma; (i) não usará nenhuma \n    informação na Plataforma para fins comerciais, exceto quando expressamente autorizado pela Férias & Co; (j) não pesquisará, ligará ou \n    vinculará nenhum dado ou informação a ou por meio da Plataforma sem o expresso consentimento e autorização da Férias & Co; e (k) não \n    enviará qualquer publicidade não solicitada, informações promocionais, e-mail ou outras solicitações em massa (incluindo, sem limitação, \n    lixo eletrônico, \"spam\", cartas em cadeia ou esquemas de pirâmide de qualquer tipo) a qualquer pessoa através do uso da Plataforma. \n    Caso alguma dessas diretrizes sejam definidas acima ou qualquer outro aspecto destes Termos de Uso, reservamos o direito de suspender \n    ou rescindir os direitos de uso da Plataforma sem aviso prévio.\n</p><br />\n<p><strong>13.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Consequências das violações aos Termos de Uso pelo Usuário.</span></span>\n    Sem prejuízo de outras medidas que entender cabíveis, a Férias&Co poderá advertir, suspender ou cancelar, temporária ou definitivamente, \n    o cadastro do Usuário, a qualquer tempo, iniciando as ações legais cabíveis e/ou suspendendo a execução destes Termos se o Usuário não \n    cumprir qualquer dispositivo aqui previsto. A Férias&Co ainda poderá tomar tais medidas se não puder ser verificada a identidade do \n    Usuário ou caso qualquer informação fornecida por ele esteja incorreta.\n</p><br />\n<p><strong>14.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Interrupções no uso da Plataforma.</span></span>\n    O USO DA PLATAFORMA ESTÁ SUJEITO A INTERRUPÇÕES, ATRASOS E PROBLEMAS INERENTES AO USO DA INTERNET E OUTROS TIPOS DE COMUNICAÇÃO ELETRÔNICA. \n    A FÉRIAS&CO NÃO SERÁ RESPONSÁVEL POR QUALQUER DESSAS INTERRUPÇÕES, ATRASOS OU PROBLEMAS, NEM POR EVENTUAIS DEFEITOS OU LIMITAÇÕES DOS \n    EQUIPAMENTOS OU DO BROWSER UTILIZADOS PELO USUÁRIO OU AINDA POR EVENTUAIS DEFEITOS OU LIMITAÇÕES DOS SERVIÇOS DE PROVIMENTO E INFRA-ESTRUTURA \n    DE ACESSO À INTERNET CONTRATADOS PELO USUÁRIO.\n</p><br />\n<p><strong>15.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Responsabilidade da Férias&Co perante atos de terceiros:</span></span>\n    O USUÁRIO DECLARA, ACEITA E RECONHECE QUE A FÉRIAS&CO NÃO POSSUI HOTÉIS, COMPANHIAS DE TRANSPORTE AÉREO, FERROVIÁRIO, MARINHO OU TERRESTRE E NÃO PRESTA \n    SERVIÇOS DE HOTELARIA OU DE TRANSPORTE AÉREO, FERROVIÁRIO, MARINHO OU TERRESTRE, SENDO TAIS SERVIÇOS PRESTADOS EXCLUSIVAMENTE PELOS PARCEIROS CREDENCIADOS \n    CONSTANTES DA PLATAFORMA E TAIS PARCEIROS CREDENCIADOS SÃO E SERÃO, PERANTE TODOS OS USUÁRIOS, INTEGRAL, ÚNICA E EXCLUSIVAMENTE RESPONSÁVEIS PELOS SERVIÇOS \n    PRESTADOS POR CADA UM DELES E SUAS CONSEQUÊNCIAS NOS TERMOS DA LEI, ESPECIALMENTE DA LEI Nº 10.406/2002 (CÓDIGO CIVIL) E DA LEI Nº 8.078/1990 (CÓDIGO DE \n    DEFESA DO CONSUMIDOR). A FÉRIAS&CO. NÃO PRESTA DECLARAÇÕES OU ASSUME QUALQUER OBRIGAÇÃO EM NOME, BENEFÍCIO OU PELOS PARCEIROS CREDENCIADOS QUE POSSAM SER \n    ACESSADOS NA PLATAFORMA.\n</p><br />\n<p><strong>16.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Licença limitada de uso à Plataforma.</span></span>\n    A Férias&Co concede ao Usuário uma licença limitada, não exclusiva e intransferível para utilizar a Plataforma de acordo com estes Termos de Uso.\n</p><br />\n<p><strong>17.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Propriedade intelectual da Férias&Co.</span></span>\n    Os Usuários reconhecem e concordam que a Férias&Co é a exclusiva titular de todos os direitos autorais e de propriedade intelectual relacionados \n    à Plataforma, e que tais direitos são protegidos pela Lei n.º 9.609, de 19 de fevereiro de 1998, e demais normas aplicáveis. O aceite aos presentes \n    Termos de Uso não implica a cessão ou transferência ao Usuário ou às Associadas de quaisquer direitos relativos à Plataforma, salvo aqueles direitos \n    expressamente previstos nestes Termos de Uso, observadas as limitações e demais condições aqui estabelecidas. É expressamente vedado aos Usuários \n    modificar ou tentar modificar qualquer funcionalidade da Plataforma. Além disso, o Usuário concorda em não reproduzir, duplicar, copiar, vender, \n    revender ou explorar qualquer parte das informações e conteúdo da Plataforma, bem como se obriga a utilizar a Plataforma de forma lícita e para as \n    finalidades autorizadas, sendo vedada a reprodução, distribuição, transformação, comercialização ou modificação, sem a prévia e expressa autorização \n    da Férias&Co, bem como fica vedado o fornecimento de login e senha para terceiros. O nome comercial Férias & Co., a marca Férias & Co., e os produtos \n    associados a essa marca são de exclusiva titularidade da Férias&Co e outras empresas de seu grupo econômico, não assistindo aos Usuários quaisquer \n    direitos eles relacionados. Nenhuma disposição destes Termos de Uso será interpretada como concessão aos Usuários de qualquer direito, título ou \n    interesse em qualquer propriedade intelectual da Férias&Co.\n</p><br />\n<p><strong>18.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Disponibilidade da Plataforma.</span></span>\n    A FÉRIAS&CO EMPREENDERÁ SEUS MELHORES ESFORÇOS PARA QUE A PLATAFORMA ESTEJA DISPONÍVEL 99,9% DO TEMPO. CONTUDO, A PLATAFORMA PODERÁ ESTAR INACESSÍVEL \n    EM MOMENTOS DE MANUTENÇÃO PREVENTIVA E DE MANUTENÇÃO DE QUAISQUER ERROS OU FALHAS. A FÉRIAS&CO NÃO ASSEGURA A IMPOSSIBILIDADE DO SEU SISTEMA E \n    SERVIDORES PODEREM SER ATACADOS, INVADIDOS, MODIFICADOS OU LESADOS, DE QUALQUER FORMA, POR TERCEIROS.\n</p><br />\n<p><strong>19.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Limitação de Responsabilidade.</span></span>\n    A FÉRIAS&CO NÃO SERÁ RESPONSÁVEL (I) PELA QUALIDADE OU DISPONIBILIDADE DA CONEXÃO DO DISPOSITIVO DO USUÁRIO À INTERNET EM QUALQUER CIRCUNSTÂNCIA; \n    (II) PELA IMPOSSIBILIDADE DE UTILIZAÇÃO DE QUAISQUER INFORMAÇÕES OU SERVIÇOS DISPONIVEIS EM RAZÃO DA INCOMPATIBILIDADE DA CONFIGURAÇÃO TÉCNICA DE \n    CONEXÃO DOS USUÁRIOS; E (III) POR QUAISQUER DANOS SOFRIDOS PELOS USUÁRIOS EM RAZÃO DA UTILIZAÇÃO DA PLATAFORMA DE FORMA DIVERSA DA ESTABELECIDA \n    NESTES TERMOS DE USO. \n</p><br />\n<p><strong>20.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Modificações aos Termos de Uso.</span></span>\n    A Férias&Co poderá, a seu exclusivo critério, realizar quaisquer modificações e/ou adições aos presentes Termos de Uso. Em caso de modificação \n    destes Termos de Uso, a Férias&Co irá disponibilizar um aviso na Plataforma e os novos Termos de Uso entrarão imediatamente em vigor, salvo na \n    hipótese em que as alterações sejam substanciais, hipótese em que podemos pedir uma nova manifestação de aquiescência. Salvo nessa última hipótese, \n    o acesso e utilização da Plataforma após a publicação das alterações representa a aceitação integral e incondicional aos novos Termos de Uso.\n</p><br />\n<p><strong>21.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Validade e eficácia dos Termos de Uso.</span></span>\n    A nulidade ou invalidade de qualquer cláusula destes Termos de Uso não prejudicará a validade e eficácia das demais cláusulas e dos próprios Termos de Uso.\n</p><br />\n<p><strong>22.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Lei aplicável e Foro.</span></span>\n    Os presentes Termos de Uso são regidos pelas leis da República Federativa do Brasil e fica eleito o foro da Capital do Estado de São Paulo, \n    com exclusão de qualquer outro, por mais privilegiado que seja ou possa vir a ser, para dirimir quaisquer litígios ou controvérsias oriundas \n    dos presentes Termos de Uso.\n</p><br />\n<p><strong>23.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Limitação de Responsabilidade.</span></span>\n    Quaisquer dúvidas, críticas, sugestões e /ou reclamações poderão ser feitas pelo e-mail “contato@ferias.co”.\n</p><br />\n",
					"termoDesconto" : "\n        <p>Pelo presente Termo de Adesão e Autorização de Débito em Folha de Pagamento, o signatário da presente\n        autoriza expressamente a Empresa, acima identificada, a realizar a retenção e desconto mensal, em folha\n        de pagamento, do valor contratado por mim a título de plano de assinaturas do Programa Férias & Co.,\n        conforme opção de assinatura por mim realizada diretamente na plataforma do Programa Férias & Co.,\n        mediante utilização do meu <span class=\"italic-text\">login</span> e senha pessoal, inclusive em caso de\n        renovação ou alteração das\n        condições do plano de assinatura, não sendo necessário para tanto qualquer aditamento a este\n        instrumento.</p><br />\n\n      <p>Ao assinar este instrumento, declaro ainda que (<span class=\"underline-text\">i</span>) sou plenamente\n        capaz de compreender as condições do\n        plano de assinaturas a que aderi, sou civilmente capaz e tenho condições jurídicas e financeiras de\n        cumprir as obrigações por mim assumidas; e (<span class=\"underline-text\">ii</span>) este instrumento é\n        devidamente assinado e formalizado e\n        constitui obrigação válida e vinculante, exequível de acordo com os termos e condições aqui previstos.\n      </p><br />\n\n      <p>Expressamente declaro ainda, estar ciente:</p><br />\n\n\n      <div class=\"topics\">\n        <p>\n          <li>\n            Dos termos, condições de uso e política do Férias&Co. disponíveis para consulta na plataforma\n            “Férias & Co”, à qual tenho acesso por meio de senha e login pessoais e individualizados;\n          </li>\n\n        </p><br />\n        <p>\n          <li>\n            Que a adesão ao programa Férias&Co., bem como a qualquer dos planos de assinatura, é opcional\n            e deve ser formalizada com o preenchimento e assinatura deste Termo de Adesão e Autorização de Débito em\n            Folha de\n            Pagamento;\n          </li>\n        </p><br />\n        <p>\n          <li>\n            Que a adesão ao programa Férias&Co., seu prazo, termos e condições constam dos Termos de\n            Uso, Política de Privacidade e demais políticas, termos e condições constantes da Plataforma, aos\n            quais aderi ao efetuar a contratação do meu plano de assinaturas e que me obrigo a cumprir\n            irrestritamente, sob pena de rescisão do meu plano de assinatura “Férias & Co”, além das demais\n            penalidades aplicáveis previstas em Lei;\n          </li>\n        </p><br />\n        <p>\n          <li>\n            Que o <span class=\"italic-text\">login</span> e senha de acesso à plataforma Férias&Co. são pessoais e\n            intransferíveis, de forma\n            que assumo total responsabilidade caso eu transmita a qualquer terceiro tais dados;\n          </li>\n        </p><br />\n\n        <p>\n          <li>\n            Que inexiste qualquer relação entre a contratação de parceiros credenciados ao Férias&Co e o\n            exercício das minhas atividades ou vínculo empregatício junto à Empresa e que as condições\n            especiais oferecidas pelo programa Férias&Co. não possuem caráter remuneratório ou de benefício;\n          </li>\n        </p><br />\n\n        <p>\n          <li>\n            Que o Férias&Co. não possui hotéis ou empresas de transporte aéreo ou terrestre e não presta\n            serviços de hotelaria ou de transporte aéreo ou terrestre, sendo os parceiros credenciados exclusiva\n            e integralmente responsáveis, nos termos da Lei, pelos serviços por elas prestados. O serviço a ser\n            fornecido pela Férias&Co. limita-se ao acesso à plataforma “Férias & Co” e à intermediação do\n            signatários com os parceiros credenciados nela constantes, não sendo a Férias & Co. obrigada a\n            executar os serviços de turismo que forem contratados pelo signatário diretamente com o parceiro\n            credenciado, nem é a Contratada responsável por falhas, seja do signatário ou do parceiro\n            credenciado, em uma contratação;\n          </li>\n        </p><br />\n\n        <p>\n          <li>\n            Que o acesso à Plataforma requerer acesso à internet em condições técnicas compatíveis às\n            exigidas pela Plataforma. Ademais, por se tratar de serviço oferecido online, o Férias & Co. está\n            sujeito a eventuais interrupções, suspensões ou bugs temporários, que poderão ou não ser sanáveis\n            pela Contratada ou seus prestadores de serviços, sem que isto justifique a rescisão deste Contrato\n            ou revisão de seus termos e condições;\n          </li>\n        </p><br />\n\n        <p>\n          <li>\n            Que a cada renovação do plano de assinaturas contratado por mim, os planos de assinaturas\n            disponíveis, seu preço, termos e condições e os serviços correspondentes oferecidos pela Férias &\n            Co poderão ser alterados, adicionados, excluídos ou complementados, a critério da Férias & Co.\n            Alterações dos termos e condições de um plano de assinaturas no curso de seu prazo de contratação\n            requererão adesão do signatário para serem implementadas e válidas.\n          </li>\n        </p><br />\n\n        <p>\n          <li>\n            Que minha assinatura poderá ser cancelada por decisão individual minha, da Férias & Co ou da\n            Empresa, observados os Termos de Uso da Plataforma e as condições de transição em caso de\n            rescisão, conforme constantes da Plataforma.\n          </li>\n        </p><br />\n      </div>\n\n      <p> Este instrumento é regido e será interpretado de acordo com as Leis da República Federativa do Brasil.\n        As Partes elegem o foro de [São Paulo, Estado de São Paulo], para dirimir quaisquer questões oriundas do\n        presente Contrato, renunciando a qualquer outro, por mais privilegiado que seja.\n      </p>\n"
				},
				"dataConfirmacaoAdesao" : ISODate("2021-02-16T17:53:52.841Z"),
				"periodo" : 1
			}
		],
		"mgmIndicacoesEfetuadas" : [ 
			{
				"nomeIndicado" : "Izaquiel Teste Indicado PtConfirmado",
				"cpfIndicado" : "24394086035",
				"razaoSocialIndicado" : "FERIAS & CO. VIAGENS E TURISMO LTDA",
				"cnpjIndicado" : "34008403000107",
				"emailIndicado" : "izaquielteste.indicado@ferias.co",
				"dataIndicacao" : ISODate("2021-03-18T17:53:52.841Z"),
				"status" : "Confirmado",
				"recompensa" : {
					"idRecompensa" : UUID("957fe30b-337d-48f9-bde5-bf51cba2f1d9"),
					"idPlano" : UUID("005d9991-e7c7-49ff-a617-fa3ce1bad9e5"),
					"nomePlano" : "Padrão - 4 diárias",
					"dataAdesao" : ISODate("2021-03-19T17:53:52.841Z"),
					"dataLiberacaoRecompensa" : ISODate("2021-05-22T17:53:52.841Z"),
					"motivoLiberacaoRecompensa" : "Se passaram 60 dias que o colaborador indicado assinou o plano",
					"valor" : NumberDecimal("200.00"),
					"pontos" : 10000
				}
			}
		],
		"mgmIndicacoesRecebidas" : null,
		"endereco" : {
			"cep" : "07082290",
			"logradouro" : "Rua Vicenzo Paciullo",
			"numero" : 277,
			"complemento" : "Ap 102 BL 2",
			"bairro" : "Jardim Las Vegas",
			"municipio" : "Guarulhos",
			"municipioCodigoIbge" : "18800",
			"estadoSigla" : "SP",
			"estadoCodigoIbge" : "35"
		},
		"aceitaContatoWhatsapp" : true,
		"aceitaReceberIndicacoesMgm" : false,
		"dataCriacao" : ISODate("2021-02-16T17:53:52.841Z"),
		"dataAtualizacao" : ISODate("2021-05-22T17:53:52.841Z"),
		"dataDelecao" : null,
		"carteira" : {
			"pontos" : {
				"saldo" : NumberDecimal("10000"),
				"quantidadePendente" : NumberDecimal("0"),
				"pontosAcumulados" : [ 
					{
						"_id" : UUID("8a36c021-e6ee-43c9-b332-8ee267ff93bd"),
						"quantidadeInicial" : NumberDecimal("10000"),
						"status" : "Confirmado",
						"notificacao" : true,
						"origem" : "MgmIndiqueGanhe",
						"descricao" : "Parabéns!",
						"codigoReferenciaOrigem" : "",
						"pontosRestantes" : NumberDecimal("0"),
						"valorDinheiro" : NumberDecimal("0.06"),
						"idPlano" : UUID("005d9991-e7c7-49ff-a617-fa3ce1bad9e5"),
						"dataRegistro" : ISODate("2021-05-22T17:53:52.841Z"),
						"dataVencimento" : ISODate("2022-05-22T17:53:52.841Z"),
						"dataPrevisaoEfetivacao" : ISODate("2021-05-22T17:53:52.841Z")
					}
				],
				"historicoTransacaoPontos" : [ 
					{
						"_id" : UUID("0ea2bad1-c1a3-4d68-870c-6e23866a7de3"),
						"quantidade" : NumberDecimal("10000"),
						"status" : "Confirmado",
						"origem" : "MgmIndiqueGanhe",
						"descricao" : "Parabéns!",
						"codigoReferenciaOrigem" : "",
						"tipoTransacao" : "Credito",
						"tipoMovimento" : "Credito",
						"idReferenciaTransacao" : [],
						"dataRegistro" : ISODate("2021-03-19T17:53:52.841Z"),
						"dataAtualizacao" : null,
						"tipoCredito" : "Pontos",
						"idPlano" : UUID("005d9991-e7c7-49ff-a617-fa3ce1bad9e5"),
						"planoPeriodo" : 1,
						"pontosUtilizados" : [ 
							{
								"_id" : UUID("413786b5-ddd2-4476-ab74-7d555d4e9457"),
								"idCreditoPontos" : UUID("fa77ea02-3ca7-4f93-99a1-eb142f78896d"),
								"quantidade" : "10000"
							}
						]
					}, 
					{
						"_id" : UUID("af715d47-2c83-435e-815f-e6985d5f6844"),
						"quantidade" : NumberDecimal("10000"),
						"status" : "Confirmado",
						"origem" : "MgmIndiqueGanhe",
						"descricao" : "Parabéns!",
						"codigoReferenciaOrigem" : "",
						"tipoTransacao" : "Credito",
						"tipoMovimento" : "Credito",
						"idReferenciaTransacao" : [],
						"dataRegistro" : ISODate("2021-05-22T17:53:52.841Z"),
						"dataAtualizacao" : null,
						"tipoCredito" : "Pontos",
						"idPlano" : UUID("005d9991-e7c7-49ff-a617-fa3ce1bad9e5"),
						"planoPeriodo" : 1,
						"pontosUtilizados" : [ 
							{
								"_id" : UUID("25dbdacf-859c-4990-a59e-d0f199388d16"),
								"idCreditoPontos" : UUID("24a5de35-6eb6-4b97-afc9-36e2fc2b0471"),
								"quantidade" : "10000"
							}
						]
					}
				]
			},
			"diarias" : {
				"historicoTransacaoDiarias" : [ 
					{
						"_id" : UUID("1277abfb-7ff5-4f86-9959-308c73bed1b5"),
						"quantidade" : NumberDecimal("4"),
						"status" : "Confirmado",
						"origem" : "Reserva",
						"descricao" : "Débito referente a reserva do Deck da Villa Pousada (Ubatuba, São Paulo, Brasil)",
						"codigoReferenciaOrigem" : null,
						"tipoTransacao" : "Debito",
						"tipoMovimento" : "Debito",
						"idReferenciaTransacao" : [],
						"dataRegistro" : ISODate("2021-03-29T21:19:08.810Z"),
						"dataAtualizacao" : ISODate("2021-03-29T21:19:08.810Z"),
						"tipoCredito" : "Diarias",
						"idPlano" : UUID("005d9991-e7c7-49ff-a617-fa3ce1bad9e5"),
						"planoPeriodo" : 1,
						"pontosUtilizados" : null
					}
				]
			}
		},
		"notificarIntencaoUpgrade" : false,
		"dataNotificarIntencaoUpgrade" : null,
		"idPlanoIntencaoUpgrade" : UUID("00000000-0000-0000-0000-000000000000"),
		"equipes" : [],
		"verPremiacao" : false,
		"historicoPremiacoes" : []
	},
	{
		"_id" : ObjectId("60ab7be24bc0cb8a293602ad"),
		"id" : "24394086035",
		"nome" : "Izaquiel Teste Indicado PtConfirmado",
		"dataNascimento" : ISODate("1983-06-12T00:00:00.000Z"),
		"cpf" : "24394086035",
		"celular" : "11998567765",
		"emailPessoal" : "izaquielteste.indicado@gmail.com",
		"empresas" : [ 
			{
				"_id" : "34008403000107",
				"nomeFantasia" : "Férias & Co",
				"razaoSocial" : "FERIAS & CO. VIAGENS E TURISMO LTDA",
				"segmento" : "Benefícios",
				"empresaProprietariaId" : "34008403000107",
				"site" : "http://www.ferias.co",
				"tipo" : "Cliente",
				"coparticipacao" : NumberDecimal("90"),
				"ativo" : true,
				"centroCusto" : null,
				"grupoOrganizacional" : null,
				"cnpj" : "34008403000107",
				"colaboradorRh" : {
					"telefone" : "",
					"ramal" : "",
					"emailCorporativo" : "izaquielteste.indicado@ferias.co",
					"matricula" : "",
					"descontoFolha" : false,
					"cargo" : "",
					"area" : "TI",
					"departamento" : "",
					"coparticipacao" : null
				},
				"dataCriacao" : ISODate("2021-03-19T16:51:46.240Z"),
				"dataAtualizacao" : null,
				"dataDelecao" : null
			}
		],
		"planos" : [ 
			{
				"_id" : UUID("005d9991-e7c7-49ff-a617-fa3ce1bad9e5"),
				"empresaId" : "34008403000107",
				"titulo" : "Hotéis de 3 e 4 estrelas",
				"tipoPlano" : "Padrão",
				"valorPlano" : "90",
				"diariasTotais" : 4,
				"diariasDisponiveis" : 4,
				"valorDiariaMinima" : "0.01",
				"valorDiariaMaxima" : "216",
				"vigencia" : ISODate("2023-03-19T17:53:52.841Z"),
				"ativo" : true,
				"dataAdesao" : ISODate("2021-03-19T17:53:52.841Z"),
				"status" : "Ativo",
				"billing" : null,
				"fingerprint" : {
					"timestamp" : ISODate("2021-03-19T17:53:52.841Z"),
					"servidor" : "172.17.0.3",
					"geolocalizacao" : ";",
					"userAgent" : "Amazon CloudFront",
					"ip" : "181.191.198.135, 130.176.151.162, 10.42.2.162",
					"termoUso" : "\n<p>Seja bem-vindo à Férias & Co, sua plataforma de benefícios de viagens (“<span class=\"underline-text\">Plataforma</span>”).</p>\n<p>Por favor, leia atentamente os termos e condições abaixo estipulados (“<span class=\"underline-text\">Termos de Uso</span>”) \n    para utilizar a Plataforma e todos os serviços disponibilizados de maneira adequada.</p>\n<p><strong>CASO NÃO CONCORDE COM QUAISQUER DISPOSITIVOS DOS TERMOS DE USO, NÃO ACESSE OU UTILIZE \n    A NOSSA PLATAFORMA. SEU ACESSO E UTILIZAÇÃO REPRESENTAM SUA ACEITAÇÃO INTEGRAL E INCONDICIONAL \n    AOS TERMOS DE USO. \n    A <a href=\"assets/documents/ferias-e-co-politica-de-privacidade2019-11-22_v2.pdf\" target=\"_blank\">POLÍTICA DE PRIVACIDADE</a> \n    INTEGRA OS PRESENTES TERMOS DE USO. ESTA PLATAFORMA É DIRECIONADA APENAS PARA MAIORES DE 18 ANOS DE IDADE. \n    SE VOCÊ POSSUI MENOS DE 18 ANOS, POR FAVOR, CESSE IMEDIATAMENTE O ACESSO À PLATAFORMA.</strong>\n</p><br />\n<p><strong>1.</strong> <span class=\"underline-text\">Finalidade da Plataforma.</span> \n    A Plataforma tem a finalidade de proporcionar a colaboradores de empresas \n    associadas (“Associadas”) à Férias&Co a possibilidade de adquirir um plano de assinatura de benefícios \n    de viagem, sendo os colaboradores das Associadas os usuários finais (“Usuários”) da Plataforma. Por \n    meio da Plataforma, os Usuários podem adquirir um dos planos de assinaturas disponíveis, de acordo com \n    as configurações e contratações entre a Associada que o cadastrou inicialmente e a Férias&Co. Após a \n    aquisição de um dos planos de assinatura, o Usuário poderá contratar os serviços relacionados a viagem \n    e turismo disponíveis na Plataforma, tais como a reserva de hotéis, passagens aéreas, entre outros, \n    conforme aplicável. \n</p><br />\n<p><strong>2.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Controle e desenvolvimento da Plataforma.</span></span>\n    A Plataforma é controlada e desenvolvida pela <strong>FERIAS & CO. VIAGENS E TURISMO LTDA. (“Férias&Co”)</strong>, \n    pessoa jurídica inscrita no CNPJ/MF sob o nº 34.008.403/0001-07, com sede na Rua Manoel Coelho, 600 cj 211, Centro, \n    na cidade de São Caetano do Sul, Estado de São Paulo.\n</p><br />\n<p><strong>3.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Uso da Plataforma.</span></span> \n    O uso da Plataforma será efetuado exclusivamente através do acesso à rede mundial de computadores (Internet). \n    Para tanto, os Usuários deverão estar providos dos equipamentos necessários e apropriados, de acordo com as \n    especificações técnicas necessárias para o funcionamento da Plataforma, tais como computador com programa de \n    navegação (browser) devidamente instalado e licenciado, modem, bem como dos serviços de provimento e \n    infraestrutura de acesso à Internet.\n</p><br />\n<p><strong>4.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Acesso à Plataforma pelo Usuário.</span></span>\n    A Plataforma poderá ser acessada pelo Usuário por meio do site “www.ferias.co”. O Usuário poderá ter acesso à Plataforma \n    apenas após o envio das informações dos Usuários pela Associada em que presta serviços, momento em que terá a possibilidade \n    de registrar-se na Plataforma, criando um login e senha de acesso. O Usuário poderá então escolher e adquirir um dos planos \n    de assinatura. As opções de aquisição de planos de assinatura, conforme mencionado acima, bem como as formas de pagamento \n    pelos planos de assinatura, estarão diretamente relacionados às condições contratuais entre a Férias&Co e a Associada a \n    qual o Usuário está vinculado.\n</p>\n<p>A Férias&Co disponibiliza ao seu Usuário uma diversa gama de serviços de viagem e turismo, apresentando uma lista de empresas parceiras. \n</p>\n<p>O Usuário terá um período de carência de 6 (seis) mensalidades antes de utilizar os benefícios de seu plano, iniciando-se a partir do \n    primeiro dia do 7º (sétimo) mês subsequente ao da subscrição e cadastramento, encerrando-se no último dia do 18º (décimo oitavo) mês \n    de pagamento da mensalidade e assim sucessivamente. Tal período de carência apenas será dispensado mediante cadastro dos dados do \n    cartão de crédito e permissão de pagamento de parcelas no caso de rescisão contratual.\n</p><br />\n<p><strong>5.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Tipos de assinatura.</span></span>\n    A Férias&Co disponibiliza ao Usuário cinco (5) tipos de planos de benefícios para assinatura: Padrão, Superior, Premium, Especial e Exclusivo:\n</p>\n<p>\n    A Férias&Co reserva-se ao direito de alterar a cobertura dos planos acima mencionados, bem como de criar e remover categorias de planos. \n    ESTA SEÇÃO CONTÉM UMA BREVE DESCRIÇÃO DOS BENEFÍCIOS INCLUÍDOS EM CADA PLANO. O USUÁRIO DEVERÁ LER COM ATENÇÃO, NO MOMENTO DA CONTRATAÇÃO \n    E/OU DA UTILIZAÇÃO DE BENEFÍCIOS AS RESTRIÇÕES E OS REQUISITOS RELACIONADOS AO USO DOS BENEFÍCIOS. A FÉRIAS&CO. NÃO SE RESPONSABILIZA [\n    PELO USO INADEQUADO DOS BENEFÍCIOS POR PARTE DO USUÁRIO. EM CASO DE EXTINÇÃO DO PLANO, ELE PERMANECERÁ VIGENTE ATÉ COMPLETAR O PERÍODO \n    DE 12 MESES DE SUA AQUISIÇÃO. PASSADO ESSE PERÍODO, CASO O USUÁRIO QUEIRA CONTINUAR A USUFRUIR DOS BENEFÍCIOS, ELE DEVERÁ ESCOLHER UM \n    NOVO PLANO PARA DAR CONTINUIDADE A SUA RELAÇÃO COM A FÉRIAS&CO.\n</p><br />\n<p><strong>6.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Pagamento das assinaturas.</span></span>\n    A aquisição de um dos planos de assinatura disponíveis na Plataforma está sujeita ao pagamento pelo Usuário. A Férias&Co, por padrão, \n    oferece duas formas possíveis de pagamento: (i) o desconto em folha de pagamento, feito diretamente pela Associada; ou (ii) cartão de crédito, \n    por meio de cobrança mensal ao Usuário, estando a duração dos pagamentos vinculada diretamente à vigência do contrato entre a Associada a que o \n    Usuário está vinculado e a Férias&Co. Caso ocorra alguma falha no pagamento por meio de cartão de crédito, a Férias&Co tentará realizar mais \n    outras duas cobranças dentro do período de uma (1) semana, para que o Usuário regularize sua situação. Caso a situação não seja regularizada, \n    sua assinatura será automaticamente cancelada. Para faturamento por cartão de crédito, a Férias&Co utiliza um terceiro processador de pagamentos. \n    O processamento de tais pagamentos estará sujeito aos termos, às condições e às políticas de privacidade da empresa responsável por processar o \n    pagamento, além destes Termos. A Férias&Co não será responsável por erros cometidos pelo por esse terceiro. Além disso, a Férias&Co se reserva o \n    direito de corrigir quaisquer erros ou enganos cometidos no processo de faturamento mesmo que o pagamento já tenha sido solicitado ou recebido. \n    A Férias&Co não é responsável por quaisquer impostos que possam se aplicar à aquisição de Assinaturas ou sobre os produtos e serviços fornecidos. \n    Uma vez contratado, o plano será anual e seu pagamento será dividido em 12 parcelas mensais e estará sujeito à renovação automática por iguais \n    períodos de tempo.\n</p><br />\n<p><strong>7.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Cancelamento dos planos de assinatura:</span></span>\nCaso o Usuário pretenda o cancelamento de seu plano sem que tenha utilizado as diárias proporcionais aos valores pagos, o mesmo terá direito a recebê-las de \nforma proporcional ao valor pago, comprometendo-se a utilizar as referidas diárias durante a vigência do plano contratado. Caso o Usuário não se interesse \npela conversão dos valores pagos em diárias, poderá optar em receber o valor pago com a retenção do percentual de 20% a título de taxa administrativa. Para \nos casos em que o uso de diárias for maior que o pagamento efetuado, será necessário para o cancelamento o pagamento proporcional as diárias utilizadas. Para \nos casos de cancelamento com uso integral de seu plano, fica obrigado o Usuário a efetuar o pagamento de todas as parcelas restantes do plano contratado.\n</p><br />\n<p><strong>7.1</strong> <span class=\"underline-text\"><span class=\"italic-text\">Desligamento do Usuário e Associada:</span></span>\nPara os casos de desligamento entre Usuário e Associada, os planos que tiveram utilização total somente poderão ser cancelados após o pagamento integral das \nparcelas remanescentes. Nesse cenário, é facultado aos Usuários manterem seus planos ativos até o final do período aquisitivo, assumindo o pagamento integral \nda mensalidade por meio de cartão de crédito, que deverá ser informado no portal Férias&Co. Para os casos de desligamento sem que o usuário tenha utilizado as \ndiárias proporcionais aos valores pagos, o mesmo terá direito a recebê-las de forma proporcional ao valor pago, comprometendo-se a utilizar referidas diárias \ndurante a vigência do plano contratado, sob pena de desistência da utilização das diárias. Para os casos de desligamento com a utilização superior ao valor \npago, será cobrado o valor proporcional de uso das diárias pelo Usuário o qual assume o valor integral das mensalidades restantes através de pagamento via \ncartão de crédito cadastrado na plataforma. Poderá o Usuário, caso faça esta opção, assumir o pagamento integral do restante das mensalidades para utilização \ntotal do plano contratado. Já para os casos de desligamento sem a utilização do plano contratado, será liberado na plataforma as diárias proporcionais aos \nvalores pagos para utilização, tendo a possibilidade, também, de o Usuário assumir o pagamento integral do restante das mensalidades por meio de cartão de \ncrédito para utilização total do plano contratado durante sua vigência. Caso o Usuário não se interesse pela conversão dos valores pagos em diárias ou o \npagamento complementar do plano para uso integral das diárias contratadas, poderá optar em receber o valor pago com a retenção do percentual de 20% a título \nde taxa administrativa.\n<br><br>\nMensalidade integral do plano atualizada para os casos de desligamento entre Usuário e Associada até o final do período aquisitivo: R$ 90,00.\n</p><br>\n<p><strong>7.2</strong> <span class=\"underline-text\"><span class=\"italic-text\">Violação ao Termo de Uso:</span></span>\nPara o caso de cancelamento do plano de assinatura por violação aos Termos de Uso, o Usuário não fará jus a nenhum tipo de reembolso das quantias já pagas e \ndeverá pagar imediatamente os valores pendentes, caso tenha utilizado algum benefício de seu plano de assinaturas.\n</p><br />\n<p><strong>8.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Segurança do Usuário.</span></span>\n    A Férias&Co empreende e sempre empreenderá seus melhores esforços para garantir uma experiência agradável e segura da Plataforma para o Usuário. \n    Para garantir que um acesso seguro, recomenda-se ao Usuário que não entregue sua senha a ninguém, sendo de sua inteira responsabilidade manter \n    e manter todos os nomes de usuários e senhas confidenciais. Além disso, o Usuário é o único responsável por todas e quaisquer atividades que \n    ocorram em sua conta e será o único responsável por todo o uso de sua conta e senha e todos os danos diretos e indiretos resultantes da não \n    observância de referido requisito de segurança. O Usuário deverá notificar à Férias&Co imediatamente sobre qualquer uso não autorizado de \n    qualquer conta ou qualquer outra violação de segurança. A Férias&Co não pode e não será responsável por qualquer perda ou dano decorrente da \n    falha do Usuário em cumprir com estes requisitos.\n</p><br />\n<p><strong>9.</strong> <span class=\"underline-text\"><span class=\"italic-text\">\nVeracidade das informações fornecidas pelo Usuário e pelas Associadas.</span></span>\n    O Usuário se compromete a fornecer informações verdadeiras, exatas, atuais e completas quando de seu cadastramento para uso da Plataforma, \n    bem como a manter sempre atualizadas as referidas informações, seja junto da Plataforma ou junto à Associada que está vinculado. O fornecimento \n    de informação falsa ou a utilização indevida de dados de terceiros constitui crime tipificado pelo Código Penal Brasileiro. \n    A FÉRIAS&CO NÃO VERIFICA OU ASSUME QUALQUER RESPONSABILIDADE QUANTO À CONFIABILIDADE, EXATIDÃO, VALIDADE, ATUALIDADE, UTILIDADE, \n    INTEGRIDADE, PERTINÊNCIA, OPORTUNIDADE OU ABRANGÊNCIA DAS INFORMAÇÕES INSERIDAS PELO USUÁRIO OU PELAS ASSOCIADAS NA PLATAFORMA. \n    TODAS AS INFORMAÇÕES RELATIVAS AO CADASTRO DOS USUÁRIOS NA PLATAFORMA, TANTO SEUS DADOS PESSOAIS, COMO OUTROS DADOS E INFORMAÇÕES \n    QUE A PLATAFORMA PERMITE ARMAZENAR E GERENCIAR, SERÃO INSERIDAS NA PLATAFORMA PELO USUÁRIO OU PELAS ASSOCIADAS SOB SUA EXCLUSIVA \n    RESPONSABILIDADE.\n</p><br />\n<p><strong>10.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Privacidade do Usuário.</span></span>\n    A Política de Privacidade da Plataforma explicita de que maneira são tratadas as informações pessoais dos Usuários e como sua privacidade \n    é protegida, quando da utilização da Plataforma. O acesso à Política de Privacidade está <a href=\"assets/documents/ferias-e-co-politica-de-privacidade2019-11-22_v2.pdf\" target=\"_blank\">disponível no pdf</a>.\n</p><br />\n<p><strong>11.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Links a sites de terceiros.</span></span>\n    Nosso site pode conter links externos para outros sites detidos por terceiros que não são detidos ou controlados pela Férias&Co. \n    A Férias&Co não possui qualquer controle e não assume qualquer responsabilidade pelo conteúdo, políticas de privacidade ou práticas \n    de quaisquer serviços e sites de terceiros. Recomendamos a leitura dos termos e condições e das políticas de privacidade dos \n    sites de terceiros que visitar.\n</p><br />\n<p><strong>12.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Declarações do Usuário.</span></span>\n    O acesso à Plataforma pelos Usuário está diretamente vinculado ao estrito cumprimento destes Termos de Uso. Portanto, ao aceitar estes \n    Termos de Uso, o Usuário declara que: (a) seguirá os Termos de Uso e todas as leis aplicáveis; (b) fornecerá somente informações \n    verdadeiras e precisas; (c) não irá assediar, ameaçar ou abusar de outras pessoas ao usar a Plataforma; (d) não interferirá o uso ou \n    acesso à Plataforma de outros Usuários;(e) não publicará nenhum conteúdo obsceno ou ofensivo a terceiros, bem como discriminatório ou \n    preconceituoso por motivos de raça, gênero, orientação sexual, religião, entre outros; (f) não publicará nenhum conteúdo calunioso, \n    difamatório ou injurioso, ou que invada a privacidade alheia; (g) não coletará ou armazenará informações pessoais identificáveis \n    sobre quaisquer terceiros na Plataforma, ou perseguir de outra forma, contatar indevidamente ou assediar qualquer Usuário; (h) não \n    postará nenhum conteúdo que contenha vírus, bots, cavalos de Tróia, código nocivo ou outro software ou programa de computador \n    projetado para interromper a funcionalidade da Plataforma, a capacidade dos Usuários de desfrutar da Plataforma ou o funcionamento \n    adequado de qualquer software, hardware ou equipamento ou materiais utilizados em conexão com a Plataforma; (i) não usará nenhuma \n    informação na Plataforma para fins comerciais, exceto quando expressamente autorizado pela Férias & Co; (j) não pesquisará, ligará ou \n    vinculará nenhum dado ou informação a ou por meio da Plataforma sem o expresso consentimento e autorização da Férias & Co; e (k) não \n    enviará qualquer publicidade não solicitada, informações promocionais, e-mail ou outras solicitações em massa (incluindo, sem limitação, \n    lixo eletrônico, \"spam\", cartas em cadeia ou esquemas de pirâmide de qualquer tipo) a qualquer pessoa através do uso da Plataforma. \n    Caso alguma dessas diretrizes sejam definidas acima ou qualquer outro aspecto destes Termos de Uso, reservamos o direito de suspender \n    ou rescindir os direitos de uso da Plataforma sem aviso prévio.\n</p><br />\n<p><strong>13.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Consequências das violações aos Termos de Uso pelo Usuário.</span></span>\n    Sem prejuízo de outras medidas que entender cabíveis, a Férias&Co poderá advertir, suspender ou cancelar, temporária ou definitivamente, \n    o cadastro do Usuário, a qualquer tempo, iniciando as ações legais cabíveis e/ou suspendendo a execução destes Termos se o Usuário não \n    cumprir qualquer dispositivo aqui previsto. A Férias&Co ainda poderá tomar tais medidas se não puder ser verificada a identidade do \n    Usuário ou caso qualquer informação fornecida por ele esteja incorreta.\n</p><br />\n<p><strong>14.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Interrupções no uso da Plataforma.</span></span>\n    O USO DA PLATAFORMA ESTÁ SUJEITO A INTERRUPÇÕES, ATRASOS E PROBLEMAS INERENTES AO USO DA INTERNET E OUTROS TIPOS DE COMUNICAÇÃO ELETRÔNICA. \n    A FÉRIAS&CO NÃO SERÁ RESPONSÁVEL POR QUALQUER DESSAS INTERRUPÇÕES, ATRASOS OU PROBLEMAS, NEM POR EVENTUAIS DEFEITOS OU LIMITAÇÕES DOS \n    EQUIPAMENTOS OU DO BROWSER UTILIZADOS PELO USUÁRIO OU AINDA POR EVENTUAIS DEFEITOS OU LIMITAÇÕES DOS SERVIÇOS DE PROVIMENTO E INFRA-ESTRUTURA \n    DE ACESSO À INTERNET CONTRATADOS PELO USUÁRIO.\n</p><br />\n<p><strong>15.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Responsabilidade da Férias&Co perante atos de terceiros:</span></span>\n    O USUÁRIO DECLARA, ACEITA E RECONHECE QUE A FÉRIAS&CO NÃO POSSUI HOTÉIS, COMPANHIAS DE TRANSPORTE AÉREO, FERROVIÁRIO, MARINHO OU TERRESTRE E NÃO PRESTA \n    SERVIÇOS DE HOTELARIA OU DE TRANSPORTE AÉREO, FERROVIÁRIO, MARINHO OU TERRESTRE, SENDO TAIS SERVIÇOS PRESTADOS EXCLUSIVAMENTE PELOS PARCEIROS CREDENCIADOS \n    CONSTANTES DA PLATAFORMA E TAIS PARCEIROS CREDENCIADOS SÃO E SERÃO, PERANTE TODOS OS USUÁRIOS, INTEGRAL, ÚNICA E EXCLUSIVAMENTE RESPONSÁVEIS PELOS SERVIÇOS \n    PRESTADOS POR CADA UM DELES E SUAS CONSEQUÊNCIAS NOS TERMOS DA LEI, ESPECIALMENTE DA LEI Nº 10.406/2002 (CÓDIGO CIVIL) E DA LEI Nº 8.078/1990 (CÓDIGO DE \n    DEFESA DO CONSUMIDOR). A FÉRIAS&CO. NÃO PRESTA DECLARAÇÕES OU ASSUME QUALQUER OBRIGAÇÃO EM NOME, BENEFÍCIO OU PELOS PARCEIROS CREDENCIADOS QUE POSSAM SER \n    ACESSADOS NA PLATAFORMA.\n</p><br />\n<p><strong>16.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Licença limitada de uso à Plataforma.</span></span>\n    A Férias&Co concede ao Usuário uma licença limitada, não exclusiva e intransferível para utilizar a Plataforma de acordo com estes Termos de Uso.\n</p><br />\n<p><strong>17.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Propriedade intelectual da Férias&Co.</span></span>\n    Os Usuários reconhecem e concordam que a Férias&Co é a exclusiva titular de todos os direitos autorais e de propriedade intelectual relacionados \n    à Plataforma, e que tais direitos são protegidos pela Lei n.º 9.609, de 19 de fevereiro de 1998, e demais normas aplicáveis. O aceite aos presentes \n    Termos de Uso não implica a cessão ou transferência ao Usuário ou às Associadas de quaisquer direitos relativos à Plataforma, salvo aqueles direitos \n    expressamente previstos nestes Termos de Uso, observadas as limitações e demais condições aqui estabelecidas. É expressamente vedado aos Usuários \n    modificar ou tentar modificar qualquer funcionalidade da Plataforma. Além disso, o Usuário concorda em não reproduzir, duplicar, copiar, vender, \n    revender ou explorar qualquer parte das informações e conteúdo da Plataforma, bem como se obriga a utilizar a Plataforma de forma lícita e para as \n    finalidades autorizadas, sendo vedada a reprodução, distribuição, transformação, comercialização ou modificação, sem a prévia e expressa autorização \n    da Férias&Co, bem como fica vedado o fornecimento de login e senha para terceiros. O nome comercial Férias & Co., a marca Férias & Co., e os produtos \n    associados a essa marca são de exclusiva titularidade da Férias&Co e outras empresas de seu grupo econômico, não assistindo aos Usuários quaisquer \n    direitos eles relacionados. Nenhuma disposição destes Termos de Uso será interpretada como concessão aos Usuários de qualquer direito, título ou \n    interesse em qualquer propriedade intelectual da Férias&Co.\n</p><br />\n<p><strong>18.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Disponibilidade da Plataforma.</span></span>\n    A FÉRIAS&CO EMPREENDERÁ SEUS MELHORES ESFORÇOS PARA QUE A PLATAFORMA ESTEJA DISPONÍVEL 99,9% DO TEMPO. CONTUDO, A PLATAFORMA PODERÁ ESTAR INACESSÍVEL \n    EM MOMENTOS DE MANUTENÇÃO PREVENTIVA E DE MANUTENÇÃO DE QUAISQUER ERROS OU FALHAS. A FÉRIAS&CO NÃO ASSEGURA A IMPOSSIBILIDADE DO SEU SISTEMA E \n    SERVIDORES PODEREM SER ATACADOS, INVADIDOS, MODIFICADOS OU LESADOS, DE QUALQUER FORMA, POR TERCEIROS.\n</p><br />\n<p><strong>19.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Limitação de Responsabilidade.</span></span>\n    A FÉRIAS&CO NÃO SERÁ RESPONSÁVEL (I) PELA QUALIDADE OU DISPONIBILIDADE DA CONEXÃO DO DISPOSITIVO DO USUÁRIO À INTERNET EM QUALQUER CIRCUNSTÂNCIA; \n    (II) PELA IMPOSSIBILIDADE DE UTILIZAÇÃO DE QUAISQUER INFORMAÇÕES OU SERVIÇOS DISPONIVEIS EM RAZÃO DA INCOMPATIBILIDADE DA CONFIGURAÇÃO TÉCNICA DE \n    CONEXÃO DOS USUÁRIOS; E (III) POR QUAISQUER DANOS SOFRIDOS PELOS USUÁRIOS EM RAZÃO DA UTILIZAÇÃO DA PLATAFORMA DE FORMA DIVERSA DA ESTABELECIDA \n    NESTES TERMOS DE USO. \n</p><br />\n<p><strong>20.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Modificações aos Termos de Uso.</span></span>\n    A Férias&Co poderá, a seu exclusivo critério, realizar quaisquer modificações e/ou adições aos presentes Termos de Uso. Em caso de modificação \n    destes Termos de Uso, a Férias&Co irá disponibilizar um aviso na Plataforma e os novos Termos de Uso entrarão imediatamente em vigor, salvo na \n    hipótese em que as alterações sejam substanciais, hipótese em que podemos pedir uma nova manifestação de aquiescência. Salvo nessa última hipótese, \n    o acesso e utilização da Plataforma após a publicação das alterações representa a aceitação integral e incondicional aos novos Termos de Uso.\n</p><br />\n<p><strong>21.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Validade e eficácia dos Termos de Uso.</span></span>\n    A nulidade ou invalidade de qualquer cláusula destes Termos de Uso não prejudicará a validade e eficácia das demais cláusulas e dos próprios Termos de Uso.\n</p><br />\n<p><strong>22.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Lei aplicável e Foro.</span></span>\n    Os presentes Termos de Uso são regidos pelas leis da República Federativa do Brasil e fica eleito o foro da Capital do Estado de São Paulo, \n    com exclusão de qualquer outro, por mais privilegiado que seja ou possa vir a ser, para dirimir quaisquer litígios ou controvérsias oriundas \n    dos presentes Termos de Uso.\n</p><br />\n<p><strong>23.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Limitação de Responsabilidade.</span></span>\n    Quaisquer dúvidas, críticas, sugestões e /ou reclamações poderão ser feitas pelo e-mail “contato@ferias.co”.\n</p><br />\n",
					"termoDesconto" : "\n        <p>Pelo presente Termo de Adesão e Autorização de Débito em Folha de Pagamento, o signatário da presente\n        autoriza expressamente a Empresa, acima identificada, a realizar a retenção e desconto mensal, em folha\n        de pagamento, do valor contratado por mim a título de plano de assinaturas do Programa Férias & Co.,\n        conforme opção de assinatura por mim realizada diretamente na plataforma do Programa Férias & Co.,\n        mediante utilização do meu <span class=\"italic-text\">login</span> e senha pessoal, inclusive em caso de\n        renovação ou alteração das\n        condições do plano de assinatura, não sendo necessário para tanto qualquer aditamento a este\n        instrumento.</p><br />\n\n      <p>Ao assinar este instrumento, declaro ainda que (<span class=\"underline-text\">i</span>) sou plenamente\n        capaz de compreender as condições do\n        plano de assinaturas a que aderi, sou civilmente capaz e tenho condições jurídicas e financeiras de\n        cumprir as obrigações por mim assumidas; e (<span class=\"underline-text\">ii</span>) este instrumento é\n        devidamente assinado e formalizado e\n        constitui obrigação válida e vinculante, exequível de acordo com os termos e condições aqui previstos.\n      </p><br />\n\n      <p>Expressamente declaro ainda, estar ciente:</p><br />\n\n\n      <div class=\"topics\">\n        <p>\n          <li>\n            Dos termos, condições de uso e política do Férias&Co. disponíveis para consulta na plataforma\n            “Férias & Co”, à qual tenho acesso por meio de senha e login pessoais e individualizados;\n          </li>\n\n        </p><br />\n        <p>\n          <li>\n            Que a adesão ao programa Férias&Co., bem como a qualquer dos planos de assinatura, é opcional\n            e deve ser formalizada com o preenchimento e assinatura deste Termo de Adesão e Autorização de Débito em\n            Folha de\n            Pagamento;\n          </li>\n        </p><br />\n        <p>\n          <li>\n            Que a adesão ao programa Férias&Co., seu prazo, termos e condições constam dos Termos de\n            Uso, Política de Privacidade e demais políticas, termos e condições constantes da Plataforma, aos\n            quais aderi ao efetuar a contratação do meu plano de assinaturas e que me obrigo a cumprir\n            irrestritamente, sob pena de rescisão do meu plano de assinatura “Férias & Co”, além das demais\n            penalidades aplicáveis previstas em Lei;\n          </li>\n        </p><br />\n        <p>\n          <li>\n            Que o <span class=\"italic-text\">login</span> e senha de acesso à plataforma Férias&Co. são pessoais e\n            intransferíveis, de forma\n            que assumo total responsabilidade caso eu transmita a qualquer terceiro tais dados;\n          </li>\n        </p><br />\n\n        <p>\n          <li>\n            Que inexiste qualquer relação entre a contratação de parceiros credenciados ao Férias&Co e o\n            exercício das minhas atividades ou vínculo empregatício junto à Empresa e que as condições\n            especiais oferecidas pelo programa Férias&Co. não possuem caráter remuneratório ou de benefício;\n          </li>\n        </p><br />\n\n        <p>\n          <li>\n            Que o Férias&Co. não possui hotéis ou empresas de transporte aéreo ou terrestre e não presta\n            serviços de hotelaria ou de transporte aéreo ou terrestre, sendo os parceiros credenciados exclusiva\n            e integralmente responsáveis, nos termos da Lei, pelos serviços por elas prestados. O serviço a ser\n            fornecido pela Férias&Co. limita-se ao acesso à plataforma “Férias & Co” e à intermediação do\n            signatários com os parceiros credenciados nela constantes, não sendo a Férias & Co. obrigada a\n            executar os serviços de turismo que forem contratados pelo signatário diretamente com o parceiro\n            credenciado, nem é a Contratada responsável por falhas, seja do signatário ou do parceiro\n            credenciado, em uma contratação;\n          </li>\n        </p><br />\n\n        <p>\n          <li>\n            Que o acesso à Plataforma requerer acesso à internet em condições técnicas compatíveis às\n            exigidas pela Plataforma. Ademais, por se tratar de serviço oferecido online, o Férias & Co. está\n            sujeito a eventuais interrupções, suspensões ou bugs temporários, que poderão ou não ser sanáveis\n            pela Contratada ou seus prestadores de serviços, sem que isto justifique a rescisão deste Contrato\n            ou revisão de seus termos e condições;\n          </li>\n        </p><br />\n\n        <p>\n          <li>\n            Que a cada renovação do plano de assinaturas contratado por mim, os planos de assinaturas\n            disponíveis, seu preço, termos e condições e os serviços correspondentes oferecidos pela Férias &\n            Co poderão ser alterados, adicionados, excluídos ou complementados, a critério da Férias & Co.\n            Alterações dos termos e condições de um plano de assinaturas no curso de seu prazo de contratação\n            requererão adesão do signatário para serem implementadas e válidas.\n          </li>\n        </p><br />\n\n        <p>\n          <li>\n            Que minha assinatura poderá ser cancelada por decisão individual minha, da Férias & Co ou da\n            Empresa, observados os Termos de Uso da Plataforma e as condições de transição em caso de\n            rescisão, conforme constantes da Plataforma.\n          </li>\n        </p><br />\n      </div>\n\n      <p> Este instrumento é regido e será interpretado de acordo com as Leis da República Federativa do Brasil.\n        As Partes elegem o foro de [São Paulo, Estado de São Paulo], para dirimir quaisquer questões oriundas do\n        presente Contrato, renunciando a qualquer outro, por mais privilegiado que seja.\n      </p>\n"
				},
				"dataConfirmacaoAdesao" : ISODate("2021-03-27T03:00:00.000Z"),
				"periodo" : 1
			}
		],
		"mgmIndicacoesEfetuadas" : null,
		"mgmIndicacoesRecebidas" : [ 
			{
				"nomeIndicador" : "Freddy Teste Indicador PtConfirmado",
				"cpfIndicador" : "57573109016",
				"razaoSocialIndicador" : "FERIAS & CO. VIAGENS E TURISMO LTDA",
				"cnpjIndicador" : "34008403000107",
				"dataIndicacao" : ISODate("2021-03-18T17:53:52.841Z"),
				"status" : "Confirmado",
				"recompensa" : {
					"idRecompensa" : UUID("f6ed36a0-34b4-4530-9124-3134aa47b70e"),
					"idPlano" : UUID("005d9991-e7c7-49ff-a617-fa3ce1bad9e5"),
					"nomePlano" : "Padrão - 4 diárias",
					"dataAdesao" : ISODate("2021-03-19T17:53:52.841Z"),
					"dataLiberacaoRecompensa" : ISODate("2021-03-27T03:00:00.000Z"),
					"motivoLiberacaoRecompensa" : "Uso de 80% das diárias",
					"valor" : NumberDecimal("250.00"),
					"pontos" : 10500
				}
			}
		],
		"endereco" : {
			"cep" : "07123100",
			"logradouro" : "Rua Belo Jardin",
			"numero" : 179,
			"complemento" : "",
			"bairro" : "Jardim Santa Clara",
			"municipio" : "Guarulhos",
			"municipioCodigoIbge" : "18800",
			"estadoSigla" : "SP",
			"estadoCodigoIbge" : "35"
		},
		"aceitaContatoWhatsapp" : true,
		"aceitaReceberIndicacoesMgm" : true,
		"dataCriacao" : ISODate("2021-02-16T17:53:52.841Z"),
		"dataAtualizacao" : ISODate("2021-03-19T17:53:52.841Z"),
		"dataDelecao" : null,
		"carteira" : {
			"pontos" : {
				"saldo" : NumberDecimal("10500"),
				"quantidadePendente" : NumberDecimal("0"),
				"pontosAcumulados" : [ 
					{
						"_id" : UUID("ce5c3664-c2d9-4629-bfab-eafad7f073ea"),
						"quantidadeInicial" : NumberDecimal("10500"),
						"status" : "Confirmado",
						"notificacao" : true,
						"origem" : "MgmIndiqueGanhe",
						"descricao" : "Parabéns!",
						"codigoReferenciaOrigem" : "",
						"pontosRestantes" : NumberDecimal("10500"),
						"valorDinheiro" : NumberDecimal("0.06"),
						"idPlano" : UUID("005d9991-e7c7-49ff-a617-fa3ce1bad9e5"),
						"dataRegistro" : ISODate("2021-03-19T17:53:52.841Z"),
						"dataVencimento" : ISODate("2022-03-19T17:53:52.841Z"),
						"dataPrevisaoEfetivacao" : ISODate("2021-03-19T17:53:52.841Z")
					}
				],
				"historicoTransacaoPontos" : [ 
					{
						"_id" : UUID("e2ba6ec0-1e97-4d4b-80e5-1331039f1b6a"),
						"quantidade" : NumberDecimal("10500"),
						"status" : "Confirmado",
						"origem" : "MgmIndiqueGanhe",
						"descricao" : "Parabéns!",
						"codigoReferenciaOrigem" : "",
						"tipoTransacao" : "Credito",
						"tipoMovimento" : "Credito",
						"idReferenciaTransacao" : [],
						"dataRegistro" : ISODate("2021-03-19T17:53:52.841Z"),
						"dataAtualizacao" : null,
						"tipoCredito" : "Pontos",
						"idPlano" : UUID("005d9991-e7c7-49ff-a617-fa3ce1bad9e5"),
						"planoPeriodo" : 1,
						"pontosUtilizados" : [ 
							{
								"_id" : UUID("1bdad84b-0158-4545-9093-25779297f3db"),
								"idCreditoPontos" : UUID("44dfd922-ed1d-4da5-8688-7f26fe46dffd"),
								"quantidade" : "10500"
							}
						]
					}, 
					{
						"_id" : UUID("55999a63-aae8-4fc5-8553-9ed92cf69eb8"),
						"quantidade" : NumberDecimal("10500"),
						"status" : "Confirmado",
						"origem" : "MgmIndiqueGanhe",
						"descricao" : "Parabéns!",
						"codigoReferenciaOrigem" : "",
						"tipoTransacao" : "Credito",
						"tipoMovimento" : "Credito",
						"idReferenciaTransacao" : [],
						"dataRegistro" : ISODate("2021-03-27T03:00:00.000Z"),
						"dataAtualizacao" : null,
						"tipoCredito" : "Pontos",
						"idPlano" : UUID("005d9991-e7c7-49ff-a617-fa3ce1bad9e5"),
						"planoPeriodo" : 1,
						"pontosUtilizados" : [ 
							{
								"_id" : UUID("55b328fc-29b2-40a1-b3cb-0f7a69535760"),
								"idCreditoPontos" : UUID("059fef93-5430-4b29-873e-2aae7531c37c"),
								"quantidade" : "10500"
							}
						]
					}
				]
			},
			"diarias" : {
				"historicoTransacaoDiarias" : []
			}
		},
		"notificarIntencaoUpgrade" : false,
		"dataNotificarIntencaoUpgrade" : null,
		"idPlanoIntencaoUpgrade" : UUID("00000000-0000-0000-0000-000000000000"),
		"equipes" : [],
		"verPremiacao" : false,
		"historicoPremiacoes" : []
	},
	{
		"_id" : ObjectId("60b42e3c1c86803634ff84f3"),
		"id" : "67881584017",
		"nome" : "David Teste Indicador",
		"dataNascimento" : ISODate("1981-05-20T00:00:00.000Z"),
		"cpf" : "67881584017",
		"celular" : "11978654432",
		"emailPessoal" : "davidteste.indicador@gmail.com",
		"empresas" : [ 
			{
				"_id" : "34008403000107",
				"nomeFantasia" : "Férias & Co",
				"razaoSocial" : "FERIAS & CO. VIAGENS E TURISMO LTDA",
				"segmento" : "Benefícios",
				"empresaProprietariaId" : "34008403000107",
				"site" : "http://www.ferias.co",
				"tipo" : "Cliente",
				"coparticipacao" : NumberDecimal("90"),
				"ativo" : true,
				"centroCusto" : null,
				"grupoOrganizacional" : null,
				"cnpj" : "34008403000107",
				"colaboradorRh" : {
					"telefone" : "",
					"ramal" : "",
					"emailCorporativo" : "davidteste.indicador@ferias.co",
					"matricula" : "",
					"descontoFolha" : false,
					"cargo" : "",
					"area" : "TI",
					"departamento" : "",
					"coparticipacao" : null
				},
				"dataCriacao" : ISODate("2021-03-19T16:51:46.240Z"),
				"dataAtualizacao" : null,
				"dataDelecao" : null
			}
		],
		"planos" : [ 
			{
				"_id" : UUID("005d9991-e7c7-49ff-a617-fa3ce1bad9e5"),
				"empresaId" : "34008403000107",
				"titulo" : "Hotéis de 3 e 4 estrelas",
				"tipoPlano" : "Padrão",
				"valorPlano" : "90",
				"diariasTotais" : 4,
				"diariasDisponiveis" : 0,
				"valorDiariaMinima" : "0.01",
				"valorDiariaMaxima" : "216",
				"vigencia" : ISODate("2023-02-16T17:53:52.841Z"),
				"ativo" : true,
				"dataAdesao" : ISODate("2021-02-16T17:53:52.841Z"),
				"status" : "Ativo",
				"billing" : null,
				"fingerprint" : {
					"timestamp" : ISODate("2021-02-16T17:53:52.841Z"),
					"servidor" : "172.17.0.3",
					"geolocalizacao" : ";",
					"userAgent" : "Amazon CloudFront",
					"ip" : "181.191.198.135, 130.176.151.162, 10.42.2.162",
					"termoUso" : "\n<p>Seja bem-vindo à Férias & Co, sua plataforma de benefícios de viagens (“<span class=\"underline-text\">Plataforma</span>”).</p>\n<p>Por favor, leia atentamente os termos e condições abaixo estipulados (“<span class=\"underline-text\">Termos de Uso</span>”) \n    para utilizar a Plataforma e todos os serviços disponibilizados de maneira adequada.</p>\n<p><strong>CASO NÃO CONCORDE COM QUAISQUER DISPOSITIVOS DOS TERMOS DE USO, NÃO ACESSE OU UTILIZE \n    A NOSSA PLATAFORMA. SEU ACESSO E UTILIZAÇÃO REPRESENTAM SUA ACEITAÇÃO INTEGRAL E INCONDICIONAL \n    AOS TERMOS DE USO. \n    A <a href=\"assets/documents/ferias-e-co-politica-de-privacidade2019-11-22_v2.pdf\" target=\"_blank\">POLÍTICA DE PRIVACIDADE</a> \n    INTEGRA OS PRESENTES TERMOS DE USO. ESTA PLATAFORMA É DIRECIONADA APENAS PARA MAIORES DE 18 ANOS DE IDADE. \n    SE VOCÊ POSSUI MENOS DE 18 ANOS, POR FAVOR, CESSE IMEDIATAMENTE O ACESSO À PLATAFORMA.</strong>\n</p><br />\n<p><strong>1.</strong> <span class=\"underline-text\">Finalidade da Plataforma.</span> \n    A Plataforma tem a finalidade de proporcionar a colaboradores de empresas \n    associadas (“Associadas”) à Férias&Co a possibilidade de adquirir um plano de assinatura de benefícios \n    de viagem, sendo os colaboradores das Associadas os usuários finais (“Usuários”) da Plataforma. Por \n    meio da Plataforma, os Usuários podem adquirir um dos planos de assinaturas disponíveis, de acordo com \n    as configurações e contratações entre a Associada que o cadastrou inicialmente e a Férias&Co. Após a \n    aquisição de um dos planos de assinatura, o Usuário poderá contratar os serviços relacionados a viagem \n    e turismo disponíveis na Plataforma, tais como a reserva de hotéis, passagens aéreas, entre outros, \n    conforme aplicável. \n</p><br />\n<p><strong>2.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Controle e desenvolvimento da Plataforma.</span></span>\n    A Plataforma é controlada e desenvolvida pela <strong>FERIAS & CO. VIAGENS E TURISMO LTDA. (“Férias&Co”)</strong>, \n    pessoa jurídica inscrita no CNPJ/MF sob o nº 34.008.403/0001-07, com sede na Rua Manoel Coelho, 600 cj 211, Centro, \n    na cidade de São Caetano do Sul, Estado de São Paulo.\n</p><br />\n<p><strong>3.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Uso da Plataforma.</span></span> \n    O uso da Plataforma será efetuado exclusivamente através do acesso à rede mundial de computadores (Internet). \n    Para tanto, os Usuários deverão estar providos dos equipamentos necessários e apropriados, de acordo com as \n    especificações técnicas necessárias para o funcionamento da Plataforma, tais como computador com programa de \n    navegação (browser) devidamente instalado e licenciado, modem, bem como dos serviços de provimento e \n    infraestrutura de acesso à Internet.\n</p><br />\n<p><strong>4.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Acesso à Plataforma pelo Usuário.</span></span>\n    A Plataforma poderá ser acessada pelo Usuário por meio do site “www.ferias.co”. O Usuário poderá ter acesso à Plataforma \n    apenas após o envio das informações dos Usuários pela Associada em que presta serviços, momento em que terá a possibilidade \n    de registrar-se na Plataforma, criando um login e senha de acesso. O Usuário poderá então escolher e adquirir um dos planos \n    de assinatura. As opções de aquisição de planos de assinatura, conforme mencionado acima, bem como as formas de pagamento \n    pelos planos de assinatura, estarão diretamente relacionados às condições contratuais entre a Férias&Co e a Associada a \n    qual o Usuário está vinculado.\n</p>\n<p>A Férias&Co disponibiliza ao seu Usuário uma diversa gama de serviços de viagem e turismo, apresentando uma lista de empresas parceiras. \n</p>\n<p>O Usuário terá um período de carência de 6 (seis) mensalidades antes de utilizar os benefícios de seu plano, iniciando-se a partir do \n    primeiro dia do 7º (sétimo) mês subsequente ao da subscrição e cadastramento, encerrando-se no último dia do 18º (décimo oitavo) mês \n    de pagamento da mensalidade e assim sucessivamente. Tal período de carência apenas será dispensado mediante cadastro dos dados do \n    cartão de crédito e permissão de pagamento de parcelas no caso de rescisão contratual.\n</p><br />\n<p><strong>5.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Tipos de assinatura.</span></span>\n    A Férias&Co disponibiliza ao Usuário cinco (5) tipos de planos de benefícios para assinatura: Padrão, Superior, Premium, Especial e Exclusivo:\n</p>\n<p>\n    A Férias&Co reserva-se ao direito de alterar a cobertura dos planos acima mencionados, bem como de criar e remover categorias de planos. \n    ESTA SEÇÃO CONTÉM UMA BREVE DESCRIÇÃO DOS BENEFÍCIOS INCLUÍDOS EM CADA PLANO. O USUÁRIO DEVERÁ LER COM ATENÇÃO, NO MOMENTO DA CONTRATAÇÃO \n    E/OU DA UTILIZAÇÃO DE BENEFÍCIOS AS RESTRIÇÕES E OS REQUISITOS RELACIONADOS AO USO DOS BENEFÍCIOS. A FÉRIAS&CO. NÃO SE RESPONSABILIZA [\n    PELO USO INADEQUADO DOS BENEFÍCIOS POR PARTE DO USUÁRIO. EM CASO DE EXTINÇÃO DO PLANO, ELE PERMANECERÁ VIGENTE ATÉ COMPLETAR O PERÍODO \n    DE 12 MESES DE SUA AQUISIÇÃO. PASSADO ESSE PERÍODO, CASO O USUÁRIO QUEIRA CONTINUAR A USUFRUIR DOS BENEFÍCIOS, ELE DEVERÁ ESCOLHER UM \n    NOVO PLANO PARA DAR CONTINUIDADE A SUA RELAÇÃO COM A FÉRIAS&CO.\n</p><br />\n<p><strong>6.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Pagamento das assinaturas.</span></span>\n    A aquisição de um dos planos de assinatura disponíveis na Plataforma está sujeita ao pagamento pelo Usuário. A Férias&Co, por padrão, \n    oferece duas formas possíveis de pagamento: (i) o desconto em folha de pagamento, feito diretamente pela Associada; ou (ii) cartão de crédito, \n    por meio de cobrança mensal ao Usuário, estando a duração dos pagamentos vinculada diretamente à vigência do contrato entre a Associada a que o \n    Usuário está vinculado e a Férias&Co. Caso ocorra alguma falha no pagamento por meio de cartão de crédito, a Férias&Co tentará realizar mais \n    outras duas cobranças dentro do período de uma (1) semana, para que o Usuário regularize sua situação. Caso a situação não seja regularizada, \n    sua assinatura será automaticamente cancelada. Para faturamento por cartão de crédito, a Férias&Co utiliza um terceiro processador de pagamentos. \n    O processamento de tais pagamentos estará sujeito aos termos, às condições e às políticas de privacidade da empresa responsável por processar o \n    pagamento, além destes Termos. A Férias&Co não será responsável por erros cometidos pelo por esse terceiro. Além disso, a Férias&Co se reserva o \n    direito de corrigir quaisquer erros ou enganos cometidos no processo de faturamento mesmo que o pagamento já tenha sido solicitado ou recebido. \n    A Férias&Co não é responsável por quaisquer impostos que possam se aplicar à aquisição de Assinaturas ou sobre os produtos e serviços fornecidos. \n    Uma vez contratado, o plano será anual e seu pagamento será dividido em 12 parcelas mensais e estará sujeito à renovação automática por iguais \n    períodos de tempo.\n</p><br />\n<p><strong>7.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Cancelamento dos planos de assinatura:</span></span>\nCaso o Usuário pretenda o cancelamento de seu plano sem que tenha utilizado as diárias proporcionais aos valores pagos, o mesmo terá direito a recebê-las de \nforma proporcional ao valor pago, comprometendo-se a utilizar as referidas diárias durante a vigência do plano contratado. Caso o Usuário não se interesse \npela conversão dos valores pagos em diárias, poderá optar em receber o valor pago com a retenção do percentual de 20% a título de taxa administrativa. Para \nos casos em que o uso de diárias for maior que o pagamento efetuado, será necessário para o cancelamento o pagamento proporcional as diárias utilizadas. Para \nos casos de cancelamento com uso integral de seu plano, fica obrigado o Usuário a efetuar o pagamento de todas as parcelas restantes do plano contratado.\n</p><br />\n<p><strong>7.1</strong> <span class=\"underline-text\"><span class=\"italic-text\">Desligamento do Usuário e Associada:</span></span>\nPara os casos de desligamento entre Usuário e Associada, os planos que tiveram utilização total somente poderão ser cancelados após o pagamento integral das \nparcelas remanescentes. Nesse cenário, é facultado aos Usuários manterem seus planos ativos até o final do período aquisitivo, assumindo o pagamento integral \nda mensalidade por meio de cartão de crédito, que deverá ser informado no portal Férias&Co. Para os casos de desligamento sem que o usuário tenha utilizado as \ndiárias proporcionais aos valores pagos, o mesmo terá direito a recebê-las de forma proporcional ao valor pago, comprometendo-se a utilizar referidas diárias \ndurante a vigência do plano contratado, sob pena de desistência da utilização das diárias. Para os casos de desligamento com a utilização superior ao valor \npago, será cobrado o valor proporcional de uso das diárias pelo Usuário o qual assume o valor integral das mensalidades restantes através de pagamento via \ncartão de crédito cadastrado na plataforma. Poderá o Usuário, caso faça esta opção, assumir o pagamento integral do restante das mensalidades para utilização \ntotal do plano contratado. Já para os casos de desligamento sem a utilização do plano contratado, será liberado na plataforma as diárias proporcionais aos \nvalores pagos para utilização, tendo a possibilidade, também, de o Usuário assumir o pagamento integral do restante das mensalidades por meio de cartão de \ncrédito para utilização total do plano contratado durante sua vigência. Caso o Usuário não se interesse pela conversão dos valores pagos em diárias ou o \npagamento complementar do plano para uso integral das diárias contratadas, poderá optar em receber o valor pago com a retenção do percentual de 20% a título \nde taxa administrativa.\n<br><br>\nMensalidade integral do plano atualizada para os casos de desligamento entre Usuário e Associada até o final do período aquisitivo: R$ 90,00.\n</p><br>\n<p><strong>7.2</strong> <span class=\"underline-text\"><span class=\"italic-text\">Violação ao Termo de Uso:</span></span>\nPara o caso de cancelamento do plano de assinatura por violação aos Termos de Uso, o Usuário não fará jus a nenhum tipo de reembolso das quantias já pagas e \ndeverá pagar imediatamente os valores pendentes, caso tenha utilizado algum benefício de seu plano de assinaturas.\n</p><br />\n<p><strong>8.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Segurança do Usuário.</span></span>\n    A Férias&Co empreende e sempre empreenderá seus melhores esforços para garantir uma experiência agradável e segura da Plataforma para o Usuário. \n    Para garantir que um acesso seguro, recomenda-se ao Usuário que não entregue sua senha a ninguém, sendo de sua inteira responsabilidade manter \n    e manter todos os nomes de usuários e senhas confidenciais. Além disso, o Usuário é o único responsável por todas e quaisquer atividades que \n    ocorram em sua conta e será o único responsável por todo o uso de sua conta e senha e todos os danos diretos e indiretos resultantes da não \n    observância de referido requisito de segurança. O Usuário deverá notificar à Férias&Co imediatamente sobre qualquer uso não autorizado de \n    qualquer conta ou qualquer outra violação de segurança. A Férias&Co não pode e não será responsável por qualquer perda ou dano decorrente da \n    falha do Usuário em cumprir com estes requisitos.\n</p><br />\n<p><strong>9.</strong> <span class=\"underline-text\"><span class=\"italic-text\">\nVeracidade das informações fornecidas pelo Usuário e pelas Associadas.</span></span>\n    O Usuário se compromete a fornecer informações verdadeiras, exatas, atuais e completas quando de seu cadastramento para uso da Plataforma, \n    bem como a manter sempre atualizadas as referidas informações, seja junto da Plataforma ou junto à Associada que está vinculado. O fornecimento \n    de informação falsa ou a utilização indevida de dados de terceiros constitui crime tipificado pelo Código Penal Brasileiro. \n    A FÉRIAS&CO NÃO VERIFICA OU ASSUME QUALQUER RESPONSABILIDADE QUANTO À CONFIABILIDADE, EXATIDÃO, VALIDADE, ATUALIDADE, UTILIDADE, \n    INTEGRIDADE, PERTINÊNCIA, OPORTUNIDADE OU ABRANGÊNCIA DAS INFORMAÇÕES INSERIDAS PELO USUÁRIO OU PELAS ASSOCIADAS NA PLATAFORMA. \n    TODAS AS INFORMAÇÕES RELATIVAS AO CADASTRO DOS USUÁRIOS NA PLATAFORMA, TANTO SEUS DADOS PESSOAIS, COMO OUTROS DADOS E INFORMAÇÕES \n    QUE A PLATAFORMA PERMITE ARMAZENAR E GERENCIAR, SERÃO INSERIDAS NA PLATAFORMA PELO USUÁRIO OU PELAS ASSOCIADAS SOB SUA EXCLUSIVA \n    RESPONSABILIDADE.\n</p><br />\n<p><strong>10.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Privacidade do Usuário.</span></span>\n    A Política de Privacidade da Plataforma explicita de que maneira são tratadas as informações pessoais dos Usuários e como sua privacidade \n    é protegida, quando da utilização da Plataforma. O acesso à Política de Privacidade está <a href=\"assets/documents/ferias-e-co-politica-de-privacidade2019-11-22_v2.pdf\" target=\"_blank\">disponível no pdf</a>.\n</p><br />\n<p><strong>11.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Links a sites de terceiros.</span></span>\n    Nosso site pode conter links externos para outros sites detidos por terceiros que não são detidos ou controlados pela Férias&Co. \n    A Férias&Co não possui qualquer controle e não assume qualquer responsabilidade pelo conteúdo, políticas de privacidade ou práticas \n    de quaisquer serviços e sites de terceiros. Recomendamos a leitura dos termos e condições e das políticas de privacidade dos \n    sites de terceiros que visitar.\n</p><br />\n<p><strong>12.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Declarações do Usuário.</span></span>\n    O acesso à Plataforma pelos Usuário está diretamente vinculado ao estrito cumprimento destes Termos de Uso. Portanto, ao aceitar estes \n    Termos de Uso, o Usuário declara que: (a) seguirá os Termos de Uso e todas as leis aplicáveis; (b) fornecerá somente informações \n    verdadeiras e precisas; (c) não irá assediar, ameaçar ou abusar de outras pessoas ao usar a Plataforma; (d) não interferirá o uso ou \n    acesso à Plataforma de outros Usuários;(e) não publicará nenhum conteúdo obsceno ou ofensivo a terceiros, bem como discriminatório ou \n    preconceituoso por motivos de raça, gênero, orientação sexual, religião, entre outros; (f) não publicará nenhum conteúdo calunioso, \n    difamatório ou injurioso, ou que invada a privacidade alheia; (g) não coletará ou armazenará informações pessoais identificáveis \n    sobre quaisquer terceiros na Plataforma, ou perseguir de outra forma, contatar indevidamente ou assediar qualquer Usuário; (h) não \n    postará nenhum conteúdo que contenha vírus, bots, cavalos de Tróia, código nocivo ou outro software ou programa de computador \n    projetado para interromper a funcionalidade da Plataforma, a capacidade dos Usuários de desfrutar da Plataforma ou o funcionamento \n    adequado de qualquer software, hardware ou equipamento ou materiais utilizados em conexão com a Plataforma; (i) não usará nenhuma \n    informação na Plataforma para fins comerciais, exceto quando expressamente autorizado pela Férias & Co; (j) não pesquisará, ligará ou \n    vinculará nenhum dado ou informação a ou por meio da Plataforma sem o expresso consentimento e autorização da Férias & Co; e (k) não \n    enviará qualquer publicidade não solicitada, informações promocionais, e-mail ou outras solicitações em massa (incluindo, sem limitação, \n    lixo eletrônico, \"spam\", cartas em cadeia ou esquemas de pirâmide de qualquer tipo) a qualquer pessoa através do uso da Plataforma. \n    Caso alguma dessas diretrizes sejam definidas acima ou qualquer outro aspecto destes Termos de Uso, reservamos o direito de suspender \n    ou rescindir os direitos de uso da Plataforma sem aviso prévio.\n</p><br />\n<p><strong>13.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Consequências das violações aos Termos de Uso pelo Usuário.</span></span>\n    Sem prejuízo de outras medidas que entender cabíveis, a Férias&Co poderá advertir, suspender ou cancelar, temporária ou definitivamente, \n    o cadastro do Usuário, a qualquer tempo, iniciando as ações legais cabíveis e/ou suspendendo a execução destes Termos se o Usuário não \n    cumprir qualquer dispositivo aqui previsto. A Férias&Co ainda poderá tomar tais medidas se não puder ser verificada a identidade do \n    Usuário ou caso qualquer informação fornecida por ele esteja incorreta.\n</p><br />\n<p><strong>14.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Interrupções no uso da Plataforma.</span></span>\n    O USO DA PLATAFORMA ESTÁ SUJEITO A INTERRUPÇÕES, ATRASOS E PROBLEMAS INERENTES AO USO DA INTERNET E OUTROS TIPOS DE COMUNICAÇÃO ELETRÔNICA. \n    A FÉRIAS&CO NÃO SERÁ RESPONSÁVEL POR QUALQUER DESSAS INTERRUPÇÕES, ATRASOS OU PROBLEMAS, NEM POR EVENTUAIS DEFEITOS OU LIMITAÇÕES DOS \n    EQUIPAMENTOS OU DO BROWSER UTILIZADOS PELO USUÁRIO OU AINDA POR EVENTUAIS DEFEITOS OU LIMITAÇÕES DOS SERVIÇOS DE PROVIMENTO E INFRA-ESTRUTURA \n    DE ACESSO À INTERNET CONTRATADOS PELO USUÁRIO.\n</p><br />\n<p><strong>15.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Responsabilidade da Férias&Co perante atos de terceiros:</span></span>\n    O USUÁRIO DECLARA, ACEITA E RECONHECE QUE A FÉRIAS&CO NÃO POSSUI HOTÉIS, COMPANHIAS DE TRANSPORTE AÉREO, FERROVIÁRIO, MARINHO OU TERRESTRE E NÃO PRESTA \n    SERVIÇOS DE HOTELARIA OU DE TRANSPORTE AÉREO, FERROVIÁRIO, MARINHO OU TERRESTRE, SENDO TAIS SERVIÇOS PRESTADOS EXCLUSIVAMENTE PELOS PARCEIROS CREDENCIADOS \n    CONSTANTES DA PLATAFORMA E TAIS PARCEIROS CREDENCIADOS SÃO E SERÃO, PERANTE TODOS OS USUÁRIOS, INTEGRAL, ÚNICA E EXCLUSIVAMENTE RESPONSÁVEIS PELOS SERVIÇOS \n    PRESTADOS POR CADA UM DELES E SUAS CONSEQUÊNCIAS NOS TERMOS DA LEI, ESPECIALMENTE DA LEI Nº 10.406/2002 (CÓDIGO CIVIL) E DA LEI Nº 8.078/1990 (CÓDIGO DE \n    DEFESA DO CONSUMIDOR). A FÉRIAS&CO. NÃO PRESTA DECLARAÇÕES OU ASSUME QUALQUER OBRIGAÇÃO EM NOME, BENEFÍCIO OU PELOS PARCEIROS CREDENCIADOS QUE POSSAM SER \n    ACESSADOS NA PLATAFORMA.\n</p><br />\n<p><strong>16.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Licença limitada de uso à Plataforma.</span></span>\n    A Férias&Co concede ao Usuário uma licença limitada, não exclusiva e intransferível para utilizar a Plataforma de acordo com estes Termos de Uso.\n</p><br />\n<p><strong>17.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Propriedade intelectual da Férias&Co.</span></span>\n    Os Usuários reconhecem e concordam que a Férias&Co é a exclusiva titular de todos os direitos autorais e de propriedade intelectual relacionados \n    à Plataforma, e que tais direitos são protegidos pela Lei n.º 9.609, de 19 de fevereiro de 1998, e demais normas aplicáveis. O aceite aos presentes \n    Termos de Uso não implica a cessão ou transferência ao Usuário ou às Associadas de quaisquer direitos relativos à Plataforma, salvo aqueles direitos \n    expressamente previstos nestes Termos de Uso, observadas as limitações e demais condições aqui estabelecidas. É expressamente vedado aos Usuários \n    modificar ou tentar modificar qualquer funcionalidade da Plataforma. Além disso, o Usuário concorda em não reproduzir, duplicar, copiar, vender, \n    revender ou explorar qualquer parte das informações e conteúdo da Plataforma, bem como se obriga a utilizar a Plataforma de forma lícita e para as \n    finalidades autorizadas, sendo vedada a reprodução, distribuição, transformação, comercialização ou modificação, sem a prévia e expressa autorização \n    da Férias&Co, bem como fica vedado o fornecimento de login e senha para terceiros. O nome comercial Férias & Co., a marca Férias & Co., e os produtos \n    associados a essa marca são de exclusiva titularidade da Férias&Co e outras empresas de seu grupo econômico, não assistindo aos Usuários quaisquer \n    direitos eles relacionados. Nenhuma disposição destes Termos de Uso será interpretada como concessão aos Usuários de qualquer direito, título ou \n    interesse em qualquer propriedade intelectual da Férias&Co.\n</p><br />\n<p><strong>18.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Disponibilidade da Plataforma.</span></span>\n    A FÉRIAS&CO EMPREENDERÁ SEUS MELHORES ESFORÇOS PARA QUE A PLATAFORMA ESTEJA DISPONÍVEL 99,9% DO TEMPO. CONTUDO, A PLATAFORMA PODERÁ ESTAR INACESSÍVEL \n    EM MOMENTOS DE MANUTENÇÃO PREVENTIVA E DE MANUTENÇÃO DE QUAISQUER ERROS OU FALHAS. A FÉRIAS&CO NÃO ASSEGURA A IMPOSSIBILIDADE DO SEU SISTEMA E \n    SERVIDORES PODEREM SER ATACADOS, INVADIDOS, MODIFICADOS OU LESADOS, DE QUALQUER FORMA, POR TERCEIROS.\n</p><br />\n<p><strong>19.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Limitação de Responsabilidade.</span></span>\n    A FÉRIAS&CO NÃO SERÁ RESPONSÁVEL (I) PELA QUALIDADE OU DISPONIBILIDADE DA CONEXÃO DO DISPOSITIVO DO USUÁRIO À INTERNET EM QUALQUER CIRCUNSTÂNCIA; \n    (II) PELA IMPOSSIBILIDADE DE UTILIZAÇÃO DE QUAISQUER INFORMAÇÕES OU SERVIÇOS DISPONIVEIS EM RAZÃO DA INCOMPATIBILIDADE DA CONFIGURAÇÃO TÉCNICA DE \n    CONEXÃO DOS USUÁRIOS; E (III) POR QUAISQUER DANOS SOFRIDOS PELOS USUÁRIOS EM RAZÃO DA UTILIZAÇÃO DA PLATAFORMA DE FORMA DIVERSA DA ESTABELECIDA \n    NESTES TERMOS DE USO. \n</p><br />\n<p><strong>20.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Modificações aos Termos de Uso.</span></span>\n    A Férias&Co poderá, a seu exclusivo critério, realizar quaisquer modificações e/ou adições aos presentes Termos de Uso. Em caso de modificação \n    destes Termos de Uso, a Férias&Co irá disponibilizar um aviso na Plataforma e os novos Termos de Uso entrarão imediatamente em vigor, salvo na \n    hipótese em que as alterações sejam substanciais, hipótese em que podemos pedir uma nova manifestação de aquiescência. Salvo nessa última hipótese, \n    o acesso e utilização da Plataforma após a publicação das alterações representa a aceitação integral e incondicional aos novos Termos de Uso.\n</p><br />\n<p><strong>21.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Validade e eficácia dos Termos de Uso.</span></span>\n    A nulidade ou invalidade de qualquer cláusula destes Termos de Uso não prejudicará a validade e eficácia das demais cláusulas e dos próprios Termos de Uso.\n</p><br />\n<p><strong>22.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Lei aplicável e Foro.</span></span>\n    Os presentes Termos de Uso são regidos pelas leis da República Federativa do Brasil e fica eleito o foro da Capital do Estado de São Paulo, \n    com exclusão de qualquer outro, por mais privilegiado que seja ou possa vir a ser, para dirimir quaisquer litígios ou controvérsias oriundas \n    dos presentes Termos de Uso.\n</p><br />\n<p><strong>23.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Limitação de Responsabilidade.</span></span>\n    Quaisquer dúvidas, críticas, sugestões e /ou reclamações poderão ser feitas pelo e-mail “contato@ferias.co”.\n</p><br />\n",
					"termoDesconto" : "\n        <p>Pelo presente Termo de Adesão e Autorização de Débito em Folha de Pagamento, o signatário da presente\n        autoriza expressamente a Empresa, acima identificada, a realizar a retenção e desconto mensal, em folha\n        de pagamento, do valor contratado por mim a título de plano de assinaturas do Programa Férias & Co.,\n        conforme opção de assinatura por mim realizada diretamente na plataforma do Programa Férias & Co.,\n        mediante utilização do meu <span class=\"italic-text\">login</span> e senha pessoal, inclusive em caso de\n        renovação ou alteração das\n        condições do plano de assinatura, não sendo necessário para tanto qualquer aditamento a este\n        instrumento.</p><br />\n\n      <p>Ao assinar este instrumento, declaro ainda que (<span class=\"underline-text\">i</span>) sou plenamente\n        capaz de compreender as condições do\n        plano de assinaturas a que aderi, sou civilmente capaz e tenho condições jurídicas e financeiras de\n        cumprir as obrigações por mim assumidas; e (<span class=\"underline-text\">ii</span>) este instrumento é\n        devidamente assinado e formalizado e\n        constitui obrigação válida e vinculante, exequível de acordo com os termos e condições aqui previstos.\n      </p><br />\n\n      <p>Expressamente declaro ainda, estar ciente:</p><br />\n\n\n      <div class=\"topics\">\n        <p>\n          <li>\n            Dos termos, condições de uso e política do Férias&Co. disponíveis para consulta na plataforma\n            “Férias & Co”, à qual tenho acesso por meio de senha e login pessoais e individualizados;\n          </li>\n\n        </p><br />\n        <p>\n          <li>\n            Que a adesão ao programa Férias&Co., bem como a qualquer dos planos de assinatura, é opcional\n            e deve ser formalizada com o preenchimento e assinatura deste Termo de Adesão e Autorização de Débito em\n            Folha de\n            Pagamento;\n          </li>\n        </p><br />\n        <p>\n          <li>\n            Que a adesão ao programa Férias&Co., seu prazo, termos e condições constam dos Termos de\n            Uso, Política de Privacidade e demais políticas, termos e condições constantes da Plataforma, aos\n            quais aderi ao efetuar a contratação do meu plano de assinaturas e que me obrigo a cumprir\n            irrestritamente, sob pena de rescisão do meu plano de assinatura “Férias & Co”, além das demais\n            penalidades aplicáveis previstas em Lei;\n          </li>\n        </p><br />\n        <p>\n          <li>\n            Que o <span class=\"italic-text\">login</span> e senha de acesso à plataforma Férias&Co. são pessoais e\n            intransferíveis, de forma\n            que assumo total responsabilidade caso eu transmita a qualquer terceiro tais dados;\n          </li>\n        </p><br />\n\n        <p>\n          <li>\n            Que inexiste qualquer relação entre a contratação de parceiros credenciados ao Férias&Co e o\n            exercício das minhas atividades ou vínculo empregatício junto à Empresa e que as condições\n            especiais oferecidas pelo programa Férias&Co. não possuem caráter remuneratório ou de benefício;\n          </li>\n        </p><br />\n\n        <p>\n          <li>\n            Que o Férias&Co. não possui hotéis ou empresas de transporte aéreo ou terrestre e não presta\n            serviços de hotelaria ou de transporte aéreo ou terrestre, sendo os parceiros credenciados exclusiva\n            e integralmente responsáveis, nos termos da Lei, pelos serviços por elas prestados. O serviço a ser\n            fornecido pela Férias&Co. limita-se ao acesso à plataforma “Férias & Co” e à intermediação do\n            signatários com os parceiros credenciados nela constantes, não sendo a Férias & Co. obrigada a\n            executar os serviços de turismo que forem contratados pelo signatário diretamente com o parceiro\n            credenciado, nem é a Contratada responsável por falhas, seja do signatário ou do parceiro\n            credenciado, em uma contratação;\n          </li>\n        </p><br />\n\n        <p>\n          <li>\n            Que o acesso à Plataforma requerer acesso à internet em condições técnicas compatíveis às\n            exigidas pela Plataforma. Ademais, por se tratar de serviço oferecido online, o Férias & Co. está\n            sujeito a eventuais interrupções, suspensões ou bugs temporários, que poderão ou não ser sanáveis\n            pela Contratada ou seus prestadores de serviços, sem que isto justifique a rescisão deste Contrato\n            ou revisão de seus termos e condições;\n          </li>\n        </p><br />\n\n        <p>\n          <li>\n            Que a cada renovação do plano de assinaturas contratado por mim, os planos de assinaturas\n            disponíveis, seu preço, termos e condições e os serviços correspondentes oferecidos pela Férias &\n            Co poderão ser alterados, adicionados, excluídos ou complementados, a critério da Férias & Co.\n            Alterações dos termos e condições de um plano de assinaturas no curso de seu prazo de contratação\n            requererão adesão do signatário para serem implementadas e válidas.\n          </li>\n        </p><br />\n\n        <p>\n          <li>\n            Que minha assinatura poderá ser cancelada por decisão individual minha, da Férias & Co ou da\n            Empresa, observados os Termos de Uso da Plataforma e as condições de transição em caso de\n            rescisão, conforme constantes da Plataforma.\n          </li>\n        </p><br />\n      </div>\n\n      <p> Este instrumento é regido e será interpretado de acordo com as Leis da República Federativa do Brasil.\n        As Partes elegem o foro de [São Paulo, Estado de São Paulo], para dirimir quaisquer questões oriundas do\n        presente Contrato, renunciando a qualquer outro, por mais privilegiado que seja.\n      </p>\n"
				},
				"dataConfirmacaoAdesao" : ISODate("2021-02-16T17:53:52.841Z"),
				"periodo" : 1
			}
		],
		"mgmIndicacoesEfetuadas" : null,
		"mgmIndicacoesRecebidas" : null,
		"endereco" : {
			"cep" : "07082290",
			"logradouro" : "Rua Vicenzo Paciullo",
			"numero" : 277,
			"complemento" : "Ap 102 BL 2",
			"bairro" : "Jardim Las Vegas",
			"municipio" : "Guarulhos",
			"municipioCodigoIbge" : "18800",
			"estadoSigla" : "SP",
			"estadoCodigoIbge" : "35"
		},
		"aceitaContatoWhatsapp" : true,
		"aceitaReceberIndicacoesMgm" : false,
		"dataCriacao" : ISODate("2021-02-16T17:53:52.841Z"),
		"dataAtualizacao" : ISODate("2021-05-22T17:53:52.841Z"),
		"dataDelecao" : null,
		"carteira" : {
			"pontos" : {
				"saldo" : NumberDecimal("0"),
				"quantidadePendente" : NumberDecimal("0"),
				"pontosAcumulados" : [],
				"historicoTransacaoPontos" : []
			},
			"diarias" : {
				"historicoTransacaoDiarias" : [ 
					{
						"_id" : UUID("1277abfb-7ff5-4f86-9959-308c73bed1b5"),
						"quantidade" : NumberDecimal("4"),
						"status" : "Confirmado",
						"origem" : "Reserva",
						"descricao" : "Débito referente a reserva do Deck da Villa Pousada (Ubatuba, São Paulo, Brasil)",
						"codigoReferenciaOrigem" : null,
						"tipoTransacao" : "Debito",
						"tipoMovimento" : "Debito",
						"idReferenciaTransacao" : [],
						"dataRegistro" : ISODate("2021-03-29T21:19:08.810Z"),
						"dataAtualizacao" : ISODate("2021-03-29T21:19:08.810Z"),
						"tipoCredito" : "Diarias",
						"idPlano" : UUID("005d9991-e7c7-49ff-a617-fa3ce1bad9e5"),
						"planoPeriodo" : 1,
						"pontosUtilizados" : null
					}
				]
			}
		},
		"notificarIntencaoUpgrade" : false,
		"dataNotificarIntencaoUpgrade" : null,
		"idPlanoIntencaoUpgrade" : UUID("00000000-0000-0000-0000-000000000000"),
		"equipes" : [],
		"verPremiacao" : false,
		"historicoPremiacoes" : []
	},
	{
		"_id" : ObjectId("60b42e3c1c86803634ff84f4"),
		"id" : "86208415055",
		"nome" : "Raissa Teste Indicada",
		"dataNascimento" : ISODate("1983-06-12T00:00:00.000Z"),
		"cpf" : "86208415055",
		"celular" : "11998567765",
		"emailPessoal" : "raissateste.indicada@gmail.com",
		"empresas" : [ 
			{
				"_id" : "34008403000107",
				"nomeFantasia" : "Férias & Co",
				"razaoSocial" : "FERIAS & CO. VIAGENS E TURISMO LTDA",
				"segmento" : "Benefícios",
				"empresaProprietariaId" : "34008403000107",
				"site" : "http://www.ferias.co",
				"tipo" : "Cliente",
				"coparticipacao" : NumberDecimal("90"),
				"ativo" : true,
				"centroCusto" : null,
				"grupoOrganizacional" : null,
				"cnpj" : "34008403000107",
				"colaboradorRh" : {
					"telefone" : "",
					"ramal" : "",
					"emailCorporativo" : "raissateste.indicada@ferias.co",
					"matricula" : "",
					"descontoFolha" : false,
					"cargo" : "",
					"area" : "TI",
					"departamento" : "",
					"coparticipacao" : null
				},
				"dataCriacao" : ISODate("2021-03-19T16:51:46.240Z"),
				"dataAtualizacao" : null,
				"dataDelecao" : null
			}
		],
		"planos" : null,
		"mgmIndicacoesEfetuadas" : null,
		"mgmIndicacoesRecebidas" : null,
		"endereco" : {
			"cep" : "07123100",
			"logradouro" : "Rua Belo Jardin",
			"numero" : 179,
			"complemento" : "",
			"bairro" : "Jardim Santa Clara",
			"municipio" : "Guarulhos",
			"municipioCodigoIbge" : "18800",
			"estadoSigla" : "SP",
			"estadoCodigoIbge" : "35"
		},
		"aceitaContatoWhatsapp" : true,
		"aceitaReceberIndicacoesMgm" : true,
		"dataCriacao" : ISODate("2021-02-16T17:53:52.841Z"),
		"dataAtualizacao" : ISODate("2021-03-19T17:53:52.841Z"),
		"dataDelecao" : null,
		"carteira" : {
			"pontos" : {
				"saldo" : NumberDecimal("0"),
				"quantidadePendente" : NumberDecimal("0"),
				"pontosAcumulados" : [],
				"historicoTransacaoPontos" : []
			},
			"diarias" : {
				"historicoTransacaoDiarias" : []
			}
		},
		"notificarIntencaoUpgrade" : false,
		"dataNotificarIntencaoUpgrade" : null,
		"idPlanoIntencaoUpgrade" : UUID("00000000-0000-0000-0000-000000000000"),
		"equipes" : [],
		"verPremiacao" : false,
		"historicoPremiacoes" : []
	},
	{
		"_id" : ObjectId("60999480e51e680001645f0b"),
		"id" : "77564109041",
		"nome" : "Osvaldo Isaac Castro TESTE",
		"dataNascimento" : ISODate("1950-10-12T00:00:00.000Z"),
		"cpf" : "77564109041",
		"celular" : "11956856598",
		"emailPessoal" : "osvaldoisaac.teste@yopmail.com",
		"empresas" : [ 
			{
				"_id" : "11479680000194",
				"nomeFantasia" : "Empresa teste férias qa",
				"razaoSocial" : "EMPRESA TESTE FÉRIAS QA",
				"segmento" : "Tecnologia",
				"empresaProprietariaId" : "11479680000194",
				"site" : "www.ferias.com",
				"tipo" : "Cliente",
				"coparticipacao" : NumberDecimal("0"),
				"ativo" : true,
				"centroCusto" : null,
				"grupoOrganizacional" : null,
				"cnpj" : "11479680000194",
				"colaboradorRh" : {
					"telefone" : "",
					"ramal" : "",
					"emailCorporativo" : "osvaldoteste.ferias@ferias.co",
					"matricula" : "",
					"descontoFolha" : true,
					"cargo" : "",
					"area" : "",
					"departamento" : "",
					"coparticipacao" : NumberDecimal("100")
				},
				"dataCriacao" : ISODate("2021-05-10T20:16:00.894Z"),
				"dataAtualizacao" : null,
				"dataDelecao" : null
			}
		],
		"planos" : [ 
			{
				"_id" : UUID("005d9991-e7c7-49ff-a617-fa3ce1bad9e5"),
				"empresaId" : "11479680000194",
				"titulo" : "Hotéis de 3 e 4 estrelas",
				"tipoPlano" : "Padrão",
				"valorPlano" : "90",
				"diariasTotais" : 4,
				"diariasDisponiveis" : 4,
				"valorDiariaMinima" : "0.01",
				"valorDiariaMaxima" : "216",
				"vigencia" : null,
				"ativo" : true,
				"dataAdesao" : ISODate("2021-05-10T20:33:24.560Z"),
				"status" : "Ativo",
				"billing" : null,
				"fingerprint" : {
					"timestamp" : ISODate("2021-05-10T20:33:24.840Z"),
					"servidor" : "172.17.0.28",
					"geolocalizacao" : ";",
					"userAgent" : "Amazon CloudFront",
					"ip" : "::ffff:10.42.10.66",
					"termoUso" : "\n<p>Seja bem-vindo à Férias & Co, sua plataforma de benefícios de viagens (“<span class=\"underline-text\">Plataforma</span>”).</p>\n<p>Por favor, leia atentamente os termos e condições abaixo estipulados (“<span class=\"underline-text\">Termos de Uso</span>”) \n    para utilizar a Plataforma e todos os serviços disponibilizados de maneira adequada.</p>\n<p><strong>CASO NÃO CONCORDE COM QUAISQUER DISPOSITIVOS DOS TERMOS DE USO, NÃO ACESSE OU UTILIZE \n    A NOSSA PLATAFORMA. SEU ACESSO E UTILIZAÇÃO REPRESENTAM SUA ACEITAÇÃO INTEGRAL E INCONDICIONAL \n    AOS TERMOS DE USO. \n    A <a href=\"assets/documents/ferias-e-co-politica-de-privacidade2019-11-22_v2.pdf\" target=\"_blank\">POLÍTICA DE PRIVACIDADE</a> \n    INTEGRA OS PRESENTES TERMOS DE USO. ESTA PLATAFORMA É DIRECIONADA APENAS PARA MAIORES DE 18 ANOS DE IDADE. \n    SE VOCÊ POSSUI MENOS DE 18 ANOS, POR FAVOR, CESSE IMEDIATAMENTE O ACESSO À PLATAFORMA.</strong>\n</p><br />\n<p><strong>1.</strong> <span class=\"underline-text\">Finalidade da Plataforma.</span> \n    A Plataforma tem a finalidade de proporcionar a colaboradores de empresas \n    associadas (“Associadas”) à Férias&Co a possibilidade de adquirir um plano de assinatura de benefícios \n    de viagem, sendo os colaboradores das Associadas os usuários finais (“Usuários”) da Plataforma. Por \n    meio da Plataforma, os Usuários podem adquirir um dos planos de assinaturas disponíveis, de acordo com \n    as configurações e contratações entre a Associada que o cadastrou inicialmente e a Férias&Co. Após a \n    aquisição de um dos planos de assinatura, o Usuário poderá contratar os serviços relacionados a viagem \n    e turismo disponíveis na Plataforma, tais como a reserva de hotéis, passagens aéreas, entre outros, \n    conforme aplicável. \n</p><br />\n<p><strong>2.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Controle e desenvolvimento da Plataforma.</span></span>\n    A Plataforma é controlada e desenvolvida pela <strong>FERIAS & CO. VIAGENS E TURISMO LTDA. (“Férias&Co”)</strong>, \n    pessoa jurídica inscrita no CNPJ/MF sob o nº 34.008.403/0001-07, com sede na Rua Manoel Coelho, 600 cj 211, Centro, \n    na cidade de São Caetano do Sul, Estado de São Paulo.\n</p><br />\n<p><strong>3.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Uso da Plataforma.</span></span> \n    O uso da Plataforma será efetuado exclusivamente através do acesso à rede mundial de computadores (Internet). \n    Para tanto, os Usuários deverão estar providos dos equipamentos necessários e apropriados, de acordo com as \n    especificações técnicas necessárias para o funcionamento da Plataforma, tais como computador com programa de \n    navegação (browser) devidamente instalado e licenciado, modem, bem como dos serviços de provimento e \n    infraestrutura de acesso à Internet.\n</p><br />\n<p><strong>4.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Acesso à Plataforma pelo Usuário.</span></span>\n    A Plataforma poderá ser acessada pelo Usuário por meio do site “www.ferias.co”. O Usuário poderá ter acesso à Plataforma \n    apenas após o envio das informações dos Usuários pela Associada em que presta serviços, momento em que terá a possibilidade \n    de registrar-se na Plataforma, criando um login e senha de acesso. O Usuário poderá então escolher e adquirir um dos planos \n    de assinatura. As opções de aquisição de planos de assinatura, conforme mencionado acima, bem como as formas de pagamento \n    pelos planos de assinatura, estarão diretamente relacionados às condições contratuais entre a Férias&Co e a Associada a \n    qual o Usuário está vinculado.\n</p>\n<p>A Férias&Co disponibiliza ao seu Usuário uma diversa gama de serviços de viagem e turismo, apresentando uma lista de empresas parceiras. \n</p>\n<p>O Usuário terá um período de carência de 6 (seis) mensalidades antes de utilizar os benefícios de seu plano, iniciando-se a partir do \n    primeiro dia do 7º (sétimo) mês subsequente ao da subscrição e cadastramento, encerrando-se no último dia do 18º (décimo oitavo) mês \n    de pagamento da mensalidade e assim sucessivamente. Tal período de carência apenas será dispensado mediante cadastro dos dados do \n    cartão de crédito e permissão de pagamento de parcelas no caso de rescisão contratual.\n</p><br />\n<p><strong>5.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Tipos de assinatura.</span></span>\n    A Férias&Co disponibiliza ao Usuário cinco (5) tipos de planos de benefícios para assinatura: Padrão, Superior, Premium, Especial e Exclusivo:\n</p>\n<p>\n    A Férias&Co reserva-se ao direito de alterar a cobertura dos planos acima mencionados, bem como de criar e remover categorias de planos. \n    ESTA SEÇÃO CONTÉM UMA BREVE DESCRIÇÃO DOS BENEFÍCIOS INCLUÍDOS EM CADA PLANO. O USUÁRIO DEVERÁ LER COM ATENÇÃO, NO MOMENTO DA CONTRATAÇÃO \n    E/OU DA UTILIZAÇÃO DE BENEFÍCIOS AS RESTRIÇÕES E OS REQUISITOS RELACIONADOS AO USO DOS BENEFÍCIOS. A FÉRIAS&CO. NÃO SE RESPONSABILIZA [\n    PELO USO INADEQUADO DOS BENEFÍCIOS POR PARTE DO USUÁRIO. EM CASO DE EXTINÇÃO DO PLANO, ELE PERMANECERÁ VIGENTE ATÉ COMPLETAR O PERÍODO \n    DE 12 MESES DE SUA AQUISIÇÃO. PASSADO ESSE PERÍODO, CASO O USUÁRIO QUEIRA CONTINUAR A USUFRUIR DOS BENEFÍCIOS, ELE DEVERÁ ESCOLHER UM \n    NOVO PLANO PARA DAR CONTINUIDADE A SUA RELAÇÃO COM A FÉRIAS&CO.\n</p><br />\n<p><strong>6.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Pagamento das assinaturas.</span></span>\n    A aquisição de um dos planos de assinatura disponíveis na Plataforma está sujeita ao pagamento pelo Usuário. A Férias&Co, por padrão, \n    oferece duas formas possíveis de pagamento: (i) o desconto em folha de pagamento, feito diretamente pela Associada; ou (ii) cartão de crédito, \n    por meio de cobrança mensal ao Usuário, estando a duração dos pagamentos vinculada diretamente à vigência do contrato entre a Associada a que o \n    Usuário está vinculado e a Férias&Co. Caso ocorra alguma falha no pagamento por meio de cartão de crédito, a Férias&Co tentará realizar mais \n    outras duas cobranças dentro do período de uma (1) semana, para que o Usuário regularize sua situação. Caso a situação não seja regularizada, \n    sua assinatura será automaticamente cancelada. Para faturamento por cartão de crédito, a Férias&Co utiliza um terceiro processador de pagamentos. \n    O processamento de tais pagamentos estará sujeito aos termos, às condições e às políticas de privacidade da empresa responsável por processar o \n    pagamento, além destes Termos. A Férias&Co não será responsável por erros cometidos pelo por esse terceiro. Além disso, a Férias&Co se reserva o \n    direito de corrigir quaisquer erros ou enganos cometidos no processo de faturamento mesmo que o pagamento já tenha sido solicitado ou recebido. \n    A Férias&Co não é responsável por quaisquer impostos que possam se aplicar à aquisição de Assinaturas ou sobre os produtos e serviços fornecidos. \n    Uma vez contratado, o plano será anual e seu pagamento será dividido em 12 parcelas mensais e estará sujeito à renovação automática por iguais \n    períodos de tempo.\n</p><br />\n<p><strong>7.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Cancelamento dos planos de assinatura:</span></span></p>\n<br />\n<p><strong>7.1</strong> <span class=\"underline-text\"><span class=\"italic-text\">Do Cancelamento do plano antes da renovação automática:</span></span>\nPara realizar o cancelamento antes da renovação automática que acontecerá no 12º mês de contratação, você deverá contatar a Central de Atendimento disponível \nno portal do Colaborador e solicitar o Cancelamento do plano expondo o motivo, até o último dia útil do 11º mês do plano vigente.\n</p><br>\n<p><strong>7.2</strong> Caso o Usuário pretenda o cancelamento de seu plano sem que tenha utilizado as diárias proporcionais aos valores pagos, o mesmo terá \ndireito a recebê-las de forma proporcional ao valor pago, comprometendo-se a utilizar as referidas diárias durante a vigência do plano contratado. Caso o \nUsuário não se interesse pela conversão dos valores pagos em diárias, poderá optar em receber o valor pago com a retenção do percentual de 20% a título de \ntaxa administrativa. Para os casos em que o uso de diárias for maior que o pagamento efetuado, será necessário para o cancelamento o pagamento proporcional \nas diárias utilizadas. Para os casos de cancelamento com uso integral de seu plano, fica obrigado o Usuário a efetuar o pagamento de todas as parcelas \nrestantes do plano contratado.\n</p><br>\n<p><strong>7.3</strong> <span class=\"underline-text\"><span class=\"italic-text\">Desligamento do Usuário e Associada:</span></span>\nPara os casos de desligamento entre Usuário e Associada, os planos que tiveram utilização total somente poderão ser cancelados após o pagamento integral das \nparcelas remanescentes. Nesse cenário, é facultado aos Usuários manterem seus planos ativos até o final do período aquisitivo, assumindo o pagamento integral \nda mensalidade por meio de cartão de crédito, que deverá ser informado no portal Férias&Co. Para os casos de desligamento sem que o usuário tenha utilizado as \ndiárias proporcionais aos valores pagos, o mesmo terá direito a recebê-las de forma proporcional ao valor pago, comprometendo-se a utilizar referidas diárias \ndurante a vigência do plano contratado, sob pena de desistência da utilização das diárias. Para os casos de desligamento com a utilização superior ao valor \npago, será cobrado o valor proporcional de uso das diárias pelo Usuário o qual assume o valor integral das mensalidades restantes através de pagamento via \ncartão de crédito cadastrado na plataforma. Poderá o Usuário, caso faça esta opção, assumir o pagamento integral do restante das mensalidades para utilização \ntotal do plano contratado. Já para os casos de desligamento sem a utilização do plano contratado, será liberado na plataforma as diárias proporcionais aos \nvalores pagos para utilização, tendo a possibilidade, também, de o Usuário assumir o pagamento integral do restante das mensalidades por meio de cartão de \ncrédito para utilização total do plano contratado durante sua vigência. Caso o Usuário não se interesse pela conversão dos valores pagos em diárias ou o \npagamento complementar do plano para uso integral das diárias contratadas, poderá optar em receber o valor pago com a retenção do percentual de 20% a título \nde taxa administrativa.\n<br><br>\nMensalidade integral do plano atualizada para os casos de desligamento entre Usuário e Associada até o final do período aquisitivo: R$ 90,00.\n</p><br>\n<p><strong>7.4</strong> Violação ao Termo de Uso: Para o caso de cancelamento do plano de assinatura por violação aos Termos de Uso, o Usuário não fará jus a \nnenhum tipo de reembolso das quantias já pagas e deverá pagar imediatamente os valores pendentes, caso tenha utilizado algum benefício de seu plano de assinaturas.\n</p><br>\n<p><strong>8.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Segurança do Usuário.</span></span>\n    A Férias&Co empreende e sempre empreenderá seus melhores esforços para garantir uma experiência agradável e segura da Plataforma para o Usuário. \n    Para garantir que um acesso seguro, recomenda-se ao Usuário que não entregue sua senha a ninguém, sendo de sua inteira responsabilidade manter \n    e manter todos os nomes de usuários e senhas confidenciais. Além disso, o Usuário é o único responsável por todas e quaisquer atividades que \n    ocorram em sua conta e será o único responsável por todo o uso de sua conta e senha e todos os danos diretos e indiretos resultantes da não \n    observância de referido requisito de segurança. O Usuário deverá notificar à Férias&Co imediatamente sobre qualquer uso não autorizado de \n    qualquer conta ou qualquer outra violação de segurança. A Férias&Co não pode e não será responsável por qualquer perda ou dano decorrente da \n    falha do Usuário em cumprir com estes requisitos.\n</p><br />\n<p><strong>9.</strong> <span class=\"underline-text\"><span class=\"italic-text\">\nVeracidade das informações fornecidas pelo Usuário e pelas Associadas.</span></span>\n    O Usuário se compromete a fornecer informações verdadeiras, exatas, atuais e completas quando de seu cadastramento para uso da Plataforma, \n    bem como a manter sempre atualizadas as referidas informações, seja junto da Plataforma ou junto à Associada que está vinculado. O fornecimento \n    de informação falsa ou a utilização indevida de dados de terceiros constitui crime tipificado pelo Código Penal Brasileiro. \n    A FÉRIAS&CO NÃO VERIFICA OU ASSUME QUALQUER RESPONSABILIDADE QUANTO À CONFIABILIDADE, EXATIDÃO, VALIDADE, ATUALIDADE, UTILIDADE, \n    INTEGRIDADE, PERTINÊNCIA, OPORTUNIDADE OU ABRANGÊNCIA DAS INFORMAÇÕES INSERIDAS PELO USUÁRIO OU PELAS ASSOCIADAS NA PLATAFORMA. \n    TODAS AS INFORMAÇÕES RELATIVAS AO CADASTRO DOS USUÁRIOS NA PLATAFORMA, TANTO SEUS DADOS PESSOAIS, COMO OUTROS DADOS E INFORMAÇÕES \n    QUE A PLATAFORMA PERMITE ARMAZENAR E GERENCIAR, SERÃO INSERIDAS NA PLATAFORMA PELO USUÁRIO OU PELAS ASSOCIADAS SOB SUA EXCLUSIVA \n    RESPONSABILIDADE.\n</p><br />\n<p><strong>10.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Privacidade do Usuário.</span></span>\n    A Política de Privacidade da Plataforma explicita de que maneira são tratadas as informações pessoais dos Usuários e como sua privacidade \n    é protegida, quando da utilização da Plataforma. O acesso à Política de Privacidade está <a href=\"assets/documents/ferias-e-co-politica-de-privacidade2019-11-22_v2.pdf\" target=\"_blank\">disponível no pdf</a>.\n</p><br />\n<p><strong>11.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Links a sites de terceiros.</span></span>\n    Nosso site pode conter links externos para outros sites detidos por terceiros que não são detidos ou controlados pela Férias&Co. \n    A Férias&Co não possui qualquer controle e não assume qualquer responsabilidade pelo conteúdo, políticas de privacidade ou práticas \n    de quaisquer serviços e sites de terceiros. Recomendamos a leitura dos termos e condições e das políticas de privacidade dos \n    sites de terceiros que visitar.\n</p><br />\n<p><strong>12.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Declarações do Usuário.</span></span>\n    O acesso à Plataforma pelos Usuário está diretamente vinculado ao estrito cumprimento destes Termos de Uso. Portanto, ao aceitar estes \n    Termos de Uso, o Usuário declara que: (a) seguirá os Termos de Uso e todas as leis aplicáveis; (b) fornecerá somente informações \n    verdadeiras e precisas; (c) não irá assediar, ameaçar ou abusar de outras pessoas ao usar a Plataforma; (d) não interferirá o uso ou \n    acesso à Plataforma de outros Usuários;(e) não publicará nenhum conteúdo obsceno ou ofensivo a terceiros, bem como discriminatório ou \n    preconceituoso por motivos de raça, gênero, orientação sexual, religião, entre outros; (f) não publicará nenhum conteúdo calunioso, \n    difamatório ou injurioso, ou que invada a privacidade alheia; (g) não coletará ou armazenará informações pessoais identificáveis \n    sobre quaisquer terceiros na Plataforma, ou perseguir de outra forma, contatar indevidamente ou assediar qualquer Usuário; (h) não \n    postará nenhum conteúdo que contenha vírus, bots, cavalos de Tróia, código nocivo ou outro software ou programa de computador \n    projetado para interromper a funcionalidade da Plataforma, a capacidade dos Usuários de desfrutar da Plataforma ou o funcionamento \n    adequado de qualquer software, hardware ou equipamento ou materiais utilizados em conexão com a Plataforma; (i) não usará nenhuma \n    informação na Plataforma para fins comerciais, exceto quando expressamente autorizado pela Férias & Co; (j) não pesquisará, ligará ou \n    vinculará nenhum dado ou informação a ou por meio da Plataforma sem o expresso consentimento e autorização da Férias & Co; e (k) não \n    enviará qualquer publicidade não solicitada, informações promocionais, e-mail ou outras solicitações em massa (incluindo, sem limitação, \n    lixo eletrônico, \"spam\", cartas em cadeia ou esquemas de pirâmide de qualquer tipo) a qualquer pessoa através do uso da Plataforma. \n    Caso alguma dessas diretrizes sejam definidas acima ou qualquer outro aspecto destes Termos de Uso, reservamos o direito de suspender \n    ou rescindir os direitos de uso da Plataforma sem aviso prévio.\n</p><br />\n<p><strong>13.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Consequências das violações aos Termos de Uso pelo Usuário.</span></span>\n    Sem prejuízo de outras medidas que entender cabíveis, a Férias&Co poderá advertir, suspender ou cancelar, temporária ou definitivamente, \n    o cadastro do Usuário, a qualquer tempo, iniciando as ações legais cabíveis e/ou suspendendo a execução destes Termos se o Usuário não \n    cumprir qualquer dispositivo aqui previsto. A Férias&Co ainda poderá tomar tais medidas se não puder ser verificada a identidade do \n    Usuário ou caso qualquer informação fornecida por ele esteja incorreta.\n</p><br />\n<p><strong>14.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Interrupções no uso da Plataforma.</span></span>\n    O USO DA PLATAFORMA ESTÁ SUJEITO A INTERRUPÇÕES, ATRASOS E PROBLEMAS INERENTES AO USO DA INTERNET E OUTROS TIPOS DE COMUNICAÇÃO ELETRÔNICA. \n    A FÉRIAS&CO NÃO SERÁ RESPONSÁVEL POR QUALQUER DESSAS INTERRUPÇÕES, ATRASOS OU PROBLEMAS, NEM POR EVENTUAIS DEFEITOS OU LIMITAÇÕES DOS \n    EQUIPAMENTOS OU DO BROWSER UTILIZADOS PELO USUÁRIO OU AINDA POR EVENTUAIS DEFEITOS OU LIMITAÇÕES DOS SERVIÇOS DE PROVIMENTO E INFRA-ESTRUTURA \n    DE ACESSO À INTERNET CONTRATADOS PELO USUÁRIO.\n</p><br />\n<p><strong>15.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Responsabilidade da Férias&Co perante atos de terceiros:</span></span>\n    O USUÁRIO DECLARA, ACEITA E RECONHECE QUE A FÉRIAS&CO NÃO POSSUI HOTÉIS, COMPANHIAS DE TRANSPORTE AÉREO, FERROVIÁRIO, MARINHO OU TERRESTRE E NÃO PRESTA \n    SERVIÇOS DE HOTELARIA OU DE TRANSPORTE AÉREO, FERROVIÁRIO, MARINHO OU TERRESTRE, SENDO TAIS SERVIÇOS PRESTADOS EXCLUSIVAMENTE PELOS PARCEIROS CREDENCIADOS \n    CONSTANTES DA PLATAFORMA E TAIS PARCEIROS CREDENCIADOS SÃO E SERÃO, PERANTE TODOS OS USUÁRIOS, INTEGRAL, ÚNICA E EXCLUSIVAMENTE RESPONSÁVEIS PELOS SERVIÇOS \n    PRESTADOS POR CADA UM DELES E SUAS CONSEQUÊNCIAS NOS TERMOS DA LEI, ESPECIALMENTE DA LEI Nº 10.406/2002 (CÓDIGO CIVIL) E DA LEI Nº 8.078/1990 (CÓDIGO DE \n    DEFESA DO CONSUMIDOR). A FÉRIAS&CO. NÃO PRESTA DECLARAÇÕES OU ASSUME QUALQUER OBRIGAÇÃO EM NOME, BENEFÍCIO OU PELOS PARCEIROS CREDENCIADOS QUE POSSAM SER \n    ACESSADOS NA PLATAFORMA.\n</p><br />\n<p><strong>16.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Licença limitada de uso à Plataforma.</span></span>\n    A Férias&Co concede ao Usuário uma licença limitada, não exclusiva e intransferível para utilizar a Plataforma de acordo com estes Termos de Uso.\n</p><br />\n<p><strong>17.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Propriedade intelectual da Férias&Co.</span></span>\n    Os Usuários reconhecem e concordam que a Férias&Co é a exclusiva titular de todos os direitos autorais e de propriedade intelectual relacionados \n    à Plataforma, e que tais direitos são protegidos pela Lei n.º 9.609, de 19 de fevereiro de 1998, e demais normas aplicáveis. O aceite aos presentes \n    Termos de Uso não implica a cessão ou transferência ao Usuário ou às Associadas de quaisquer direitos relativos à Plataforma, salvo aqueles direitos \n    expressamente previstos nestes Termos de Uso, observadas as limitações e demais condições aqui estabelecidas. É expressamente vedado aos Usuários \n    modificar ou tentar modificar qualquer funcionalidade da Plataforma. Além disso, o Usuário concorda em não reproduzir, duplicar, copiar, vender, \n    revender ou explorar qualquer parte das informações e conteúdo da Plataforma, bem como se obriga a utilizar a Plataforma de forma lícita e para as \n    finalidades autorizadas, sendo vedada a reprodução, distribuição, transformação, comercialização ou modificação, sem a prévia e expressa autorização \n    da Férias&Co, bem como fica vedado o fornecimento de login e senha para terceiros. O nome comercial Férias & Co., a marca Férias & Co., e os produtos \n    associados a essa marca são de exclusiva titularidade da Férias&Co e outras empresas de seu grupo econômico, não assistindo aos Usuários quaisquer \n    direitos eles relacionados. Nenhuma disposição destes Termos de Uso será interpretada como concessão aos Usuários de qualquer direito, título ou \n    interesse em qualquer propriedade intelectual da Férias&Co.\n</p><br />\n<p><strong>18.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Disponibilidade da Plataforma.</span></span>\n    A FÉRIAS&CO EMPREENDERÁ SEUS MELHORES ESFORÇOS PARA QUE A PLATAFORMA ESTEJA DISPONÍVEL 99,9% DO TEMPO. CONTUDO, A PLATAFORMA PODERÁ ESTAR INACESSÍVEL \n    EM MOMENTOS DE MANUTENÇÃO PREVENTIVA E DE MANUTENÇÃO DE QUAISQUER ERROS OU FALHAS. A FÉRIAS&CO NÃO ASSEGURA A IMPOSSIBILIDADE DO SEU SISTEMA E \n    SERVIDORES PODEREM SER ATACADOS, INVADIDOS, MODIFICADOS OU LESADOS, DE QUALQUER FORMA, POR TERCEIROS.\n</p><br />\n<p><strong>19.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Limitação de Responsabilidade.</span></span>\n    A FÉRIAS&CO NÃO SERÁ RESPONSÁVEL (I) PELA QUALIDADE OU DISPONIBILIDADE DA CONEXÃO DO DISPOSITIVO DO USUÁRIO À INTERNET EM QUALQUER CIRCUNSTÂNCIA; \n    (II) PELA IMPOSSIBILIDADE DE UTILIZAÇÃO DE QUAISQUER INFORMAÇÕES OU SERVIÇOS DISPONIVEIS EM RAZÃO DA INCOMPATIBILIDADE DA CONFIGURAÇÃO TÉCNICA DE \n    CONEXÃO DOS USUÁRIOS; E (III) POR QUAISQUER DANOS SOFRIDOS PELOS USUÁRIOS EM RAZÃO DA UTILIZAÇÃO DA PLATAFORMA DE FORMA DIVERSA DA ESTABELECIDA \n    NESTES TERMOS DE USO. \n</p><br />\n<p><strong>20.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Modificações aos Termos de Uso.</span></span>\n    A Férias&Co poderá, a seu exclusivo critério, realizar quaisquer modificações e/ou adições aos presentes Termos de Uso. Em caso de modificação \n    destes Termos de Uso, a Férias&Co irá disponibilizar um aviso na Plataforma e os novos Termos de Uso entrarão imediatamente em vigor, salvo na \n    hipótese em que as alterações sejam substanciais, hipótese em que podemos pedir uma nova manifestação de aquiescência. Salvo nessa última hipótese, \n    o acesso e utilização da Plataforma após a publicação das alterações representa a aceitação integral e incondicional aos novos Termos de Uso.\n</p><br />\n<p><strong>21.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Validade e eficácia dos Termos de Uso.</span></span>\n    A nulidade ou invalidade de qualquer cláusula destes Termos de Uso não prejudicará a validade e eficácia das demais cláusulas e dos próprios Termos de Uso.\n</p><br />\n<p><strong>22.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Lei aplicável e Foro.</span></span>\n    Os presentes Termos de Uso são regidos pelas leis da República Federativa do Brasil e fica eleito o foro da Capital do Estado de São Paulo, \n    com exclusão de qualquer outro, por mais privilegiado que seja ou possa vir a ser, para dirimir quaisquer litígios ou controvérsias oriundas \n    dos presentes Termos de Uso.\n</p><br />\n<p><strong>23.</strong> <span class=\"underline-text\"><span class=\"italic-text\">Limitação de Responsabilidade.</span></span>\n    Quaisquer dúvidas, críticas, sugestões e /ou reclamações poderão ser feitas pelo e-mail “contato@ferias.co”.\n</p><br />\n",
					"termoDesconto" : "\n        <p>Pelo presente Termo de Adesão e Autorização de Débito em Folha de Pagamento, o signatário da presente\n        autoriza expressamente a Empresa, acima identificada, a realizar a retenção e desconto mensal, em folha\n        de pagamento, do valor contratado por mim a título de plano de assinaturas do Programa Férias & Co.,\n        conforme opção de assinatura por mim realizada diretamente na plataforma do Programa Férias & Co.,\n        mediante utilização do meu <span class=\"italic-text\">login</span> e senha pessoal, inclusive em caso de\n        renovação ou alteração das\n        condições do plano de assinatura, não sendo necessário para tanto qualquer aditamento a este\n        instrumento.</p><br />\n\n      <p>Ao assinar este instrumento, declaro ainda que (<span class=\"underline-text\">i</span>) sou plenamente\n        capaz de compreender as condições do\n        plano de assinaturas a que aderi, sou civilmente capaz e tenho condições jurídicas e financeiras de\n        cumprir as obrigações por mim assumidas; e (<span class=\"underline-text\">ii</span>) este instrumento é\n        devidamente assinado e formalizado e\n        constitui obrigação válida e vinculante, exequível de acordo com os termos e condições aqui previstos.\n      </p><br />\n\n      <p>Expressamente declaro ainda, estar ciente:</p><br />\n\n\n      <div class=\"topics\">\n        <p>\n          <li>\n            Dos termos, condições de uso e política do Férias&Co. disponíveis para consulta na plataforma\n            “Férias & Co”, à qual tenho acesso por meio de senha e login pessoais e individualizados;\n          </li>\n\n        </p><br />\n        <p>\n          <li>\n            Que a adesão ao programa Férias&Co., bem como a qualquer dos planos de assinatura, é opcional\n            e deve ser formalizada com o preenchimento e assinatura deste Termo de Adesão e Autorização de Débito em\n            Folha de\n            Pagamento;\n          </li>\n        </p><br />\n        <p>\n          <li>\n            Que a adesão ao programa Férias&Co., seu prazo, termos e condições constam dos Termos de\n            Uso, Política de Privacidade e demais políticas, termos e condições constantes da Plataforma, aos\n            quais aderi ao efetuar a contratação do meu plano de assinaturas e que me obrigo a cumprir\n            irrestritamente, sob pena de rescisão do meu plano de assinatura “Férias & Co”, além das demais\n            penalidades aplicáveis previstas em Lei;\n          </li>\n        </p><br />\n        <p>\n          <li>\n            Que o <span class=\"italic-text\">login</span> e senha de acesso à plataforma Férias&Co. são pessoais e\n            intransferíveis, de forma\n            que assumo total responsabilidade caso eu transmita a qualquer terceiro tais dados;\n          </li>\n        </p><br />\n\n        <p>\n          <li>\n            Que inexiste qualquer relação entre a contratação de parceiros credenciados ao Férias&Co e o\n            exercício das minhas atividades ou vínculo empregatício junto à Empresa e que as condições\n            especiais oferecidas pelo programa Férias&Co. não possuem caráter remuneratório ou de benefício;\n          </li>\n        </p><br />\n\n        <p>\n          <li>\n            Que o Férias&Co. não possui hotéis ou empresas de transporte aéreo ou terrestre e não presta\n            serviços de hotelaria ou de transporte aéreo ou terrestre, sendo os parceiros credenciados exclusiva\n            e integralmente responsáveis, nos termos da Lei, pelos serviços por elas prestados. O serviço a ser\n            fornecido pela Férias&Co. limita-se ao acesso à plataforma “Férias & Co” e à intermediação do\n            signatários com os parceiros credenciados nela constantes, não sendo a Férias & Co. obrigada a\n            executar os serviços de turismo que forem contratados pelo signatário diretamente com o parceiro\n            credenciado, nem é a Contratada responsável por falhas, seja do signatário ou do parceiro\n            credenciado, em uma contratação;\n          </li>\n        </p><br />\n\n        <p>\n          <li>\n            Que o acesso à Plataforma requerer acesso à internet em condições técnicas compatíveis às\n            exigidas pela Plataforma. Ademais, por se tratar de serviço oferecido online, o Férias & Co. está\n            sujeito a eventuais interrupções, suspensões ou bugs temporários, que poderão ou não ser sanáveis\n            pela Contratada ou seus prestadores de serviços, sem que isto justifique a rescisão deste Contrato\n            ou revisão de seus termos e condições;\n          </li>\n        </p><br />\n\n        <p>\n          <li>\n            Que a cada renovação do plano de assinaturas contratado por mim, os planos de assinaturas\n            disponíveis, seu preço, termos e condições e os serviços correspondentes oferecidos pela Férias &\n            Co poderão ser alterados, adicionados, excluídos ou complementados, a critério da Férias & Co.\n            Alterações dos termos e condições de um plano de assinaturas no curso de seu prazo de contratação\n            requererão adesão do signatário para serem implementadas e válidas.\n          </li>\n        </p><br />\n\n        <p>\n          <li>\n            Que minha assinatura poderá ser cancelada por decisão individual minha, da Férias & Co ou da\n            Empresa, observados os Termos de Uso da Plataforma e as condições de transição em caso de\n            rescisão, conforme constantes da Plataforma.\n          </li>\n        </p><br />\n      </div>\n\n      <p> Este instrumento é regido e será interpretado de acordo com as Leis da República Federativa do Brasil.\n        As Partes elegem o foro de [São Paulo, Estado de São Paulo], para dirimir quaisquer questões oriundas do\n        presente Contrato, renunciando a qualquer outro, por mais privilegiado que seja.\n      </p>\n"
				},
				"dataConfirmacaoAdesao" : null,
				"periodo" : 1,
				"dataConfirmacaoUpgrade" : null,
				"dataPeriodoTrialUpgrade" : null,
				"dataEfetivacaoCancelamento" : null
			}
		],
		"endereco" : {
			"cep" : "09350450",
			"logradouro" : "Rua Doutor Vicente de Carvalho Bruno",
			"numero" : 12,
			"complemento" : "",
			"bairro" : "Vila Flórida",
			"municipio" : "Mauá",
			"municipioCodigoIbge" : "29401",
			"estadoSigla" : "SP",
			"estadoCodigoIbge" : "35"
		},
		"dataCriacao" : ISODate("2021-05-10T20:16:00.894Z"),
		"dataAtualizacao" : ISODate("2021-05-10T20:38:39.500Z"),
		"dataDelecao" : null,
		"aceitaContatoWhatsapp" : false,
		"carteira" : {
			"pontos" : {
				"saldo" : NumberDecimal("33834"),
				"quantidadePendente" : NumberDecimal("0"),
				"pontosAcumulados" : [ 
					{
						"_id" : UUID("780bcedd-f85d-4275-af75-03109312ba53"),
						"quantidadeInicial" : NumberDecimal("1334"),
						"status" : "Confirmado",
						"notificacao" : false,
						"origem" : "Premiacao",
						"descricao" : "parabésn pessoal",
						"codigoReferenciaOrigem" : "1b6c6973-3808-4bb8-9bec-44c00ef2e5e1",
						"pontosRestantes" : NumberDecimal("1334"),
						"valorDinheiro" : NumberDecimal("0.06"),
						"idPlano" : UUID("00000000-0000-0000-0000-000000000000"),
						"dataRegistro" : ISODate("2021-05-10T17:25:49.656Z"),
						"dataVencimento" : ISODate("2023-05-10T20:26:08.857Z"),
						"dataPrevisaoEfetivacao" : ISODate("2021-05-10T17:25:49.656Z")
					}, 
					{
						"_id" : UUID("0f5d0467-b0bf-41ca-9d2b-dc73871a155b"),
						"quantidadeInicial" : NumberDecimal("2000"),
						"status" : "Confirmado",
						"notificacao" : false,
						"origem" : "Premiacao",
						"descricao" : "Congratulations",
						"codigoReferenciaOrigem" : "",
						"pontosRestantes" : NumberDecimal("2000"),
						"valorDinheiro" : NumberDecimal("0.06"),
						"idPlano" : UUID("005d9991-e7c7-49ff-a617-fa3ce1bad9e5"),
						"dataRegistro" : ISODate("2021-05-11T08:49:10.927Z"),
						"dataVencimento" : ISODate("2023-05-11T11:49:30.459Z"),
						"dataPrevisaoEfetivacao" : ISODate("2021-05-11T08:49:10.927Z")
					}, 
					{
						"_id" : UUID("69a1a2f6-2031-4688-a4b4-8f1278aeebfc"),
						"quantidadeInicial" : NumberDecimal("20000"),
						"status" : "Confirmado",
						"notificacao" : false,
						"origem" : "Premiacao",
						"descricao" : "congratulations",
						"codigoReferenciaOrigem" : "",
						"pontosRestantes" : NumberDecimal("20000"),
						"valorDinheiro" : NumberDecimal("0.06"),
						"idPlano" : UUID("005d9991-e7c7-49ff-a617-fa3ce1bad9e5"),
						"dataRegistro" : ISODate("2021-05-11T08:51:53.128Z"),
						"dataVencimento" : ISODate("2023-05-11T11:52:12.722Z"),
						"dataPrevisaoEfetivacao" : ISODate("2021-05-11T08:51:53.128Z")
					}, 
					{
						"_id" : UUID("ce5c3664-c2d9-4629-bfab-eafad7f073ea"),
						"quantidadeInicial" : NumberDecimal("10500"),
						"status" : "Confirmado",
						"notificacao" : true,
						"origem" : "MgmIndiqueGanhe",
						"descricao" : "Parabéns você ganhou pontos por sua indicação!",
						"codigoReferenciaOrigem" : "",
						"pontosRestantes" : NumberDecimal("10500"),
						"valorDinheiro" : NumberDecimal("0.06"),
						"idPlano" : UUID("005d9991-e7c7-49ff-a617-fa3ce1bad9e5"),
						"dataRegistro" : ISODate("2021-05-12T08:51:53.128Z"),
						"dataVencimento" : ISODate("2023-05-12T11:52:12.722Z"),
						"dataPrevisaoEfetivacao" : ISODate("2021-05-12T08:51:53.128Z")
					}
				],
				"historicoTransacaoPontos" : [ 
					{
						"_id" : UUID("28df111d-2698-4030-bfee-62f77b51c567"),
						"quantidade" : NumberDecimal("1334"),
						"status" : "Confirmado",
						"origem" : "Premiacao",
						"descricao" : "parabésn pessoal",
						"codigoReferenciaOrigem" : "1b6c6973-3808-4bb8-9bec-44c00ef2e5e1",
						"tipoTransacao" : "Credito",
						"tipoMovimento" : "Credito",
						"idReferenciaTransacao" : [],
						"dataRegistro" : ISODate("2021-05-10T20:25:49.658Z"),
						"dataAtualizacao" : null,
						"tipoCredito" : "Pontos",
						"idPlano" : UUID("00000000-0000-0000-0000-000000000000"),
						"planoPeriodo" : 0,
						"pontosUtilizados" : [ 
							{
								"_id" : UUID("06de15eb-2431-4da1-88db-34ec7d19a28a"),
								"idCreditoPontos" : UUID("780bcedd-f85d-4275-af75-03109312ba53"),
								"quantidade" : "1334"
							}
						]
					}, 
					{
						"_id" : UUID("a5ef3370-f297-4168-b1b3-32f5016d525f"),
						"quantidade" : NumberDecimal("2000"),
						"status" : "Confirmado",
						"origem" : "Premiacao",
						"descricao" : "Congratulations",
						"codigoReferenciaOrigem" : "",
						"tipoTransacao" : "Credito",
						"tipoMovimento" : "Credito",
						"idReferenciaTransacao" : [],
						"dataRegistro" : ISODate("2021-05-11T11:49:10.927Z"),
						"dataAtualizacao" : null,
						"tipoCredito" : "Pontos",
						"idPlano" : UUID("00000000-0000-0000-0000-000000000000"),
						"planoPeriodo" : 0,
						"pontosUtilizados" : [ 
							{
								"_id" : UUID("7b43272f-092f-4962-89cd-1adab4812f03"),
								"idCreditoPontos" : UUID("0f5d0467-b0bf-41ca-9d2b-dc73871a155b"),
								"quantidade" : "2000"
							}
						]
					}, 
					{
						"_id" : UUID("fc2d6382-9fb3-410b-8363-aec2993dcd25"),
						"quantidade" : NumberDecimal("20000"),
						"status" : "Confirmado",
						"origem" : "Premiacao",
						"descricao" : "congratulations",
						"codigoReferenciaOrigem" : "",
						"tipoTransacao" : "Credito",
						"tipoMovimento" : "Credito",
						"idReferenciaTransacao" : [],
						"dataRegistro" : ISODate("2021-05-11T11:51:53.128Z"),
						"dataAtualizacao" : null,
						"tipoCredito" : "Pontos",
						"idPlano" : UUID("00000000-0000-0000-0000-000000000000"),
						"planoPeriodo" : 0,
						"pontosUtilizados" : [ 
							{
								"_id" : UUID("7c294987-4ad0-47bd-89b1-45866e419945"),
								"idCreditoPontos" : UUID("69a1a2f6-2031-4688-a4b4-8f1278aeebfc"),
								"quantidade" : "20000"
							}
						]
					}, 
					{
						"_id" : UUID("e2ba6ec0-1e97-4d4b-80e5-1331039f1b6a"),
						"quantidade" : NumberDecimal("10500"),
						"status" : "Confirmado",
						"origem" : "MgmIndiqueGanhe",
						"descricao" : "Parabéns você ganhou pontos por sua indicação!",
						"codigoReferenciaOrigem" : "",
						"tipoTransacao" : "Credito",
						"tipoMovimento" : "Credito",
						"idReferenciaTransacao" : [],
						"dataRegistro" : ISODate("2021-05-12T11:51:53.128Z"),
						"dataAtualizacao" : null,
						"tipoCredito" : "Pontos",
						"idPlano" : UUID("00000000-0000-0000-0000-000000000000"),
						"planoPeriodo" : 0,
						"pontosUtilizados" : [ 
							{
								"_id" : UUID("1bdad84b-0158-4545-9093-25779297f3db"),
								"idCreditoPontos" : UUID("ce5c3664-c2d9-4629-bfab-eafad7f073ea"),
								"quantidade" : "10500"
							}
						]
					}
				]
			},
			"diarias" : {
				"historicoTransacaoDiarias" : []
			}
		},
		"notificarIntencaoUpgrade" : false,
		"dataNotificarIntencaoUpgrade" : null,
		"idPlanoIntencaoUpgrade" : UUID("00000000-0000-0000-0000-000000000000"),
		"equipes" : [ 
			{
				"_id" : UUID("1b6c6973-3808-4bb8-9bec-44c00ef2e5e1"),
				"titulo" : "Tricolor teste do teste",
				"ativo" : true,
				"dataRegistro" : ISODate("2021-05-10T17:23:45.717Z"),
				"dataAtualizacao" : null
			}
		],
		"verPremiacao" : true,
		"historicoPremiacoes" : [ 
			{
				"equipe" : {
					"_id" : UUID("1b6c6973-3808-4bb8-9bec-44c00ef2e5e1"),
					"titulo" : "Tricolor teste",
					"ativo" : true,
					"dataRegistro" : ISODate("2021-05-10T17:23:45.717Z"),
					"dataAtualizacao" : null
				},
				"premio" : "1334",
				"valorPremio" : "100",
				"baseCalculo" : "0.06",
				"descricao" : "parabésn pessoal",
				"dataRegistro" : ISODate("2021-05-10T17:25:49.656Z")
			}, 
			{
				"equipe" : null,
				"premio" : "2000",
				"valorPremio" : "150",
				"baseCalculo" : "0.06",
				"descricao" : "Congratulations",
				"dataRegistro" : ISODate("2021-05-11T08:49:10.927Z")
			}, 
			{
				"equipe" : null,
				"premio" : "20000",
				"valorPremio" : "1500",
				"baseCalculo" : "0.06",
				"descricao" : "congratulations",
				"dataRegistro" : ISODate("2021-05-11T08:51:53.128Z")
			}
		],
		"dataDesligamento" : null,
		"renovacaoAutomatica" : null,
		"renovacaoAutomaticaHistorico" : []
	}
])
