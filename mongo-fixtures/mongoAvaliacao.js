/* eslint-disable */
db.getSiblingDB('reviews').getCollection('reviews').insert([
    {
        "_id": ObjectId("5f4529a9136bbf3b61812e3a"),
        "fornecedorTipo": NumberInt(2),
        "servicoId": NumberInt(26554),
        "servicoTipo": NumberInt(1),
        "usuarioId": "Gabi Silveira",
        "UrlFotoAutor": "https://lh3.googleusercontent.com/a-/AOh14GhrxfWJKjML4eXbLRpiNZ0tNRR9iGiV-wd82X3X4Io=s128-c0x00000000-cc-rp-mo-ba3",
        "changeIn": ISODate("2020-08-25T15:09:28.974Z"),
        "createAt": ISODate("2020-08-25T15:09:28.974Z"),
        "descricaoExperiencia": "Estive entre os dias 14 e 17 de agosto hospedada no hotel! Funcionários super atenciosos, café da manhã delicioso! Porém tentei achar o e-mail do hotel no site sem sucesso.",
        "fornecedorCodigoLocal": "ChIJA2lex2dXzpQRxLkljPvzW2o",
        "id": UUID("c03e6d5e-20c4-4114-a579-bd114a817aaa"),
        "language": "pt-Br",
        "motivosViagem": [],
        "nomeAutor": "Gabi Silveira",
        "notaExibicao": "10 / 10",
        "notaExperiencia": NumberDecimal("5"),
        "notaGeral": NumberDecimal("5"),
        "notasAmenidades": [],
        "outrasNotas": [],
        "reservaId": null
    }
])

/* eslint-disable */
db.getSiblingDB('reviews').getCollection('reviews').insert([
    {
        "_id": ObjectId("5f4529a9136bbf3b61812e3b"),
        "fornecedorTipo": NumberInt(2),
        "servicoId": NumberInt(26602),
        "servicoTipo": NumberInt(1),
        "usuarioId": "Vanessa Ribeiro",
        "UrlFotoAutor": "https://lh3.googleusercontent.com/a-/AOh14GigtjUS4o6IzPW2PDTDA2iob0aLOHlR5AP80tb4=s128-c0x00000000-cc-rp-mo-ba3",
        "changeIn": ISODate("2020-08-25T15:09:28.972Z"),
        "createAt": ISODate("2020-08-25T15:09:28.972Z"),
        "descricaoExperiencia": "Não estive hospedada, fui apenas para um evento, mas achei elegante, decoração moderna e contemporânea, localização excelente.",
        "fornecedorCodigoLocal": "ChIJF8ptnshZzpQRgHE6atIJJrY",
        "id": UUID("c21805de-740d-4b3e-b91d-e7beb55fefa6"),
        "language": "pt-Br",
        "motivosViagem": [],
        "nomeAutor": "Vanessa Ribeiro",
        "notaExibicao": "10 / 10",
        "notaExperiencia": NumberDecimal("5"),
        "notaGeral": NumberDecimal("5"),
        "notasAmenidades": [],
        "outrasNotas": [],
        "reservaId": null
    }
])

/* eslint-disable */
db.getSiblingDB('reviews').getCollection('AvaliacaoServico').insert([
    {
        "_id": ObjectId("5f4529a951aa8d0001f386f6"),
        "id": UUID("800c6838-59c2-4d95-b2ff-d4dd9721c133"),
        "servicoId": NumberInt(26602),
        "servicoTipo": NumberInt(1),
        "totalAvaliacoes": NumberInt(7000),
        "notaMedia": NumberDecimal("4.7"),
        "notaMediaExibicao": "9.4/10",
        "notaDescricao": "Muito Bom",
        "avaliacaoFornecedores": [
            {
                "fornecedorId": 2,
                "servicoId": "ChIJF8ptnshZzpQRgHE6atIJJrY",
                "nome": "Google",
                "nota": NumberDecimal("4.7"),
                "qtdNotas": NumberInt(7720),
                "indiceReajuste": NumberDecimal("1"),
                "representacaoAvaliacoes": NumberDecimal("100"),
                "pesoNotas": NumberDecimal("7720")
            }
        ],
        "dataAtualizacao": ISODate("2020-07-19T15:09:29.130Z")
    }
])

/* eslint-disable */
db.getSiblingDB('reviews').getCollection('AvaliacaoServico').insert([
    {
        "_id": ObjectId("5f4529a951aa8d0001f386f7"),
        "id": UUID("0c1f1a2b-5ab3-40f1-af16-f1496ef296b8"),
        "servicoId": NumberInt(40963),
        "servicoTipo": NumberInt(1),
        "totalAvaliacoes": NumberInt(3308),
        "notaMedia": NumberDecimal("4.4"),
        "notaMediaExibicao": "8.8/10",
        "notaDescricao": "Bom",
        "avaliacaoFornecedores": [
            {
                "fornecedorId": 2,
                "servicoId": "ChIJgfeKBJZZzpQRmU1Kkp7QVpg",
                "nome": "Google",
                "nota": NumberDecimal("4.4"),
                "qtdNotas": NumberInt(3308),
                "indiceReajuste": NumberDecimal("1"),
                "representacaoAvaliacoes": NumberDecimal("100"),
                "pesoNotas": NumberDecimal("3308")
            }
        ],
        "dataAtualizacao": ISODate("2020-08-25T15:09:29.130Z")
    }
])

/* eslint-disable */
db.getSiblingDB('reviews').getCollection('ProviderReviewsConfiguration').insert([
    {
        "_id": NumberInt(1),
        "fornecedorId": NumberInt(1),
        "nome": "Ferias&CO",
        "indiceReajuste": NumberDecimal("20.0")
    }
])

/* eslint-disable */
db.getSiblingDB('reviews').getCollection('ProviderReviewsConfiguration').insert([
    {
        "_id": NumberInt(2),
        "fornecedorId": NumberInt(2),
        "nome": "Google",
        "indiceReajuste": NumberDecimal("1.0")
    }
])
