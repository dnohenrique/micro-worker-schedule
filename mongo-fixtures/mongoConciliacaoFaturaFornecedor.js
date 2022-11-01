/* eslint-disable */
db.getSiblingDB('financeiro').getCollection('conciliacao_fatura_fornecedor').insert([
    {
        _id: UUID('ef725090-1fe3-431d-b1de-a1ef82441e33'),
        metadado: {
            ativo: true,
            dataCriacao: ISODate('2021-03-02T23:33:58.428Z'),
            dataAtualizacao: ISODate('2021-03-02T23:52:32.475Z'),
            dataDelecao: null
        },
        pagamentoLiberado: false,
        fatura: {
            _id: UUID('3fa85f64-5717-4562-b3fc-2c963f66afa6'),
            numero: 'fat01',
            fornecedor: {
                razao: 'Augusto e Felipe Telecomunicações Ltda',
                cnpj: '07158396000149'
            },
            entrada: ISODate('2021-03-02T23:32:46.376Z'),
            emissao: ISODate('2021-03-02T23:32:46.376Z'),
            vencimento: ISODate('2021-04-02T23:32:46.376Z'),
            valor: '2800'
        },
        reservas: [
            {
                numero: 'res01',
                checkIn: ISODate('2021-03-02T23:32:46.376Z'),
                checkOut: ISODate('2021-03-03T23:32:46.376Z'),
                movimentoReserva: {
                    pedido: 'ped01',
                    valor: '1300'
                },
                faturaFornecedorValor: '1300',
                notaCredito: null,
                conciliada: false,
                desconciliadaManualmente: false
            },
            {
                numero: 'res02',
                checkIn: ISODate('2021-03-02T23:32:46.376Z'),
                checkOut: ISODate('2021-03-03T23:32:46.376Z'),
                movimentoReserva: {
                    pedido: 'ped01',
                    valor: '700'
                },
                faturaFornecedorValor: '700',
                notaCredito: null,
                conciliada: false,
                desconciliadaManualmente: false
            },
            {
                numero: 'res03',
                checkIn: ISODate('2021-03-02T23:32:46.376Z'),
                checkOut: ISODate('2021-03-03T23:32:46.376Z'),
                movimentoReserva: {
                    pedido: 'ped02',
                    valor: '700'
                },
                faturaFornecedorValor: '800',
                notaCredito: null,
                conciliada: false,
                desconciliadaManualmente: false
            }
        ]
    }
]);