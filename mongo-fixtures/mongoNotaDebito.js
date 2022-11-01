/* eslint-disable */
db.getSiblingDB('financeiro').getCollection('nota_debito').insert([
    {
        "_id" : ObjectId("5fc55776ee8c7b0001259110"),
        "id" : UUID("d45adb01-e0f7-449a-8758-d3625054ed5f"),
        "metaData" : {
            "ativo" : true,
            "dataCriacao" : ISODate("2020-11-30T20:35:02.777Z"),
            "dataAtualizacao" : ISODate("2020-11-30T20:35:12.295Z"),
            "dataDelecao" : null
        },
        "contaReceberId" : UUID("98e49a97-8815-4b76-bd19-33ec32a778aa"),
        "numero" : 1,
        "titular" : "FERIAS & CO. VIAGENS E TURISMO LTDA",
        "documento" : "34008403000107",
        "valorDesconto" : NumberDecimal("0"),
        "valorNominal" : NumberDecimal("1916"),
        "dataEmissao" : ISODate("2020-11-30T20:35:02.774Z"),
        "dadosReferencia" : {
            "endereco" : "xxxxx, xxxxx xxxxx - xxxxx - São Caetano do Sul / SP",
            "cep" : "xxxxx",
            "email" : "leandro.martins@ferias.co",
            "referencia" : ISODate("2020-11-30T03:01:00.000Z")
        },
        "informacoes" : {
            "descricao" : "Recebimento das assinaturas ",
            "observacoes" : "O pagamento desta Nota de Débito deverá ser realizado por boleto bancário enviado ao responsável por e-mail, assim como o Relatório de Assinaturas do período mencionado. Caso não tenham recebido, pedimos a gentileza de entrar em contato conosco pelo e-mail financeiro@ferias.co. O pagamento desta Nota de Débito deverá ser realizado por boleto bancário enviado ao responsável por e-mail, assim como o Relatório de Assinaturas do período mencionado."
        },
        "condicoesPagamento" : [ 
            {
                "diasVencimento" : 30
            }
        ],
        "periodo" : {
            "de" : ISODate("2019-12-01T03:01:00.000Z"),
            "ate" : ISODate("2019-12-31T03:01:00.000Z")
        },
        "enviada" : false,
        "dataEnvio" : null,
        "situacao" : "EMITIDA",
        "dataCancelamento" : null,
        "faturaDivergente" : false
    },
    {
        "_id" : ObjectId("5fc629b1ee8c7b0001259111"),
        "id" : UUID("0685f126-be47-432e-bbe6-a16829947ced"),
        "metaData" : {
            "ativo" : true,
            "dataCriacao" : ISODate("2020-12-01T11:32:01.347Z"),
            "dataAtualizacao" : ISODate("2020-12-01T13:56:10.208Z"),
            "dataDelecao" : null
        },
        "contaReceberId" : UUID("083ee351-080b-4197-a6b6-6266c623f37a"),
        "numero" : 2,
        "titular" : "FERIAS & CO. VIAGENS E TURISMO LTDA",
        "documento" : "34008403000107",
        "valorDesconto" : NumberDecimal("0"),
        "valorNominal" : NumberDecimal("900"),
        "dataEmissao" : ISODate("2020-12-01T11:32:01.342Z"),
        "dadosReferencia" : {
            "endereco" : "xxxxx, xxxxx xxxxx - xxxxx - São Caetano do Sul / SP",
            "cep" : "xxxxx",
            "email" : "leandro.martins@ferias.co",
            "referencia" : ISODate("2020-12-01T03:01:00.000Z")
        },
        "informacoes" : {
            "descricao" : "Soneto do Amor Total  Amo-te tanto, meu amor... não cante O humano coração com mais verdade... Amo-te como amigo e como amante Numa sempre diversa realidade.  Amo-te afim, de um calmo amor prestante E te amo além, presente na saudade. Amo-te, enfim, com grande liberdade Dentro da eternidade e a cada instante.  Amo-te como um bicho, simplesmente De um amor sem mistério e sem virtude Com um desejo maciço e permanente.  E de te amar assim, muito e amiúde É que um dia em teu corpo de repente Hei de morrer de amar mais do que pude.",
            "observacoes" : "Pagamento referente ao mês de agosto"
        },
        "condicoesPagamento" : [ 
            {
                "diasVencimento" : 30
            }, 
            {
                "diasVencimento" : 60
            }
        ],
        "periodo" : {
            "de" : ISODate("2021-02-01T03:01:00.000Z"),
            "ate" : ISODate("2021-02-28T03:01:00.000Z")
        },
        "enviada" : false,
        "dataEnvio" : null,
        "situacao" : "CANCELADA",
        "dataCancelamento" : ISODate("2020-12-01T13:56:10.208Z"),
        "faturaDivergente" : true
    },
    {
        "_id" : ObjectId("5fc62a29ee8c7b0001259112"),
        "id" : UUID("dd5a61ee-4d18-4272-814d-d44dfaa937bf"),
        "metaData" : {
            "ativo" : true,
            "dataCriacao" : ISODate("2020-12-01T11:34:01.152Z"),
            "dataAtualizacao" : ISODate("2020-12-01T13:55:43.812Z"),
            "dataDelecao" : null
        },
        "contaReceberId" : UUID("f90340ed-7ef4-4c58-b538-4836aee72803"),
        "numero" : 3,
        "titular" : "FERIAS & CO. VIAGENS E TURISMO LTDA",
        "documento" : "34008403000107",
        "valorDesconto" : NumberDecimal("0"),
        "valorNominal" : NumberDecimal("810"),
        "dataEmissao" : ISODate("2020-12-01T11:34:01.148Z"),
        "dadosReferencia" : {
            "endereco" : "xxxxx, xxxxx xxxxx - xxxxx - São Caetano do Sul / SP",
            "cep" : "xxxxx",
            "email" : "leandro.martins@ferias.co",
            "referencia" : ISODate("2020-12-01T03:01:00.000Z")
        },
        "informacoes" : {
            "descricao" : "Soneto do Amor Total  Amo-te tanto, meu amor... não cante O humano coração com mais verdade... Amo-te como amigo e como amante Numa sempre diversa realidade.  Amo-te afim, de um calmo amor prestante E te amo além, presente na saudade. Amo-te, enfim, com grande liberdade Dentro da eternidade e a cada instante.  Amo-te como um bicho, simplesmente De um amor sem mistério e sem virtude Com um desejo maciço e permanente.  E de te amar assim, muito e amiúde É que um dia em teu corpo de repente Hei de morrer de amar mais do que pude.",
            "observacoes" : "Pagamento referente ao mês de agosto"
        },
        "condicoesPagamento" : [ 
            {
                "diasVencimento" : 30
            }, 
            {
                "diasVencimento" : 60
            }
        ],
        "periodo" : {
            "de" : ISODate("2021-03-01T03:01:00.000Z"),
            "ate" : ISODate("2021-03-31T03:01:00.000Z")
        },
        "enviada" : false,
        "dataEnvio" : null,
        "situacao" : "CANCELADA",
        "dataCancelamento" : ISODate("2020-12-01T13:55:43.812Z"),
        "faturaDivergente" : true
    },
    {
        "_id" : ObjectId("5fc62af3ee8c7b0001259113"),
        "id" : UUID("038e96dc-6394-4789-9d38-5d0ae04e2d04"),
        "metaData" : {
            "ativo" : true,
            "dataCriacao" : ISODate("2020-12-01T11:37:23.374Z"),
            "dataAtualizacao" : ISODate("2020-12-01T11:52:56.590Z"),
            "dataDelecao" : null
        },
        "contaReceberId" : UUID("71667f08-c45a-4ca1-a7e2-e476e6f27bed"),
        "numero" : 4,
        "titular" : "FERIAS & CO. VIAGENS E TURISMO LTDA",
        "documento" : "34008403000107",
        "valorDesconto" : NumberDecimal("0"),
        "valorNominal" : NumberDecimal("540"),
        "dataEmissao" : ISODate("2020-12-01T11:37:23.371Z"),
        "dadosReferencia" : {
            "endereco" : "xxxxx, xxxxx xxxxx - xxxxx - São Caetano do Sul / SP",
            "cep" : "xxxxx",
            "email" : "leandro.martins@ferias.co",
            "referencia" : ISODate("2020-12-01T03:01:00.000Z")
        },
        "informacoes" : {
            "descricao" : "Soneto do Amor Total  Amo-te tanto, meu amor... não cante O humano coração com mais verdade... Amo-te como amigo e como amante Numa sempre diversa realidade.  Amo-te afim, de um calmo amor prestante E te amo além, presente na saudade. Amo-te, enfim, com grande liberdade Dentro da eternidade e a cada instante.  Amo-te como um bicho, simplesmente De um amor sem mistério e sem virtude Com um desejo maciço e permanente.  E de te amar assim, muito e amiúde É que um dia em teu corpo de repente Hei de morrer de amar mais do que pude.",
            "observacoes" : "Pagamento referente ao mês de maio"
        },
        "condicoesPagamento" : [ 
            {
                "diasVencimento" : 30
            }, 
            {
                "diasVencimento" : 60
            }
        ],
        "periodo" : {
            "de" : ISODate("2021-04-01T03:01:00.000Z"),
            "ate" : ISODate("2021-04-30T03:01:00.000Z")
        },
        "enviada" : false,
        "dataEnvio" : null,
        "situacao" : "EMITIDA",
        "dataCancelamento" : null,
        "faturaDivergente" : false
    },
    {
        "_id" : ObjectId("5fc64bb0ee8c7b0001259114"),
        "id" : UUID("2af036ff-42f0-4e26-a892-99d09d32c6fb"),
        "metaData" : {
            "ativo" : true,
            "dataCriacao" : ISODate("2020-12-01T13:57:04.804Z"),
            "dataAtualizacao" : ISODate("2020-12-01T16:41:27.409Z"),
            "dataDelecao" : null
        },
        "contaReceberId" : UUID("0cbd66bb-5307-4021-9b48-da6a5696821a"),
        "numero" : 5,
        "titular" : "FERIAS & CO. VIAGENS E TURISMO LTDA",
        "documento" : "34008403000107",
        "valorDesconto" : NumberDecimal("0"),
        "valorNominal" : NumberDecimal("810"),
        "dataEmissao" : ISODate("2020-12-01T13:57:04.801Z"),
        "dadosReferencia" : {
            "endereco" : "xxxxx, xxxxx xxxxx - xxxxx - São Caetano do Sul / SP",
            "cep" : "xxxxx",
            "email" : "leandro.martins@ferias.co",
            "referencia" : ISODate("2020-12-01T03:01:00.000Z")
        },
        "informacoes" : {
            "descricao" : "Soneto do Amor Total  Amo-te tanto, meu amor... não cante O humano coração com mais verdade... Amo-te como amigo e como amante Numa sempre diversa realidade.  Amo-te afim, de um calmo amor prestante E te amo além, presente na saudade. Amo-te, enfim, com grande liberdade Dentro da eternidade e a cada instante.  Amo-te como um bicho, simplesmente De um amor sem mistério e sem virtude Com um desejo maciço e permanente.  E de te amar assim, muito e amiúde É que um dia em teu corpo de repente Hei de morrer de amar mais do que pude.",
            "observacoes" : "Pagamento referente ao mês de maio"
        },
        "condicoesPagamento" : [ 
            {
                "diasVencimento" : 30
            }
        ],
        "periodo" : {
            "de" : ISODate("2021-03-01T03:01:00.000Z"),
            "ate" : ISODate("2021-03-31T03:01:00.000Z")
        },
        "enviada" : false,
        "dataEnvio" : null,
        "situacao" : "CANCELADA",
        "dataCancelamento" : ISODate("2020-12-01T16:41:27.409Z"),
        "faturaDivergente" : true
    },
    {
        "_id" : ObjectId("5fc67296ee8c7b0001259115"),
        "id" : UUID("f245484d-0408-40d0-8caf-b5f032a336ff"),
        "metaData" : {
            "ativo" : false,
            "dataCriacao" : ISODate("2020-12-01T16:43:02.423Z"),
            "dataAtualizacao" : null,
            "dataDelecao" : ISODate("2020-12-01T16:46:23.553Z")
        },
        "contaReceberId" : UUID("ef62ec8b-0d61-4124-a291-9d1d035e7ada"),
        "numero" : 6,
        "titular" : "FERIAS & CO. VIAGENS E TURISMO LTDA",
        "documento" : "34008403000107",
        "valorDesconto" : NumberDecimal("0"),
        "valorNominal" : NumberDecimal("810"),
        "dataEmissao" : ISODate("2020-12-01T16:43:02.419Z"),
        "dadosReferencia" : {
            "endereco" : "xxxxx, xxxxx xxxxx - xxxxx - São Caetano do Sul / SP",
            "cep" : "xxxxx",
            "email" : "leandro.martins@ferias.co",
            "referencia" : ISODate("2020-12-01T03:01:00.000Z")
        },
        "informacoes" : {
            "descricao" : "Soneto do Amor Total  Amo-te tanto, meu amor... não cante O humano coração com mais verdade... Amo-te como amigo e como amante Numa sempre diversa realidade.  Amo-te afim, de um calmo amor prestante E te amo além, presente na saudade. Amo-te, enfim, com grande liberdade Dentro da eternidade e a cada instante.  Amo-te como um bicho, simplesmente De um amor sem mistério e sem virtude Com um desejo maciço e permanente.  E de te amar assim, muito e amiúde É que um dia em teu corpo de repente Hei de morrer de amar mais do que pude.",
            "observacoes" : "Pagamento referente ao mês de agosto"
        },
        "condicoesPagamento" : [ 
            {
                "diasVencimento" : 30
            }
        ],
        "periodo" : {
            "de" : ISODate("2021-03-01T03:01:00.000Z"),
            "ate" : ISODate("2021-03-31T03:01:00.000Z")
        },
        "enviada" : false,
        "dataEnvio" : null,
        "situacao" : "PENDENTE",
        "dataCancelamento" : null,
        "faturaDivergente" : true
    },
    {
        "_id" : ObjectId("5fc67381ee8c7b0001259116"),
        "id" : UUID("7411f1af-a5b3-4eee-b0a3-7b1566570baf"),
        "metaData" : {
            "ativo" : true,
            "dataCriacao" : ISODate("2020-12-01T16:46:57.801Z"),
            "dataAtualizacao" : null,
            "dataDelecao" : null
        },
        "contaReceberId" : UUID("f096151a-6818-4a29-aa14-9d61f6a65c8c"),
        "numero" : 6,
        "titular" : "Bmb Mode Center Indústria, Comércio e Serviços LTDA",
        "documento" : "04532167000154",
        "valorDesconto" : NumberDecimal("0"),
        "valorNominal" : NumberDecimal("2630"),
        "dataEmissao" : ISODate("2020-12-01T16:46:57.796Z"),
        "dadosReferencia" : {
            "endereco" : "Av. Renato Monteiro, 8005 - Polo Urbo Agro Industrial - Porto Real / RJ",
            "cep" : "27570000",
            "email" : "samara.ferreira@modecenter.com.br",
            "referencia" : ISODate("2020-12-01T03:01:00.000Z")
        },
        "informacoes" : {
            "descricao" : "Soneto do Amor Total  Amo-te tanto, meu amor... não cante O humano coração com mais verdade... Amo-te como amigo e como amante Numa sempre diversa realidade.  Amo-te afim, de um calmo amor prestante E te amo além, presente na saudade. Amo-te, enfim, com grande liberdade Dentro da eternidade e a cada instante.  Amo-te como um bicho, simplesmente De um amor sem mistério e sem virtude Com um desejo maciço e permanente.  E de te amar assim, muito e amiúde É que um dia em teu corpo de repente Hei de morrer de amar mais do que pude.",
            "observacoes" : "Pagamento referente ao mês de agosto"
        },
        "condicoesPagamento" : [ 
            {
                "diasVencimento" : 30
            }
        ],
        "periodo" : {
            "de" : ISODate("2021-01-01T03:01:00.000Z"),
            "ate" : ISODate("2021-01-31T03:01:00.000Z")
        },
        "enviada" : false,
        "dataEnvio" : null,
        "situacao" : "PENDENTE",
        "dataCancelamento" : null,
        "faturaDivergente" : true
    },
    {
        "_id" : ObjectId("5fc67a6cee8c7b0001259117"),
        "id" : UUID("a4c9af1d-c92f-4021-bc40-60ce2c36cb84"),
        "metaData" : {
            "ativo" : true,
            "dataCriacao" : ISODate("2020-12-01T17:16:28.288Z"),
            "dataAtualizacao" : ISODate("2020-12-01T17:16:51.136Z"),
            "dataDelecao" : null
        },
        "contaReceberId" : UUID("9af523d7-9ba2-4d31-943c-01fee35545f5"),
        "numero" : 7,
        "titular" : "FERIAS & CO. VIAGENS E TURISMO LTDA",
        "documento" : "34008403000107",
        "valorDesconto" : NumberDecimal("0"),
        "valorNominal" : NumberDecimal("810"),
        "dataEmissao" : ISODate("2020-12-01T17:16:28.284Z"),
        "dadosReferencia" : {
            "endereco" : "xxxxx, xxxxx xxxxx - xxxxx - São Caetano do Sul / SP",
            "cep" : "xxxxx",
            "email" : "leandro.martins@ferias.co",
            "referencia" : ISODate("2020-12-01T03:01:00.000Z")
        },
        "informacoes" : {
            "descricao" : "Soneto do Amor Total  Amo-te tanto, meu amor... não cante O humano coração com mais verdade... Amo-te como amigo e como amante Numa sempre diversa realidade.  Amo-te afim, de um calmo amor prestante E te amo além, presente na saudade. Amo-te, enfim, com grande liberdade Dentro da eternidade e a cada instante.  Amo-te como um bicho, simplesmente De um amor sem mistério e sem virtude Com um desejo maciço e permanente.  E de te amar assim, muito e amiúde É que um dia em teu corpo de repente Hei de morrer de amar mais do que pude.",
            "observacoes" : "Pagamento referente ao mês de maio"
        },
        "condicoesPagamento" : [ 
            {
                "diasVencimento" : 30
            }
        ],
        "periodo" : {
            "de" : ISODate("2021-03-01T03:01:00.000Z"),
            "ate" : ISODate("2021-03-31T03:01:00.000Z")
        },
        "enviada" : false,
        "dataEnvio" : null,
        "situacao" : "EMITIDA",
        "dataCancelamento" : null,
        "faturaDivergente" : false
    },
    {
        "_id" : ObjectId("5fc67e12ee8c7b0001259118"),
        "id" : UUID("e099c57f-cc30-4efc-ba87-2a56c194883d"),
        "metaData" : {
            "ativo" : true,
            "dataCriacao" : ISODate("2020-12-01T17:32:02.366Z"),
            "dataAtualizacao" : ISODate("2020-12-01T17:32:09.072Z"),
            "dataDelecao" : null
        },
        "contaReceberId" : UUID("f0096f5b-20f6-4274-b708-eff02c4b4522"),
        "numero" : 8,
        "titular" : "FERIAS & CO. VIAGENS E TURISMO LTDA",
        "documento" : "34008403000107",
        "valorDesconto" : NumberDecimal("0"),
        "valorNominal" : NumberDecimal("360"),
        "dataEmissao" : ISODate("2020-12-01T17:32:02.363Z"),
        "dadosReferencia" : {
            "endereco" : "xxxxx, xxxxx xxxxx - xxxxx - São Caetano do Sul / SP",
            "cep" : "xxxxx",
            "email" : "leandro.martins@ferias.co",
            "referencia" : ISODate("2020-12-01T03:01:00.000Z")
        },
        "informacoes" : {
            "descricao" : "Soneto do Amor Total  Amo-te tanto, meu amor... não cante O humano coração com mais verdade... Amo-te como amigo e como amante Numa sempre diversa realidade.  Amo-te afim, de um calmo amor prestante E te amo além, presente na saudade. Amo-te, enfim, com grande liberdade Dentro da eternidade e a cada instante.  Amo-te como um bicho, simplesmente De um amor sem mistério e sem virtude Com um desejo maciço e permanente.  E de te amar assim, muito e amiúde É que um dia em teu corpo de repente Hei de morrer de amar mais do que pude.",
            "observacoes" : "Pagamento referente ao mês de maio"
        },
        "condicoesPagamento" : [ 
            {
                "diasVencimento" : 30
            }, 
            {
                "diasVencimento" : 60
            }
        ],
        "periodo" : {
            "de" : ISODate("2021-05-01T03:01:00.000Z"),
            "ate" : ISODate("2021-05-31T03:01:00.000Z")
        },
        "enviada" : false,
        "dataEnvio" : null,
        "situacao" : "EMITIDA",
        "dataCancelamento" : null,
        "faturaDivergente" : false
    },
    {
        "_id" : ObjectId("5fc67eb8ee8c7b0001259119"),
        "id" : UUID("dea67386-8dc2-400b-87f7-b0ff6a975f28"),
        "metaData" : {
            "ativo" : true,
            "dataCriacao" : ISODate("2020-12-01T17:34:48.572Z"),
            "dataAtualizacao" : ISODate("2020-12-01T17:34:53.398Z"),
            "dataDelecao" : null
        },
        "contaReceberId" : UUID("dd02ab04-bbb9-4414-9128-5da90a664da0"),
        "numero" : 9,
        "titular" : "FERIAS & CO. VIAGENS E TURISMO LTDA",
        "documento" : "34008403000107",
        "valorDesconto" : NumberDecimal("0"),
        "valorNominal" : NumberDecimal("2726"),
        "dataEmissao" : ISODate("2020-12-01T17:34:48.569Z"),
        "dadosReferencia" : {
            "endereco" : "xxxxx, xxxxx xxxxx - xxxxx - São Caetano do Sul / SP",
            "cep" : "xxxxx",
            "email" : "leandro.martins@ferias.co",
            "referencia" : ISODate("2020-12-01T03:01:00.000Z")
        },
        "informacoes" : {
            "descricao" : "Soneto do Amor Total  Amo-te tanto, meu amor... não cante O humano coração com mais verdade... Amo-te como amigo e como amante Numa sempre diversa realidade.  Amo-te afim, de um calmo amor prestante E te amo além, presente na saudade. Amo-te, enfim, com grande liberdade Dentro da eternidade e a cada instante.  Amo-te como um bicho, simplesmente De um amor sem mistério e sem virtude Com um desejo maciço e permanente.  E de te amar assim, muito e amiúde É que um dia em teu corpo de repente Hei de morrer de amar mais do que pude.",
            "observacoes" : "Nota de debito setembro"
        },
        "condicoesPagamento" : [ 
            {
                "diasVencimento" : 30
            }
        ],
        "periodo" : {
            "de" : ISODate("2020-10-01T03:01:00.000Z"),
            "ate" : ISODate("2020-10-31T03:01:00.000Z")
        },
        "enviada" : false,
        "dataEnvio" : null,
        "situacao" : "EMITIDA",
        "dataCancelamento" : null,
        "faturaDivergente" : false
    },
    {
        "_id" : ObjectId("5fc67fbbee8c7b000125911a"),
        "id" : UUID("97e644db-183b-48b1-ac70-55d2dd89a219"),
        "metaData" : {
            "ativo" : true,
            "dataCriacao" : ISODate("2020-12-01T17:39:07.790Z"),
            "dataAtualizacao" : ISODate("2020-12-01T17:39:11.442Z"),
            "dataDelecao" : null
        },
        "contaReceberId" : UUID("66292957-e38e-4f90-838c-ea787c98f3dc"),
        "numero" : 10,
        "titular" : "FERIAS & CO. VIAGENS E TURISMO LTDA",
        "documento" : "34008403000107",
        "valorDesconto" : NumberDecimal("0"),
        "valorNominal" : NumberDecimal("2759"),
        "dataEmissao" : ISODate("2020-12-01T17:39:07.787Z"),
        "dadosReferencia" : {
            "endereco" : "xxxxx, xxxxx xxxxx - xxxxx - São Caetano do Sul / SP",
            "cep" : "xxxxx",
            "email" : "leandro.martins@ferias.co",
            "referencia" : ISODate("2020-12-01T03:01:00.000Z")
        },
        "informacoes" : {
            "descricao" : "Soneto do Amor Total  Amo-te tanto, meu amor... não cante O humano coração com mais verdade... Amo-te como amigo e como amante Numa sempre diversa realidade.  Amo-te afim, de um calmo amor prestante E te amo além, presente na saudade. Amo-te, enfim, com grande liberdade Dentro da eternidade e a cada instante.  Amo-te como um bicho, simplesmente De um amor sem mistério e sem virtude Com um desejo maciço e permanente.  E de te amar assim, muito e amiúde É que um dia em teu corpo de repente Hei de morrer de amar mais do que pude.",
            "observacoes" : "Pagamento referente ao mês de maio"
        },
        "condicoesPagamento" : [ 
            {
                "diasVencimento" : 30
            }
        ],
        "periodo" : {
            "de" : ISODate("2020-09-01T03:01:00.000Z"),
            "ate" : ISODate("2020-09-30T03:01:00.000Z")
        },
        "enviada" : false,
        "dataEnvio" : null,
        "situacao" : "EMITIDA",
        "dataCancelamento" : null,
        "faturaDivergente" : false
    },
    {
        "_id" : ObjectId("5fc69028ee8c7b000125911b"),
        "id" : UUID("689b8ec1-6f03-458a-a571-62c5ade2e2ae"),
        "metaData" : {
            "ativo" : true,
            "dataCriacao" : ISODate("2020-12-01T18:49:12.948Z"),
            "dataAtualizacao" : ISODate("2020-12-01T18:49:32.901Z"),
            "dataDelecao" : null
        },
        "contaReceberId" : UUID("427a93e4-25dc-4446-b95e-7fdf0a74b664"),
        "numero" : 11,
        "titular" : "Bmb Mode Center Indústria, Comércio e Serviços LTDA",
        "documento" : "04532167000154",
        "valorDesconto" : NumberDecimal("0"),
        "valorNominal" : NumberDecimal("2630"),
        "dataEmissao" : ISODate("2020-12-01T18:49:12.945Z"),
        "dadosReferencia" : {
            "endereco" : "Av. Renato Monteiro, 8005 - Polo Urbo Agro Industrial - Porto Real / RJ",
            "cep" : "27570000",
            "email" : "samara.ferreira@modecenter.com.br",
            "referencia" : ISODate("2020-12-01T03:01:00.000Z")
        },
        "informacoes" : {
            "descricao" : "Soneto do Amor Total  Amo-te tanto, meu amor... não cante O humano coração com mais verdade... Amo-te como amigo e como amante Numa sempre diversa realidade.  Amo-te afim, de um calmo amor prestante E te amo além, presente na saudade. Amo-te, enfim, com grande liberdade Dentro da eternidade e a cada instante.  Amo-te como um bicho, simplesmente De um amor sem mistério e sem virtude Com um desejo maciço e permanente.  E de te amar assim, muito e amiúde É que um dia em teu corpo de repente Hei de morrer de amar mais do que pude.",
            "observacoes" : "Pagamento referente ao mês de maio"
        },
        "condicoesPagamento" : [ 
            {
                "diasVencimento" : 30
            }
        ],
        "periodo" : {
            "de" : ISODate("2020-05-01T03:01:00.000Z"),
            "ate" : ISODate("2020-05-31T03:01:00.000Z")
        },
        "enviada" : false,
        "dataEnvio" : null,
        "situacao" : "EMITIDA",
        "dataCancelamento" : null,
        "faturaDivergente" : false
    },
    {
        "_id" : ObjectId("5fc6907bee8c7b000125911c"),
        "id" : UUID("973a6405-3baa-408f-b834-e0a169bae218"),
        "metaData" : {
            "ativo" : true,
            "dataCriacao" : ISODate("2020-12-01T18:50:35.494Z"),
            "dataAtualizacao" : ISODate("2020-12-01T18:50:48.071Z"),
            "dataDelecao" : null
        },
        "contaReceberId" : UUID("201998f4-b186-4b80-9dae-9c6b4e3d66e4"),
        "numero" : 12,
        "titular" : "Bmb Mode Center Indústria, Comércio e Serviços LTDA",
        "documento" : "04532167000154",
        "valorDesconto" : NumberDecimal("0"),
        "valorNominal" : NumberDecimal("2630"),
        "dataEmissao" : ISODate("2020-12-01T18:50:35.491Z"),
        "dadosReferencia" : {
            "endereco" : "Av. Renato Monteiro, 8005 - Polo Urbo Agro Industrial - Porto Real / RJ",
            "cep" : "27570000",
            "email" : "samara.ferreira@modecenter.com.br",
            "referencia" : ISODate("2020-12-01T03:01:00.000Z")
        },
        "informacoes" : {
            "descricao" : "Soneto do Amor Total  Amo-te tanto, meu amor... não cante O humano coração com mais verdade... Amo-te como amigo e como amante Numa sempre diversa realidade.  Amo-te afim, de um calmo amor prestante E te amo além, presente na saudade. Amo-te, enfim, com grande liberdade Dentro da eternidade e a cada instante.  Amo-te como um bicho, simplesmente De um amor sem mistério e sem virtude Com um desejo maciço e permanente.  E de te amar assim, muito e amiúde É que um dia em teu corpo de repente Hei de morrer de amar mais do que pude.",
            "observacoes" : "Nota de debito setembro"
        },
        "condicoesPagamento" : [ 
            {
                "diasVencimento" : 30
            }
        ],
        "periodo" : {
            "de" : ISODate("2020-06-01T03:01:00.000Z"),
            "ate" : ISODate("2020-06-30T03:01:00.000Z")
        },
        "enviada" : false,
        "dataEnvio" : null,
        "situacao" : "EMITIDA",
        "dataCancelamento" : null,
        "faturaDivergente" : false
    },
    {
        "_id" : ObjectId("5fc69279ee8c7b000125911d"),
        "id" : UUID("ece53840-828d-4783-a954-dfe9f600b341"),
        "metaData" : {
            "ativo" : true,
            "dataCriacao" : ISODate("2020-12-01T18:59:05.077Z"),
            "dataAtualizacao" : ISODate("2020-12-01T18:59:09.332Z"),
            "dataDelecao" : null
        },
        "contaReceberId" : UUID("9f29676b-c86d-4629-8f72-a58775cf606f"),
        "numero" : 13,
        "titular" : "Bmb Mode Center Indústria, Comércio e Serviços LTDA",
        "documento" : "04532167000154",
        "valorDesconto" : NumberDecimal("0"),
        "valorNominal" : NumberDecimal("2630"),
        "dataEmissao" : ISODate("2020-12-01T18:59:05.073Z"),
        "dadosReferencia" : {
            "endereco" : "Av. Renato Monteiro, 8005 - Polo Urbo Agro Industrial - Porto Real / RJ",
            "cep" : "27570000",
            "email" : "samara.ferreira@modecenter.com.br",
            "referencia" : ISODate("2020-12-01T03:01:00.000Z")
        },
        "informacoes" : {
            "descricao" : "Soneto do Amor Total  Amo-te tanto, meu amor... não cante O humano coração com mais verdade... Amo-te como amigo e como amante Numa sempre diversa realidade.  Amo-te afim, de um calmo amor prestante E te amo além, presente na saudade. Amo-te, enfim, com grande liberdade Dentro da eternidade e a cada instante.  Amo-te como um bicho, simplesmente De um amor sem mistério e sem virtude Com um desejo maciço e permanente.  E de te amar assim, muito e amiúde É que um dia em teu corpo de repente Hei de morrer de amar mais do que pude.",
            "observacoes" : "Pagamento referente ao mês de agosto"
        },
        "condicoesPagamento" : [ 
            {
                "diasVencimento" : 30
            }
        ],
        "periodo" : {
            "de" : ISODate("2020-07-01T03:01:00.000Z"),
            "ate" : ISODate("2020-07-31T03:01:00.000Z")
        },
        "enviada" : false,
        "dataEnvio" : null,
        "situacao" : "EMITIDA",
        "dataCancelamento" : null,
        "faturaDivergente" : false
    },
    {
        "_id" : ObjectId("5fc69393ee8c7b000125911e"),
        "id" : UUID("90fef9ef-2bda-473d-87dd-864ec2e578b6"),
        "metaData" : {
            "ativo" : true,
            "dataCriacao" : ISODate("2020-12-01T19:03:47.576Z"),
            "dataAtualizacao" : ISODate("2020-12-01T19:03:53.960Z"),
            "dataDelecao" : null
        },
        "contaReceberId" : UUID("2d7d308a-c2c6-4ca3-b83c-149393daef09"),
        "numero" : 14,
        "titular" : "Bmb Mode Center Indústria, Comércio e Serviços LTDA",
        "documento" : "04532167000154",
        "valorDesconto" : NumberDecimal("0"),
        "valorNominal" : NumberDecimal("2630"),
        "dataEmissao" : ISODate("2020-12-01T19:03:47.573Z"),
        "dadosReferencia" : {
            "endereco" : "Av. Renato Monteiro, 8005 - Polo Urbo Agro Industrial - Porto Real / RJ",
            "cep" : "27570000",
            "email" : "samara.ferreira@modecenter.com.br",
            "referencia" : ISODate("2020-12-01T03:01:00.000Z")
        },
        "informacoes" : {
            "descricao" : "Soneto do Amor Total  Amo-te tanto, meu amor... não cante O humano coração com mais verdade... Amo-te como amigo e como amante Numa sempre diversa realidade.  Amo-te afim, de um calmo amor prestante E te amo além, presente na saudade. Amo-te, enfim, com grande liberdade Dentro da eternidade e a cada instante.  Amo-te como um bicho, simplesmente De um amor sem mistério e sem virtude Com um desejo maciço e permanente.  E de te amar assim, muito e amiúde É que um dia em teu corpo de repente Hei de morrer de amar mais do que pude.",
            "observacoes" : "Pagamento referente ao mês de maio"
        },
        "condicoesPagamento" : [ 
            {
                "diasVencimento" : 30
            }, 
            {
                "diasVencimento" : 60
            }
        ],
        "periodo" : {
            "de" : ISODate("2021-08-01T03:01:00.000Z"),
            "ate" : ISODate("2021-08-31T03:01:00.000Z")
        },
        "enviada" : false,
        "dataEnvio" : null,
        "situacao" : "EMITIDA",
        "dataCancelamento" : null,
        "faturaDivergente" : false
    }
]);

db.getSiblingDB('financeiro').getCollection('nota_debito_parametros').insert([{
    "_id": ObjectId("5ef6245206738ccf00058528"),
    "id": UUID("b13d6d9f-b23d-4138-9e65-a11156af6f5c"),
    "metaData": {
        "ativo": true,
        "dataCriacao": ISODate("2020-06-26T16:37:36.546Z"),
        "dataAtualizacao": null,
        "dataDelecao": null
    },
    "descricao": "Recebimento de valores relativos a Assinatura anual dos Planos dos colaboradores referente ao período de 01/01 a 31/01/2020.",
    "tipo": "descricao"
},
{
    "_id": ObjectId("5ef624c75a52ffcea83dfa2e"),
    "id": UUID("98e84059-75f7-496f-b3eb-de51a3038b90"),
    "metaData": {
        "ativo": true,
        "dataCriacao": ISODate("2020-06-26T16:39:33.880Z"),
        "dataAtualizacao": ISODate("2020-06-26T17:02:23.790Z"),
        "dataDelecao": null
    },
    "descricao": "O pagamento desta Nota de Débito deverá ser realizado por boleto bancário enviado ao responsável por e-mail, assim como o Relatório de Assinaturas do período mencionado. Caso não tenham recebido, pedimos a gentileza de entrar em contato conosco pelo e-mail financeiro@ferias.co. O pagamento desta Nota de Débito deverá ser realizado por boleto bancário enviado ao responsável por e-mail, assim como o Relatório de Assinaturas do período mencionado.",
    "tipo": "observacoes"
},
{
    "_id": ObjectId("5f0381d2063143075c3b0c50"),
    "id": UUID("a49cc5aa-8de6-4da6-b54e-761e3b674ed5"),
    "metaData": {
        "ativo": true,
        "dataCriacao": ISODate("2020-06-26T16:39:33.880Z"),
        "dataAtualizacao": ISODate("2020-06-26T17:02:23.790Z"),
        "dataDelecao": null
    },
    "descricao": "30",
    "tipo": "condicoes"
},
{
    "_id": ObjectId("5ef6399e01695aaba4dd6504"),
    "id": UUID("1c53ada8-0e0e-467e-bc54-1af0ee646a61"),
    "metaData": {
        "ativo": true,
        "dataCriacao": ISODate("2020-06-26T18:08:28.948Z"),
        "dataAtualizacao": null,
        "dataDelecao": null
    },
    "descricao": "60",
    "tipo": "condicoes"
}
]);