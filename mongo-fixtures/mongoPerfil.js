/* eslint-disable */
db.getSiblingDB('perfil').getCollection('perfis').insert([
    {
    "_id" : ObjectId("5de19c492b992500012929ec"),
    "id" : UUID("7f9aabe5-9bd9-408b-a45b-70f5dab6ae4a"),
    "nome" : "lead",
    "ativo" : true,
    "dataCriacao" : ISODate("2019-11-29T22:31:37.358Z"),
    "dataAtualizacao" : null,
    "dataDelecao" : null,
    "permissoes" : [ 
        {
            "recurso" : {
                "nome" : "Hotsite",
                "frn" : "frn:hotsite::*"
            },
            "visualizar" : true,
            "inserir" : false,
            "editar" : true,
            "deletar" : false
        }
    ]
},
{
    "_id" : ObjectId("5de19c492b992500012929ed"),
    "id" : UUID("18046ba4-7a43-42c0-a612-e66a7d135612"),
    "nome" : "rh",
    "ativo" : true,
    "dataCriacao" : ISODate("2019-11-29T22:31:37.573Z"),
    "dataAtualizacao" : null,
    "dataDelecao" : null,
    "permissoes" : [ 
        {
            "recurso" : {
                "nome" : "Portal do RH",
                "frn" : "frn:rh::*"
            },
            "visualizar" : true,
            "inserir" : false,
            "editar" : true,
            "deletar" : false
        }
    ]
},
{
    "_id" : ObjectId("5de19c492b992500012929ee"),
    "id" : UUID("01fdfdf2-c0b5-4326-ad8a-ab0806496c1f"),
    "nome" : "colaborador",
    "ativo" : true,
    "dataCriacao" : ISODate("2019-11-29T22:31:37.741Z"),
    "dataAtualizacao" : null,
    "dataDelecao" : null,
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
},
{
    "_id" : ObjectId("5de19c492b992500012929ef"),
    "id" : UUID("ddd98943-58ac-49db-b6f6-352529f79d79"),
    "nome" : "backoffice",
    "ativo" : true,
    "dataCriacao" : ISODate("2019-11-29T22:31:37.909Z"),
    "dataAtualizacao" : null,
    "dataDelecao" : null,
    "permissoes" : [ 
        {
            "recurso" : {
                "nome" : "Backoffice",
                "frn" : "frn:backoffice::*"
            },
            "visualizar" : true,
            "inserir" : true,
            "editar" : true,
            "deletar" : true
        }
    ]
},
{
    "_id" : ObjectId("5e04f9a41a3e7200012bd4f2"),
    "id" : UUID("d0771292-5abd-401a-a1c8-6db379b9c24d"),
    "nome" : "Petra Bednar",
    "ativo" : true,
    "dataCriacao" : ISODate("2019-12-26T18:19:16.593Z"),
    "dataAtualizacao" : null,
    "dataDelecao" : ISODate("2019-12-26T18:19:18.096Z"),
    "permissoes" : [ 
        {
            "recurso" : {
                "nome" : "Usuario",
                "frn" : "frn:hotsite::usuario"
            },
            "visualizar" : true,
            "inserir" : true,
            "editar" : true,
            "deletar" : true
        }, 
        {
            "recurso" : {
                "nome" : "Reserva",
                "frn" : "frn:hotsite::booking/vitrine"
            },
            "visualizar" : true,
            "inserir" : true,
            "editar" : false,
            "deletar" : true
        }
    ]
}      
])