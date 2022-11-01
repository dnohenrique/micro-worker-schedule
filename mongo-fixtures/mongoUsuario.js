/* eslint-disable */
db.getSiblingDB('usuario').getCollection('usuarios').insert([
    {
        "_id": ObjectId("5dee84675b109b0001f9ae34"),
        "id": UUID("b2687742-0b91-4602-8055-4a7c85f212a2"),
        "nome": "Thanos Esmaga",
        "email": "qa@ferias.co",
        "cpf": "64949575015",
        "documentoProprietario": [
            {
                "Tipo": "CNPJ",
                "Numero": "79918271000180"
            }
        ],
        "ativo": true,
        "dataCriacao": ISODate("2019-12-09T17:29:11.925Z"),
        "dataAtualizacao": ISODate("2020-05-14T14:04:01.756Z"),
        "dataDelecao": null,
        "usuario": "64949575015",
        "perfis": [
            {
                "_id": UUID("23bcebd9-4011-4f05-91c8-fb329ba9aac1"),
                "nome": "rh",
                "permissoes": [
                    {
                        "recurso": {
                            "nome": "Rh",
                            "frn": "frn:rh::*"
                        },
                        "visualizar": true,
                        "inserir": true,
                        "editar": true,
                        "deletar": true
                    }
                ]
            },
            {
                "_id": UUID("23bcebd9-4011-4f05-91c8-fb329ba9aac1"),
                "nome": "colaborador",
                "permissoes": [
                    {
                        "recurso": {
                            "nome": "colaborador",
                            "frn": "frn:colaborador::*"
                        },
                        "visualizar": true,
                        "inserir": true,
                        "editar": true,
                        "deletar": true
                    }
                ]
            },
            {
                "_id": UUID("952e24b5-5347-4164-b081-bb32062c4444"),
                "nome": "backoffice",
                "permissoes": [
                    {
                        "recurso": {
                            "nome": "Backoffice",
                            "frn": "frn:backoffice::*"
                        },
                        "visualizar": true,
                        "inserir": true,
                        "editar": true,
                        "deletar": true
                    }
                ]
            }
        ],
        "senha": "DF0B8E1796977A372E589710634B11046C9D0F6DCC1FFF7DAC8F30C6C01A65EC5A3A844B068EE87A2A02A31F7294466AB664B7CFFE07A7CB5790C59275139BF9", /* Senha123 */
        "forcarAtualizarSenha": false,
        "dataConfirmacaoEmail": ISODate("2019-12-09T17:49:30.595Z")
    },
    {
        "_id": ObjectId("5e971d5e9adb0e0001318f0c"),
        "id": UUID("ea233d21-b79e-4557-8471-a541ca6bffe7"),
        "nome": "Almir Teste QA",
        "email": "qa@ferias.co",
        "cpf": "33829117523",
        "documentoProprietario": [
            {
                "Tipo": "CNPJ",
                "Numero": "04020662000184"
            }
        ],
        "ativo": true,
        "dataCriacao": ISODate("2019-12-09T17:29:11.925Z"),
        "dataAtualizacao": ISODate("2020-05-14T14:04:01.756Z"),
        "dataDelecao": null,
        "usuario": "33829117523",
        "perfis": [
            {
                "_id": UUID("7f9aabe5-9bd9-408b-a45b-70f5dab6ae4a"),
                "nome": "rh",
                "permissoes": [
                    {
                        "recurso": {
                            "nome": "Rh",
                            "frn": "frn:rh::*"
                        },
                        "visualizar": true,
                        "inserir": true,
                        "editar": true,
                        "deletar": true
                    }
                ]
            },
            {
                "_id": UUID("7f9aabe5-9bd9-408b-a45b-70f5dab6ae4a"),
                "nome": "lead",
                "permissoes": [
                    {
                        "recurso": {
                            "nome": "Hotsite",
                            "frn": "frn:hotsite::*"
                        },
                        "visualizar": true,
                        "inserir": true,
                        "editar": true,
                        "deletar": true
                    }
                ]
            },
            {
                "_id": UUID("7f9aabe5-9bd9-408b-a45b-70f5dab6ae4a"),
                "nome": "backoffice",
                "permissoes": [
                    {
                        "recurso": {
                            "nome": "Backoffice",
                            "frn": "frn:backoffice::*"
                        },
                        "visualizar": true,
                        "inserir": true,
                        "editar": true,
                        "deletar": true
                    }
                ]
            }
        ],
        "senha": "6A732039ED5D199EB94ECE9F97C9E10A552976A57B264443F4A360A4D82B71E04FF278C9C634204A0EB00480FF58CB2EE93BFF0127E00D017473974D8C34D995",
        "forcarAtualizarSenha": false,
        "dataConfirmacaoEmail": null
    }
])

db.getSiblingDB('perfil').getCollection('perfis').insert([
    {
        "_id": ObjectId("5de7d198f4f7ea00014f592f"),
        "id": UUID("1b60cc12-e782-483f-8871-1b50064e00a0"),
        "nome": "lead",
        "ativo": true,
        "dataCriacao": ISODate("2019-12-04T15:32:40.806Z"),
        "dataAtualizacao": null,
        "dataDelecao": null,
        "permissoes": [
            {
                "recurso": {
                    "nome": "Hotsite",
                    "frn": "frn:hotsite::*"
                },
                "visualizar": true,
                "inserir": false,
                "editar": true,
                "deletar": false
            }
        ]
    },
    {
        "_id": ObjectId("5de7d199f4f7ea00014f5930"),
        "id": UUID("210ce4a4-cf98-4ef7-9508-2e2a1976344b"),
        "nome": "rh",
        "ativo": true,
        "dataCriacao": ISODate("2019-12-04T15:32:41.032Z"),
        "dataAtualizacao": null,
        "dataDelecao": null,
        "permissoes": [
            {
                "recurso": {
                    "nome": "Portal do RH",
                    "frn": "frn:rh::*"
                },
                "visualizar": true,
                "inserir": false,
                "editar": true,
                "deletar": false
            }
        ]
    },
    {
        "_id": ObjectId("5de7d199f4f7ea00014f5931"),
        "id": UUID("888cbaac-814c-4b7f-9882-9752a5bc0bd9"),
        "nome": "colaborador",
        "ativo": true,
        "dataCriacao": ISODate("2019-12-04T15:32:41.087Z"),
        "dataAtualizacao": null,
        "dataDelecao": null,
        "permissoes": [
            {
                "recurso": {
                    "nome": "Portal do Colaborador",
                    "frn": "frn:colaborador::*"
                },
                "visualizar": true,
                "inserir": false,
                "editar": true,
                "deletar": false
            }
        ]
    },
    {
        "_id": ObjectId("5de7d199f4f7ea00014f5932"),
        "id": UUID("952e24b5-5347-4164-b081-bb32062c4444"),
        "nome": "backoffice",
        "ativo": true,
        "dataCriacao": ISODate("2019-12-04T15:32:41.751Z"),
        "dataAtualizacao": null,
        "dataDelecao": null,
        "permissoes": [
            {
                "recurso": {
                    "nome": "Backoffice",
                    "frn": "frn:backoffice::*"
                },
                "visualizar": true,
                "inserir": true,
                "editar": true,
                "deletar": true
            }
        ]
    },
    {
        "_id": ObjectId("5ee78e60d20046485aea69d0"),
        "id": UUID("c37dc92d-30fa-48b4-9119-d5d848fa8dcd"),
        "nome": "sistema",
        "ativo": true,
        "dataCriacao": ISODate("2020-06-15T15:06:08.570Z"),
        "dataAtualizacao": null,
        "dataDelecao": null,
        "permissoes": [
            {
                "recurso": {
                    "nome": "sistema",
                    "frn": "frn:*:*:*"
                },
                "visualizar": false,
                "inserir": false,
                "editar": false,
                "deletar": false
            }
        ]
    },
	{
    "_id" : ObjectId("60999481ace7470001d80563"),
		"id" : UUID("fa3f951a-83f2-457d-82ce-37c74d7ce609"),
		"nome" : "Osvaldo Isaac Castro TESTE",
		"email" : "osvaldoisaac.teste@yopmail.com",
		"cpf" : "77564109041",
		"documentoProprietario" : [ 
			{
				"Tipo" : "CNPJ",
				"Numero" : "11479680000194"
			}
		],
		"ativo" : true,
		"dataCriacao" : ISODate("2021-05-10T20:16:01.335Z"),
		"dataAtualizacao" : ISODate("2021-05-10T20:33:24.966Z"),
		"dataDelecao" : null,
		"dataConfirmacaoEmail" : ISODate("2021-05-10T20:33:24.966Z"),
		"usuario" : "77564109041",
		"perfis" : [ 
			{
				"_id" : UUID("888cbaac-814c-4b7f-9882-9752a5bc0bd9"),
				"nome" : "colaborador",
				"permissoes" : [ 
					{
						"recurso" : {
							"nome" : "Portal do Colaborador",
							"frn" : "frn:colaborador::*"
						},
						"visualizar" : true,
						"inserir" : false,
						"editar" : true,
						"deletar" : false
					}
				]
			}
		],
		"senha" : "12A10E9EDE76C8E120658434EA7148F01AA639DCAD3131F8A927D96B74C54C27BB24B5C240BB3AFA9E86F33F7C82046A373D20AF4412742823B35302B132E0C3",
		"forcarAtualizarSenha" : false
	},
	{
		"_id" : ObjectId("60b663d31c86803634ff84f5"),
		"id" : UUID("204f127f-a956-4ea9-9315-5ddd8b8b55f1"),
		"nome" : "David Teste Indicador",
		"email" : "davidteste.indicador@gmail.com",
		"cpf" : "67881584017",
		"documentoProprietario" : [ 
			{
				"Tipo" : "CNPJ",
				"Numero" : "34008403000107"
			}
		],
		"ativo" : true,
		"dataCriacao" : ISODate("2019-11-30T00:33:44.700Z"),
		"dataAtualizacao" : ISODate("2019-11-30T01:52:46.112Z"),
		"dataDelecao" : null,
		"usuario" : "67881584017",
		"perfis" : [ 
			{
				"_id" : UUID("d6de232e-49ed-4ec0-83a1-fd4a82639127"),
				"nome" : "colaborador",
				"permissoes" : [ 
					{
						"recurso" : {
							"nome" : "Colaboradores",
							"frn" : "frn:hotsite::colaborador"
						},
						"visualizar" : true,
						"inserir" : false,
						"editar" : true,
						"deletar" : false
					}
				]
			}
		],
		"senha" : "C7130AF0783B7813C639358F04960AB0F1FA404292CE34DEFB1A336383DEE4295FA7BAE3DB232E0BB434927FFC0B49C58CD14D51EA5F8B1E362278BEC38BCB06",
		"forcarAtualizarSenha" : false,
		"dataConfirmacaoEmail" : ISODate("2019-11-30T08:33:44.700Z")
	}
])
