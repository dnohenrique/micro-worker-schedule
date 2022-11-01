/* eslint-disable */
db.getSiblingDB('financeiro').getCollection('MovimentacoesFinanceira').insert([
	{
		"_id" : ObjectId("5dfad4c1908c220001ad559c"),
		"id" : UUID("b6f68529-e53c-4ec0-948c-75bee579ef77"),
		"codigoPedido" : "CA0621912190110586",
		"statusPedido" : "cancelado",
		"statusConciliacao" : "PE",
		"tipoMovimento" : "CA",
		"diariasUtilizadas" : 2,
		"diariasExtras" : 0,
		"diariasMultaCancelamento" : 0,
		"valorExtraReserva" : "0.00",
		"valorTotalPedido" : "513.00",
		"valorTotalMultaCancelamento" : "0.00",
		"colaborador" : {
			"nome" : "MARCOS VINICIOS STEIL",
			"cpf" : "06230029901"
		},
		"reservas" : [ 
			{
				"reservaId" : "RES032437-6585|6585#2020-01-31#2020-02-02",
				"statusReserva" : "Cancelado",
				"dataCheckIn" : "2020-01-31T00:00:00.000Z",
				"dataCheckOut" : "2020-02-02T00:00:00.000Z",
				"valorDiaria" : "256.50",
				"valorTotalDiarias" : "513.00",
				"valorMultaCancelamento" : "0.00",
				"tipoProduto" : "Hotel",
				"nomeGDS" : "Cangooroo",
				"nomeFornecedor" : "Omnibees",
				"nomePrestadorServico" : "Nobile Resort Thermas de Olímpia",
				"fornecedor" : null,
				"pax" : [ 
					{
						"nome" : "Marcos Steil",
						"cpf" : "06230029901"
					}
				],
				"diariasConciliadas" : 0.0,
				"statusConciliacao" : "PE"
			}
		],
		"plano" : {
			"titulo" : "Hotéis de 4 e 5 estrelas",
			"tipo" : "Superior",
			"diariasTotais" : 4,
			"diariasDisponiveis" : 2,
			"valorPlano" : "117.00",
			"id" : UUID("2c51afde-4f49-4193-a948-24018d543fb3")
		},
		"ativo" : true,
		"dataMovimento" : "2019-12-19T01:10:10.378Z",
		"dataCriacao" : ISODate("2019-12-19T01:39:13.997Z"),
		"dataAtualizacao" : null,
		"dataDelecao" : null,
		"periodo" : 1.0
	}
])

/* eslint-disable */
db.getSiblingDB('financeiro').getCollection('MovimentacoesFinanceira').insert([
	{
		"_id" : ObjectId("5e395ed467e6df00014e3259"),
		"id" : UUID("60a99b89-d349-408b-9199-a4b970686f0d"),
		"codigoPedido" : "CA497040220120809F",
		"statusPedido" : "confirmado",
		"statusConciliacao" : "PE",
		"tipoMovimento" : "PL",
		"diariasUtilizadas" : 1,
		"diariasExtras" : 0,
		"diariasMultaCancelamento" : 0,
		"valorExtraReserva" : "0.00",
		"valorTotalPedido" : "180.00",
		"valorTotalMultaCancelamento" : "0.00",
		"periodo" : 1,
		"colaborador" : {
			"nome" : "Guilherme Martins Duarte",
			"cpf" : "49787289831"
		},
		"reservas" : [ 
			{
				"reservaId" : "RES003351-8859|8859#2020-06-18#2020-06-19",
				"statusReserva" : "Confirmado",
				"statusConciliacao" : "PE",
				"dataCheckIn" : "2020-06-18T00:00:00",
				"dataCheckOut" : "2020-06-19T00:00:00",
				"valorDiaria" : "180.00",
				"valorTotalDiarias" : "180.00",
				"valorMultaCancelamento" : "0.00",
				"tipoProduto" : "Hotel",
				"nomeGDS" : "Cangooroo",
				"nomeFornecedor" : "Omnibees",
				"nomePrestadorServico" : "Glória Plaza Hotel",
				"fornecedor" : null,
				"pax" : [ 
					{
						"nome" : "TSTGuilherme NoBook",
						"cpf" : "49787289831",
						"crianca" : false,
						"titular" : false
					}
				],
				"diariasConciliadas" : 0
			}
		],
		"plano" : {
			"_id" : null,
			"id" : UUID("00000000-0000-0000-0000-000000000000"),
			"titulo" : "Hotéis de 3 e 4 estrelas",
			"tipo" : "Padrão",
			"diariasTotais" : 4,
			"diariasDisponiveis" : 1,
			"valorPlano" : "90.00"
		},
		"usuario" : null,
		"ativo" : false,
		"dataMovimento" : "2020-02-04T12:08:43.512Z",
		"dataCriacao" : ISODate("2020-02-04T12:08:52.012Z"),
		"dataAtualizacao" : ISODate("2020-02-04T12:09:13.005Z"),
		"dataDelecao" : ISODate("2020-03-23T20:06:55.049Z")
	}
])