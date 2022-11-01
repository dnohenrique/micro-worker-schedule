/* eslint-disable */
db.getSiblingDB('faturacartao').getCollection('fatura_cartao').insert([
	{
		"_id" : ObjectId("5fcd6e84fbd76358fe2b1e0c"),
		"numeroFatura" : NumberLong(3049044),
		"nomeCliente" : "Taíssa Cavalcanti QA",
		"cpf" : "44283800384",
		"dataTransacao" : ISODate("2020-03-19T15:15:13.000Z"),
		"valorTotal" : "407.14",
		"valorPago" : "0",
		"valorEstornado" : "0",
		"status" : "AB",
		"juros" : "0.00",
		"desconto" : "0.00",
		"faturaParcelamentos" : [ 
			{
				"numeroFatura" : NumberLong(3049044),
				"nomeCliente" : "Taíssa Cavalcanti QA",
				"cpf" : "44283800384",
				"valorParcela" : "407.14",
				"numeroParcela" : 1,
				"dataVencimento" : ISODate("2021-01-06T23:51:29.464Z"),
				"dataRecebimento" : null,
				"valorEmAberto" : "0",
				"valorRecebido" : null,
				"NSU" : null,
				"idTransacaoGateway" : null,
				"codigoRetornoGateway" : null
			}
		],
		"dataCriacao" : ISODate("2020-12-06T23:51:25.340Z"),
		"dataAtualizacao" : null,
		"dataDelecao" : null
	},
	{
		"_id" : ObjectId("5fcd6f67fbd76358fe2b1f62"),
		"numeroFatura" : NumberLong(3091424),
		"nomeCliente" : "Taíssa Cavalcanti QA",
		"cpf" : "44283800384",
		"dataTransacao" : ISODate("2020-04-07T21:24:29.000Z"),
		"valorTotal" : "265.82",
		"valorPago" : "0",
		"valorEstornado" : "0",
		"status" : "AB",
		"juros" : "0.00",
		"desconto" : "0.00",
		"faturaParcelamentos" : [ 
			{
				"numeroFatura" : NumberLong(3091424),
				"nomeCliente" : "Taíssa Cavalcanti QA",
				"cpf" : "44283800384",
				"valorParcela" : "132.91",
				"numeroParcela" : 1,
				"dataVencimento" : ISODate("2021-01-06T23:55:15.740Z"),
				"dataRecebimento" : null,
				"valorEmAberto" : "0",
				"valorRecebido" : null,
				"NSU" : null,
				"idTransacaoGateway" : null,
				"codigoRetornoGateway" : null
			}, 
			{
				"numeroFatura" : NumberLong(3091424),
				"nomeCliente" : "Taíssa Cavalcanti QA",
				"cpf" : "44283800384",
				"valorParcela" : "132.91",
				"numeroParcela" : 2,
				"dataVencimento" : ISODate("2021-02-06T23:55:15.740Z"),
				"dataRecebimento" : null,
				"valorEmAberto" : "0",
				"valorRecebido" : null,
				"NSU" : null,
				"idTransacaoGateway" : null,
				"codigoRetornoGateway" : null
			}
		],
		"dataCriacao" : ISODate("2020-12-06T23:55:12.173Z"),
		"dataAtualizacao" : null,
		"dataDelecao" : null
	},
	{
		"_id" : ObjectId("5fcd773ffbd76358fe2b2b8f"),
		"numeroFatura" : NumberLong(3113376),
		"nomeCliente" : "Taíssa Cavalcanti QA",
		"cpf" : "44283800384",
		"dataTransacao" : ISODate("2020-04-16T23:43:25.000Z"),
		"valorTotal" : "20.1",
		"valorPago" : "0",
		"valorEstornado" : "20.1",
		"status" : "PE",
		"juros" : "0.00",
		"desconto" : "0.00",
		"faturaParcelamentos" : [ 
			{
				"numeroFatura" : NumberLong(3113376),
				"nomeCliente" : "Taíssa Cavalcanti QA",
				"cpf" : "44283800384",
				"valorParcela" : "20.1",
				"numeroParcela" : 1,
				"dataVencimento" : ISODate("2021-01-07T00:28:47.303Z"),
				"dataRecebimento" : null,
				"valorEmAberto" : "0",
				"valorRecebido" : null,
				"NSU" : "503C4E1D810C98AD662259AA534464C8",
				"idTransacaoGateway" : "0e67e155-1270-402f-bafa-2900d79ab8f9",
				"codigoRetornoGateway" : null
			}
		],
		"dataCriacao" : ISODate("2020-12-07T00:28:47.302Z"),
		"dataAtualizacao" : ISODate("2020-12-07T00:29:23.819Z"),
		"dataDelecao" : null
	}
]);