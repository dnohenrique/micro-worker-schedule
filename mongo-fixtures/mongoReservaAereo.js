/* eslint-disable */
db.getSiblingDB('aereobooking').getCollection('AereoBooking').insert([
	{
		"_id" : ObjectId("601b3772f48c9c9f997cc5b2"),
		"_t" : "BoonkingMongoDbDocument",
		"WoobaCalls" : {
			"BookingRequest" : "<ReservaRQ xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns=\"http://schemas.datacontract.org/2004/07/TravellinkEngine.Classes.Aereo.Request\"><Login xmlns=\"http://schemas.datacontract.org/2004/07/TravellinkEngine.Classes\">WoobaApi_FERIAS</Login><Senha xmlns=\"http://schemas.datacontract.org/2004/07/TravellinkEngine.Classes\">@Woob@FERIAS2020</Senha><ClassesSelecionadas><ReservaRQ.ClasseSelecionada><BaseTarifaria>OPOOCOZ</BaseTarifaria><Classe>O</Classe><NumeroDoVoo>1771</NumeroDoVoo></ReservaRQ.ClasseSelecionada><ReservaRQ.ClasseSelecionada><BaseTarifaria>OPOOCOZ</BaseTarifaria><Classe>O</Classe><NumeroDoVoo>1728</NumeroDoVoo></ReservaRQ.ClasseSelecionada></ClassesSelecionadas><HabilitarFluxoContatoPassageiro>false</HabilitarFluxoContatoPassageiro><IdentificacaoDaViagem>+Q0AAB+LCAAAAAAABADtl/FvojAUx/+VpfvV2xWQgPyGerrtYJCBy7xll3Sj7JohGMBky2L/9nstiOLxw1zO3zRV2r6+9r1Pm2/xA9nIUnpohCzcQ0P5O3lDVkySgvZQwApk6fJ5FSFLhYGMIAtNNdRD7uuyGejLBr4A95AtMznnmBYlSzOY4eEDeeAV2B64jaFmX8+g5kNNxaryDRtQQowtWcByCxaMMVhE2VrWjxAkKegoIUVBYZCYUHSEJGcxfEVwnu95I+8XWKreMCtJAsEbysUAbzq9Jc1JlOWkSeEuq0N1pznkgsDfgYfWR62sbZHJ3cgXVZHKMBiKpIK9XIwml0thwoasj0d7w0xL0+thwoRNTYf6zWoBDcUwFLF2lm4xtxtAoWbgAwRIrJX9zp4M923D2ldUJ/D0JUh/U5uQBUtEzh/oJlsI0H6eLTIZTcRess04P6cxe5PNW09axTLnhqlSU6vakywtxQTnsfygNfTK3atgj27rDCajVoATktPwfQmeD7DnTYi+S/LX1SatOsxxvf1HCjdhRSljvSOJdMDc47wOlXu2qnGu8Xt53l7ALEIPaJL8pO/iKNOY5jR9ZsQnbxXxqzQmacmSeifXj+teJ4hw3gnCCQ8A4bCXP+UuiMq7AeFcTbcglAExzOgrIMI5D4dHAxF0g/CdQ06EMwtaB8JpHwhntuVgkqd+RL/CIZjzH8fj4HZzcO8P4ODa97sYKt8Gw8YqMcRP+pMSfwWDO+eX/wPDY8cqajNhucpnKYtIRAsp588sSwkr7GdaFJm4sD4Pe0/z9Q7Nr4Te3l5f/2j+wOq3NH/Q79J8RbF0vKP5iqLjHc1XzZPmnzT/pPknzT9p/hE1v2uVZpEwW+VAi35ust52hqnGxVs7P+Mc/iJwbHyHIrT/TP4h4HCHtDrF6z//Lb1UU3jtDxBXCofrZrdTXiC8CfYagk3p+4GU/wLYz4Qv+Q0AAA==</IdentificacaoDaViagem><Passageiros><Passageiro xmlns=\"http://schemas.datacontract.org/2004/07/TravellinkEngine.Modelo.Aereo\"><Id>0</Id><CPF>64949575015</CPF><FaixaEtaria>ADT</FaixaEtaria><InfantilNascimento>0001-01-01T00:00:00</InfantilNascimento><Nascimento>1950-10-09T03:00:00Z</Nascimento><Nome>Thanos</Nome><PossuiBebe>false</PossuiBebe><RecusarEnvioDoEmailParaFornecedor>false</RecusarEnvioDoEmailParaFornecedor><RecusarEnvioDoTelefoneParaFornecedor>false</RecusarEnvioDoTelefoneParaFornecedor><Sexo>M</Sexo><Sobrenome>Esmaga</Sobrenome></Passageiro></Passageiros><Contatos><ContatoReserva><Id>0</Id><NumeroDDD>11</NumeroDDD><NumeroDDI>11</NumeroDDI><NumeroTelefone>986548711</NumeroTelefone><Nome>ALEXANDRE CINTRA</Nome></ContatoReserva></Contatos></ReservaRQ>",
			"BookingResponse" : {
				"Data" : ISODate("2021-02-03T23:53:34.284Z"),
				"DataVersao" : "25/01/2021",
				"SessaoExpirada" : false,
				"Exception" : null,
				"CobrancaDeServico" : null,
				"CodigoDeAutorizacao" : null,
				"Reservas" : [ 
					{
						"_id" : 7563,
						"Agencia" : {
							"_id" : 34,
							"Contato" : "55 61 34350420",
							"Email" : "leandro.santos@ferias.co",
							"Nome" : "Desenvolvedores FERIAS",
							"Unidade" : "Desenvolvedores",
							"Localizacao" : {
								"_id" : 0,
								"Endereco" : "",
								"Bairro" : "",
								"CEP" : "",
								"Cidade" : "",
								"Complemento" : "",
								"Estado" : "  ",
								"Numero" : "",
								"Pais" : "Brasil",
								"Contato" : null
							}
						},
						"Bilhetes" : [],
						"ClienteUnidade" : null,
						"DataCriacao" : "/Date(1612396405690-0300)/",
						"DataEmissao" : "/Date(-62135589600000-0300)/",
						"ExigirChaveDeSegurancaParaCancelar" : false,
						"Localizador" : "LMQUUJ",
						"Loja" : null,
						"Passageiros" : [ 
							{
								"_id" : 0,
								"Assentos" : null,
								"CPF" : null,
								"Email" : null,
								"FaixaEtaria" : "ADT",
								"FidelidadeTam" : null,
								"Fidelidades" : null,
								"InfPassaporte" : {
									"_id" : 0,
									"Nacionalidade" : "",
									"NomeDoMeioPax" : null,
									"NomePax" : null,
									"Numero" : "",
									"PaisEmissor" : "",
									"SobrenomePax" : null,
									"Validade" : "/Date(-62135589600000-0300)/"
								},
								"InfantilLinha" : null,
								"InfantilNascimento" : "/Date(-62135589600000-0300)/",
								"InfantilNome" : "",
								"InfantilSexo" : "M",
								"InfantilSobrenome" : "",
								"Linha" : "0",
								"Nascimento" : ISODate("1950-10-09T06:00:00.000Z"),
								"Nome" : "THANOS",
								"NomeDoMeio" : null,
								"Sobrenome" : "ESMAGA",
								"NumeroAvianca" : null,
								"NumeroAzul" : null,
								"NumeroFidelidadeGenerico" : null,
								"Passaporte" : {
									"_id" : 0,
									"Nacionalidade" : "",
									"NomeDoMeioPax" : null,
									"NomePax" : null,
									"Numero" : "",
									"PaisEmissor" : "",
									"SobrenomePax" : null,
									"Validade" : "/Date(-62135589600000-0300)/"
								},
								"PossuiBebe" : false,
								"RecusarEnvioDoEmailParaFornecedor" : false,
								"RecusarEnvioDoTelefoneParaFornecedor" : false,
								"Redress" : null,
								"Sexo" : "M",
								"SmilesGol" : "",
								"Telefone" : null,
								"Tipo" : null,
								"VoeBiz" : null
							}
						],
						"Pedido" : null,
						"PermiteCancelar" : true,
						"PermiteEmitir" : true,
						"PnrClasseRevendida" : false,
						"PrazoEmissao" : "/Date(1612482809000-0300)/",
						"Sistema" : "Gol",
						"Status" : "Ativa",
						"Usuario" : {
							"_id" : 2716,
							"Celular" : null,
							"Email" : null,
							"Nome" : "Api Desenvolvedores FERIAS",
							"NomeCompleto" : null,
							"Telefone" : null
						},
						"Viagens" : [ 
							{
								"CiaMandatoria" : {
									"_id" : 0,
									"CodigoIata" : "G3",
									"Descricao" : "Gol Linhas Aéreas"
								},
								"Destino" : null,
								"Duracao" : 225,
								"Fornecedor" : {
									"_id" : 0,
									"Codigo" : 5,
									"Nome" : "Gol"
								},
								"_id" : 0,
								"IdentificacaoDaViagem" : null,
								"NumeroParadas" : 0,
								"Origem" : null,
								"Preco" : {
									"_id" : 0,
									"EqCambio" : "5.3875",
									"EqMoeda" : "",
									"Moeda" : "BRL",
									"PrecoAdulto" : {
										"_id" : 0,
										"EqValorTarifa" : "0",
										"EqValorTaxaServico" : "0",
										"FaixaEtaria" : "ADT",
										"Quantidade" : 1,
										"ValorFee" : "0",
										"ValorRav" : "0",
										"ValorTarifa" : "271.90",
										"ValorTarifaNet" : "0",
										"ValorTaxaCombustivel" : "0",
										"ValorTaxaEmbarque" : "30.95",
										"ValorTaxaServico" : "40.0000"
									},
									"PrecoBebe" : null,
									"PrecoCrianca" : null,
									"Tarifa" : 0.0,
									"TarifaOperadora" : false,
									"Taxa" : "30.95",
									"Total" : "342.85",
									"TotalGeral" : "342.85",
									"TotalTarifa" : "271.90",
									"TotalTarifaNet" : "0",
									"TotalTaxaDeCombustivel" : "0",
									"TotalTaxaEmbarque" : "30.95",
									"TotalTaxaServico" : "40.00",
									"ValorEmd" : "0",
									"ValorFee" : "0",
									"ValorRav" : "0"
								},
								"Segmento" : null,
								"TempoDeDuracao" : "03:45",
								"Voos" : [ 
									{
										"_id" : 0,
										"BagagemInclusa" : false,
										"BagagemIndicador" : "2",
										"BagagemPeso" : "0",
										"BagagemQuantidade" : "0",
										"BagagemUnidadeDeMedida" : "KG Total",
										"BaseTarifaria" : [ 
											{
												"_id" : 0,
												"Classe" : "O",
												"Codigo" : "OPOOCOZ",
												"Familia" : "PO"
											}
										],
										"Cabine" : null,
										"Campo1" : null,
										"CiaMandatoria" : {
											"_id" : 0,
											"CodigoIata" : "G3",
											"Descricao" : "Gol Linhas Aéreas"
										},
										"CiaOperacional" : null,
										"Classe" : "O",
										"Companhia" : null,
										"Conexao" : false,
										"DataChegada" : "/Date(1625657700000-0300)/",
										"DataSaida" : "/Date(1625652000000-0300)/",
										"Destino" : {
											"_id" : 0,
											"CodigoIata" : "BSB",
											"Descricao" : "BSB - BRASILIA"
										},
										"Duracao" : "01:35",
										"Equipamento" : "738",
										"Escalas" : [],
										"Familia" : "Promo",
										"FamiliaCodigo" : "PRO",
										"GrupoDeSegmento" : 0,
										"HoraChegada" : "0835",
										"HoraSaida" : "0700",
										"Icone" : "https://wooba-sandbox.travellink.com.br/Upload/logomarcas/companhiaico5.gif",
										"ListaDeClasses" : null,
										"LocalizadorCompanhia" : "LMQUUJ",
										"Numero" : "1771",
										"Origem" : {
											"_id" : 0,
											"CodigoIata" : "VCP",
											"Descricao" : "VCP - CAMPINAS"
										},
										"QuantidadeParadas" : 0,
										"Segmento" : "1",
										"Status" : "HK"
									}, 
									{
										"_id" : 0,
										"BagagemInclusa" : false,
										"BagagemIndicador" : "2",
										"BagagemPeso" : "0",
										"BagagemQuantidade" : "0",
										"BagagemUnidadeDeMedida" : "KG Total",
										"BaseTarifaria" : [ 
											{
												"_id" : 0,
												"Classe" : "O",
												"Codigo" : "OPOOCOZ",
												"Familia" : "PO"
											}
										],
										"Cabine" : null,
										"Campo1" : null,
										"CiaMandatoria" : {
											"_id" : 0,
											"CodigoIata" : "G3",
											"Descricao" : "Gol Linhas Aéreas"
										},
										"CiaOperacional" : null,
										"Classe" : "O",
										"Companhia" : null,
										"Conexao" : true,
										"DataChegada" : "/Date(1625669400000-0300)/",
										"DataSaida" : "/Date(1625661600000-0300)/",
										"Destino" : {
											"_id" : 0,
											"CodigoIata" : "AJU",
											"Descricao" : "AJU - ARACAJU"
										},
										"Duracao" : "02:10",
										"Equipamento" : "738",
										"Escalas" : [],
										"Familia" : "Promo",
										"FamiliaCodigo" : "PRO",
										"GrupoDeSegmento" : 0,
										"HoraChegada" : "1150",
										"HoraSaida" : "0940",
										"Icone" : "https://wooba-sandbox.travellink.com.br/Upload/logomarcas/companhiaico5.gif",
										"ListaDeClasses" : null,
										"LocalizadorCompanhia" : "LMQUUJ",
										"Numero" : "1728",
										"Origem" : {
											"_id" : 0,
											"CodigoIata" : "BSB",
											"Descricao" : "BSB - BRASILIA"
										},
										"QuantidadeParadas" : 0,
										"Segmento" : "1",
										"Status" : "HK"
									}
								]
							}
						]
					}
				]
			},
			"StartEmissionRequest" : [ 
				"<IniciarEmissaoRQ xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns=\"http://schemas.datacontract.org/2004/07/TravellinkEngine.Classes.Aereo.Request\"><Login xmlns=\"http://schemas.datacontract.org/2004/07/TravellinkEngine.Classes\">WoobaApi_FERIAS</Login><Senha xmlns=\"http://schemas.datacontract.org/2004/07/TravellinkEngine.Classes\">@Woob@FERIAS2020</Senha><Localizador>LMQUUJ</Localizador></IniciarEmissaoRQ>"
			],
			"StartEmissionResponse" : [ 
				{
					"Data" : ISODate("2021-02-03T23:53:49.111Z"),
					"DataVersao" : "25/01/2021",
					"SessaoExpirada" : false,
					"Exception" : null,
					"ConfiguracoesDeEmissao" : {
						"ConfiguracoesCentroDeCusto" : null,
						"ConfiguracoesTourcode" : {
							"OpcoesCentroDeCusto" : null,
							"PermiteInserirTourcodeManual" : false,
							"PermitirSelecionar" : false,
							"RequisitarSelecao" : true
						},
						"ExigirChaveDeSeguranca" : false,
						"ExigirTokenDeSeguranca" : false,
						"OpcoesDePagamento" : [ 
							{
								"_id" : 0,
								"AplicaTaxaOBFEE" : false,
								"CartaoConsolidadorAtivo" : false,
								"CartaoDeCredito" : true,
								"CartaoDeCreditoOnline" : true,
								"CartaoVirtualAtivo" : false,
								"CartoesDeCredito" : [],
								"CodigoFormaDeRecebimento" : 2,
								"CodigoFormaDeRecebimentoTipo" : 0,
								"Descricao" : "Cartão",
								"ExigirAutorizacaoManual" : false,
								"Faturado" : false,
								"NumeroDeAutorizacao" : "",
								"PermitirAlterarNumeroDeAutorizacao" : true
							}, 
							{
								"_id" : 0,
								"AplicaTaxaOBFEE" : false,
								"CartaoConsolidadorAtivo" : false,
								"CartaoDeCredito" : false,
								"CartaoDeCreditoOnline" : false,
								"CartaoVirtualAtivo" : false,
								"CartoesDeCredito" : [],
								"CodigoFormaDeRecebimento" : 1,
								"CodigoFormaDeRecebimentoTipo" : 0,
								"Descricao" : "Faturada",
								"ExigirAutorizacaoManual" : false,
								"Faturado" : true,
								"NumeroDeAutorizacao" : "",
								"PermitirAlterarNumeroDeAutorizacao" : false
							}
						],
						"OpcoesDePagamentoValorCobrancaDeServico" : [ 
							{
								"_id" : 0,
								"AplicaTaxaOBFEE" : false,
								"CartaoConsolidadorAtivo" : false,
								"CartaoDeCredito" : false,
								"CartaoDeCreditoOnline" : false,
								"CartaoVirtualAtivo" : false,
								"CartoesDeCredito" : null,
								"CodigoFormaDeRecebimento" : 1,
								"CodigoFormaDeRecebimentoTipo" : 0,
								"Descricao" : "Cash",
								"ExigirAutorizacaoManual" : false,
								"Faturado" : true,
								"NumeroDeAutorizacao" : null,
								"PermitirAlterarNumeroDeAutorizacao" : false
							}
						],
						"PermitirAlterarFEE" : false,
						"PermitirAlterarRAV" : true,
						"ValorRAV" : "0"
					},
					"Localizador" : "LMQUUJ",
					"OpcoesDeDocumentoDePassageiro" : [ 
						{
							"Descricao" : "Nenhum",
							"Tipo" : 0
						}, 
						{
							"Descricao" : "Localizador",
							"Tipo" : 1
						}, 
						{
							"Descricao" : "Habilitacao",
							"Tipo" : 2
						}, 
						{
							"Descricao" : "C_Milhas",
							"Tipo" : 3
						}, 
						{
							"Descricao" : "Identidade",
							"Tipo" : 4
						}, 
						{
							"Descricao" : "Passaporte",
							"Tipo" : 5
						}, 
						{
							"Descricao" : "C_Credito",
							"Tipo" : 6
						}, 
						{
							"Descricao" : "Doc_Foto",
							"Tipo" : 7
						}, 
						{
							"Descricao" : "Bilhete",
							"Tipo" : 8
						}, 
						{
							"Descricao" : "Cpf",
							"Tipo" : 9
						}
					],
					"Passageiros" : [ 
						{
							"_id" : 0,
							"CentroDeCusto" : null,
							"Documento" : null,
							"Empenho" : null,
							"InfantilNome" : "",
							"InfantilSobrenome" : "",
							"Nome" : "THANOS",
							"Requisicao" : null,
							"Sobrenome" : "ESMAGA",
							"Tipo" : "ADT"
						}
					],
					"PosicaoTokenDeSeguranca" : null,
					"Sumario" : {
						"Credito" : null,
						"Moeda" : "BRL",
						"OutrasTaxas" : null,
						"Penalidade" : null,
						"SubTotal" : "352.85",
						"TaxaAdicional" : null,
						"TaxaDU" : "40.00",
						"TaxaDeServicoContratante" : "10.00",
						"TaxaRAV" : null,
						"Taxas" : "30.95",
						"TotalTarifa" : "271.90",
						"TotalTaxa" : "80.95",
						"ValorEMD" : null
					},
					"ValorDeEmissaoPassageiro" : [ 
						{
							"Credito" : null,
							"Moeda" : "BRL",
							"OutrasTaxas" : null,
							"Penalidade" : null,
							"SubTotal" : "352.85",
							"TaxaAdicional" : "0.00",
							"TaxaDU" : "40.00",
							"TaxaDeServicoContratante" : "10.00",
							"TaxaRAV" : null,
							"Taxas" : "30.95",
							"TotalTarifa" : "271.90",
							"TotalTaxa" : "40.95",
							"ValorEMD" : "0",
							"FaixaEtaria" : "ADT",
							"TarifaUnitaria" : "271.90"
						}
					],
					"Voos" : [ 
						{
							"_id" : 1,
							"LocalizadorCia" : "LMQUUJ",
							"Voo" : "1771",
							"Assentos" : 1,
							"BagagemInclusa" : false,
							"BagagemIndicador" : 2,
							"BagagemPeso" : "0",
							"BagagemQuantidade" : "0",
							"BagagemUnidadeDeMedida" : "KG Total",
							"Chegada" : ISODate("2021-07-07T11:35:00.000Z"),
							"CiaAerea" : {
								"_id" : 0,
								"CodigoIata" : "G3",
								"Descricao" : "Gol Linhas Aéreas"
							},
							"Classe" : "O (PO)",
							"Conexao" : false,
							"Destino" : {
								"_id" : 0,
								"CodigoIata" : "BSB",
								"Descricao" : "BSB - BRASILIA"
							},
							"Escalas" : [],
							"Familia" : "Promo",
							"FamiliaCodigo" : "PO",
							"Origem" : {
								"_id" : 0,
								"CodigoIata" : "VCP",
								"Descricao" : "VCP - CAMPINAS"
							},
							"Saida" : ISODate("2021-07-07T10:00:00.000Z"),
							"Status" : "HK",
							"Surface" : false
						}, 
						{
							"_id" : 2,
							"LocalizadorCia" : "LMQUUJ",
							"Voo" : "1728",
							"Assentos" : 1,
							"BagagemInclusa" : false,
							"BagagemIndicador" : 2,
							"BagagemPeso" : "0",
							"BagagemQuantidade" : "0",
							"BagagemUnidadeDeMedida" : "KG Total",
							"Chegada" : ISODate("2021-07-07T14:50:00.000Z"),
							"CiaAerea" : {
								"_id" : 0,
								"CodigoIata" : "G3",
								"Descricao" : "Gol Linhas Aéreas"
							},
							"Classe" : "O (PO)",
							"Conexao" : true,
							"Destino" : {
								"_id" : 0,
								"CodigoIata" : "AJU",
								"Descricao" : "AJU - ARACAJU"
							},
							"Escalas" : [],
							"Familia" : "Promo",
							"FamiliaCodigo" : "PO",
							"Origem" : {
								"_id" : 0,
								"CodigoIata" : "BSB",
								"Descricao" : "BSB - BRASILIA"
							},
							"Saida" : ISODate("2021-07-07T12:40:00.000Z"),
							"Status" : "HK",
							"Surface" : false
						}
					]
				}
			],
			"EmitRequest" : [ 
				"<EmitirRQ xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns=\"http://schemas.datacontract.org/2004/07/TravellinkEngine.Classes.Aereo.Request\"><Login xmlns=\"http://schemas.datacontract.org/2004/07/TravellinkEngine.Classes\">WoobaApi_FERIAS</Login><Senha xmlns=\"http://schemas.datacontract.org/2004/07/TravellinkEngine.Classes\">@Woob@FERIAS2020</Senha><Localizador>LMQUUJ</Localizador><Pagamento><FormaDePagamento xmlns=\"http://schemas.datacontract.org/2004/07/TravellinkEngine\">1</FormaDePagamento><ValorFaturado xmlns=\"http://schemas.datacontract.org/2004/07/TravellinkEngine\">271.90</ValorFaturado></Pagamento><TourCode>0</TourCode><ValidarAnaliseRisco>false</ValidarAnaliseRisco></EmitirRQ>"
			],
			"EmitResponse" : [ 
				{
					"Data" : ISODate("2021-02-03T23:54:16.472Z"),
					"DataVersao" : "25/01/2021",
					"SessaoExpirada" : false,
					"Exception" : null,
					"cobrancaDeServico" : null,
					"CodigoDeAutorizacao" : "",
					"Bilhetes" : [ 
						{
							"_id" : 0,
							"BilheteDoInfantil" : false,
							"DataDeEmissao" : "/Date(-62135589600000-0300)/",
							"Numero" : "9690001001696",
							"Pagamentos" : null,
							"Passageiro" : "THANOS ESMAGA",
							"PassageirosAdicionais" : null,
							"PaxRef" : "0",
							"Status" : "Ativo",
							"Voos" : null,
							"NivelAnaliseDeRisco" : null
						}
					]
				}
			]
		},
		"OrderID" : "WO6490302212053D84",
		"Cancelable" : false,
		"Travels" : [ 
			{
				"IataOrigin" : "VCP",
				"IataDestination" : "BSB",
				"Locator" : "LMQUUJ",
				"Company" : "Gol Linhas Aéreas",
				"NumberFlight" : "1771",
				"TotalPrice" : "0",
				"Currency" : null
			}, 
			{
				"IataOrigin" : "BSB",
				"IataDestination" : "AJU",
				"Locator" : "LMQUUJ",
				"Company" : "Gol Linhas Aéreas",
				"NumberFlight" : "1728",
				"TotalPrice" : "0",
				"Currency" : null
			}
		],
		"Errors" : [],
		"BookingRequest" : {
			"TransactionId" : UUID("538d5d5e-d10e-754a-bde7-9f230e7c629e"),
			"PlanId" : UUID("28b727d1-4bf8-c14d-926a-924cd402e49e"),
			"Token" : UUID("0eee5e4e-7936-154e-9d23-55e8d9fdb5d6"),
			"UserId" : "64949575015",
			"UserIp" : "186.220.38.220",
			"FarePrice" : {
				"QuantityAdult" : 1,
				"QuantityChild" : 0,
				"QuantityBaby" : 0,
				"TotalPriceAdult" : "271.9",
				"TotalPriceChild" : "0",
				"TotalPriceBaby" : "0",
				"Exchange" : "1",
				"Coin" : "BRL",
				"Rate" : "30.95",
				"RateFuel" : "0",
				"RateFee" : "0",
				"RateEmbarkation" : "30.95",
				"RateService" : "40",
				"RateEmbarkationAdult" : "30.95",
				"RateEmbarkationChild" : "0",
				"RateEmbarkationBaby" : "0",
				"RateServiceAdult" : "40",
				"RateServiceChild" : "0",
				"RateServiceBaby" : "0"
			},
			"Stretches" : [ 
				{
					"_id" : 0,
					"Segment" : null,
					"Description" : null,
					"IataEmbarkation" : null,
					"CityEmbarkation" : null,
					"AirportEmbarkation" : null,
					"IataDesbarkation" : null,
					"AirportDesbarkation" : null,
					"CityDesbarkation" : null,
					"TravelId" : "+Q0AAB+LCAAAAAAABADtl/FvojAUx/+VpfvV2xWQgPyGerrtYJCBy7xll3Sj7JohGMBky2L/9nstiOLxw1zO3zRV2r6+9r1Pm2/xA9nIUnpohCzcQ0P5O3lDVkySgvZQwApk6fJ5FSFLhYGMIAtNNdRD7uuyGejLBr4A95AtMznnmBYlSzOY4eEDeeAV2B64jaFmX8+g5kNNxaryDRtQQowtWcByCxaMMVhE2VrWjxAkKegoIUVBYZCYUHSEJGcxfEVwnu95I+8XWKreMCtJAsEbysUAbzq9Jc1JlOWkSeEuq0N1pznkgsDfgYfWR62sbZHJ3cgXVZHKMBiKpIK9XIwml0thwoasj0d7w0xL0+thwoRNTYf6zWoBDcUwFLF2lm4xtxtAoWbgAwRIrJX9zp4M923D2ldUJ/D0JUh/U5uQBUtEzh/oJlsI0H6eLTIZTcRess04P6cxe5PNW09axTLnhqlSU6vakywtxQTnsfygNfTK3atgj27rDCajVoATktPwfQmeD7DnTYi+S/LX1SatOsxxvf1HCjdhRSljvSOJdMDc47wOlXu2qnGu8Xt53l7ALEIPaJL8pO/iKNOY5jR9ZsQnbxXxqzQmacmSeifXj+teJ4hw3gnCCQ8A4bCXP+UuiMq7AeFcTbcglAExzOgrIMI5D4dHAxF0g/CdQ06EMwtaB8JpHwhntuVgkqd+RL/CIZjzH8fj4HZzcO8P4ODa97sYKt8Gw8YqMcRP+pMSfwWDO+eX/wPDY8cqajNhucpnKYtIRAsp588sSwkr7GdaFJm4sD4Pe0/z9Q7Nr4Te3l5f/2j+wOq3NH/Q79J8RbF0vKP5iqLjHc1XzZPmnzT/pPknzT9p/hE1v2uVZpEwW+VAi35ust52hqnGxVs7P+Mc/iJwbHyHIrT/TP4h4HCHtDrF6z//Lb1UU3jtDxBXCofrZrdTXiC8CfYagk3p+4GU/wLYz4Qv+Q0AAA==",
					"FlightNumber" : null,
					"Locator" : null,
					"Class" : "O",
					"FamilyCode" : "PRO",
					"FareId" : "OPOOCOZ",
					"FareIdHandbag" : null,
					"ClassHandbag" : null,
					"FamilyCodeHandbag" : null,
					"Flights" : [ 
						"1771", 
						"1728"
					],
					"Destination" : null
				}
			],
			"QuantitySeat" : 0,
			"Passengers" : [ 
				{
					"Name" : "Thanos",
					"LastName" : "Esmaga",
					"Birthday" : ISODate("1950-10-09T03:00:00.000Z"),
					"Gender" : "M",
					"DocumentType" : "CPF",
					"DocumentNumber" : "64949575015",
					"Ticket" : null,
					"Type" : "Adulto"
				}
			],
			"HandbagLong" : false,
			"MultipleStretches" : false,
			"Installments" : 1,
			"InstallmentAmount" : "377.14",
			"Card" : "MasterCard ****5557",
			"installmentDescription" : "À vista",
			"ResponsibleName" : "ALEXANDRE CINTRA",
			"ResponsibleCountryCode" : "11",
			"ResponsibleAreaCode" : "11",
			"ResponsiblePhone" : "986548711"
		},
		"CancelationPolicies" : {
			"TaxaDeNaoComparecimento" : "311.9",
			"InclusoNaoComparecimento" : false,
			"CalculoNaoComparecimento" : "100,00% Valor em reais não reembolsável",
			"TaxaDeCancelamento" : "311.9",
			"InclusoCancelamento" : false,
			"CalculoCancelamento" : "100,00% Valor em reais não reembolsável",
			"ReembolsoCancelamento" : " ",
			"TaxaDeAlteracao" : "311.9",
			"InclusoAlteracao" : false,
			"CalculoAlteracao" : "100,00% Valor em reais não reembolsável",
			"PoliceDescription" : "<div style=\"font-family: Roboto; color: #535252;float: left;width: 100%;display: block;\">\n    <span style=\"font-size: 18px; font-weight: bold;\">CAMPINAS ARACAJU</span>\n</div>\n<div style=\"margin-top: 30px;float: left;width: 100%;\">\n    <div style=\"font-family: Roboto; color: #535252;float: left; width: 100%;font-size: 18px;font-weight: bold;\">\n        Alteração de Data ou Itinerário\n    </div>\n    <span style=\"font-family: Roboto; color: #535252;float: left;width: 100%;font-size: 16px;margin-bottom: 30px;\">\n        A companhia aérea te cobrará  <b> R$ 311,90</b> como multa pela alteração\n    </span>\n\n    <div style=\"font-family: Roboto; color: #535252;float: left; width: 100%;font-size: 18px;font-weight: bold;\">\n        Cancelamento\n    </div>\n    <span style=\"font-family: Roboto; color: #535252;float: left;width: 100%;font-size: 16px;margin-bottom: 30px;\">\n        A companhia aérea te cobrará  <b> R$ 311,90</b> como multa pelo cancelamento\n    </span>\n\n    <div style=\"font-family: Roboto; color: #535252;float: left; width: 100%;font-size: 18px;font-weight: bold;\">\n        Não comparecimento\n    </div>\n    <span style=\"font-family: Roboto; color: #535252;float: left;width: 100%;font-size: 16px;margin-bottom: 30px;\">\n        A companhia aérea te cobrará  <b> R$ 311,90</b> como multa pelo não comparecimento<br>\n        Os custos informados se aplicam a cada\n        passageiro adulto e estão convertidos\n        à moeda local segundo o câmbio do dia. Os valores devem ser pagos á vista. As alterações e os\n        cancelamentos, em caso de serem permitidos, podem ser realizados até 24 horas antes do embarque e\n        durante um ano a partir da data da compra. As taxas de serviço a companhia cobrados na reserva\n        original não serão reembolsados.\n    </span>\n</div>\n<div style=\"font-family: Roboto; color: #535252;font-size: 18px;font-weight: bold;margin-top: 30px;width: 250px !important;\">\n    Tenho direito a desistência?\n</div>\n<span style=\"font-family: Roboto; color: #535252;float: left;width: 100%;font-size: 16px;margin-bottom: 30px;\">\n    Você deve levar em consideração que o transporte comercial no Brasil é regido por um\n    conjunto de normas, entre as quais se encontram a Resolução 400 da Agência Nacional de Aviação Civil\n    e a Resolução 4282 da Agência Nacional de Transportes Terrestres, as Normas Internacionais da IATA\n    (International Air Transport Association)(\"Normas Aeronáuticas\").Essas normas trazem regramento\n    específico sobre o Direito de Arrependimento, motivo pelo qual fica a cargo das companhias aéreas\n    estabelecer as condições de cancelamento, o que acontece sem a intervenção da FÉRIAS & CO. A\n    Resolução 400 da Agência Nacional de Aviação Civil estabelece que você poderá exercer o Direito de\n    Arrependimento desde que o faça no prazo de 24 (vinte e quatro) horas da realização da compra, sendo\n    certo que as companhias aéreas podem determinar em suas condições de cancelamento que esta regra\n    somente se aplica para compras feitas com antecedência igual ou superior a 07(sete) dias em relação\n    à data do embarque. Por isso, consulte as condições estabelecidas pela companhia aérea antes da\n    aquisição de seu bilhete aéreo.\n</span>",
			"TaxaDU" : "40",
			"TaxaDeEmbarque" : "30.95",
			"OutrasTaxas" : "0",
			"StatusPayment" : null,
			"HistoryPayment" : null
		},
		"Price" : {
			"PaymentOptionId" : 7,
			"PlanExtraPrice" : "377.14",
			"TotalPriceExtra" : "342.85",
			"PlanPointUsed" : 0,
			"PlanPointUsedFormat" : "",
			"PlanDailyUsed" : 0,
			"AccumulatedPoint" : 0,
			"AccumulatedPointFormat" : "",
			"Currency" : "BRL",
			"PlanMarkup" : "10",
			"PointPrice" : "0.06",
			"PlanoPeriodos" : null
		},
		"ActualStatus" : {
			"StatusId" : 2,
			"Name" : "Confirmado",
			"Description" : "Confirmado",
			"Date" : ISODate("2021-02-03T20:54:16.510Z"),
			"PreviousStatusId" : null
		},
		"StatusWooba" : "Emitida",
		"History" : [ 
			{
				"StatusId" : 2,
				"Name" : "Confirmado",
				"Description" : "Confirmado",
				"Date" : ISODate("2021-02-03T20:54:16.510Z"),
				"PreviousStatusId" : null
			}
		],
		"ActualCancelStatus" : null,
		"HistoryCancel" : null,
		"StatusPayment" : {
			"StatusPaymentId" : 2,
			"Name" : "Aprovado",
			"Card" : "MasterCard ****5557",
			"Date" : ISODate("2021-02-03T20:54:16.991Z"),
			"PreviousStatusId" : null
		},
		"HistoryPayment" : [],
		"Tickets" : [ 
			{
				"IsChildTicket" : false,
				"EmittedAt" : "/Date(-62135589600000-0300)/",
				"Number" : "9690001001696",
				"Passenger" : "THANOS ESMAGA",
				"Status" : "Ativo"
			}
		],
		"CreatedAt" : ISODate("2021-02-03T23:53:22.695Z"),
		"UpdatedAt" : ISODate("2021-02-03T20:54:16.991Z"),
		"Air" : {
			"_id" : 1,
			"TotalPriceGeneral" : "342.85",
			"Currency" : "BRL",
			"Rota" : "D",
			"FarePrice" : {
				"QuantityAdult" : 1,
				"QuantityChild" : 0,
				"QuantityBaby" : 0,
				"TotalPriceAdult" : "271.9",
				"TotalPriceChild" : "0",
				"TotalPriceBaby" : "0",
				"Exchange" : "1",
				"Coin" : "BRL",
				"Rate" : "30.95",
				"RateFuel" : "0",
				"RateFee" : "0",
				"RateEmbarkation" : "30.95",
				"RateService" : "40",
				"RateEmbarkationAdult" : "30.95",
				"RateEmbarkationChild" : "0",
				"RateEmbarkationBaby" : "0",
				"RateServiceAdult" : "40",
				"RateServiceChild" : "0",
				"RateServiceBaby" : "0"
			},
			"FarePriceHandbag" : null,
			"Stretches" : [ 
				{
					"_id" : 1,
					"Segment" : "I",
					"Description" : "Ida - 7 jul 2021 (Quarta)",
					"IataEmbarkation" : "VCP",
					"CityEmbarkation" : "CAMPINAS",
					"AirportEmbarkation" : "VCP - CAMPINAS",
					"IataDesbarkation" : "AJU",
					"AirportDesbarkation" : "AJU - ARACAJU",
					"CityDesbarkation" : "ARACAJU",
					"TravelId" : "+Q0AAB+LCAAAAAAABADtl/FvojAUx/+VpfvV2xWQgPyGerrtYJCBy7xll3Sj7JohGMBky2L/9nstiOLxw1zO3zRV2r6+9r1Pm2/xA9nIUnpohCzcQ0P5O3lDVkySgvZQwApk6fJ5FSFLhYGMIAtNNdRD7uuyGejLBr4A95AtMznnmBYlSzOY4eEDeeAV2B64jaFmX8+g5kNNxaryDRtQQowtWcByCxaMMVhE2VrWjxAkKegoIUVBYZCYUHSEJGcxfEVwnu95I+8XWKreMCtJAsEbysUAbzq9Jc1JlOWkSeEuq0N1pznkgsDfgYfWR62sbZHJ3cgXVZHKMBiKpIK9XIwml0thwoasj0d7w0xL0+thwoRNTYf6zWoBDcUwFLF2lm4xtxtAoWbgAwRIrJX9zp4M923D2ldUJ/D0JUh/U5uQBUtEzh/oJlsI0H6eLTIZTcRess04P6cxe5PNW09axTLnhqlSU6vakywtxQTnsfygNfTK3atgj27rDCajVoATktPwfQmeD7DnTYi+S/LX1SatOsxxvf1HCjdhRSljvSOJdMDc47wOlXu2qnGu8Xt53l7ALEIPaJL8pO/iKNOY5jR9ZsQnbxXxqzQmacmSeifXj+teJ4hw3gnCCQ8A4bCXP+UuiMq7AeFcTbcglAExzOgrIMI5D4dHAxF0g/CdQ06EMwtaB8JpHwhntuVgkqd+RL/CIZjzH8fj4HZzcO8P4ODa97sYKt8Gw8YqMcRP+pMSfwWDO+eX/wPDY8cqajNhucpnKYtIRAsp588sSwkr7GdaFJm4sD4Pe0/z9Q7Nr4Te3l5f/2j+wOq3NH/Q79J8RbF0vKP5iqLjHc1XzZPmnzT/pPknzT9p/hE1v2uVZpEwW+VAi35ust52hqnGxVs7P+Mc/iJwbHyHIrT/TP4h4HCHtDrF6z//Lb1UU3jtDxBXCofrZrdTXiC8CfYagk3p+4GU/wLYz4Qv+Q0AAA==",
					"FlightNumber" : null,
					"Locator" : null,
					"Class" : "O",
					"FamilyCode" : "PRO",
					"FareId" : "OPOOCOZ",
					"FareIdHandbag" : "OPOOCSY",
					"ClassHandbag" : "O",
					"FamilyCodeHandbag" : "PLU",
					"Flights" : null,
					"Destination" : {
						"_id" : null,
						"CompanyDescription" : null,
						"HoraryEmbarkation" : ISODate("2021-07-07T07:00:00.000Z"),
						"IataEmbarkation" : "VCP",
						"HoraryDesbarkation" : ISODate("2021-07-07T11:50:00.000Z"),
						"IataDesbarkation" : "AJU",
						"QtdStop" : 1,
						"Duration" : "0450",
						"HandbagSmall" : true,
						"HandbagMedium" : true,
						"HandbagLong" : false,
						"NumberFlight" : "1771",
						"Companies" : [ 
							{
								"_id" : "G3",
								"Name" : "Gol Linhas Aéreas",
								"Logo" : "https://wooba-sandbox.travellink.com.br/Upload/logomarcas/companhiaico5.gif"
							}
						],
						"Detail" : {
							"_id" : "I1114114",
							"Flights" : [ 
								{
									"Logo" : "https://wooba-sandbox.travellink.com.br/Upload/logomarcas/companhiaico5.gif",
									"HoraryEmbarkation" : "2021-07-07T07:00:00",
									"IataEmbarkation" : "VCP",
									"CityEmbarkation" : "Viracopos, CAMPINAS",
									"HoraryDesbarkation" : "2021-07-07T08:35:00",
									"CityDesbarkation" : "Presidente Juscelino Kubitschek, BRASILIA",
									"IataDesbarkation" : "BSB",
									"NumberFlight" : "1771",
									"Class" : "Econômica",
									"Airplane" : "738",
									"Duration" : "01:35",
									"Company" : "Gol Linhas Aéreas",
									"CompanyDescription" : "Operador por Gol Linhas Aéreas",
									"AwaitTime" : "0000",
									"ExchangePlane" : false,
									"FareId" : "OPOOCOZ"
								}, 
								{
									"Logo" : "https://wooba-sandbox.travellink.com.br/Upload/logomarcas/companhiaico5.gif",
									"HoraryEmbarkation" : "2021-07-07T09:40:00",
									"IataEmbarkation" : "BSB",
									"CityEmbarkation" : "Presidente Juscelino Kubitschek, BRASILIA",
									"HoraryDesbarkation" : "2021-07-07T11:50:00",
									"CityDesbarkation" : "Santa Maria, ARACAJU",
									"IataDesbarkation" : "AJU",
									"NumberFlight" : "1728",
									"Class" : "Econômica",
									"Airplane" : "738",
									"Duration" : "02:10",
									"Company" : "Gol Linhas Aéreas",
									"CompanyDescription" : "Operador por Gol Linhas Aéreas",
									"AwaitTime" : "0105",
									"ExchangePlane" : true,
									"FareId" : "OPOOCOZ"
								}
							]
						}
					}
				}
			]
		}
	},
	{
		"_id" : ObjectId("608abbfc799585cf2bdf3b5f"),
		"_t" : "BoonkingMongoDbDocument",
		"WoobaCalls" : {
			"BookingRequest" : "<ReservaRQ xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns=\"http://schemas.datacontract.org/2004/07/TravellinkEngine.Classes.Aereo.Request\"><Login xmlns=\"http://schemas.datacontract.org/2004/07/TravellinkEngine.Classes\">WoobaApi_FERIAS</Login><Senha xmlns=\"http://schemas.datacontract.org/2004/07/TravellinkEngine.Classes\">Fer!@s123</Senha><ClassesSelecionadas><ReservaRQ.ClasseSelecionada><BaseTarifaria>OPOTDOZ</BaseTarifaria><Classe>O</Classe><NumeroDoVoo>1764</NumeroDoVoo></ReservaRQ.ClasseSelecionada><ReservaRQ.ClasseSelecionada><BaseTarifaria>OPOTDOZ</BaseTarifaria><Classe>O</Classe><NumeroDoVoo>1765</NumeroDoVoo></ReservaRQ.ClasseSelecionada></ClassesSelecionadas><HabilitarFluxoContatoPassageiro>false</HabilitarFluxoContatoPassageiro><IdentificacaoDaViagem>TwgAAB+LCAAAAAAABACdVdl2okoU/RdeTbfMgm8MgijIrEivPBRQDIKiDCJm5d8vJHY6ues+5LZLl2eqvfc5UFUvCIfM8SdEQObYE8Ijc/QJkW7IPAZFDZ8QO6uROYWhb5YSIXOCHWozgMwRmUCeEC0/f9Qabw76cyh2snP5BivCuslO5QDy6wXRh1U2pw/LxNFS/cEyBgtHcewHyvzAMAdF52/fIWN9yuCfMq/Pg05QQ6EAdQ2HohFwDDigyuLhN4obQu+uUzagQOY0zf6ksd9B/QwrEJUV+NC+LR8aNbk6v6//1CU3KpctdzT/SBftr9oxYo5T79qXYwojcGosE/5VRs+pR4vLMYXR1Ghv2uPozGhy5C5Pf8b61Rm6fvT8ad780NcYNXRH1Edt/KNuNKXh33gbkvEekcAxK8buXpBNeRxHaFTlsRwhKxhnt3KMWDryOgh5G/L7aATrQSwJX7gkUEGnPw84v55HVaDK29/CHlTi4+F8h7LI6maEen36T0pn/9eUapakzRdKVZG/QWn/PaWhuvbXJlX3G4za3zNqnPeFcPQ/Ez6P++fhvSBbUJTjm4N3IcfxE1Xg3j88J2DFVnLKO2feZpP1AmMtIdgp142UXYgwcdayboRwudaWqr3Il7TS6yhxx/HOWmesvgSTKShD7dhS12jaMz5TuqHP10DOlADgGRdImFh2bH7uzeqy32fbbD2rWIqwLUIRVNVqlRClVOaaS+jWJhO1AHhsEoEmFTeprex6p1FpAsKrtOBtirNNyq3USbfdCSuQytNUaxiyO5y8aJuw5GrYOXumvcNyD233uJTtQhVyqTed3MrJdcGsIMvvFmZLLmpXm8pXQfHrnLhPmvuCZorENFubUdaom7IkSpdTNefU5NQZXppiG7Gx+2XSF9CXM6vBzlCAQWxV6yC2U6+RPXK/uZI7P6pYKxaaCNdv6oQgqYLUKgZTd9TpFOybJOIUUzbNRDOlaDndgJ2ozmZ8jrebRdyJqbcMZXzTr26Fe9W8to3uvZPXk1VfBamK35rotnclh73Ico7ylO+fnDXTJtsLAw9ECntzq7vTrbim0u0Rg/dlTgIebNIzs7DWuwPT7kVtxR76pvbMFePNwgwfTsdNE11ZZbYDdSXZV7G3HCEolVROgbSXDvRilTAg0/FbS/qwtu7BOmYlHfqryk5acD0oTl72/qSgw7zCDruZ7lwg8BqeXxpRqXbkAeOgfm+imbspa6o1vZQgO1SJF3hb6aa5MCTtpuiHZJ/iSZexsUsvNsP0eUatlkl6bVspyf1YTfnZ8LQuqyNVia4rki26JA9EyzErYhmYFBbUTTrbuiF6jicCShokFI2bjk3JWGDKrsPFzeYi0fju5lgnwS3KSzA7V+T9lK48fd1jqppNmphOXH1reOFukjXFQSu6XVISE+Ki+j6IOoc51a1T2lyPGiWWeLI0VY66JHnpnq/OonZWu8Aqrijvewbd2nBm0EmdBUbAdxz3dk8lwwZUInhqsjgLQQjGY9GCMazgKcyAAW7vx7ZyisFQUzwug/Ho+L19qQ8cqaxOMITD5SaUUZb8fyiaogjmA26bgQQeh4v/WzDPr/8A9ONCYk8IAAA=</IdentificacaoDaViagem><IdentificacaoDaViagemVolta>UAgAAB+LCAAAAAAABACdVdmSokgU/RderW4TEETfSJBF9kUEO/oBEBRBkE2Fivr3AcuuqYqYh5o2XG7e5ZxzL2bmK0IjS+wFYZAl+oJAZAleEO6OLGM/q6MXxEpqZEmg4GGJe2SJL4bcxEeWCI8jL4iSXj5y9ccC/ByS7eRSPGDZqG6SvBhAfr0i2lBl0dpQxo6WvBssfbAwgKE/APUDRW0Alo/3EDE/RbBPkbffg06/jpjMr+toSBoBR4ftV0k8fEZxg+t9aReNnyFLklz8JNE/Tu0SVf6+qPwP7U7x1Kjw1eW9/lOXtPahlx6l8+ZmbML6qhCdL3HiXbswhtA5ToxpzNc0DF2izxaFRwhFR1ttz48acqxhivzfsX5dDF0/e/40bzj0NXp1zWa1USZ85o0mN/zqjyHp7x7OPyfZ2N0rohbncYR6VZyLEbKK4uRejB5TQ94GIY8hv4+GMZ/EHPOFi/OryO4uA86v36Mqv0rbP8KeVOzz4XyHMkvqZoR6e/lPStv7a0o5ORybL5SyyH+D0vp7Sl3eWF+blDffYFT+nlGh3S+E4/oz4e9x/zxXr4jjZ8X4z8HpkKbhRGbo9xekGTRzuL440cZ9vpDWOJbJIV9mbLzx81o4mkJNCi65YlygpG5CKySYEScdT1E6g3Vst9NyJrPr+TmYTkDLB2tGlVcqG2/N4/BlXLZNMRH5+swYBOqwdHi2UDSu79JB2Rmm5zc7hsf10KmLS826/KS+OlVHz3dJeRXpEMhZvvZm/JbVVwcpoCcdbNZdXAjZAXMLWM2t3moVA8VwlNYiyhMETYe1C1anbptORTfTxM2hlZg9k1Yrb5pJAYFfj7e1wnXN2eA6Ezrlvt8vcNiC7GraikV5/aay571VFvOupF2on7VM4GU+xQO3xOOsxJT7Ud85Ktyc5GZbojhGJXDfqk3ZzeFEoXqaKwk/zuj2JLmLhiPLXJwrZKwBtD3gEDBHr6VZyCc1iHGYX+3JQt+WLp9qswhUqT7X+IuYWZit81N7ld0lkE9XmYMVyaLe4aFL8N7UPx7Pqh5tt7uOJC4bWXVORUjJkcFkc4EsLFwpG1B5cSw4RszGqX5IeQNMuTskDtc6snBzD3Ls2pCoE6aho16ntiva2XEvkb26dkSx1ZlVWYZSzzpAlKWgvMoY3IJC99cydVlPO0nVvN3J3CuaZJ8IeebdS7vh4brZ6QFKohi3MmbarWKYDUXPAgbHqc0xYaU5bFfU6eodKIhfzs2KEBVpxwjXGCbijK3XuH1KzT4xC4FO8shiwm5Hslbk4ysbE4yethfdVghuwlE4xEc7HbD3lW3ciCyo0SOBbsJZns1Prdpr8qGnYhhr8i2SPEUtMH2b3IMqWEtdsjKAc5+iMFIuXnBeFEKuET6OssSGiXrpBqd76Fp9St56AwSLwFHbq8oX64kNXA7INGFxgKICWp2K55aD7tGDFSFAyzW6RL7WbFcGgAIm5i76YBa6IbzR9OOeOgwbUNxHeZPESeiH/ngsmlEcVVEeJr7u39+PbTGP/SEne14G49HxZ/sSHzhcUeVRGA2XG1Psk8P/h6IIdDEHH3hO4h+i83Dzfwvn99s/5owEaFAIAAA=</IdentificacaoDaViagemVolta><Passageiros><Passageiro xmlns=\"http://schemas.datacontract.org/2004/07/TravellinkEngine.Modelo.Aereo\"><Id>0</Id><CPF>41129364860</CPF><FaixaEtaria>ADT</FaixaEtaria><InfantilNascimento>0001-01-01T00:00:00</InfantilNascimento><Nascimento>1991-11-17T02:00:00Z</Nascimento><Nome>ÉLIDA RAFAELLY</Nome><PossuiBebe>false</PossuiBebe><RecusarEnvioDoEmailParaFornecedor>false</RecusarEnvioDoEmailParaFornecedor><RecusarEnvioDoTelefoneParaFornecedor>false</RecusarEnvioDoTelefoneParaFornecedor><Sexo>F</Sexo><Sobrenome>LOBATO</Sobrenome></Passageiro><Passageiro xmlns=\"http://schemas.datacontract.org/2004/07/TravellinkEngine.Modelo.Aereo\"><Id>0</Id><CPF>48920843368</CPF><FaixaEtaria>ADT</FaixaEtaria><InfantilNascimento>0001-01-01T00:00:00</InfantilNascimento><Nascimento>1973-03-17T03:00:00Z</Nascimento><Nome>LUCIRENE </Nome><PossuiBebe>false</PossuiBebe><RecusarEnvioDoEmailParaFornecedor>false</RecusarEnvioDoEmailParaFornecedor><RecusarEnvioDoTelefoneParaFornecedor>false</RecusarEnvioDoTelefoneParaFornecedor><Sexo>F</Sexo><Sobrenome>LOBATO</Sobrenome></Passageiro><Passageiro xmlns=\"http://schemas.datacontract.org/2004/07/TravellinkEngine.Modelo.Aereo\"><Id>0</Id><CPF>53528677813</CPF><FaixaEtaria>CHD</FaixaEtaria><InfantilNascimento>0001-01-01T00:00:00</InfantilNascimento><Nascimento>2017-09-21T03:00:00Z</Nascimento><Nome>GIOVANNA</Nome><PossuiBebe>false</PossuiBebe><RecusarEnvioDoEmailParaFornecedor>false</RecusarEnvioDoEmailParaFornecedor><RecusarEnvioDoTelefoneParaFornecedor>false</RecusarEnvioDoTelefoneParaFornecedor><Sexo>F</Sexo><Sobrenome>ALCARDE</Sobrenome></Passageiro></Passageiros><Contatos><ContatoReserva><Id>0</Id><NumeroDDD>11</NumeroDDD><NumeroDDI>11</NumeroDDI><NumeroTelefone>984786866</NumeroTelefone><Nome>RAFAELLY</Nome></ContatoReserva></Contatos></ReservaRQ>",
			"BookingResponse" : {
				"Data" : ISODate("2021-04-29T14:00:54.863Z"),
				"DataVersao" : "Branch 19/04/2021",
				"SessaoExpirada" : false,
				"Exception" : null,
				"CobrancaDeServico" : null,
				"CodigoDeAutorizacao" : null,
				"Reservas" : [ 
					{
						"_id" : 81,
						"Agencia" : {
							"_id" : 11,
							"Contato" : "55 11 21720286",
							"Email" : "atendimento@ferias.co",
							"Nome" : "FÉRIAS & CO API",
							"Unidade" : "FÉRIAS & CO MATRIZ",
							"Localizacao" : {
								"_id" : 0,
								"Endereco" : "Av Paulista, 2001",
								"Bairro" : "CERQUEIRA CÉSAR",
								"CEP" : "01311931",
								"Cidade" : "SÃO PAULO",
								"Complemento" : "Conj 1201",
								"Estado" : "SP",
								"Numero" : "",
								"Pais" : "Brasil",
								"Contato" : null
							}
						},
						"Bilhetes" : [],
						"ClienteUnidade" : null,
						"DataCriacao" : "/Date(1619704834473-0300)/",
						"DataEmissao" : "/Date(-62135589600000-0300)/",
						"ExigirChaveDeSegurancaParaCancelar" : false,
						"Localizador" : "IIUIYV",
						"Loja" : null,
						"Passageiros" : [ 
							{
								"_id" : 0,
								"Assentos" : null,
								"CPF" : null,
								"Email" : null,
								"FaixaEtaria" : "ADT",
								"FidelidadeTam" : null,
								"Fidelidades" : null,
								"InfPassaporte" : {
									"_id" : 0,
									"Nacionalidade" : "",
									"NomeDoMeioPax" : null,
									"NomePax" : null,
									"Numero" : "",
									"PaisEmissor" : "",
									"SobrenomePax" : null,
									"Validade" : "/Date(-62135589600000-0300)/"
								},
								"InfantilLinha" : null,
								"InfantilNascimento" : "/Date(-62135589600000-0300)/",
								"InfantilNome" : "",
								"InfantilSexo" : "",
								"InfantilSobrenome" : "",
								"Linha" : "0",
								"Nascimento" : ISODate("1991-11-17T02:00:00.000Z"),
								"Nome" : "ELIDA RAFAELLY",
								"NomeDoMeio" : null,
								"Sobrenome" : "LOBATO",
								"NumeroAvianca" : null,
								"NumeroAzul" : null,
								"NumeroFidelidadeGenerico" : null,
								"Passaporte" : {
									"_id" : 0,
									"Nacionalidade" : "",
									"NomeDoMeioPax" : null,
									"NomePax" : null,
									"Numero" : "",
									"PaisEmissor" : "",
									"SobrenomePax" : null,
									"Validade" : "/Date(-62135589600000-0300)/"
								},
								"PossuiBebe" : false,
								"RecusarEnvioDoEmailParaFornecedor" : false,
								"RecusarEnvioDoTelefoneParaFornecedor" : false,
								"Redress" : null,
								"Sexo" : "F",
								"SmilesGol" : null,
								"Telefone" : null,
								"Tipo" : null,
								"VoeBiz" : null
							}, 
							{
								"_id" : 0,
								"Assentos" : null,
								"CPF" : null,
								"Email" : null,
								"FaixaEtaria" : "ADT",
								"FidelidadeTam" : null,
								"Fidelidades" : null,
								"InfPassaporte" : {
									"_id" : 0,
									"Nacionalidade" : "",
									"NomeDoMeioPax" : null,
									"NomePax" : null,
									"Numero" : "",
									"PaisEmissor" : "",
									"SobrenomePax" : null,
									"Validade" : "/Date(-62135589600000-0300)/"
								},
								"InfantilLinha" : null,
								"InfantilNascimento" : "/Date(-62135589600000-0300)/",
								"InfantilNome" : "",
								"InfantilSexo" : "",
								"InfantilSobrenome" : "",
								"Linha" : "1",
								"Nascimento" : ISODate("1973-03-17T03:00:00.000Z"),
								"Nome" : "LUCIRENE",
								"NomeDoMeio" : null,
								"Sobrenome" : "LOBATO",
								"NumeroAvianca" : null,
								"NumeroAzul" : null,
								"NumeroFidelidadeGenerico" : null,
								"Passaporte" : {
									"_id" : 0,
									"Nacionalidade" : "",
									"NomeDoMeioPax" : null,
									"NomePax" : null,
									"Numero" : "",
									"PaisEmissor" : "",
									"SobrenomePax" : null,
									"Validade" : "/Date(-62135589600000-0300)/"
								},
								"PossuiBebe" : false,
								"RecusarEnvioDoEmailParaFornecedor" : false,
								"RecusarEnvioDoTelefoneParaFornecedor" : false,
								"Redress" : null,
								"Sexo" : "F",
								"SmilesGol" : null,
								"Telefone" : null,
								"Tipo" : null,
								"VoeBiz" : null
							}, 
							{
								"_id" : 0,
								"Assentos" : null,
								"CPF" : null,
								"Email" : null,
								"FaixaEtaria" : "CHD",
								"FidelidadeTam" : null,
								"Fidelidades" : null,
								"InfPassaporte" : {
									"_id" : 0,
									"Nacionalidade" : "",
									"NomeDoMeioPax" : null,
									"NomePax" : null,
									"Numero" : "",
									"PaisEmissor" : "",
									"SobrenomePax" : null,
									"Validade" : "/Date(-62135589600000-0300)/"
								},
								"InfantilLinha" : null,
								"InfantilNascimento" : "/Date(-62135589600000-0300)/",
								"InfantilNome" : "",
								"InfantilSexo" : "",
								"InfantilSobrenome" : "",
								"Linha" : "2",
								"Nascimento" : ISODate("2017-09-21T03:00:00.000Z"),
								"Nome" : "GIOVANNA",
								"NomeDoMeio" : null,
								"Sobrenome" : "ALCARDE",
								"NumeroAvianca" : null,
								"NumeroAzul" : null,
								"NumeroFidelidadeGenerico" : null,
								"Passaporte" : {
									"_id" : 0,
									"Nacionalidade" : "",
									"NomeDoMeioPax" : null,
									"NomePax" : null,
									"Numero" : "",
									"PaisEmissor" : "",
									"SobrenomePax" : null,
									"Validade" : "/Date(-62135589600000-0300)/"
								},
								"PossuiBebe" : false,
								"RecusarEnvioDoEmailParaFornecedor" : false,
								"RecusarEnvioDoTelefoneParaFornecedor" : false,
								"Redress" : null,
								"Sexo" : "F",
								"SmilesGol" : null,
								"Telefone" : null,
								"Tipo" : null,
								"VoeBiz" : null
							}
						],
						"Pedido" : null,
						"PermiteCancelar" : true,
						"PermiteEmitir" : true,
						"PnrClasseRevendida" : false,
						"PrazoEmissao" : "/Date(1619791243000-0300)/",
						"Sistema" : "Travellink_Skyteam",
						"Status" : "Ativa",
						"Usuario" : {
							"_id" : 3699,
							"Celular" : null,
							"Email" : null,
							"Nome" : "Atendimento Férias & Co",
							"NomeCompleto" : null,
							"Telefone" : null
						},
						"Viagens" : [ 
							{
								"CiaMandatoria" : {
									"_id" : 0,
									"CodigoIata" : "G3",
									"Descricao" : "Gol Linhas Aéreas"
								},
								"Destino" : null,
								"Duracao" : 420,
								"Fornecedor" : {
									"_id" : 0,
									"Codigo" : 510,
									"Nome" : "Travellink_Skyteam"
								},
								"_id" : 0,
								"IdentificacaoDaViagem" : null,
								"NumeroParadas" : 0,
								"Origem" : null,
								"Preco" : {
									"_id" : 0,
									"EqCambio" : "1",
									"EqMoeda" : "",
									"Moeda" : "BRL",
									"PrecoAdulto" : {
										"_id" : 0,
										"EqValorTarifa" : "0",
										"EqValorTaxaServico" : "0",
										"FaixaEtaria" : "ADT",
										"Quantidade" : 2,
										"ValorFee" : "0",
										"ValorRav" : "0",
										"ValorTarifa" : "461.8",
										"ValorTarifaNet" : "0",
										"ValorTaxaCombustivel" : "0",
										"ValorTaxaEmbarque" : "68.5",
										"ValorTaxaServico" : "46.18"
									},
									"PrecoBebe" : null,
									"PrecoCrianca" : {
										"_id" : 0,
										"EqValorTarifa" : "0",
										"EqValorTaxaServico" : "0",
										"FaixaEtaria" : "CHD",
										"Quantidade" : 1,
										"ValorFee" : "0",
										"ValorRav" : "0",
										"ValorTarifa" : "415.62",
										"ValorTarifaNet" : "0",
										"ValorTaxaCombustivel" : "0",
										"ValorTaxaEmbarque" : "68.5",
										"ValorTaxaServico" : "41.56"
									},
									"Tarifa" : 0.0,
									"TarifaOperadora" : false,
									"Taxa" : "339.42",
									"Total" : "1678.64",
									"TotalGeral" : "1678.64",
									"TotalTarifa" : "1339.22",
									"TotalTarifaNet" : "0",
									"TotalTaxaDeCombustivel" : "0",
									"TotalTaxaEmbarque" : "205.5",
									"TotalTaxaServico" : "133.92",
									"ValorEmd" : "0",
									"ValorFee" : "0",
									"ValorRav" : "0"
								},
								"Segmento" : null,
								"TempoDeDuracao" : "07:00",
								"Voos" : [ 
									{
										"_id" : 0,
										"BagagemInclusa" : false,
										"BagagemIndicador" : "2",
										"BagagemPeso" : "0",
										"BagagemQuantidade" : "0",
										"BagagemUnidadeDeMedida" : "KG Total",
										"BaseTarifaria" : [ 
											{
												"_id" : 0,
												"Classe" : "O",
												"Codigo" : "OPOTDOZ",
												"Familia" : null
											}
										],
										"Cabine" : null,
										"Campo1" : null,
										"CiaMandatoria" : {
											"_id" : 0,
											"CodigoIata" : "G3",
											"Descricao" : "Gol Linhas Aéreas"
										},
										"CiaOperacional" : null,
										"Classe" : "O",
										"Companhia" : null,
										"Conexao" : false,
										"DataChegada" : "/Date(1628711400000-0300)/",
										"DataSaida" : "/Date(1628699100000-0300)/",
										"Destino" : {
											"_id" : 0,
											"CodigoIata" : "SLZ",
											"Descricao" : "SLZ - SAO LUIZ"
										},
										"Duracao" : "03:25",
										"Equipamento" : "738",
										"Escalas" : [],
										"Familia" : "Promo",
										"FamiliaCodigo" : "PRO",
										"GrupoDeSegmento" : 0,
										"HoraChegada" : "1650",
										"HoraSaida" : "1325",
										"Icone" : "https://conteudo-az.travellink.com.br/RDCViagens/Logomarcas/companhiaico5.gif",
										"ListaDeClasses" : null,
										"LocalizadorCompanhia" : "IIUIYV",
										"Numero" : "1764",
										"Origem" : {
											"_id" : 0,
											"CodigoIata" : "GRU",
											"Descricao" : "GRU - SAO PAULO"
										},
										"QuantidadeParadas" : 0,
										"Segmento" : "1",
										"Status" : "HK"
									}, 
									{
										"_id" : 0,
										"BagagemInclusa" : false,
										"BagagemIndicador" : "2",
										"BagagemPeso" : "0",
										"BagagemQuantidade" : "0",
										"BagagemUnidadeDeMedida" : "KG Total",
										"BaseTarifaria" : [ 
											{
												"_id" : 0,
												"Classe" : "O",
												"Codigo" : "OPOTDOZ",
												"Familia" : null
											}
										],
										"Cabine" : null,
										"Campo1" : null,
										"CiaMandatoria" : {
											"_id" : 0,
											"CodigoIata" : "G3",
											"Descricao" : "Gol Linhas Aéreas"
										},
										"CiaOperacional" : null,
										"Classe" : "O",
										"Companhia" : null,
										"Conexao" : false,
										"DataChegada" : "/Date(1629591000000-0300)/",
										"DataSaida" : "/Date(1629578100000-0300)/",
										"Destino" : {
											"_id" : 0,
											"CodigoIata" : "GRU",
											"Descricao" : "GRU - SAO PAULO"
										},
										"Duracao" : "03:35",
										"Equipamento" : "738",
										"Escalas" : [],
										"Familia" : "Promo",
										"FamiliaCodigo" : "PRO",
										"GrupoDeSegmento" : 1,
										"HoraChegada" : "2110",
										"HoraSaida" : "1735",
										"Icone" : "https://conteudo-az.travellink.com.br/RDCViagens/Logomarcas/companhiaico5.gif",
										"ListaDeClasses" : null,
										"LocalizadorCompanhia" : "IIUIYV",
										"Numero" : "1765",
										"Origem" : {
											"_id" : 0,
											"CodigoIata" : "SLZ",
											"Descricao" : "SLZ - SAO LUIZ"
										},
										"QuantidadeParadas" : 0,
										"Segmento" : "2",
										"Status" : "HK"
									}
								]
							}
						]
					}
				]
			},
			"StartEmissionRequest" : [ 
				"<IniciarEmissaoRQ xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns=\"http://schemas.datacontract.org/2004/07/TravellinkEngine.Classes.Aereo.Request\"><Login xmlns=\"http://schemas.datacontract.org/2004/07/TravellinkEngine.Classes\">WoobaApi_FERIAS</Login><Senha xmlns=\"http://schemas.datacontract.org/2004/07/TravellinkEngine.Classes\">Fer!@s123</Senha><Localizador>IIUIYV</Localizador></IniciarEmissaoRQ>"
			],
			"StartEmissionResponse" : [ 
				{
					"Data" : ISODate("2021-04-29T14:01:02.040Z"),
					"DataVersao" : "Branch 19/04/2021",
					"SessaoExpirada" : false,
					"Exception" : null,
					"ConfiguracoesDeEmissao" : {
						"ConfiguracoesCentroDeCusto" : null,
						"ConfiguracoesTourcode" : {
							"OpcoesCentroDeCusto" : null,
							"PermiteInserirTourcodeManual" : false,
							"PermitirSelecionar" : false,
							"RequisitarSelecao" : false
						},
						"ExigirChaveDeSeguranca" : false,
						"ExigirTokenDeSeguranca" : false,
						"OpcoesDePagamento" : [ 
							{
								"_id" : 0,
								"AplicaTaxaOBFEE" : false,
								"CartaoConsolidadorAtivo" : false,
								"CartaoDeCredito" : true,
								"CartaoDeCreditoOnline" : true,
								"CartaoVirtualAtivo" : false,
								"CartoesDeCredito" : [],
								"CodigoFormaDeRecebimento" : 2,
								"CodigoFormaDeRecebimentoTipo" : 0,
								"Descricao" : "Cartão",
								"ExigirAutorizacaoManual" : false,
								"Faturado" : false,
								"NumeroDeAutorizacao" : "",
								"PermitirAlterarNumeroDeAutorizacao" : true
							}, 
							{
								"_id" : 0,
								"AplicaTaxaOBFEE" : false,
								"CartaoConsolidadorAtivo" : false,
								"CartaoDeCredito" : false,
								"CartaoDeCreditoOnline" : false,
								"CartaoVirtualAtivo" : false,
								"CartoesDeCredito" : [],
								"CodigoFormaDeRecebimento" : 1,
								"CodigoFormaDeRecebimentoTipo" : 0,
								"Descricao" : "Faturada",
								"ExigirAutorizacaoManual" : false,
								"Faturado" : true,
								"NumeroDeAutorizacao" : "",
								"PermitirAlterarNumeroDeAutorizacao" : false
							}
						],
						"OpcoesDePagamentoValorCobrancaDeServico" : [],
						"PermitirAlterarFEE" : true,
						"PermitirAlterarRAV" : true,
						"ValorRAV" : "0"
					},
					"Localizador" : "IIUIYV",
					"OpcoesDeDocumentoDePassageiro" : [ 
						{
							"Descricao" : "Nenhum",
							"Tipo" : 0
						}, 
						{
							"Descricao" : "Localizador",
							"Tipo" : 1
						}, 
						{
							"Descricao" : "Habilitacao",
							"Tipo" : 2
						}, 
						{
							"Descricao" : "C_Milhas",
							"Tipo" : 3
						}, 
						{
							"Descricao" : "Identidade",
							"Tipo" : 4
						}, 
						{
							"Descricao" : "Passaporte",
							"Tipo" : 5
						}, 
						{
							"Descricao" : "C_Credito",
							"Tipo" : 6
						}, 
						{
							"Descricao" : "Doc_Foto",
							"Tipo" : 7
						}, 
						{
							"Descricao" : "Bilhete",
							"Tipo" : 8
						}, 
						{
							"Descricao" : "Cpf",
							"Tipo" : 9
						}
					],
					"Passageiros" : [ 
						{
							"_id" : 0,
							"CentroDeCusto" : null,
							"Documento" : null,
							"Empenho" : null,
							"InfantilNome" : "",
							"InfantilSobrenome" : "",
							"Nome" : "ELIDA RAFAELLY",
							"Requisicao" : null,
							"Sobrenome" : "LOBATO",
							"Tipo" : "ADT"
						}, 
						{
							"_id" : 0,
							"CentroDeCusto" : null,
							"Documento" : null,
							"Empenho" : null,
							"InfantilNome" : "",
							"InfantilSobrenome" : "",
							"Nome" : "LUCIRENE",
							"Requisicao" : null,
							"Sobrenome" : "LOBATO",
							"Tipo" : "ADT"
						}, 
						{
							"_id" : 0,
							"CentroDeCusto" : null,
							"Documento" : null,
							"Empenho" : null,
							"InfantilNome" : "",
							"InfantilSobrenome" : "",
							"Nome" : "GIOVANNA",
							"Requisicao" : null,
							"Sobrenome" : "ALCARDE",
							"Tipo" : "CHD"
						}
					],
					"PosicaoTokenDeSeguranca" : null,
					"Sumario" : {
						"Credito" : null,
						"Moeda" : "BRL",
						"OutrasTaxas" : null,
						"Penalidade" : null,
						"SubTotal" : "1678.64",
						"TaxaAdicional" : null,
						"TaxaDU" : "133.92",
						"TaxaDeServicoContratante" : null,
						"TaxaRAV" : null,
						"Taxas" : "205.50",
						"TotalTarifa" : "1339.22",
						"TotalTaxa" : "339.42",
						"ValorEMD" : null
					},
					"ValorDeEmissaoPassageiro" : [ 
						{
							"Credito" : null,
							"Moeda" : "BRL",
							"OutrasTaxas" : null,
							"Penalidade" : null,
							"SubTotal" : "1152.96",
							"TaxaAdicional" : "0.00",
							"TaxaDU" : "92.36",
							"TaxaDeServicoContratante" : null,
							"TaxaRAV" : null,
							"Taxas" : "137.0",
							"TotalTarifa" : "923.6",
							"TotalTaxa" : "137.0",
							"ValorEMD" : "0",
							"FaixaEtaria" : "ADT",
							"TarifaUnitaria" : "461.80"
						}, 
						{
							"Credito" : null,
							"Moeda" : "BRL",
							"OutrasTaxas" : null,
							"Penalidade" : null,
							"SubTotal" : "525.68",
							"TaxaAdicional" : "0.00",
							"TaxaDU" : "41.56",
							"TaxaDeServicoContratante" : null,
							"TaxaRAV" : null,
							"Taxas" : "68.5",
							"TotalTarifa" : "415.62",
							"TotalTaxa" : "68.5",
							"ValorEMD" : "0",
							"FaixaEtaria" : "CHD",
							"TarifaUnitaria" : "415.62"
						}
					],
					"Voos" : [ 
						{
							"_id" : 1,
							"LocalizadorCia" : "IIUIYV",
							"Voo" : "1764",
							"Assentos" : 0,
							"BagagemInclusa" : false,
							"BagagemIndicador" : 2,
							"BagagemPeso" : "0",
							"BagagemQuantidade" : "0",
							"BagagemUnidadeDeMedida" : "KG Total",
							"Chegada" : ISODate("2021-08-11T19:50:00.000Z"),
							"CiaAerea" : {
								"_id" : 0,
								"CodigoIata" : "G3",
								"Descricao" : "Gol Linhas Aéreas"
							},
							"Classe" : "O ()",
							"Conexao" : false,
							"Destino" : {
								"_id" : 0,
								"CodigoIata" : "SLZ",
								"Descricao" : "SLZ - SAO LUIZ"
							},
							"Escalas" : [],
							"Familia" : "Promo",
							"FamiliaCodigo" : null,
							"Origem" : {
								"_id" : 0,
								"CodigoIata" : "GRU",
								"Descricao" : "GRU - SAO PAULO"
							},
							"Saida" : ISODate("2021-08-11T16:25:00.000Z"),
							"Status" : "HK",
							"Surface" : false
						}, 
						{
							"_id" : 2,
							"LocalizadorCia" : "IIUIYV",
							"Voo" : "1765",
							"Assentos" : 0,
							"BagagemInclusa" : false,
							"BagagemIndicador" : 2,
							"BagagemPeso" : "0",
							"BagagemQuantidade" : "0",
							"BagagemUnidadeDeMedida" : "KG Total",
							"Chegada" : ISODate("2021-08-22T00:10:00.000Z"),
							"CiaAerea" : {
								"_id" : 0,
								"CodigoIata" : "G3",
								"Descricao" : "Gol Linhas Aéreas"
							},
							"Classe" : "O ()",
							"Conexao" : false,
							"Destino" : {
								"_id" : 0,
								"CodigoIata" : "GRU",
								"Descricao" : "GRU - SAO PAULO"
							},
							"Escalas" : [],
							"Familia" : "Promo",
							"FamiliaCodigo" : null,
							"Origem" : {
								"_id" : 0,
								"CodigoIata" : "SLZ",
								"Descricao" : "SLZ - SAO LUIZ"
							},
							"Saida" : ISODate("2021-08-21T20:35:00.000Z"),
							"Status" : "HK",
							"Surface" : false
						}
					]
				}
			],
			"EmitRequest" : [ 
				"<EmitirRQ xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns=\"http://schemas.datacontract.org/2004/07/TravellinkEngine.Classes.Aereo.Request\"><Login xmlns=\"http://schemas.datacontract.org/2004/07/TravellinkEngine.Classes\">WoobaApi_FERIAS</Login><Senha xmlns=\"http://schemas.datacontract.org/2004/07/TravellinkEngine.Classes\">Fer!@s123</Senha><Localizador>IIUIYV</Localizador><Pagamento><FormaDePagamento xmlns=\"http://schemas.datacontract.org/2004/07/TravellinkEngine\">1</FormaDePagamento><ValorFaturado xmlns=\"http://schemas.datacontract.org/2004/07/TravellinkEngine\">1339.22</ValorFaturado></Pagamento><TourCode>0</TourCode><ValidarAnaliseRisco>false</ValidarAnaliseRisco></EmitirRQ>"
			],
			"EmitResponse" : [ 
				{
					"Data" : ISODate("2021-04-29T14:01:23.416Z"),
					"DataVersao" : "Branch 19/04/2021",
					"SessaoExpirada" : false,
					"Exception" : null,
					"cobrancaDeServico" : null,
					"CodigoDeAutorizacao" : "",
					"Bilhetes" : [ 
						{
							"_id" : 0,
							"BilheteDoInfantil" : false,
							"DataDeEmissao" : "/Date(-62135589600000-0300)/",
							"Numero" : "1270002728633",
							"Pagamentos" : null,
							"Passageiro" : "ELIDA RAFAELLY LOBATO",
							"PassageirosAdicionais" : null,
							"PaxRef" : "0",
							"Status" : "Ativo",
							"Voos" : null,
							"NivelAnaliseDeRisco" : null
						}
					]
				}
			]
		},
		"OrderID" : "WO4112904211100B8F",
		"Cancelable" : false,
		"Travels" : [ 
			{
				"IataOrigin" : "GRU",
				"IataDestination" : "SLZ",
				"Locator" : "IIUIYV",
				"Company" : "Gol Linhas Aéreas",
				"NumberFlight" : "1764",
				"TotalPrice" : "0",
				"Currency" : null
			}, 
			{
				"IataOrigin" : "SLZ",
				"IataDestination" : "GRU",
				"Locator" : "IIUIYV",
				"Company" : "Gol Linhas Aéreas",
				"NumberFlight" : "1765",
				"TotalPrice" : "0",
				"Currency" : null
			}
		],
		"Errors" : [],
		"BookingRequest" : {
			"TransactionId" : UUID("0ce3ae7a-cef1-684d-ab6f-0ba22404a5e9"),
			"PlanId" : UUID("4994bb30-89b4-1644-9659-b8de544c10e9"),
			"Token" : UUID("5eea555d-28fc-4b4c-b912-87d2bdf557bc"),
			"UserId" : "41129364860",
			"UserIp" : "184.73.12.62",
			"FarePrice" : {
				"QuantityAdult" : 2,
				"QuantityChild" : 1,
				"QuantityBaby" : 0,
				"TotalPriceAdult" : "461.8",
				"TotalPriceChild" : "415.62",
				"TotalPriceBaby" : "0",
				"Exchange" : "1",
				"Coin" : "BRL",
				"Rate" : "110.06",
				"RateFuel" : "0",
				"RateFee" : "0",
				"RateEmbarkation" : "205.5",
				"RateService" : "133.92",
				"RateEmbarkationAdult" : "68.5",
				"RateEmbarkationChild" : "68.5",
				"RateEmbarkationBaby" : "0",
				"RateServiceAdult" : "46.18",
				"RateServiceChild" : "41.56",
				"RateServiceBaby" : "0"
			},
			"Stretches" : [ 
				{
					"_id" : 0,
					"Segment" : null,
					"Description" : null,
					"IataEmbarkation" : null,
					"CityEmbarkation" : null,
					"AirportEmbarkation" : null,
					"IataDesbarkation" : null,
					"AirportDesbarkation" : null,
					"CityDesbarkation" : null,
					"TravelId" : "TwgAAB+LCAAAAAAABACdVdl2okoU/RdeTbfMgm8MgijIrEivPBRQDIKiDCJm5d8vJHY6ues+5LZLl2eqvfc5UFUvCIfM8SdEQObYE8Ijc/QJkW7IPAZFDZ8QO6uROYWhb5YSIXOCHWozgMwRmUCeEC0/f9Qabw76cyh2snP5BivCuslO5QDy6wXRh1U2pw/LxNFS/cEyBgtHcewHyvzAMAdF52/fIWN9yuCfMq/Pg05QQ6EAdQ2HohFwDDigyuLhN4obQu+uUzagQOY0zf6ksd9B/QwrEJUV+NC+LR8aNbk6v6//1CU3KpctdzT/SBftr9oxYo5T79qXYwojcGosE/5VRs+pR4vLMYXR1Ghv2uPozGhy5C5Pf8b61Rm6fvT8ad780NcYNXRH1Edt/KNuNKXh33gbkvEekcAxK8buXpBNeRxHaFTlsRwhKxhnt3KMWDryOgh5G/L7aATrQSwJX7gkUEGnPw84v55HVaDK29/CHlTi4+F8h7LI6maEen36T0pn/9eUapakzRdKVZG/QWn/PaWhuvbXJlX3G4za3zNqnPeFcPQ/Ez6P++fhvSBbUJTjm4N3IcfxE1Xg3j88J2DFVnLKO2feZpP1AmMtIdgp142UXYgwcdayboRwudaWqr3Il7TS6yhxx/HOWmesvgSTKShD7dhS12jaMz5TuqHP10DOlADgGRdImFh2bH7uzeqy32fbbD2rWIqwLUIRVNVqlRClVOaaS+jWJhO1AHhsEoEmFTeprex6p1FpAsKrtOBtirNNyq3USbfdCSuQytNUaxiyO5y8aJuw5GrYOXumvcNyD233uJTtQhVyqTed3MrJdcGsIMvvFmZLLmpXm8pXQfHrnLhPmvuCZorENFubUdaom7IkSpdTNefU5NQZXppiG7Gx+2XSF9CXM6vBzlCAQWxV6yC2U6+RPXK/uZI7P6pYKxaaCNdv6oQgqYLUKgZTd9TpFOybJOIUUzbNRDOlaDndgJ2ozmZ8jrebRdyJqbcMZXzTr26Fe9W8to3uvZPXk1VfBamK35rotnclh73Ico7ylO+fnDXTJtsLAw9ECntzq7vTrbim0u0Rg/dlTgIebNIzs7DWuwPT7kVtxR76pvbMFePNwgwfTsdNE11ZZbYDdSXZV7G3HCEolVROgbSXDvRilTAg0/FbS/qwtu7BOmYlHfqryk5acD0oTl72/qSgw7zCDruZ7lwg8BqeXxpRqXbkAeOgfm+imbspa6o1vZQgO1SJF3hb6aa5MCTtpuiHZJ/iSZexsUsvNsP0eUatlkl6bVspyf1YTfnZ8LQuqyNVia4rki26JA9EyzErYhmYFBbUTTrbuiF6jicCShokFI2bjk3JWGDKrsPFzeYi0fju5lgnwS3KSzA7V+T9lK48fd1jqppNmphOXH1reOFukjXFQSu6XVISE+Ki+j6IOoc51a1T2lyPGiWWeLI0VY66JHnpnq/OonZWu8Aqrijvewbd2nBm0EmdBUbAdxz3dk8lwwZUInhqsjgLQQjGY9GCMazgKcyAAW7vx7ZyisFQUzwug/Ho+L19qQ8cqaxOMITD5SaUUZb8fyiaogjmA26bgQQeh4v/WzDPr/8A9ONCYk8IAAA=",
					"FlightNumber" : null,
					"Locator" : null,
					"Class" : "O",
					"FamilyCode" : "PRO",
					"FareId" : "OPOTDOZ",
					"FareIdHandbag" : null,
					"ClassHandbag" : null,
					"FamilyCodeHandbag" : null,
					"Flights" : [ 
						"1764"
					],
					"Destination" : null
				}, 
				{
					"_id" : 0,
					"Segment" : null,
					"Description" : null,
					"IataEmbarkation" : null,
					"CityEmbarkation" : null,
					"AirportEmbarkation" : null,
					"IataDesbarkation" : null,
					"AirportDesbarkation" : null,
					"CityDesbarkation" : null,
					"TravelId" : "UAgAAB+LCAAAAAAABACdVdmSokgU/RderW4TEETfSJBF9kUEO/oBEBRBkE2Fivr3AcuuqYqYh5o2XG7e5ZxzL2bmK0IjS+wFYZAl+oJAZAleEO6OLGM/q6MXxEpqZEmg4GGJe2SJL4bcxEeWCI8jL4iSXj5y9ccC/ByS7eRSPGDZqG6SvBhAfr0i2lBl0dpQxo6WvBssfbAwgKE/APUDRW0Alo/3EDE/RbBPkbffg06/jpjMr+toSBoBR4ftV0k8fEZxg+t9aReNnyFLklz8JNE/Tu0SVf6+qPwP7U7x1Kjw1eW9/lOXtPahlx6l8+ZmbML6qhCdL3HiXbswhtA5ToxpzNc0DF2izxaFRwhFR1ttz48acqxhivzfsX5dDF0/e/40bzj0NXp1zWa1USZ85o0mN/zqjyHp7x7OPyfZ2N0rohbncYR6VZyLEbKK4uRejB5TQ94GIY8hv4+GMZ/EHPOFi/OryO4uA86v36Mqv0rbP8KeVOzz4XyHMkvqZoR6e/lPStv7a0o5ORybL5SyyH+D0vp7Sl3eWF+blDffYFT+nlGh3S+E4/oz4e9x/zxXr4jjZ8X4z8HpkKbhRGbo9xekGTRzuL440cZ9vpDWOJbJIV9mbLzx81o4mkJNCi65YlygpG5CKySYEScdT1E6g3Vst9NyJrPr+TmYTkDLB2tGlVcqG2/N4/BlXLZNMRH5+swYBOqwdHi2UDSu79JB2Rmm5zc7hsf10KmLS826/KS+OlVHz3dJeRXpEMhZvvZm/JbVVwcpoCcdbNZdXAjZAXMLWM2t3moVA8VwlNYiyhMETYe1C1anbptORTfTxM2hlZg9k1Yrb5pJAYFfj7e1wnXN2eA6Ezrlvt8vcNiC7GraikV5/aay571VFvOupF2on7VM4GU+xQO3xOOsxJT7Ud85Ktyc5GZbojhGJXDfqk3ZzeFEoXqaKwk/zuj2JLmLhiPLXJwrZKwBtD3gEDBHr6VZyCc1iHGYX+3JQt+WLp9qswhUqT7X+IuYWZit81N7ld0lkE9XmYMVyaLe4aFL8N7UPx7Pqh5tt7uOJC4bWXVORUjJkcFkc4EsLFwpG1B5cSw4RszGqX5IeQNMuTskDtc6snBzD3Ls2pCoE6aho16ntiva2XEvkb26dkSx1ZlVWYZSzzpAlKWgvMoY3IJC99cydVlPO0nVvN3J3CuaZJ8IeebdS7vh4brZ6QFKohi3MmbarWKYDUXPAgbHqc0xYaU5bFfU6eodKIhfzs2KEBVpxwjXGCbijK3XuH1KzT4xC4FO8shiwm5Hslbk4ysbE4yethfdVghuwlE4xEc7HbD3lW3ciCyo0SOBbsJZns1Prdpr8qGnYhhr8i2SPEUtMH2b3IMqWEtdsjKAc5+iMFIuXnBeFEKuET6OssSGiXrpBqd76Fp9St56AwSLwFHbq8oX64kNXA7INGFxgKICWp2K55aD7tGDFSFAyzW6RL7WbFcGgAIm5i76YBa6IbzR9OOeOgwbUNxHeZPESeiH/ngsmlEcVVEeJr7u39+PbTGP/SEne14G49HxZ/sSHzhcUeVRGA2XG1Psk8P/h6IIdDEHH3hO4h+i83Dzfwvn99s/5owEaFAIAAA=",
					"FlightNumber" : null,
					"Locator" : null,
					"Class" : "O",
					"FamilyCode" : "PRO",
					"FareId" : "OPOTDOZ",
					"FareIdHandbag" : null,
					"ClassHandbag" : null,
					"FamilyCodeHandbag" : null,
					"Flights" : [ 
						"1765"
					],
					"Destination" : null
				}
			],
			"QuantitySeat" : 0,
			"Passengers" : [ 
				{
					"Name" : "ÉLIDA RAFAELLY",
					"LastName" : "LOBATO",
					"Birthday" : ISODate("1991-11-17T02:00:00.000Z"),
					"Gender" : "F",
					"DocumentType" : "CPF",
					"DocumentNumber" : "41129364860",
					"Ticket" : null,
					"Type" : "Adulto"
				}, 
				{
					"Name" : "LUCIRENE ",
					"LastName" : "LOBATO",
					"Birthday" : ISODate("1973-03-17T03:00:00.000Z"),
					"Gender" : "F",
					"DocumentType" : "CPF",
					"DocumentNumber" : "48920843368",
					"Ticket" : null,
					"Type" : "Adulto"
				}, 
				{
					"Name" : "GIOVANNA",
					"LastName" : "ALCARDE",
					"Birthday" : ISODate("2017-09-21T03:00:00.000Z"),
					"Gender" : "F",
					"DocumentType" : "CPF",
					"DocumentNumber" : "53528677813",
					"Ticket" : null,
					"Type" : "Criança"
				}
			],
			"HandbagLong" : false,
			"MultipleStretches" : false,
			"Installments" : 6,
			"InstallmentAmount" : "153.75",
			"Card" : "Visa ****7286",
			"installmentDescription" : "6x R$ 153,75",
			"ResponsibleName" : "RAFAELLY",
			"ResponsibleCountryCode" : "11",
			"ResponsibleAreaCode" : "11",
			"ResponsiblePhone" : "984786866"
		},
		"CancelationPolicies" : {
			"TaxaDeNaoComparecimento" : "1473.14",
			"InclusoNaoComparecimento" : false,
			"CalculoNaoComparecimento" : "100,00% Valor em reais não reembolsável",
			"TaxaDeCancelamento" : "1473.14",
			"InclusoCancelamento" : false,
			"CalculoCancelamento" : "100,00% Valor em reais não reembolsável",
			"ReembolsoCancelamento" : " ",
			"TaxaDeAlteracao" : "1473.14",
			"InclusoAlteracao" : false,
			"CalculoAlteracao" : "100,00% Valor em reais não reembolsável",
			"PoliceDescription" : "<div style=\"font-family: Roboto; color: #535252;float: left;width: 100%;display: block;\">\n    <span style=\"font-size: 18px; font-weight: bold;\">SAO PAULO SAO LUIZ</span><br/><span style=\"font-size: 18px; font-weight: bold;\">SAO LUIZ SAO PAULO</span>\n</div>\n<div style=\"margin-top: 30px;float: left;width: 100%;\">\n    <div style=\"font-family: Roboto; color: #535252;float: left; width: 100%;font-size: 18px;font-weight: bold;\">\n        Alteração de Data ou Itinerário\n    </div>\n    <span style=\"font-family: Roboto; color: #535252;float: left;width: 100%;font-size: 16px;margin-bottom: 30px;\">\n        A companhia aérea te cobrará  <b>3 diárias + R$ 633,14</b> como multa pela alteração\n    </span>\n\n    <div style=\"font-family: Roboto; color: #535252;float: left; width: 100%;font-size: 18px;font-weight: bold;\">\n        Cancelamento\n    </div>\n    <span style=\"font-family: Roboto; color: #535252;float: left;width: 100%;font-size: 16px;margin-bottom: 30px;\">\n        A companhia aérea te cobrará  <b>3 diárias + R$ 633,14</b> como multa pelo cancelamento\n    </span>\n\n    <div style=\"font-family: Roboto; color: #535252;float: left; width: 100%;font-size: 18px;font-weight: bold;\">\n        Não comparecimento\n    </div>\n    <span style=\"font-family: Roboto; color: #535252;float: left;width: 100%;font-size: 16px;margin-bottom: 30px;\">\n        A companhia aérea te cobrará  <b>3 diárias + R$ 633,14</b> como multa pelo não comparecimento<br>\n        Os custos informados se aplicam a cada\n        passageiro adulto e estão convertidos\n        à moeda local segundo o câmbio do dia. Os valores devem ser pagos á vista. As alterações e os\n        cancelamentos, em caso de serem permitidos, podem ser realizados até 24 horas antes do embarque e\n        durante um ano a partir da data da compra. As taxas de serviço a companhia cobrados na reserva\n        original não serão reembolsados.\n    </span>\n</div>\n<div style=\"font-family: Roboto; color: #535252;font-size: 18px;font-weight: bold;margin-top: 30px;width: 250px !important;\">\n    Tenho direito a desistência?\n</div>\n<span style=\"font-family: Roboto; color: #535252;float: left;width: 100%;font-size: 16px;margin-bottom: 30px;\">\n    Você deve levar em consideração que o transporte comercial no Brasil é regido por um\n    conjunto de normas, entre as quais se encontram a Resolução 400 da Agência Nacional de Aviação Civil\n    e a Resolução 4282 da Agência Nacional de Transportes Terrestres, as Normas Internacionais da IATA\n    (International Air Transport Association)(\"Normas Aeronáuticas\").Essas normas trazem regramento\n    específico sobre o Direito de Arrependimento, motivo pelo qual fica a cargo das companhias aéreas\n    estabelecer as condições de cancelamento, o que acontece sem a intervenção da FÉRIAS & CO. A\n    Resolução 400 da Agência Nacional de Aviação Civil estabelece que você poderá exercer o Direito de\n    Arrependimento desde que o faça no prazo de 24 (vinte e quatro) horas da realização da compra, sendo\n    certo que as companhias aéreas podem determinar em suas condições de cancelamento que esta regra\n    somente se aplica para compras feitas com antecedência igual ou superior a 07(sete) dias em relação\n    à data do embarque. Por isso, consulte as condições estabelecidas pela companhia aérea antes da\n    aquisição de seu bilhete aéreo.\n</span>",
			"TaxaDU" : "133.92",
			"TaxaDeEmbarque" : "205.5",
			"OutrasTaxas" : "0",
			"StatusPayment" : null,
			"HistoryPayment" : null
		},
		"Price" : {
			"PaymentOptionId" : 3,
			"PlanExtraPrice" : "922.5",
			"TotalPriceExtra" : "838.64",
			"PlanPointUsed" : 0,
			"PlanPointPriceUsed" : "0",
			"PlanPointUsedFormat" : "",
			"PlanDailyUsed" : 3,
			"AccumulatedPoint" : 0,
			"AccumulatedPointPrice" : "0",
			"AccumulatedPointFormat" : "",
			"Currency" : "BRL",
			"PlanMarkup" : "10",
			"PointPrice" : "0.06",
			"PlanoPeriodos" : [ 
				{
					"Periodo" : 1,
					"Diarias" : 3
				}
			]
		},
		"PricePolicies" : {
			"PointRefund" : 0,
			"PointRefundPrice" : "0",
			"ExtraRefund" : "289.36",
			"PlanDailyUsedRefund" : 0,
			"PointPenalty" : 0,
			"PointPenaltyPrice" : "0",
			"ExtraPenalty" : "633.14",
			"PlanDailyUsedPenalty" : 3,
			"PointAccumulation" : 0,
			"PointAccumulationPrice" : "0",
			"PointPrice" : "0.06"
		},
		"ActualStatus" : {
			"StatusId" : 2,
			"Name" : "Confirmado",
			"Description" : "Confirmado",
			"Date" : ISODate("2021-04-29T11:01:23.526Z"),
			"PreviousStatusId" : null
		},
		"StatusWooba" : "Emitida",
		"History" : [ 
			{
				"StatusId" : 2,
				"Name" : "Confirmado",
				"Description" : "Confirmado",
				"Date" : ISODate("2021-04-29T11:01:23.526Z"),
				"PreviousStatusId" : null
			}
		],
		"ActualCancelStatus" : null,
		"HistoryCancel" : null,
		"StatusPayment" : {
			"StatusPaymentId" : 2,
			"Name" : "Aprovado",
			"Card" : "Visa ****7286",
			"Date" : ISODate("2021-04-29T11:01:24.653Z"),
			"PreviousStatusId" : null
		},
		"HistoryPayment" : [],
		"Tickets" : [ 
			{
				"IsChildTicket" : false,
				"EmittedAt" : "/Date(-62135589600000-0300)/",
				"Number" : "1270002728633",
				"Passenger" : "ELIDA RAFAELLY LOBATO",
				"Status" : "Ativo"
			}
		],
		"CreatedAt" : ISODate("2021-04-29T14:00:28.315Z"),
		"UpdatedAt" : ISODate("2021-04-29T11:01:24.653Z"),
		"Air" : {
			"_id" : 8,
			"TotalPriceGeneral" : "1678.64",
			"Currency" : "BRL",
			"Rota" : "D",
			"FarePrice" : {
				"QuantityAdult" : 2,
				"QuantityChild" : 1,
				"QuantityBaby" : 0,
				"TotalPriceAdult" : "461.8",
				"TotalPriceChild" : "415.62",
				"TotalPriceBaby" : "0",
				"Exchange" : "1",
				"Coin" : "BRL",
				"Rate" : "110.06",
				"RateFuel" : "0",
				"RateFee" : "0",
				"RateEmbarkation" : "205.5",
				"RateService" : "133.92",
				"RateEmbarkationAdult" : "68.5",
				"RateEmbarkationChild" : "68.5",
				"RateEmbarkationBaby" : "0",
				"RateServiceAdult" : "46.18",
				"RateServiceChild" : "41.56",
				"RateServiceBaby" : "0"
			},
			"FarePriceHandbag" : null,
			"Stretches" : [ 
				{
					"_id" : 1,
					"Segment" : "I",
					"Description" : "Ida - 11 ago 2021 (Quarta)",
					"IataEmbarkation" : "GRU",
					"CityEmbarkation" : "SAO PAULO",
					"AirportEmbarkation" : "GRU - SAO PAULO",
					"IataDesbarkation" : "SLZ",
					"AirportDesbarkation" : "SLZ - SAO LUIZ",
					"CityDesbarkation" : "SAO LUIZ",
					"TravelId" : "TwgAAB+LCAAAAAAABACdVdl2okoU/RdeTbfMgm8MgijIrEivPBRQDIKiDCJm5d8vJHY6ues+5LZLl2eqvfc5UFUvCIfM8SdEQObYE8Ijc/QJkW7IPAZFDZ8QO6uROYWhb5YSIXOCHWozgMwRmUCeEC0/f9Qabw76cyh2snP5BivCuslO5QDy6wXRh1U2pw/LxNFS/cEyBgtHcewHyvzAMAdF52/fIWN9yuCfMq/Pg05QQ6EAdQ2HohFwDDigyuLhN4obQu+uUzagQOY0zf6ksd9B/QwrEJUV+NC+LR8aNbk6v6//1CU3KpctdzT/SBftr9oxYo5T79qXYwojcGosE/5VRs+pR4vLMYXR1Ghv2uPozGhy5C5Pf8b61Rm6fvT8ad780NcYNXRH1Edt/KNuNKXh33gbkvEekcAxK8buXpBNeRxHaFTlsRwhKxhnt3KMWDryOgh5G/L7aATrQSwJX7gkUEGnPw84v55HVaDK29/CHlTi4+F8h7LI6maEen36T0pn/9eUapakzRdKVZG/QWn/PaWhuvbXJlX3G4za3zNqnPeFcPQ/Ez6P++fhvSBbUJTjm4N3IcfxE1Xg3j88J2DFVnLKO2feZpP1AmMtIdgp142UXYgwcdayboRwudaWqr3Il7TS6yhxx/HOWmesvgSTKShD7dhS12jaMz5TuqHP10DOlADgGRdImFh2bH7uzeqy32fbbD2rWIqwLUIRVNVqlRClVOaaS+jWJhO1AHhsEoEmFTeprex6p1FpAsKrtOBtirNNyq3USbfdCSuQytNUaxiyO5y8aJuw5GrYOXumvcNyD233uJTtQhVyqTed3MrJdcGsIMvvFmZLLmpXm8pXQfHrnLhPmvuCZorENFubUdaom7IkSpdTNefU5NQZXppiG7Gx+2XSF9CXM6vBzlCAQWxV6yC2U6+RPXK/uZI7P6pYKxaaCNdv6oQgqYLUKgZTd9TpFOybJOIUUzbNRDOlaDndgJ2ozmZ8jrebRdyJqbcMZXzTr26Fe9W8to3uvZPXk1VfBamK35rotnclh73Ico7ylO+fnDXTJtsLAw9ECntzq7vTrbim0u0Rg/dlTgIebNIzs7DWuwPT7kVtxR76pvbMFePNwgwfTsdNE11ZZbYDdSXZV7G3HCEolVROgbSXDvRilTAg0/FbS/qwtu7BOmYlHfqryk5acD0oTl72/qSgw7zCDruZ7lwg8BqeXxpRqXbkAeOgfm+imbspa6o1vZQgO1SJF3hb6aa5MCTtpuiHZJ/iSZexsUsvNsP0eUatlkl6bVspyf1YTfnZ8LQuqyNVia4rki26JA9EyzErYhmYFBbUTTrbuiF6jicCShokFI2bjk3JWGDKrsPFzeYi0fju5lgnwS3KSzA7V+T9lK48fd1jqppNmphOXH1reOFukjXFQSu6XVISE+Ki+j6IOoc51a1T2lyPGiWWeLI0VY66JHnpnq/OonZWu8Aqrijvewbd2nBm0EmdBUbAdxz3dk8lwwZUInhqsjgLQQjGY9GCMazgKcyAAW7vx7ZyisFQUzwug/Ho+L19qQ8cqaxOMITD5SaUUZb8fyiaogjmA26bgQQeh4v/WzDPr/8A9ONCYk8IAAA=",
					"FlightNumber" : null,
					"Locator" : null,
					"Class" : "O",
					"FamilyCode" : "PRO",
					"FareId" : "OPOTDOZ",
					"FareIdHandbag" : "OPOTDSY",
					"ClassHandbag" : "O",
					"FamilyCodeHandbag" : "PLU",
					"Flights" : null,
					"Destination" : {
						"_id" : null,
						"CompanyDescription" : null,
						"HoraryEmbarkation" : ISODate("2021-08-11T13:25:00.000Z"),
						"IataEmbarkation" : "GRU",
						"HoraryDesbarkation" : ISODate("2021-08-11T16:50:00.000Z"),
						"IataDesbarkation" : "SLZ",
						"QtdStop" : 0,
						"Duration" : "0325",
						"HandbagSmall" : true,
						"HandbagMedium" : true,
						"HandbagLong" : false,
						"NumberFlight" : "1764",
						"Companies" : [ 
							{
								"_id" : "G3",
								"Name" : "Gol Linhas Aéreas",
								"Logo" : "https://conteudo-az.travellink.com.br/RDCViagens/Logomarcas/companhiaico5.gif"
							}
						],
						"Detail" : {
							"_id" : "I917543",
							"Flights" : [ 
								{
									"Logo" : "https://conteudo-az.travellink.com.br/RDCViagens/Logomarcas/companhiaico5.gif",
									"HoraryEmbarkation" : "2021-08-11T13:25:00",
									"IataEmbarkation" : "GRU",
									"CityEmbarkation" : "Guarulhos, SAO PAULO",
									"HoraryDesbarkation" : "2021-08-11T16:50:00",
									"CityDesbarkation" : "Marechal Cunha Machado, SAO LUIZ",
									"IataDesbarkation" : "SLZ",
									"NumberFlight" : "1764",
									"Class" : "Econômica",
									"Airplane" : "738",
									"Duration" : "03:25",
									"Company" : "Gol Linhas Aéreas",
									"CompanyDescription" : "Operador por Gol Linhas Aéreas",
									"AwaitTime" : "0000",
									"ExchangePlane" : false,
									"FareId" : "OPOTDOZ"
								}
							]
						}
					}
				}, 
				{
					"_id" : 2,
					"Segment" : "V",
					"Description" : "Volta - 21 ago 2021 (Sábado)",
					"IataEmbarkation" : "SLZ",
					"CityEmbarkation" : "SAO LUIZ",
					"AirportEmbarkation" : "SLZ - SAO LUIZ",
					"IataDesbarkation" : "GRU",
					"AirportDesbarkation" : "GRU - SAO PAULO",
					"CityDesbarkation" : "SAO PAULO",
					"TravelId" : "UAgAAB+LCAAAAAAABACdVdmSokgU/RderW4TEETfSJBF9kUEO/oBEBRBkE2Fivr3AcuuqYqYh5o2XG7e5ZxzL2bmK0IjS+wFYZAl+oJAZAleEO6OLGM/q6MXxEpqZEmg4GGJe2SJL4bcxEeWCI8jL4iSXj5y9ccC/ByS7eRSPGDZqG6SvBhAfr0i2lBl0dpQxo6WvBssfbAwgKE/APUDRW0Alo/3EDE/RbBPkbffg06/jpjMr+toSBoBR4ftV0k8fEZxg+t9aReNnyFLklz8JNE/Tu0SVf6+qPwP7U7x1Kjw1eW9/lOXtPahlx6l8+ZmbML6qhCdL3HiXbswhtA5ToxpzNc0DF2izxaFRwhFR1ttz48acqxhivzfsX5dDF0/e/40bzj0NXp1zWa1USZ85o0mN/zqjyHp7x7OPyfZ2N0rohbncYR6VZyLEbKK4uRejB5TQ94GIY8hv4+GMZ/EHPOFi/OryO4uA86v36Mqv0rbP8KeVOzz4XyHMkvqZoR6e/lPStv7a0o5ORybL5SyyH+D0vp7Sl3eWF+blDffYFT+nlGh3S+E4/oz4e9x/zxXr4jjZ8X4z8HpkKbhRGbo9xekGTRzuL440cZ9vpDWOJbJIV9mbLzx81o4mkJNCi65YlygpG5CKySYEScdT1E6g3Vst9NyJrPr+TmYTkDLB2tGlVcqG2/N4/BlXLZNMRH5+swYBOqwdHi2UDSu79JB2Rmm5zc7hsf10KmLS826/KS+OlVHz3dJeRXpEMhZvvZm/JbVVwcpoCcdbNZdXAjZAXMLWM2t3moVA8VwlNYiyhMETYe1C1anbptORTfTxM2hlZg9k1Yrb5pJAYFfj7e1wnXN2eA6Ezrlvt8vcNiC7GraikV5/aay571VFvOupF2on7VM4GU+xQO3xOOsxJT7Ud85Ktyc5GZbojhGJXDfqk3ZzeFEoXqaKwk/zuj2JLmLhiPLXJwrZKwBtD3gEDBHr6VZyCc1iHGYX+3JQt+WLp9qswhUqT7X+IuYWZit81N7ld0lkE9XmYMVyaLe4aFL8N7UPx7Pqh5tt7uOJC4bWXVORUjJkcFkc4EsLFwpG1B5cSw4RszGqX5IeQNMuTskDtc6snBzD3Ls2pCoE6aho16ntiva2XEvkb26dkSx1ZlVWYZSzzpAlKWgvMoY3IJC99cydVlPO0nVvN3J3CuaZJ8IeebdS7vh4brZ6QFKohi3MmbarWKYDUXPAgbHqc0xYaU5bFfU6eodKIhfzs2KEBVpxwjXGCbijK3XuH1KzT4xC4FO8shiwm5Hslbk4ysbE4yethfdVghuwlE4xEc7HbD3lW3ciCyo0SOBbsJZns1Prdpr8qGnYhhr8i2SPEUtMH2b3IMqWEtdsjKAc5+iMFIuXnBeFEKuET6OssSGiXrpBqd76Fp9St56AwSLwFHbq8oX64kNXA7INGFxgKICWp2K55aD7tGDFSFAyzW6RL7WbFcGgAIm5i76YBa6IbzR9OOeOgwbUNxHeZPESeiH/ngsmlEcVVEeJr7u39+PbTGP/SEne14G49HxZ/sSHzhcUeVRGA2XG1Psk8P/h6IIdDEHH3hO4h+i83Dzfwvn99s/5owEaFAIAAA=",
					"FlightNumber" : null,
					"Locator" : null,
					"Class" : "O",
					"FamilyCode" : "PRO",
					"FareId" : "OPOTDOZ",
					"FareIdHandbag" : "OPOTDSY",
					"ClassHandbag" : "O",
					"FamilyCodeHandbag" : "PLU",
					"Flights" : null,
					"Destination" : {
						"_id" : null,
						"CompanyDescription" : null,
						"HoraryEmbarkation" : ISODate("2021-08-21T17:35:00.000Z"),
						"IataEmbarkation" : "SLZ",
						"HoraryDesbarkation" : ISODate("2021-08-21T21:10:00.000Z"),
						"IataDesbarkation" : "GRU",
						"QtdStop" : 0,
						"Duration" : "0335",
						"HandbagSmall" : true,
						"HandbagMedium" : true,
						"HandbagLong" : false,
						"NumberFlight" : "1765",
						"Companies" : [ 
							{
								"_id" : "G3",
								"Name" : "Gol Linhas Aéreas",
								"Logo" : "https://conteudo-az.travellink.com.br/RDCViagens/Logomarcas/companhiaico5.gif"
							}
						],
						"Detail" : {
							"_id" : "V4128807",
							"Flights" : [ 
								{
									"Logo" : "https://conteudo-az.travellink.com.br/RDCViagens/Logomarcas/companhiaico5.gif",
									"HoraryEmbarkation" : "2021-08-21T17:35:00",
									"IataEmbarkation" : "SLZ",
									"CityEmbarkation" : "Marechal Cunha Machado, SAO LUIZ",
									"HoraryDesbarkation" : "2021-08-21T21:10:00",
									"CityDesbarkation" : "Guarulhos, SAO PAULO",
									"IataDesbarkation" : "GRU",
									"NumberFlight" : "1765",
									"Class" : "Econômica",
									"Airplane" : "738",
									"Duration" : "03:35",
									"Company" : "Gol Linhas Aéreas",
									"CompanyDescription" : "Operador por Gol Linhas Aéreas",
									"AwaitTime" : "0000",
									"ExchangePlane" : false,
									"FareId" : "OPOTDOZ"
								}
							]
						}
					}
				}
			]
		}
	}
]);
