/* eslint-disable */
db.getSiblingDB('mgm_indique_ganhe').getCollection('campanha').insert([
	{
		"_id" : ObjectId("60a2ae845f5e8b18a162b4aa"),
		"id" : UUID("83da8bc1-3b3d-42d1-bf84-90e6ddbb1f04"),
		"razaoSocial" : "FERIAS & CO. VIAGENS E TURISMO LTDA",
		"cnpj" : "34008403000107",
		"dataInicioCampanha" : ISODate("2021-05-01T03:00:00.000Z"),
		"dataFimCampanha" : ISODate("2022-05-01T03:00:00.000Z"),
		"diasParaPermitirAssinanteIndicar" : NumberInt(22),
		"valorRecompensaIndicador" : NumberDecimal("200.00"),
		"valorRecompensaIndicado" : NumberDecimal("250.00"),
		"pontosRecompensaIndicador" : NumberInt(12000),
		"pontosRecompensaIndicado" : NumberInt(17500),
		"recompensaPersonalizada" : true,
		"historicoDeAlteracoes" : [ 
			{
				"dataInicioCampanha" : ISODate("2021-04-01T03:00:00.000Z"),
				"dataFimCampanha" : ISODate("2022-04-01T03:00:00.000Z"),
				"diasParaPermitirAssinanteIndicar" : NumberInt(30),
				"valorRecompensaIndicador" : NumberDecimal("100.00"),
				"valorRecompensaIndicado" : NumberDecimal("150.00"),
				"pontosRecompensaIndicador" : NumberInt(10000),
				"pontosRecompensaIndicado" : NumberInt(10500),
				"recompensaPersonalizada" : false,
				"ativo" : true,
				"dataAtualizacao" : ISODate("2021-04-18T17:57:24.051Z")
			},
			{
				"dataInicioCampanha" : ISODate("2021-05-01T03:00:00.000Z"),
				"dataFimCampanha" : ISODate("2022-05-01T03:00:00.000Z"),
				"diasParaPermitirAssinanteIndicar" : NumberInt(22),
				"valorRecompensaIndicador" : NumberDecimal("200.00"),
				"valorRecompensaIndicado" : NumberDecimal("250.00"),
				"pontosRecompensaIndicador" : NumberInt(12000),
				"pontosRecompensaIndicado" : NumberInt(17500),
				"recompensaPersonalizada" : true,
				"ativo" : true,
				"dataAtualizacao" : ISODate("2021-05-18T17:57:24.051Z")
			}
		],
		"metadata" : {
			"ativo" : true,
			"dataCriacao" : ISODate("2021-05-17T17:57:24.051Z"),
			"dataAtualizacao" : ISODate("2021-05-17T17:57:24.051Z"),
			"dataDelecao" : null
		}
	},
	{
		"_id" : ObjectId("60a6534d34b51a8a4eb241c7"),
		"id" : UUID("ca6785cf-aefb-44a9-8d82-eb2c16dfa072"),
		"razaoSocial" : "RDC VIAGENS E TURISMO LTDA - ME",
		"cnpj" : "10782454000115",
		"dataInicioCampanha" : ISODate("2021-04-01T03:00:00.000Z"),
		"dataFimCampanha" : ISODate("2022-04-01T03:00:00.000Z"),
		"diasParaPermitirAssinanteIndicar" : NumberInt(30),
		"valorRecompensaIndicador" : NumberDecimal("100.00"),
		"valorRecompensaIndicado" : NumberDecimal("150.00"),
		"pontosRecompensaIndicador" : NumberInt(10000),
		"pontosRecompensaIndicado" : NumberInt(10500),
		"recompensaPersonalizada" : false,
		"historicoDeAlteracoes" : [ 
			{
				"dataInicioCampanha" : ISODate("2021-04-01T03:00:00.000Z"),
				"dataFimCampanha" : ISODate("2022-04-01T03:00:00.000Z"),
				"diasParaPermitirAssinanteIndicar" : NumberInt(30),
				"valorRecompensaIndicador" : NumberDecimal("100.00"),
				"valorRecompensaIndicado" : NumberDecimal("150.00"),
				"pontosRecompensaIndicador" : NumberInt(10000),
				"pontosRecompensaIndicado" : NumberInt(10500),
				"recompensaPersonalizada" : false,
				"ativo" : true,
				"dataAtualizacao" : ISODate("2021-04-18T17:57:24.051Z")
			}
		],
		"metadata" : {
			"ativo" : true,
			"dataCriacao" : ISODate("2021-04-17T17:57:24.051Z"),
			"dataAtualizacao" : ISODate("2021-04-17T17:57:24.051Z"),
			"dataDelecao" : null
		}
	}
]);
