/* eslint-disable */
db.getSiblingDB('payment').getCollection('InstallmentAmount').insert([
  {
    "_id": ObjectId("5e3c04419c6c62abf8593284"),
    "Installment": 1,
    "MinAmount": 0.01
  },
  {
    "_id": ObjectId("5e3c04509c6c62abf85933b8"),
    "Installment": 2,
    "MinAmount": 200.0
  },
  {
    "_id": ObjectId("5e3c04589c6c62abf8593458"),
    "Installment": 3,
    "MinAmount": 300.0
  },
  {
    "_id": ObjectId("5e3c045f9c6c62abf85934ef"),
    "Installment": 4,
    "MinAmount": 400.0
  },
  {
    "_id": ObjectId("5e3c048a9c6c62abf8593840"),
    "Installment": 5,
    "MinAmount": 500.0
  },
  {
    "_id": ObjectId("5e3c04f19c6c62abf8594080"),
    "Installment": 6,
    "MinAmount": 600.0
  }
]);

/* eslint-disable */
db.getSiblingDB('payment').getCollection('ProviderCredentials').insert([
  {
    "_id": ObjectId("5dd41d50fa5651fe2d7b0b2d"),
    "TimeOut": 5000.0,
    "TypeProvider": 1,
    "User": "",
    "Password": "8-HKkdBcGYAC5z8LNYM2DJEK4sTtAVz2sGZruQB2W1E",
    "Url": "https://sandbox-app.vindi.com.br/api/",
    "Active": 1
  }

]);

/* eslint-disable */
db.getSiblingDB('payment').getCollection('Customer').insert([
  /* 1 */
  {
    "_id": ObjectId("5dd83f216dccb90001e2ce36"),
    "id": "00000000-0000-0000-0000-000000000000",
    "IdCustomer": NumberLong(0),
    "ErrorMessages": {
      "Success": false,
      "ErroMessages": [
        {
          "Message": "Vindi Response status code does not indicate success: 422 (Unprocessable Entity)."
        }
      ]
    },
    "Name": null,
    "Email": null,
    "Cpf": null,
    "Status": null,
    "CreatedAt": Date(-62135596800000),
    "UpdatedAt": Date(-62135596800000),
    "Phones": null,
    "Address": null
  }

  ,/* 2 */
  {
    "_id": ObjectId("5dd83f6a6dccb90001e2ce37"),
    "id": "00000000-0000-0000-0000-000000000000",
    "IdCustomer": NumberLong(0),
    "ErrorMessages": {
      "Success": false,
      "ErroMessages": [
        {
          "Message": "Vindi Response status code does not indicate success: 422 (Unprocessable Entity)."
        }
      ]
    },
    "Name": null,
    "Email": null,
    "Cpf": null,
    "Status": null,
    "CreatedAt": Date(-62135596800000),
    "UpdatedAt": Date(-62135596800000),
    "Phones": null,
    "Address": null
  }

  ,/* 3 */
  {
    "_id": ObjectId("5dd83f8a6dccb90001e2ce38"),
    "id": "00000000-0000-0000-0000-000000000000",
    "IdCustomer": NumberLong(0),
    "ErrorMessages": null,
    "Name": null,
    "Email": null,
    "Cpf": null,
    "Status": null,
    "CreatedAt": Date(-62135596800000),
    "UpdatedAt": Date(-62135596800000),
    "Phones": null,
    "Address": null
  }

  ,/* 4 */
  {
    "_id": ObjectId("5dd83fa76dccb90001e2ce3a"),
    "id": "00000000-0000-0000-0000-000000000000",
    "IdCustomer": NumberLong(0),
    "ErrorMessages": {
      "Success": false,
      "ErroMessages": [
        {
          "Message": "Vindi Response status code does not indicate success: 422 (Unprocessable Entity)."
        }
      ]
    },
    "Name": null,
    "Email": null,
    "Cpf": null,
    "Status": null,
    "CreatedAt": Date(-62135596800000),
    "UpdatedAt": Date(-62135596800000),
    "Phones": null,
    "Address": null
  }

  ,/* 5 */
  {
    "_id": ObjectId("5ddd5c820aa948000192e586"),
    "id": "00000000-0000-0000-0000-000000000000",
    "IdCustomer": NumberLong(0),
    "ErrorMessages": {
      "Success": false,
      "ErroMessages": [
        {
          "Message": "Vindi Response status code does not indicate success: 422 (Unprocessable Entity)."
        }
      ]
    },
    "Name": null,
    "Email": null,
    "Cpf": null,
    "Status": null,
    "CreatedAt": Date(-62135596800000),
    "UpdatedAt": Date(-62135596800000),
    "Phones": null,
    "Address": null
  }

  ,/* 6 */
  {
    "_id": ObjectId("5ddd5c890aa948000192e587"),
    "id": "00000000-0000-0000-0000-000000000000",
    "IdCustomer": NumberLong(0),
    "ErrorMessages": {
      "Success": false,
      "ErroMessages": [
        {
          "Message": "Vindi Response status code does not indicate success: 422 (Unprocessable Entity)."
        }
      ]
    },
    "Name": null,
    "Email": null,
    "Cpf": null,
    "Status": null,
    "CreatedAt": Date(-62135596800000),
    "UpdatedAt": Date(-62135596800000),
    "Phones": null,
    "Address": null
  }

  ,/* 7 */
  {
    "_id": ObjectId("5ddd6ba00aa948000192e59e"),
    "id": "00000000-0000-0000-0000-000000000000",
    "IdCustomer": NumberLong(0),
    "ErrorMessages": {
      "Success": false,
      "ErroMessages": [
        {
          "Message": "Vindi Response status code does not indicate success: 422 (Unprocessable Entity)."
        }
      ]
    },
    "Name": null,
    "Email": null,
    "Cpf": null,
    "Status": null,
    "CreatedAt": Date(-62135596800000),
    "UpdatedAt": Date(-62135596800000),
    "Phones": null,
    "Address": null
  }

  ,/* 8 */
  {
    "_id": ObjectId("5ddd6baf0aa948000192e59f"),
    "id": "00000000-0000-0000-0000-000000000000",
    "IdCustomer": NumberLong(0),
    "ErrorMessages": {
      "Success": false,
      "ErroMessages": [
        {
          "Message": "Vindi Response status code does not indicate success: 422 (Unprocessable Entity)."
        }
      ]
    },
    "Name": null,
    "Email": null,
    "Cpf": null,
    "Status": null,
    "CreatedAt": Date(-62135596800000),
    "UpdatedAt": Date(-62135596800000),
    "Phones": null,
    "Address": null
  }

  ,/* 9 */
  {
    "_id": ObjectId("5ddd6bbb0aa948000192e5a0"),
    "id": "00000000-0000-0000-0000-000000000000",
    "IdCustomer": NumberLong(0),
    "ErrorMessages": {
      "Success": false,
      "ErroMessages": [
        {
          "Message": "Vindi Response status code does not indicate success: 422 (Unprocessable Entity)."
        }
      ]
    },
    "Name": null,
    "Email": null,
    "Cpf": null,
    "Status": null,
    "CreatedAt": Date(-62135596800000),
    "UpdatedAt": Date(-62135596800000),
    "Phones": null,
    "Address": null
  }

  ,/* 10 */
  {
    "_id": ObjectId("5ddd6bc60aa948000192e5a1"),
    "id": "00000000-0000-0000-0000-000000000000",
    "IdCustomer": NumberLong(0),
    "ErrorMessages": {
      "Success": false,
      "ErroMessages": [
        {
          "Message": "Vindi Response status code does not indicate success: 422 (Unprocessable Entity)."
        }
      ]
    },
    "Name": null,
    "Email": null,
    "Cpf": null,
    "Status": null,
    "CreatedAt": Date(-62135596800000),
    "UpdatedAt": Date(-62135596800000),
    "Phones": null,
    "Address": null
  }

  ,/* 11 */
  {
    "_id": ObjectId("5ddd6bce0aa948000192e5a2"),
    "id": "00000000-0000-0000-0000-000000000000",
    "IdCustomer": NumberLong(0),
    "ErrorMessages": {
      "Success": false,
      "ErroMessages": [
        {
          "Message": "Vindi Response status code does not indicate success: 422 (Unprocessable Entity)."
        }
      ]
    },
    "Name": null,
    "Email": null,
    "Cpf": null,
    "Status": null,
    "CreatedAt": Date(-62135596800000),
    "UpdatedAt": Date(-62135596800000),
    "Phones": null,
    "Address": null
  }

  ,/* 12 */
  {
    "_id": ObjectId("5ddd6bd50aa948000192e5a3"),
    "id": "00000000-0000-0000-0000-000000000000",
    "IdCustomer": NumberLong(0),
    "ErrorMessages": null,
    "Name": null,
    "Email": null,
    "Cpf": null,
    "Status": null,
    "CreatedAt": Date(-62135596800000),
    "UpdatedAt": Date(-62135596800000),
    "Phones": null,
    "Address": null
  }

  ,/* 13 */
  {
    "_id": ObjectId("5ddd6bee0aa948000192e5a4"),
    "id": "00000000-0000-0000-0000-000000000000",
    "IdCustomer": NumberLong(0),
    "ErrorMessages": {
      "Success": false,
      "ErroMessages": [
        {
          "Message": "Vindi Response status code does not indicate success: 422 (Unprocessable Entity)."
        }
      ]
    },
    "Name": null,
    "Email": null,
    "Cpf": null,
    "Status": null,
    "CreatedAt": Date(-62135596800000),
    "UpdatedAt": Date(-62135596800000),
    "Phones": null,
    "Address": null
  }

  ,/* 14 */
  {
    "_id": ObjectId("5ddd6c660aa948000192e5a6"),
    "id": "00000000-0000-0000-0000-000000000000",
    "IdCustomer": NumberLong(0),
    "ErrorMessages": {
      "Success": false,
      "ErroMessages": [
        {
          "Message": "Vindi Response status code does not indicate success: 422 (Unprocessable Entity)."
        }
      ]
    },
    "Name": null,
    "Email": null,
    "Cpf": null,
    "Status": null,
    "CreatedAt": Date(-62135596800000),
    "UpdatedAt": Date(-62135596800000),
    "Phones": null,
    "Address": null
  }

  ,/* 15 */
  {
    "_id": ObjectId("5ddd6c820aa948000192e5a7"),
    "id": "00000000-0000-0000-0000-000000000000",
    "IdCustomer": NumberLong(0),
    "ErrorMessages": null,
    "Name": null,
    "Email": null,
    "Cpf": null,
    "Status": null,
    "CreatedAt": Date(-62135596800000),
    "UpdatedAt": Date(-62135596800000),
    "Phones": null,
    "Address": null
  }

  ,/* 16 */
  {
    "_id": ObjectId("5ddd6d000aa948000192e5a9"),
    "id": "00000000-0000-0000-0000-000000000000",
    "IdCustomer": NumberLong(0),
    "ErrorMessages": null,
    "Name": null,
    "Email": null,
    "Cpf": null,
    "Status": null,
    "CreatedAt": Date(-62135596800000),
    "UpdatedAt": Date(-62135596800000),
    "Phones": null,
    "Address": null
  }

  ,/* 17 */
  {
    "_id": ObjectId("5ddd6d190aa948000192e5ad"),
    "id": "00000000-0000-0000-0000-000000000000",
    "IdCustomer": NumberLong(0),
    "ErrorMessages": {
      "Success": false,
      "ErroMessages": [
        {
          "Message": "Vindi Response status code does not indicate success: 422 (Unprocessable Entity)."
        }
      ]
    },
    "Name": null,
    "Email": null,
    "Cpf": null,
    "Status": null,
    "CreatedAt": Date(-62135596800000),
    "UpdatedAt": Date(-62135596800000),
    "Phones": null,
    "Address": null
  }

  ,/* 18 */
  {
    "_id": ObjectId("5ddd6d1a0aa948000192e5ae"),
    "id": "00000000-0000-0000-0000-000000000000",
    "IdCustomer": NumberLong(0),
    "ErrorMessages": {
      "Success": false,
      "ErroMessages": [
        {
          "Message": "Vindi Response status code does not indicate success: 422 (Unprocessable Entity)."
        }
      ]
    },
    "Name": null,
    "Email": null,
    "Cpf": null,
    "Status": null,
    "CreatedAt": Date(-62135596800000),
    "UpdatedAt": Date(-62135596800000),
    "Phones": null,
    "Address": null
  }

  ,/* 19 */
  {
    "_id": ObjectId("5ddd6d1b0aa948000192e5af"),
    "id": "00000000-0000-0000-0000-000000000000",
    "IdCustomer": NumberLong(0),
    "ErrorMessages": {
      "Success": false,
      "ErroMessages": [
        {
          "Message": "Vindi Response status code does not indicate success: 422 (Unprocessable Entity)."
        }
      ]
    },
    "Name": null,
    "Email": null,
    "Cpf": null,
    "Status": null,
    "CreatedAt": Date(-62135596800000),
    "UpdatedAt": Date(-62135596800000),
    "Phones": null,
    "Address": null
  }

  ,/* 20 */
  {
    "_id": ObjectId("5ddd6d560aa948000192e5b0"),
    "id": "00000000-0000-0000-0000-000000000000",
    "IdCustomer": NumberLong(0),
    "ErrorMessages": null,
    "Name": null,
    "Email": null,
    "Cpf": null,
    "Status": null,
    "CreatedAt": Date(-62135596800000),
    "UpdatedAt": Date(-62135596800000),
    "Phones": null,
    "Address": null
  }

  ,/* 21 */
  {
    "_id" : ObjectId("5fc79c9dd80c9200016f1286"),
    "id" : "00000000-0000-0000-0000-000000000000",
    "IdCustomer" : 947829,
    "ErrorMessages" : null,
    "Name" : "Daniel Teste QA",
    "Email" : "elaine.rodrigues@ferias.co",
    "Cpf" : "27832933585",
    "Status" : "inactive",
    "CreatedAt" : ISODate("2020-12-02T10:54:37.000Z"),
    "UpdatedAt" : ISODate("2020-12-02T10:54:37.000Z"),
    "Phones" : [ 
        {
            "_id" : NumberLong(0),
            "PhoneType" : 1,
            "Number" : "5511977777777",
            "Extention" : null
        }
    ],
    "Address" : {
        "Street" : "Avenida Emílio Ribas",
        "Number" : "435",
        "AdicionalDetails" : "casa",
        "Zipcode" : "07020010",
        "Neighborhood" : "Jardim Tijuco",
        "City" : "Guarulhos",
        "State" : "SP",
        "Country" : "BR"
    }
}
]);

db.getSiblingDB('payment').getCollection('PaymentProfile').insert([
  /* 1 */
  {
    "_id" : ObjectId("5fc79c9dd80c9200016f1287"),
    "id" : UUID("00000000-0000-0000-0000-000000000000"),
    "IdPaymentProfile" : 591901,
    "HolderName" : "ELAINE TESTES",
    "Cpf" : "27832933585",
    "CardExpiration" : "11/2024",
    "CardNumber" : "",
    "CardCvv" : "",
    "Status" : "active",
    "GatewayMessage" : "Transacao aprovada",
    "GatewayResponseCode" : null,
    "GatewayAuthorization" : "A065E922210EC84F54AB5C139B77E99C",
    "GatewayTransactionId" : "3e23e03b-aa70-4641-b8f1-da2658aa5b80",
    "FraudDetectorScore" : "0",
    "FraudDetectorStatus" : null,
    "VerifyStatus" : "success",
    "CardType" : 0,
    "GatewayToken" : null,
    "Customer" : {
        "id" : UUID("00000000-0000-0000-0000-000000000000"),
        "_id" : null,
        "IdCustomer" : 947829,
        "ErrorMessages" : null,
        "Name" : "Daniel Teste QA",
        "Email" : "elaine.rodrigues@ferias.co",
        "Cpf" : "27832933585",
        "Status" : null,
        "CreatedAt" : ISODate("2020-12-02T10:54:37.000Z"),
        "UpdatedAt" : ISODate("2020-12-02T10:54:37.000Z"),
        "Phones" : [ 
            {
                "_id" : NumberLong(0),
                "PhoneType" : 1,
                "Number" : "11977777777",
                "Extention" : null
            }
        ],
        "Address" : {
            "Street" : "Avenida Emílio Ribas",
            "Number" : "435",
            "AdicionalDetails" : "casa",
            "Zipcode" : "07020010",
            "Neighborhood" : "Jardim Tijuco",
            "City" : "Guarulhos",
            "State" : "SP",
            "Country" : null
        }
    },
    "CardNumberFirstSix" : "555555",
    "CardNumberLastFour" : "5557",
    "Token" : "0ae0d205-dc14-4ad3-b2ca-b505ff8319dd",
    "Type" : "PaymentProfile::CreditCard",
    "CreatedAt" : ISODate("2020-12-02T10:54:37.000Z"),
    "UpdatedAt" : ISODate("2020-12-02T10:54:37.000Z"),
    "PaymentCompany" : "MasterCard",
    "PaymentMethod" : "Cartão de crédito Reserva",
    "ErrorMessages" : null,
    "Active" : true,
    "IsDefaultCard" : true
  }
]);