/* eslint-disable */
db.getSiblingDB('webhookbilling').getCollection('events').insert([
    {
        "_id" : ObjectId("5e738cb78441081a9b0f0c23"),
        "type" : "bill_paid",
        "createdAt" : ISODate("2020-03-19T15:16:07.032Z"),
        "data" : {
            "bill" : {
                "billId" : NumberLong(3049044),
                "code" : null,
                "amount" : "407.14",
                "installments" : 1,
                "status" : "paid",
                "seenAt" : null,
                "billingAt" : null,
                "dueAt" : "2020-03-19T23:59:59.000-03:00",
                "url" : "https://sandbox-app.vindi.com.br/customer/bills/3049044?token=6ccd488d-e372-4543-b9f2-c03e62300bc3",
                "createdAt" : ISODate("2020-03-19T15:15:13.000Z"),
                "updatedAt" : ISODate("2020-03-19T15:16:06.000Z"),
                "billItems" : [ 
                    {
                        "billItemId" : NumberLong(8655274),
                        "amount" : "407.14",
                        "quantity" : null,
                        "pricingRangeId" : null,
                        "description" : "",
                        "pricingSchema" : null,
                        "product" : {
                            "productId" : NumberLong(26430),
                            "name" : "Cobrança Extra Por Cartão De Crédito",
                            "code" : "extra_reserva"
                        },
                        "productItem" : null,
                        "discount" : null
                    }
                ],
                "charges" : [ 
                    {
                        "chargeId" : NumberLong(2997557),
                        "amount" : "407.14",
                        "status" : "paid",
                        "dueAt" : "2020-03-19T23:59:59.000-03:00",
                        "paidAt" : ISODate("2020-03-19T15:16:06.000Z"),
                        "installments" : 1,
                        "attemptCount" : 1,
                        "nextAttempt" : null,
                        "printUrl" : null,
                        "createdAt" : ISODate("2020-03-19T15:15:13.000Z"),
                        "updatedAt" : ISODate("2020-03-19T15:16:06.000Z"),
                        "bill" : null,
                        "lastTransaction" : {
                            "transactionId" : NumberLong(1894081),
                            "transactionType" : "capture",
                            "status" : "success",
                            "amount" : "407.14",
                            "installments" : null,
                            "gatewayMessage" : null,
                            "gatewayResponseCode" : null,
                            "gatewayAuthorization" : null,
                            "gatewayTransactionId" : null,
                            "gatewayResponseFields" : {
                                "nsu" : null,
                                "originalTransactionId" : null,
                                "transactionId" : null,
                                "cardBrand" : null,
                                "auth" : null,
                                "ref" : null,
                                "date" : null,
                                "installments" : null,
                                "orderId" : null,
                                "amount" : null,
                                "barcode" : null,
                                "typableBarcode" : null
                            },
                            "fraudDetectorScore" : null,
                            "fraudDetectorStatus" : null,
                            "fraudDetectorId" : null,
                            "createdAt" : ISODate("2020-03-19T15:16:06.000Z"),
                            "gateway" : null,
                            "paymentProfile" : null
                        },
                        "paymentMethod" : {
                            "paymentMethodId" : NumberLong(3156),
                            "publicName" : "Cartão de crédito",
                            "name" : "Cartão de crédito Recorrência",
                            "code" : "credit_card",
                            "type" : "PaymentMethod::CreditCard"
                        }
                    }
                ],
                "customer" : {
                    "customerId" : NumberLong(224510),
                    "name" : "Taíssa Cavalcanti QA",
                    "email" : "osmar.vieira@ferias.co",
                    "code" : "44283800384"
                },
                "period" : null,
                "subscription" : null,
                "metaData" : null,
                "paymentProfile" : null,
                "paymentCondition" : null
            }
        },
        "dataCriacao" : ISODate("2020-03-19T15:16:07.605Z"),
        "dataAtualizacao" : null,
        "dataDelecao" : null
    },
    {
        "_id" : ObjectId("5e8cefa38441081a9b8544d8"),
        "type" : "bill_paid",
        "createdAt" : ISODate("2020-04-07T21:24:50.992Z"),
        "data" : {
            "bill" : {
                "billId" : NumberLong(3091424),
                "code" : null,
                "amount" : "265.82",
                "installments" : 2,
                "status" : "paid",
                "seenAt" : null,
                "billingAt" : null,
                "dueAt" : "2020-04-07T23:59:59.000-03:00",
                "url" : "https://sandbox-app.vindi.com.br/customer/bills/3091424?token=04db7b9e-aa7c-43a6-ae7a-8790f4aa2232",
                "createdAt" : ISODate("2020-04-07T21:24:29.000Z"),
                "updatedAt" : ISODate("2020-04-07T21:24:50.000Z"),
                "billItems" : [ 
                    {
                        "billItemId" : NumberLong(8714729),
                        "amount" : "265.82",
                        "quantity" : null,
                        "pricingRangeId" : null,
                        "description" : "",
                        "pricingSchema" : null,
                        "product" : {
                            "productId" : NumberLong(26430),
                            "name" : "Cobrança Extra Por Cartão De Crédito",
                            "code" : "extra_reserva"
                        },
                        "productItem" : null,
                        "discount" : null
                    }
                ],
                "charges" : [ 
                    {
                        "chargeId" : NumberLong(3038419),
                        "amount" : "265.82",
                        "status" : "paid",
                        "dueAt" : "2020-04-07T23:59:59.000-03:00",
                        "paidAt" : ISODate("2020-04-07T21:24:50.000Z"),
                        "installments" : 2,
                        "attemptCount" : 1,
                        "nextAttempt" : null,
                        "printUrl" : null,
                        "createdAt" : ISODate("2020-04-07T21:24:29.000Z"),
                        "updatedAt" : ISODate("2020-04-07T21:24:50.000Z"),
                        "bill" : null,
                        "lastTransaction" : {
                            "transactionId" : NumberLong(1945477),
                            "transactionType" : "capture",
                            "status" : "success",
                            "amount" : "265.82",
                            "installments" : null,
                            "gatewayMessage" : null,
                            "gatewayResponseCode" : null,
                            "gatewayAuthorization" : null,
                            "gatewayTransactionId" : null,
                            "gatewayResponseFields" : {
                                "nsu" : null,
                                "originalTransactionId" : null,
                                "transactionId" : null,
                                "cardBrand" : null,
                                "auth" : null,
                                "ref" : null,
                                "date" : null,
                                "installments" : null,
                                "orderId" : null,
                                "amount" : null,
                                "barcode" : null,
                                "typableBarcode" : null
                            },
                            "fraudDetectorScore" : null,
                            "fraudDetectorStatus" : null,
                            "fraudDetectorId" : null,
                            "createdAt" : ISODate("2020-04-07T21:24:50.000Z"),
                            "gateway" : null,
                            "paymentProfile" : null
                        },
                        "paymentMethod" : {
                            "paymentMethodId" : NumberLong(3156),
                            "publicName" : "Cartão de crédito",
                            "name" : "Cartão de crédito Recorrência",
                            "code" : "credit_card",
                            "type" : "PaymentMethod::CreditCard"
                        }
                    }
                ],
                "customer" : {
                    "customerId" : NumberLong(224510),
                    "name" : "Taíssa Cavalcanti QA",
                    "email" : "osmar.vieira@ferias.co",
                    "code" : "44283800384"
                },
                "period" : null,
                "subscription" : null,
                "metaData" : null,
                "paymentProfile" : null,
                "paymentCondition" : null
            }
        },
        "dataCriacao" : ISODate("2020-04-07T21:24:51.283Z"),
        "dataAtualizacao" : null,
        "dataDelecao" : null
    },
    {
        "_id" : ObjectId("5e8ccfa78441081a9b835ff6"),
        "type" : "bill_created",
        "createdAt" : ISODate("2020-04-07T19:08:23.077Z"),
        "data" : {
            "bill" : {
                "billId" : NumberLong(3091325),
                "code" : null,
                "amount" : "555.55",
                "installments" : 5,
                "status" : "pending",
                "seenAt" : null,
                "billingAt" : null,
                "dueAt" : "2020-04-07T23:59:59.000-03:00",
                "url" : "https://sandbox-app.vindi.com.br/customer/bills/3091325?token=0f659354-2fb7-4d97-84e0-3edfa27bd897",
                "createdAt" : ISODate("2020-04-07T19:08:22.000Z"),
                "updatedAt" : ISODate("2020-04-07T19:08:23.000Z"),
                "billItems" : [ 
                    {
                        "billItemId" : NumberLong(8714606),
                        "amount" : "555.55",
                        "quantity" : null,
                        "pricingRangeId" : null,
                        "description" : "",
                        "pricingSchema" : null,
                        "product" : {
                            "productId" : NumberLong(26430),
                            "name" : "Cobrança Extra Por Cartão De Crédito",
                            "code" : "extra_reserva"
                        },
                        "productItem" : null,
                        "discount" : null
                    }
                ],
                "charges" : [ 
                    {
                        "chargeId" : NumberLong(3038325),
                        "amount" : "555.55",
                        "status" : "processing",
                        "dueAt" : "2020-04-07T23:59:59.000-03:00",
                        "paidAt" : null,
                        "installments" : 5,
                        "attemptCount" : 1,
                        "nextAttempt" : null,
                        "printUrl" : null,
                        "createdAt" : ISODate("2020-04-07T19:08:22.000Z"),
                        "updatedAt" : ISODate("2020-04-07T19:08:22.000Z"),
                        "bill" : null,
                        "lastTransaction" : {
                            "transactionId" : NumberLong(1945368),
                            "transactionType" : "authorization",
                            "status" : "success",
                            "amount" : "555.55",
                            "installments" : null,
                            "gatewayMessage" : null,
                            "gatewayResponseCode" : null,
                            "gatewayAuthorization" : null,
                            "gatewayTransactionId" : null,
                            "gatewayResponseFields" : {
                                "nsu" : null,
                                "originalTransactionId" : null,
                                "transactionId" : null,
                                "cardBrand" : null,
                                "auth" : null,
                                "ref" : null,
                                "date" : null,
                                "installments" : null,
                                "orderId" : null,
                                "amount" : null,
                                "barcode" : null,
                                "typableBarcode" : null
                            },
                            "fraudDetectorScore" : null,
                            "fraudDetectorStatus" : null,
                            "fraudDetectorId" : null,
                            "createdAt" : ISODate("2020-04-07T19:08:22.000Z"),
                            "gateway" : null,
                            "paymentProfile" : null
                        },
                        "paymentMethod" : {
                            "paymentMethodId" : NumberLong(3156),
                            "publicName" : "Cartão de crédito",
                            "name" : "Cartão de crédito Recorrência",
                            "code" : "credit_card",
                            "type" : "PaymentMethod::CreditCard"
                        }
                    }, 
                    {
                        "chargeId" : NumberLong(3038325),
                        "amount" : "555.55",
                        "status" : "canceled",
                        "dueAt" : "2020-04-07T23:59:59.000-03:00",
                        "paidAt" : ISODate("2020-04-07T19:09:58.000Z"),
                        "installments" : 5,
                        "attemptCount" : 1,
                        "nextAttempt" : null,
                        "printUrl" : null,
                        "createdAt" : ISODate("2020-04-07T19:08:22.000Z"),
                        "updatedAt" : ISODate("2020-04-07T19:13:25.000Z"),
                        "bill" : null,
                        "lastTransaction" : {
                            "transactionId" : NumberLong(1945377),
                            "transactionType" : "refund",
                            "status" : "success",
                            "amount" : "555.55",
                            "installments" : null,
                            "gatewayMessage" : "Estorno efetuado com sucesso",
                            "gatewayResponseCode" : null,
                            "gatewayAuthorization" : "9EFA410AAA5BF460D0181CE414B12BA6",
                            "gatewayTransactionId" : "14aec73b-0e9a-4b59-abfe-cc92a2efb417",
                            "gatewayResponseFields" : {
                                "nsu" : "312FECF8D024CBCB794C3CCEA48549C8",
                                "originalTransactionId" : null,
                                "transactionId" : null,
                                "cardBrand" : null,
                                "auth" : null,
                                "ref" : null,
                                "date" : null,
                                "installments" : null,
                                "orderId" : null,
                                "amount" : null,
                                "barcode" : null,
                                "typableBarcode" : null
                            },
                            "fraudDetectorScore" : null,
                            "fraudDetectorStatus" : null,
                            "fraudDetectorId" : null,
                            "createdAt" : ISODate("2020-04-07T19:13:25.000Z"),
                            "gateway" : null,
                            "paymentProfile" : null
                        },
                        "paymentMethod" : {
                            "paymentMethodId" : NumberLong(3156),
                            "publicName" : "Cartão de crédito",
                            "name" : "Cartão de crédito Recorrência",
                            "code" : "credit_card",
                            "type" : "PaymentMethod::CreditCard"
                        }
                    }, 
                    {
                        "chargeId" : NumberLong(3038325),
                        "amount" : "555.55",
                        "status" : "canceled",
                        "dueAt" : "2020-04-07T23:59:59.000-03:00",
                        "paidAt" : ISODate("2020-04-07T19:09:58.000Z"),
                        "installments" : 5,
                        "attemptCount" : 1,
                        "nextAttempt" : null,
                        "printUrl" : null,
                        "createdAt" : ISODate("2020-04-07T19:08:22.000Z"),
                        "updatedAt" : ISODate("2020-04-07T19:13:25.000Z"),
                        "bill" : null,
                        "lastTransaction" : {
                            "transactionId" : NumberLong(1945377),
                            "transactionType" : "refund",
                            "status" : "success",
                            "amount" : "555.55",
                            "installments" : null,
                            "gatewayMessage" : "Estorno efetuado com sucesso",
                            "gatewayResponseCode" : null,
                            "gatewayAuthorization" : "9EFA410AAA5BF460D0181CE414B12BA6",
                            "gatewayTransactionId" : "14aec73b-0e9a-4b59-abfe-cc92a2efb417",
                            "gatewayResponseFields" : {
                                "nsu" : "312FECF8D024CBCB794C3CCEA48549C8",
                                "originalTransactionId" : null,
                                "transactionId" : null,
                                "cardBrand" : null,
                                "auth" : null,
                                "ref" : null,
                                "date" : null,
                                "installments" : null,
                                "orderId" : null,
                                "amount" : null,
                                "barcode" : null,
                                "typableBarcode" : null
                            },
                            "fraudDetectorScore" : null,
                            "fraudDetectorStatus" : null,
                            "fraudDetectorId" : null,
                            "createdAt" : ISODate("2020-04-07T19:13:25.000Z"),
                            "gateway" : null,
                            "paymentProfile" : null
                        },
                        "paymentMethod" : {
                            "paymentMethodId" : NumberLong(3156),
                            "publicName" : "Cartão de crédito",
                            "name" : "Cartão de crédito Recorrência",
                            "code" : "credit_card",
                            "type" : "PaymentMethod::CreditCard"
                        }
                    }
                ],
                "customer" : {
                    "customerId" : NumberLong(224510),
                    "name" : "Taíssa Cavalcanti QA",
                    "email" : "osmar.vieira@ferias.co",
                    "code" : "44283800384"
                },
                "period" : null,
                "subscription" : null,
                "metaData" : null,
                "paymentProfile" : null,
                "paymentCondition" : null
            }
        },
        "dataCriacao" : ISODate("2020-04-07T19:08:23.887Z"),
        "dataAtualizacao" : null,
        "dataDelecao" : null
    },
    {
        "_id" : ObjectId("5e98eda48441081a9b442033"),
        "type" : "bill_paid",
        "createdAt" : ISODate("2020-04-16T23:43:27.662Z"),
        "data" : {
            "bill" : {
                "billId" : NumberLong(3113376),
                "code" : null,
                "amount" : "20.1",
                "installments" : 1,
                "status" : "paid",
                "seenAt" : null,
                "billingAt" : null,
                "dueAt" : "2020-04-16T23:59:59.000-03:00",
                "url" : "https://sandbox-app.vindi.com.br/customer/bills/3113376?token=dda5666d-3031-41b5-8200-f796767fa3ae",
                "createdAt" : ISODate("2020-04-16T23:43:25.000Z"),
                "updatedAt" : ISODate("2020-04-16T23:43:27.000Z"),
                "billItems" : [ 
                    {
                        "billItemId" : NumberLong(8745209),
                        "amount" : "20.1",
                        "quantity" : null,
                        "pricingRangeId" : null,
                        "description" : "",
                        "pricingSchema" : null,
                        "product" : {
                            "productId" : NumberLong(26430),
                            "name" : "Cobrança Extra Por Cartão De Crédito",
                            "code" : "extra_reserva"
                        },
                        "productItem" : null,
                        "discount" : null
                    }
                ],
                "charges" : [ 
                    {
                        "chargeId" : NumberLong(3059501),
                        "amount" : "20.1",
                        "status" : "paid",
                        "dueAt" : "2020-04-16T23:59:59.000-03:00",
                        "paidAt" : ISODate("2020-04-16T23:43:27.000Z"),
                        "installments" : 1,
                        "attemptCount" : 1,
                        "nextAttempt" : null,
                        "printUrl" : null,
                        "createdAt" : ISODate("2020-04-16T23:43:25.000Z"),
                        "updatedAt" : ISODate("2020-04-16T23:43:27.000Z"),
                        "bill" : null,
                        "lastTransaction" : {
                            "transactionId" : NumberLong(1971477),
                            "transactionType" : "capture",
                            "status" : "success",
                            "amount" : "20.1",
                            "installments" : "1",
                            "gatewayMessage" : "Captura efetuada com sucesso",
                            "gatewayResponseCode" : null,
                            "gatewayAuthorization" : "05F8BB02279633D6B137D7E2968ECEE3",
                            "gatewayTransactionId" : "0e67e155-1270-402f-bafa-2900d79ab8f9",
                            "gatewayResponseFields" : {
                                "nsu" : "503C4E1D810C98AD662259AA534464C8",
                                "originalTransactionId" : null,
                                "transactionId" : null,
                                "cardBrand" : null,
                                "auth" : null,
                                "ref" : null,
                                "date" : null,
                                "installments" : null,
                                "orderId" : null,
                                "amount" : null,
                                "barcode" : null,
                                "typableBarcode" : null
                            },
                            "fraudDetectorScore" : null,
                            "fraudDetectorStatus" : null,
                            "fraudDetectorId" : null,
                            "createdAt" : ISODate("2020-04-16T23:43:27.000Z"),
                            "gateway" : {
                                "gatewayId" : 1599,
                                "connector" : "fake"
                            },
                            "paymentProfile" : {
                                "paymentProfileId" : 221884,
                                "holderName" : "KERA LUBOWITZ",
                                "registryCode" : "44283800384",
                                "bankBranch" : null,
                                "bankAccount" : null,
                                "cardExpiration" : "2028-09-30T23:59:59.000-03:00",
                                "cardNumberFirstSix" : "555555",
                                "cardNumberLastFour" : "5557",
                                "token" : "1ed4013b-6584-4a8e-9d25-a929d7a62251",
                                "createdAt" : "04/16/2020 23:40:52",
                                "paymentCompany" : {
                                    "paymentCompanyId" : 12,
                                    "name" : "MasterCard",
                                    "code" : "mastercard"
                                }
                            }
                        },
                        "paymentMethod" : {
                            "paymentMethodId" : NumberLong(3156),
                            "publicName" : "Cartão de crédito",
                            "name" : "Cartão de crédito Recorrência",
                            "code" : "credit_card",
                            "type" : "PaymentMethod::CreditCard"
                        }
                    }
                ],
                "customer" : {
                    "customerId" : NumberLong(224510),
                    "name" : "Taíssa Cavalcanti QA",
                    "email" : "osmar.vieira@ferias.co",
                    "code" : "44283800384"
                },
                "period" : null,
                "subscription" : null,
                "metaData" : null,
                "paymentProfile" : null,
                "paymentCondition" : null
            }
        },
        "dataCriacao" : ISODate("2020-04-16T23:43:32.357Z"),
        "dataAtualizacao" : null,
        "dataDelecao" : null
    },
    {
        "_id" : ObjectId("5ed159fb8441081a9bc3adbd"),
        "type" : "bill_canceled",
        "createdAt" : ISODate("2020-05-29T18:52:42.802Z"),
        "data" : {
            "bill" : {
                "billId" : NumberLong(3113376),
                "code" : null,
                "amount" : "0.0",
                "installments" : 1,
                "status" : "canceled",
                "seenAt" : null,
                "billingAt" : null,
                "dueAt" : "2020-04-16T23:59:59.000-03:00",
                "url" : "https://sandbox-app.vindi.com.br/customer/bills/3113376?token=dda5666d-3031-41b5-8200-f796767fa3ae",
                "createdAt" : ISODate("2020-04-16T23:43:25.000Z"),
                "updatedAt" : ISODate("2020-05-29T18:52:42.000Z"),
                "billItems" : [ 
                    {
                        "billItemId" : NumberLong(8745209),
                        "amount" : "20.1",
                        "quantity" : null,
                        "pricingRangeId" : null,
                        "description" : "",
                        "pricingSchema" : null,
                        "product" : {
                            "productId" : NumberLong(26430),
                            "name" : "Cobrança Extra Por Cartão De Crédito",
                            "code" : "extra_reserva"
                        },
                        "productItem" : null,
                        "discount" : null
                    }
                ],
                "charges" : [ 
                    {
                        "chargeId" : NumberLong(3059501),
                        "amount" : "20.1",
                        "status" : "paid",
                        "dueAt" : "2020-04-16T23:59:59.000-03:00",
                        "paidAt" : ISODate("2020-04-16T23:43:27.000Z"),
                        "installments" : 1,
                        "attemptCount" : 1,
                        "nextAttempt" : null,
                        "printUrl" : null,
                        "createdAt" : ISODate("2020-04-16T23:43:25.000Z"),
                        "updatedAt" : ISODate("2020-04-16T23:43:27.000Z"),
                        "bill" : null,
                        "lastTransaction" : {
                            "transactionId" : NumberLong(1971479),
                            "transactionType" : "refund",
                            "status" : "success",
                            "amount" : "10.0",
                            "installments" : null,
                            "gatewayMessage" : "Estorno efetuado com sucesso",
                            "gatewayResponseCode" : null,
                            "gatewayAuthorization" : "05F8BB02279633D6B137D7E2968ECEE3",
                            "gatewayTransactionId" : "88fda37b-1296-4c0f-a78e-f26f0d0aa23a",
                            "gatewayResponseFields" : {
                                "nsu" : "503C4E1D810C98AD662259AA534464C8",
                                "originalTransactionId" : null,
                                "transactionId" : null,
                                "cardBrand" : null,
                                "auth" : null,
                                "ref" : null,
                                "date" : null,
                                "installments" : null,
                                "orderId" : null,
                                "amount" : null,
                                "barcode" : null,
                                "typableBarcode" : null
                            },
                            "fraudDetectorScore" : null,
                            "fraudDetectorStatus" : null,
                            "fraudDetectorId" : null,
                            "createdAt" : ISODate("2020-04-16T23:43:28.000Z"),
                            "gateway" : {
                                "gatewayId" : 1599,
                                "connector" : "fake"
                            },
                            "paymentProfile" : {
                                "paymentProfileId" : 221884,
                                "holderName" : "KERA LUBOWITZ",
                                "registryCode" : "44283800384",
                                "bankBranch" : null,
                                "bankAccount" : null,
                                "cardExpiration" : "2028-09-30T23:59:59.000-03:00",
                                "cardNumberFirstSix" : "555555",
                                "cardNumberLastFour" : "5557",
                                "token" : "1ed4013b-6584-4a8e-9d25-a929d7a62251",
                                "createdAt" : "04/16/2020 23:40:52",
                                "paymentCompany" : {
                                    "paymentCompanyId" : 12,
                                    "name" : "MasterCard",
                                    "code" : "mastercard"
                                }
                            }
                        },
                        "paymentMethod" : {
                            "paymentMethodId" : NumberLong(3156),
                            "publicName" : "Cartão de crédito",
                            "name" : "Cartão de crédito Recorrência",
                            "code" : "credit_card",
                            "type" : "PaymentMethod::CreditCard"
                        }
                    }
                ],
                "customer" : {
                    "customerId" : NumberLong(224510),
                    "name" : "Taíssa Cavalcanti QA",
                    "email" : "teste@teste.com",
                    "code" : "44283800384"
                },
                "period" : null,
                "subscription" : null,
                "metaData" : null,
                "paymentProfile" : null,
                "paymentCondition" : null
            }
        },
        "dataCriacao" : ISODate("2020-05-29T18:52:43.230Z"),
        "dataAtualizacao" : null,
        "dataDelecao" : null
    }
])

