/* eslint-disable */
db.getSiblingDB('financeiro').getCollection('conta_corrente').insert([
    {
        "_id" : ObjectId("60576acaab4bb30001dfdba0"),
        "id" : UUID("f004e17e-0411-4586-83b3-e08bc169b554"),
        "metaData" : {
            "ativo" : true,
            "dataCriacao" : ISODate("2021-03-21T12:48:26.573Z"),
            "dataAtualizacao" : ISODate("2021-03-26T15:34:18.317Z"),
            "dataDelecao" : null
        },
        "saldo" : "0",
        "saldoPlano" : "0",
        "saldoExtra" : "0",
        "saldoPonto" : "0",
        "assinatura" : {
            "nome" : "Betina Matriz",
            "cpf" : "93953192086"
        },
        "empresa" : {
            "razaoSocial" : "TESTE ADN MATRIZ",
            "cnpj" : "93881980000160"
        },
        "planos" : [ 
            {
                "_id" : UUID("13dd8ce0-8e66-40ba-82e7-75c0b0f74cb8"),
                "idAssinatura" : UUID("00000000-0000-0000-0000-000000000000"),
                "nome" : "Especial",
                "periodo" : 1,
                "dataAdesao" : ISODate("2021-03-21T15:47:38.927Z"),
                "dataVigencia" : ISODate("2023-03-21T15:48:25.546Z"),
                "dataCancelamento" : null,
                "valorTotalPlano" : NumberDecimal("1968"),
                "diariasTotais" : 4
            }
        ],
        "transacaoDiarias" : [ 
            {
                "codigoReferenciaOrigem" : "CA9392203211213197",
                "tipoMovimento" : "Utilização",
                "dataRegistro" : ISODate("2021-03-26T15:33:49.062Z"),
                "parcela" : 0,
                "valorParcela" : "0",
                "subParcela" : 0,
                "valorRecebido" : "0",
                "valorAdiantamento" : "0",
                "valorUtilizacao" : "492",
                "valorCusto" : "283.14",
                "integracaoBenner" : false,
                "metodoPagamento" : "",
                "valorSaldoReceber" : "492",
                "dataRecebimento" : null,
                "reservas" : [ 
                    "EXT_SUP_TEST_84525082"
                ],
                "trechos" : null,
                "previsaoIntegracaoBenner " : null,
                "notaFiscalUtilizacao " : null,
                "dataEmissaoNotaFiscalUtilizacao " : null,
                "faturaFornecedor " : null,
                "dataCheckout " : null,
                "_id" : UUID("8dfc24da-58df-43e0-b719-fd7fbd76a708"),
                "quantidade" : 1,
                "status" : "Cancelado",
                "origem" : "Reserva",
                "descricao" : "Débito referente a reserva do Pullman São Paulo Ibirapuera (São Paulo, São Paulo, Brasil)",
                "tipoTransacao" : "Debito",
                "idReferenciaTransacao" : [],
                "dataAtualizacao" : ISODate("2021-03-23T15:12:49.196Z"),
                "tipoCredito" : null,
                "idPlano" : UUID("13dd8ce0-8e66-40ba-82e7-75c0b0f74cb8"),
                "planoPeriodo" : 1,
                "pontosUtilizados" : null,
                "valorCreditoPontoAcumulado" : "87.84",
                "valorReceita" : "121.02",
                "valorQuantidadeInicial" : "0",
                "valorPontosRestantes" : "0",
                "valorSaldo" : "0"
            }, 
            {
                "codigoReferenciaOrigem" : "CA9392203211213197",
                "tipoMovimento" : "Estorno",
                "dataRegistro" : ISODate("2021-03-26T15:34:18.316Z"),
                "parcela" : 0,
                "valorParcela" : "0",
                "subParcela" : 0,
                "valorRecebido" : "492",
                "valorAdiantamento" : "0",
                "valorUtilizacao" : "0",
                "valorCusto" : "283.14",
                "integracaoBenner" : false,
                "metodoPagamento" : "",
                "valorSaldoReceber" : "0",
                "dataRecebimento" : null,
                "reservas" : [ 
                    "EXT_SUP_TEST_84525082"
                ],
                "trechos" : null,
                "previsaoIntegracaoBenner " : null,
                "notaFiscalUtilizacao " : null,
                "dataEmissaoNotaFiscalUtilizacao " : null,
                "faturaFornecedor " : [ 
                    "EXT_SUP_TEST_84525082"
                ],
                "dataCheckout " : ISODate("2021-10-11T00:00:00.000Z"),
                "_id" : UUID("fa52adae-95af-47d3-ace2-9bceb02f8408"),
                "quantidade" : 1,
                "status" : "Confirmado",
                "origem" : "Reserva",
                "descricao" : "Cancelamento referente ao pedido CA9392203211213197",
                "tipoTransacao" : "Credito",
                "idReferenciaTransacao" : [ 
                    "8dfc24da-58df-43e0-b719-fd7fbd76a708"
                ],
                "dataAtualizacao" : null,
                "tipoCredito" : null,
                "idPlano" : UUID("13dd8ce0-8e66-40ba-82e7-75c0b0f74cb8"),
                "planoPeriodo" : 1,
                "pontosUtilizados" : null,
                "valorCreditoPontoAcumulado" : "0",
                "valorReceita" : "0",
                "valorQuantidadeInicial" : "0",
                "valorPontosRestantes" : "0",
                "valorSaldo" : "0"
            }
        ],
        "transacaoPontos" : [],
        "transacaoExtras" : [],
        "pontoAcumulados" : []
    }
])