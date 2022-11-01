/* eslint-disable */
db.getSiblingDB('financeiro').getCollection('fatura_fornecedor_nota_credito').insert([
    {
        _id: UUID('14d8419b-fda2-4bbb-8dce-88911e58e56c'),
        metadado: {
            ativo: true,
            dataCriacao: ISODate('2021-04-06T03:30:16.384Z'),
            dataAtualizacao: ISODate('2021-04-06T03:41:56.378Z'),
            dataDelecao: null
        },
        numero: 'res',
        valor: '1000',
        fornecedor: {
            razao: 'teste',
            cnpj: '50842576000174'
        },
        movimentos: [
            {
                valor: '1000',
                tipo: 2,
                movimentacao: ISODate('2021-04-06T03:41:56.367Z'),
                fatura: {
                    _id: UUID('3fa85f64-5717-4562-b3fc-2c963f66afa6'),
                    numero: 'fat'
                },
                saldo: '0'
            }
        ],
        fatura: {
            _id: UUID('3fa85f64-5717-4562-b3fc-2c963f66afa6'),
            numero: 'fat'
        },
        conciliada: true,
        emissao: ISODate('2021-04-06T03:30:16.332Z'),
        situacaoRecebimento: 1
    },
    {
        _id: UUID('14d8419b-fda2-4bbb-8dce-88911e58f57d'),
        metadado: {
            ativo: true,
            dataCriacao: ISODate('2021-03-06T03:30:16.384Z'),
            dataAtualizacao: ISODate('2021-03-06T03:41:56.378Z'),
            dataDelecao: null
        },
        numero: 'MR-1-1',
        valor: '500',
        fornecedor: {
            razao: 'Marcelo e Ruan Locações de Automóveis ME',
            cnpj: '91.837.873/0001-09'
        },
        movimentos: [
            {
                valor: '500',
                tipo: 0,
                movimentacao: ISODate('2021-03-06T03:41:56.367Z'),
                fatura: {
                    _id: UUID('3fa85f64-5717-4562-b3fc-2c963f77bab7'),
                    numero: 'Estorno-1'
                },
                saldo: '0'
            }
        ],
        fatura: {
            _id: UUID('3fa85f64-5717-4562-b3fc-2c963f77bab7'),
            numero: 'MR-1'
        },
        conciliada: false,
        emissao: ISODate('2021-03-06T03:30:16.332Z'),
        situacaoRecebimento: 3
    }
]);