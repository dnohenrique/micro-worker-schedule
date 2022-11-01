/* eslint-disable */
db.getSiblingDB('booking').getCollection('BrokerCredentials').insert([
  {
    "_id": ObjectId("5d4db1b8fa5651fe2d3530ba"),
    "TimeOut": 25000.0,
    "TypeBroker": 1.0,
    "User" : "fc_webservice_teste",
    "UserSignInRdc": "katia.martins@rdc-ferias.com",
    "Password" : "ferias@2019",
    "PasswordSignInRdc": "1234",
    "UrlBooking": "http://ws-rdc.cangooroo.net/ws/Rest/Hotel.svc/Booking",
    "UrlBookingDetail": "http://ws-rdc.cangooroo.net/ws/rest/hotel.svc/GetServiceDetails",
    "UrlSignInRdc": "http://homolog.api.novosite.rdc-ferias.com.br/api/SignIn",
    "UrlBookingRdc": "http://hmgreserva.rdcferias.com.br/api",
    "UrlCancelBooking": "http://ws-rdc.cangooroo.net/ws/rest/hotel.svc/Cancel",
    "UrlCancellationPolicies": "http://ws-rdc.cangooroo.net/ws/Rest/Hotel.svc/GetCancellationPolicies",
    "Active": 1.0
  }
]);

/* eslint-disable */
db.getSiblingDB('booking').getCollection('Booking').insert([
  {
    "_id": ObjectId("5de01fa3f9ecfc00016846e9"),
    "id": "00000000-0000-0000-0000-000000000000",
    "BookingResult": {
      "Rooms": [
        {
          "VoucherId": "8048989-1913332380",
          "ReservationId": "11273",
          "ServiceId": 14038,
          "Status": "Cancelado",
          "Observations": null,
          "RoomDescription": "SGL - CLASSIC TWIN",
          "SellingPrice": "821.91",
          "CancellationPrice": "863.64",
          "Checkin": "2020-11-01",
          "Checkout": "2020-11-04",
          "Comission": "0",
          "HotelAddress": "AVENIDA IBIRAPUERA  2534 ",
          "BoardDescription": "CAFE DA MANHA ",
          "BreakfeastIncluded": false,
          "HotelName": "MELIA IBIRAPUERA",
          "Paxes": [
            {
              "Name": "Teste",
              "Surname": "Co",
              "Age": 38,
              "Title": "Mr",
              "IsChild": false,
              "IsMainPax": true,
              "Document": "34125136360"
            }
          ]
        }
      ],
      "RoomPrices": {
        "TotalPrice": "821.91",
        "DailyPrice": "0",
        "PlanType": "Meu Plano",
        "PlanDailyPrice": "273.97",
        "PlanTotalPrice": "0",
        "PlanNumberOfNightsUsed": 3,
        "PlanExtraReservationCostPrice": "0",
        "PlanExtraReservationFinalPrice": "0",
        "PlanCalculationFormula": "-78.09",
        "PlanMarkup": "20.0",
        "Currency": null,
        "Description": null,
        "NumberOfNights": 3
      },
      "Error": null
    },
    "OrderID": "CA34128111919278C5",
    "CancelationPolicies": {
      "id": "00000000-0000-0000-0000-000000000000",
      "_id": ObjectId("5de01f6af9ecfc00016846e8"),
      "RoomPrices": {
        "TotalPrice": "822",
        "DailyPrice": "0",
        "PlanType": "Meu Plano",
        "PlanDailyPrice": "0",
        "PlanTotalPrice": "0",
        "PlanNumberOfNightsUsed": 3,
        "PlanExtraReservationCostPrice": "0",
        "PlanExtraReservationFinalPrice": "0",
        "PlanCalculationFormula": "-78",
        "PlanMarkup": "20.0",
        "Currency": null,
        "Description": null,
        "NumberOfNights": 0
      },
      "Rooms": [
        {
          "RoomId": null,
          "Paxs": null,
          "CancellationPolicies": [
            {
              "Description": null,
              "BeginDate": ISODate("2019-11-27T00:00:00.000Z"),
              "EndDate": ISODate("2020-11-01T00:00:00.000Z"),
              "Prices": {
                "Price": "863.64",
                "DailyPriceTotal": "0",
                "PeriodPrice": "0",
                "TotalPeriodPriceTotal": "0",
                "Currency": "BRL",
                "Description": null
              },
              "Error": null
            }
          ],
          "BoardDescription": "CAFE DA MANHA ",
          "RoomDescription": "SGL - CLASSIC TWIN",
          "IsRefundable": false,
          "RoomPrice": {
            "TotalPrice": "822",
            "DailyPrice": "273.97",
            "PlanType": null,
            "PlanDailyPrice": "0",
            "PlanTotalPrice": "0",
            "PlanNumberOfNightsUsed": 0,
            "PlanExtraReservationCostPrice": "0",
            "PlanExtraReservationFinalPrice": "0",
            "PlanCalculationFormula": "0",
            "PlanMarkup": "0",
            "Currency": "BRL",
            "Description": null,
            "NumberOfNights": 3
          },
          "QuantityAdults": 1,
          "ChildAges": null,
          "QuantityChild": 0,
          "Quantity": 1
        }
      ],
      "CancellationRoomPrices": {
        "TotalPrice": "863.64",
        "DailyPrice": "0",
        "PlanType": null,
        "PlanDailyPrice": "0",
        "PlanTotalPrice": "0",
        "PlanNumberOfNightsUsed": 3,
        "PlanExtraReservationCostPrice": "0",
        "PlanExtraReservationFinalPrice": "41.64",
        "PlanCalculationFormula": "0",
        "PlanMarkup": "0",
        "Currency": null,
        "Description": null,
        "NumberOfNights": 0
      },
      "CancellationText": "Esta tarifa não é reembolsável e não pode ser alterada ou cancelada. Você não será reembolsado em qualquer valor se desejar alterar ou cancelar essa reserva.",
      "DtBegin": ISODate("2019-11-27T00:00:00.000Z"),
      "DtEnd": ISODate("2020-11-01T00:00:00.000Z"),
      "IsRefundable": false,
      "Error": null,
      "CancelationPoliciesFilter": {
        "Token": "6db6a269-3b8c-4309-b957-26ec2d97358e",
        "HotelId": 639999,
        "RoomIds": [
          3230001.0
        ],
        "UserId": "34125136360",
        "UserIP": "191.241.229.42",
        "BrokerId": 1,
        "ProviderName": "Shop Hotel",
        "CheckinDate": "2020-11-01",
        "CheckoutDate": "2020-11-04",
        "CheckinDateParse": ISODate("2020-11-01T00:00:00.000Z"),
        "CheckoutDateParse": ISODate("2020-11-04T00:00:00.000Z"),
        "NumberOfNights": 3,
        "PolicieDate": ISODate("2019-11-28T19:26:25.810Z")
      },
      "CancelationPoliciesPenaltyFilter": null,
      "Plan": {
        "cpf": "34125136360",
        "planos": [
          {
            "_id": "28b727d1-4bf8-c14d-926a-924cd402e49e",
            "titulo": "Superior 7 Diárias",
            "tipoPlano": "Superior",
            "valorPlano": "1080",
            "valorDiariaMaxima": "300",
            "valorDiariaMinima": "200.01",
            "diariasDisponiveis": 4,
            "diariasTotais": 7,
            "ativo": true,
            "Markup": "0.2"
          }
        ],
        "ErrorMessages": null
      }
    },
    "Availability": {
      "id": "00000000-0000-0000-0000-000000000000",
      "_id": ObjectId("5de01f54a2513a00013caf5f"),
      "HotelInfo": [
        {
          "ID": NumberLong(639999),
          "Name": "Meliá Ibirapuera (São Paulo, Brasil)",
          "Chain": "Melia",
          "CNPJ": null,
          "Site": null,
          "Category": "5",
          "AcommodationType": "Hotel",
          "Email": null,
          "Recommended": false,
          "PhoneNumber": null,
          "PrimaryImage": {
            "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/639999/639999_4025Property94602.jpg",
            "Title": null,
            "Description": null
          },
          "ImagesViewUrl": null,
          "MapUrl": null,
          "Rooms": [
            {
              "QuantityAdults": 1,
              "QuantityChild": 0,
              "ChildAges": null,
              "RoomsType": [
                {
                  "RoomID": "3230001",
                  "RoomName": "SGL - CLASSIC TWIN",
                  "Description": null,
                  "MaxOccupation": 1,
                  "Remarks": null,
                  "TermsAndConditions": null,
                  "TaxesIncluded": false,
                  "CancelationPolicies": null,
                  "Amenities": null,
                  "RoomImages": null,
                  "Regime": {
                    "Name": "CAFE DA MANHA ",
                    "BoardAcronym": null
                  },
                  "Days": 0,
                  "RoomPrices": {
                    "Price": "0",
                    "DailyPriceTotal": "0",
                    "PeriodPrice": "0",
                    "TotalPeriodPriceTotal": "0",
                    "Currency": "BRL",
                    "Description": null
                  },
                  "TaxPrices": null,
                  "IsBestPrice": false,
                  "IsNonRefundable": false,
                  "Quantity": 1,
                  "RecommendedRoom": false,
                  "providerId": 0,
                  "providerName": "Shop Hotel",
                  "BreakfeastIncluded": false,
                  "QuantityAdults": 1,
                  "ChildAges": null,
                  "QuantityChild": 0
                }
              ],
              "RoomPrices": {
                "Price": "0",
                "DailyPriceTotal": "0",
                "PeriodPrice": "0",
                "TotalPeriodPriceTotal": "0",
                "Currency": "BRL",
                "Description": null
              }
            }
          ],
          "Images": [
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/639999/639999_4025Property94602.jpg",
              "Title": null,
              "Description": "MAIN"
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/639999/639999_4025Property94597.jpg",
              "Title": null,
              "Description": "Lobby Area"
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/639999/639999_4025Property94598.jpg",
              "Title": null,
              "Description": "Lobby Area"
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/639999/639999_4025Property118149.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/639999/639999_4025Property118158.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/639999/639999_4025Property118162.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/639999/639999_4025Property118163.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/639999/639999_4025Property118164.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/639999/639999_4025Property252389.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/639999/639999_4025Property252390.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/639999/639999_4025Property252391.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/639999/639999_4025Property252392.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/639999/639999_4025Property252393.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/639999/639999_4025Property252397.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/639999/639999_4025Property252398.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/639999/639999_4025Property252425.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/639999/639999_4025Property252426.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/639999/639999_4025Property252427.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/639999/639999_4025Property252428.jpg",
              "Title": null,
              "Description": ""
            }
          ],
          "Amenities": [
            {
              "AmenityID": 0,
              "Name": "Academia",
              "ImageURL": null
            },
            {
              "AmenityID": 0,
              "Name": "Café da manhã",
              "ImageURL": null
            },
            {
              "AmenityID": 0,
              "Name": "Estacionamento",
              "ImageURL": null
            },
            {
              "AmenityID": 0,
              "Name": "Internet",
              "ImageURL": null
            },
            {
              "AmenityID": 0,
              "Name": "Lavanderia",
              "ImageURL": null
            },
            {
              "AmenityID": 0,
              "Name": "Piscina",
              "ImageURL": null
            },
            {
              "AmenityID": 0,
              "Name": "Restaurante",
              "ImageURL": null
            }
          ],
          "Description": "O Meliá Ibirapuera está situado na Av. Ibirapuera, uma importante Avenida do Bairro de Moema. \rO hotel está a poucos minutos dos principais centros financeiro da cidade como a famosa Avenida Paulista e região da Av Luis Carlos Berrini, além da possibilidade de ir caminhando até o Shopping Ibirapuera. Isso sem contar na proximidade com o Parque do Ibirapuera o maior parque da América do Sul e do Aeroporto de Congonhas.. Seja viagem de negócios ou lazer, o hotel dispõe de infraestrutura completa para uma experiência inesquecível. Conheça o Meliá Ibirapuera e se apaixone por São Paulo....\r",
          "CheckinDate": ISODate("2019-11-28T19:26:12.067Z"),
          "CheckoutDate": ISODate("2019-11-28T19:26:12.067Z"),
          "Days": 0,
          "Iata": null,
          "Address": [
            {
              "Street": "Avenida Ibirapuera, 2534 ",
              "AddressNumber": null,
              "AddressComplement": null,
              "CityName": "São Paulo, Brasil",
              "StateName": null,
              "CountryName": null,
              "ZipCode": null
            }
          ],
          "Addressstring": null,
          "Broker": 1,
          "TripAdvisor": null,
          "Latitude": -23.6056499481201,
          "Longitude": -46.6646194458008
        }
      ],
      "ErrorMessages": null,
      "Token": "6db6a269-3b8c-4309-b957-26ec2d97358e",
      "Created": ISODate("2019-11-28T19:26:12.067Z"),
      "UserId": "34125136360",
      "HotelId": 639999,
      "IsPlanDaysAvailable": true,
      "AvailableDays": 7,
      "TotalDays": 7
    },
    "Error": null,
    "BookingFilter": {
      "Token": "6db6a269-3b8c-4309-b957-26ec2d97358e",
      "HotelId": 639999,
      "ProviderName": "Shop Hotel",
      "BrokerId": 1,
      "Rooms": [
        {
          "RoomId": "3230001",
          "Paxs": [
            {
              "Name": "Teste",
              "Surname": "Co",
              "Age": 38,
              "Title": null,
              "IsChild": false,
              "IsMainPax": false,
              "Document": "34125136360",
              "DocumentType": 1.0,
              "DocumentTypeDescription": "CPF"
            }
          ],
          "CancellationPolicies": null,
          "BoardDescription": null,
          "RoomDescription": null,
          "IsRefundable": false,
          "RoomPrice": null,
          "QuantityAdults": 1,
          "ChildAges": null,
          "QuantityChild": 0,
          "Quantity": 0
        }
      ],
      "UserId": "34125136360",
      "UserIP": "191.241.229.42",
      "OrderID": "CA34128111919278C5",
      "Price": {
        "PlanDailyUsed": 3,
        "TotalPriceExtra": "-78.09",
        "PlanExtraPrice": "0",
        "PlanPointUsed": 0,
        "PaymentOptionId": 1,
        "PlanMarkup": "20.0",
        "AccumulatedPoint": 0.0
      }
    },
    "BookingUpdateFilter": null,
    "CancelationFilter": {
      "UserId": "34125136360",
      "OrderId": "CA34128111919278C5",
      "UserIP": "191.241.229.42",
      "ServiceIds": [
        14038
      ],
      "CancellationDate": ISODate("2019-11-28T19:39:37.890Z")
    },
    "Created": ISODate("2019-11-28T19:27:08.816Z"),
    "IsActive": true,
    "ActualStatus": {
      "StatusId": 3,
      "Name": "Cancelado",
      "Description": null,
      "Date": ISODate("2019-11-28T19:39:51.010Z"),
      "PreviousStatusId": 2
    },
    "History": [
      {
        "StatusId": 2,
        "Name": "Confirmado",
        "Description": null,
        "Date": ISODate("2019-11-28T19:27:08.816Z"),
        "PreviousStatusId": null
      },
      {
        "StatusId": 3,
        "Name": "Cancelado",
        "Description": null,
        "Date": ISODate("2019-11-28T19:39:51.010Z"),
        "PreviousStatusId": 2
      }
    ],
    "CancelationPoliciesPenalty": {
      "id": "00000000-0000-0000-0000-000000000000",
      "_id": null,
      "RoomPrices": null,
      "Rooms": null,
      "CancellationRoomPrices": {
        "TotalPrice": "863.64",
        "DailyPrice": "0",
        "PlanType": null,
        "PlanDailyPrice": "0",
        "PlanTotalPrice": "0",
        "PlanNumberOfNightsUsed": 3,
        "PlanExtraReservationCostPrice": "0",
        "PlanExtraReservationFinalPrice": "0",
        "PlanCalculationFormula": "0",
        "PlanMarkup": "0",
        "Currency": null,
        "Description": null,
        "NumberOfNights": 3
      },
      "CancellationText": "Esta tarifa não é reembolsável e não pode ser alterada ou cancelada. Você não terá suas diárias reembolsadas se desejar alterar ou cancelar essa reserva.",
      "DtBegin": ISODate("2019-11-28T19:26:12.067Z"),
      "DtEnd": ISODate("2019-11-28T19:26:12.067Z"),
      "IsRefundable": false,
      "Error": null,
      "CancelationPoliciesFilter": null,
      "CancelationPoliciesPenaltyFilter": null,
      "Plan": null
    },
    "StartDate": null,
    "EndDate": null
  },
  {
    "_id": ObjectId("5de02135f9ecfc00016846ec"),
    "id": "00000000-0000-0000-0000-000000000000",
    "BookingResult": {
      "Rooms": [
        {
          "VoucherId": "587079-689345",
          "ReservationId": "11274",
          "ServiceId": 14039,
          "Status": "Cancelado",
          "Observations": "\nO hotel cobra uma Taxa de Turismo, por quarto, por dia. Este pagamento deverá ser efetuado diretamente no hotel.<br><br>As reservas compreendem até 11 apartamentos por período. Para mais de 11 apartamentos, é considerado política de grupos, com negociação e aplicabilidade de termos e condições distintos.",
          "RoomDescription": "Standard Casal",
          "SellingPrice": "1190.57",
          "CancellationPrice": "0",
          "Checkin": "2020-11-03",
          "Checkout": "2020-11-07",
          "Comission": "0",
          "HotelAddress": "Rua Pedroso Alvarenga 1256 Itaim Bibi",
          "BoardDescription": "Café da manhã",
          "BreakfeastIncluded": false,
          "HotelName": "Transamerica Executive Faria Lima",
          "Paxes": [
            {
              "Name": "Teste",
              "Surname": "Co",
              "Age": 38,
              "Title": "Mr",
              "IsChild": false,
              "IsMainPax": true,
              "Document": "34125136360"
            }
          ]
        }
      ],
      "RoomPrices": {
        "TotalPrice": "1190.57",
        "DailyPrice": "0",
        "PlanType": "Meu Plano",
        "PlanDailyPrice": "297.6425",
        "PlanTotalPrice": "0",
        "PlanNumberOfNightsUsed": 4,
        "PlanExtraReservationCostPrice": "0",
        "PlanExtraReservationFinalPrice": "0",
        "PlanCalculationFormula": "-9.43",
        "PlanMarkup": "20.0",
        "Currency": null,
        "Description": null,
        "NumberOfNights": 4
      },
      "Error": null
    },
    "OrderID": "CA341281119193315B",
    "CancelationPolicies": {
      "id": "00000000-0000-0000-0000-000000000000",
      "_id": ObjectId("5de02107f9ecfc00016846eb"),
      "RoomPrices": {
        "TotalPrice": "1191",
        "DailyPrice": "0",
        "PlanType": "Meu Plano",
        "PlanDailyPrice": "0",
        "PlanTotalPrice": "0",
        "PlanNumberOfNightsUsed": 4,
        "PlanExtraReservationCostPrice": "0",
        "PlanExtraReservationFinalPrice": "0",
        "PlanCalculationFormula": "-9",
        "PlanMarkup": "20.0",
        "Currency": null,
        "Description": null,
        "NumberOfNights": 0
      },
      "Rooms": [
        {
          "RoomId": null,
          "Paxs": null,
          "CancellationPolicies": [
            {
              "Description": null,
              "BeginDate": ISODate("2020-10-29T05:00:00.000Z"),
              "EndDate": ISODate("2020-11-03T00:00:00.000Z"),
              "Prices": {
                "Price": "1190.57",
                "DailyPriceTotal": "0",
                "PeriodPrice": "0",
                "TotalPeriodPriceTotal": "0",
                "Currency": "BRL",
                "Description": null
              },
              "Error": null
            }
          ],
          "BoardDescription": "Café da manhã",
          "RoomDescription": "Standard Casal",
          "IsRefundable": true,
          "RoomPrice": {
            "TotalPrice": "1191",
            "DailyPrice": "297.6425",
            "PlanType": null,
            "PlanDailyPrice": "0",
            "PlanTotalPrice": "0",
            "PlanNumberOfNightsUsed": 0,
            "PlanExtraReservationCostPrice": "0",
            "PlanExtraReservationFinalPrice": "0",
            "PlanCalculationFormula": "0",
            "PlanMarkup": "0",
            "Currency": "BRL",
            "Description": null,
            "NumberOfNights": 4
          },
          "QuantityAdults": 1,
          "ChildAges": null,
          "QuantityChild": 0,
          "Quantity": 1
        }
      ],
      "CancellationRoomPrices": {
        "TotalPrice": "1190.57",
        "DailyPrice": "0",
        "PlanType": null,
        "PlanDailyPrice": "0",
        "PlanTotalPrice": "0",
        "PlanNumberOfNightsUsed": 4,
        "PlanExtraReservationCostPrice": "0",
        "PlanExtraReservationFinalPrice": "-0.43",
        "PlanCalculationFormula": "0",
        "PlanMarkup": "0",
        "Currency": null,
        "Description": null,
        "NumberOfNights": 0
      },
      "CancellationText": "Você pode cancelar sem custo até 27/10/2020 às 05:00 haverá uma penalidade de 4 diária(s)  a partir de 27/10/2020 às 05:00.Caso não se apresente (no show), será cobrado o valor total da tarifa. Todos os horários estão expressos em hora local.",
      "DtBegin": ISODate("2020-10-27T05:00:00.000Z"),
      "DtEnd": ISODate("2020-11-03T00:00:00.000Z"),
      "IsRefundable": true,
      "Error": null,
      "CancelationPoliciesFilter": {
        "Token": "a3aee2e5-49c9-48a6-a38b-f8df566c7df7",
        "HotelId": 470200,
        "RoomIds": [
          3241001.0
        ],
        "UserId": "34125136360",
        "UserIP": "191.241.229.42",
        "BrokerId": 1,
        "ProviderName": "Europlus - Hotel",
        "CheckinDate": "2020-11-03",
        "CheckoutDate": "2020-11-07",
        "CheckinDateParse": ISODate("2020-11-03T00:00:00.000Z"),
        "CheckoutDateParse": ISODate("2020-11-07T00:00:00.000Z"),
        "NumberOfNights": 4,
        "PolicieDate": ISODate("2019-11-28T19:33:16.746Z")
      },
      "CancelationPoliciesPenaltyFilter": null,
      "Plan": {
        "cpf": "34125136360",
        "planos": [
          {
            "_id": "28b727d1-4bf8-c14d-926a-924cd402e49e",
            "titulo": "Superior 7 Diárias",
            "tipoPlano": "Superior",
            "valorPlano": "1080",
            "valorDiariaMaxima": "300",
            "valorDiariaMinima": "200.01",
            "diariasDisponiveis": 0,
            "diariasTotais": 7,
            "ativo": true,
            "Markup": "0.2"
          }
        ],
        "ErrorMessages": null
      }
    },
    "Availability": {
      "id": "00000000-0000-0000-0000-000000000000",
      "_id": ObjectId("5de020eda2513a00013caf61"),
      "HotelInfo": [
        {
          "ID": NumberLong(470200),
          "Name": "Transamerica Executive Faria Lima (São Paulo, Brasil)",
          "Chain": "Transamerica Executive",
          "CNPJ": null,
          "Site": null,
          "Category": "4",
          "AcommodationType": "Hotel",
          "Email": null,
          "Recommended": false,
          "PhoneNumber": null,
          "PrimaryImage": {
            "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/470200/470200_1805Property26814.jpg",
            "Title": null,
            "Description": null
          },
          "ImagesViewUrl": null,
          "MapUrl": null,
          "Rooms": [
            {
              "QuantityAdults": 1,
              "QuantityChild": 0,
              "ChildAges": null,
              "RoomsType": [
                {
                  "RoomID": "3241001",
                  "RoomName": "Standard Casal",
                  "Description": null,
                  "MaxOccupation": 1,
                  "Remarks": null,
                  "TermsAndConditions": null,
                  "TaxesIncluded": false,
                  "CancelationPolicies": [
                    {
                      "id": "00000000-0000-0000-0000-000000000000",
                      "_id": null,
                      "RoomPrices": null,
                      "Rooms": null,
                      "CancellationRoomPrices": null,
                      "CancellationText": null,
                      "DtBegin": ISODate("2019-11-28T19:26:12.067Z"),
                      "DtEnd": ISODate("2019-11-28T19:26:12.067Z"),
                      "IsRefundable": false,
                      "Error": null,
                      "CancelationPoliciesFilter": null,
                      "CancelationPoliciesPenaltyFilter": null,
                      "Plan": null
                    }
                  ],
                  "Amenities": null,
                  "RoomImages": null,
                  "Regime": {
                    "Name": "Café da manhã",
                    "BoardAcronym": null
                  },
                  "Days": 0,
                  "RoomPrices": {
                    "Price": "0",
                    "DailyPriceTotal": "0",
                    "PeriodPrice": "0",
                    "TotalPeriodPriceTotal": "0",
                    "Currency": "BRL",
                    "Description": null
                  },
                  "TaxPrices": null,
                  "IsBestPrice": false,
                  "IsNonRefundable": false,
                  "Quantity": 1,
                  "RecommendedRoom": false,
                  "providerId": 0,
                  "providerName": "Europlus - Hotel",
                  "BreakfeastIncluded": true,
                  "QuantityAdults": 1,
                  "ChildAges": null,
                  "QuantityChild": 0
                }
              ],
              "RoomPrices": {
                "Price": "0",
                "DailyPriceTotal": "0",
                "PeriodPrice": "0",
                "TotalPeriodPriceTotal": "0",
                "Currency": "BRL",
                "Description": null
              }
            },
            {
              "QuantityAdults": 1,
              "QuantityChild": 0,
              "ChildAges": null,
              "RoomsType": [
                {
                  "RoomID": "3241002",
                  "RoomName": "Standard Twin",
                  "Description": null,
                  "MaxOccupation": 1,
                  "Remarks": null,
                  "TermsAndConditions": null,
                  "TaxesIncluded": false,
                  "CancelationPolicies": [
                    {
                      "id": "00000000-0000-0000-0000-000000000000",
                      "_id": null,
                      "RoomPrices": null,
                      "Rooms": null,
                      "CancellationRoomPrices": null,
                      "CancellationText": null,
                      "DtBegin": ISODate("2019-11-28T19:26:12.067Z"),
                      "DtEnd": ISODate("2019-11-28T19:26:12.067Z"),
                      "IsRefundable": false,
                      "Error": null,
                      "CancelationPoliciesFilter": null,
                      "CancelationPoliciesPenaltyFilter": null,
                      "Plan": null
                    }
                  ],
                  "Amenities": null,
                  "RoomImages": null,
                  "Regime": {
                    "Name": "Café da manhã",
                    "BoardAcronym": null
                  },
                  "Days": 0,
                  "RoomPrices": {
                    "Price": "0",
                    "DailyPriceTotal": "0",
                    "PeriodPrice": "0",
                    "TotalPeriodPriceTotal": "0",
                    "Currency": "BRL",
                    "Description": null
                  },
                  "TaxPrices": null,
                  "IsBestPrice": false,
                  "IsNonRefundable": false,
                  "Quantity": 1,
                  "RecommendedRoom": false,
                  "providerId": 0,
                  "providerName": "Europlus - Hotel",
                  "BreakfeastIncluded": true,
                  "QuantityAdults": 1,
                  "ChildAges": null,
                  "QuantityChild": 0
                }
              ],
              "RoomPrices": {
                "Price": "0",
                "DailyPriceTotal": "0",
                "PeriodPrice": "0",
                "TotalPeriodPriceTotal": "0",
                "Currency": "BRL",
                "Description": null
              }
            }
          ],
          "Images": [
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/470200/470200_1805Property26814.jpg",
              "Title": null,
              "Description": "MAIN"
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/470200/470200_1805Property26815.jpg",
              "Title": null,
              "Description": "Recepção"
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/470200/470200_1805Property26816.jpg",
              "Title": null,
              "Description": "Lobby"
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/470200/470200_1805Property26817.jpg",
              "Title": null,
              "Description": "Restaurante"
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/470200/470200_1805Property26818.jpg",
              "Title": null,
              "Description": "Restaurante"
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/470200/470200_1805Property26819.jpg",
              "Title": null,
              "Description": "Fitness Center"
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/470200/470200_1805Property26820.jpg",
              "Title": null,
              "Description": "Piscina"
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/470200/470200_1805Property26821.jpg",
              "Title": null,
              "Description": "Eventos"
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/470200/470200_1805Property135260.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/470200/470200_1805Property135261.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/470200/470200_1805Property135262.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/470200/470200_1805Property135264.jpg",
              "Title": null,
              "Description": ""
            }
          ],
          "Amenities": [
            {
              "AmenityID": 0,
              "Name": "Academia",
              "ImageURL": null
            },
            {
              "AmenityID": 0,
              "Name": "Café da manhã",
              "ImageURL": null
            },
            {
              "AmenityID": 0,
              "Name": "Estacionamento",
              "ImageURL": null
            },
            {
              "AmenityID": 0,
              "Name": "Internet",
              "ImageURL": null
            },
            {
              "AmenityID": 0,
              "Name": "Lavanderia",
              "ImageURL": null
            },
            {
              "AmenityID": 0,
              "Name": "Piscina",
              "ImageURL": null
            },
            {
              "AmenityID": 0,
              "Name": "Restaurante",
              "ImageURL": null
            }
          ],
          "Description": "A uma quadra da Avenida Faria Lima, o hotel está no famoso bairro consagrado pelas inúmeras opções de gastronomia e entretenimento, o Itaim Bibi. Com uma decoração moderna e dependências muito funcionais é ideal para as pessoas de negócios mais exigentes. Oferece transfer gratuíto na região do Itaim de segunda-feira a sexta-feira, exceto feriados, a partir das 07h30 às 19h30. \r\rInformamos que o hotel possui uma Taxa de Turismo (Opcional), no valor de 4,65.\r\rAs reservas tratadas através desse sistema compreendem até 10 apartamentos por média de período. Acima de 11 apartamentos, é considerado política de Grupos, com negociação e aplicabilidade de Termos e Condições distintos.. ",
          "CheckinDate": ISODate("2019-11-28T19:26:12.067Z"),
          "CheckoutDate": ISODate("2019-11-28T19:26:12.067Z"),
          "Days": 0,
          "Iata": null,
          "Address": [
            {
              "Street": "RUA PEDROSO ALVARENGA, 1256 ",
              "AddressNumber": null,
              "AddressComplement": null,
              "CityName": "São Paulo, Brasil",
              "StateName": null,
              "CountryName": null,
              "ZipCode": null
            }
          ],
          "Addressstring": null,
          "Broker": 1,
          "TripAdvisor": null,
          "Latitude": -23.5829296112061,
          "Longitude": -46.6825408935547
        }
      ],
      "ErrorMessages": null,
      "Token": "a3aee2e5-49c9-48a6-a38b-f8df566c7df7",
      "Created": ISODate("2019-11-28T19:33:01.825Z"),
      "UserId": "34125136360",
      "HotelId": 470200,
      "IsPlanDaysAvailable": true,
      "AvailableDays": 4,
      "TotalDays": 7
    },
    "Error": null,
    "BookingFilter": {
      "Token": "a3aee2e5-49c9-48a6-a38b-f8df566c7df7",
      "HotelId": 470200,
      "ProviderName": "Europlus - Hotel",
      "BrokerId": 1,
      "Rooms": [
        {
          "RoomId": "3241001",
          "Paxs": [
            {
              "Name": "Teste",
              "Surname": "Co",
              "Age": 38,
              "Title": null,
              "IsChild": false,
              "IsMainPax": false,
              "Document": "34125136360",
              "DocumentType": 1.0,
              "DocumentTypeDescription": "CPF"
            }
          ],
          "CancellationPolicies": null,
          "BoardDescription": null,
          "RoomDescription": null,
          "IsRefundable": false,
          "RoomPrice": null,
          "QuantityAdults": 1,
          "ChildAges": null,
          "QuantityChild": 0,
          "Quantity": 0
        }
      ],
      "UserId": "34125136360",
      "UserIP": "191.241.229.42",
      "OrderID": "CA341281119193315B",
      "Price": {
        "PlanDailyUsed": 4,
        "TotalPriceExtra": "-9.43",
        "PlanExtraPrice": "0",
        "PlanPointUsed": 0,
        "PaymentOptionId": 1,
        "PlanMarkup": "20.0",
        "AccumulatedPoint": 0.0
      }
    },
    "BookingUpdateFilter": null,
    "CancelationFilter": {
      "UserId": "34125136360",
      "OrderId": "CA341281119193315B",
      "UserIP": "191.241.229.42",
      "ServiceIds": [
        14039
      ],
      "CancellationDate": ISODate("2019-11-28T20:35:07.490Z")
    },
    "Created": ISODate("2019-11-28T19:33:33.559Z"),
    "IsActive": true,
    "ActualStatus": {
      "StatusId": 3,
      "Name": "Cancelado",
      "Description": null,
      "Date": ISODate("2019-11-28T20:35:27.941Z"),
      "PreviousStatusId": 2
    },
    "History": [
      {
        "StatusId": 2,
        "Name": "Confirmado",
        "Description": null,
        "Date": ISODate("2019-11-28T19:33:33.559Z"),
        "PreviousStatusId": null
      },
      {
        "StatusId": 3,
        "Name": "Cancelado",
        "Description": null,
        "Date": ISODate("2019-11-28T20:35:27.941Z"),
        "PreviousStatusId": 2
      }
    ],
    "CancelationPoliciesPenalty": {
      "id": "00000000-0000-0000-0000-000000000000",
      "_id": null,
      "RoomPrices": null,
      "Rooms": null,
      "CancellationRoomPrices": {
        "TotalPrice": "0",
        "DailyPrice": "0",
        "PlanType": null,
        "PlanDailyPrice": "0",
        "PlanTotalPrice": "0",
        "PlanNumberOfNightsUsed": 0,
        "PlanExtraReservationCostPrice": "0",
        "PlanExtraReservationFinalPrice": "0",
        "PlanCalculationFormula": "0",
        "PlanMarkup": "0",
        "Currency": null,
        "Description": null,
        "NumberOfNights": 4
      },
      "CancellationText": "Você pode cancelar sem custo até 27/10/2020 às 05:00",
      "DtBegin": ISODate("2020-10-27T05:00:00.000Z"),
      "DtEnd": ISODate("2020-11-03T00:00:00.000Z"),
      "IsRefundable": false,
      "Error": null,
      "CancelationPoliciesFilter": null,
      "CancelationPoliciesPenaltyFilter": null,
      "Plan": null
    },
    "StartDate": null,
    "EndDate": null
  },
  {
    "_id": ObjectId("5de0243cf9ecfc00016846f0"),
    "id": "00000000-0000-0000-0000-000000000000",
    "BookingResult": {
      "Rooms": [
        {
          "VoucherId": "PROBLEMA_TECNICO",
          "ReservationId": "11278",
          "ServiceId": 14043.0,
          "Status": "Cancelado",
          "Observations": "\nAcomodação muito confortável de 30 m²,  varanda,  duas camas de solteiro. Alguns apartamentos com piso de madeira.\nMesa de trabalho, Duas linhas telefônicas, internet wi-fi cortesia, TV LCD com canais internacionais, cofre digital com espaço para laptop, ar-condicionado quente e frio com controle individual, frigobar, secador de cabelos e Kit amenities (itens de higiene pessoal) completos.\n\n\n<br /> <u>POLITICAS GERAIS:</u> - Cancelamentos ou alterações em até 24hrs antes do horário do check-in podem ser realizados gratuitamente. Cancelamento, alterações e não comparecimento após este período serão cobrados o valor de 100% da primeira diária da reserva; \n- Todas as reservas devem ser garantidas com um cartão de crédito; \n- O horário de check-in é a partir da 14:00 e o check-out deve ser feito até 12:00. Early check-in ou late check-out poderão gerar cobrança adicional;\n- Para o terceiro hóspede, será cobrado o valor de 25% do valor da diária; \n- Uma criança até seis anos não é cobrada, desde que durma em uma das camas pré-existentes no apartamento. Crianças acima de 6 anos serão cobradas 25% do valor da diária. No caso de duas crianças menores de 6 anos, uma delas será cortesia e uma cobrada 25% do valor da diária; \n- Condições disponíveis para reservas individuais de até 9 apartamentos durante o mesmo período. A partir de 10 apartamentos para o mesmo período, deve-se consultar o setor de reservas do hotel pois podem-se condições diferenciadas;\n- Não são permitidos animais de estimação.\n <br /><u>POLITICA DE CANCELAMENTO:</u> O Prazo para cancelamento é 48 horas antes do check-in.  \nAs reservas ficam confirmadas até às 12:00 horas do dia posterior ao dia de entrada.\n- Em caso de no-show de reservas garantidas ou pré-pagas ou canceladas fora do prazo, o valor referente a uma diária poderá ser cobrado ou retido como multa, e não será considerado como crédito. Caso seja um Pacote, haverá a cobrança ou a retenção dos valores despendidos com itens disponibilizados à reserva não efetivada.\n<br />\n<u>POLÍTICAS DE GARANTIA:</u> <br /> Política de Garantia  <br /> - Todas as reservas devem ser garantidas com um cartão de crédito;\n- Cancelamentos ou alterações em até 24hrs antes do horário do check-in podem ser realizados gratuitamente. Cancelamento, alterações e não comparecimento após este período serão cobrados o valor de 100% da primeira diária da reserva.\n <br />\n",
          "RoomDescription": "Superior - 2 Camas de Solteiro",
          "SellingPrice": "269.59",
          "CancellationPrice": "0",
          "Checkin": "2020-11-04",
          "Checkout": "2020-11-05",
          "Comission": "0",
          "HotelAddress": "RUA VERBO DIVINO  1323 Chácara Santo Antônio   São Paulo",
          "BoardDescription": "Café da manhã",
          "BreakfeastIncluded": false,
          "HotelName": "Blue Tree Premium Verbo Divino   Nações Unidas",
          "Paxes": [
            {
              "Name": "Danilo",
              "Surname": "Teste",
              "Age": 33.0,
              "Title": "Mr",
              "IsChild": false,
              "IsMainPax": true,
              "Document": "33858442828"
            }
          ]
        }
      ],
      "RoomPrices": {
        "TotalPrice": "269.59",
        "DailyPrice": "0",
        "PlanType": "Meu Plano",
        "PlanDailyPrice": "269.59",
        "PlanTotalPrice": "0",
        "PlanNumberOfNightsUsed": 1.0,
        "PlanExtraReservationCostPrice": "0",
        "PlanExtraReservationFinalPrice": "0",
        "PlanCalculationFormula": "-30.41",
        "PlanMarkup": "20.0",
        "Currency": null,
        "Description": null,
        "NumberOfNights": 1.0
      },
      "Error": null
    },
    "OrderID": "testeGuilher",
    "CancelationPolicies": {
      "id": "00000000-0000-0000-0000-000000000000",
      "_id": ObjectId("5de02427f9ecfc00016846ef"),
      "RoomPrices": {
        "TotalPrice": "270",
        "DailyPrice": "0",
        "PlanType": "Meu Plano",
        "PlanDailyPrice": "0",
        "PlanTotalPrice": "0",
        "PlanNumberOfNightsUsed": 1.0,
        "PlanExtraReservationCostPrice": "0",
        "PlanExtraReservationFinalPrice": "0",
        "PlanCalculationFormula": "-30",
        "PlanMarkup": "20.0",
        "Currency": null,
        "Description": null,
        "NumberOfNights": 0.0
      },
      "Rooms": [
        {
          "RoomId": null,
          "Paxs": null,
          "CancellationPolicies": [
            {
              "Description": null,
              "BeginDate": ISODate("2020-10-28T00:00:00.000Z"),
              "EndDate": ISODate("2020-11-04T00:00:00.000Z"),
              "Prices": {
                "Price": "271.09",
                "DailyPriceTotal": "0",
                "PeriodPrice": "0",
                "TotalPeriodPriceTotal": "0",
                "Currency": "BRL",
                "Description": null
              },
              "Error": null
            }
          ],
          "BoardDescription": "Café da manhã",
          "RoomDescription": "Superior - 2 Camas de Solteiro",
          "IsRefundable": true,
          "RoomPrice": {
            "TotalPrice": "270",
            "DailyPrice": "269.59",
            "PlanType": null,
            "PlanDailyPrice": "0",
            "PlanTotalPrice": "0",
            "PlanNumberOfNightsUsed": 0.0,
            "PlanExtraReservationCostPrice": "0",
            "PlanExtraReservationFinalPrice": "0",
            "PlanCalculationFormula": "0",
            "PlanMarkup": "0",
            "Currency": "BRL",
            "Description": null,
            "NumberOfNights": 1.0
          },
          "QuantityAdults": 1.0,
          "ChildAges": null,
          "QuantityChild": 0.0,
          "Quantity": 1.0
        }
      ],
      "CancellationRoomPrices": {
        "TotalPrice": "271.09",
        "DailyPrice": "0",
        "PlanType": null,
        "PlanDailyPrice": "0",
        "PlanTotalPrice": "0",
        "PlanNumberOfNightsUsed": 1.0,
        "PlanExtraReservationCostPrice": "0",
        "PlanExtraReservationFinalPrice": "1.09",
        "PlanCalculationFormula": "0",
        "PlanMarkup": "0",
        "Currency": null,
        "Description": null,
        "NumberOfNights": 0.0
      },
      "CancellationText": "Você pode cancelar sem custo até 26/10/2020 às 00:00 haverá uma penalidade de 1 diária(s)  a partir de 26/10/2020 às 00:00.Caso não se apresente (no show), será cobrado o valor total da tarifa. Todos os horários estão expressos em hora local.",
      "DtBegin": ISODate("2020-10-26T00:00:00.000Z"),
      "DtEnd": ISODate("2020-11-04T00:00:00.000Z"),
      "IsRefundable": true,
      "Error": null,
      "CancelationPoliciesFilter": {
        "Token": "cd910f6c-7c71-4043-9045-e60de8ab4aae",
        "HotelId": 617915.0,
        "RoomIds": [
          3222002.0
        ],
        "UserId": "25261400139",
        "UserIP": "191.241.229.42",
        "BrokerId": 1.0,
        "ProviderName": "EZ Link - Hotel",
        "CheckinDate": "2020-11-04",
        "CheckoutDate": "2020-11-05",
        "CheckinDateParse": ISODate("2020-11-04T00:00:00.000Z"),
        "CheckoutDateParse": ISODate("2020-11-05T00:00:00.000Z"),
        "NumberOfNights": 1.0,
        "PolicieDate": ISODate("2019-11-28T19:46:30.855Z")
      },
      "CancelationPoliciesPenaltyFilter": null,
      "Plan": {
        "cpf": "25261400139",
        "planos": [
          {
            "_id": "28b727d1-4bf8-c14d-926a-924cd402e49e",
            "titulo": "Superior 7 Diárias",
            "tipoPlano": "Superior",
            "valorPlano": "1080",
            "valorDiariaMaxima": "300",
            "valorDiariaMinima": "200.01",
            "diariasDisponiveis": 6.0,
            "diariasTotais": 7.0,
            "ativo": true,
            "Markup": "0.2"
          }
        ],
        "ErrorMessages": null
      }
    },
    "Availability": {
      "id": "00000000-0000-0000-0000-000000000000",
      "_id": ObjectId("5de02411a2513a00013caf67"),
      "HotelInfo": [
        {
          "ID": NumberLong(617915),
          "Name": "Blue Tree Premium Verbo Divino - Nações Unidas (São Paulo, Brasil)",
          "Chain": "Blue Tree Premium",
          "CNPJ": null,
          "Site": null,
          "Category": "4",
          "AcommodationType": "Hotel",
          "Email": null,
          "Recommended": false,
          "PhoneNumber": null,
          "PrimaryImage": {
            "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/617915/617915_1056Property193501.png",
            "Title": null,
            "Description": null
          },
          "ImagesViewUrl": null,
          "MapUrl": null,
          "Rooms": [
            {
              "QuantityAdults": 1.0,
              "QuantityChild": 0.0,
              "ChildAges": null,
              "RoomsType": [
                {
                  "RoomID": "3222002",
                  "RoomName": "Superior - 2 Camas de Solteiro",
                  "Description": null,
                  "MaxOccupation": 1.0,
                  "Remarks": null,
                  "TermsAndConditions": null,
                  "TaxesIncluded": false,
                  "CancelationPolicies": [
                    {
                      "id": "00000000-0000-0000-0000-000000000000",
                      "_id": null,
                      "RoomPrices": null,
                      "Rooms": null,
                      "CancellationRoomPrices": null,
                      "CancellationText": null,
                      "DtBegin": "Thu May 14 2020 17:07:32 GMT-0300",
                      "DtEnd": "Thu May 14 2020 17:07:32 GMT-0300",
                      "IsRefundable": false,
                      "Error": null,
                      "CancelationPoliciesFilter": null,
                      "CancelationPoliciesPenaltyFilter": null,
                      "Plan": null
                    }
                  ],
                  "Amenities": null,
                  "RoomImages": null,
                  "Regime": {
                    "Name": "Café da manhã",
                    "BoardAcronym": null
                  },
                  "Days": 0.0,
                  "RoomPrices": {
                    "Price": "0",
                    "DailyPriceTotal": "0",
                    "PeriodPrice": "0",
                    "TotalPeriodPriceTotal": "0",
                    "Currency": "BRL",
                    "Description": null
                  },
                  "TaxPrices": null,
                  "IsBestPrice": false,
                  "IsNonRefundable": false,
                  "Quantity": 1.0,
                  "RecommendedRoom": false,
                  "providerId": 0.0,
                  "providerName": "EZ Link - Hotel",
                  "BreakfeastIncluded": true,
                  "QuantityAdults": 1.0,
                  "ChildAges": null,
                  "QuantityChild": 0.0
                }
              ],
              "RoomPrices": {
                "Price": "0",
                "DailyPriceTotal": "0",
                "PeriodPrice": "0",
                "TotalPeriodPriceTotal": "0",
                "Currency": "BRL",
                "Description": null
              }
            },
            {
              "QuantityAdults": 1.0,
              "QuantityChild": 0.0,
              "ChildAges": null,
              "RoomsType": [
                {
                  "RoomID": "3222001",
                  "RoomName": "Superior - Cama King Size",
                  "Description": null,
                  "MaxOccupation": 1.0,
                  "Remarks": null,
                  "TermsAndConditions": null,
                  "TaxesIncluded": false,
                  "CancelationPolicies": [
                    {
                      "id": "00000000-0000-0000-0000-000000000000",
                      "_id": null,
                      "RoomPrices": null,
                      "Rooms": null,
                      "CancellationRoomPrices": null,
                      "CancellationText": null,
                      "DtBegin": "Thu May 14 2020 17:07:32 GMT-0300",
                      "DtEnd": "Thu May 14 2020 17:07:32 GMT-0300",
                      "IsRefundable": false,
                      "Error": null,
                      "CancelationPoliciesFilter": null,
                      "CancelationPoliciesPenaltyFilter": null,
                      "Plan": null
                    }
                  ],
                  "Amenities": null,
                  "RoomImages": null,
                  "Regime": {
                    "Name": "Café da manhã",
                    "BoardAcronym": null
                  },
                  "Days": 0.0,
                  "RoomPrices": {
                    "Price": "0",
                    "DailyPriceTotal": "0",
                    "PeriodPrice": "0",
                    "TotalPeriodPriceTotal": "0",
                    "Currency": "BRL",
                    "Description": null
                  },
                  "TaxPrices": null,
                  "IsBestPrice": false,
                  "IsNonRefundable": false,
                  "Quantity": 1.0,
                  "RecommendedRoom": false,
                  "providerId": 0.0,
                  "providerName": "EZ Link - Hotel",
                  "BreakfeastIncluded": true,
                  "QuantityAdults": 1.0,
                  "ChildAges": null,
                  "QuantityChild": 0.0
                }
              ],
              "RoomPrices": {
                "Price": "0",
                "DailyPriceTotal": "0",
                "PeriodPrice": "0",
                "TotalPeriodPriceTotal": "0",
                "Currency": "BRL",
                "Description": null
              }
            }
          ],
          "Images": [
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/617915/617915_1056Property193501.png",
              "Title": null,
              "Description": "MAIN"
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/617915/617915_1056Property40891.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/617915/617915_1056Property40892.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/617915/617915_1056Property40893.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/617915/617915_1056Property40894.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/617915/617915_1056Property40895.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/617915/617915_1056Property40896.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/617915/617915_1056Property40897.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/617915/617915_1056Property40900.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/617915/617915_1056Property40902.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/617915/617915_1056Property40903.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/617915/617915_1056Property40904.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/617915/617915_1056Property40905.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/617915/617915_1056Property40911.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/617915/617915_1056Property206082.JPG",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/617915/617915_1056Property206083.JPG",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/617915/617915_1056Property206084.JPG",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/617915/617915_1056Property206085.JPG",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/617915/617915_1056Property206086.JPG",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/617915/617915_1056Property257775.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/617915/617915_1056Property257776.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/617915/617915_1056Property257777.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/617915/617915_1056Property257778.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/617915/617915_1056Property257779.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/617915/617915_1056Property257780.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/617915/617915_1056Property257781.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/617915/617915_1056Property257802.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/617915/617915_1056Property257803.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/617915/617915_1056Property257804.jpg",
              "Title": null,
              "Description": ""
            }
          ],
          "Amenities": [
            {
              "AmenityID": 0.0,
              "Name": "Academia",
              "ImageURL": null
            },
            {
              "AmenityID": 0.0,
              "Name": "Café da manhã",
              "ImageURL": null
            },
            {
              "AmenityID": 0.0,
              "Name": "Estacionamento",
              "ImageURL": null
            },
            {
              "AmenityID": 0.0,
              "Name": "Internet",
              "ImageURL": null
            },
            {
              "AmenityID": 0.0,
              "Name": "Lavanderia",
              "ImageURL": null
            },
            {
              "AmenityID": 0.0,
              "Name": "Piscina",
              "ImageURL": null
            },
            {
              "AmenityID": 0.0,
              "Name": "Restaurante",
              "ImageURL": null
            }
          ],
          "Description": "Localizado em uma das principais áreas corporativas de São Paulo, a 7,2 km do Aeroporto de Congonhas, o Blue Tree Premium Verbo Divino se diferencia pelo charme, elegância, conforto, hospitalidade e, principalmente, serviços de excelência! \rVenha desfrutar de uma hospedagem com requinte, de uma reunião de negócios, um jantar ou almoço de qualidade ou um jogo de tênis para conhecer as nossas instalações e serviços. Sala vip de reuniões, bem como transfer gratuito em um raio de cinco quilômetros do hotel complementam a sua estada.",
          "CheckinDate": "Thu May 14 2020 17:07:32 GMT-0300",
          "CheckoutDate": "Thu May 14 2020 17:07:32 GMT-0300",
          "Days": 0.0,
          "Iata": null,
          "Address": [
            {
              "Street": "RUA VERBO DIVINO, 1323 Chácara Santo Antônio - São Paulo",
              "AddressNumber": null,
              "AddressComplement": null,
              "CityName": "São Paulo, Brasil",
              "StateName": null,
              "CountryName": null,
              "ZipCode": null
            }
          ],
          "Addressstring": null,
          "Broker": 1.0,
          "TripAdvisor": null,
          "Latitude": -23.631929397583,
          "Longitude": -46.7079887390137
        }
      ],
      "ErrorMessages": null,
      "Token": "cd910f6c-7c71-4043-9045-e60de8ab4aae",
      "Created": ISODate("2019-11-28T19:46:25.867Z"),
      "UserId": "25261400139",
      "HotelId": 617915.0,
      "IsPlanDaysAvailable": true,
      "AvailableDays": 7.0,
      "TotalDays": 7.0
    },
    "Error": null,
    "BookingFilter": {
      "Token": "cd910f6c-7c71-4043-9045-e60de8ab4aae",
      "HotelId": 617915.0,
      "ProviderName": "EZ Link - Hotel",
      "BrokerId": 1.0,
      "Rooms": [
        {
          "RoomId": "3222002",
          "Paxs": [
            {
              "Name": "Danilo",
              "Surname": "Teste",
              "Age": 33.0,
              "Title": null,
              "IsChild": false,
              "IsMainPax": false,
              "Document": "33858442828",
              "DocumentType": 1.0,
              "DocumentTypeDescription": "CPF"
            }
          ],
          "CancellationPolicies": null,
          "BoardDescription": null,
          "RoomDescription": null,
          "IsRefundable": false,
          "RoomPrice": null,
          "QuantityAdults": 1.0,
          "ChildAges": null,
          "QuantityChild": 0.0,
          "Quantity": 0.0
        }
      ],
      "UserId": "25261400139",
      "UserIP": "191.241.229.42",
      "OrderID": "CA2522811191946F84",
      "Price": {
        "PlanDailyUsed": 1,
        "TotalPriceExtra": "-30.41",
        "PlanExtraPrice": "0",
        "PlanPointUsed": 0,
        "PaymentOptionId": 1,
        "PlanMarkup": "20.0",
        "AccumulatedPoint": 0.0
      }
    },
    "BookingUpdateFilter": {
      "OrderID": "CA2522811191946F84",
      "StatusID": 5.0,
      "AttendantID": "127",
      "UserID": "25261400139",
      "ServiceID": [
        14043.0
      ]
    },
    "CancelationFilter": null,
    "Created": ISODate("2019-11-28T19:46:56.500Z"),
    "IsActive": true,
    "ActualStatus": {
      "StatusId": 5.0,
      "Name": "Cancelado_Manual",
      "Description": null,
      "Date": ISODate("2019-11-29T00:46:57.398Z"),
      "PreviousStatusId": 1.0
    },
    "History": [
      {
        "StatusId": 1.0,
        "Name": "Aguardando_Processamento",
        "Description": null,
        "Date": ISODate("2019-11-28T19:46:56.500Z"),
        "PreviousStatusId": null
      },
      {
        "StatusId": 5.0,
        "Name": "Cancelado_Manual",
        "Description": null,
        "Date": ISODate("2019-11-29T00:46:57.398Z"),
        "PreviousStatusId": 1.0
      }
    ],
    "CancelationPoliciesPenalty": null,
    "StartDate": null,
    "EndDate": null
  },
  {
    "_id": ObjectId("5de02609f9ecfc00016846f2"),
    "id": "00000000-0000-0000-0000-000000000000",
    "BookingResult": {
      "Rooms": [
        {
          "VoucherId": "587106-689367",
          "ReservationId": "11279",
          "ServiceId": 14044,
          "Status": "Cancelado",
          "Observations": "\nApartamentos com 30m²,ar-condicionado central, TV a cabo, duas linhas telefônicas, minibar, cofre digital com capacidade para acomodar um lap top, conexão para internet banda larga ou Wi-Fi.\n\n<br /> <u>POLITICAS GERAIS:</u> - Cancelamentos ou alterações em até 24hrs antes do horário do check-in podem ser realizados gratuitamente. Cancelamento, alterações e não comparecimento após este período serão cobrados o valor de 100% da primeira diária da reserva; \n- Todas as reservas devem ser garantidas com um cartão de crédito; \n- O horário de check-in é a partir da 14:00 e o check-out deve ser feito até 12:00. Early check-in ou late check-out poderão gerar cobrança adicional;\n- Para o terceiro hóspede, será cobrado o valor de 25% do valor da diária; \n- Uma criança até seis anos não é cobrada, desde que durma em uma das camas pré-existentes no apartamento. Crianças acima de 6 anos serão cobradas 25% do valor da diária. No caso de duas crianças menores de 6 anos, uma delas será cortesia e uma cobrada 25% do valor da diária; \n- Condições disponíveis para reservas individuais de até 9 apartamentos durante o mesmo período. A partir de 10 apartamentos para o mesmo período, deve-se consultar o setor de reservas do hotel pois podem-se condições diferenciadas;\n- Não são permitidos animais de estimação.\n <br /><u>POLITICA DE CANCELAMENTO:</u> O Prazo para cancelamento é 48 horas antes do check-in.  \nAs reservas ficam confirmadas até às 12:00 horas do dia posterior ao dia de entrada.\n- Em caso de no-show de reservas garantidas ou pré-pagas ou canceladas fora do prazo, o valor referente a uma diária poderá ser cobrado ou retido como multa, e não será considerado como crédito. Caso seja um Pacote, haverá a cobrança ou a retenção dos valores despendidos com itens disponibilizados à reserva não efetivada.\n<br />\n<u>POLÍTICAS DE GARANTIA:</u> <br /> Política de Garantia  <br /> - Todas as reservas devem ser garantidas com um cartão de crédito;\n- Cancelamentos ou alterações em até 24hrs antes do horário do check-in podem ser realizados gratuitamente. Cancelamento, alterações e não comparecimento após este período serão cobrados o valor de 100% da primeira diária da reserva.\n <br />\n",
          "RoomDescription": "Luxo - 2 Camas Solteiro",
          "SellingPrice": "295.32",
          "CancellationPrice": "0",
          "Checkin": "2020-11-04",
          "Checkout": "2020-11-05",
          "Comission": "0",
          "HotelAddress": "RUA VERBO DIVINO  1323 Chácara Santo Antônio   São Paulo",
          "BoardDescription": "Café da manhã",
          "BreakfeastIncluded": false,
          "HotelName": "Blue Tree Premium Verbo Divino   Nações Unidas",
          "Paxes": [
            {
              "Name": "Danilo",
              "Surname": "Teste",
              "Age": 33,
              "Title": "Mr",
              "IsChild": false,
              "IsMainPax": true,
              "Document": "33858442828"
            }
          ]
        }
      ],
      "RoomPrices": {
        "TotalPrice": "295.32",
        "DailyPrice": "0",
        "PlanType": "Meu Plano",
        "PlanDailyPrice": "295.32",
        "PlanTotalPrice": "0",
        "PlanNumberOfNightsUsed": 1,
        "PlanExtraReservationCostPrice": "0",
        "PlanExtraReservationFinalPrice": "0",
        "PlanCalculationFormula": "-4.68",
        "PlanMarkup": "20.0",
        "Currency": null,
        "Description": null,
        "NumberOfNights": 1
      },
      "Error": null
    },
    "OrderID": "CA2522811191954DCE",
    "CancelationPolicies": {
      "id": "00000000-0000-0000-0000-000000000000",
      "_id": ObjectId("5de025b7f9ecfc00016846f1"),
      "RoomPrices": {
        "TotalPrice": "296",
        "DailyPrice": "0",
        "PlanType": "Meu Plano",
        "PlanDailyPrice": "0",
        "PlanTotalPrice": "0",
        "PlanNumberOfNightsUsed": 1,
        "PlanExtraReservationCostPrice": "0",
        "PlanExtraReservationFinalPrice": "0",
        "PlanCalculationFormula": "-4",
        "PlanMarkup": "20.0",
        "Currency": null,
        "Description": null,
        "NumberOfNights": 0
      },
      "Rooms": [
        {
          "RoomId": null,
          "Paxs": null,
          "CancellationPolicies": [
            {
              "Description": null,
              "BeginDate": ISODate("2020-10-29T17:00:00.000Z"),
              "EndDate": ISODate("2020-11-04T00:00:00.000Z"),
              "Prices": {
                "Price": "295.32",
                "DailyPriceTotal": "0",
                "PeriodPrice": "0",
                "TotalPeriodPriceTotal": "0",
                "Currency": "BRL",
                "Description": null
              },
              "Error": null
            }
          ],
          "BoardDescription": "Café da manhã",
          "RoomDescription": "Luxo - 2 Camas Solteiro",
          "IsRefundable": true,
          "RoomPrice": {
            "TotalPrice": "296",
            "DailyPrice": "295.32",
            "PlanType": null,
            "PlanDailyPrice": "0",
            "PlanTotalPrice": "0",
            "PlanNumberOfNightsUsed": 0,
            "PlanExtraReservationCostPrice": "0",
            "PlanExtraReservationFinalPrice": "0",
            "PlanCalculationFormula": "0",
            "PlanMarkup": "0",
            "Currency": "BRL",
            "Description": null,
            "NumberOfNights": 1
          },
          "QuantityAdults": 1,
          "ChildAges": null,
          "QuantityChild": 0,
          "Quantity": 1
        }
      ],
      "CancellationRoomPrices": {
        "TotalPrice": "295.32",
        "DailyPrice": "0",
        "PlanType": null,
        "PlanDailyPrice": "0",
        "PlanTotalPrice": "0",
        "PlanNumberOfNightsUsed": 1,
        "PlanExtraReservationCostPrice": "0",
        "PlanExtraReservationFinalPrice": "-0.68",
        "PlanCalculationFormula": "0",
        "PlanMarkup": "0",
        "Currency": null,
        "Description": null,
        "NumberOfNights": 0
      },
      "CancellationText": "Você pode cancelar sem custo até 27/10/2020 às 17:00 haverá uma penalidade de 1 diária(s)  a partir de 27/10/2020 às 17:00.Caso não se apresente (no show), será cobrado o valor total da tarifa. Todos os horários estão expressos em hora local.",
      "DtBegin": ISODate("2020-10-27T17:00:00.000Z"),
      "DtEnd": ISODate("2020-11-04T00:00:00.000Z"),
      "IsRefundable": true,
      "Error": null,
      "CancelationPoliciesFilter": {
        "Token": "ba822a88-8ddd-4e77-b797-0ae29e06458a",
        "HotelId": 617915,
        "RoomIds": [
          3241004.0
        ],
        "UserId": "25261400139",
        "UserIP": "191.241.229.42",
        "BrokerId": 1,
        "ProviderName": "Europlus - Hotel",
        "CheckinDate": "2020-11-04",
        "CheckoutDate": "2020-11-05",
        "CheckinDateParse": ISODate("2020-11-04T00:00:00.000Z"),
        "CheckoutDateParse": ISODate("2020-11-05T00:00:00.000Z"),
        "NumberOfNights": 1,
        "PolicieDate": ISODate("2019-11-28T19:53:11.690Z")
      },
      "CancelationPoliciesPenaltyFilter": null,
      "Plan": {
        "cpf": "25261400139",
        "planos": [
          {
            "_id": "28b727d1-4bf8-c14d-926a-924cd402e49e",
            "titulo": "Superior 7 Diárias",
            "tipoPlano": "Superior",
            "valorPlano": "1080",
            "valorDiariaMaxima": "300",
            "valorDiariaMinima": "200.01",
            "diariasDisponiveis": 5,
            "diariasTotais": 7,
            "ativo": true,
            "Markup": "0.2"
          }
        ],
        "ErrorMessages": null
      }
    },
    "Availability": {
      "id": "00000000-0000-0000-0000-000000000000",
      "_id": ObjectId("5de0259da2513a00013caf6c"),
      "HotelInfo": [
        {
          "ID": NumberLong(617915),
          "Name": "Blue Tree Premium Verbo Divino - Nações Unidas (São Paulo, Brasil)",
          "Chain": "Blue Tree Premium",
          "CNPJ": null,
          "Site": null,
          "Category": "4",
          "AcommodationType": "Hotel",
          "Email": null,
          "Recommended": false,
          "PhoneNumber": null,
          "PrimaryImage": {
            "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/617915/617915_1056Property193501.png",
            "Title": null,
            "Description": null
          },
          "ImagesViewUrl": null,
          "MapUrl": null,
          "Rooms": [
            {
              "QuantityAdults": 1,
              "QuantityChild": 0,
              "ChildAges": null,
              "RoomsType": [
                {
                  "RoomID": "3241004",
                  "RoomName": "Luxo - 2 Camas Solteiro",
                  "Description": null,
                  "MaxOccupation": 1,
                  "Remarks": null,
                  "TermsAndConditions": null,
                  "TaxesIncluded": false,
                  "CancelationPolicies": [
                    {
                      "id": "00000000-0000-0000-0000-000000000000",
                      "_id": null,
                      "RoomPrices": null,
                      "Rooms": null,
                      "CancellationRoomPrices": null,
                      "CancellationText": null,
                      "DtBegin": ISODate("2019-11-28T19:26:12.067Z"),
                      "DtEnd": ISODate("2019-11-28T19:26:12.067Z"),
                      "IsRefundable": false,
                      "Error": null,
                      "CancelationPoliciesFilter": null,
                      "CancelationPoliciesPenaltyFilter": null,
                      "Plan": null
                    }
                  ],
                  "Amenities": null,
                  "RoomImages": null,
                  "Regime": {
                    "Name": "Café da manhã",
                    "BoardAcronym": null
                  },
                  "Days": 0,
                  "RoomPrices": {
                    "Price": "0",
                    "DailyPriceTotal": "0",
                    "PeriodPrice": "0",
                    "TotalPeriodPriceTotal": "0",
                    "Currency": "BRL",
                    "Description": null
                  },
                  "TaxPrices": null,
                  "IsBestPrice": false,
                  "IsNonRefundable": false,
                  "Quantity": 1,
                  "RecommendedRoom": false,
                  "providerId": 0,
                  "providerName": "Europlus - Hotel",
                  "BreakfeastIncluded": true,
                  "QuantityAdults": 1,
                  "ChildAges": null,
                  "QuantityChild": 0
                }
              ],
              "RoomPrices": {
                "Price": "0",
                "DailyPriceTotal": "0",
                "PeriodPrice": "0",
                "TotalPeriodPriceTotal": "0",
                "Currency": "BRL",
                "Description": null
              }
            },
            {
              "QuantityAdults": 1,
              "QuantityChild": 0,
              "ChildAges": null,
              "RoomsType": [
                {
                  "RoomID": "3241003",
                  "RoomName": "Luxo - Cama Casal",
                  "Description": null,
                  "MaxOccupation": 1,
                  "Remarks": null,
                  "TermsAndConditions": null,
                  "TaxesIncluded": false,
                  "CancelationPolicies": [
                    {
                      "id": "00000000-0000-0000-0000-000000000000",
                      "_id": null,
                      "RoomPrices": null,
                      "Rooms": null,
                      "CancellationRoomPrices": null,
                      "CancellationText": null,
                      "DtBegin": ISODate("2019-11-28T19:26:12.067Z"),
                      "DtEnd": ISODate("2019-11-28T19:26:12.067Z"),
                      "IsRefundable": false,
                      "Error": null,
                      "CancelationPoliciesFilter": null,
                      "CancelationPoliciesPenaltyFilter": null,
                      "Plan": null
                    }
                  ],
                  "Amenities": null,
                  "RoomImages": null,
                  "Regime": {
                    "Name": "Café da manhã",
                    "BoardAcronym": null
                  },
                  "Days": 0,
                  "RoomPrices": {
                    "Price": "0",
                    "DailyPriceTotal": "0",
                    "PeriodPrice": "0",
                    "TotalPeriodPriceTotal": "0",
                    "Currency": "BRL",
                    "Description": null
                  },
                  "TaxPrices": null,
                  "IsBestPrice": false,
                  "IsNonRefundable": false,
                  "Quantity": 1,
                  "RecommendedRoom": false,
                  "providerId": 0,
                  "providerName": "Europlus - Hotel",
                  "BreakfeastIncluded": true,
                  "QuantityAdults": 1,
                  "ChildAges": null,
                  "QuantityChild": 0
                }
              ],
              "RoomPrices": {
                "Price": "0",
                "DailyPriceTotal": "0",
                "PeriodPrice": "0",
                "TotalPeriodPriceTotal": "0",
                "Currency": "BRL",
                "Description": null
              }
            },
            {
              "QuantityAdults": 1,
              "QuantityChild": 0,
              "ChildAges": null,
              "RoomsType": [
                {
                  "RoomID": "3241002",
                  "RoomName": "Superior - 2 Camas de Solteiro",
                  "Description": null,
                  "MaxOccupation": 1,
                  "Remarks": null,
                  "TermsAndConditions": null,
                  "TaxesIncluded": false,
                  "CancelationPolicies": [
                    {
                      "id": "00000000-0000-0000-0000-000000000000",
                      "_id": null,
                      "RoomPrices": null,
                      "Rooms": null,
                      "CancellationRoomPrices": null,
                      "CancellationText": null,
                      "DtBegin": ISODate("2019-11-28T19:26:12.067Z"),
                      "DtEnd": ISODate("2019-11-28T19:26:12.067Z"),
                      "IsRefundable": false,
                      "Error": null,
                      "CancelationPoliciesFilter": null,
                      "CancelationPoliciesPenaltyFilter": null,
                      "Plan": null
                    }
                  ],
                  "Amenities": null,
                  "RoomImages": null,
                  "Regime": {
                    "Name": "Café da manhã",
                    "BoardAcronym": null
                  },
                  "Days": 0,
                  "RoomPrices": {
                    "Price": "0",
                    "DailyPriceTotal": "0",
                    "PeriodPrice": "0",
                    "TotalPeriodPriceTotal": "0",
                    "Currency": "BRL",
                    "Description": null
                  },
                  "TaxPrices": null,
                  "IsBestPrice": false,
                  "IsNonRefundable": false,
                  "Quantity": 1,
                  "RecommendedRoom": false,
                  "providerId": 0,
                  "providerName": "Europlus - Hotel",
                  "BreakfeastIncluded": true,
                  "QuantityAdults": 1,
                  "ChildAges": null,
                  "QuantityChild": 0
                }
              ],
              "RoomPrices": {
                "Price": "0",
                "DailyPriceTotal": "0",
                "PeriodPrice": "0",
                "TotalPeriodPriceTotal": "0",
                "Currency": "BRL",
                "Description": null
              }
            },
            {
              "QuantityAdults": 1,
              "QuantityChild": 0,
              "ChildAges": null,
              "RoomsType": [
                {
                  "RoomID": "3241001",
                  "RoomName": "Superior - Cama King Size",
                  "Description": null,
                  "MaxOccupation": 1,
                  "Remarks": null,
                  "TermsAndConditions": null,
                  "TaxesIncluded": false,
                  "CancelationPolicies": [
                    {
                      "id": "00000000-0000-0000-0000-000000000000",
                      "_id": null,
                      "RoomPrices": null,
                      "Rooms": null,
                      "CancellationRoomPrices": null,
                      "CancellationText": null,
                      "DtBegin": ISODate("2019-11-28T19:26:12.067Z"),
                      "DtEnd": ISODate("2019-11-28T19:26:12.067Z"),
                      "IsRefundable": false,
                      "Error": null,
                      "CancelationPoliciesFilter": null,
                      "CancelationPoliciesPenaltyFilter": null,
                      "Plan": null
                    }
                  ],
                  "Amenities": null,
                  "RoomImages": null,
                  "Regime": {
                    "Name": "Café da manhã",
                    "BoardAcronym": null
                  },
                  "Days": 0,
                  "RoomPrices": {
                    "Price": "0",
                    "DailyPriceTotal": "0",
                    "PeriodPrice": "0",
                    "TotalPeriodPriceTotal": "0",
                    "Currency": "BRL",
                    "Description": null
                  },
                  "TaxPrices": null,
                  "IsBestPrice": false,
                  "IsNonRefundable": false,
                  "Quantity": 1,
                  "RecommendedRoom": false,
                  "providerId": 0,
                  "providerName": "Europlus - Hotel",
                  "BreakfeastIncluded": true,
                  "QuantityAdults": 1,
                  "ChildAges": null,
                  "QuantityChild": 0
                }
              ],
              "RoomPrices": {
                "Price": "0",
                "DailyPriceTotal": "0",
                "PeriodPrice": "0",
                "TotalPeriodPriceTotal": "0",
                "Currency": "BRL",
                "Description": null
              }
            }
          ],
          "Images": [
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/617915/617915_1056Property193501.png",
              "Title": null,
              "Description": "MAIN"
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/617915/617915_1056Property40891.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/617915/617915_1056Property40892.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/617915/617915_1056Property40893.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/617915/617915_1056Property40894.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/617915/617915_1056Property40895.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/617915/617915_1056Property40896.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/617915/617915_1056Property40897.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/617915/617915_1056Property40900.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/617915/617915_1056Property40902.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/617915/617915_1056Property40903.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/617915/617915_1056Property40904.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/617915/617915_1056Property40905.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/617915/617915_1056Property40911.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/617915/617915_1056Property206082.JPG",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/617915/617915_1056Property206083.JPG",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/617915/617915_1056Property206084.JPG",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/617915/617915_1056Property206085.JPG",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/617915/617915_1056Property206086.JPG",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/617915/617915_1056Property257775.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/617915/617915_1056Property257776.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/617915/617915_1056Property257777.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/617915/617915_1056Property257778.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/617915/617915_1056Property257779.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/617915/617915_1056Property257780.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/617915/617915_1056Property257781.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/617915/617915_1056Property257802.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/617915/617915_1056Property257803.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/617915/617915_1056Property257804.jpg",
              "Title": null,
              "Description": ""
            }
          ],
          "Amenities": [
            {
              "AmenityID": 0,
              "Name": "Academia",
              "ImageURL": null
            },
            {
              "AmenityID": 0,
              "Name": "Café da manhã",
              "ImageURL": null
            },
            {
              "AmenityID": 0,
              "Name": "Estacionamento",
              "ImageURL": null
            },
            {
              "AmenityID": 0,
              "Name": "Internet",
              "ImageURL": null
            },
            {
              "AmenityID": 0,
              "Name": "Lavanderia",
              "ImageURL": null
            },
            {
              "AmenityID": 0,
              "Name": "Piscina",
              "ImageURL": null
            },
            {
              "AmenityID": 0,
              "Name": "Restaurante",
              "ImageURL": null
            }
          ],
          "Description": "Localizado em uma das principais áreas corporativas de São Paulo, a 7,2 km do Aeroporto de Congonhas, o Blue Tree Premium Verbo Divino se diferencia pelo charme, elegância, conforto, hospitalidade e, principalmente, serviços de excelência! \rVenha desfrutar de uma hospedagem com requinte, de uma reunião de negócios, um jantar ou almoço de qualidade ou um jogo de tênis para conhecer as nossas instalações e serviços. Sala vip de reuniões, bem como transfer gratuito em um raio de cinco quilômetros do hotel complementam a sua estada.",
          "CheckinDate": ISODate("2019-11-28T19:26:12.067Z"),
          "CheckoutDate": ISODate("2019-11-28T19:26:12.067Z"),
          "Days": 0,
          "Iata": null,
          "Address": [
            {
              "Street": "RUA VERBO DIVINO, 1323 Chácara Santo Antônio - São Paulo",
              "AddressNumber": null,
              "AddressComplement": null,
              "CityName": "São Paulo, Brasil",
              "StateName": null,
              "CountryName": null,
              "ZipCode": null
            }
          ],
          "Addressstring": null,
          "Broker": 1,
          "TripAdvisor": null,
          "Latitude": -23.631929397583,
          "Longitude": -46.7079887390137
        }
      ],
      "ErrorMessages": null,
      "Token": "ba822a88-8ddd-4e77-b797-0ae29e06458a",
      "Created": ISODate("2019-11-28T19:53:01.109Z"),
      "UserId": "25261400139",
      "HotelId": 617915,
      "IsPlanDaysAvailable": true,
      "AvailableDays": 6,
      "TotalDays": 7
    },
    "Error": null,
    "BookingFilter": {
      "Token": "ba822a88-8ddd-4e77-b797-0ae29e06458a",
      "HotelId": 617915,
      "ProviderName": "Europlus - Hotel",
      "BrokerId": 1,
      "Rooms": [
        {
          "RoomId": "3241004",
          "Paxs": [
            {
              "Name": "Danilo",
              "Surname": "Teste",
              "Age": 33,
              "Title": null,
              "IsChild": false,
              "IsMainPax": false,
              "Document": "33858442828",
              "DocumentType": 1.0,
              "DocumentTypeDescription": "CPF"
            }
          ],
          "CancellationPolicies": null,
          "BoardDescription": null,
          "RoomDescription": null,
          "IsRefundable": false,
          "RoomPrice": null,
          "QuantityAdults": 1,
          "ChildAges": null,
          "QuantityChild": 0,
          "Quantity": 0
        }
      ],
      "UserId": "25261400139",
      "UserIP": "191.241.229.42",
      "OrderID": "CA2522811191954DCE",
      "Price": {
        "PlanDailyUsed": 1,
        "TotalPriceExtra": "-4.68",
        "PlanExtraPrice": "0",
        "PlanPointUsed": 0,
        "PaymentOptionId": 1,
        "PlanMarkup": "20.0",
        "AccumulatedPoint": 0.0
      }
    },
    "BookingUpdateFilter": null,
    "CancelationFilter": {
      "UserId": "25261400139",
      "OrderId": "CA2522811191954DCE",
      "UserIP": "191.241.229.42",
      "ServiceIds": [
        14044
      ],
      "CancellationDate": ISODate("2019-11-28T20:41:18.198Z")
    },
    "Created": ISODate("2019-11-28T19:54:25.413Z"),
    "IsActive": true,
    "ActualStatus": {
      "StatusId": 3,
      "Name": "Cancelado",
      "Description": null,
      "Date": ISODate("2019-11-28T20:41:26.785Z"),
      "PreviousStatusId": 2
    },
    "History": [
      {
        "StatusId": 2,
        "Name": "Confirmado",
        "Description": null,
        "Date": ISODate("2019-11-28T19:54:25.413Z"),
        "PreviousStatusId": null
      },
      {
        "StatusId": 3,
        "Name": "Cancelado",
        "Description": null,
        "Date": ISODate("2019-11-28T20:41:26.785Z"),
        "PreviousStatusId": 2
      }
    ],
    "CancelationPoliciesPenalty": {
      "id": "00000000-0000-0000-0000-000000000000",
      "_id": null,
      "RoomPrices": null,
      "Rooms": null,
      "CancellationRoomPrices": {
        "TotalPrice": "0",
        "DailyPrice": "0",
        "PlanType": null,
        "PlanDailyPrice": "0",
        "PlanTotalPrice": "0",
        "PlanNumberOfNightsUsed": 0,
        "PlanExtraReservationCostPrice": "0",
        "PlanExtraReservationFinalPrice": "0",
        "PlanCalculationFormula": "0",
        "PlanMarkup": "0",
        "Currency": null,
        "Description": null,
        "NumberOfNights": 1
      },
      "CancellationText": "Você pode cancelar sem custo até 27/10/2020 às 17:00",
      "DtBegin": ISODate("2020-10-27T17:00:00.000Z"),
      "DtEnd": ISODate("2020-11-04T00:00:00.000Z"),
      "IsRefundable": false,
      "Error": null,
      "CancelationPoliciesFilter": null,
      "CancelationPoliciesPenaltyFilter": null,
      "Plan": null
    },
    "StartDate": null,
    "EndDate": null
  },
  {
    "_id": ObjectId("5de0604df9ecfc00016846fd"),
    "id": "00000000-0000-0000-0000-000000000000",
    "BookingResult": {
      "Rooms": [
        {
          "VoucherId": "587296-689543",
          "ReservationId": "11283",
          "ServiceId": 14049,
          "Status": "Cancelado",
          "Observations": null,
          "RoomDescription": "Superior com Cama de Casal",
          "SellingPrice": "311.56",
          "CancellationPrice": "0",
          "Checkin": "2020-02-09",
          "Checkout": "2020-02-12",
          "Comission": "0",
          "HotelAddress": "Rua Tibagi  307 Centro",
          "BoardDescription": "Café da manhã",
          "BreakfeastIncluded": false,
          "HotelName": "Roochelle Corporate Hotel",
          "Paxes": [
            {
              "Name": "Ana",
              "Surname": "Flores",
              "Age": 39,
              "Title": "Mr",
              "IsChild": false,
              "IsMainPax": true,
              "Document": "84215186820"
            }
          ]
        },
        {
          "VoucherId": "587296-689544",
          "ReservationId": "11283",
          "ServiceId": 14050,
          "Status": "Cancelado",
          "Observations": null,
          "RoomDescription": "Executivo",
          "SellingPrice": "363.91",
          "CancellationPrice": "0",
          "Checkin": "2020-02-09",
          "Checkout": "2020-02-12",
          "Comission": "0",
          "HotelAddress": "Rua Tibagi  307 Centro",
          "BoardDescription": "Café da manhã",
          "BreakfeastIncluded": false,
          "HotelName": "Roochelle Corporate Hotel",
          "Paxes": [
            {
              "Name": "Fabio",
              "Surname": "Flores",
              "Age": 43,
              "Title": "Mr",
              "IsChild": false,
              "IsMainPax": true,
              "Document": "86238699825"
            },
            {
              "Name": "Ricardo",
              "Surname": "Flores",
              "Age": 2,
              "Title": "Mr",
              "IsChild": true,
              "IsMainPax": false,
              "Document": null
            }
          ]
        }
      ],
      "RoomPrices": {
        "TotalPrice": "675.47",
        "DailyPrice": "0",
        "PlanType": "Meu Plano",
        "PlanDailyPrice": "225.15666666666666666666666667",
        "PlanTotalPrice": "0",
        "PlanNumberOfNightsUsed": 3,
        "PlanExtraReservationCostPrice": "0",
        "PlanExtraReservationFinalPrice": "0",
        "PlanCalculationFormula": "-224.53",
        "PlanMarkup": "20.0",
        "Currency": null,
        "Description": null,
        "NumberOfNights": 3
      },
      "Error": null
    },
    "OrderID": "CA252291119000227B",
    "CancelationPolicies": {
      "id": "00000000-0000-0000-0000-000000000000",
      "_id": ObjectId("5de05febf9ecfc00016846fc"),
      "RoomPrices": {
        "TotalPrice": "676",
        "DailyPrice": "0",
        "PlanType": "Meu Plano",
        "PlanDailyPrice": "0",
        "PlanTotalPrice": "0",
        "PlanNumberOfNightsUsed": 3,
        "PlanExtraReservationCostPrice": "0",
        "PlanExtraReservationFinalPrice": "0",
        "PlanCalculationFormula": "-224",
        "PlanMarkup": "20.0",
        "Currency": null,
        "Description": null,
        "NumberOfNights": 0
      },
      "Rooms": [
        {
          "RoomId": null,
          "Paxs": null,
          "CancellationPolicies": [
            {
              "Description": null,
              "BeginDate": ISODate("2020-02-04T05:00:00.000Z"),
              "EndDate": ISODate("2020-02-09T00:00:00.000Z"),
              "Prices": {
                "Price": "311.56",
                "DailyPriceTotal": "0",
                "PeriodPrice": "0",
                "TotalPeriodPriceTotal": "0",
                "Currency": "BRL",
                "Description": null
              },
              "Error": null
            }
          ],
          "BoardDescription": "Café da manhã",
          "RoomDescription": "Superior com Cama de Casal",
          "IsRefundable": true,
          "RoomPrice": {
            "TotalPrice": "312",
            "DailyPrice": "103.85333333333333333333333333",
            "PlanType": null,
            "PlanDailyPrice": "0",
            "PlanTotalPrice": "0",
            "PlanNumberOfNightsUsed": 0,
            "PlanExtraReservationCostPrice": "0",
            "PlanExtraReservationFinalPrice": "0",
            "PlanCalculationFormula": "0",
            "PlanMarkup": "0",
            "Currency": "BRL",
            "Description": null,
            "NumberOfNights": 3
          },
          "QuantityAdults": 1,
          "ChildAges": null,
          "QuantityChild": 0,
          "Quantity": 1
        },
        {
          "RoomId": null,
          "Paxs": null,
          "CancellationPolicies": [
            {
              "Description": null,
              "BeginDate": ISODate("2020-02-04T05:00:00.000Z"),
              "EndDate": ISODate("2020-02-09T00:00:00.000Z"),
              "Prices": {
                "Price": "363.91",
                "DailyPriceTotal": "0",
                "PeriodPrice": "0",
                "TotalPeriodPriceTotal": "0",
                "Currency": "BRL",
                "Description": null
              },
              "Error": null
            }
          ],
          "BoardDescription": "Café da manhã",
          "RoomDescription": "Executivo",
          "IsRefundable": true,
          "RoomPrice": {
            "TotalPrice": "364",
            "DailyPrice": "121.30333333333333333333333333",
            "PlanType": null,
            "PlanDailyPrice": "0",
            "PlanTotalPrice": "0",
            "PlanNumberOfNightsUsed": 0,
            "PlanExtraReservationCostPrice": "0",
            "PlanExtraReservationFinalPrice": "0",
            "PlanCalculationFormula": "0",
            "PlanMarkup": "0",
            "Currency": "BRL",
            "Description": null,
            "NumberOfNights": 3
          },
          "QuantityAdults": 1,
          "ChildAges": [
            2
          ],
          "QuantityChild": 1,
          "Quantity": 1
        }
      ],
      "CancellationRoomPrices": {
        "TotalPrice": "675.47",
        "DailyPrice": "0",
        "PlanType": null,
        "PlanDailyPrice": "0",
        "PlanTotalPrice": "0",
        "PlanNumberOfNightsUsed": 3,
        "PlanExtraReservationCostPrice": "0",
        "PlanExtraReservationFinalPrice": "-0.53",
        "PlanCalculationFormula": "0",
        "PlanMarkup": "0",
        "Currency": null,
        "Description": null,
        "NumberOfNights": 0
      },
      "CancellationText": "Você pode cancelar sem custo até 02/02/2020 às 05:00 haverá uma penalidade de 3 diária(s)  a partir de 02/02/2020 às 05:00.Caso não se apresente (no show), será cobrado o valor total da tarifa. Todos os horários estão expressos em hora local.",
      "DtBegin": ISODate("2020-02-02T05:00:00.000Z"),
      "DtEnd": ISODate("2020-02-09T00:00:00.000Z"),
      "IsRefundable": true,
      "Error": null,
      "CancelationPoliciesFilter": {
        "Token": "24b7765d-6940-40e0-8095-5fc595667d16",
        "HotelId": 25935,
        "RoomIds": [
          3241001.0,
          3241006.0
        ],
        "UserId": "25261400139",
        "UserIP": "191.241.229.42",
        "BrokerId": 1,
        "ProviderName": "Europlus - Hotel",
        "CheckinDate": "2020-02-09",
        "CheckoutDate": "2020-02-12",
        "CheckinDateParse": ISODate("2020-02-09T00:00:00.000Z"),
        "CheckoutDateParse": ISODate("2020-02-12T00:00:00.000Z"),
        "NumberOfNights": 3,
        "PolicieDate": ISODate("2019-11-29T00:01:35.948Z")
      },
      "CancelationPoliciesPenaltyFilter": null,
      "Plan": {
        "cpf": "25261400139",
        "planos": [
          {
            "_id": "28b727d1-4bf8-c14d-926a-924cd402e49e",
            "titulo": "Superior 7 Diárias",
            "tipoPlano": "Superior",
            "valorPlano": "1080",
            "valorDiariaMaxima": "300",
            "valorDiariaMinima": "200.01",
            "diariasDisponiveis": 4,
            "diariasTotais": 7,
            "ativo": true,
            "Markup": "0.2"
          }
        ],
        "ErrorMessages": null
      }
    },
    "Availability": {
      "id": "00000000-0000-0000-0000-000000000000",
      "_id": ObjectId("5de05fd3a2513a00013caf75"),
      "HotelInfo": [
        {
          "ID": NumberLong(25935),
          "Name": "Roochelle Hotel (Curitiba, Brasil)",
          "Chain": "Independent",
          "CNPJ": null,
          "Site": null,
          "Category": "3",
          "AcommodationType": "Hotel",
          "Email": null,
          "Recommended": false,
          "PhoneNumber": null,
          "PrimaryImage": {
            "ImageUrl": "https://i.t4w.mobi/h/BR/1112002/25935/25935_4104Property140043.png",
            "Title": null,
            "Description": null
          },
          "ImagesViewUrl": null,
          "MapUrl": null,
          "Rooms": [
            {
              "QuantityAdults": 2,
              "QuantityChild": 1,
              "ChildAges": null,
              "RoomsType": [
                {
                  "RoomID": "3241001",
                  "RoomName": "Superior com Cama de Casal",
                  "Description": null,
                  "MaxOccupation": 1,
                  "Remarks": null,
                  "TermsAndConditions": null,
                  "TaxesIncluded": false,
                  "CancelationPolicies": [
                    {
                      "id": "00000000-0000-0000-0000-000000000000",
                      "_id": null,
                      "RoomPrices": null,
                      "Rooms": null,
                      "CancellationRoomPrices": null,
                      "CancellationText": null,
                      "DtBegin": ISODate("2019-11-28T19:26:12.067Z"),
                      "DtEnd": ISODate("2019-11-28T19:26:12.067Z"),
                      "IsRefundable": false,
                      "Error": null,
                      "CancelationPoliciesFilter": null,
                      "CancelationPoliciesPenaltyFilter": null,
                      "Plan": null
                    }
                  ],
                  "Amenities": null,
                  "RoomImages": null,
                  "Regime": {
                    "Name": "Café da manhã",
                    "BoardAcronym": null
                  },
                  "Days": 0,
                  "RoomPrices": {
                    "Price": "0",
                    "DailyPriceTotal": "0",
                    "PeriodPrice": "0",
                    "TotalPeriodPriceTotal": "0",
                    "Currency": "BRL",
                    "Description": null
                  },
                  "TaxPrices": null,
                  "IsBestPrice": false,
                  "IsNonRefundable": false,
                  "Quantity": 1,
                  "RecommendedRoom": false,
                  "providerId": 0,
                  "providerName": "Europlus - Hotel",
                  "BreakfeastIncluded": true,
                  "QuantityAdults": 1,
                  "ChildAges": null,
                  "QuantityChild": 0
                },
                {
                  "RoomID": "3241006",
                  "RoomName": "Executivo",
                  "Description": null,
                  "MaxOccupation": 1,
                  "Remarks": null,
                  "TermsAndConditions": null,
                  "TaxesIncluded": false,
                  "CancelationPolicies": [
                    {
                      "id": "00000000-0000-0000-0000-000000000000",
                      "_id": null,
                      "RoomPrices": null,
                      "Rooms": null,
                      "CancellationRoomPrices": null,
                      "CancellationText": null,
                      "DtBegin": ISODate("2019-11-28T19:26:12.067Z"),
                      "DtEnd": ISODate("2019-11-28T19:26:12.067Z"),
                      "IsRefundable": false,
                      "Error": null,
                      "CancelationPoliciesFilter": null,
                      "CancelationPoliciesPenaltyFilter": null,
                      "Plan": null
                    }
                  ],
                  "Amenities": null,
                  "RoomImages": null,
                  "Regime": {
                    "Name": "Café da manhã",
                    "BoardAcronym": null
                  },
                  "Days": 0,
                  "RoomPrices": {
                    "Price": "0",
                    "DailyPriceTotal": "0",
                    "PeriodPrice": "0",
                    "TotalPeriodPriceTotal": "0",
                    "Currency": "BRL",
                    "Description": null
                  },
                  "TaxPrices": null,
                  "IsBestPrice": false,
                  "IsNonRefundable": false,
                  "Quantity": 1,
                  "RecommendedRoom": false,
                  "providerId": 0,
                  "providerName": "Europlus - Hotel",
                  "BreakfeastIncluded": true,
                  "QuantityAdults": 1,
                  "ChildAges": [
                    2
                  ],
                  "QuantityChild": 1
                }
              ],
              "RoomPrices": {
                "Price": "0",
                "DailyPriceTotal": "0",
                "PeriodPrice": "0",
                "TotalPeriodPriceTotal": "0",
                "Currency": "BRL",
                "Description": null
              }
            },
            {
              "QuantityAdults": 2,
              "QuantityChild": 1,
              "ChildAges": null,
              "RoomsType": [
                {
                  "RoomID": "3241001",
                  "RoomName": "Superior com Cama de Casal",
                  "Description": null,
                  "MaxOccupation": 1,
                  "Remarks": null,
                  "TermsAndConditions": null,
                  "TaxesIncluded": false,
                  "CancelationPolicies": [
                    {
                      "id": "00000000-0000-0000-0000-000000000000",
                      "_id": null,
                      "RoomPrices": null,
                      "Rooms": null,
                      "CancellationRoomPrices": null,
                      "CancellationText": null,
                      "DtBegin": ISODate("2019-11-28T19:26:12.067Z"),
                      "DtEnd": ISODate("2019-11-28T19:26:12.067Z"),
                      "IsRefundable": false,
                      "Error": null,
                      "CancelationPoliciesFilter": null,
                      "CancelationPoliciesPenaltyFilter": null,
                      "Plan": null
                    }
                  ],
                  "Amenities": null,
                  "RoomImages": null,
                  "Regime": {
                    "Name": "Café da manhã",
                    "BoardAcronym": null
                  },
                  "Days": 0,
                  "RoomPrices": {
                    "Price": "0",
                    "DailyPriceTotal": "0",
                    "PeriodPrice": "0",
                    "TotalPeriodPriceTotal": "0",
                    "Currency": "BRL",
                    "Description": null
                  },
                  "TaxPrices": null,
                  "IsBestPrice": false,
                  "IsNonRefundable": false,
                  "Quantity": 1,
                  "RecommendedRoom": false,
                  "providerId": 0,
                  "providerName": "Europlus - Hotel",
                  "BreakfeastIncluded": true,
                  "QuantityAdults": 1,
                  "ChildAges": null,
                  "QuantityChild": 0
                },
                {
                  "RoomID": "3241005",
                  "RoomName": "Superior com 2 Camas de Solteiro",
                  "Description": null,
                  "MaxOccupation": 1,
                  "Remarks": null,
                  "TermsAndConditions": null,
                  "TaxesIncluded": false,
                  "CancelationPolicies": [
                    {
                      "id": "00000000-0000-0000-0000-000000000000",
                      "_id": null,
                      "RoomPrices": null,
                      "Rooms": null,
                      "CancellationRoomPrices": null,
                      "CancellationText": null,
                      "DtBegin": ISODate("2019-11-28T19:26:12.067Z"),
                      "DtEnd": ISODate("2019-11-28T19:26:12.067Z"),
                      "IsRefundable": false,
                      "Error": null,
                      "CancelationPoliciesFilter": null,
                      "CancelationPoliciesPenaltyFilter": null,
                      "Plan": null
                    }
                  ],
                  "Amenities": null,
                  "RoomImages": null,
                  "Regime": {
                    "Name": "Café da manhã",
                    "BoardAcronym": null
                  },
                  "Days": 0,
                  "RoomPrices": {
                    "Price": "0",
                    "DailyPriceTotal": "0",
                    "PeriodPrice": "0",
                    "TotalPeriodPriceTotal": "0",
                    "Currency": "BRL",
                    "Description": null
                  },
                  "TaxPrices": null,
                  "IsBestPrice": false,
                  "IsNonRefundable": false,
                  "Quantity": 1,
                  "RecommendedRoom": false,
                  "providerId": 0,
                  "providerName": "Europlus - Hotel",
                  "BreakfeastIncluded": true,
                  "QuantityAdults": 1,
                  "ChildAges": [
                    2
                  ],
                  "QuantityChild": 1
                }
              ],
              "RoomPrices": {
                "Price": "0",
                "DailyPriceTotal": "0",
                "PeriodPrice": "0",
                "TotalPeriodPriceTotal": "0",
                "Currency": "BRL",
                "Description": null
              }
            },
            {
              "QuantityAdults": 2,
              "QuantityChild": 1,
              "ChildAges": null,
              "RoomsType": [
                {
                  "RoomID": "3241001",
                  "RoomName": "Superior com Cama de Casal",
                  "Description": null,
                  "MaxOccupation": 1,
                  "Remarks": null,
                  "TermsAndConditions": null,
                  "TaxesIncluded": false,
                  "CancelationPolicies": [
                    {
                      "id": "00000000-0000-0000-0000-000000000000",
                      "_id": null,
                      "RoomPrices": null,
                      "Rooms": null,
                      "CancellationRoomPrices": null,
                      "CancellationText": null,
                      "DtBegin": ISODate("2019-11-28T19:26:12.067Z"),
                      "DtEnd": ISODate("2019-11-28T19:26:12.067Z"),
                      "IsRefundable": false,
                      "Error": null,
                      "CancelationPoliciesFilter": null,
                      "CancelationPoliciesPenaltyFilter": null,
                      "Plan": null
                    }
                  ],
                  "Amenities": null,
                  "RoomImages": null,
                  "Regime": {
                    "Name": "Café da manhã",
                    "BoardAcronym": null
                  },
                  "Days": 0,
                  "RoomPrices": {
                    "Price": "0",
                    "DailyPriceTotal": "0",
                    "PeriodPrice": "0",
                    "TotalPeriodPriceTotal": "0",
                    "Currency": "BRL",
                    "Description": null
                  },
                  "TaxPrices": null,
                  "IsBestPrice": false,
                  "IsNonRefundable": false,
                  "Quantity": 1,
                  "RecommendedRoom": false,
                  "providerId": 0,
                  "providerName": "Europlus - Hotel",
                  "BreakfeastIncluded": true,
                  "QuantityAdults": 1,
                  "ChildAges": null,
                  "QuantityChild": 0
                },
                {
                  "RoomID": "3241004",
                  "RoomName": "Superior com Cama de Casal",
                  "Description": null,
                  "MaxOccupation": 1,
                  "Remarks": null,
                  "TermsAndConditions": null,
                  "TaxesIncluded": false,
                  "CancelationPolicies": [
                    {
                      "id": "00000000-0000-0000-0000-000000000000",
                      "_id": null,
                      "RoomPrices": null,
                      "Rooms": null,
                      "CancellationRoomPrices": null,
                      "CancellationText": null,
                      "DtBegin": ISODate("2019-11-28T19:26:12.067Z"),
                      "DtEnd": ISODate("2019-11-28T19:26:12.067Z"),
                      "IsRefundable": false,
                      "Error": null,
                      "CancelationPoliciesFilter": null,
                      "CancelationPoliciesPenaltyFilter": null,
                      "Plan": null
                    }
                  ],
                  "Amenities": null,
                  "RoomImages": null,
                  "Regime": {
                    "Name": "Café da manhã",
                    "BoardAcronym": null
                  },
                  "Days": 0,
                  "RoomPrices": {
                    "Price": "0",
                    "DailyPriceTotal": "0",
                    "PeriodPrice": "0",
                    "TotalPeriodPriceTotal": "0",
                    "Currency": "BRL",
                    "Description": null
                  },
                  "TaxPrices": null,
                  "IsBestPrice": false,
                  "IsNonRefundable": false,
                  "Quantity": 1,
                  "RecommendedRoom": false,
                  "providerId": 0,
                  "providerName": "Europlus - Hotel",
                  "BreakfeastIncluded": true,
                  "QuantityAdults": 1,
                  "ChildAges": [
                    2
                  ],
                  "QuantityChild": 1
                }
              ],
              "RoomPrices": {
                "Price": "0",
                "DailyPriceTotal": "0",
                "PeriodPrice": "0",
                "TotalPeriodPriceTotal": "0",
                "Currency": "BRL",
                "Description": null
              }
            },
            {
              "QuantityAdults": 2,
              "QuantityChild": 1,
              "ChildAges": null,
              "RoomsType": [
                {
                  "RoomID": "3241002",
                  "RoomName": "Superior com 2 Camas de Solteiro",
                  "Description": null,
                  "MaxOccupation": 1,
                  "Remarks": null,
                  "TermsAndConditions": null,
                  "TaxesIncluded": false,
                  "CancelationPolicies": [
                    {
                      "id": "00000000-0000-0000-0000-000000000000",
                      "_id": null,
                      "RoomPrices": null,
                      "Rooms": null,
                      "CancellationRoomPrices": null,
                      "CancellationText": null,
                      "DtBegin": ISODate("2019-11-28T19:26:12.067Z"),
                      "DtEnd": ISODate("2019-11-28T19:26:12.067Z"),
                      "IsRefundable": false,
                      "Error": null,
                      "CancelationPoliciesFilter": null,
                      "CancelationPoliciesPenaltyFilter": null,
                      "Plan": null
                    }
                  ],
                  "Amenities": null,
                  "RoomImages": null,
                  "Regime": {
                    "Name": "Café da manhã",
                    "BoardAcronym": null
                  },
                  "Days": 0,
                  "RoomPrices": {
                    "Price": "0",
                    "DailyPriceTotal": "0",
                    "PeriodPrice": "0",
                    "TotalPeriodPriceTotal": "0",
                    "Currency": "BRL",
                    "Description": null
                  },
                  "TaxPrices": null,
                  "IsBestPrice": false,
                  "IsNonRefundable": false,
                  "Quantity": 1,
                  "RecommendedRoom": false,
                  "providerId": 0,
                  "providerName": "Europlus - Hotel",
                  "BreakfeastIncluded": true,
                  "QuantityAdults": 1,
                  "ChildAges": null,
                  "QuantityChild": 0
                },
                {
                  "RoomID": "3241006",
                  "RoomName": "Executivo",
                  "Description": null,
                  "MaxOccupation": 1,
                  "Remarks": null,
                  "TermsAndConditions": null,
                  "TaxesIncluded": false,
                  "CancelationPolicies": [
                    {
                      "id": "00000000-0000-0000-0000-000000000000",
                      "_id": null,
                      "RoomPrices": null,
                      "Rooms": null,
                      "CancellationRoomPrices": null,
                      "CancellationText": null,
                      "DtBegin": ISODate("2019-11-28T19:26:12.067Z"),
                      "DtEnd": ISODate("2019-11-28T19:26:12.067Z"),
                      "IsRefundable": false,
                      "Error": null,
                      "CancelationPoliciesFilter": null,
                      "CancelationPoliciesPenaltyFilter": null,
                      "Plan": null
                    }
                  ],
                  "Amenities": null,
                  "RoomImages": null,
                  "Regime": {
                    "Name": "Café da manhã",
                    "BoardAcronym": null
                  },
                  "Days": 0,
                  "RoomPrices": {
                    "Price": "0",
                    "DailyPriceTotal": "0",
                    "PeriodPrice": "0",
                    "TotalPeriodPriceTotal": "0",
                    "Currency": "BRL",
                    "Description": null
                  },
                  "TaxPrices": null,
                  "IsBestPrice": false,
                  "IsNonRefundable": false,
                  "Quantity": 1,
                  "RecommendedRoom": false,
                  "providerId": 0,
                  "providerName": "Europlus - Hotel",
                  "BreakfeastIncluded": true,
                  "QuantityAdults": 1,
                  "ChildAges": [
                    2
                  ],
                  "QuantityChild": 1
                }
              ],
              "RoomPrices": {
                "Price": "0",
                "DailyPriceTotal": "0",
                "PeriodPrice": "0",
                "TotalPeriodPriceTotal": "0",
                "Currency": "BRL",
                "Description": null
              }
            },
            {
              "QuantityAdults": 2,
              "QuantityChild": 1,
              "ChildAges": null,
              "RoomsType": [
                {
                  "RoomID": "3241002",
                  "RoomName": "Superior com 2 Camas de Solteiro",
                  "Description": null,
                  "MaxOccupation": 1,
                  "Remarks": null,
                  "TermsAndConditions": null,
                  "TaxesIncluded": false,
                  "CancelationPolicies": [
                    {
                      "id": "00000000-0000-0000-0000-000000000000",
                      "_id": null,
                      "RoomPrices": null,
                      "Rooms": null,
                      "CancellationRoomPrices": null,
                      "CancellationText": null,
                      "DtBegin": ISODate("2019-11-28T19:26:12.067Z"),
                      "DtEnd": ISODate("2019-11-28T19:26:12.067Z"),
                      "IsRefundable": false,
                      "Error": null,
                      "CancelationPoliciesFilter": null,
                      "CancelationPoliciesPenaltyFilter": null,
                      "Plan": null
                    }
                  ],
                  "Amenities": null,
                  "RoomImages": null,
                  "Regime": {
                    "Name": "Café da manhã",
                    "BoardAcronym": null
                  },
                  "Days": 0,
                  "RoomPrices": {
                    "Price": "0",
                    "DailyPriceTotal": "0",
                    "PeriodPrice": "0",
                    "TotalPeriodPriceTotal": "0",
                    "Currency": "BRL",
                    "Description": null
                  },
                  "TaxPrices": null,
                  "IsBestPrice": false,
                  "IsNonRefundable": false,
                  "Quantity": 1,
                  "RecommendedRoom": false,
                  "providerId": 0,
                  "providerName": "Europlus - Hotel",
                  "BreakfeastIncluded": true,
                  "QuantityAdults": 1,
                  "ChildAges": null,
                  "QuantityChild": 0
                },
                {
                  "RoomID": "3241005",
                  "RoomName": "Superior com 2 Camas de Solteiro",
                  "Description": null,
                  "MaxOccupation": 1,
                  "Remarks": null,
                  "TermsAndConditions": null,
                  "TaxesIncluded": false,
                  "CancelationPolicies": [
                    {
                      "id": "00000000-0000-0000-0000-000000000000",
                      "_id": null,
                      "RoomPrices": null,
                      "Rooms": null,
                      "CancellationRoomPrices": null,
                      "CancellationText": null,
                      "DtBegin": ISODate("2019-11-28T19:26:12.067Z"),
                      "DtEnd": ISODate("2019-11-28T19:26:12.067Z"),
                      "IsRefundable": false,
                      "Error": null,
                      "CancelationPoliciesFilter": null,
                      "CancelationPoliciesPenaltyFilter": null,
                      "Plan": null
                    }
                  ],
                  "Amenities": null,
                  "RoomImages": null,
                  "Regime": {
                    "Name": "Café da manhã",
                    "BoardAcronym": null
                  },
                  "Days": 0,
                  "RoomPrices": {
                    "Price": "0",
                    "DailyPriceTotal": "0",
                    "PeriodPrice": "0",
                    "TotalPeriodPriceTotal": "0",
                    "Currency": "BRL",
                    "Description": null
                  },
                  "TaxPrices": null,
                  "IsBestPrice": false,
                  "IsNonRefundable": false,
                  "Quantity": 1,
                  "RecommendedRoom": false,
                  "providerId": 0,
                  "providerName": "Europlus - Hotel",
                  "BreakfeastIncluded": true,
                  "QuantityAdults": 1,
                  "ChildAges": [
                    2
                  ],
                  "QuantityChild": 1
                }
              ],
              "RoomPrices": {
                "Price": "0",
                "DailyPriceTotal": "0",
                "PeriodPrice": "0",
                "TotalPeriodPriceTotal": "0",
                "Currency": "BRL",
                "Description": null
              }
            },
            {
              "QuantityAdults": 2,
              "QuantityChild": 1,
              "ChildAges": null,
              "RoomsType": [
                {
                  "RoomID": "3241002",
                  "RoomName": "Superior com 2 Camas de Solteiro",
                  "Description": null,
                  "MaxOccupation": 1,
                  "Remarks": null,
                  "TermsAndConditions": null,
                  "TaxesIncluded": false,
                  "CancelationPolicies": [
                    {
                      "id": "00000000-0000-0000-0000-000000000000",
                      "_id": null,
                      "RoomPrices": null,
                      "Rooms": null,
                      "CancellationRoomPrices": null,
                      "CancellationText": null,
                      "DtBegin": ISODate("2019-11-28T19:26:12.067Z"),
                      "DtEnd": ISODate("2019-11-28T19:26:12.067Z"),
                      "IsRefundable": false,
                      "Error": null,
                      "CancelationPoliciesFilter": null,
                      "CancelationPoliciesPenaltyFilter": null,
                      "Plan": null
                    }
                  ],
                  "Amenities": null,
                  "RoomImages": null,
                  "Regime": {
                    "Name": "Café da manhã",
                    "BoardAcronym": null
                  },
                  "Days": 0,
                  "RoomPrices": {
                    "Price": "0",
                    "DailyPriceTotal": "0",
                    "PeriodPrice": "0",
                    "TotalPeriodPriceTotal": "0",
                    "Currency": "BRL",
                    "Description": null
                  },
                  "TaxPrices": null,
                  "IsBestPrice": false,
                  "IsNonRefundable": false,
                  "Quantity": 1,
                  "RecommendedRoom": false,
                  "providerId": 0,
                  "providerName": "Europlus - Hotel",
                  "BreakfeastIncluded": true,
                  "QuantityAdults": 1,
                  "ChildAges": null,
                  "QuantityChild": 0
                },
                {
                  "RoomID": "3241004",
                  "RoomName": "Superior com Cama de Casal",
                  "Description": null,
                  "MaxOccupation": 1,
                  "Remarks": null,
                  "TermsAndConditions": null,
                  "TaxesIncluded": false,
                  "CancelationPolicies": [
                    {
                      "id": "00000000-0000-0000-0000-000000000000",
                      "_id": null,
                      "RoomPrices": null,
                      "Rooms": null,
                      "CancellationRoomPrices": null,
                      "CancellationText": null,
                      "DtBegin": ISODate("2019-11-28T19:26:12.067Z"),
                      "DtEnd": ISODate("2019-11-28T19:26:12.067Z"),
                      "IsRefundable": false,
                      "Error": null,
                      "CancelationPoliciesFilter": null,
                      "CancelationPoliciesPenaltyFilter": null,
                      "Plan": null
                    }
                  ],
                  "Amenities": null,
                  "RoomImages": null,
                  "Regime": {
                    "Name": "Café da manhã",
                    "BoardAcronym": null
                  },
                  "Days": 0,
                  "RoomPrices": {
                    "Price": "0",
                    "DailyPriceTotal": "0",
                    "PeriodPrice": "0",
                    "TotalPeriodPriceTotal": "0",
                    "Currency": "BRL",
                    "Description": null
                  },
                  "TaxPrices": null,
                  "IsBestPrice": false,
                  "IsNonRefundable": false,
                  "Quantity": 1,
                  "RecommendedRoom": false,
                  "providerId": 0,
                  "providerName": "Europlus - Hotel",
                  "BreakfeastIncluded": true,
                  "QuantityAdults": 1,
                  "ChildAges": [
                    2
                  ],
                  "QuantityChild": 1
                }
              ],
              "RoomPrices": {
                "Price": "0",
                "DailyPriceTotal": "0",
                "PeriodPrice": "0",
                "TotalPeriodPriceTotal": "0",
                "Currency": "BRL",
                "Description": null
              }
            },
            {
              "QuantityAdults": 2,
              "QuantityChild": 1,
              "ChildAges": null,
              "RoomsType": [
                {
                  "RoomID": "3241003",
                  "RoomName": "Executivo",
                  "Description": null,
                  "MaxOccupation": 1,
                  "Remarks": null,
                  "TermsAndConditions": null,
                  "TaxesIncluded": false,
                  "CancelationPolicies": [
                    {
                      "id": "00000000-0000-0000-0000-000000000000",
                      "_id": null,
                      "RoomPrices": null,
                      "Rooms": null,
                      "CancellationRoomPrices": null,
                      "CancellationText": null,
                      "DtBegin": ISODate("2019-11-28T19:26:12.067Z"),
                      "DtEnd": ISODate("2019-11-28T19:26:12.067Z"),
                      "IsRefundable": false,
                      "Error": null,
                      "CancelationPoliciesFilter": null,
                      "CancelationPoliciesPenaltyFilter": null,
                      "Plan": null
                    }
                  ],
                  "Amenities": null,
                  "RoomImages": null,
                  "Regime": {
                    "Name": "Café da manhã",
                    "BoardAcronym": null
                  },
                  "Days": 0,
                  "RoomPrices": {
                    "Price": "0",
                    "DailyPriceTotal": "0",
                    "PeriodPrice": "0",
                    "TotalPeriodPriceTotal": "0",
                    "Currency": "BRL",
                    "Description": null
                  },
                  "TaxPrices": null,
                  "IsBestPrice": false,
                  "IsNonRefundable": false,
                  "Quantity": 1,
                  "RecommendedRoom": false,
                  "providerId": 0,
                  "providerName": "Europlus - Hotel",
                  "BreakfeastIncluded": true,
                  "QuantityAdults": 1,
                  "ChildAges": null,
                  "QuantityChild": 0
                },
                {
                  "RoomID": "3241006",
                  "RoomName": "Executivo",
                  "Description": null,
                  "MaxOccupation": 1,
                  "Remarks": null,
                  "TermsAndConditions": null,
                  "TaxesIncluded": false,
                  "CancelationPolicies": [
                    {
                      "id": "00000000-0000-0000-0000-000000000000",
                      "_id": null,
                      "RoomPrices": null,
                      "Rooms": null,
                      "CancellationRoomPrices": null,
                      "CancellationText": null,
                      "DtBegin": ISODate("2019-11-28T19:26:12.067Z"),
                      "DtEnd": ISODate("2019-11-28T19:26:12.067Z"),
                      "IsRefundable": false,
                      "Error": null,
                      "CancelationPoliciesFilter": null,
                      "CancelationPoliciesPenaltyFilter": null,
                      "Plan": null
                    }
                  ],
                  "Amenities": null,
                  "RoomImages": null,
                  "Regime": {
                    "Name": "Café da manhã",
                    "BoardAcronym": null
                  },
                  "Days": 0,
                  "RoomPrices": {
                    "Price": "0",
                    "DailyPriceTotal": "0",
                    "PeriodPrice": "0",
                    "TotalPeriodPriceTotal": "0",
                    "Currency": "BRL",
                    "Description": null
                  },
                  "TaxPrices": null,
                  "IsBestPrice": false,
                  "IsNonRefundable": false,
                  "Quantity": 1,
                  "RecommendedRoom": false,
                  "providerId": 0,
                  "providerName": "Europlus - Hotel",
                  "BreakfeastIncluded": true,
                  "QuantityAdults": 1,
                  "ChildAges": [
                    2
                  ],
                  "QuantityChild": 1
                }
              ],
              "RoomPrices": {
                "Price": "0",
                "DailyPriceTotal": "0",
                "PeriodPrice": "0",
                "TotalPeriodPriceTotal": "0",
                "Currency": "BRL",
                "Description": null
              }
            },
            {
              "QuantityAdults": 2,
              "QuantityChild": 1,
              "ChildAges": null,
              "RoomsType": [
                {
                  "RoomID": "3241003",
                  "RoomName": "Executivo",
                  "Description": null,
                  "MaxOccupation": 1,
                  "Remarks": null,
                  "TermsAndConditions": null,
                  "TaxesIncluded": false,
                  "CancelationPolicies": [
                    {
                      "id": "00000000-0000-0000-0000-000000000000",
                      "_id": null,
                      "RoomPrices": null,
                      "Rooms": null,
                      "CancellationRoomPrices": null,
                      "CancellationText": null,
                      "DtBegin": ISODate("2019-11-28T19:26:12.067Z"),
                      "DtEnd": ISODate("2019-11-28T19:26:12.067Z"),
                      "IsRefundable": false,
                      "Error": null,
                      "CancelationPoliciesFilter": null,
                      "CancelationPoliciesPenaltyFilter": null,
                      "Plan": null
                    }
                  ],
                  "Amenities": null,
                  "RoomImages": null,
                  "Regime": {
                    "Name": "Café da manhã",
                    "BoardAcronym": null
                  },
                  "Days": 0,
                  "RoomPrices": {
                    "Price": "0",
                    "DailyPriceTotal": "0",
                    "PeriodPrice": "0",
                    "TotalPeriodPriceTotal": "0",
                    "Currency": "BRL",
                    "Description": null
                  },
                  "TaxPrices": null,
                  "IsBestPrice": false,
                  "IsNonRefundable": false,
                  "Quantity": 1,
                  "RecommendedRoom": false,
                  "providerId": 0,
                  "providerName": "Europlus - Hotel",
                  "BreakfeastIncluded": true,
                  "QuantityAdults": 1,
                  "ChildAges": null,
                  "QuantityChild": 0
                },
                {
                  "RoomID": "3241005",
                  "RoomName": "Superior com 2 Camas de Solteiro",
                  "Description": null,
                  "MaxOccupation": 1,
                  "Remarks": null,
                  "TermsAndConditions": null,
                  "TaxesIncluded": false,
                  "CancelationPolicies": [
                    {
                      "id": "00000000-0000-0000-0000-000000000000",
                      "_id": null,
                      "RoomPrices": null,
                      "Rooms": null,
                      "CancellationRoomPrices": null,
                      "CancellationText": null,
                      "DtBegin": ISODate("2019-11-28T19:26:12.067Z"),
                      "DtEnd": ISODate("2019-11-28T19:26:12.067Z"),
                      "IsRefundable": false,
                      "Error": null,
                      "CancelationPoliciesFilter": null,
                      "CancelationPoliciesPenaltyFilter": null,
                      "Plan": null
                    }
                  ],
                  "Amenities": null,
                  "RoomImages": null,
                  "Regime": {
                    "Name": "Café da manhã",
                    "BoardAcronym": null
                  },
                  "Days": 0,
                  "RoomPrices": {
                    "Price": "0",
                    "DailyPriceTotal": "0",
                    "PeriodPrice": "0",
                    "TotalPeriodPriceTotal": "0",
                    "Currency": "BRL",
                    "Description": null
                  },
                  "TaxPrices": null,
                  "IsBestPrice": false,
                  "IsNonRefundable": false,
                  "Quantity": 1,
                  "RecommendedRoom": false,
                  "providerId": 0,
                  "providerName": "Europlus - Hotel",
                  "BreakfeastIncluded": true,
                  "QuantityAdults": 1,
                  "ChildAges": [
                    2
                  ],
                  "QuantityChild": 1
                }
              ],
              "RoomPrices": {
                "Price": "0",
                "DailyPriceTotal": "0",
                "PeriodPrice": "0",
                "TotalPeriodPriceTotal": "0",
                "Currency": "BRL",
                "Description": null
              }
            },
            {
              "QuantityAdults": 2,
              "QuantityChild": 1,
              "ChildAges": null,
              "RoomsType": [
                {
                  "RoomID": "3241003",
                  "RoomName": "Executivo",
                  "Description": null,
                  "MaxOccupation": 1,
                  "Remarks": null,
                  "TermsAndConditions": null,
                  "TaxesIncluded": false,
                  "CancelationPolicies": [
                    {
                      "id": "00000000-0000-0000-0000-000000000000",
                      "_id": null,
                      "RoomPrices": null,
                      "Rooms": null,
                      "CancellationRoomPrices": null,
                      "CancellationText": null,
                      "DtBegin": ISODate("2019-11-28T19:26:12.067Z"),
                      "DtEnd": ISODate("2019-11-28T19:26:12.067Z"),
                      "IsRefundable": false,
                      "Error": null,
                      "CancelationPoliciesFilter": null,
                      "CancelationPoliciesPenaltyFilter": null,
                      "Plan": null
                    }
                  ],
                  "Amenities": null,
                  "RoomImages": null,
                  "Regime": {
                    "Name": "Café da manhã",
                    "BoardAcronym": null
                  },
                  "Days": 0,
                  "RoomPrices": {
                    "Price": "0",
                    "DailyPriceTotal": "0",
                    "PeriodPrice": "0",
                    "TotalPeriodPriceTotal": "0",
                    "Currency": "BRL",
                    "Description": null
                  },
                  "TaxPrices": null,
                  "IsBestPrice": false,
                  "IsNonRefundable": false,
                  "Quantity": 1,
                  "RecommendedRoom": false,
                  "providerId": 0,
                  "providerName": "Europlus - Hotel",
                  "BreakfeastIncluded": true,
                  "QuantityAdults": 1,
                  "ChildAges": null,
                  "QuantityChild": 0
                },
                {
                  "RoomID": "3241004",
                  "RoomName": "Superior com Cama de Casal",
                  "Description": null,
                  "MaxOccupation": 1,
                  "Remarks": null,
                  "TermsAndConditions": null,
                  "TaxesIncluded": false,
                  "CancelationPolicies": [
                    {
                      "id": "00000000-0000-0000-0000-000000000000",
                      "_id": null,
                      "RoomPrices": null,
                      "Rooms": null,
                      "CancellationRoomPrices": null,
                      "CancellationText": null,
                      "DtBegin": ISODate("2019-11-28T19:26:12.067Z"),
                      "DtEnd": ISODate("2019-11-28T19:26:12.067Z"),
                      "IsRefundable": false,
                      "Error": null,
                      "CancelationPoliciesFilter": null,
                      "CancelationPoliciesPenaltyFilter": null,
                      "Plan": null
                    }
                  ],
                  "Amenities": null,
                  "RoomImages": null,
                  "Regime": {
                    "Name": "Café da manhã",
                    "BoardAcronym": null
                  },
                  "Days": 0,
                  "RoomPrices": {
                    "Price": "0",
                    "DailyPriceTotal": "0",
                    "PeriodPrice": "0",
                    "TotalPeriodPriceTotal": "0",
                    "Currency": "BRL",
                    "Description": null
                  },
                  "TaxPrices": null,
                  "IsBestPrice": false,
                  "IsNonRefundable": false,
                  "Quantity": 1,
                  "RecommendedRoom": false,
                  "providerId": 0,
                  "providerName": "Europlus - Hotel",
                  "BreakfeastIncluded": true,
                  "QuantityAdults": 1,
                  "ChildAges": [
                    2
                  ],
                  "QuantityChild": 1
                }
              ],
              "RoomPrices": {
                "Price": "0",
                "DailyPriceTotal": "0",
                "PeriodPrice": "0",
                "TotalPeriodPriceTotal": "0",
                "Currency": "BRL",
                "Description": null
              }
            }
          ],
          "Images": [
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1112002/25935/25935_4104Property140043.png",
              "Title": null,
              "Description": "MAIN"
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1112002/25935/25935_4104Property140044.png",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1112002/25935/25935_4104Property397706.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1112002/25935/25935_4104Property397707.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1112002/25935/25935_4104Property397708.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1112002/25935/25935_4104Property397709.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1112002/25935/25935_4104Property397710.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1112002/25935/25935_4104Property397711.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1112002/25935/25935_4104Property448029.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1112002/25935/25935_4104Property448030.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1112002/25935/25935_4104Property448032.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1112002/25935/25935_4104Property448033.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1112002/25935/25935_4104Property448034.jpg",
              "Title": null,
              "Description": ""
            }
          ],
          "Amenities": [
            {
              "AmenityID": 0,
              "Name": "Academia",
              "ImageURL": null
            },
            {
              "AmenityID": 0,
              "Name": "Café da manhã",
              "ImageURL": null
            },
            {
              "AmenityID": 0,
              "Name": "Estacionamento",
              "ImageURL": null
            },
            {
              "AmenityID": 0,
              "Name": "Internet",
              "ImageURL": null
            },
            {
              "AmenityID": 0,
              "Name": "Lavanderia",
              "ImageURL": null
            },
            {
              "AmenityID": 0,
              "Name": "Restaurante",
              "ImageURL": null
            }
          ],
          "Description": "O Roochelle Hotel, oferece localização privilegiada, próximo ao Teatro Guaira e a Universidade Federal do Paraná e a poucos minutos da Rua das Flores.\rA sua localização também é próxima ao centro financeiro e comercial, com fácil acesso ao Aeroporto Internacional e aos principais acessos rodoviários, facilitando a sua hospedagem.\rCom uma excelente infraestrutura, o hotel passou por uma revitalização em todos os seus ambientes, proporcionando conforto e tecnologia, com as comodidades de uma hotelaria moderna, se distinguindo no mercado de Curitiba\rContamos com Restaurante A La Carte, cardápios especiais com Sugestão do Chef além do agradável American Bar.\rOferecemos um delicioso Café da Manhã que faz a diferença na hotelaria curitibana.",
          "CheckinDate": ISODate("2019-11-28T19:26:12.067Z"),
          "CheckoutDate": ISODate("2019-11-28T19:26:12.067Z"),
          "Days": 0,
          "Iata": null,
          "Address": [
            {
              "Street": "Rua Tibagi, 307 Centro",
              "AddressNumber": null,
              "AddressComplement": null,
              "CityName": "Curitiba, Brasil",
              "StateName": null,
              "CountryName": null,
              "ZipCode": null
            }
          ],
          "Addressstring": null,
          "Broker": 1,
          "TripAdvisor": null,
          "Latitude": -25.4296607971191,
          "Longitude": -49.263858795166
        }
      ],
      "ErrorMessages": null,
      "Token": "24b7765d-6940-40e0-8095-5fc595667d16",
      "Created": ISODate("2019-11-29T00:01:23.360Z"),
      "UserId": "25261400139",
      "HotelId": 25935,
      "IsPlanDaysAvailable": true,
      "AvailableDays": 7,
      "TotalDays": 7
    },
    "Error": null,
    "BookingFilter": {
      "Token": "24b7765d-6940-40e0-8095-5fc595667d16",
      "HotelId": 25935,
      "ProviderName": "Europlus - Hotel",
      "BrokerId": 1,
      "Rooms": [
        {
          "RoomId": "3241001",
          "Paxs": [
            {
              "Name": "Ana",
              "Surname": "Flores",
              "Age": 39,
              "Title": null,
              "IsChild": false,
              "IsMainPax": false,
              "Document": "84215186820",
              "DocumentType": 1.0,
              "DocumentTypeDescription": "CPF"
            }
          ],
          "CancellationPolicies": null,
          "BoardDescription": null,
          "RoomDescription": null,
          "IsRefundable": false,
          "RoomPrice": null,
          "QuantityAdults": 1,
          "ChildAges": null,
          "QuantityChild": 0,
          "Quantity": 0
        },
        {
          "RoomId": "3241006",
          "Paxs": [
            {
              "Name": "Fabio",
              "Surname": "Flores",
              "Age": 43,
              "Title": null,
              "IsChild": false,
              "IsMainPax": false,
              "Document": "86238699825",
              "DocumentType": 1.0,
              "DocumentTypeDescription": "CPF"
            },
            {
              "Name": "Ricardo",
              "Surname": "Flores",
              "Age": 2,
              "Title": null,
              "IsChild": true,
              "IsMainPax": false,
              "Document": "",
              "DocumentType": 1.0,
              "DocumentTypeDescription": "CPF"
            }
          ],
          "CancellationPolicies": null,
          "BoardDescription": null,
          "RoomDescription": null,
          "IsRefundable": false,
          "RoomPrice": null,
          "QuantityAdults": 1,
          "ChildAges": null,
          "QuantityChild": 1,
          "Quantity": 0
        }
      ],
      "UserId": "25261400139",
      "UserIP": "191.241.229.42",
      "OrderID": "CA252291119000227B",
      "Price": {
        "PlanDailyUsed": 3,
        "TotalPriceExtra": "-224.53",
        "PlanExtraPrice": "0",
        "PlanPointUsed": 0,
        "PaymentOptionId": 1,
        "PlanMarkup": "20.0",
        "AccumulatedPoint": 0.0
      }
    },
    "BookingUpdateFilter": null,
    "CancelationFilter": {
      "UserId": "25261400139",
      "OrderId": "CA252291119000227B",
      "UserIP": "189.40.88.218",
      "ServiceIds": [
        14049,
        14050
      ],
      "CancellationDate": ISODate("2019-11-29T00:16:20.506Z")
    },
    "Created": ISODate("2019-11-29T00:02:39.782Z"),
    "IsActive": true,
    "ActualStatus": {
      "StatusId": 3,
      "Name": "Cancelado",
      "Description": null,
      "Date": ISODate("2019-11-29T00:17:01.965Z"),
      "PreviousStatusId": 2
    },
    "History": [
      {
        "StatusId": 2,
        "Name": "Confirmado",
        "Description": null,
        "Date": ISODate("2019-11-29T00:02:39.782Z"),
        "PreviousStatusId": null
      },
      {
        "StatusId": 3,
        "Name": "Cancelado",
        "Description": null,
        "Date": ISODate("2019-11-29T00:17:01.965Z"),
        "PreviousStatusId": 2
      }
    ],
    "CancelationPoliciesPenalty": {
      "id": "00000000-0000-0000-0000-000000000000",
      "_id": null,
      "RoomPrices": null,
      "Rooms": null,
      "CancellationRoomPrices": {
        "TotalPrice": "0",
        "DailyPrice": "0",
        "PlanType": null,
        "PlanDailyPrice": "0",
        "PlanTotalPrice": "0",
        "PlanNumberOfNightsUsed": 0,
        "PlanExtraReservationCostPrice": "0",
        "PlanExtraReservationFinalPrice": "0",
        "PlanCalculationFormula": "0",
        "PlanMarkup": "0",
        "Currency": null,
        "Description": null,
        "NumberOfNights": 3
      },
      "CancellationText": "Você pode cancelar sem custo até 02/02/2020 às 05:00",
      "DtBegin": ISODate("2020-02-02T05:00:00.000Z"),
      "DtEnd": ISODate("2020-02-09T00:00:00.000Z"),
      "IsRefundable": false,
      "Error": null,
      "CancelationPoliciesFilter": null,
      "CancelationPoliciesPenaltyFilter": null,
      "Plan": null
    },
    "StartDate": null,
    "EndDate": null
  },
  {
    "_id": ObjectId("5de12373f4c7c900018d6800"),
    "id": "00000000-0000-0000-0000-000000000000",
    "BookingResult": {
      "Rooms": [
        {
          "VoucherId": "RES000201-10161|10161#2020-04-04#2020-04-05",
          "ReservationId": "11287",
          "ServiceId": 14054,
          "Status": "Cancelado",
          "Observations": "STANDARD CAMA CASAL\r\n<br /> <u>POLITICAS GERAIS:</u> NÃO É PERMITIDO FUMAR NO HOTEL.\rCheck-in 12h / Check-out 12h\r*Early check-in e late check-out, sujeito a disponibilidade e a cobrança adicional:\r- Chegadas antes das 6hrs: cobrança de 1 diária integral;\r- Chegadas antes das 12hrs: cobrança de 1/2 diária;\r- Check-out entre às 12hrs e 18hrs: cobrança de 1/2 diária a mais;\r- Check-out após às 18hrs: cobrança de 1 diária integral.\r\rO HOTEL NÃO TRABALHA COM CAMAS EXTRAS\r\rPOLITICA PARA ANIMAIS DE ESTIMAÇÃO. \r• Cada apartamento comportará apenas 1 mascote de pequeno porte (até 15 kg).\r• Será cobrado uma taxa de R$ 70,00 por diária, que deverá ser paga no Check in.\r• O responsável pelo mascote deverá apresentar o cartão de vacinação atualizado.\r• O hotel disponibilizará cama, potes para ração e água e tapete higiênico durante a hospedagem.\r• O responsável pelo mascote deverá preencher o termo de responsabilidade no momento do Check- in.\r***Para confirmar a reserva do seu PET entrar em contato com o hotel.***\r <br /><u>POLITICA DE CANCELAMENTO:</u> Cancelamento sem multa/cobrança deve ser feito no prazo de até 24 horas antes do check-in.\r\rEm caso de não comparecimento (\"NO SHOW\") será cobrado o valor referente a primeira diária.\r<br />\r\n<u>POLÍTICAS DE GARANTIA:</u> <br /> Pagamento Operadoras <br /> OPERADORAS NACIONAIS: \rFaturamento mediante cadastro aprovado juntamente ao hotel. Caso a operadora não tenha cadastro liberado, será solicitado o pré-pagamento da reserva para confirmação.\r\rOPERADORAS INTERNACIONAIS:\rPagamento via cartão de credito. <br />\r\n",
          "RoomDescription": "STANDARD CASAL",
          "SellingPrice": "287.44",
          "CancellationPrice": "0",
          "Checkin": "2020-04-04",
          "Checkout": "2020-04-05",
          "Comission": "0",
          "HotelAddress": "Rua Haddock Lobo 294",
          "BoardDescription": "Café da manhã",
          "BreakfeastIncluded": false,
          "HotelName": "Intercity Paulista",
          "Paxes": [
            {
              "Name": "Guilherme",
              "Surname": "MPV",
              "Age": 21,
              "Title": "Mr",
              "IsChild": false,
              "IsMainPax": true,
              "Document": "49787289831"
            }
          ]
        }
      ],
      "RoomPrices": {
        "TotalPrice": "287.44",
        "DailyPrice": "0",
        "PlanType": "Meu Plano",
        "PlanDailyPrice": "287.44",
        "PlanTotalPrice": "0",
        "PlanNumberOfNightsUsed": 1,
        "PlanExtraReservationCostPrice": "0",
        "PlanExtraReservationFinalPrice": "0",
        "PlanCalculationFormula": "-12.56",
        "PlanMarkup": "20.0",
        "Currency": null,
        "Description": null,
        "NumberOfNights": 1
      },
      "Error": null
    },
    "OrderID": "CA252291119135555A",
    "CancelationPolicies": {
      "id": "00000000-0000-0000-0000-000000000000",
      "_id": ObjectId("5de12359f4c7c900018d67ff"),
      "RoomPrices": {
        "TotalPrice": "288",
        "DailyPrice": "0",
        "PlanType": "Meu Plano",
        "PlanDailyPrice": "0",
        "PlanTotalPrice": "0",
        "PlanNumberOfNightsUsed": 1,
        "PlanExtraReservationCostPrice": "0",
        "PlanExtraReservationFinalPrice": "0",
        "PlanCalculationFormula": "-12",
        "PlanMarkup": "20.0",
        "Currency": null,
        "Description": null,
        "NumberOfNights": 0
      },
      "Rooms": [
        {
          "RoomId": null,
          "Paxs": null,
          "CancellationPolicies": [
            {
              "Description": null,
              "BeginDate": ISODate("2020-03-31T00:00:00.000Z"),
              "EndDate": ISODate("2020-04-04T00:00:00.000Z"),
              "Prices": {
                "Price": "287.44",
                "DailyPriceTotal": "0",
                "PeriodPrice": "0",
                "TotalPeriodPriceTotal": "0",
                "Currency": "BRL",
                "Description": null
              },
              "Error": null
            }
          ],
          "BoardDescription": "Café da manhã",
          "RoomDescription": "STANDARD CASAL",
          "IsRefundable": true,
          "RoomPrice": {
            "TotalPrice": "288",
            "DailyPrice": "287.44",
            "PlanType": null,
            "PlanDailyPrice": "0",
            "PlanTotalPrice": "0",
            "PlanNumberOfNightsUsed": 0,
            "PlanExtraReservationCostPrice": "0",
            "PlanExtraReservationFinalPrice": "0",
            "PlanCalculationFormula": "0",
            "PlanMarkup": "0",
            "Currency": "BRL",
            "Description": null,
            "NumberOfNights": 1
          },
          "QuantityAdults": 1,
          "ChildAges": null,
          "QuantityChild": 0,
          "Quantity": 1
        }
      ],
      "CancellationRoomPrices": {
        "TotalPrice": "287.44",
        "DailyPrice": "0",
        "PlanType": null,
        "PlanDailyPrice": "0",
        "PlanTotalPrice": "0",
        "PlanNumberOfNightsUsed": 1,
        "PlanExtraReservationCostPrice": "0",
        "PlanExtraReservationFinalPrice": "-0.56",
        "PlanCalculationFormula": "0",
        "PlanMarkup": "0",
        "Currency": null,
        "Description": null,
        "NumberOfNights": 0
      },
      "CancellationText": "Você pode cancelar sem custo até 29/03/2020 às 00:00 haverá uma penalidade de 1 diária(s)  a partir de 29/03/2020 às 00:00.Caso não se apresente (no show), será cobrado o valor total da tarifa. Todos os horários estão expressos em hora local.",
      "DtBegin": ISODate("2020-03-29T00:00:00.000Z"),
      "DtEnd": ISODate("2020-04-04T00:00:00.000Z"),
      "IsRefundable": true,
      "Error": null,
      "CancelationPoliciesFilter": {
        "Token": "97442cc2-7aa6-404c-9ba4-bbb192e75353",
        "HotelId": 2147828,
        "RoomIds": [
          3101001.0
        ],
        "UserId": "25261400139",
        "UserIP": "191.241.229.42",
        "BrokerId": 1,
        "ProviderName": "Omnibees",
        "CheckinDate": "2020-04-04",
        "CheckoutDate": "2020-04-05",
        "CheckinDateParse": ISODate("2020-04-04T00:00:00.000Z"),
        "CheckoutDateParse": ISODate("2020-04-05T00:00:00.000Z"),
        "NumberOfNights": 1,
        "PolicieDate": ISODate("2019-11-29T13:55:22.550Z")
      },
      "CancelationPoliciesPenaltyFilter": null,
      "Plan": {
        "cpf": "25261400139",
        "planos": [
          {
            "_id": "28b727d1-4bf8-c14d-926a-924cd402e49e",
            "titulo": "Superior 7 Diárias",
            "tipoPlano": "Superior",
            "valorPlano": "1080",
            "valorDiariaMaxima": "300",
            "valorDiariaMinima": "200.01",
            "diariasDisponiveis": 6,
            "diariasTotais": 7,
            "ativo": true,
            "Markup": "0.2"
          }
        ],
        "ErrorMessages": null
      }
    },
    "Availability": {
      "id": "00000000-0000-0000-0000-000000000000",
      "_id": ObjectId("5de12338a2513a00013caf77"),
      "HotelInfo": [
        {
          "ID": NumberLong(2147828),
          "Name": "Intercity Paulista (São Paulo, Brasil)",
          "Chain": null,
          "CNPJ": null,
          "Site": null,
          "Category": "3",
          "AcommodationType": "Hotel",
          "Email": null,
          "Recommended": false,
          "PhoneNumber": null,
          "PrimaryImage": {
            "ImageUrl": "",
            "Title": null,
            "Description": null
          },
          "ImagesViewUrl": null,
          "MapUrl": null,
          "Rooms": [
            {
              "QuantityAdults": 1,
              "QuantityChild": 0,
              "ChildAges": null,
              "RoomsType": [
                {
                  "RoomID": "3101001",
                  "RoomName": "STANDARD CASAL",
                  "Description": "STANDARD CAMA CASAL\r\n<br /> <u>POLITICAS GERAIS:</u> NÃO É PERMITIDO FUMAR NO HOTEL.\rCheck-in 12h / Check-out 12h\r*Early check-in e late check-out, sujeito a disponibilidade e a cobrança adicional:\r- Chegadas antes das 6hrs: cobrança de 1 diária integral;\r- Chegadas antes das 12hrs: cobrança de 1/2 diária;\r- Check-out entre às 12hrs e 18hrs: cobrança de 1/2 diária a mais;\r- Check-out após às 18hrs: cobrança de 1 diária integral.\r\rO HOTEL NÃO TRABALHA COM CAMAS EXTRAS\r\rPOLITICA PARA ANIMAIS DE ESTIMAÇÃO. \r• Cada apartamento comportará apenas 1 mascote de pequeno porte (até 15 kg).\r• Será cobrado uma taxa de R$ 70,00 por diária, que deverá ser paga no Check in.\r• O responsável pelo mascote deverá apresentar o cartão de vacinação atualizado.\r• O hotel disponibilizará cama, potes para ração e água e tapete higiênico durante a hospedagem.\r• O responsável pelo mascote deverá preencher o termo de responsabilidade no momento do Check- in.\r***Para confirmar a reserva do seu PET entrar em contato com o hotel.***\r <br /><u>POLITICA DE CANCELAMENTO:</u> Cancelamento sem multa/cobrança deve ser feito no prazo de até 24 horas antes do check-in.\r\rEm caso de não comparecimento (\"NO SHOW\") será cobrado o valor referente a primeira diária.\r<br />\r\n<u>POLÍTICAS DE GARANTIA:</u> <br /> Pagamento Operadoras <br /> OPERADORAS NACIONAIS: \rFaturamento mediante cadastro aprovado juntamente ao hotel. Caso a operadora não tenha cadastro liberado, será solicitado o pré-pagamento da reserva para confirmação.\r\rOPERADORAS INTERNACIONAIS:\rPagamento via cartão de credito. <br />\r\n",
                  "MaxOccupation": 1,
                  "Remarks": null,
                  "TermsAndConditions": null,
                  "TaxesIncluded": false,
                  "CancelationPolicies": [
                    {
                      "id": "00000000-0000-0000-0000-000000000000",
                      "_id": null,
                      "RoomPrices": null,
                      "Rooms": null,
                      "CancellationRoomPrices": null,
                      "CancellationText": null,
                      "DtBegin": ISODate("2019-11-28T19:26:12.067Z"),
                      "DtEnd": ISODate("2019-11-28T19:26:12.067Z"),
                      "IsRefundable": false,
                      "Error": null,
                      "CancelationPoliciesFilter": null,
                      "CancelationPoliciesPenaltyFilter": null,
                      "Plan": null
                    }
                  ],
                  "Amenities": null,
                  "RoomImages": null,
                  "Regime": {
                    "Name": "Café da manhã",
                    "BoardAcronym": null
                  },
                  "Days": 0,
                  "RoomPrices": {
                    "Price": "0",
                    "DailyPriceTotal": "0",
                    "PeriodPrice": "0",
                    "TotalPeriodPriceTotal": "0",
                    "Currency": "BRL",
                    "Description": null
                  },
                  "TaxPrices": null,
                  "IsBestPrice": false,
                  "IsNonRefundable": false,
                  "Quantity": 1,
                  "RecommendedRoom": false,
                  "providerId": 0,
                  "providerName": "Omnibees",
                  "BreakfeastIncluded": true,
                  "QuantityAdults": 1,
                  "ChildAges": null,
                  "QuantityChild": 0
                }
              ],
              "RoomPrices": {
                "Price": "0",
                "DailyPriceTotal": "0",
                "PeriodPrice": "0",
                "TotalPeriodPriceTotal": "0",
                "Currency": "BRL",
                "Description": null
              }
            }
          ],
          "Images": [],
          "Amenities": null,
          "Description": "NÃO É PERMITIDO FUMAR NO HOTEL.\rCheck-in 12h / Check-out 12h\r*Early check-in e late check-out, sujeito a disponibilidade e a cobrança adicional:\r- Chegadas antes das 6hrs: cobrança de 1 diária integral;\r- Chegadas antes das 12hrs: cobrança de 1/2 diária;\r- Check-out entre às 12hrs e 18hrs: cobrança de 1/2 diária a mais;\r- Check-out após às 18hrs: cobrança de 1 diária integral.\r\rO HOTEL NÃO TRABALHA COM CAMAS EXTRAS\r\rPOLITICA PARA ANIMAIS DE ESTIMAÇÃO. \r• Cada apartamento comportará apenas 1 mascote de pequeno porte (até 15 kg).\r• Será cobrado uma taxa de R$ 70,00 por diária, que deverá ser paga no Check in.\r• O responsável pelo mascote deverá apresentar o cartão de vacinação atualizado.\r• O hotel disponibilizará cama, potes para ração e água e tapete higiênico durante a hospedagem.\r• O responsável pelo mascote deverá preencher o termo de responsabilidade no momento do Check- in.\r***Para confirmar a reserva do seu PET entrar em contato com o hotel.***\r",
          "CheckinDate": ISODate("2019-11-28T19:26:12.067Z"),
          "CheckoutDate": ISODate("2019-11-28T19:26:12.067Z"),
          "Days": 0,
          "Iata": null,
          "Address": [
            {
              "Street": "Rua Haddock Lobo 294",
              "AddressNumber": null,
              "AddressComplement": null,
              "CityName": "São Paulo, Brasil",
              "StateName": null,
              "CountryName": null,
              "ZipCode": null
            }
          ],
          "Addressstring": null,
          "Broker": 1,
          "TripAdvisor": null,
          "Latitude": -23.5556335449219,
          "Longitude": -23.5556335449219
        }
      ],
      "ErrorMessages": null,
      "Token": "97442cc2-7aa6-404c-9ba4-bbb192e75353",
      "Created": ISODate("2019-11-29T13:55:04.931Z"),
      "UserId": "25261400139",
      "HotelId": 2147828,
      "IsPlanDaysAvailable": true,
      "AvailableDays": 7,
      "TotalDays": 7
    },
    "Error": null,
    "BookingFilter": {
      "Token": "97442cc2-7aa6-404c-9ba4-bbb192e75353",
      "HotelId": 2147828,
      "ProviderName": "Omnibees",
      "BrokerId": 1,
      "Rooms": [
        {
          "RoomId": "3101001",
          "Paxs": [
            {
              "Name": "Guilherme",
              "Surname": "MPV",
              "Age": 21,
              "Title": null,
              "IsChild": false,
              "IsMainPax": false,
              "Document": "49787289831",
              "DocumentType": 1.0,
              "DocumentTypeDescription": "CPF"
            }
          ],
          "CancellationPolicies": null,
          "BoardDescription": null,
          "RoomDescription": null,
          "IsRefundable": false,
          "RoomPrice": null,
          "QuantityAdults": 1,
          "ChildAges": null,
          "QuantityChild": 0,
          "Quantity": 0
        }
      ],
      "UserId": "25261400139",
      "UserIP": "191.241.229.42",
      "OrderID": "CA252291119135555A",
      "Price": {
        "PlanDailyUsed": 1,
        "TotalPriceExtra": "-12.56",
        "PlanExtraPrice": "0",
        "PlanPointUsed": 0,
        "PaymentOptionId": 1,
        "PlanMarkup": "20.0",
        "AccumulatedPoint": 0.0
      }
    },
    "BookingUpdateFilter": null,
    "CancelationFilter": {
      "UserId": "25261400139",
      "OrderId": "CA252291119135555A",
      "UserIP": "191.241.229.42",
      "ServiceIds": [
        14054
      ],
      "CancellationDate": ISODate("2019-11-29T13:56:47.080Z")
    },
    "Created": ISODate("2019-11-29T13:55:49.364Z"),
    "IsActive": true,
    "ActualStatus": {
      "StatusId": 3,
      "Name": "Cancelado",
      "Description": null,
      "Date": ISODate("2019-11-29T13:56:53.163Z"),
      "PreviousStatusId": 2
    },
    "History": [
      {
        "StatusId": 2,
        "Name": "Confirmado",
        "Description": null,
        "Date": ISODate("2019-11-29T13:55:49.364Z"),
        "PreviousStatusId": null
      },
      {
        "StatusId": 3,
        "Name": "Cancelado",
        "Description": null,
        "Date": ISODate("2019-11-29T13:56:53.163Z"),
        "PreviousStatusId": 2
      }
    ],
    "CancelationPoliciesPenalty": {
      "id": "00000000-0000-0000-0000-000000000000",
      "_id": null,
      "RoomPrices": null,
      "Rooms": null,
      "CancellationRoomPrices": {
        "TotalPrice": "0",
        "DailyPrice": "0",
        "PlanType": null,
        "PlanDailyPrice": "0",
        "PlanTotalPrice": "0",
        "PlanNumberOfNightsUsed": 0,
        "PlanExtraReservationCostPrice": "0",
        "PlanExtraReservationFinalPrice": "0",
        "PlanCalculationFormula": "0",
        "PlanMarkup": "0",
        "Currency": null,
        "Description": null,
        "NumberOfNights": 1
      },
      "CancellationText": "Você pode cancelar sem custo até 29/03/2020 às 00:00",
      "DtBegin": ISODate("2020-03-29T00:00:00.000Z"),
      "DtEnd": ISODate("2020-04-04T00:00:00.000Z"),
      "IsRefundable": false,
      "Error": null,
      "CancelationPoliciesFilter": null,
      "CancelationPoliciesPenaltyFilter": null,
      "Plan": null
    },
    "StartDate": null,
    "EndDate": null
  },
  {
    "_id": ObjectId("5de13587f4c7c900018d6802"),
    "id": "00000000-0000-0000-0000-000000000000",
    "BookingResult": {
      "Rooms": [
        {
          "VoucherId": "587503-689739",
          "ReservationId": "11292",
          "ServiceId": 14061,
          "Status": "Confirmado",
          "Observations": "\nO Boreas possui 60 aptos com vista para o mar, ar condicionado, frigobar, telefone, Cofre, internet Wi Fi Gratuíta, TV a cabo, Tv de Led, banheiros privativos com chuveiro quente e Frio.\n<br /> <u>POLITICAS GERAIS:</u> Check-in 14:00h\nCheck-out 12:00h <br /><u>POLITICA DE CANCELAMENTO:</u> Em períodos de alta estação deverá ser feito o cancelamento ou alteração com pelo menos 3 dias de antecedência, caso não seja feito dentro deste prazo, será cobrado.\t\n\nPeríodo de cancelamento em datas comemorativas será 7 dias antes do checkin, exp. carnaval, semana santa, corpus cristus e etc. Serar cobrado o valor integral da estadia. \n\nNo Show sera cobrado o valor de 1 diaria.\n\nCriança: Até 06 anos não paga,\t1 criança free por apto.<br />\n<u>POLÍTICAS DE GARANTIA:</u> <br /> Politicas de faturamento <br /> Faturamento 15 apos o check-out, mediante a aprovaçao do hotel <br />\n",
          "RoomDescription": "Standard",
          "SellingPrice": "103.13",
          "CancellationPrice": "0",
          "Checkin": "2020-03-07",
          "Checkout": "2020-03-08",
          "Comission": "0",
          "HotelAddress": "AV. CESAR CALS  1780 PRAIA DO FUTURO",
          "BoardDescription": "Café da manhã",
          "BreakfeastIncluded": true,
          "HotelName": "Boreas Apart Hotel ",
          "Paxes": [
            {
              "Name": "Guilherme",
              "Surname": "TesteMPV",
              "Age": 21,
              "Title": "Mr",
              "IsChild": false,
              "IsMainPax": true,
              "Document": "44015077032"
            }
          ]
        },
        {
          "VoucherId": "587503-689740",
          "ReservationId": "11292",
          "ServiceId": 14062,
          "Status": "Rejeitado",
          "Observations": "\nO Boreas possui 60 aptos com vista para o mar, ar condicionado, frigobar, telefone, Cofre, internet Wi Fi Gratuíta, TV a cabo, Tv de Led, banheiros privativos com chuveiro quente e Frio.\n<br /> <u>POLITICAS GERAIS:</u> Check-in 14:00h\nCheck-out 12:00h <br /><u>POLITICA DE CANCELAMENTO:</u> Em períodos de alta estação deverá ser feito o cancelamento ou alteração com pelo menos 3 dias de antecedência, caso não seja feito dentro deste prazo, será cobrado.\t\n\nPeríodo de cancelamento em datas comemorativas será 7 dias antes do checkin, exp. carnaval, semana santa, corpus cristus e etc. Serar cobrado o valor integral da estadia. \n\nNo Show sera cobrado o valor de 1 diaria.\n\nCriança: Até 06 anos não paga,\t1 criança free por apto.<br />\n<u>POLÍTICAS DE GARANTIA:</u> <br /> Politicas de faturamento <br /> Faturamento 15 apos o check-out, mediante a aprovaçao do hotel <br />\n",
          "RoomDescription": "Standard",
          "SellingPrice": "103.13",
          "CancellationPrice": "0",
          "Checkin": "2020-03-07",
          "Checkout": "2020-03-08",
          "Comission": "0",
          "HotelAddress": "AV. CESAR CALS  1780 PRAIA DO FUTURO",
          "BoardDescription": "Café da manhã",
          "BreakfeastIncluded": true,
          "HotelName": "Boreas Apart Hotel ",
          "Paxes": [
            {
              "Name": "Lorena",
              "Surname": "TesteMPV",
              "Age": 21,
              "Title": "Mr",
              "IsChild": false,
              "IsMainPax": true,
              "Document": "09338423093"
            }
          ]
        }
      ],
      "RoomPrices": {
        "TotalPrice": "206.26",
        "DailyPrice": "0",
        "PlanType": "Meu Plano",
        "PlanDailyPrice": "206.26",
        "PlanTotalPrice": "0",
        "PlanNumberOfNightsUsed": 1,
        "PlanExtraReservationCostPrice": "0",
        "PlanExtraReservationFinalPrice": "0",
        "PlanCalculationFormula": "-393.75",
        "PlanMarkup": "20.0",
        "Currency": null,
        "Description": null,
        "NumberOfNights": 1
      },
      "Error": null
    },
    "OrderID": "CA2522911191512F29",
    "CancelationPolicies": {
      "id": "00000000-0000-0000-0000-000000000000",
      "_id": ObjectId("5de13168f4c7c900018d6801"),
      "RoomPrices": {
        "TotalPrice": "206",
        "DailyPrice": "0",
        "PlanType": "Meu Plano",
        "PlanDailyPrice": "0",
        "PlanTotalPrice": "0",
        "PlanNumberOfNightsUsed": 1,
        "PlanExtraReservationCostPrice": "0",
        "PlanExtraReservationFinalPrice": "0",
        "PlanCalculationFormula": "-394.01",
        "PlanMarkup": "20.0",
        "Currency": null,
        "Description": null,
        "NumberOfNights": 0
      },
      "Rooms": [
        {
          "RoomId": null,
          "Paxs": null,
          "CancellationPolicies": [
            {
              "Description": null,
              "BeginDate": ISODate("2020-02-29T17:00:00.000Z"),
              "EndDate": ISODate("2020-03-07T00:00:00.000Z"),
              "Prices": {
                "Price": "103.13",
                "DailyPriceTotal": "0",
                "PeriodPrice": "0",
                "TotalPeriodPriceTotal": "0",
                "Currency": "BRL",
                "Description": null
              },
              "Error": null
            }
          ],
          "BoardDescription": "Café da manhã",
          "RoomDescription": "Standard",
          "IsRefundable": true,
          "RoomPrice": {
            "TotalPrice": "103",
            "DailyPrice": "103.13",
            "PlanType": null,
            "PlanDailyPrice": "0",
            "PlanTotalPrice": "0",
            "PlanNumberOfNightsUsed": 0,
            "PlanExtraReservationCostPrice": "0",
            "PlanExtraReservationFinalPrice": "0",
            "PlanCalculationFormula": "0",
            "PlanMarkup": "0",
            "Currency": "BRL",
            "Description": null,
            "NumberOfNights": 1
          },
          "QuantityAdults": 1,
          "ChildAges": null,
          "QuantityChild": 0,
          "Quantity": 2
        },
        {
          "RoomId": null,
          "Paxs": null,
          "CancellationPolicies": [
            {
              "Description": null,
              "BeginDate": ISODate("2020-02-29T17:00:00.000Z"),
              "EndDate": ISODate("2020-03-07T00:00:00.000Z"),
              "Prices": {
                "Price": "103.13",
                "DailyPriceTotal": "0",
                "PeriodPrice": "0",
                "TotalPeriodPriceTotal": "0",
                "Currency": "BRL",
                "Description": null
              },
              "Error": null
            }
          ],
          "BoardDescription": "Café da manhã",
          "RoomDescription": "Standard",
          "IsRefundable": true,
          "RoomPrice": {
            "TotalPrice": "103",
            "DailyPrice": "103.13",
            "PlanType": null,
            "PlanDailyPrice": "0",
            "PlanTotalPrice": "0",
            "PlanNumberOfNightsUsed": 0,
            "PlanExtraReservationCostPrice": "0",
            "PlanExtraReservationFinalPrice": "0",
            "PlanCalculationFormula": "0",
            "PlanMarkup": "0",
            "Currency": "BRL",
            "Description": null,
            "NumberOfNights": 1
          },
          "QuantityAdults": 1,
          "ChildAges": null,
          "QuantityChild": 0,
          "Quantity": 2
        }
      ],
      "CancellationRoomPrices": {
        "TotalPrice": "206.26",
        "DailyPrice": "0",
        "PlanType": null,
        "PlanDailyPrice": "0",
        "PlanTotalPrice": "0",
        "PlanNumberOfNightsUsed": 1,
        "PlanExtraReservationCostPrice": "0",
        "PlanExtraReservationFinalPrice": "0.26",
        "PlanCalculationFormula": "0",
        "PlanMarkup": "0",
        "Currency": null,
        "Description": null,
        "NumberOfNights": 0
      },
      "CancellationText": "Você pode cancelar sem custo até 27/02/2020 às 17:00 haverá uma penalidade de 1 diária(s)  a partir de 27/02/2020 às 17:00.Caso não se apresente (no show), será cobrado o valor total da tarifa. Todos os horários estão expressos em hora local.",
      "DtBegin": ISODate("2020-02-27T17:00:00.000Z"),
      "DtEnd": ISODate("2020-03-07T00:00:00.000Z"),
      "IsRefundable": true,
      "Error": null,
      "CancelationPoliciesFilter": {
        "Token": "aafffd6d-78de-4cce-93ca-ddf58287e211",
        "HotelId": 93933,
        "RoomIds": [
          3241001.0,
          3241001.0
        ],
        "UserId": "25261400139",
        "UserIP": "191.241.229.42",
        "BrokerId": 1,
        "ProviderName": "Europlus - Hotel",
        "CheckinDate": "2020-03-07",
        "CheckoutDate": "2020-03-08",
        "CheckinDateParse": ISODate("2020-03-07T00:00:00.000Z"),
        "CheckoutDateParse": ISODate("2020-03-08T00:00:00.000Z"),
        "NumberOfNights": 1,
        "PolicieDate": ISODate("2019-11-29T14:55:17.333Z")
      },
      "CancelationPoliciesPenaltyFilter": null,
      "Plan": {
        "cpf": "25261400139",
        "planos": [
          {
            "_id": "28b727d1-4bf8-c14d-926a-924cd402e49e",
            "titulo": "Superior 7 Diárias",
            "tipoPlano": "Superior",
            "valorPlano": "1080",
            "valorDiariaMaxima": "600.01",
            "valorDiariaMinima": "200.01",
            "diariasDisponiveis": 6,
            "diariasTotais": 7,
            "ativo": true,
            "Markup": "0.2"
          }
        ],
        "ErrorMessages": null
      }
    },
    "Availability": {
      "id": "00000000-0000-0000-0000-000000000000",
      "_id": ObjectId("5de13150a2513a00013caf79"),
      "HotelInfo": [
        {
          "ID": NumberLong(93933),
          "Name": "Boreas Apart Hotel (Fortaleza, Brasil)",
          "Chain": "Independent",
          "CNPJ": null,
          "Site": null,
          "Category": "3",
          "AcommodationType": "Hotel",
          "Email": null,
          "Recommended": false,
          "PhoneNumber": null,
          "PrimaryImage": {
            "ImageUrl": "https://i.t4w.mobi/h/BR/1001925/93933/93933_2066Property65737.jpg",
            "Title": null,
            "Description": null
          },
          "ImagesViewUrl": null,
          "MapUrl": null,
          "Rooms": [
            {
              "QuantityAdults": 2,
              "QuantityChild": 0,
              "ChildAges": null,
              "RoomsType": [
                {
                  "RoomID": "3241001",
                  "RoomName": "Standard",
                  "Description": null,
                  "MaxOccupation": 1,
                  "Remarks": null,
                  "TermsAndConditions": null,
                  "TaxesIncluded": false,
                  "CancelationPolicies": [
                    {
                      "id": "00000000-0000-0000-0000-000000000000",
                      "_id": null,
                      "RoomPrices": null,
                      "Rooms": null,
                      "CancellationRoomPrices": null,
                      "CancellationText": null,
                      "DtBegin": ISODate("2019-11-28T19:26:12.067Z"),
                      "DtEnd": ISODate("2019-11-28T19:26:12.067Z"),
                      "IsRefundable": false,
                      "Error": null,
                      "CancelationPoliciesFilter": null,
                      "CancelationPoliciesPenaltyFilter": null,
                      "Plan": null
                    }
                  ],
                  "Amenities": null,
                  "RoomImages": null,
                  "Regime": {
                    "Name": "Café da manhã",
                    "BoardAcronym": null
                  },
                  "Days": 0,
                  "RoomPrices": {
                    "Price": "0",
                    "DailyPriceTotal": "0",
                    "PeriodPrice": "0",
                    "TotalPeriodPriceTotal": "0",
                    "Currency": "BRL",
                    "Description": null
                  },
                  "TaxPrices": null,
                  "IsBestPrice": false,
                  "IsNonRefundable": false,
                  "Quantity": 2,
                  "RecommendedRoom": false,
                  "providerId": 0,
                  "providerName": "Europlus - Hotel",
                  "BreakfeastIncluded": true,
                  "QuantityAdults": 1,
                  "ChildAges": null,
                  "QuantityChild": 0
                }
              ],
              "RoomPrices": {
                "Price": "0",
                "DailyPriceTotal": "0",
                "PeriodPrice": "0",
                "TotalPeriodPriceTotal": "0",
                "Currency": "BRL",
                "Description": null
              }
            }
          ],
          "Images": [
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1001925/93933/93933_2066Property65737.jpg",
              "Title": null,
              "Description": "MAIN"
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1001925/93933/93933_2066Property119965.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1001925/93933/93933_2066Property119967.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1001925/93933/93933_2066Property119968.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1001925/93933/93933_2066Property119971.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1001925/93933/93933_2066Property119974.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1001925/93933/93933_2066Property119980.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1001925/93933/93933_2066Property119989.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1001925/93933/93933_2066Property119997.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1001925/93933/93933_2066Property448797.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1001925/93933/93933_2066Property448798.jpg",
              "Title": null,
              "Description": ""
            }
          ],
          "Amenities": [
            {
              "AmenityID": 0,
              "Name": "Café da manhã",
              "ImageURL": null
            },
            {
              "AmenityID": 0,
              "Name": "Estacionamento",
              "ImageURL": null
            },
            {
              "AmenityID": 0,
              "Name": "Internet",
              "ImageURL": null
            },
            {
              "AmenityID": 0,
              "Name": "Lavanderia",
              "ImageURL": null
            },
            {
              "AmenityID": 0,
              "Name": "Piscina",
              "ImageURL": null
            },
            {
              "AmenityID": 0,
              "Name": "Restaurante",
              "ImageURL": null
            }
          ],
          "Description": "O Boreas possui 60 aptos, com ar condicionado, frigobar, TV, telefone, chuveiro quente, banheiro privativo, internet. Piscina, sauna,  estacionamento e lavanderia.",
          "CheckinDate": ISODate("2019-11-28T19:26:12.067Z"),
          "CheckoutDate": ISODate("2019-11-28T19:26:12.067Z"),
          "Days": 0,
          "Iata": null,
          "Address": [
            {
              "Street": "AV. CESAR CALS, 1780 PRAIA DO FUTURO",
              "AddressNumber": null,
              "AddressComplement": null,
              "CityName": "Fortaleza, Brasil",
              "StateName": null,
              "CountryName": null,
              "ZipCode": null
            }
          ],
          "Addressstring": null,
          "Broker": 1,
          "TripAdvisor": null,
          "Latitude": -3.73140001296997,
          "Longitude": -38.4588813781738
        }
      ],
      "ErrorMessages": null,
      "Token": "aafffd6d-78de-4cce-93ca-ddf58287e211",
      "Created": ISODate("2019-11-29T14:55:12.204Z"),
      "UserId": "25261400139",
      "HotelId": 93933,
      "IsPlanDaysAvailable": true,
      "AvailableDays": 7,
      "TotalDays": 7
    },
    "Error": null,
    "BookingFilter": {
      "Token": "aafffd6d-78de-4cce-93ca-ddf58287e211",
      "HotelId": 93933,
      "ProviderName": "Europlus - Hotel",
      "BrokerId": 1,
      "Rooms": [
        {
          "RoomId": "3241001",
          "Paxs": [
            {
              "Name": "Guilherme",
              "Surname": "TesteMPV",
              "Age": 21,
              "Title": null,
              "IsChild": false,
              "IsMainPax": false,
              "Document": "44015077032",
              "DocumentType": 1.0,
              "DocumentTypeDescription": "CPF"
            }
          ],
          "CancellationPolicies": null,
          "BoardDescription": null,
          "RoomDescription": null,
          "IsRefundable": false,
          "RoomPrice": null,
          "QuantityAdults": 1,
          "ChildAges": null,
          "QuantityChild": 0,
          "Quantity": 0
        },
        {
          "RoomId": "3241001",
          "Paxs": [
            {
              "Name": "Lorena",
              "Surname": "TesteMPV",
              "Age": 21,
              "Title": null,
              "IsChild": false,
              "IsMainPax": false,
              "Document": "09338423093",
              "DocumentType": 1.0,
              "DocumentTypeDescription": "CPF"
            }
          ],
          "CancellationPolicies": null,
          "BoardDescription": null,
          "RoomDescription": null,
          "IsRefundable": false,
          "RoomPrice": null,
          "QuantityAdults": 1,
          "ChildAges": null,
          "QuantityChild": 0,
          "Quantity": 0
        }
      ],
      "UserId": "25261400139",
      "UserIP": "191.241.229.42",
      "OrderID": "CA2522911191512F29",
      "Price": {
        "PlanDailyUsed": 1,
        "TotalPriceExtra": "-393.75",
        "PlanExtraPrice": "0",
        "PlanPointUsed": 0,
        "PaymentOptionId": 1,
        "PlanMarkup": "20.0",
        "AccumulatedPoint": 0.0
      }
    },
    "BookingUpdateFilter": null,
    "CancelationFilter": null,
    "Created": ISODate("2019-11-29T15:12:16.995Z"),
    "IsActive": true,
    "ActualStatus": {
      "StatusId": 4,
      "Name": "Rejeitada",
      "Description": null,
      "Date": ISODate("2019-11-29T15:12:16.995Z"),
      "PreviousStatusId": null
    },
    "History": [
      {
        "StatusId": 4,
        "Name": "Rejeitada",
        "Description": null,
        "Date": ISODate("2019-11-29T15:12:16.995Z"),
        "PreviousStatusId": null
      }
    ],
    "CancelationPoliciesPenalty": null,
    "StartDate": null,
    "EndDate": null
  },
  {
    "_id": ObjectId("5de15b71f4c7c900018d6804"),
    "id": "00000000-0000-0000-0000-000000000000",
    "BookingResult": {
      "Rooms": [
        {
          "VoucherId": "",
          "ReservationId": "11299",
          "ServiceId": 14069,
          "Status": "Rejeitado",
          "Observations": "1 children between 1 to 5 are sharing beds with parents in ALL room type .  Shared bathroom.Car park YES (without additional debit notes).Following the Statute of Children and Adolescents (Law Nº. 8.069/90), the accommodation of people under 18 unaccompanied or with their guardians will be accepted only with written authorization of their parents on a notarized document. Parenthood must be proved through ID or Birth Certificate. (22/03/2015-22/03/2035) ",
          "RoomDescription": "SINGLE DELUXE",
          "SellingPrice": "154.37",
          "CancellationPrice": "0",
          "Checkin": "2020-03-07",
          "Checkout": "2020-03-08",
          "Comission": "0",
          "HotelAddress": "RUA DOS TIMBIRAS  472",
          "BoardDescription": "Café da manhã",
          "BreakfeastIncluded": true,
          "HotelName": "Real Castilha",
          "Paxes": [
            {
              "Name": "Guilherme",
              "Surname": "TesteMPV",
              "Age": 21,
              "Title": "Mr",
              "IsChild": false,
              "IsMainPax": true,
              "Document": "24733369034"
            }
          ]
        },
        {
          "VoucherId": "",
          "ReservationId": "11299",
          "ServiceId": 14070,
          "Status": "Rejeitado",
          "Observations": "1 children between 1 to 5 are sharing beds with parents in ALL room type .  Shared bathroom.Car park YES (without additional debit notes).Following the Statute of Children and Adolescents (Law Nº. 8.069/90), the accommodation of people under 18 unaccompanied or with their guardians will be accepted only with written authorization of their parents on a notarized document. Parenthood must be proved through ID or Birth Certificate. (22/03/2015-22/03/2035) ",
          "RoomDescription": "SINGLE DELUXE",
          "SellingPrice": "154.37",
          "CancellationPrice": "0",
          "Checkin": "2020-03-07",
          "Checkout": "2020-03-08",
          "Comission": "0",
          "HotelAddress": "RUA DOS TIMBIRAS  472",
          "BoardDescription": "Café da manhã",
          "BreakfeastIncluded": true,
          "HotelName": "Real Castilha",
          "Paxes": [
            {
              "Name": "Guilherme",
              "Surname": "TesteMPV",
              "Age": 21,
              "Title": "Mr",
              "IsChild": false,
              "IsMainPax": true,
              "Document": "24733369034"
            }
          ]
        }
      ],
      "RoomPrices": {
        "TotalPrice": "308.74",
        "DailyPrice": "0",
        "PlanType": "Meu Plano",
        "PlanDailyPrice": "308.74",
        "PlanTotalPrice": "0",
        "PlanNumberOfNightsUsed": 1,
        "PlanExtraReservationCostPrice": "0",
        "PlanExtraReservationFinalPrice": "0",
        "PlanCalculationFormula": "-291.27",
        "PlanMarkup": "20.0",
        "Currency": null,
        "Description": null,
        "NumberOfNights": 1
      },
      "Error": null
    },
    "OrderID": "CA2522911191754480",
    "CancelationPolicies": {
      "id": "00000000-0000-0000-0000-000000000000",
      "_id": ObjectId("5de15b36f4c7c900018d6803"),
      "RoomPrices": {
        "TotalPrice": "308",
        "DailyPrice": "0",
        "PlanType": "Meu Plano",
        "PlanDailyPrice": "0",
        "PlanTotalPrice": "0",
        "PlanNumberOfNightsUsed": 1,
        "PlanExtraReservationCostPrice": "0",
        "PlanExtraReservationFinalPrice": "0",
        "PlanCalculationFormula": "-292.01",
        "PlanMarkup": "20.0",
        "Currency": null,
        "Description": null,
        "NumberOfNights": 0
      },
      "Rooms": [
        {
          "RoomId": null,
          "Paxs": null,
          "CancellationPolicies": [
            {
              "Description": null,
              "BeginDate": ISODate("2020-03-01T11:59:00.000Z"),
              "EndDate": ISODate("2020-03-07T00:00:00.000Z"),
              "Prices": {
                "Price": "154.37",
                "DailyPriceTotal": "0",
                "PeriodPrice": "0",
                "TotalPeriodPriceTotal": "0",
                "Currency": "BRL",
                "Description": null
              },
              "Error": null
            }
          ],
          "BoardDescription": "Café da manhã",
          "RoomDescription": "SINGLE DELUXE",
          "IsRefundable": true,
          "RoomPrice": {
            "TotalPrice": "154",
            "DailyPrice": "154.37",
            "PlanType": null,
            "PlanDailyPrice": "0",
            "PlanTotalPrice": "0",
            "PlanNumberOfNightsUsed": 0,
            "PlanExtraReservationCostPrice": "0",
            "PlanExtraReservationFinalPrice": "0",
            "PlanCalculationFormula": "0",
            "PlanMarkup": "0",
            "Currency": "BRL",
            "Description": null,
            "NumberOfNights": 1
          },
          "QuantityAdults": 1,
          "ChildAges": null,
          "QuantityChild": 0,
          "Quantity": 2
        },
        {
          "RoomId": null,
          "Paxs": null,
          "CancellationPolicies": [
            {
              "Description": null,
              "BeginDate": ISODate("2020-03-01T11:59:00.000Z"),
              "EndDate": ISODate("2020-03-07T00:00:00.000Z"),
              "Prices": {
                "Price": "154.37",
                "DailyPriceTotal": "0",
                "PeriodPrice": "0",
                "TotalPeriodPriceTotal": "0",
                "Currency": "BRL",
                "Description": null
              },
              "Error": null
            }
          ],
          "BoardDescription": "Café da manhã",
          "RoomDescription": "SINGLE DELUXE",
          "IsRefundable": true,
          "RoomPrice": {
            "TotalPrice": "154",
            "DailyPrice": "154.37",
            "PlanType": null,
            "PlanDailyPrice": "0",
            "PlanTotalPrice": "0",
            "PlanNumberOfNightsUsed": 0,
            "PlanExtraReservationCostPrice": "0",
            "PlanExtraReservationFinalPrice": "0",
            "PlanCalculationFormula": "0",
            "PlanMarkup": "0",
            "Currency": "BRL",
            "Description": null,
            "NumberOfNights": 1
          },
          "QuantityAdults": 1,
          "ChildAges": null,
          "QuantityChild": 0,
          "Quantity": 2
        }
      ],
      "CancellationRoomPrices": {
        "TotalPrice": "308.74",
        "DailyPrice": "0",
        "PlanType": null,
        "PlanDailyPrice": "0",
        "PlanTotalPrice": "0",
        "PlanNumberOfNightsUsed": 1,
        "PlanExtraReservationCostPrice": "0",
        "PlanExtraReservationFinalPrice": "0.74",
        "PlanCalculationFormula": "0",
        "PlanMarkup": "0",
        "Currency": null,
        "Description": null,
        "NumberOfNights": 0
      },
      "CancellationText": "Você pode cancelar sem custo até 28/02/2020 às 11:59 haverá uma penalidade de 1 diária(s)  a partir de 28/02/2020 às 11:59.Caso não se apresente (no show), será cobrado o valor total da tarifa. Todos os horários estão expressos em hora local.",
      "DtBegin": ISODate("2020-02-28T11:59:00.000Z"),
      "DtEnd": ISODate("2020-03-07T00:00:00.000Z"),
      "IsRefundable": true,
      "Error": null,
      "CancelationPoliciesFilter": {
        "Token": "69ed975a-2eb1-495c-85b7-28a607ec0f52",
        "HotelId": 632739,
        "RoomIds": [
          15005.0,
          15005.0
        ],
        "UserId": "25261400139",
        "UserIP": "191.241.229.42",
        "BrokerId": 1,
        "ProviderName": "Hotelbeds",
        "CheckinDate": "2020-03-07",
        "CheckoutDate": "2020-03-08",
        "CheckinDateParse": ISODate("2020-03-07T00:00:00.000Z"),
        "CheckoutDateParse": ISODate("2020-03-08T00:00:00.000Z"),
        "NumberOfNights": 1,
        "PolicieDate": ISODate("2019-11-29T17:53:41.456Z")
      },
      "CancelationPoliciesPenaltyFilter": null,
      "Plan": {
        "cpf": "25261400139",
        "planos": [
          {
            "_id": "28b727d1-4bf8-c14d-926a-924cd402e49e",
            "titulo": "Superior 7 Diárias",
            "tipoPlano": "Superior",
            "valorPlano": "1080",
            "valorDiariaMaxima": "600.01",
            "valorDiariaMinima": "200.01",
            "diariasDisponiveis": 6,
            "diariasTotais": 7,
            "ativo": true,
            "Markup": "0.2"
          }
        ],
        "ErrorMessages": null
      }
    },
    "Availability": {
      "id": "00000000-0000-0000-0000-000000000000",
      "_id": ObjectId("5de15b1aa2513a00013caf7b"),
      "HotelInfo": [
        {
          "ID": NumberLong(632739),
          "Name": "Real Castilha (São Paulo, Brasil)",
          "Chain": "Independent",
          "CNPJ": null,
          "Site": null,
          "Category": "3",
          "AcommodationType": "Hotel",
          "Email": null,
          "Recommended": false,
          "PhoneNumber": null,
          "PrimaryImage": {
            "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/632739/632739_1418Property369907.jpg",
            "Title": null,
            "Description": null
          },
          "ImagesViewUrl": null,
          "MapUrl": null,
          "Rooms": [
            {
              "QuantityAdults": 2,
              "QuantityChild": 0,
              "ChildAges": null,
              "RoomsType": [
                {
                  "RoomID": "15005",
                  "RoomName": "SINGLE DELUXE",
                  "Description": null,
                  "MaxOccupation": 1,
                  "Remarks": null,
                  "TermsAndConditions": null,
                  "TaxesIncluded": false,
                  "CancelationPolicies": [
                    {
                      "id": "00000000-0000-0000-0000-000000000000",
                      "_id": null,
                      "RoomPrices": null,
                      "Rooms": null,
                      "CancellationRoomPrices": null,
                      "CancellationText": null,
                      "DtBegin": ISODate("2019-11-28T19:26:12.067Z"),
                      "DtEnd": ISODate("2019-11-28T19:26:12.067Z"),
                      "IsRefundable": false,
                      "Error": null,
                      "CancelationPoliciesFilter": null,
                      "CancelationPoliciesPenaltyFilter": null,
                      "Plan": null
                    }
                  ],
                  "Amenities": null,
                  "RoomImages": null,
                  "Regime": {
                    "Name": "Café da manhã",
                    "BoardAcronym": null
                  },
                  "Days": 0,
                  "RoomPrices": {
                    "Price": "0",
                    "DailyPriceTotal": "0",
                    "PeriodPrice": "0",
                    "TotalPeriodPriceTotal": "0",
                    "Currency": "BRL",
                    "Description": null
                  },
                  "TaxPrices": null,
                  "IsBestPrice": false,
                  "IsNonRefundable": false,
                  "Quantity": 2,
                  "RecommendedRoom": false,
                  "providerId": 0,
                  "providerName": "Hotelbeds",
                  "BreakfeastIncluded": true,
                  "QuantityAdults": 1,
                  "ChildAges": null,
                  "QuantityChild": 0
                }
              ],
              "RoomPrices": {
                "Price": "0",
                "DailyPriceTotal": "0",
                "PeriodPrice": "0",
                "TotalPeriodPriceTotal": "0",
                "Currency": "BRL",
                "Description": null
              }
            },
            {
              "QuantityAdults": 2,
              "QuantityChild": 0,
              "ChildAges": null,
              "RoomsType": [
                {
                  "RoomID": "15003",
                  "RoomName": "TWIN STANDARD",
                  "Description": null,
                  "MaxOccupation": 1,
                  "Remarks": null,
                  "TermsAndConditions": null,
                  "TaxesIncluded": false,
                  "CancelationPolicies": [
                    {
                      "id": "00000000-0000-0000-0000-000000000000",
                      "_id": null,
                      "RoomPrices": null,
                      "Rooms": null,
                      "CancellationRoomPrices": null,
                      "CancellationText": null,
                      "DtBegin": ISODate("2019-11-28T19:26:12.067Z"),
                      "DtEnd": ISODate("2019-11-28T19:26:12.067Z"),
                      "IsRefundable": false,
                      "Error": null,
                      "CancelationPoliciesFilter": null,
                      "CancelationPoliciesPenaltyFilter": null,
                      "Plan": null
                    }
                  ],
                  "Amenities": null,
                  "RoomImages": null,
                  "Regime": {
                    "Name": "Café da manhã",
                    "BoardAcronym": null
                  },
                  "Days": 0,
                  "RoomPrices": {
                    "Price": "0",
                    "DailyPriceTotal": "0",
                    "PeriodPrice": "0",
                    "TotalPeriodPriceTotal": "0",
                    "Currency": "BRL",
                    "Description": null
                  },
                  "TaxPrices": null,
                  "IsBestPrice": false,
                  "IsNonRefundable": false,
                  "Quantity": 2,
                  "RecommendedRoom": false,
                  "providerId": 0,
                  "providerName": "Hotelbeds",
                  "BreakfeastIncluded": true,
                  "QuantityAdults": 1,
                  "ChildAges": null,
                  "QuantityChild": 0
                }
              ],
              "RoomPrices": {
                "Price": "0",
                "DailyPriceTotal": "0",
                "PeriodPrice": "0",
                "TotalPeriodPriceTotal": "0",
                "Currency": "BRL",
                "Description": null
              }
            },
            {
              "QuantityAdults": 2,
              "QuantityChild": 0,
              "ChildAges": null,
              "RoomsType": [
                {
                  "RoomID": "15001",
                  "RoomName": "SINGLE STANDARD",
                  "Description": null,
                  "MaxOccupation": 1,
                  "Remarks": null,
                  "TermsAndConditions": null,
                  "TaxesIncluded": false,
                  "CancelationPolicies": [
                    {
                      "id": "00000000-0000-0000-0000-000000000000",
                      "_id": null,
                      "RoomPrices": null,
                      "Rooms": null,
                      "CancellationRoomPrices": null,
                      "CancellationText": null,
                      "DtBegin": ISODate("2019-11-28T19:26:12.067Z"),
                      "DtEnd": ISODate("2019-11-28T19:26:12.067Z"),
                      "IsRefundable": false,
                      "Error": null,
                      "CancelationPoliciesFilter": null,
                      "CancelationPoliciesPenaltyFilter": null,
                      "Plan": null
                    }
                  ],
                  "Amenities": null,
                  "RoomImages": null,
                  "Regime": {
                    "Name": "Café da manhã",
                    "BoardAcronym": null
                  },
                  "Days": 0,
                  "RoomPrices": {
                    "Price": "0",
                    "DailyPriceTotal": "0",
                    "PeriodPrice": "0",
                    "TotalPeriodPriceTotal": "0",
                    "Currency": "BRL",
                    "Description": null
                  },
                  "TaxPrices": null,
                  "IsBestPrice": false,
                  "IsNonRefundable": false,
                  "Quantity": 2,
                  "RecommendedRoom": false,
                  "providerId": 0,
                  "providerName": "Hotelbeds",
                  "BreakfeastIncluded": true,
                  "QuantityAdults": 1,
                  "ChildAges": null,
                  "QuantityChild": 0
                }
              ],
              "RoomPrices": {
                "Price": "0",
                "DailyPriceTotal": "0",
                "PeriodPrice": "0",
                "TotalPeriodPriceTotal": "0",
                "Currency": "BRL",
                "Description": null
              }
            },
            {
              "QuantityAdults": 2,
              "QuantityChild": 0,
              "ChildAges": null,
              "RoomsType": [
                {
                  "RoomID": "15006",
                  "RoomName": "TWIN DELUXE",
                  "Description": null,
                  "MaxOccupation": 1,
                  "Remarks": null,
                  "TermsAndConditions": null,
                  "TaxesIncluded": false,
                  "CancelationPolicies": [
                    {
                      "id": "00000000-0000-0000-0000-000000000000",
                      "_id": null,
                      "RoomPrices": null,
                      "Rooms": null,
                      "CancellationRoomPrices": null,
                      "CancellationText": null,
                      "DtBegin": ISODate("2019-11-28T19:26:12.067Z"),
                      "DtEnd": ISODate("2019-11-28T19:26:12.067Z"),
                      "IsRefundable": false,
                      "Error": null,
                      "CancelationPoliciesFilter": null,
                      "CancelationPoliciesPenaltyFilter": null,
                      "Plan": null
                    }
                  ],
                  "Amenities": null,
                  "RoomImages": null,
                  "Regime": {
                    "Name": "Café da manhã",
                    "BoardAcronym": null
                  },
                  "Days": 0,
                  "RoomPrices": {
                    "Price": "0",
                    "DailyPriceTotal": "0",
                    "PeriodPrice": "0",
                    "TotalPeriodPriceTotal": "0",
                    "Currency": "BRL",
                    "Description": null
                  },
                  "TaxPrices": null,
                  "IsBestPrice": false,
                  "IsNonRefundable": false,
                  "Quantity": 2,
                  "RecommendedRoom": false,
                  "providerId": 0,
                  "providerName": "Hotelbeds",
                  "BreakfeastIncluded": true,
                  "QuantityAdults": 1,
                  "ChildAges": null,
                  "QuantityChild": 0
                }
              ],
              "RoomPrices": {
                "Price": "0",
                "DailyPriceTotal": "0",
                "PeriodPrice": "0",
                "TotalPeriodPriceTotal": "0",
                "Currency": "BRL",
                "Description": null
              }
            },
            {
              "QuantityAdults": 2,
              "QuantityChild": 0,
              "ChildAges": null,
              "RoomsType": [
                {
                  "RoomID": "15004",
                  "RoomName": "DOUBLE DELUXE",
                  "Description": null,
                  "MaxOccupation": 1,
                  "Remarks": null,
                  "TermsAndConditions": null,
                  "TaxesIncluded": false,
                  "CancelationPolicies": [
                    {
                      "id": "00000000-0000-0000-0000-000000000000",
                      "_id": null,
                      "RoomPrices": null,
                      "Rooms": null,
                      "CancellationRoomPrices": null,
                      "CancellationText": null,
                      "DtBegin": ISODate("2019-11-28T19:26:12.067Z"),
                      "DtEnd": ISODate("2019-11-28T19:26:12.067Z"),
                      "IsRefundable": false,
                      "Error": null,
                      "CancelationPoliciesFilter": null,
                      "CancelationPoliciesPenaltyFilter": null,
                      "Plan": null
                    }
                  ],
                  "Amenities": null,
                  "RoomImages": null,
                  "Regime": {
                    "Name": "Café da manhã",
                    "BoardAcronym": null
                  },
                  "Days": 0,
                  "RoomPrices": {
                    "Price": "0",
                    "DailyPriceTotal": "0",
                    "PeriodPrice": "0",
                    "TotalPeriodPriceTotal": "0",
                    "Currency": "BRL",
                    "Description": null
                  },
                  "TaxPrices": null,
                  "IsBestPrice": false,
                  "IsNonRefundable": false,
                  "Quantity": 2,
                  "RecommendedRoom": false,
                  "providerId": 0,
                  "providerName": "Hotelbeds",
                  "BreakfeastIncluded": true,
                  "QuantityAdults": 1,
                  "ChildAges": null,
                  "QuantityChild": 0
                }
              ],
              "RoomPrices": {
                "Price": "0",
                "DailyPriceTotal": "0",
                "PeriodPrice": "0",
                "TotalPeriodPriceTotal": "0",
                "Currency": "BRL",
                "Description": null
              }
            },
            {
              "QuantityAdults": 2,
              "QuantityChild": 0,
              "ChildAges": null,
              "RoomsType": [
                {
                  "RoomID": "15002",
                  "RoomName": "DOUBLE STANDARD",
                  "Description": null,
                  "MaxOccupation": 1,
                  "Remarks": null,
                  "TermsAndConditions": null,
                  "TaxesIncluded": false,
                  "CancelationPolicies": [
                    {
                      "id": "00000000-0000-0000-0000-000000000000",
                      "_id": null,
                      "RoomPrices": null,
                      "Rooms": null,
                      "CancellationRoomPrices": null,
                      "CancellationText": null,
                      "DtBegin": ISODate("2019-11-28T19:26:12.067Z"),
                      "DtEnd": ISODate("2019-11-28T19:26:12.067Z"),
                      "IsRefundable": false,
                      "Error": null,
                      "CancelationPoliciesFilter": null,
                      "CancelationPoliciesPenaltyFilter": null,
                      "Plan": null
                    }
                  ],
                  "Amenities": null,
                  "RoomImages": null,
                  "Regime": {
                    "Name": "Café da manhã",
                    "BoardAcronym": null
                  },
                  "Days": 0,
                  "RoomPrices": {
                    "Price": "0",
                    "DailyPriceTotal": "0",
                    "PeriodPrice": "0",
                    "TotalPeriodPriceTotal": "0",
                    "Currency": "BRL",
                    "Description": null
                  },
                  "TaxPrices": null,
                  "IsBestPrice": false,
                  "IsNonRefundable": false,
                  "Quantity": 2,
                  "RecommendedRoom": false,
                  "providerId": 0,
                  "providerName": "Hotelbeds",
                  "BreakfeastIncluded": true,
                  "QuantityAdults": 1,
                  "ChildAges": null,
                  "QuantityChild": 0
                }
              ],
              "RoomPrices": {
                "Price": "0",
                "DailyPriceTotal": "0",
                "PeriodPrice": "0",
                "TotalPeriodPriceTotal": "0",
                "Currency": "BRL",
                "Description": null
              }
            }
          ],
          "Images": [
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/632739/632739_1418Property369907.jpg",
              "Title": null,
              "Description": "MAIN"
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/632739/632739_1418Property22603.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/632739/632739_1418Property254442.jpg",
              "Title": null,
              "Description": "Fachada Real Castilha"
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/632739/632739_1418Property254443.jpg",
              "Title": null,
              "Description": "Fachada Real Castilha"
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/632739/632739_1418Property369900.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/632739/632739_1418Property369901.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/632739/632739_1418Property369902.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/632739/632739_1418Property369903.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/632739/632739_1418Property369904.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/632739/632739_1418Property369906.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/632739/632739_1418Property369908.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/632739/632739_1418Property369909.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/632739/632739_1418Property369971.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/632739/632739_1418Property369972.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/632739/632739_1418Property369973.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/632739/632739_1418Property370045.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/632739/632739_1418Property370046.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/632739/632739_1418Property370047.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/632739/632739_1418Property370048.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/632739/632739_1418Property370049.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/632739/632739_1418Property370050.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/632739/632739_1418Property370051.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/632739/632739_1418Property370052.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/632739/632739_1418Property370053.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/632739/632739_1418Property370054.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/632739/632739_1418Property370055.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/632739/632739_1418Property370056.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/632739/632739_1418Property370057.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/632739/632739_1418Property370058.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/632739/632739_1418Property370059.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/632739/632739_1418Property370060.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/632739/632739_1418Property370061.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/632739/632739_1418Property370062.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/632739/632739_1418Property370063.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/632739/632739_1418Property370064.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/632739/632739_1418Property370065.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/632739/632739_1418Property370066.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/632739/632739_1418Property370067.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/632739/632739_1418Property370068.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/632739/632739_1418Property370069.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/632739/632739_1418Property370070.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/632739/632739_1418Property370071.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/632739/632739_1418Property370072.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/632739/632739_1418Property370073.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/632739/632739_1418Property370079.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/632739/632739_1418Property370080.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/632739/632739_1418Property370081.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/632739/632739_1418Property370082.jpg",
              "Title": null,
              "Description": ""
            }
          ],
          "Amenities": [
            {
              "AmenityID": 0,
              "Name": "Academia",
              "ImageURL": null
            },
            {
              "AmenityID": 0,
              "Name": "Café da manhã",
              "ImageURL": null
            },
            {
              "AmenityID": 0,
              "Name": "Estacionamento",
              "ImageURL": null
            },
            {
              "AmenityID": 0,
              "Name": "Internet",
              "ImageURL": null
            },
            {
              "AmenityID": 0,
              "Name": "Lavanderia",
              "ImageURL": null
            }
          ],
          "Description": "Com uma infraestrutura completa e requinte na decoração, o Real Castilha é um dos empreendimentos da Rede Buenas de Hotéis que atende a demanda dos hóspedes que estão em busca de instalações mais diversificadas no Centro de São Paulo. Os 87 apartamentos do hotel, incluindo apartamentos de luxo, podem receber confortavelmente de 1 a 4 pessoas e estão totalmente equipados para garantir aos clientes conforto, qualidade e excelência em prestação de serviços.\r\rInstalado em um edifício totalmente remodelado e próximo aos grandes centros de compras, feiras e negócios da capital paulista e de uma das esquinas mais famosas do Brasil, as avenidas Ipiranga e São João, onde está o tradicional Bar Brahma. O hotel oferece em suas instalações salas de reuniões, business center, guarda-volumes, Wi-Fi nos apartamentos, cofres individuais na recepção, além de room service, lavanderia e estacionamento com manobrista.\r\rO Real Castilha conta com apartamentos com piso frio de cerâmica, além de amplas suítes no estilo standart e luxo, este último com banheiras de hidromassagem. A unidade conta também com suítes de duas camas de casal, além de quartos que acomodas confortavelmente quatro pessoas, especialmente projetados com um banheiro e um lavabo, exclusividade na região central da capital paulista.\r",
          "CheckinDate": ISODate("2019-11-28T19:26:12.067Z"),
          "CheckoutDate": ISODate("2019-11-28T19:26:12.067Z"),
          "Days": 0,
          "Iata": null,
          "Address": [
            {
              "Street": "Rua das Timbiras, 472 Centro",
              "AddressNumber": null,
              "AddressComplement": null,
              "CityName": "São Paulo, Brasil",
              "StateName": null,
              "CountryName": null,
              "ZipCode": null
            }
          ],
          "Addressstring": null,
          "Broker": 1,
          "TripAdvisor": null,
          "Latitude": -23.5413608551025,
          "Longitude": -46.6403617858887
        }
      ],
      "ErrorMessages": null,
      "Token": "69ed975a-2eb1-495c-85b7-28a607ec0f52",
      "Created": ISODate("2019-11-29T17:53:30.572Z"),
      "UserId": "25261400139",
      "HotelId": 632739,
      "IsPlanDaysAvailable": true,
      "AvailableDays": 7,
      "TotalDays": 7
    },
    "Error": null,
    "BookingFilter": {
      "Token": "69ed975a-2eb1-495c-85b7-28a607ec0f52",
      "HotelId": 632739,
      "ProviderName": "Hotelbeds",
      "BrokerId": 1,
      "Rooms": [
        {
          "RoomId": "15005",
          "Paxs": [
            {
              "Name": "Guilherme",
              "Surname": "TesteMPV",
              "Age": 21,
              "Title": null,
              "IsChild": false,
              "IsMainPax": false,
              "Document": "24733369034",
              "DocumentType": 1.0,
              "DocumentTypeDescription": "CPF"
            }
          ],
          "CancellationPolicies": null,
          "BoardDescription": null,
          "RoomDescription": null,
          "IsRefundable": false,
          "RoomPrice": null,
          "QuantityAdults": 1,
          "ChildAges": null,
          "QuantityChild": 0,
          "Quantity": 0
        },
        {
          "RoomId": "15005",
          "Paxs": [
            {
              "Name": "Guilherme",
              "Surname": "TesteMPV",
              "Age": 21,
              "Title": null,
              "IsChild": false,
              "IsMainPax": false,
              "Document": "24733369034",
              "DocumentType": 1.0,
              "DocumentTypeDescription": "CPF"
            }
          ],
          "CancellationPolicies": null,
          "BoardDescription": null,
          "RoomDescription": null,
          "IsRefundable": false,
          "RoomPrice": null,
          "QuantityAdults": 1,
          "ChildAges": null,
          "QuantityChild": 0,
          "Quantity": 0
        }
      ],
      "UserId": "25261400139",
      "UserIP": "191.241.229.42",
      "OrderID": "CA2522911191754480",
      "Price": {
        "PlanDailyUsed": 1,
        "TotalPriceExtra": "-291.27",
        "PlanExtraPrice": "0",
        "PlanPointUsed": 0,
        "PaymentOptionId": 1,
        "PlanMarkup": "20.0",
        "AccumulatedPoint": 0.0
      }
    },
    "BookingUpdateFilter": null,
    "CancelationFilter": null,
    "Created": ISODate("2019-11-29T17:54:45.312Z"),
    "IsActive": true,
    "ActualStatus": {
      "StatusId": 4,
      "Name": "Rejeitada",
      "Description": null,
      "Date": ISODate("2019-11-29T17:54:45.312Z"),
      "PreviousStatusId": null
    },
    "History": [
      {
        "StatusId": 4,
        "Name": "Rejeitada",
        "Description": null,
        "Date": ISODate("2019-11-29T17:54:45.312Z"),
        "PreviousStatusId": null
      }
    ],
    "CancelationPoliciesPenalty": null,
    "StartDate": null,
    "EndDate": null
  },
  {
    "_id": ObjectId("5de15ca5f4c7c900018d6806"),
    "id": "00000000-0000-0000-0000-000000000000",
    "BookingResult": {
      "Rooms": [
        {
          "VoucherId": "",
          "ReservationId": "11300",
          "ServiceId": 14071,
          "Status": "Rejeitado",
          "Observations": " .  Car park NO.Following the Statute of Children and Adolescents (Law Nº. 8.069/90), the accommodation of people under 18 unaccompanied or with their guardians will be accepted only with written authorization of their parents on a notarized document. Parenthood must be proved through ID or Birth Certificate. (07/11/2018-07/11/2038) ",
          "RoomDescription": "FAMILY ROOM STANDARD",
          "SellingPrice": "276.21",
          "CancellationPrice": "0",
          "Checkin": "2020-03-07",
          "Checkout": "2020-03-08",
          "Comission": "0",
          "HotelAddress": "Vieira de carvalho 150",
          "BoardDescription": "Café da manhã",
          "BreakfeastIncluded": true,
          "HotelName": "Itamarati",
          "Paxes": [
            {
              "Name": "Guilherme",
              "Surname": "TesteMPV",
              "Age": 21,
              "Title": "Mr",
              "IsChild": false,
              "IsMainPax": true,
              "Document": "24733369034"
            }
          ]
        },
        {
          "VoucherId": "",
          "ReservationId": "11300",
          "ServiceId": 14072,
          "Status": "Rejeitado",
          "Observations": " .  Car park NO.Following the Statute of Children and Adolescents (Law Nº. 8.069/90), the accommodation of people under 18 unaccompanied or with their guardians will be accepted only with written authorization of their parents on a notarized document. Parenthood must be proved through ID or Birth Certificate. (07/11/2018-07/11/2038) ",
          "RoomDescription": "FAMILY ROOM STANDARD",
          "SellingPrice": "276.21",
          "CancellationPrice": "0",
          "Checkin": "2020-03-07",
          "Checkout": "2020-03-08",
          "Comission": "0",
          "HotelAddress": "Vieira de carvalho 150",
          "BoardDescription": "Café da manhã",
          "BreakfeastIncluded": true,
          "HotelName": "Itamarati",
          "Paxes": [
            {
              "Name": "Guilherme",
              "Surname": "TesteMPV",
              "Age": 21,
              "Title": "Mr",
              "IsChild": false,
              "IsMainPax": true,
              "Document": "24733369034"
            }
          ]
        }
      ],
      "RoomPrices": {
        "TotalPrice": "552.42",
        "DailyPrice": "0",
        "PlanType": "Meu Plano",
        "PlanDailyPrice": "552.42",
        "PlanTotalPrice": "0",
        "PlanNumberOfNightsUsed": 1,
        "PlanExtraReservationCostPrice": "0",
        "PlanExtraReservationFinalPrice": "0",
        "PlanCalculationFormula": "-47.59",
        "PlanMarkup": "20.0",
        "Currency": null,
        "Description": null,
        "NumberOfNights": 1
      },
      "Error": null
    },
    "OrderID": "CA2522911191759A80",
    "CancelationPolicies": {
      "id": "00000000-0000-0000-0000-000000000000",
      "_id": ObjectId("5de15c82f4c7c900018d6805"),
      "RoomPrices": {
        "TotalPrice": "552",
        "DailyPrice": "0",
        "PlanType": "Meu Plano",
        "PlanDailyPrice": "0",
        "PlanTotalPrice": "0",
        "PlanNumberOfNightsUsed": 1,
        "PlanExtraReservationCostPrice": "0",
        "PlanExtraReservationFinalPrice": "0",
        "PlanCalculationFormula": "-48.01",
        "PlanMarkup": "20.0",
        "Currency": null,
        "Description": null,
        "NumberOfNights": 0
      },
      "Rooms": [
        {
          "RoomId": null,
          "Paxs": null,
          "CancellationPolicies": [
            {
              "Description": null,
              "BeginDate": ISODate("2020-03-01T11:59:00.000Z"),
              "EndDate": ISODate("2020-03-07T00:00:00.000Z"),
              "Prices": {
                "Price": "276.21",
                "DailyPriceTotal": "0",
                "PeriodPrice": "0",
                "TotalPeriodPriceTotal": "0",
                "Currency": "BRL",
                "Description": null
              },
              "Error": null
            }
          ],
          "BoardDescription": "Café da manhã",
          "RoomDescription": "FAMILY ROOM STANDARD",
          "IsRefundable": true,
          "RoomPrice": {
            "TotalPrice": "276",
            "DailyPrice": "276.21",
            "PlanType": null,
            "PlanDailyPrice": "0",
            "PlanTotalPrice": "0",
            "PlanNumberOfNightsUsed": 0,
            "PlanExtraReservationCostPrice": "0",
            "PlanExtraReservationFinalPrice": "0",
            "PlanCalculationFormula": "0",
            "PlanMarkup": "0",
            "Currency": "BRL",
            "Description": null,
            "NumberOfNights": 1
          },
          "QuantityAdults": 1,
          "ChildAges": null,
          "QuantityChild": 0,
          "Quantity": 2
        },
        {
          "RoomId": null,
          "Paxs": null,
          "CancellationPolicies": [
            {
              "Description": null,
              "BeginDate": ISODate("2020-03-01T11:59:00.000Z"),
              "EndDate": ISODate("2020-03-07T00:00:00.000Z"),
              "Prices": {
                "Price": "276.21",
                "DailyPriceTotal": "0",
                "PeriodPrice": "0",
                "TotalPeriodPriceTotal": "0",
                "Currency": "BRL",
                "Description": null
              },
              "Error": null
            }
          ],
          "BoardDescription": "Café da manhã",
          "RoomDescription": "FAMILY ROOM STANDARD",
          "IsRefundable": true,
          "RoomPrice": {
            "TotalPrice": "276",
            "DailyPrice": "276.21",
            "PlanType": null,
            "PlanDailyPrice": "0",
            "PlanTotalPrice": "0",
            "PlanNumberOfNightsUsed": 0,
            "PlanExtraReservationCostPrice": "0",
            "PlanExtraReservationFinalPrice": "0",
            "PlanCalculationFormula": "0",
            "PlanMarkup": "0",
            "Currency": "BRL",
            "Description": null,
            "NumberOfNights": 1
          },
          "QuantityAdults": 1,
          "ChildAges": null,
          "QuantityChild": 0,
          "Quantity": 2
        }
      ],
      "CancellationRoomPrices": {
        "TotalPrice": "552.42",
        "DailyPrice": "0",
        "PlanType": null,
        "PlanDailyPrice": "0",
        "PlanTotalPrice": "0",
        "PlanNumberOfNightsUsed": 1,
        "PlanExtraReservationCostPrice": "0",
        "PlanExtraReservationFinalPrice": "0.42",
        "PlanCalculationFormula": "0",
        "PlanMarkup": "0",
        "Currency": null,
        "Description": null,
        "NumberOfNights": 0
      },
      "CancellationText": "Você pode cancelar sem custo até 28/02/2020 às 11:59 haverá uma penalidade de 1 diária(s)  a partir de 28/02/2020 às 11:59.Caso não se apresente (no show), será cobrado o valor total da tarifa. Todos os horários estão expressos em hora local.",
      "DtBegin": ISODate("2020-02-28T11:59:00.000Z"),
      "DtEnd": ISODate("2020-03-07T00:00:00.000Z"),
      "IsRefundable": true,
      "Error": null,
      "CancelationPoliciesFilter": {
        "Token": "b9e95b22-3b85-4e93-b163-ba13b6f61023",
        "HotelId": 845098,
        "RoomIds": [
          15006.0,
          15006.0
        ],
        "UserId": "25261400139",
        "UserIP": "191.241.229.42",
        "BrokerId": 1,
        "ProviderName": "Hotelbeds",
        "CheckinDate": "2020-03-07",
        "CheckoutDate": "2020-03-08",
        "CheckinDateParse": ISODate("2020-03-07T00:00:00.000Z"),
        "CheckoutDateParse": ISODate("2020-03-08T00:00:00.000Z"),
        "NumberOfNights": 1,
        "PolicieDate": ISODate("2019-11-29T17:59:14.277Z")
      },
      "CancelationPoliciesPenaltyFilter": null,
      "Plan": {
        "cpf": "25261400139",
        "planos": [
          {
            "_id": "28b727d1-4bf8-c14d-926a-924cd402e49e",
            "titulo": "Superior 7 Diárias",
            "tipoPlano": "Superior",
            "valorPlano": "1080",
            "valorDiariaMaxima": "600.01",
            "valorDiariaMinima": "200.01",
            "diariasDisponiveis": 6,
            "diariasTotais": 7,
            "ativo": true,
            "Markup": "0.2"
          }
        ],
        "ErrorMessages": null
      }
    },
    "Availability": {
      "id": "00000000-0000-0000-0000-000000000000",
      "_id": ObjectId("5de15c6aa2513a00013caf7c"),
      "HotelInfo": [
        {
          "ID": NumberLong(845098),
          "Name": "Hotel Itamarati (São Paulo, Brasil)",
          "Chain": "Independent",
          "CNPJ": null,
          "Site": null,
          "Category": "3",
          "AcommodationType": "Hotel",
          "Email": null,
          "Recommended": false,
          "PhoneNumber": null,
          "PrimaryImage": {
            "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/845098/845098_7344Property305651.jpg",
            "Title": null,
            "Description": null
          },
          "ImagesViewUrl": null,
          "MapUrl": null,
          "Rooms": [
            {
              "QuantityAdults": 2,
              "QuantityChild": 0,
              "ChildAges": null,
              "RoomsType": [
                {
                  "RoomID": "15006",
                  "RoomName": "FAMILY ROOM STANDARD",
                  "Description": null,
                  "MaxOccupation": 1,
                  "Remarks": null,
                  "TermsAndConditions": null,
                  "TaxesIncluded": false,
                  "CancelationPolicies": [
                    {
                      "id": "00000000-0000-0000-0000-000000000000",
                      "_id": null,
                      "RoomPrices": null,
                      "Rooms": null,
                      "CancellationRoomPrices": null,
                      "CancellationText": null,
                      "DtBegin": ISODate("2019-11-28T19:26:12.067Z"),
                      "DtEnd": ISODate("2019-11-28T19:26:12.067Z"),
                      "IsRefundable": false,
                      "Error": null,
                      "CancelationPoliciesFilter": null,
                      "CancelationPoliciesPenaltyFilter": null,
                      "Plan": null
                    }
                  ],
                  "Amenities": null,
                  "RoomImages": null,
                  "Regime": {
                    "Name": "Café da manhã",
                    "BoardAcronym": null
                  },
                  "Days": 0,
                  "RoomPrices": {
                    "Price": "0",
                    "DailyPriceTotal": "0",
                    "PeriodPrice": "0",
                    "TotalPeriodPriceTotal": "0",
                    "Currency": "BRL",
                    "Description": null
                  },
                  "TaxPrices": null,
                  "IsBestPrice": false,
                  "IsNonRefundable": false,
                  "Quantity": 2,
                  "RecommendedRoom": false,
                  "providerId": 0,
                  "providerName": "Hotelbeds",
                  "BreakfeastIncluded": true,
                  "QuantityAdults": 1,
                  "ChildAges": null,
                  "QuantityChild": 0
                }
              ],
              "RoomPrices": {
                "Price": "0",
                "DailyPriceTotal": "0",
                "PeriodPrice": "0",
                "TotalPeriodPriceTotal": "0",
                "Currency": "BRL",
                "Description": null
              }
            },
            {
              "QuantityAdults": 2,
              "QuantityChild": 0,
              "ChildAges": null,
              "RoomsType": [
                {
                  "RoomID": "15005",
                  "RoomName": "TRIPLE THREE BEDS",
                  "Description": null,
                  "MaxOccupation": 1,
                  "Remarks": null,
                  "TermsAndConditions": null,
                  "TaxesIncluded": false,
                  "CancelationPolicies": [
                    {
                      "id": "00000000-0000-0000-0000-000000000000",
                      "_id": null,
                      "RoomPrices": null,
                      "Rooms": null,
                      "CancellationRoomPrices": null,
                      "CancellationText": null,
                      "DtBegin": ISODate("2019-11-28T19:26:12.067Z"),
                      "DtEnd": ISODate("2019-11-28T19:26:12.067Z"),
                      "IsRefundable": false,
                      "Error": null,
                      "CancelationPoliciesFilter": null,
                      "CancelationPoliciesPenaltyFilter": null,
                      "Plan": null
                    }
                  ],
                  "Amenities": null,
                  "RoomImages": null,
                  "Regime": {
                    "Name": "Café da manhã",
                    "BoardAcronym": null
                  },
                  "Days": 0,
                  "RoomPrices": {
                    "Price": "0",
                    "DailyPriceTotal": "0",
                    "PeriodPrice": "0",
                    "TotalPeriodPriceTotal": "0",
                    "Currency": "BRL",
                    "Description": null
                  },
                  "TaxPrices": null,
                  "IsBestPrice": false,
                  "IsNonRefundable": false,
                  "Quantity": 2,
                  "RecommendedRoom": false,
                  "providerId": 0,
                  "providerName": "Hotelbeds",
                  "BreakfeastIncluded": true,
                  "QuantityAdults": 1,
                  "ChildAges": null,
                  "QuantityChild": 0
                }
              ],
              "RoomPrices": {
                "Price": "0",
                "DailyPriceTotal": "0",
                "PeriodPrice": "0",
                "TotalPeriodPriceTotal": "0",
                "Currency": "BRL",
                "Description": null
              }
            },
            {
              "QuantityAdults": 2,
              "QuantityChild": 0,
              "ChildAges": null,
              "RoomsType": [
                {
                  "RoomID": "15004",
                  "RoomName": "TRIPLE STANDARD",
                  "Description": null,
                  "MaxOccupation": 1,
                  "Remarks": null,
                  "TermsAndConditions": null,
                  "TaxesIncluded": false,
                  "CancelationPolicies": [
                    {
                      "id": "00000000-0000-0000-0000-000000000000",
                      "_id": null,
                      "RoomPrices": null,
                      "Rooms": null,
                      "CancellationRoomPrices": null,
                      "CancellationText": null,
                      "DtBegin": ISODate("2019-11-28T19:26:12.067Z"),
                      "DtEnd": ISODate("2019-11-28T19:26:12.067Z"),
                      "IsRefundable": false,
                      "Error": null,
                      "CancelationPoliciesFilter": null,
                      "CancelationPoliciesPenaltyFilter": null,
                      "Plan": null
                    }
                  ],
                  "Amenities": null,
                  "RoomImages": null,
                  "Regime": {
                    "Name": "Café da manhã",
                    "BoardAcronym": null
                  },
                  "Days": 0,
                  "RoomPrices": {
                    "Price": "0",
                    "DailyPriceTotal": "0",
                    "PeriodPrice": "0",
                    "TotalPeriodPriceTotal": "0",
                    "Currency": "BRL",
                    "Description": null
                  },
                  "TaxPrices": null,
                  "IsBestPrice": false,
                  "IsNonRefundable": false,
                  "Quantity": 2,
                  "RecommendedRoom": false,
                  "providerId": 0,
                  "providerName": "Hotelbeds",
                  "BreakfeastIncluded": true,
                  "QuantityAdults": 1,
                  "ChildAges": null,
                  "QuantityChild": 0
                }
              ],
              "RoomPrices": {
                "Price": "0",
                "DailyPriceTotal": "0",
                "PeriodPrice": "0",
                "TotalPeriodPriceTotal": "0",
                "Currency": "BRL",
                "Description": null
              }
            },
            {
              "QuantityAdults": 2,
              "QuantityChild": 0,
              "ChildAges": null,
              "RoomsType": [
                {
                  "RoomID": "15003",
                  "RoomName": "Double or Twin STANDARD",
                  "Description": null,
                  "MaxOccupation": 1,
                  "Remarks": null,
                  "TermsAndConditions": null,
                  "TaxesIncluded": false,
                  "CancelationPolicies": [
                    {
                      "id": "00000000-0000-0000-0000-000000000000",
                      "_id": null,
                      "RoomPrices": null,
                      "Rooms": null,
                      "CancellationRoomPrices": null,
                      "CancellationText": null,
                      "DtBegin": ISODate("2019-11-28T19:26:12.067Z"),
                      "DtEnd": ISODate("2019-11-28T19:26:12.067Z"),
                      "IsRefundable": false,
                      "Error": null,
                      "CancelationPoliciesFilter": null,
                      "CancelationPoliciesPenaltyFilter": null,
                      "Plan": null
                    }
                  ],
                  "Amenities": null,
                  "RoomImages": null,
                  "Regime": {
                    "Name": "Café da manhã",
                    "BoardAcronym": null
                  },
                  "Days": 0,
                  "RoomPrices": {
                    "Price": "0",
                    "DailyPriceTotal": "0",
                    "PeriodPrice": "0",
                    "TotalPeriodPriceTotal": "0",
                    "Currency": "BRL",
                    "Description": null
                  },
                  "TaxPrices": null,
                  "IsBestPrice": false,
                  "IsNonRefundable": false,
                  "Quantity": 2,
                  "RecommendedRoom": false,
                  "providerId": 0,
                  "providerName": "Hotelbeds",
                  "BreakfeastIncluded": true,
                  "QuantityAdults": 1,
                  "ChildAges": null,
                  "QuantityChild": 0
                }
              ],
              "RoomPrices": {
                "Price": "0",
                "DailyPriceTotal": "0",
                "PeriodPrice": "0",
                "TotalPeriodPriceTotal": "0",
                "Currency": "BRL",
                "Description": null
              }
            },
            {
              "QuantityAdults": 2,
              "QuantityChild": 0,
              "ChildAges": null,
              "RoomsType": [
                {
                  "RoomID": "15002",
                  "RoomName": "DOUBLE TWO BEDS",
                  "Description": null,
                  "MaxOccupation": 1,
                  "Remarks": null,
                  "TermsAndConditions": null,
                  "TaxesIncluded": false,
                  "CancelationPolicies": [
                    {
                      "id": "00000000-0000-0000-0000-000000000000",
                      "_id": null,
                      "RoomPrices": null,
                      "Rooms": null,
                      "CancellationRoomPrices": null,
                      "CancellationText": null,
                      "DtBegin": ISODate("2019-11-28T19:26:12.067Z"),
                      "DtEnd": ISODate("2019-11-28T19:26:12.067Z"),
                      "IsRefundable": false,
                      "Error": null,
                      "CancelationPoliciesFilter": null,
                      "CancelationPoliciesPenaltyFilter": null,
                      "Plan": null
                    }
                  ],
                  "Amenities": null,
                  "RoomImages": null,
                  "Regime": {
                    "Name": "Café da manhã",
                    "BoardAcronym": null
                  },
                  "Days": 0,
                  "RoomPrices": {
                    "Price": "0",
                    "DailyPriceTotal": "0",
                    "PeriodPrice": "0",
                    "TotalPeriodPriceTotal": "0",
                    "Currency": "BRL",
                    "Description": null
                  },
                  "TaxPrices": null,
                  "IsBestPrice": false,
                  "IsNonRefundable": false,
                  "Quantity": 2,
                  "RecommendedRoom": false,
                  "providerId": 0,
                  "providerName": "Hotelbeds",
                  "BreakfeastIncluded": true,
                  "QuantityAdults": 1,
                  "ChildAges": null,
                  "QuantityChild": 0
                }
              ],
              "RoomPrices": {
                "Price": "0",
                "DailyPriceTotal": "0",
                "PeriodPrice": "0",
                "TotalPeriodPriceTotal": "0",
                "Currency": "BRL",
                "Description": null
              }
            },
            {
              "QuantityAdults": 2,
              "QuantityChild": 0,
              "ChildAges": null,
              "RoomsType": [
                {
                  "RoomID": "15001",
                  "RoomName": "SINGLE STANDARD",
                  "Description": null,
                  "MaxOccupation": 1,
                  "Remarks": null,
                  "TermsAndConditions": null,
                  "TaxesIncluded": false,
                  "CancelationPolicies": [
                    {
                      "id": "00000000-0000-0000-0000-000000000000",
                      "_id": null,
                      "RoomPrices": null,
                      "Rooms": null,
                      "CancellationRoomPrices": null,
                      "CancellationText": null,
                      "DtBegin": ISODate("2019-11-28T19:26:12.067Z"),
                      "DtEnd": ISODate("2019-11-28T19:26:12.067Z"),
                      "IsRefundable": false,
                      "Error": null,
                      "CancelationPoliciesFilter": null,
                      "CancelationPoliciesPenaltyFilter": null,
                      "Plan": null
                    }
                  ],
                  "Amenities": null,
                  "RoomImages": null,
                  "Regime": {
                    "Name": "Café da manhã",
                    "BoardAcronym": null
                  },
                  "Days": 0,
                  "RoomPrices": {
                    "Price": "0",
                    "DailyPriceTotal": "0",
                    "PeriodPrice": "0",
                    "TotalPeriodPriceTotal": "0",
                    "Currency": "BRL",
                    "Description": null
                  },
                  "TaxPrices": null,
                  "IsBestPrice": false,
                  "IsNonRefundable": false,
                  "Quantity": 2,
                  "RecommendedRoom": false,
                  "providerId": 0,
                  "providerName": "Hotelbeds",
                  "BreakfeastIncluded": true,
                  "QuantityAdults": 1,
                  "ChildAges": null,
                  "QuantityChild": 0
                }
              ],
              "RoomPrices": {
                "Price": "0",
                "DailyPriceTotal": "0",
                "PeriodPrice": "0",
                "TotalPeriodPriceTotal": "0",
                "Currency": "BRL",
                "Description": null
              }
            }
          ],
          "Images": [
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/845098/845098_7344Property305651.jpg",
              "Title": null,
              "Description": "MAIN"
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/845098/845098_7344Property305654.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/845098/845098_7344Property305655.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/845098/845098_7344Property305656.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/845098/845098_7344Property305657.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/845098/845098_7344Property309241.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/845098/845098_7344Property309242.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/845098/845098_7344Property309243.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/845098/845098_7344Property309244.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/845098/845098_7344Property309245.jpg",
              "Title": null,
              "Description": ""
            }
          ],
          "Amenities": [
            {
              "AmenityID": 0,
              "Name": "Café da manhã",
              "ImageURL": null
            },
            {
              "AmenityID": 0,
              "Name": "Estacionamento",
              "ImageURL": null
            },
            {
              "AmenityID": 0,
              "Name": "Internet",
              "ImageURL": null
            }
          ],
          "Description": "O Hotel Itamarati dispõe de facilidades para quem busca qualidade, conforto e custo benefício. Localizado próximo ao centro histórico da Capital Paulista o hotel é a opção ideal para hospedagem de grupos, empresas e pessoas que estão na cidade a negócios ou lazer.\r\rO acesso rápido ao metrô República facilita a locomoção do hóspede para vários destinos na cidade; vale destacar que as principais vias que levam aos Aeroportos de Congonhas e Guarulhos, além de Rodoviárias e Centros de Convenções, estão todas próximas ao Hotel.",
          "CheckinDate": ISODate("2019-11-28T19:26:12.067Z"),
          "CheckoutDate": ISODate("2019-11-28T19:26:12.067Z"),
          "Days": 0,
          "Iata": null,
          "Address": [
            {
              "Street": "Avenida Vieira de Carvalho 150 ",
              "AddressNumber": null,
              "AddressComplement": null,
              "CityName": "São Paulo, Brasil",
              "StateName": null,
              "CountryName": null,
              "ZipCode": null
            }
          ],
          "Addressstring": null,
          "Broker": 1,
          "TripAdvisor": null,
          "Latitude": -23.5415592193604,
          "Longitude": -46.643928527832
        }
      ],
      "ErrorMessages": null,
      "Token": "b9e95b22-3b85-4e93-b163-ba13b6f61023",
      "Created": ISODate("2019-11-29T17:59:06.645Z"),
      "UserId": "25261400139",
      "HotelId": 845098,
      "IsPlanDaysAvailable": true,
      "AvailableDays": 7,
      "TotalDays": 7
    },
    "Error": null,
    "BookingFilter": {
      "Token": "b9e95b22-3b85-4e93-b163-ba13b6f61023",
      "HotelId": 845098,
      "ProviderName": "Hotelbeds",
      "BrokerId": 1,
      "Rooms": [
        {
          "RoomId": "15006",
          "Paxs": [
            {
              "Name": "Guilherme",
              "Surname": "TesteMPV",
              "Age": 21,
              "Title": null,
              "IsChild": false,
              "IsMainPax": false,
              "Document": "24733369034",
              "DocumentType": 1.0,
              "DocumentTypeDescription": "CPF"
            }
          ],
          "CancellationPolicies": null,
          "BoardDescription": null,
          "RoomDescription": null,
          "IsRefundable": false,
          "RoomPrice": null,
          "QuantityAdults": 1,
          "ChildAges": null,
          "QuantityChild": 0,
          "Quantity": 0
        },
        {
          "RoomId": "15006",
          "Paxs": [
            {
              "Name": "Guilherme",
              "Surname": "TesteMPV",
              "Age": 21,
              "Title": null,
              "IsChild": false,
              "IsMainPax": false,
              "Document": "24733369034",
              "DocumentType": 1.0,
              "DocumentTypeDescription": "CPF"
            }
          ],
          "CancellationPolicies": null,
          "BoardDescription": null,
          "RoomDescription": null,
          "IsRefundable": false,
          "RoomPrice": null,
          "QuantityAdults": 1,
          "ChildAges": null,
          "QuantityChild": 0,
          "Quantity": 0
        }
      ],
      "UserId": "25261400139",
      "UserIP": "191.241.229.42",
      "OrderID": "CA2522911191759A80",
      "Price": {
        "PlanDailyUsed": 1,
        "TotalPriceExtra": "-47.59",
        "PlanExtraPrice": "0",
        "PlanPointUsed": 0,
        "PaymentOptionId": 1,
        "PlanMarkup": "20.0",
        "AccumulatedPoint": 0.0
      }
    },
    "BookingUpdateFilter": null,
    "CancelationFilter": null,
    "Created": ISODate("2019-11-29T17:59:42.842Z"),
    "IsActive": true,
    "ActualStatus": {
      "StatusId": 4,
      "Name": "Rejeitada",
      "Description": null,
      "Date": ISODate("2019-11-29T17:59:42.842Z"),
      "PreviousStatusId": null
    },
    "History": [
      {
        "StatusId": 4,
        "Name": "Rejeitada",
        "Description": null,
        "Date": ISODate("2019-11-29T17:59:42.842Z"),
        "PreviousStatusId": null
      }
    ],
    "CancelationPoliciesPenalty": null,
    "StartDate": null,
    "EndDate": null
  },
  {
    "_id": ObjectId("5de15dd4f4c7c900018d6808"),
    "id": "00000000-0000-0000-0000-000000000000",
    "BookingResult": {
      "Rooms": [
        {
          "VoucherId": "",
          "ReservationId": "11302",
          "ServiceId": 14074,
          "Status": "Rejeitado",
          "Observations": " .  Check-in hour 14:00-00:00.Car park NO 18.00 BRL Per unit/night.Following the Statute of Children and Adolescents (Law Nº. 8.069/90), the accommodation of people under 18 unaccompanied or with their guardians will be accepted only with written authorization of their parents on a notarized document. Parenthood must be proved through ID or Birth Certificate. (22/03/2015-22/03/2035) ",
          "RoomDescription": "TRIPLE STANDARD",
          "SellingPrice": "196.16",
          "CancellationPrice": "0",
          "Checkin": "2020-03-07",
          "Checkout": "2020-03-08",
          "Comission": "0",
          "HotelAddress": "DONA VERIDIANA 643",
          "BoardDescription": "Café da manhã",
          "BreakfeastIncluded": true,
          "HotelName": "SonoHotel Higienopolis Sao Paulo",
          "Paxes": [
            {
              "Name": "Guilherme",
              "Surname": "TesteMPV",
              "Age": 21,
              "Title": "Mr",
              "IsChild": false,
              "IsMainPax": true,
              "Document": "67546287073"
            }
          ]
        },
        {
          "VoucherId": "",
          "ReservationId": "11302",
          "ServiceId": 14075,
          "Status": "Rejeitado",
          "Observations": " .  Check-in hour 14:00-00:00.Car park NO 18.00 BRL Per unit/night.Following the Statute of Children and Adolescents (Law Nº. 8.069/90), the accommodation of people under 18 unaccompanied or with their guardians will be accepted only with written authorization of their parents on a notarized document. Parenthood must be proved through ID or Birth Certificate. (22/03/2015-22/03/2035) ",
          "RoomDescription": "TRIPLE STANDARD",
          "SellingPrice": "196.16",
          "CancellationPrice": "0",
          "Checkin": "2020-03-07",
          "Checkout": "2020-03-08",
          "Comission": "0",
          "HotelAddress": "DONA VERIDIANA 643",
          "BoardDescription": "Café da manhã",
          "BreakfeastIncluded": true,
          "HotelName": "SonoHotel Higienopolis Sao Paulo",
          "Paxes": [
            {
              "Name": "Guilherme",
              "Surname": "Testempv",
              "Age": 29,
              "Title": "Mr",
              "IsChild": false,
              "IsMainPax": true,
              "Document": "90938139002"
            }
          ]
        }
      ],
      "RoomPrices": {
        "TotalPrice": "392.32",
        "DailyPrice": "0",
        "PlanType": "Meu Plano",
        "PlanDailyPrice": "392.32",
        "PlanTotalPrice": "0",
        "PlanNumberOfNightsUsed": 1,
        "PlanExtraReservationCostPrice": "0",
        "PlanExtraReservationFinalPrice": "0",
        "PlanCalculationFormula": "-207.69",
        "PlanMarkup": "20.0",
        "Currency": null,
        "Description": null,
        "NumberOfNights": 1
      },
      "Error": null
    },
    "OrderID": "CA2522911191804230",
    "CancelationPolicies": {
      "id": "00000000-0000-0000-0000-000000000000",
      "_id": ObjectId("5de15d3ff4c7c900018d6807"),
      "RoomPrices": {
        "TotalPrice": "392",
        "DailyPrice": "0",
        "PlanType": "Meu Plano",
        "PlanDailyPrice": "0",
        "PlanTotalPrice": "0",
        "PlanNumberOfNightsUsed": 1,
        "PlanExtraReservationCostPrice": "0",
        "PlanExtraReservationFinalPrice": "0",
        "PlanCalculationFormula": "-208.01",
        "PlanMarkup": "20.0",
        "Currency": null,
        "Description": null,
        "NumberOfNights": 0
      },
      "Rooms": [
        {
          "RoomId": null,
          "Paxs": null,
          "CancellationPolicies": [
            {
              "Description": null,
              "BeginDate": ISODate("2020-03-01T11:59:00.000Z"),
              "EndDate": ISODate("2020-03-07T00:00:00.000Z"),
              "Prices": {
                "Price": "196.16",
                "DailyPriceTotal": "0",
                "PeriodPrice": "0",
                "TotalPeriodPriceTotal": "0",
                "Currency": "BRL",
                "Description": null
              },
              "Error": null
            }
          ],
          "BoardDescription": "Café da manhã",
          "RoomDescription": "TRIPLE STANDARD",
          "IsRefundable": true,
          "RoomPrice": {
            "TotalPrice": "196",
            "DailyPrice": "196.16",
            "PlanType": null,
            "PlanDailyPrice": "0",
            "PlanTotalPrice": "0",
            "PlanNumberOfNightsUsed": 0,
            "PlanExtraReservationCostPrice": "0",
            "PlanExtraReservationFinalPrice": "0",
            "PlanCalculationFormula": "0",
            "PlanMarkup": "0",
            "Currency": "BRL",
            "Description": null,
            "NumberOfNights": 1
          },
          "QuantityAdults": 1,
          "ChildAges": null,
          "QuantityChild": 0,
          "Quantity": 2
        },
        {
          "RoomId": null,
          "Paxs": null,
          "CancellationPolicies": [
            {
              "Description": null,
              "BeginDate": ISODate("2020-03-01T11:59:00.000Z"),
              "EndDate": ISODate("2020-03-07T00:00:00.000Z"),
              "Prices": {
                "Price": "196.16",
                "DailyPriceTotal": "0",
                "PeriodPrice": "0",
                "TotalPeriodPriceTotal": "0",
                "Currency": "BRL",
                "Description": null
              },
              "Error": null
            }
          ],
          "BoardDescription": "Café da manhã",
          "RoomDescription": "TRIPLE STANDARD",
          "IsRefundable": true,
          "RoomPrice": {
            "TotalPrice": "196",
            "DailyPrice": "196.16",
            "PlanType": null,
            "PlanDailyPrice": "0",
            "PlanTotalPrice": "0",
            "PlanNumberOfNightsUsed": 0,
            "PlanExtraReservationCostPrice": "0",
            "PlanExtraReservationFinalPrice": "0",
            "PlanCalculationFormula": "0",
            "PlanMarkup": "0",
            "Currency": "BRL",
            "Description": null,
            "NumberOfNights": 1
          },
          "QuantityAdults": 1,
          "ChildAges": null,
          "QuantityChild": 0,
          "Quantity": 2
        }
      ],
      "CancellationRoomPrices": {
        "TotalPrice": "392.32",
        "DailyPrice": "0",
        "PlanType": null,
        "PlanDailyPrice": "0",
        "PlanTotalPrice": "0",
        "PlanNumberOfNightsUsed": 1,
        "PlanExtraReservationCostPrice": "0",
        "PlanExtraReservationFinalPrice": "0.32",
        "PlanCalculationFormula": "0",
        "PlanMarkup": "0",
        "Currency": null,
        "Description": null,
        "NumberOfNights": 0
      },
      "CancellationText": "Você pode cancelar sem custo até 28/02/2020 às 11:59 haverá uma penalidade de 1 diária(s)  a partir de 28/02/2020 às 11:59.Caso não se apresente (no show), será cobrado o valor total da tarifa. Todos os horários estão expressos em hora local.",
      "DtBegin": ISODate("2020-02-28T11:59:00.000Z"),
      "DtEnd": ISODate("2020-03-07T00:00:00.000Z"),
      "IsRefundable": true,
      "Error": null,
      "CancelationPoliciesFilter": {
        "Token": "e80cdc90-7af9-4f3b-a050-48c7a695ce05",
        "HotelId": 444648,
        "RoomIds": [
          15004.0,
          15004.0
        ],
        "UserId": "25261400139",
        "UserIP": "191.241.229.42",
        "BrokerId": 1,
        "ProviderName": "Hotelbeds",
        "CheckinDate": "2020-03-07",
        "CheckoutDate": "2020-03-08",
        "CheckinDateParse": ISODate("2020-03-07T00:00:00.000Z"),
        "CheckoutDateParse": ISODate("2020-03-08T00:00:00.000Z"),
        "NumberOfNights": 1,
        "PolicieDate": ISODate("2019-11-29T18:02:20.746Z")
      },
      "CancelationPoliciesPenaltyFilter": null,
      "Plan": {
        "cpf": "25261400139",
        "planos": [
          {
            "_id": "28b727d1-4bf8-c14d-926a-924cd402e49e",
            "titulo": "Superior 7 Diárias",
            "tipoPlano": "Superior",
            "valorPlano": "1080",
            "valorDiariaMaxima": "600.01",
            "valorDiariaMinima": "200.01",
            "diariasDisponiveis": 6,
            "diariasTotais": 7,
            "ativo": true,
            "Markup": "0.2"
          }
        ],
        "ErrorMessages": null
      }
    },
    "Availability": {
      "id": "00000000-0000-0000-0000-000000000000",
      "_id": ObjectId("5de15d27a2513a00013caf7d"),
      "HotelInfo": [
        {
          "ID": NumberLong(444648),
          "Name": "SonoHotel Higienópolis São Paulo by Monreale Hotels (São Paulo, Brasil)",
          "Chain": "Independent",
          "CNPJ": null,
          "Site": null,
          "Category": "3",
          "AcommodationType": "Hotel",
          "Email": null,
          "Recommended": false,
          "PhoneNumber": null,
          "PrimaryImage": {
            "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/444648/444648_8971Property471581.jpg",
            "Title": null,
            "Description": null
          },
          "ImagesViewUrl": null,
          "MapUrl": null,
          "Rooms": [
            {
              "QuantityAdults": 2,
              "QuantityChild": 0,
              "ChildAges": null,
              "RoomsType": [
                {
                  "RoomID": "15004",
                  "RoomName": "TRIPLE STANDARD",
                  "Description": null,
                  "MaxOccupation": 1,
                  "Remarks": null,
                  "TermsAndConditions": null,
                  "TaxesIncluded": false,
                  "CancelationPolicies": [
                    {
                      "id": "00000000-0000-0000-0000-000000000000",
                      "_id": null,
                      "RoomPrices": null,
                      "Rooms": null,
                      "CancellationRoomPrices": null,
                      "CancellationText": null,
                      "DtBegin": ISODate("2019-11-28T19:26:12.067Z"),
                      "DtEnd": ISODate("2019-11-28T19:26:12.067Z"),
                      "IsRefundable": false,
                      "Error": null,
                      "CancelationPoliciesFilter": null,
                      "CancelationPoliciesPenaltyFilter": null,
                      "Plan": null
                    }
                  ],
                  "Amenities": null,
                  "RoomImages": null,
                  "Regime": {
                    "Name": "Café da manhã",
                    "BoardAcronym": null
                  },
                  "Days": 0,
                  "RoomPrices": {
                    "Price": "0",
                    "DailyPriceTotal": "0",
                    "PeriodPrice": "0",
                    "TotalPeriodPriceTotal": "0",
                    "Currency": "BRL",
                    "Description": null
                  },
                  "TaxPrices": null,
                  "IsBestPrice": false,
                  "IsNonRefundable": false,
                  "Quantity": 2,
                  "RecommendedRoom": false,
                  "providerId": 0,
                  "providerName": "Hotelbeds",
                  "BreakfeastIncluded": true,
                  "QuantityAdults": 1,
                  "ChildAges": null,
                  "QuantityChild": 0
                }
              ],
              "RoomPrices": {
                "Price": "0",
                "DailyPriceTotal": "0",
                "PeriodPrice": "0",
                "TotalPeriodPriceTotal": "0",
                "Currency": "BRL",
                "Description": null
              }
            },
            {
              "QuantityAdults": 2,
              "QuantityChild": 0,
              "ChildAges": null,
              "RoomsType": [
                {
                  "RoomID": "15003",
                  "RoomName": "TWIN STANDARD",
                  "Description": null,
                  "MaxOccupation": 1,
                  "Remarks": null,
                  "TermsAndConditions": null,
                  "TaxesIncluded": false,
                  "CancelationPolicies": [
                    {
                      "id": "00000000-0000-0000-0000-000000000000",
                      "_id": null,
                      "RoomPrices": null,
                      "Rooms": null,
                      "CancellationRoomPrices": null,
                      "CancellationText": null,
                      "DtBegin": ISODate("2019-11-28T19:26:12.067Z"),
                      "DtEnd": ISODate("2019-11-28T19:26:12.067Z"),
                      "IsRefundable": false,
                      "Error": null,
                      "CancelationPoliciesFilter": null,
                      "CancelationPoliciesPenaltyFilter": null,
                      "Plan": null
                    }
                  ],
                  "Amenities": null,
                  "RoomImages": null,
                  "Regime": {
                    "Name": "Café da manhã",
                    "BoardAcronym": null
                  },
                  "Days": 0,
                  "RoomPrices": {
                    "Price": "0",
                    "DailyPriceTotal": "0",
                    "PeriodPrice": "0",
                    "TotalPeriodPriceTotal": "0",
                    "Currency": "BRL",
                    "Description": null
                  },
                  "TaxPrices": null,
                  "IsBestPrice": false,
                  "IsNonRefundable": false,
                  "Quantity": 2,
                  "RecommendedRoom": false,
                  "providerId": 0,
                  "providerName": "Hotelbeds",
                  "BreakfeastIncluded": true,
                  "QuantityAdults": 1,
                  "ChildAges": null,
                  "QuantityChild": 0
                }
              ],
              "RoomPrices": {
                "Price": "0",
                "DailyPriceTotal": "0",
                "PeriodPrice": "0",
                "TotalPeriodPriceTotal": "0",
                "Currency": "BRL",
                "Description": null
              }
            },
            {
              "QuantityAdults": 2,
              "QuantityChild": 0,
              "ChildAges": null,
              "RoomsType": [
                {
                  "RoomID": "15002",
                  "RoomName": "DOUBLE STANDARD",
                  "Description": null,
                  "MaxOccupation": 1,
                  "Remarks": null,
                  "TermsAndConditions": null,
                  "TaxesIncluded": false,
                  "CancelationPolicies": [
                    {
                      "id": "00000000-0000-0000-0000-000000000000",
                      "_id": null,
                      "RoomPrices": null,
                      "Rooms": null,
                      "CancellationRoomPrices": null,
                      "CancellationText": null,
                      "DtBegin": ISODate("2019-11-28T19:26:12.067Z"),
                      "DtEnd": ISODate("2019-11-28T19:26:12.067Z"),
                      "IsRefundable": false,
                      "Error": null,
                      "CancelationPoliciesFilter": null,
                      "CancelationPoliciesPenaltyFilter": null,
                      "Plan": null
                    }
                  ],
                  "Amenities": null,
                  "RoomImages": null,
                  "Regime": {
                    "Name": "Café da manhã",
                    "BoardAcronym": null
                  },
                  "Days": 0,
                  "RoomPrices": {
                    "Price": "0",
                    "DailyPriceTotal": "0",
                    "PeriodPrice": "0",
                    "TotalPeriodPriceTotal": "0",
                    "Currency": "BRL",
                    "Description": null
                  },
                  "TaxPrices": null,
                  "IsBestPrice": false,
                  "IsNonRefundable": false,
                  "Quantity": 2,
                  "RecommendedRoom": false,
                  "providerId": 0,
                  "providerName": "Hotelbeds",
                  "BreakfeastIncluded": true,
                  "QuantityAdults": 1,
                  "ChildAges": null,
                  "QuantityChild": 0
                }
              ],
              "RoomPrices": {
                "Price": "0",
                "DailyPriceTotal": "0",
                "PeriodPrice": "0",
                "TotalPeriodPriceTotal": "0",
                "Currency": "BRL",
                "Description": null
              }
            },
            {
              "QuantityAdults": 2,
              "QuantityChild": 0,
              "ChildAges": null,
              "RoomsType": [
                {
                  "RoomID": "15001",
                  "RoomName": "SINGLE STANDARD",
                  "Description": null,
                  "MaxOccupation": 1,
                  "Remarks": null,
                  "TermsAndConditions": null,
                  "TaxesIncluded": false,
                  "CancelationPolicies": [
                    {
                      "id": "00000000-0000-0000-0000-000000000000",
                      "_id": null,
                      "RoomPrices": null,
                      "Rooms": null,
                      "CancellationRoomPrices": null,
                      "CancellationText": null,
                      "DtBegin": ISODate("2019-11-28T19:26:12.067Z"),
                      "DtEnd": ISODate("2019-11-28T19:26:12.067Z"),
                      "IsRefundable": false,
                      "Error": null,
                      "CancelationPoliciesFilter": null,
                      "CancelationPoliciesPenaltyFilter": null,
                      "Plan": null
                    }
                  ],
                  "Amenities": null,
                  "RoomImages": null,
                  "Regime": {
                    "Name": "Café da manhã",
                    "BoardAcronym": null
                  },
                  "Days": 0,
                  "RoomPrices": {
                    "Price": "0",
                    "DailyPriceTotal": "0",
                    "PeriodPrice": "0",
                    "TotalPeriodPriceTotal": "0",
                    "Currency": "BRL",
                    "Description": null
                  },
                  "TaxPrices": null,
                  "IsBestPrice": false,
                  "IsNonRefundable": false,
                  "Quantity": 2,
                  "RecommendedRoom": false,
                  "providerId": 0,
                  "providerName": "Hotelbeds",
                  "BreakfeastIncluded": true,
                  "QuantityAdults": 1,
                  "ChildAges": null,
                  "QuantityChild": 0
                }
              ],
              "RoomPrices": {
                "Price": "0",
                "DailyPriceTotal": "0",
                "PeriodPrice": "0",
                "TotalPeriodPriceTotal": "0",
                "Currency": "BRL",
                "Description": null
              }
            }
          ],
          "Images": [
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/444648/444648_8971Property471581.jpg",
              "Title": null,
              "Description": "MAIN"
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/444648/444648_8971Property472428.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/444648/444648_8971Property472429.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/444648/444648_8971Property472430.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/444648/444648_8971Property472431.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/444648/444648_8971Property472432.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/444648/444648_8971Property472433.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/444648/444648_8971Property472434.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/444648/444648_8971Property472435.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/444648/444648_8971Property472436.jpg",
              "Title": null,
              "Description": ""
            },
            {
              "ImageUrl": "https://i.t4w.mobi/h/BR/1010502/444648/444648_8971Property472437.jpg",
              "Title": null,
              "Description": ""
            }
          ],
          "Amenities": [
            {
              "AmenityID": 0,
              "Name": "Café da manhã",
              "ImageURL": null
            },
            {
              "AmenityID": 0,
              "Name": "Estacionamento",
              "ImageURL": null
            },
            {
              "AmenityID": 0,
              "Name": "Internet",
              "ImageURL": null
            },
            {
              "AmenityID": 0,
              "Name": "Lavanderia",
              "ImageURL": null
            }
          ],
          "Description": "Hotel da linha economica, pertencente a Rede Monrele Hotels, é localizado no bairro do Higienópolis, em São Paulo, o SonoHotel Higienópolis São Paulo oferece acomodações a apenas 8 minutos de carro da Avanida Paulista e do MASP - Museu de Arte de São Paulo. O Wi-Fi é gratuito em todas as áreas, próximo ao Shopping Patio Higienópolis..\r\rVocê pode desfrutar do buffet de café da manhã local e internacional, servido diariamente no restaurante.\rAlém disso o hotel possui recepção 24 horas, serviço de lavanderia e estacionamento com manobrista 24 horas.",
          "CheckinDate": ISODate("2019-11-28T19:26:12.067Z"),
          "CheckoutDate": ISODate("2019-11-28T19:26:12.067Z"),
          "Days": 0,
          "Iata": null,
          "Address": [
            {
              "Street": "Rua Dona Veridiana ",
              "AddressNumber": null,
              "AddressComplement": null,
              "CityName": "São Paulo, Brasil",
              "StateName": null,
              "CountryName": null,
              "ZipCode": null
            }
          ],
          "Addressstring": null,
          "Broker": 1,
          "TripAdvisor": null,
          "Latitude": -23.5450401306152,
          "Longitude": -46.6520195007324
        }
      ],
      "ErrorMessages": null,
      "Token": "e80cdc90-7af9-4f3b-a050-48c7a695ce05",
      "Created": ISODate("2019-11-29T18:02:15.815Z"),
      "UserId": "25261400139",
      "HotelId": 444648,
      "IsPlanDaysAvailable": true,
      "AvailableDays": 7,
      "TotalDays": 7
    },
    "Error": null,
    "BookingFilter": {
      "Token": "e80cdc90-7af9-4f3b-a050-48c7a695ce05",
      "HotelId": 444648,
      "ProviderName": "Hotelbeds",
      "BrokerId": 1,
      "Rooms": [
        {
          "RoomId": "15004",
          "Paxs": [
            {
              "Name": "Guilherme",
              "Surname": "TesteMPV",
              "Age": 21,
              "Title": null,
              "IsChild": false,
              "IsMainPax": false,
              "Document": "67546287073",
              "DocumentType": 1.0,
              "DocumentTypeDescription": "CPF"
            }
          ],
          "CancellationPolicies": null,
          "BoardDescription": null,
          "RoomDescription": null,
          "IsRefundable": false,
          "RoomPrice": null,
          "QuantityAdults": 1,
          "ChildAges": null,
          "QuantityChild": 0,
          "Quantity": 0
        },
        {
          "RoomId": "15004",
          "Paxs": [
            {
              "Name": "Guilherme",
              "Surname": "Testempv",
              "Age": 29,
              "Title": null,
              "IsChild": false,
              "IsMainPax": false,
              "Document": "90938139002",
              "DocumentType": 1.0,
              "DocumentTypeDescription": "CPF"
            }
          ],
          "CancellationPolicies": null,
          "BoardDescription": null,
          "RoomDescription": null,
          "IsRefundable": false,
          "RoomPrice": null,
          "QuantityAdults": 1,
          "ChildAges": null,
          "QuantityChild": 0,
          "Quantity": 0
        }
      ],
      "UserId": "25261400139",
      "UserIP": "191.241.229.42",
      "OrderID": "CA2522911191804230",
      "Price": {
        "PlanDailyUsed": 1,
        "TotalPriceExtra": "-207.69",
        "PlanExtraPrice": "0",
        "PlanPointUsed": 0,
        "PaymentOptionId": 1,
        "PlanMarkup": "20.0",
        "AccumulatedPoint": 0.0
      }
    },
    "BookingUpdateFilter": null,
    "CancelationFilter": null,
    "Created": ISODate("2019-11-29T18:04:59.443Z"),
    "IsActive": true,
    "ActualStatus": {
      "StatusId": 4,
      "Name": "Rejeitada",
      "Description": null,
      "Date": ISODate("2019-11-29T18:04:59.443Z"),
      "PreviousStatusId": null
    },
    "History": [
      {
        "StatusId": 4,
        "Name": "Rejeitada",
        "Description": null,
        "Date": ISODate("2019-11-29T18:04:59.443Z"),
        "PreviousStatusId": null
      }
    ],
    "CancelationPoliciesPenalty": null,
    "StartDate": null,
    "EndDate": null
  },
  {
    "_id" : ObjectId("5f4fae27f8bd9c0001100040"),
    "id" : UUID("00000000-0000-0000-0000-000000000000"),
    "BookingResult" : {
        "Rooms" : [ 
            {
                "VoucherId" : "650208-754624",
                "ReservationId" : "15156",
                "ServiceId" : 18297,
                "Status" : "Confirmado",
                "Observations" : "\nA categoria segue o conceito business, ideal para quem busca praticidade e comodidade. Apartamentos modernamente decorados. Com todo o charme e conforto.\n<br /> <u>POLITICAS GERAIS:</u> Check in as 14:00 horas.\nCheck out até as 12:00 horas.\n\nÉ obrigatória a apresentação do documento original (com foto) de todos os hóspedes para efetuar o check-in.\n\nÉ proibida, nos termos da lei, a hospedagem de menores de 18 (dezoito) anos desacompanhados dos pais ou responsáveis legais, ou sem autorização escrita desses ou da autoridade judiciária, sendo obrigatório o fornecimento ao Hotel dos originais ou fotocópias autenticadas dos documentos que comprovem tal condição.\n\nCondições sujeitas a qualquer alteração sem prévio aviso conforme necessidade do hotel.\nNão aceitamos animais de estimação.\n\nSerá necessário informar um número de cartão de crédito para cobrança das diárias. O débito no cartão de crédito é efetuado automaticamente 24 horas após a confirmação da reserva. <br /><u>POLITICA DE CANCELAMENTO:</u> Cancelamento sem ônus quando feito em até 24 horas antes da entrada no hotel. \n\nO débito no cartão de crédito é efetuado automaticamente 72 horas após a confirmação da reserva, em casos de cancelamento em até 24 horas antes da entrada no hotel, o valor total da hospedagem será estornado.\n\nQualquer alteração em sua reserva deve ser feita em até 24 horas antes da entrada no hotel.\n\nEm caso de não comparecimento será cobrado o valor da primeira diária no cartão de crédito informado na reserva e o restante será estornado.<br />\n<u>POLÍTICAS DE GARANTIA:</u> <br /> Faturamento <br /> Poderá ser faturado em até 14 dias após a data de saída do hóspede para clientes cadastrados e que estiverem com crédito aprovado pelo departamento financeiro da Rede Bourbon. Faturamos diária confidencial e NET. <br />\n",
                "RoomDescription" : "SUPERIOR CASAL",
                "SellingPrice" : "246.3",
                "CancellationPrice" : "0",
                "Checkin" : "2020-09-06",
                "Checkout" : "2020-09-07",
                "Comission" : "0",
                "HotelAddress" : "Rua  Euclides da Cunha  n  15   Gonzaga ",
                "BoardDescription" : "Café da manhã",
                "Phone" : "0800 701 8181",
                "BreakfeastIncluded" : true,
                "HotelName" : "Bourbon Santos Convention Hotel ",
                "Paxes" : [ 
                    {
                        "Name" : "ELIDA",
                        "Surname" : "LOBATO",
                        "Age" : 28,
                        "Title" : "Mr",
                        "IsChild" : false,
                        "IsMainPax" : true,
                        "DocumentType" : 1,
                        "DocumentTypeDescription" : "CPF",
                        "Document" : "41129364860"
                    }, 
                    {
                        "Name" : "JESSICA",
                        "Surname" : "NASCIMENTO",
                        "Age" : 29,
                        "Title" : "Mr",
                        "IsChild" : false,
                        "IsMainPax" : false,
                        "DocumentType" : 0,
                        "DocumentTypeDescription" : null,
                        "Document" : null
                    }, 
                    {
                        "Name" : "GIOVANNA",
                        "Surname" : "ALCARDE",
                        "Age" : 2,
                        "Title" : "Mr",
                        "IsChild" : true,
                        "IsMainPax" : false,
                        "DocumentType" : 0,
                        "DocumentTypeDescription" : null,
                        "Document" : null
                    }
                ]
            }
        ],
        "RoomPrices" : {
            "TotalPrice" : "246.3",
            "Currency" : null,
            "Description" : null,
            "NumberOfNights" : 1,
            "DailyPrice" : "0",
            "PlanType" : null,
            "PlanDailyPrice" : "0",
            "PlanTotalPrice" : "0",
            "PlanNumberOfNightsUsed" : 0,
            "PlanExtraReservationCostPrice" : "0",
            "PlanExtraReservationFinalPrice" : "0",
            "PlanCalculationFormula" : "0",
            "PlanMarkup" : "0",
            "DailyRefundBack" : "0",
            "PlanExtraReservationFinalPriceRefund" : "0",
            "PointPrice" : "0"
        },
        "Error" : null
    },
    "OrderID" : "CA4110209201436CB5",
    "CancelationPolicies" : {
        "id" : UUID("00000000-0000-0000-0000-000000000000"),
        "_id" : null,
        "RoomPrices" : {
            "TotalPrice" : "246.3",
            "Currency" : null,
            "Description" : null,
            "NumberOfNights" : 0,
            "DailyPrice" : "0.0",
            "PlanType" : null,
            "PlanDailyPrice" : "0.0",
            "PlanTotalPrice" : "0.0",
            "PlanNumberOfNightsUsed" : 0,
            "PlanExtraReservationCostPrice" : "0.0",
            "PlanExtraReservationFinalPrice" : "0.0",
            "PlanCalculationFormula" : "0.0",
            "PlanMarkup" : "0.0",
            "DailyRefundBack" : "0.0",
            "PlanExtraReservationFinalPriceRefund" : "0.0",
            "PointPrice" : "0.0"
        },
        "Rooms" : [ 
            {
                "RoomId" : null,
                "Paxs" : null,
                "CancellationPolicies" : [ 
                    {
                        "Description" : null,
                        "BeginDate" : ISODate("2020-09-01T00:00:00.000Z"),
                        "EndDate" : ISODate("2020-09-06T00:00:00.000Z"),
                        "Prices" : {
                            "Price" : "246.3",
                            "DailyPriceTotal" : "0.0",
                            "PeriodPrice" : "0.0",
                            "TotalPeriodPriceTotal" : "0.0",
                            "Currency" : "BRL",
                            "Description" : null
                        },
                        "Error" : null
                    }
                ],
                "BoardDescription" : "Café da manhã",
                "RoomDescription" : "SUPERIOR CASAL",
                "IsRefundable" : false,
                "RoomPrice" : {
                    "TotalPrice" : "246.3",
                    "Currency" : "BRL",
                    "Description" : null,
                    "NumberOfNights" : 1,
                    "DailyPrice" : "0.0",
                    "PlanType" : null,
                    "PlanDailyPrice" : "0.0",
                    "PlanTotalPrice" : "0.0",
                    "PlanNumberOfNightsUsed" : 0,
                    "PlanExtraReservationCostPrice" : "0.0",
                    "PlanExtraReservationFinalPrice" : "0.0",
                    "PlanCalculationFormula" : "0.0",
                    "PlanMarkup" : "0.0",
                    "DailyRefundBack" : "0.0",
                    "PlanExtraReservationFinalPriceRefund" : "0.0",
                    "PointPrice" : "0.0"
                },
                "QuantityAdults" : 2,
                "ChildAges" : [ 
                    2
                ],
                "QuantityChild" : 1,
                "Quantity" : 1
            }
        ],
        "CancellationRoomPrices" : {
            "TotalPrice" : "246.3",
            "Currency" : null,
            "Description" : null,
            "NumberOfNights" : 0,
            "DailyPrice" : "0.0",
            "PlanType" : null,
            "PlanDailyPrice" : "0.0",
            "PlanTotalPrice" : "0.0",
            "PlanNumberOfNightsUsed" : 0,
            "PlanExtraReservationCostPrice" : "0.0",
            "PlanExtraReservationFinalPrice" : "0.0",
            "PlanCalculationFormula" : "0.0",
            "PlanMarkup" : "0.0",
            "DailyRefundBack" : "0.0",
            "PlanExtraReservationFinalPriceRefund" : "0.0",
            "PointPrice" : "0.0"
        },
        "CancellationText" : null,
        "CancellationTextList" : [ 
            "Esta tarifa não é reembolsável e não pode ser alterada ou cancelada."
        ],
        "DtBegin" : ISODate("2020-09-01T00:00:00.000Z"),
        "DtEnd" : ISODate("2020-09-06T00:00:00.000Z"),
        "IsRefundable" : false,
        "Error" : null,
        "CancelationPoliciesFilter" : {
            "Token" : "69240e5f-2462-432d-99ff-6fd738f7c20e",
            "HotelId" : 131059,
            "RoomIds" : [ 
                3241001
            ],
            "UserId" : "41129364860",
            "UserIP" : "201.95.215.131",
            "BrokerId" : 1,
            "ProviderName" : "Europlus",
            "CheckinDate" : "2020-09-06",
            "CheckoutDate" : "2020-09-07",
            "CheckinDateParse" : ISODate("2020-09-06T00:00:00.000Z"),
            "CheckoutDateParse" : ISODate("2020-09-07T00:00:00.000Z"),
            "NumberOfNights" : 1,
            "PolicieDate" : ISODate("2020-09-02T14:36:39.283Z")
        },
        "CancelationPoliciesPenaltyFilter" : null,
        "CalculationPolicies" : null
    },
    "Availability" : {
        "id" : UUID("00000000-0000-0000-0000-000000000000"),
        "_id" : null,
        "HotelInfo" : [ 
            {
                "ID" : NumberLong(131059),
                "Name" : "Bourbon Santos Convention Hotel (Santos, São Paulo, Brasil)",
                "Chain" : null,
                "CNPJ" : null,
                "Site" : null,
                "Category" : "4",
                "AcommodationType" : "Hotel",
                "Email" : null,
                "Recommended" : false,
                "PhoneNumber" : null,
                "PrimaryImage" : {
                    "ImageUrl" : "https://i.t4w.mobi/h/BR/1012571/131059/131059_7389Property439214.jpg",
                    "Title" : null,
                    "Description" : null
                },
                "ImagesViewUrl" : null,
                "MapUrl" : null,
                "Rooms" : [ 
                    {
                        "QuantityAdults" : 2,
                        "QuantityChild" : 1,
                        "ChildAges" : null,
                        "RoomsType" : [ 
                            {
                                "RoomID" : "3241001",
                                "RoomName" : "SUPERIOR CASAL",
                                "Description" : null,
                                "MaxOccupation" : 2,
                                "Remarks" : null,
                                "TermsAndConditions" : null,
                                "TaxesIncluded" : false,
                                "CancelationPolicies" : [ 
                                    {
                                        "id" : UUID("00000000-0000-0000-0000-000000000000"),
                                        "_id" : null,
                                        "RoomPrices" : null,
                                        "Rooms" : null,
                                        "CancellationRoomPrices" : null,
                                        "CancellationText" : null,
                                        "CancellationTextList" : null,
                                        "DtBegin" : ISODate("2019-11-28T19:26:12.067Z"),
                                        "DtEnd" : ISODate("2019-11-28T19:26:12.067Z"),
                                        "IsRefundable" : false,
                                        "Error" : null,
                                        "CancelationPoliciesFilter" : null,
                                        "CancelationPoliciesPenaltyFilter" : null,
                                        "CalculationPolicies" : null
                                    }
                                ],
                                "Amenities" : null,
                                "RoomImages" : null,
                                "Regime" : {
                                    "Name" : "Café da manhã",
                                    "BoardAcronym" : null
                                },
                                "Days" : 0,
                                "RoomPrices" : {
                                    "Price" : "0",
                                    "DailyPriceTotal" : "0",
                                    "PeriodPrice" : "0",
                                    "TotalPeriodPriceTotal" : "0",
                                    "Currency" : "BRL",
                                    "Description" : null
                                },
                                "TaxPrices" : null,
                                "IsBestPrice" : false,
                                "IsNonRefundable" : true,
                                "Quantity" : 1,
                                "RecommendedRoom" : false,
                                "providerId" : 0,
                                "providerName" : "Europlus",
                                "BreakfeastIncluded" : true,
                                "QuantityAdults" : 2,
                                "ChildAges" : [ 
                                    2
                                ],
                                "QuantityChild" : 1
                            }
                        ],
                        "RoomPrices" : {
                            "Price" : "0",
                            "DailyPriceTotal" : "0",
                            "PeriodPrice" : "0",
                            "TotalPeriodPriceTotal" : "0",
                            "Currency" : "BRL",
                            "Description" : null
                        }
                    }, 
                    {
                        "QuantityAdults" : 2,
                        "QuantityChild" : 1,
                        "ChildAges" : null,
                        "RoomsType" : [ 
                            {
                                "RoomID" : "3241002",
                                "RoomName" : "SUPERIOR PLUS CASAL",
                                "Description" : null,
                                "MaxOccupation" : 2,
                                "Remarks" : null,
                                "TermsAndConditions" : null,
                                "TaxesIncluded" : false,
                                "CancelationPolicies" : [ 
                                    {
                                        "id" : UUID("00000000-0000-0000-0000-000000000000"),
                                        "_id" : null,
                                        "RoomPrices" : null,
                                        "Rooms" : null,
                                        "CancellationRoomPrices" : null,
                                        "CancellationText" : null,
                                        "CancellationTextList" : null,
                                        "DtBegin" : ISODate("2019-11-28T19:26:12.067Z"),
                                        "DtEnd" : ISODate("2019-11-28T19:26:12.067Z"),
                                        "IsRefundable" : false,
                                        "Error" : null,
                                        "CancelationPoliciesFilter" : null,
                                        "CancelationPoliciesPenaltyFilter" : null,
                                        "CalculationPolicies" : null
                                    }
                                ],
                                "Amenities" : null,
                                "RoomImages" : null,
                                "Regime" : {
                                    "Name" : "Café da manhã",
                                    "BoardAcronym" : null
                                },
                                "Days" : 0,
                                "RoomPrices" : {
                                    "Price" : "0",
                                    "DailyPriceTotal" : "0",
                                    "PeriodPrice" : "0",
                                    "TotalPeriodPriceTotal" : "0",
                                    "Currency" : "BRL",
                                    "Description" : null
                                },
                                "TaxPrices" : null,
                                "IsBestPrice" : false,
                                "IsNonRefundable" : true,
                                "Quantity" : 1,
                                "RecommendedRoom" : false,
                                "providerId" : 0,
                                "providerName" : "Europlus",
                                "BreakfeastIncluded" : true,
                                "QuantityAdults" : 2,
                                "ChildAges" : [ 
                                    2
                                ],
                                "QuantityChild" : 1
                            }
                        ],
                        "RoomPrices" : {
                            "Price" : "0",
                            "DailyPriceTotal" : "0",
                            "PeriodPrice" : "0",
                            "TotalPeriodPriceTotal" : "0",
                            "Currency" : "BRL",
                            "Description" : null
                        }
                    }, 
                    {
                        "QuantityAdults" : 2,
                        "QuantityChild" : 1,
                        "ChildAges" : null,
                        "RoomsType" : [ 
                            {
                                "RoomID" : "3351001",
                                "RoomName" : "Quarto casal superior (1 cama de casal)",
                                "Description" : null,
                                "MaxOccupation" : 2,
                                "Remarks" : null,
                                "TermsAndConditions" : null,
                                "TaxesIncluded" : false,
                                "CancelationPolicies" : [ 
                                    {
                                        "id" : UUID("00000000-0000-0000-0000-000000000000"),
                                        "_id" : null,
                                        "RoomPrices" : null,
                                        "Rooms" : null,
                                        "CancellationRoomPrices" : null,
                                        "CancellationText" : null,
                                        "CancellationTextList" : null,
                                        "DtBegin" : ISODate("2019-11-28T19:26:12.067Z"),
                                        "DtEnd" : ISODate("2019-11-28T19:26:12.067Z"),
                                        "IsRefundable" : false,
                                        "Error" : null,
                                        "CancelationPoliciesFilter" : null,
                                        "CancelationPoliciesPenaltyFilter" : null,
                                        "CalculationPolicies" : null
                                    }
                                ],
                                "Amenities" : null,
                                "RoomImages" : null,
                                "Regime" : {
                                    "Name" : "Café da manhã",
                                    "BoardAcronym" : null
                                },
                                "Days" : 0,
                                "RoomPrices" : {
                                    "Price" : "0",
                                    "DailyPriceTotal" : "0",
                                    "PeriodPrice" : "0",
                                    "TotalPeriodPriceTotal" : "0",
                                    "Currency" : "BRL",
                                    "Description" : null
                                },
                                "TaxPrices" : null,
                                "IsBestPrice" : false,
                                "IsNonRefundable" : true,
                                "Quantity" : 1,
                                "RecommendedRoom" : false,
                                "providerId" : 0,
                                "providerName" : "Iterpec",
                                "BreakfeastIncluded" : true,
                                "QuantityAdults" : 2,
                                "ChildAges" : [ 
                                    2
                                ],
                                "QuantityChild" : 1
                            }
                        ],
                        "RoomPrices" : {
                            "Price" : "0",
                            "DailyPriceTotal" : "0",
                            "PeriodPrice" : "0",
                            "TotalPeriodPriceTotal" : "0",
                            "Currency" : "BRL",
                            "Description" : null
                        }
                    }, 
                    {
                        "QuantityAdults" : 2,
                        "QuantityChild" : 1,
                        "ChildAges" : null,
                        "RoomsType" : [ 
                            {
                                "RoomID" : "3351002",
                                "RoomName" : "Quarto casal luxo (1 cama de casal)",
                                "Description" : null,
                                "MaxOccupation" : 2,
                                "Remarks" : null,
                                "TermsAndConditions" : null,
                                "TaxesIncluded" : false,
                                "CancelationPolicies" : [ 
                                    {
                                        "id" : UUID("00000000-0000-0000-0000-000000000000"),
                                        "_id" : null,
                                        "RoomPrices" : null,
                                        "Rooms" : null,
                                        "CancellationRoomPrices" : null,
                                        "CancellationText" : null,
                                        "CancellationTextList" : null,
                                        "DtBegin" : ISODate("2019-11-28T19:26:12.067Z"),
                                        "DtEnd" : ISODate("2019-11-28T19:26:12.067Z"),
                                        "IsRefundable" : false,
                                        "Error" : null,
                                        "CancelationPoliciesFilter" : null,
                                        "CancelationPoliciesPenaltyFilter" : null,
                                        "CalculationPolicies" : null
                                    }
                                ],
                                "Amenities" : null,
                                "RoomImages" : null,
                                "Regime" : {
                                    "Name" : "Café da manhã",
                                    "BoardAcronym" : null
                                },
                                "Days" : 0,
                                "RoomPrices" : {
                                    "Price" : "0",
                                    "DailyPriceTotal" : "0",
                                    "PeriodPrice" : "0",
                                    "TotalPeriodPriceTotal" : "0",
                                    "Currency" : "BRL",
                                    "Description" : null
                                },
                                "TaxPrices" : null,
                                "IsBestPrice" : false,
                                "IsNonRefundable" : true,
                                "Quantity" : 1,
                                "RecommendedRoom" : false,
                                "providerId" : 0,
                                "providerName" : "Iterpec",
                                "BreakfeastIncluded" : true,
                                "QuantityAdults" : 2,
                                "ChildAges" : [ 
                                    2
                                ],
                                "QuantityChild" : 1
                            }
                        ],
                        "RoomPrices" : {
                            "Price" : "0",
                            "DailyPriceTotal" : "0",
                            "PeriodPrice" : "0",
                            "TotalPeriodPriceTotal" : "0",
                            "Currency" : "BRL",
                            "Description" : null
                        }
                    }, 
                    {
                        "QuantityAdults" : 2,
                        "QuantityChild" : 1,
                        "ChildAges" : null,
                        "RoomsType" : [ 
                            {
                                "RoomID" : "3241003",
                                "RoomName" : "APARTAMENTO FAMILIAR",
                                "Description" : null,
                                "MaxOccupation" : 2,
                                "Remarks" : null,
                                "TermsAndConditions" : null,
                                "TaxesIncluded" : false,
                                "CancelationPolicies" : [ 
                                    {
                                        "id" : UUID("00000000-0000-0000-0000-000000000000"),
                                        "_id" : null,
                                        "RoomPrices" : null,
                                        "Rooms" : null,
                                        "CancellationRoomPrices" : null,
                                        "CancellationText" : null,
                                        "CancellationTextList" : null,
                                        "DtBegin" : ISODate("2019-11-28T19:26:12.067Z"),
                                        "DtEnd" : ISODate("2019-11-28T19:26:12.067Z"),
                                        "IsRefundable" : false,
                                        "Error" : null,
                                        "CancelationPoliciesFilter" : null,
                                        "CancelationPoliciesPenaltyFilter" : null,
                                        "CalculationPolicies" : null
                                    }
                                ],
                                "Amenities" : null,
                                "RoomImages" : null,
                                "Regime" : {
                                    "Name" : "Café da manhã",
                                    "BoardAcronym" : null
                                },
                                "Days" : 0,
                                "RoomPrices" : {
                                    "Price" : "0",
                                    "DailyPriceTotal" : "0",
                                    "PeriodPrice" : "0",
                                    "TotalPeriodPriceTotal" : "0",
                                    "Currency" : "BRL",
                                    "Description" : null
                                },
                                "TaxPrices" : null,
                                "IsBestPrice" : false,
                                "IsNonRefundable" : true,
                                "Quantity" : 1,
                                "RecommendedRoom" : false,
                                "providerId" : 0,
                                "providerName" : "Europlus",
                                "BreakfeastIncluded" : true,
                                "QuantityAdults" : 2,
                                "ChildAges" : [ 
                                    2
                                ],
                                "QuantityChild" : 1
                            }
                        ],
                        "RoomPrices" : {
                            "Price" : "0",
                            "DailyPriceTotal" : "0",
                            "PeriodPrice" : "0",
                            "TotalPeriodPriceTotal" : "0",
                            "Currency" : "BRL",
                            "Description" : null
                        }
                    }, 
                    {
                        "QuantityAdults" : 2,
                        "QuantityChild" : 1,
                        "ChildAges" : null,
                        "RoomsType" : [ 
                            {
                                "RoomID" : "3241004",
                                "RoomName" : "SUPERIOR CASAL",
                                "Description" : null,
                                "MaxOccupation" : 2,
                                "Remarks" : null,
                                "TermsAndConditions" : null,
                                "TaxesIncluded" : false,
                                "CancelationPolicies" : [ 
                                    {
                                        "id" : UUID("00000000-0000-0000-0000-000000000000"),
                                        "_id" : null,
                                        "RoomPrices" : null,
                                        "Rooms" : null,
                                        "CancellationRoomPrices" : null,
                                        "CancellationText" : null,
                                        "CancellationTextList" : null,
                                        "DtBegin" : ISODate("2019-11-28T19:26:12.067Z"),
                                        "DtEnd" : ISODate("2019-11-28T19:26:12.067Z"),
                                        "IsRefundable" : false,
                                        "Error" : null,
                                        "CancelationPoliciesFilter" : null,
                                        "CancelationPoliciesPenaltyFilter" : null,
                                        "CalculationPolicies" : null
                                    }
                                ],
                                "Amenities" : null,
                                "RoomImages" : null,
                                "Regime" : {
                                    "Name" : "Meia Pensão",
                                    "BoardAcronym" : null
                                },
                                "Days" : 0,
                                "RoomPrices" : {
                                    "Price" : "0",
                                    "DailyPriceTotal" : "0",
                                    "PeriodPrice" : "0",
                                    "TotalPeriodPriceTotal" : "0",
                                    "Currency" : "BRL",
                                    "Description" : null
                                },
                                "TaxPrices" : null,
                                "IsBestPrice" : false,
                                "IsNonRefundable" : true,
                                "Quantity" : 1,
                                "RecommendedRoom" : false,
                                "providerId" : 0,
                                "providerName" : "Europlus",
                                "BreakfeastIncluded" : true,
                                "QuantityAdults" : 2,
                                "ChildAges" : [ 
                                    2
                                ],
                                "QuantityChild" : 1
                            }
                        ],
                        "RoomPrices" : {
                            "Price" : "0",
                            "DailyPriceTotal" : "0",
                            "PeriodPrice" : "0",
                            "TotalPeriodPriceTotal" : "0",
                            "Currency" : "BRL",
                            "Description" : null
                        }
                    }, 
                    {
                        "QuantityAdults" : 2,
                        "QuantityChild" : 1,
                        "ChildAges" : null,
                        "RoomsType" : [ 
                            {
                                "RoomID" : "3241005",
                                "RoomName" : "SUPERIOR PLUS CASAL",
                                "Description" : null,
                                "MaxOccupation" : 2,
                                "Remarks" : null,
                                "TermsAndConditions" : null,
                                "TaxesIncluded" : false,
                                "CancelationPolicies" : [ 
                                    {
                                        "id" : UUID("00000000-0000-0000-0000-000000000000"),
                                        "_id" : null,
                                        "RoomPrices" : null,
                                        "Rooms" : null,
                                        "CancellationRoomPrices" : null,
                                        "CancellationText" : null,
                                        "CancellationTextList" : null,
                                        "DtBegin" : ISODate("2019-11-28T19:26:12.067Z"),
                                        "DtEnd" : ISODate("2019-11-28T19:26:12.067Z"),
                                        "IsRefundable" : false,
                                        "Error" : null,
                                        "CancelationPoliciesFilter" : null,
                                        "CancelationPoliciesPenaltyFilter" : null,
                                        "CalculationPolicies" : null
                                    }
                                ],
                                "Amenities" : null,
                                "RoomImages" : null,
                                "Regime" : {
                                    "Name" : "Meia Pensão",
                                    "BoardAcronym" : null
                                },
                                "Days" : 0,
                                "RoomPrices" : {
                                    "Price" : "0",
                                    "DailyPriceTotal" : "0",
                                    "PeriodPrice" : "0",
                                    "TotalPeriodPriceTotal" : "0",
                                    "Currency" : "BRL",
                                    "Description" : null
                                },
                                "TaxPrices" : null,
                                "IsBestPrice" : false,
                                "IsNonRefundable" : true,
                                "Quantity" : 1,
                                "RecommendedRoom" : false,
                                "providerId" : 0,
                                "providerName" : "Europlus",
                                "BreakfeastIncluded" : true,
                                "QuantityAdults" : 2,
                                "ChildAges" : [ 
                                    2
                                ],
                                "QuantityChild" : 1
                            }
                        ],
                        "RoomPrices" : {
                            "Price" : "0",
                            "DailyPriceTotal" : "0",
                            "PeriodPrice" : "0",
                            "TotalPeriodPriceTotal" : "0",
                            "Currency" : "BRL",
                            "Description" : null
                        }
                    }, 
                    {
                        "QuantityAdults" : 2,
                        "QuantityChild" : 1,
                        "ChildAges" : null,
                        "RoomsType" : [ 
                            {
                                "RoomID" : "3241006",
                                "RoomName" : "APARTAMENTO FAMILIAR",
                                "Description" : null,
                                "MaxOccupation" : 2,
                                "Remarks" : null,
                                "TermsAndConditions" : null,
                                "TaxesIncluded" : false,
                                "CancelationPolicies" : [ 
                                    {
                                        "id" : UUID("00000000-0000-0000-0000-000000000000"),
                                        "_id" : null,
                                        "RoomPrices" : null,
                                        "Rooms" : null,
                                        "CancellationRoomPrices" : null,
                                        "CancellationText" : null,
                                        "CancellationTextList" : null,
                                        "DtBegin" : ISODate("2019-11-28T19:26:12.067Z"),
                                        "DtEnd" : ISODate("2019-11-28T19:26:12.067Z"),
                                        "IsRefundable" : false,
                                        "Error" : null,
                                        "CancelationPoliciesFilter" : null,
                                        "CancelationPoliciesPenaltyFilter" : null,
                                        "CalculationPolicies" : null
                                    }
                                ],
                                "Amenities" : null,
                                "RoomImages" : null,
                                "Regime" : {
                                    "Name" : "Meia Pensão",
                                    "BoardAcronym" : null
                                },
                                "Days" : 0,
                                "RoomPrices" : {
                                    "Price" : "0",
                                    "DailyPriceTotal" : "0",
                                    "PeriodPrice" : "0",
                                    "TotalPeriodPriceTotal" : "0",
                                    "Currency" : "BRL",
                                    "Description" : null
                                },
                                "TaxPrices" : null,
                                "IsBestPrice" : false,
                                "IsNonRefundable" : true,
                                "Quantity" : 1,
                                "RecommendedRoom" : false,
                                "providerId" : 0,
                                "providerName" : "Europlus",
                                "BreakfeastIncluded" : true,
                                "QuantityAdults" : 2,
                                "ChildAges" : [ 
                                    2
                                ],
                                "QuantityChild" : 1
                            }
                        ],
                        "RoomPrices" : {
                            "Price" : "0",
                            "DailyPriceTotal" : "0",
                            "PeriodPrice" : "0",
                            "TotalPeriodPriceTotal" : "0",
                            "Currency" : "BRL",
                            "Description" : null
                        }
                    }
                ],
                "Images" : null,
                "Amenities" : [ 
                    {
                        "AmenityID" : 0,
                        "Name" : "Academia",
                        "ImageURL" : null
                    }, 
                    {
                        "AmenityID" : 0,
                        "Name" : "Café da manhã",
                        "ImageURL" : null
                    }, 
                    {
                        "AmenityID" : 0,
                        "Name" : "Estacionamento",
                        "ImageURL" : null
                    }, 
                    {
                        "AmenityID" : 0,
                        "Name" : "Internet",
                        "ImageURL" : null
                    }, 
                    {
                        "AmenityID" : 0,
                        "Name" : "Lavanderia",
                        "ImageURL" : null
                    }, 
                    {
                        "AmenityID" : 0,
                        "Name" : "Piscina",
                        "ImageURL" : null
                    }, 
                    {
                        "AmenityID" : 0,
                        "Name" : "Restaurante",
                        "ImageURL" : null
                    }
                ],
                "Description" : null,
                "CheckinDate" : ISODate("2020-09-06T03:00:00.000Z"),
                "CheckoutDate" : ISODate("2020-09-07T03:00:00.000Z"),
                "Days" : 0,
                "Iata" : null,
                "Address" : [ 
                    {
                        "Street" : "Rua: Euclides da Cunha, nº 15 - Gonzaga ",
                        "AddressNumber" : null,
                        "AddressComplement" : null,
                        "CityName" : "Santos, Brasil",
                        "StateName" : null,
                        "CountryName" : null,
                        "ZipCode" : null
                    }
                ],
                "Addressstring" : null,
                "Broker" : 1,
                "TripAdvisor" : null,
                "Latitude" : 0.0,
                "Longitude" : 0.0
            }
        ],
        "ErrorMessages" : null,
        "Token" : "69240e5f-2462-432d-99ff-6fd738f7c20e",
        "Created" : ISODate("2019-11-28T19:26:12.067Z"),
        "UserId" : null,
        "HotelId" : 0,
        "IsPlanDaysAvailable" : false,
        "AvailableDays" : 0,
        "TotalDays" : 0
    },
    "Error" : null,
    "BookingFilter" : {
        "Token" : "69240e5f-2462-432d-99ff-6fd738f7c20e",
        "HotelId" : 131059,
        "ProviderName" : "Europlus",
        "BrokerId" : 1,
        "Rooms" : [ 
            {
                "RoomId" : "3241001",
                "Paxs" : [ 
                    {
                        "Name" : "ELIDA",
                        "Surname" : "LOBATO",
                        "Age" : 28,
                        "Title" : null,
                        "IsChild" : false,
                        "IsMainPax" : true,
                        "DocumentType" : 1,
                        "DocumentTypeDescription" : null,
                        "Document" : "41129364860"
                    }, 
                    {
                        "Name" : "JESSICA",
                        "Surname" : "NASCIMENTO",
                        "Age" : 29,
                        "Title" : null,
                        "IsChild" : false,
                        "IsMainPax" : false,
                        "DocumentType" : 1,
                        "DocumentTypeDescription" : null,
                        "Document" : ""
                    }, 
                    {
                        "Name" : "GIOVANNA",
                        "Surname" : "ALCARDE",
                        "Age" : 2,
                        "Title" : null,
                        "IsChild" : true,
                        "IsMainPax" : false,
                        "DocumentType" : 1,
                        "DocumentTypeDescription" : null,
                        "Document" : ""
                    }
                ],
                "CancellationPolicies" : null,
                "BoardDescription" : null,
                "RoomDescription" : null,
                "IsRefundable" : false,
                "RoomPrice" : null,
                "QuantityAdults" : 2,
                "ChildAges" : null,
                "QuantityChild" : 1,
                "Quantity" : 0
            }
        ],
        "UserId" : "41129364860",
        "UserIP" : "201.95.215.131",
        "OrderID" : "CA4110209201436CB5",
        "TransactionId" : null,
        "Installments" : 0,
        "InstallmentAmount" : "0",
        "PlanId" : "30bb9449-b489-4416-9659-b8de544c10e9",
        "Price" : {
            "PlanDailyUsed" : 1,
            "TotalPriceExtra" : "0",
            "PlanExtraPrice" : "0",
            "PlanPointUsed" : 0,
            "PaymentOptionId" : 1,
            "PlanMarkup" : "30",
            "AccumulatedPoint" : 449,
            "Currency" : "BRL"
        }
    },
    "BookingUpdateFilter" : null,
    "CancelationFilter" : null,
    "Created" : ISODate("2020-09-02T14:36:54.498Z"),
    "IsActive" : true,
    "ActualStatus" : {
        "StatusId" : 2,
        "Name" : "Confirmado",
        "Description" : null,
        "Date" : ISODate("2020-09-02T14:36:54.498Z"),
        "PreviousStatusId" : null
    },
    "History" : [ 
        {
            "StatusId" : 2,
            "Name" : "Confirmado",
            "Description" : null,
            "Date" : ISODate("2020-09-02T14:36:54.498Z"),
            "PreviousStatusId" : null
        }
    ],
    "ActualStatusPayment" : null,
    "HistoryPayment" : null,
    "CancelationPoliciesPenalty" : null,
    "StartDate" : null,
    "EndDate" : null
  },
  {
    "_id" : ObjectId("5ffda7910958780001c358c4"),
    "id" : UUID("00000000-0000-0000-0000-000000000000"),
    "BookingResult" : {
        "Rooms" : [ 
            {
                "VoucherId" : "639696-854345",
                "ReservationId" : "18138",
                "ServiceId" : 21687,
                "Status" : "Confirmado",
                "Observations" : "\n \n\nCheck-in instructions: Pessoas extras podem incorrer em taxas adicionais que variam dependendo da política do estabelecimento  Documento de identificação oficial com foto e cartão de crédito, cartão de débito ou depósito em dinheiro podem ser exigidos no momento do check-in para despesas extras.  Solicitações especiais estão sujeitas à disponibilidade no momento do check-in e podem incorrer em taxas adicionais. Essas solicitações não estão garantidas  Este estabelecimento aceita cartões de crédito, cartões de débito e dinheiro. Os recursos de segurança disponíveis no estabelecimento incluem extintor de incêndio e kit de primeiros socorros \n\nSpecial check-in instructions: A recepção abre todos os dias, entre 9h e 20h. Este estabelecimento não realiza check-in após o horário comercial. O funcionário da recepção receberá os hóspedes na chegada. \n\nCheck-in start time: 14h30 \n\nCheck-in end time: 23h00 \n\nCheck-out time: meio-dia \n\nKnow before you go: <ul>  <li>Pais ou um responsável viajando com crianças de até 18 anos devem apresentar a certidão de nascimento da criança e identidade com foto (como o passaporte, por exemplo) no momento do check-in. Para viagens para fora do Brasil, se apenas um dos pais estiver viajando com a criança, ele deverá apresentar uma carta de autorização de viagem assinada pelos pais e com reconhecimento de assinaturas em cartório, além da certidão de nascimento da criança e identidade com foto. No caso em que os pais ou responsável, se aplicável, não puderem ou não estiverem dispostos a assinar essa autorização, será necessária uma autorização judicial. As pessoas que pretendem viajar com crianças devem consultar o consulado brasileiro antes da viagem para mais informações. </li><li>Medidas de limpeza aprimorada e segurança dos hóspedes estão atualmente em vigor nesta acomodação.</li><li>A limpeza do estabelecimento é feita com desinfetante e as superfícies tocadas regularmente são desinfetadas entre as estadias.</li><li>Medidas de distanciamento social estão em vigor; os funcionários utilizam equipamento de proteção individual no estabelecimento; os hóspedes recebem álcool em gel.</li> </ul> \n\nMandatory fees: <p>Você deverá pagar os seguintes encargos no estabelecimento:</p> <ul><li>Será cobrado um imposto municipal/local de 5.0 %</li></ul> <p>Incluímos todas as cobranças que o estabelecimento nos forneceu. No entanto, as cobranças podem variar com base, por exemplo, na duração da estadia ou no tipo de quarto reservado. </p>\n\nOther Fees:\nMandatory Tax - BRL29.24 per_accommodation per_stay",
                "RoomDescription" : "Quarto casal standard (1 cama de casal)",
                "SellingPrice" : "565.19",
                "CancellationPrice" : "0",
                "Checkin" : "2021-01-16",
                "Checkout" : "2021-01-18",
                "Comission" : "0",
                "HotelAddress" : "990 Avenida Assis Chateaubriand esquina com Avenida A  27",
                "BoardDescription" : "Café da manhã",
                "Phone" : "55-13-33922721",
                "BreakfeastIncluded" : true,
                "HotelName" : "Pousada Villa Virgínia",
                "Paxes" : [ 
                    {
                        "Name" : "ELIDA",
                        "Surname" : "LOBATO",
                        "Age" : 29,
                        "Title" : "Mr",
                        "IsChild" : false,
                        "IsMainPax" : true,
                        "DocumentType" : 1,
                        "DocumentTypeDescription" : "CPF",
                        "Document" : "41129364860"
                    }, 
                    {
                        "Name" : "GIOVANNA",
                        "Surname" : "ALCARDE",
                        "Age" : 3,
                        "Title" : "Mr",
                        "IsChild" : true,
                        "IsMainPax" : false,
                        "DocumentType" : 0,
                        "DocumentTypeDescription" : null,
                        "Document" : null
                    }
                ]
            }
        ],
        "RoomPrices" : {
            "TotalPrice" : "565.19",
            "Currency" : null,
            "Description" : null,
            "NumberOfNights" : 2,
            "DailyPrice" : "0",
            "PlanType" : null,
            "PlanDailyPrice" : "0",
            "PlanTotalPrice" : "0",
            "PlanNumberOfNightsUsed" : 0,
            "PlanExtraReservationCostPrice" : "0",
            "PlanExtraReservationFinalPrice" : "0",
            "PlanCalculationFormula" : "0",
            "PlanMarkup" : "0",
            "DailyRefundBack" : "0",
            "PlanExtraReservationFinalPriceRefund" : "0",
            "PointPrice" : "0"
        },
        "Error" : null
    },
    "OrderID" : "CA4111201211043A69",
    "CancelationPolicies" : {
        "id" : UUID("00000000-0000-0000-0000-000000000000"),
        "_id" : null,
        "RoomPrices" : {
            "TotalPrice" : "565.19",
            "Currency" : null,
            "Description" : null,
            "NumberOfNights" : 0,
            "DailyPrice" : "0.0",
            "PlanType" : null,
            "PlanDailyPrice" : "0.0",
            "PlanTotalPrice" : "0.0",
            "PlanNumberOfNightsUsed" : 0,
            "PlanExtraReservationCostPrice" : "0.0",
            "PlanExtraReservationFinalPrice" : "0.0",
            "PlanCalculationFormula" : "0.0",
            "PlanMarkup" : "0.0",
            "DailyRefundBack" : "0.0",
            "PlanExtraReservationFinalPriceRefund" : "0.0",
            "PointPrice" : "0.0"
        },
        "Rooms" : [ 
            {
                "RoomId" : null,
                "Paxs" : null,
                "CancellationPolicies" : [ 
                    {
                        "Description" : null,
                        "BeginDate" : ISODate("2021-01-11T00:00:00.000Z"),
                        "EndDate" : ISODate("2021-01-16T00:00:00.000Z"),
                        "Prices" : {
                            "Price" : "565.2",
                            "DailyPriceTotal" : "0.0",
                            "PeriodPrice" : "0.0",
                            "TotalPeriodPriceTotal" : "0.0",
                            "Currency" : "BRL",
                            "Description" : null
                        },
                        "Error" : null
                    }
                ],
                "BoardDescription" : "Café da manhã",
                "RoomDescription" : "Quarto casal standard (1 cama de casal)",
                "IsRefundable" : false,
                "RoomPrice" : {
                    "TotalPrice" : "565.19",
                    "Currency" : "BRL",
                    "Description" : null,
                    "NumberOfNights" : 2,
                    "DailyPrice" : "0.0",
                    "PlanType" : null,
                    "PlanDailyPrice" : "0.0",
                    "PlanTotalPrice" : "0.0",
                    "PlanNumberOfNightsUsed" : 0,
                    "PlanExtraReservationCostPrice" : "0.0",
                    "PlanExtraReservationFinalPrice" : "0.0",
                    "PlanCalculationFormula" : "0.0",
                    "PlanMarkup" : "0.0",
                    "DailyRefundBack" : "0.0",
                    "PlanExtraReservationFinalPriceRefund" : "0.0",
                    "PointPrice" : "0.0"
                },
                "QuantityAdults" : 1,
                "ChildAges" : [ 
                    3
                ],
                "QuantityChild" : 1,
                "Quantity" : 1
            }
        ],
        "CancellationRoomPrices" : {
            "TotalPrice" : "565.2",
            "Currency" : null,
            "Description" : null,
            "NumberOfNights" : 0,
            "DailyPrice" : "0.0",
            "PlanType" : null,
            "PlanDailyPrice" : "0.0",
            "PlanTotalPrice" : "0.0",
            "PlanNumberOfNightsUsed" : 0,
            "PlanExtraReservationCostPrice" : "0.0",
            "PlanExtraReservationFinalPrice" : "0.0",
            "PlanCalculationFormula" : "0.0",
            "PlanMarkup" : "0.0",
            "DailyRefundBack" : "0.0",
            "PlanExtraReservationFinalPriceRefund" : "0.0",
            "PointPrice" : "0.0"
        },
        "CancellationText" : null,
        "CancellationTextList" : [ 
            "Esta tarifa não é reembolsável e não pode ser alterada ou cancelada."
        ],
        "DtBegin" : ISODate("2021-01-11T00:00:00.000Z"),
        "DtEnd" : ISODate("2021-01-16T00:00:00.000Z"),
        "IsRefundable" : false,
        "Error" : null,
        "CancelationPoliciesFilter" : {
            "Token" : "932b9e13-3f2d-455b-b0c7-13f143b263e9",
            "HotelId" : 1206914,
            "RoomIds" : [ 
                14001
            ],
            "UserId" : "41129364860",
            "UserIP" : "187.56.242.138",
            "BrokerId" : 1,
            "ProviderName" : "Bedsonline",
            "CheckinDate" : "2021-01-16",
            "CheckoutDate" : "2021-01-18",
            "CheckinDateParse" : ISODate("2021-01-16T00:00:00.000Z"),
            "CheckoutDateParse" : ISODate("2021-01-18T00:00:00.000Z"),
            "NumberOfNights" : 2,
            "PolicieDate" : ISODate("2021-01-12T10:42:50.255Z")
        },
        "CancelationPoliciesPenaltyFilter" : null,
        "CalculationPolicies" : null
    },
    "Availability" : {
        "id" : UUID("00000000-0000-0000-0000-000000000000"),
        "_id" : null,
        "HotelInfo" : [ 
            {
                "ID" : NumberLong(1206914),
                "Name" : "Pousada Villa Virgínia (Guarujá, São Paulo, Brasil)",
                "Chain" : null,
                "CNPJ" : null,
                "Site" : null,
                "Category" : "2",
                "AcommodationType" : "Hotel",
                "Email" : null,
                "Recommended" : false,
                "PhoneNumber" : null,
                "PrimaryImage" : {
                    "ImageUrl" : "https://i.t4w.mobi/h/BR/1012574/1206914/1206914_528fb075_z.jpg",
                    "Title" : null,
                    "Description" : null
                },
                "ImagesViewUrl" : null,
                "MapUrl" : null,
                "Rooms" : [ 
                    {
                        "QuantityAdults" : 1,
                        "QuantityChild" : 1,
                        "ChildAges" : null,
                        "RoomsType" : [ 
                            {
                                "RoomID" : "14003",
                                "RoomName" : "Quarto triplo (1 cama de casal e 1 cama de solteiro)",
                                "Description" : null,
                                "MaxOccupation" : 1,
                                "Remarks" : null,
                                "TermsAndConditions" : null,
                                "TaxesIncluded" : false,
                                "Amenities" : null,
                                "RoomImages" : null,
                                "Regime" : {
                                    "Name" : "Café da manhã",
                                    "BoardAcronym" : null
                                },
                                "Days" : 0,
                                "RoomPrices" : {
                                    "Price" : "0",
                                    "DailyPriceTotal" : "0",
                                    "PeriodPrice" : "0",
                                    "TotalPeriodPriceTotal" : "0",
                                    "Currency" : "BRL",
                                    "Description" : null
                                },
                                "TaxPrices" : null,
                                "IsBestPrice" : false,
                                "IsNonRefundable" : true,
                                "Quantity" : 1,
                                "RecommendedRoom" : false,
                                "providerId" : 0,
                                "providerName" : "Bedsonline",
                                "BreakfeastIncluded" : true,
                                "QuantityAdults" : 1,
                                "ChildAges" : [ 
                                    3
                                ],
                                "QuantityChild" : 1
                            }
                        ],
                        "RoomPrices" : {
                            "Price" : "0",
                            "DailyPriceTotal" : "0",
                            "PeriodPrice" : "0",
                            "TotalPeriodPriceTotal" : "0",
                            "Currency" : "BRL",
                            "Description" : null
                        }
                    }, 
                    {
                        "QuantityAdults" : 1,
                        "QuantityChild" : 1,
                        "ChildAges" : null,
                        "RoomsType" : [ 
                            {
                                "RoomID" : "14002",
                                "RoomName" : "Quarto casal luxo (1 cama de casal)",
                                "Description" : null,
                                "MaxOccupation" : 1,
                                "Remarks" : null,
                                "TermsAndConditions" : null,
                                "TaxesIncluded" : false,
                                "Amenities" : null,
                                "RoomImages" : null,
                                "Regime" : {
                                    "Name" : "Café da manhã",
                                    "BoardAcronym" : null
                                },
                                "Days" : 0,
                                "RoomPrices" : {
                                    "Price" : "0",
                                    "DailyPriceTotal" : "0",
                                    "PeriodPrice" : "0",
                                    "TotalPeriodPriceTotal" : "0",
                                    "Currency" : "BRL",
                                    "Description" : null
                                },
                                "TaxPrices" : null,
                                "IsBestPrice" : false,
                                "IsNonRefundable" : true,
                                "Quantity" : 1,
                                "RecommendedRoom" : false,
                                "providerId" : 0,
                                "providerName" : "Bedsonline",
                                "BreakfeastIncluded" : true,
                                "QuantityAdults" : 1,
                                "ChildAges" : [ 
                                    3
                                ],
                                "QuantityChild" : 1
                            }
                        ],
                        "RoomPrices" : {
                            "Price" : "0",
                            "DailyPriceTotal" : "0",
                            "PeriodPrice" : "0",
                            "TotalPeriodPriceTotal" : "0",
                            "Currency" : "BRL",
                            "Description" : null
                        }
                    }, 
                    {
                        "QuantityAdults" : 1,
                        "QuantityChild" : 1,
                        "ChildAges" : null,
                        "RoomsType" : [ 
                            {
                                "RoomID" : "14001",
                                "RoomName" : "Quarto casal standard (1 cama de casal)",
                                "Description" : null,
                                "MaxOccupation" : 1,
                                "Remarks" : null,
                                "TermsAndConditions" : null,
                                "TaxesIncluded" : false,
                                "Amenities" : null,
                                "RoomImages" : null,
                                "Regime" : {
                                    "Name" : "Café da manhã",
                                    "BoardAcronym" : null
                                },
                                "Days" : 0,
                                "RoomPrices" : {
                                    "Price" : "0",
                                    "DailyPriceTotal" : "0",
                                    "PeriodPrice" : "0",
                                    "TotalPeriodPriceTotal" : "0",
                                    "Currency" : "BRL",
                                    "Description" : null
                                },
                                "TaxPrices" : null,
                                "IsBestPrice" : false,
                                "IsNonRefundable" : true,
                                "Quantity" : 1,
                                "RecommendedRoom" : false,
                                "providerId" : 0,
                                "providerName" : "Bedsonline",
                                "BreakfeastIncluded" : true,
                                "QuantityAdults" : 1,
                                "ChildAges" : [ 
                                    3
                                ],
                                "QuantityChild" : 1
                            }
                        ],
                        "RoomPrices" : {
                            "Price" : "0",
                            "DailyPriceTotal" : "0",
                            "PeriodPrice" : "0",
                            "TotalPeriodPriceTotal" : "0",
                            "Currency" : "BRL",
                            "Description" : null
                        }
                    }
                ],
                "Images" : [ 
                    {
                        "ImageUrl" : "https://i.t4w.mobi/h/BR/1012574/1206914/1206914_528fb075_z.jpg",
                        "Title" : null,
                        "Description" : "Imagem em destaque"
                    }, 
                    {
                        "ImageUrl" : "https://i.t4w.mobi/h/BR/1012574/1206914/1206914_9097005d_z.jpg",
                        "Title" : null,
                        "Description" : "Entrada (parte interna)"
                    }, 
                    {
                        "ImageUrl" : "https://i.t4w.mobi/h/BR/1012574/1206914/1206914_919eae13_z.jpg",
                        "Title" : null,
                        "Description" : "Quarto"
                    }, 
                    {
                        "ImageUrl" : "https://i.t4w.mobi/h/BR/1012574/1206914/1206914_8795e4e6_z.jpg",
                        "Title" : null,
                        "Description" : "Quarto"
                    }, 
                    {
                        "ImageUrl" : "https://i.t4w.mobi/h/BR/1012574/1206914/1206914_e8f9a70e_z.jpg",
                        "Title" : null,
                        "Description" : "Quarto"
                    }, 
                    {
                        "ImageUrl" : "https://i.t4w.mobi/h/BR/1012574/1206914/1206914_b5186e57_z.jpg",
                        "Title" : null,
                        "Description" : "Quarto"
                    }, 
                    {
                        "ImageUrl" : "https://i.t4w.mobi/h/BR/1012574/1206914/1206914_99cdd6a1_z.jpg",
                        "Title" : null,
                        "Description" : "Quarto"
                    }, 
                    {
                        "ImageUrl" : "https://i.t4w.mobi/h/BR/1012574/1206914/1206914_cadc4827_z.jpg",
                        "Title" : null,
                        "Description" : "Quarto"
                    }, 
                    {
                        "ImageUrl" : "https://i.t4w.mobi/h/BR/1012574/1206914/1206914_59372fca_z.jpg",
                        "Title" : null,
                        "Description" : "Quarto"
                    }, 
                    {
                        "ImageUrl" : "https://i.t4w.mobi/h/BR/1012574/1206914/1206914_786f8296_z.jpg",
                        "Title" : null,
                        "Description" : "Quarto"
                    }, 
                    {
                        "ImageUrl" : "https://i.t4w.mobi/h/BR/1012574/1206914/1206914_4ccaaf6a_z.jpg",
                        "Title" : null,
                        "Description" : "Quarto"
                    }, 
                    {
                        "ImageUrl" : "https://i.t4w.mobi/h/BR/1012574/1206914/1206914_2363349f_z.jpg",
                        "Title" : null,
                        "Description" : "Quarto"
                    }, 
                    {
                        "ImageUrl" : "https://i.t4w.mobi/h/BR/1012574/1206914/1206914_c37ebe69_z.jpg",
                        "Title" : null,
                        "Description" : "Quarto"
                    }, 
                    {
                        "ImageUrl" : "https://i.t4w.mobi/h/BR/1012574/1206914/1206914_915f3d41_z.jpg",
                        "Title" : null,
                        "Description" : "Quarto"
                    }, 
                    {
                        "ImageUrl" : "https://i.t4w.mobi/h/BR/1012574/1206914/1206914_fb533e6e_z.jpg",
                        "Title" : null,
                        "Description" : "Quarto"
                    }, 
                    {
                        "ImageUrl" : "https://i.t4w.mobi/h/BR/1012574/1206914/1206914_fa9b5223_z.jpg",
                        "Title" : null,
                        "Description" : "Quarto"
                    }, 
                    {
                        "ImageUrl" : "https://i.t4w.mobi/h/BR/1012574/1206914/1206914_7d36e9d6_z.jpg",
                        "Title" : null,
                        "Description" : "Quarto"
                    }, 
                    {
                        "ImageUrl" : "https://i.t4w.mobi/h/BR/1012574/1206914/1206914_42826898_z.jpg",
                        "Title" : null,
                        "Description" : "Quarto"
                    }, 
                    {
                        "ImageUrl" : "https://i.t4w.mobi/h/BR/1012574/1206914/1206914_abc58ac2_z.jpg",
                        "Title" : null,
                        "Description" : "Quarto"
                    }, 
                    {
                        "ImageUrl" : "https://i.t4w.mobi/h/BR/1012574/1206914/1206914_8f1de89c_z.jpg",
                        "Title" : null,
                        "Description" : "Quarto"
                    }, 
                    {
                        "ImageUrl" : "https://i.t4w.mobi/h/BR/1012574/1206914/1206914_0a5fb2d7_z.jpg",
                        "Title" : null,
                        "Description" : "Quarto"
                    }, 
                    {
                        "ImageUrl" : "https://i.t4w.mobi/h/BR/1012574/1206914/1206914_7b12d340_z.jpg",
                        "Title" : null,
                        "Description" : "Quarto"
                    }, 
                    {
                        "ImageUrl" : "https://i.t4w.mobi/h/BR/1012574/1206914/1206914_f0247c9b_z.jpg",
                        "Title" : null,
                        "Description" : "Quarto"
                    }, 
                    {
                        "ImageUrl" : "https://i.t4w.mobi/h/BR/1012574/1206914/1206914_b1f1a9d9_z.jpg",
                        "Title" : null,
                        "Description" : "Quarto"
                    }, 
                    {
                        "ImageUrl" : "https://i.t4w.mobi/h/BR/1012574/1206914/1206914_afd650c4_z.jpg",
                        "Title" : null,
                        "Description" : "Sala de jantar (no quarto)"
                    }, 
                    {
                        "ImageUrl" : "https://i.t4w.mobi/h/BR/1012574/1206914/1206914_1312432c_z.jpg",
                        "Title" : null,
                        "Description" : "Terraço/pátio"
                    }, 
                    {
                        "ImageUrl" : "https://i.t4w.mobi/h/BR/1012574/1206914/1206914_19248ddd_z.jpg",
                        "Title" : null,
                        "Description" : "Terraço/pátio"
                    }, 
                    {
                        "ImageUrl" : "https://i.t4w.mobi/h/BR/1012574/1206914/1206914_9ac6bb88_z.jpg",
                        "Title" : null,
                        "Description" : "Terraço/pátio"
                    }, 
                    {
                        "ImageUrl" : "https://i.t4w.mobi/h/BR/1012574/1206914/1206914_66d1b8bb_z.jpg",
                        "Title" : null,
                        "Description" : "Sacada"
                    }, 
                    {
                        "ImageUrl" : "https://i.t4w.mobi/h/BR/1012574/1206914/1206914_8d8acbe2_z.jpg",
                        "Title" : null,
                        "Description" : "Sacada"
                    }, 
                    {
                        "ImageUrl" : "https://i.t4w.mobi/h/BR/1012574/1206914/1206914_5faeb32f_z.jpg",
                        "Title" : null,
                        "Description" : "Sacada"
                    }, 
                    {
                        "ImageUrl" : "https://i.t4w.mobi/h/BR/1012574/1206914/1206914_7a540a35_z.jpg",
                        "Title" : null,
                        "Description" : "Sacada"
                    }, 
                    {
                        "ImageUrl" : "https://i.t4w.mobi/h/BR/1012574/1206914/1206914_cf5e168e_z.jpg",
                        "Title" : null,
                        "Description" : "Sacada"
                    }, 
                    {
                        "ImageUrl" : "https://i.t4w.mobi/h/BR/1012574/1206914/1206914_0a98afd8_z.jpg",
                        "Title" : null,
                        "Description" : "Comodidades do quarto"
                    }, 
                    {
                        "ImageUrl" : "https://i.t4w.mobi/h/BR/1012574/1206914/1206914_02b4df5d_z.jpg",
                        "Title" : null,
                        "Description" : "Comodidades do quarto"
                    }, 
                    {
                        "ImageUrl" : "https://i.t4w.mobi/h/BR/1012574/1206914/1206914_0d4804e2_z.jpg",
                        "Title" : null,
                        "Description" : "Comodidades do quarto"
                    }, 
                    {
                        "ImageUrl" : "https://i.t4w.mobi/h/BR/1012574/1206914/1206914_c697f9f5_z.jpg",
                        "Title" : null,
                        "Description" : "Comodidades do quarto"
                    }, 
                    {
                        "ImageUrl" : "https://i.t4w.mobi/h/BR/1012574/1206914/1206914_91731558_z.jpg",
                        "Title" : null,
                        "Description" : "Comodidades do quarto"
                    }, 
                    {
                        "ImageUrl" : "https://i.t4w.mobi/h/BR/1012574/1206914/1206914_7a02225f_z.jpg",
                        "Title" : null,
                        "Description" : "Comodidades do quarto"
                    }, 
                    {
                        "ImageUrl" : "https://i.t4w.mobi/h/BR/1012574/1206914/1206914_ed6c1c58_z.jpg",
                        "Title" : null,
                        "Description" : "Minirrefrigerador"
                    }, 
                    {
                        "ImageUrl" : "https://i.t4w.mobi/h/BR/1012574/1206914/1206914_dfddae6b_z.jpg",
                        "Title" : null,
                        "Description" : "Vista do quarto"
                    }, 
                    {
                        "ImageUrl" : "https://i.t4w.mobi/h/BR/1012574/1206914/1206914_39ce9154_z.jpg",
                        "Title" : null,
                        "Description" : "Vista do quarto"
                    }, 
                    {
                        "ImageUrl" : "https://i.t4w.mobi/h/BR/1012574/1206914/1206914_73412463_z.jpg",
                        "Title" : null,
                        "Description" : "Vista do quarto"
                    }, 
                    {
                        "ImageUrl" : "https://i.t4w.mobi/h/BR/1012574/1206914/1206914_92c8041f_z.jpg",
                        "Title" : null,
                        "Description" : "Vista do quarto"
                    }, 
                    {
                        "ImageUrl" : "https://i.t4w.mobi/h/BR/1012574/1206914/1206914_b6ac34fe_z.jpg",
                        "Title" : null,
                        "Description" : "Vista do quarto"
                    }, 
                    {
                        "ImageUrl" : "https://i.t4w.mobi/h/BR/1012574/1206914/1206914_08580fe3_z.jpg",
                        "Title" : null,
                        "Description" : "Vista do quarto"
                    }, 
                    {
                        "ImageUrl" : "https://i.t4w.mobi/h/BR/1012574/1206914/1206914_3ad17866_z.jpg",
                        "Title" : null,
                        "Description" : "Vista do quarto"
                    }, 
                    {
                        "ImageUrl" : "https://i.t4w.mobi/h/BR/1012574/1206914/1206914_42b9859e_z.jpg",
                        "Title" : null,
                        "Description" : "Vista do quarto"
                    }, 
                    {
                        "ImageUrl" : "https://i.t4w.mobi/h/BR/1012574/1206914/1206914_a94c80f6_z.jpg",
                        "Title" : null,
                        "Description" : "Vista do quarto"
                    }, 
                    {
                        "ImageUrl" : "https://i.t4w.mobi/h/BR/1012574/1206914/1206914_486c9847_z.jpg",
                        "Title" : null,
                        "Description" : "Vista do quarto"
                    }, 
                    {
                        "ImageUrl" : "https://i.t4w.mobi/h/BR/1012574/1206914/1206914_b405f851_z.jpg",
                        "Title" : null,
                        "Description" : "Vista do quarto"
                    }, 
                    {
                        "ImageUrl" : "https://i.t4w.mobi/h/BR/1012574/1206914/1206914_2772fc31_z.jpg",
                        "Title" : null,
                        "Description" : "Vista do quarto"
                    }, 
                    {
                        "ImageUrl" : "https://i.t4w.mobi/h/BR/1012574/1206914/1206914_aed886b1_z.jpg",
                        "Title" : null,
                        "Description" : "Vista do quarto"
                    }, 
                    {
                        "ImageUrl" : "https://i.t4w.mobi/h/BR/1012574/1206914/1206914_f3f810f5_z.jpg",
                        "Title" : null,
                        "Description" : "Vista do quarto"
                    }, 
                    {
                        "ImageUrl" : "https://i.t4w.mobi/h/BR/1012574/1206914/1206914_ec93668a_z.jpg",
                        "Title" : null,
                        "Description" : "Banheiro"
                    }, 
                    {
                        "ImageUrl" : "https://i.t4w.mobi/h/BR/1012574/1206914/1206914_350303d7_z.jpg",
                        "Title" : null,
                        "Description" : "Banheiro"
                    }, 
                    {
                        "ImageUrl" : "https://i.t4w.mobi/h/BR/1012574/1206914/1206914_3e70908d_z.jpg",
                        "Title" : null,
                        "Description" : "Banheiro"
                    }, 
                    {
                        "ImageUrl" : "https://i.t4w.mobi/h/BR/1012574/1206914/1206914_99c09813_z.jpg",
                        "Title" : null,
                        "Description" : "Banheiro"
                    }, 
                    {
                        "ImageUrl" : "https://i.t4w.mobi/h/BR/1012574/1206914/1206914_70199f92_z.jpg",
                        "Title" : null,
                        "Description" : "Banheiro"
                    }, 
                    {
                        "ImageUrl" : "https://i.t4w.mobi/h/BR/1012574/1206914/1206914_447a8a58_z.jpg",
                        "Title" : null,
                        "Description" : "Banheiro"
                    }, 
                    {
                        "ImageUrl" : "https://i.t4w.mobi/h/BR/1012574/1206914/1206914_87fea84f_z.jpg",
                        "Title" : null,
                        "Description" : "Pia do banheiro"
                    }, 
                    {
                        "ImageUrl" : "https://i.t4w.mobi/h/BR/1012574/1206914/1206914_769dd414_z.jpg",
                        "Title" : null,
                        "Description" : "Chuveiro"
                    }, 
                    {
                        "ImageUrl" : "https://i.t4w.mobi/h/BR/1012574/1206914/1206914_c70835b8_z.jpg",
                        "Title" : null,
                        "Description" : "Piscina"
                    }, 
                    {
                        "ImageUrl" : "https://i.t4w.mobi/h/BR/1012574/1206914/1206914_ae8ed6ba_z.jpg",
                        "Title" : null,
                        "Description" : "Piscina"
                    }, 
                    {
                        "ImageUrl" : "https://i.t4w.mobi/h/BR/1012574/1206914/1206914_d6558b0b_z.jpg",
                        "Title" : null,
                        "Description" : "Piscina"
                    }, 
                    {
                        "ImageUrl" : "https://i.t4w.mobi/h/BR/1012574/1206914/1206914_a220594c_z.jpg",
                        "Title" : null,
                        "Description" : "Piscina"
                    }, 
                    {
                        "ImageUrl" : "https://i.t4w.mobi/h/BR/1012574/1206914/1206914_f1a9e072_z.jpg",
                        "Title" : null,
                        "Description" : "Piscina"
                    }, 
                    {
                        "ImageUrl" : "https://i.t4w.mobi/h/BR/1012574/1206914/1206914_3adab432_z.jpg",
                        "Title" : null,
                        "Description" : "Piscina"
                    }, 
                    {
                        "ImageUrl" : "https://i.t4w.mobi/h/BR/1012574/1206914/1206914_eb27bbd2_z.jpg",
                        "Title" : null,
                        "Description" : "Piscina externa"
                    }, 
                    {
                        "ImageUrl" : "https://i.t4w.mobi/h/BR/1012574/1206914/1206914_c4f0a5c6_z.jpg",
                        "Title" : null,
                        "Description" : "Piscina com cascata"
                    }, 
                    {
                        "ImageUrl" : "https://i.t4w.mobi/h/BR/1012574/1206914/1206914_34a700e4_z.jpg",
                        "Title" : null,
                        "Description" : "Piscina com cascata"
                    }, 
                    {
                        "ImageUrl" : "https://i.t4w.mobi/h/BR/1012574/1206914/1206914_a3d4003f_z.jpg",
                        "Title" : null,
                        "Description" : "Comodidades do estabelecimento"
                    }, 
                    {
                        "ImageUrl" : "https://i.t4w.mobi/h/BR/1012574/1206914/1206914_100da0d3_z.jpg",
                        "Title" : null,
                        "Description" : "Sala de jogos"
                    }, 
                    {
                        "ImageUrl" : "https://i.t4w.mobi/h/BR/1012574/1206914/1206914_66cbf798_z.jpg",
                        "Title" : null,
                        "Description" : "Sala de jogos"
                    }, 
                    {
                        "ImageUrl" : "https://i.t4w.mobi/h/BR/1012574/1206914/1206914_3dfceea3_z.jpg",
                        "Title" : null,
                        "Description" : "Mesa de bilhar"
                    }, 
                    {
                        "ImageUrl" : "https://i.t4w.mobi/h/BR/1012574/1206914/1206914_830bc8a9_z.jpg",
                        "Title" : null,
                        "Description" : "Diversos"
                    }, 
                    {
                        "ImageUrl" : "https://i.t4w.mobi/h/BR/1012574/1206914/1206914_ef7b92a2_z.jpg",
                        "Title" : null,
                        "Description" : "Área do café da manhã"
                    }, 
                    {
                        "ImageUrl" : "https://i.t4w.mobi/h/BR/1012574/1206914/1206914_f810a990_z.jpg",
                        "Title" : null,
                        "Description" : "Área do café da manhã"
                    }, 
                    {
                        "ImageUrl" : "https://i.t4w.mobi/h/BR/1012574/1206914/1206914_abe9591f_z.jpg",
                        "Title" : null,
                        "Description" : "Buffet de café-da-manhã"
                    }, 
                    {
                        "ImageUrl" : "https://i.t4w.mobi/h/BR/1012574/1206914/1206914_c868818d_z.jpg",
                        "Title" : null,
                        "Description" : "Buffet de café-da-manhã"
                    }, 
                    {
                        "ImageUrl" : "https://i.t4w.mobi/h/BR/1012574/1206914/1206914_8050ea18_z.jpg",
                        "Title" : null,
                        "Description" : "Buffet de café-da-manhã"
                    }, 
                    {
                        "ImageUrl" : "https://i.t4w.mobi/h/BR/1012574/1206914/1206914_b1d0d34e_z.jpg",
                        "Title" : null,
                        "Description" : "Bar na beira da piscina"
                    }, 
                    {
                        "ImageUrl" : "https://i.t4w.mobi/h/BR/1012574/1206914/1206914_493510a6_z.jpg",
                        "Title" : null,
                        "Description" : "Bar na beira da piscina"
                    }, 
                    {
                        "ImageUrl" : "https://i.t4w.mobi/h/BR/1012574/1206914/1206914_1a13df29_z.jpg",
                        "Title" : null,
                        "Description" : "Interior"
                    }, 
                    {
                        "ImageUrl" : "https://i.t4w.mobi/h/BR/1012574/1206914/1206914_f7a765f6_z.jpg",
                        "Title" : null,
                        "Description" : "Área do estabelecimento"
                    }, 
                    {
                        "ImageUrl" : "https://i.t4w.mobi/h/BR/1012574/1206914/1206914_c703a2e9_z.jpg",
                        "Title" : null,
                        "Description" : "Área do estabelecimento"
                    }, 
                    {
                        "ImageUrl" : "https://i.t4w.mobi/h/BR/1012574/1206914/1206914_93509078_z.jpg",
                        "Title" : null,
                        "Description" : "Frente do estabelecimento"
                    }, 
                    {
                        "ImageUrl" : "https://i.t4w.mobi/h/BR/1012574/1206914/1206914_ca8c7ab6_z.jpg",
                        "Title" : null,
                        "Description" : "Frente do estabelecimento"
                    }, 
                    {
                        "ImageUrl" : "https://i.t4w.mobi/h/BR/1012574/1206914/1206914_4fca5876_z.jpg",
                        "Title" : null,
                        "Description" : "Jardim"
                    }
                ],
                "Amenities" : [ 
                    {
                        "AmenityID" : 0,
                        "Name" : "Café da manhã",
                        "ImageURL" : null
                    }, 
                    {
                        "AmenityID" : 0,
                        "Name" : "Estacionamento",
                        "ImageURL" : null
                    }, 
                    {
                        "AmenityID" : 0,
                        "Name" : "Internet",
                        "ImageURL" : null
                    }, 
                    {
                        "AmenityID" : 0,
                        "Name" : "Lavanderia",
                        "ImageURL" : null
                    }, 
                    {
                        "AmenityID" : 0,
                        "Name" : "Piscina",
                        "ImageURL" : null
                    }
                ],
                "Description" : "<p><b>Localização do estabelecimento</b> <br />Com ótima localização em Guarujá (na área de Jardim Virgínia), Pousada Villa Virgínia fica a 10 minutos de carro de Acqua Mundo a de Feira de Artesanato da Enseada.  Esta pousada fica a 4,3 km de Praia de Pernambuco e a 5,9 km de Mirante do Morro da Campina.</p><p><b>Quartos</b> <br />Sinta-se em casa em um de nossos 17 quartos com ar-condicionado e frigobares. Os quartos possuem varandas ou pátios particulares. Wi-Fi de cortesia está disponível para manter você conectado. Banheiro privativo com chuveiros apresenta produtos de toalete de cortesia e secadores de cabelo.</p><p><b>Comodidades</b> <br />Aproveite as oportunidades de recreação, como uma piscina externa, ou aprecie a vista em um terraço e um jardim. Esta pousada oferece comodidades como Wi-Fi de cortesia, serviços de concierge e churrasqueiras.</p><p><b>Alimentação</b> <br />No fim do dia, relaxe com uma bebida refrescante em um bar/lounge ou um bar ao lado da piscina. Um café da manhã (buffet) de cortesia é servido diariamente, entre 8h00 e 10h00.</p>",
                "Days" : 0,
                "Iata" : null,
                "Address" : [ 
                    {
                        "Street" : "990 Avenida Assis Chateaubriand esquina com Avenida A, 27",
                        "AddressNumber" : null,
                        "AddressComplement" : null,
                        "CityName" : "Guarujá, São Paulo, Brasil",
                        "StateName" : null,
                        "CountryName" : null,
                        "ZipCode" : null
                    }
                ],
                "Addressstring" : null,
                "Broker" : 1,
                "TripAdvisor" : null,
                "Latitude" : -23.97435,
                "Longitude" : -46.21201
            }
        ],
        "ErrorMessages" : null,
        "Token" : "932b9e13-3f2d-455b-b0c7-13f143b263e9",
        "Created" : ISODate("2021-01-12T13:41:55.720Z"),
        "UserId" : null,
        "HotelId" : 1206914,
        "IsPlanDaysAvailable" : false,
        "AvailableDays" : 0,
        "TotalDays" : 0
    },
    "Error" : null,
    "BookingFilter" : {
        "Token" : "932b9e13-3f2d-455b-b0c7-13f143b263e9",
        "HotelId" : 1206914,
        "ProviderName" : "Bedsonline",
        "BrokerId" : 1,
        "Rooms" : [ 
            {
                "RoomId" : "14001",
                "Paxs" : [ 
                    {
                        "Name" : "ELIDA",
                        "Surname" : "LOBATO",
                        "Age" : 29,
                        "Title" : null,
                        "IsChild" : false,
                        "IsMainPax" : true,
                        "DocumentType" : 1,
                        "DocumentTypeDescription" : null,
                        "Document" : "41129364860"
                    }, 
                    {
                        "Name" : "GIOVANNA",
                        "Surname" : "ALCARDE",
                        "Age" : 3,
                        "Title" : null,
                        "IsChild" : true,
                        "IsMainPax" : false,
                        "DocumentType" : 1,
                        "DocumentTypeDescription" : null,
                        "Document" : ""
                    }
                ],
                "CancellationPolicies" : null,
                "BoardDescription" : null,
                "RoomDescription" : null,
                "IsRefundable" : false,
                "RoomPrice" : null,
                "QuantityAdults" : 1,
                "ChildAges" : null,
                "QuantityChild" : 1,
                "Quantity" : 0
            }
        ],
        "UserId" : "41129364860",
        "UserIP" : "187.56.242.138",
        "OrderID" : "CA4111201211043A69",
        "TransactionId" : "3e1d0ecf-30ac-495f-bc5a-374affc0340a",
        "Installments" : 1,
        "InstallmentAmount" : "6.75",
        "PlanId" : "30bb9449-b489-4416-9659-b8de544c10e9",
        "Price" : {
            "PlanDailyUsed" : 2,
            "TotalPriceExtra" : "5.19",
            "PlanExtraPrice" : "6.75",
            "PlanPointUsed" : 0,
            "PaymentOptionId" : 6,
            "PlanMarkup" : "30",
            "AccumulatedPoint" : 0,
            "Currency" : "BRL",
            "PointPrice" : "0.06",
            "PlanoPeriodos" : [ 
                {
                    "Periodo" : 1,
                    "Diarias" : 2
                }
            ]
        }
    },
    "BookingUpdateFilter" : {
        "OrderID" : "CA4111201211043A69",
        "StatusID" : 0,
        "AttendantID" : null,
        "UserID" : "41129364860",
        "ServiceID" : [ 
            21687
        ],
        "StatusPaymentID" : 2,
        "CalculationPolicies" : null
    },
    "CancelationFilter" : null,
    "Created" : ISODate("2021-01-12T10:43:05.499Z"),
    "IsActive" : true,
    "ActualStatus" : {
        "StatusId" : 2,
        "Name" : "Confirmado",
        "Description" : null,
        "Date" : ISODate("2021-01-12T10:43:05.499Z"),
        "PreviousStatusId" : null
    },
    "History" : [ 
        {
            "StatusId" : 2,
            "Name" : "Confirmado",
            "Description" : null,
            "Date" : ISODate("2021-01-12T10:43:05.499Z"),
            "PreviousStatusId" : null
        }
    ],
    "ActualStatusPayment" : {
        "StatusPaymentId" : 2,
        "Name" : "Aprovado",
        "Date" : ISODate("2021-01-12T10:43:47.345Z"),
        "PreviousStatusId" : null
    },
    "HistoryPayment" : [ 
        {
            "StatusPaymentId" : 2,
            "Name" : "Aprovado",
            "Date" : ISODate("2021-01-12T10:43:47.345Z"),
            "PreviousStatusId" : null
        }
    ],
    "CancelationPoliciesPenalty" : null,
    "StartDate" : null,
    "EndDate" : null,
    "isNumberDayError" : false
  },
  {
    "_id" : ObjectId("6068d3a07383320001dafce5"),
    "id" : UUID("00000000-0000-0000-0000-000000000000"),
    "BookingResult" : {
        "Rooms" : [ 
            {
                "VoucherId" : "716868-821225",
                "ReservationId" : "19866",
                "ServiceId" : 23551,
                "Status" : "Confirmado",
                "Observations" : "\nApartamentos com vista frontal vista mar. Todos os quartos possuem varanda, TV de LCD com canais à cabo, ar condicionado split, cortinas blackout, telefone, frigobar, cofre eletrônico, secador de cabelo, acesso wifi free  e voltagem de 220v. \nA configuração do quarto triplo é de um duplo casal ou twin, com cama auxiliar, de tamanho menor.\n\n\n*Há possibilidade de restrição de uso de áreas comuns, por implementação de medidas de controle epidemiológico, durante todo o período da pandemia em razão da Covid-19. A ocupação mais alta do hotel interfere diretamente nestas restrições. A ocupação mais alta do hotel interfere diretamente nestas restrições.*\n\nOBS: O quarto triplo é um duplo casal ou twin, com cama auxiliar, de tamanho menor.\n<br /> <u>POLITICAS GERAIS:</u> Cafe da manha incluso, quando servido no restaurante do hotel;\nCheck-in as 14h e check-out as 12h;\nSolicitamos garantia de NO SHOW para confirmaçao da reserva;\nPolitica de crianças: 01 CHD de ate 10 (dez) anos no aptº dos pais e cortesia;\nO Hotel oferece toalha de piscina ao custo de R$ 3,00 a diária por toalha;\nRéveillon com ceia All Inclusive, inclusa no dia 31/12/2021;\n*Há possibilidade de restrição de uso de áreas comuns, por implementação de medidas de controle epidemiológico, durante todo o período da pandemia em razão da Covid-19. A ocupação mais alta do hotel interfere diretamente nestas restrições.* <br /><u>POLITICA DE CANCELAMENTO:</u> Cancelamentos/Alteração de reservas: Para cancelamentos efetuados até 2 dias (dois dias) antes do check-in, não será cobrado nenhum valor ao hóspede, após esse prazo será cobrado a primeira diaria para garantia da reserva (exceto Réveillon, Carnaval – Para esses períodos será aplicada politica diferenciada).\n\n\"NO SHOW\" (Nao comparecimento): Em caso de No-Show, o Hotel ira cobrar a primeira diaria.<br />\n<u>POLÍTICAS DE GARANTIA:</u> <br /> Politica De Pagamento – Operadora <br /> Faturamento de 10 dias apos o Check out, mediante aprovaçao de cadastro; Caso a operadora não tenha cadastro aprovado, será solicitado o pré-pagamento da reserva para garantia. <br />\n<br/>\n<strong>Políticas de higiene</strong>\n<ul>\n<li>Protocolos de Higiene O hotel implementou vários protocolos de segurança, através de rígidas práticas de higiene em todas as instalações.</li>\n</ul>\n<br/>\r\n<strong>Políticas de higiene</strong>\r\n<ul>\r\n<li>Protocolos de Higiene O hotel implementou vários protocolos de segurança, através de rígidas práticas de higiene em todas as instalações.</li>\r\n</ul>\r\n",
                "RoomID" : "3241003",
                "RoomDescription" : "LUXO NACIONAL - VISTA FRONTAL MAR",
                "SellingPrice" : "259.89",
                "CancellationPrice" : "0",
                "Checkin" : "2021-04-09",
                "Checkout" : "2021-04-10",
                "CheckinHour" : "14:00",
                "CheckoutHour" : "12:00",
                "Comission" : "0",
                "HotelAddress" : "Praça Stella Maris 200",
                "BoardDescription" : "Café da manhã",
                "Phone" : "(71) 3413-0000",
                "BreakfeastIncluded" : true,
                "HotelName" : "Gran Hotel Stella Maris Urban Resort   Conventions",
                "Paxes" : [ 
                    {
                        "Name" : "Elida",
                        "Surname" : "Lobato",
                        "Age" : 29,
                        "Title" : "Mr",
                        "IsChild" : false,
                        "IsMainPax" : true,
                        "DocumentType" : 1,
                        "DocumentTypeDescription" : "CPF",
                        "Document" : "41129364860"
                    }
                ]
            }
        ],
        "RoomPrices" : {
            "TotalPrice" : "259.89",
            "Currency" : null,
            "Description" : null,
            "NumberOfNights" : 1,
            "DailyPrice" : "0",
            "PlanType" : null,
            "PlanDailyPrice" : "0",
            "PlanTotalPrice" : "0",
            "PlanNumberOfNightsUsed" : 0,
            "PlanExtraReservationCostPrice" : "0",
            "PlanExtraReservationFinalPrice" : "0",
            "PlanCalculationFormula" : "0",
            "PlanMarkup" : "0",
            "DailyRefundBack" : "0",
            "PlanExtraReservationFinalPriceRefund" : "0",
            "PointPrice" : "0"
        },
        "Error" : null
    },
    "BookingRdcResult" : null,
    "OrderID" : "CA4110304211743799",
    "CancelationPolicies" : {
        "id" : UUID("00000000-0000-0000-0000-000000000000"),
        "_id" : null,
        "RoomPrices" : {
            "TotalPrice" : "259.89",
            "Currency" : null,
            "Description" : null,
            "NumberOfNights" : 0,
            "DailyPrice" : "0.0",
            "PlanType" : null,
            "PlanDailyPrice" : "0.0",
            "PlanTotalPrice" : "0.0",
            "PlanNumberOfNightsUsed" : 0,
            "PlanExtraReservationCostPrice" : "0.0",
            "PlanExtraReservationFinalPrice" : "0.0",
            "PlanCalculationFormula" : "0.0",
            "PlanMarkup" : "0.0",
            "DailyRefundBack" : "0.0",
            "PlanExtraReservationFinalPriceRefund" : "0.0",
            "PointPrice" : "0.0"
        },
        "Rooms" : [ 
            {
                "RoomId" : null,
                "Paxs" : null,
                "CancellationPolicies" : [ 
                    {
                        "Description" : null,
                        "BeginDate" : ISODate("2021-04-03T00:00:00.000Z"),
                        "EndDate" : ISODate("2021-04-09T00:00:00.000Z"),
                        "Prices" : {
                            "Price" : "259.89",
                            "DailyPriceTotal" : "0.0",
                            "PeriodPrice" : "0.0",
                            "TotalPeriodPriceTotal" : "0.0",
                            "Currency" : "BRL",
                            "Description" : null
                        },
                        "Error" : null
                    }
                ],
                "BoardDescription" : "Café da manhã",
                "RoomDescription" : "LUXO NACIONAL - VISTA FRONTAL MAR",
                "IsRefundable" : false,
                "RoomPrice" : {
                    "TotalPrice" : "259.89",
                    "Currency" : "BRL",
                    "Description" : null,
                    "NumberOfNights" : 1,
                    "DailyPrice" : "0.0",
                    "PlanType" : null,
                    "PlanDailyPrice" : "0.0",
                    "PlanTotalPrice" : "0.0",
                    "PlanNumberOfNightsUsed" : 0,
                    "PlanExtraReservationCostPrice" : "0.0",
                    "PlanExtraReservationFinalPrice" : "0.0",
                    "PlanCalculationFormula" : "0.0",
                    "PlanMarkup" : "0.0",
                    "DailyRefundBack" : "0.0",
                    "PlanExtraReservationFinalPriceRefund" : "0.0",
                    "PointPrice" : "0.0"
                },
                "QuantityAdults" : 1,
                "ChildAges" : null,
                "QuantityChild" : 0,
                "Quantity" : 1
            }
        ],
        "CancellationRoomPrices" : {
            "TotalPrice" : "259.89",
            "Currency" : null,
            "Description" : null,
            "NumberOfNights" : 0,
            "DailyPrice" : "0.0",
            "PlanType" : null,
            "PlanDailyPrice" : "0.0",
            "PlanTotalPrice" : "0.0",
            "PlanNumberOfNightsUsed" : 0,
            "PlanExtraReservationCostPrice" : "0.0",
            "PlanExtraReservationFinalPrice" : "0.0",
            "PlanCalculationFormula" : "0.0",
            "PlanMarkup" : "0.0",
            "DailyRefundBack" : "0.0",
            "PlanExtraReservationFinalPriceRefund" : "0.0",
            "PointPrice" : "0.0"
        },
        "CancellationText" : null,
        "CancellationTextList" : [ 
            "Esta tarifa não é reembolsável e não pode ser alterada ou cancelada."
        ],
        "DtBegin" : ISODate("2021-04-03T00:00:00.000Z"),
        "DtEnd" : ISODate("2021-04-09T00:00:00.000Z"),
        "IsRefundable" : false,
        "Error" : null,
        "CancelationPoliciesFilter" : {
            "Token" : "c3757595-5a19-46c0-99f4-70cb59611e47",
            "HotelId" : 37474,
            "RoomIds" : [ 
                3241003
            ],
            "UserId" : "41129364860",
            "UserIP" : "184.73.12.62",
            "BrokerId" : 1,
            "ProviderName" : "Europlus",
            "CheckinDate" : "2021-04-09",
            "CheckoutDate" : "2021-04-10",
            "CheckinDateParse" : ISODate("2021-04-09T00:00:00.000Z"),
            "CheckoutDateParse" : ISODate("2021-04-10T00:00:00.000Z"),
            "NumberOfNights" : 1,
            "PolicieDate" : ISODate("2021-04-03T17:42:57.704Z")
        },
        "CancelationPoliciesPenaltyFilter" : null,
        "CalculationPolicies" : null
    },
    "Availability" : {
        "id" : UUID("00000000-0000-0000-0000-000000000000"),
        "_id" : null,
        "HotelInfo" : [ 
            {
                "ID" : NumberLong(37474),
                "Name" : "Gran Hotel Stella Maris Urban Resort & Conventions (Salvador, Bahia, Brasil)",
                "Chain" : "Independent",
                "CNPJ" : null,
                "Site" : null,
                "IdRdc" : null,
                "Category" : "4",
                "AcommodationType" : "Hotel",
                "Email" : null,
                "Recommended" : false,
                "PhoneNumber" : null,
                "PrimaryImage" : {
                    "ImageUrl" : "https://i.t4w.mobi/h/BR/1010693/37474/37474_2231Property40452.jpg",
                    "Title" : null,
                    "Description" : null
                },
                "ImagesViewUrl" : null,
                "MapUrl" : null,
                "Rooms" : [ 
                    {
                        "QuantityAdults" : 1,
                        "QuantityChild" : 0,
                        "ChildAges" : null,
                        "RoomsType" : [ 
                            {
                                "RoomID" : "3241001",
                                "RoomName" : "STANDARD NACIONAL - VISTA DUNAS, JARDIM OU QUADRA",
                                "Description" : null,
                                "MaxOccupation" : 1,
                                "Remarks" : null,
                                "TermsAndConditions" : null,
                                "TaxesIncluded" : false,
                                "Amenities" : null,
                                "RoomImages" : null,
                                "Regime" : {
                                    "Name" : "Café da manhã",
                                    "BoardAcronym" : null
                                },
                                "Days" : 0,
                                "RoomPrices" : {
                                    "Price" : "0",
                                    "DailyPriceTotal" : "0",
                                    "PeriodPrice" : "0",
                                    "TotalPeriodPriceTotal" : "0",
                                    "Currency" : "BRL",
                                    "Description" : null
                                },
                                "TaxPrices" : null,
                                "IsBestPrice" : false,
                                "IsNonRefundable" : true,
                                "Quantity" : 1,
                                "RecommendedRoom" : false,
                                "ProviderId" : 0,
                                "ProviderName" : "Europlus",
                                "BreakfeastIncluded" : true,
                                "QuantityAdults" : 1,
                                "ChildAges" : null,
                                "QuantityChild" : 0,
                                "HotelCode" : null,
                                "IdRdc" : null,
                                "IdAcomodacao" : null,
                                "RatePlanId" : null,
                                "Token" : null,
                                "IdTarifarios" : null,
                                "TipoPreco" : 0
                            }
                        ],
                        "RoomPrices" : {
                            "Price" : "0",
                            "DailyPriceTotal" : "0",
                            "PeriodPrice" : "0",
                            "TotalPeriodPriceTotal" : "0",
                            "Currency" : "BRL",
                            "Description" : null
                        }
                    }, 
                    {
                        "QuantityAdults" : 1,
                        "QuantityChild" : 0,
                        "ChildAges" : null,
                        "RoomsType" : [ 
                            {
                                "RoomID" : "15001",
                                "RoomName" : "SINGLE VISTA DUNAS, JARDIM OU QUADRA (515)",
                                "Description" : " 515-New Year Sales",
                                "MaxOccupation" : 1,
                                "Remarks" : null,
                                "TermsAndConditions" : null,
                                "TaxesIncluded" : false,
                                "Amenities" : null,
                                "RoomImages" : null,
                                "Regime" : {
                                    "Name" : "Café da manhã",
                                    "BoardAcronym" : null
                                },
                                "Days" : 0,
                                "RoomPrices" : {
                                    "Price" : "0",
                                    "DailyPriceTotal" : "0",
                                    "PeriodPrice" : "0",
                                    "TotalPeriodPriceTotal" : "0",
                                    "Currency" : "BRL",
                                    "Description" : null
                                },
                                "TaxPrices" : null,
                                "IsBestPrice" : false,
                                "IsNonRefundable" : true,
                                "Quantity" : 1,
                                "RecommendedRoom" : false,
                                "ProviderId" : 0,
                                "ProviderName" : "Hotelbeds",
                                "BreakfeastIncluded" : true,
                                "QuantityAdults" : 1,
                                "ChildAges" : null,
                                "QuantityChild" : 0,
                                "HotelCode" : null,
                                "IdRdc" : null,
                                "IdAcomodacao" : null,
                                "RatePlanId" : null,
                                "Token" : null,
                                "IdTarifarios" : null,
                                "TipoPreco" : 0
                            }
                        ],
                        "RoomPrices" : {
                            "Price" : "0",
                            "DailyPriceTotal" : "0",
                            "PeriodPrice" : "0",
                            "TotalPeriodPriceTotal" : "0",
                            "Currency" : "BRL",
                            "Description" : null
                        }
                    }, 
                    {
                        "QuantityAdults" : 1,
                        "QuantityChild" : 0,
                        "ChildAges" : null,
                        "RoomsType" : [ 
                            {
                                "RoomID" : "214002",
                                "RoomName" : "Single Superior",
                                "Description" : null,
                                "MaxOccupation" : 1,
                                "Remarks" : null,
                                "TermsAndConditions" : null,
                                "TaxesIncluded" : false,
                                "Amenities" : null,
                                "RoomImages" : null,
                                "Regime" : {
                                    "Name" : "Café da manhã",
                                    "BoardAcronym" : null
                                },
                                "Days" : 0,
                                "RoomPrices" : {
                                    "Price" : "0",
                                    "DailyPriceTotal" : "0",
                                    "PeriodPrice" : "0",
                                    "TotalPeriodPriceTotal" : "0",
                                    "Currency" : "BRL",
                                    "Description" : null
                                },
                                "TaxPrices" : null,
                                "IsBestPrice" : false,
                                "IsNonRefundable" : false,
                                "Quantity" : 1,
                                "RecommendedRoom" : false,
                                "ProviderId" : 0,
                                "ProviderName" : "Restel",
                                "BreakfeastIncluded" : true,
                                "QuantityAdults" : 1,
                                "ChildAges" : null,
                                "QuantityChild" : 0,
                                "HotelCode" : null,
                                "IdRdc" : null,
                                "IdAcomodacao" : null,
                                "RatePlanId" : null,
                                "Token" : null,
                                "IdTarifarios" : null,
                                "TipoPreco" : 0
                            }
                        ],
                        "RoomPrices" : {
                            "Price" : "0",
                            "DailyPriceTotal" : "0",
                            "PeriodPrice" : "0",
                            "TotalPeriodPriceTotal" : "0",
                            "Currency" : "BRL",
                            "Description" : null
                        }
                    }, 
                    {
                        "QuantityAdults" : 1,
                        "QuantityChild" : 0,
                        "ChildAges" : null,
                        "RoomsType" : [ 
                            {
                                "RoomID" : "14001",
                                "RoomName" : "SINGLE STANDARD (515)",
                                "Description" : null,
                                "MaxOccupation" : 1,
                                "Remarks" : null,
                                "TermsAndConditions" : null,
                                "TaxesIncluded" : false,
                                "Amenities" : null,
                                "RoomImages" : null,
                                "Regime" : {
                                    "Name" : "Café da manhã",
                                    "BoardAcronym" : null
                                },
                                "Days" : 0,
                                "RoomPrices" : {
                                    "Price" : "0",
                                    "DailyPriceTotal" : "0",
                                    "PeriodPrice" : "0",
                                    "TotalPeriodPriceTotal" : "0",
                                    "Currency" : "BRL",
                                    "Description" : null
                                },
                                "TaxPrices" : null,
                                "IsBestPrice" : false,
                                "IsNonRefundable" : true,
                                "Quantity" : 1,
                                "RecommendedRoom" : false,
                                "ProviderId" : 0,
                                "ProviderName" : "Bedsonline",
                                "BreakfeastIncluded" : true,
                                "QuantityAdults" : 1,
                                "ChildAges" : null,
                                "QuantityChild" : 0,
                                "HotelCode" : null,
                                "IdRdc" : null,
                                "IdAcomodacao" : null,
                                "RatePlanId" : null,
                                "Token" : null,
                                "IdTarifarios" : null,
                                "TipoPreco" : 0
                            }
                        ],
                        "RoomPrices" : {
                            "Price" : "0",
                            "DailyPriceTotal" : "0",
                            "PeriodPrice" : "0",
                            "TotalPeriodPriceTotal" : "0",
                            "Currency" : "BRL",
                            "Description" : null
                        }
                    }, 
                    {
                        "QuantityAdults" : 1,
                        "QuantityChild" : 0,
                        "ChildAges" : null,
                        "RoomsType" : [ 
                            {
                                "RoomID" : "3222002",
                                "RoomName" : "SINGLE VISTA DUNAS, JARDIM OU QUADRA",
                                "Description" : null,
                                "MaxOccupation" : 1,
                                "Remarks" : null,
                                "TermsAndConditions" : null,
                                "TaxesIncluded" : false,
                                "Amenities" : null,
                                "RoomImages" : null,
                                "Regime" : {
                                    "Name" : "Café da manhã",
                                    "BoardAcronym" : null
                                },
                                "Days" : 0,
                                "RoomPrices" : {
                                    "Price" : "0",
                                    "DailyPriceTotal" : "0",
                                    "PeriodPrice" : "0",
                                    "TotalPeriodPriceTotal" : "0",
                                    "Currency" : "BRL",
                                    "Description" : null
                                },
                                "TaxPrices" : null,
                                "IsBestPrice" : false,
                                "IsNonRefundable" : true,
                                "Quantity" : 1,
                                "RecommendedRoom" : false,
                                "ProviderId" : 0,
                                "ProviderName" : "EZ Link - Hotel",
                                "BreakfeastIncluded" : true,
                                "QuantityAdults" : 1,
                                "ChildAges" : null,
                                "QuantityChild" : 0,
                                "HotelCode" : null,
                                "IdRdc" : null,
                                "IdAcomodacao" : null,
                                "RatePlanId" : null,
                                "Token" : null,
                                "IdTarifarios" : null,
                                "TipoPreco" : 0
                            }
                        ],
                        "RoomPrices" : {
                            "Price" : "0",
                            "DailyPriceTotal" : "0",
                            "PeriodPrice" : "0",
                            "TotalPeriodPriceTotal" : "0",
                            "Currency" : "BRL",
                            "Description" : null
                        }
                    }, 
                    {
                        "QuantityAdults" : 1,
                        "QuantityChild" : 0,
                        "ChildAges" : null,
                        "RoomsType" : [ 
                            {
                                "RoomID" : "15002",
                                "RoomName" : "DOUBLE STANDARD",
                                "Description" : null,
                                "MaxOccupation" : 1,
                                "Remarks" : null,
                                "TermsAndConditions" : null,
                                "TaxesIncluded" : false,
                                "Amenities" : null,
                                "RoomImages" : null,
                                "Regime" : {
                                    "Name" : "Café da manhã",
                                    "BoardAcronym" : null
                                },
                                "Days" : 0,
                                "RoomPrices" : {
                                    "Price" : "0",
                                    "DailyPriceTotal" : "0",
                                    "PeriodPrice" : "0",
                                    "TotalPeriodPriceTotal" : "0",
                                    "Currency" : "BRL",
                                    "Description" : null
                                },
                                "TaxPrices" : null,
                                "IsBestPrice" : false,
                                "IsNonRefundable" : false,
                                "Quantity" : 1,
                                "RecommendedRoom" : false,
                                "ProviderId" : 0,
                                "ProviderName" : "Hotelbeds",
                                "BreakfeastIncluded" : true,
                                "QuantityAdults" : 1,
                                "ChildAges" : null,
                                "QuantityChild" : 0,
                                "HotelCode" : null,
                                "IdRdc" : null,
                                "IdAcomodacao" : null,
                                "RatePlanId" : null,
                                "Token" : null,
                                "IdTarifarios" : null,
                                "TipoPreco" : 0
                            }
                        ],
                        "RoomPrices" : {
                            "Price" : "0",
                            "DailyPriceTotal" : "0",
                            "PeriodPrice" : "0",
                            "TotalPeriodPriceTotal" : "0",
                            "Currency" : "BRL",
                            "Description" : null
                        }
                    }, 
                    {
                        "QuantityAdults" : 1,
                        "QuantityChild" : 0,
                        "ChildAges" : null,
                        "RoomsType" : [ 
                            {
                                "RoomID" : "3241002",
                                "RoomName" : "SUPERIOR NACIONAL - VISTA LATERAL MAR",
                                "Description" : null,
                                "MaxOccupation" : 1,
                                "Remarks" : null,
                                "TermsAndConditions" : null,
                                "TaxesIncluded" : false,
                                "Amenities" : null,
                                "RoomImages" : null,
                                "Regime" : {
                                    "Name" : "Café da manhã",
                                    "BoardAcronym" : null
                                },
                                "Days" : 0,
                                "RoomPrices" : {
                                    "Price" : "0",
                                    "DailyPriceTotal" : "0",
                                    "PeriodPrice" : "0",
                                    "TotalPeriodPriceTotal" : "0",
                                    "Currency" : "BRL",
                                    "Description" : null
                                },
                                "TaxPrices" : null,
                                "IsBestPrice" : false,
                                "IsNonRefundable" : true,
                                "Quantity" : 1,
                                "RecommendedRoom" : false,
                                "ProviderId" : 0,
                                "ProviderName" : "Europlus",
                                "BreakfeastIncluded" : true,
                                "QuantityAdults" : 1,
                                "ChildAges" : null,
                                "QuantityChild" : 0,
                                "HotelCode" : null,
                                "IdRdc" : null,
                                "IdAcomodacao" : null,
                                "RatePlanId" : null,
                                "Token" : null,
                                "IdTarifarios" : null,
                                "TipoPreco" : 0
                            }
                        ],
                        "RoomPrices" : {
                            "Price" : "0",
                            "DailyPriceTotal" : "0",
                            "PeriodPrice" : "0",
                            "TotalPeriodPriceTotal" : "0",
                            "Currency" : "BRL",
                            "Description" : null
                        }
                    }, 
                    {
                        "QuantityAdults" : 1,
                        "QuantityChild" : 0,
                        "ChildAges" : null,
                        "RoomsType" : [ 
                            {
                                "RoomID" : "3351002",
                                "RoomName" : "Standard - Vista Interna - CAFÉ",
                                "Description" : null,
                                "MaxOccupation" : 1,
                                "Remarks" : null,
                                "TermsAndConditions" : null,
                                "TaxesIncluded" : false,
                                "Amenities" : null,
                                "RoomImages" : null,
                                "Regime" : {
                                    "Name" : "Café da manhã",
                                    "BoardAcronym" : null
                                },
                                "Days" : 0,
                                "RoomPrices" : {
                                    "Price" : "0",
                                    "DailyPriceTotal" : "0",
                                    "PeriodPrice" : "0",
                                    "TotalPeriodPriceTotal" : "0",
                                    "Currency" : "BRL",
                                    "Description" : null
                                },
                                "TaxPrices" : null,
                                "IsBestPrice" : false,
                                "IsNonRefundable" : true,
                                "Quantity" : 1,
                                "RecommendedRoom" : false,
                                "ProviderId" : 0,
                                "ProviderName" : "Iterpec",
                                "BreakfeastIncluded" : true,
                                "QuantityAdults" : 1,
                                "ChildAges" : null,
                                "QuantityChild" : 0,
                                "HotelCode" : null,
                                "IdRdc" : null,
                                "IdAcomodacao" : null,
                                "RatePlanId" : null,
                                "Token" : null,
                                "IdTarifarios" : null,
                                "TipoPreco" : 0
                            }
                        ],
                        "RoomPrices" : {
                            "Price" : "0",
                            "DailyPriceTotal" : "0",
                            "PeriodPrice" : "0",
                            "TotalPeriodPriceTotal" : "0",
                            "Currency" : "BRL",
                            "Description" : null
                        }
                    }, 
                    {
                        "QuantityAdults" : 1,
                        "QuantityChild" : 0,
                        "ChildAges" : null,
                        "RoomsType" : [ 
                            {
                                "RoomID" : "15003",
                                "RoomName" : "DOUBLE VISTA DUNAS, JARDIM OU QUADRA (515)",
                                "Description" : " 515-New Year Sales",
                                "MaxOccupation" : 1,
                                "Remarks" : null,
                                "TermsAndConditions" : null,
                                "TaxesIncluded" : false,
                                "Amenities" : null,
                                "RoomImages" : null,
                                "Regime" : {
                                    "Name" : "Café da manhã",
                                    "BoardAcronym" : null
                                },
                                "Days" : 0,
                                "RoomPrices" : {
                                    "Price" : "0",
                                    "DailyPriceTotal" : "0",
                                    "PeriodPrice" : "0",
                                    "TotalPeriodPriceTotal" : "0",
                                    "Currency" : "BRL",
                                    "Description" : null
                                },
                                "TaxPrices" : null,
                                "IsBestPrice" : false,
                                "IsNonRefundable" : true,
                                "Quantity" : 1,
                                "RecommendedRoom" : false,
                                "ProviderId" : 0,
                                "ProviderName" : "Hotelbeds",
                                "BreakfeastIncluded" : true,
                                "QuantityAdults" : 1,
                                "ChildAges" : null,
                                "QuantityChild" : 0,
                                "HotelCode" : null,
                                "IdRdc" : null,
                                "IdAcomodacao" : null,
                                "RatePlanId" : null,
                                "Token" : null,
                                "IdTarifarios" : null,
                                "TipoPreco" : 0
                            }
                        ],
                        "RoomPrices" : {
                            "Price" : "0",
                            "DailyPriceTotal" : "0",
                            "PeriodPrice" : "0",
                            "TotalPeriodPriceTotal" : "0",
                            "Currency" : "BRL",
                            "Description" : null
                        }
                    }, 
                    {
                        "QuantityAdults" : 1,
                        "QuantityChild" : 0,
                        "ChildAges" : null,
                        "RoomsType" : [ 
                            {
                                "RoomID" : "214003",
                                "RoomName" : "Single Deluxe",
                                "Description" : null,
                                "MaxOccupation" : 1,
                                "Remarks" : null,
                                "TermsAndConditions" : null,
                                "TaxesIncluded" : false,
                                "Amenities" : null,
                                "RoomImages" : null,
                                "Regime" : {
                                    "Name" : "Café da manhã",
                                    "BoardAcronym" : null
                                },
                                "Days" : 0,
                                "RoomPrices" : {
                                    "Price" : "0",
                                    "DailyPriceTotal" : "0",
                                    "PeriodPrice" : "0",
                                    "TotalPeriodPriceTotal" : "0",
                                    "Currency" : "BRL",
                                    "Description" : null
                                },
                                "TaxPrices" : null,
                                "IsBestPrice" : false,
                                "IsNonRefundable" : false,
                                "Quantity" : 1,
                                "RecommendedRoom" : false,
                                "ProviderId" : 0,
                                "ProviderName" : "Restel",
                                "BreakfeastIncluded" : true,
                                "QuantityAdults" : 1,
                                "ChildAges" : null,
                                "QuantityChild" : 0,
                                "HotelCode" : null,
                                "IdRdc" : null,
                                "IdAcomodacao" : null,
                                "RatePlanId" : null,
                                "Token" : null,
                                "IdTarifarios" : null,
                                "TipoPreco" : 0
                            }
                        ],
                        "RoomPrices" : {
                            "Price" : "0",
                            "DailyPriceTotal" : "0",
                            "PeriodPrice" : "0",
                            "TotalPeriodPriceTotal" : "0",
                            "Currency" : "BRL",
                            "Description" : null
                        }
                    }, 
                    {
                        "QuantityAdults" : 1,
                        "QuantityChild" : 0,
                        "ChildAges" : null,
                        "RoomsType" : [ 
                            {
                                "RoomID" : "14003",
                                "RoomName" : "DOUBLE STANDARD (515)",
                                "Description" : null,
                                "MaxOccupation" : 1,
                                "Remarks" : null,
                                "TermsAndConditions" : null,
                                "TaxesIncluded" : false,
                                "Amenities" : null,
                                "RoomImages" : null,
                                "Regime" : {
                                    "Name" : "Café da manhã",
                                    "BoardAcronym" : null
                                },
                                "Days" : 0,
                                "RoomPrices" : {
                                    "Price" : "0",
                                    "DailyPriceTotal" : "0",
                                    "PeriodPrice" : "0",
                                    "TotalPeriodPriceTotal" : "0",
                                    "Currency" : "BRL",
                                    "Description" : null
                                },
                                "TaxPrices" : null,
                                "IsBestPrice" : false,
                                "IsNonRefundable" : true,
                                "Quantity" : 1,
                                "RecommendedRoom" : false,
                                "ProviderId" : 0,
                                "ProviderName" : "Bedsonline",
                                "BreakfeastIncluded" : true,
                                "QuantityAdults" : 1,
                                "ChildAges" : null,
                                "QuantityChild" : 0,
                                "HotelCode" : null,
                                "IdRdc" : null,
                                "IdAcomodacao" : null,
                                "RatePlanId" : null,
                                "Token" : null,
                                "IdTarifarios" : null,
                                "TipoPreco" : 0
                            }
                        ],
                        "RoomPrices" : {
                            "Price" : "0",
                            "DailyPriceTotal" : "0",
                            "PeriodPrice" : "0",
                            "TotalPeriodPriceTotal" : "0",
                            "Currency" : "BRL",
                            "Description" : null
                        }
                    }, 
                    {
                        "QuantityAdults" : 1,
                        "QuantityChild" : 0,
                        "ChildAges" : null,
                        "RoomsType" : [ 
                            {
                                "RoomID" : "3241003",
                                "RoomName" : "LUXO NACIONAL - VISTA FRONTAL MAR",
                                "Description" : null,
                                "MaxOccupation" : 1,
                                "Remarks" : null,
                                "TermsAndConditions" : null,
                                "TaxesIncluded" : false,
                                "Amenities" : null,
                                "RoomImages" : null,
                                "Regime" : {
                                    "Name" : "Café da manhã",
                                    "BoardAcronym" : null
                                },
                                "Days" : 0,
                                "RoomPrices" : {
                                    "Price" : "0",
                                    "DailyPriceTotal" : "0",
                                    "PeriodPrice" : "0",
                                    "TotalPeriodPriceTotal" : "0",
                                    "Currency" : "BRL",
                                    "Description" : null
                                },
                                "TaxPrices" : null,
                                "IsBestPrice" : false,
                                "IsNonRefundable" : true,
                                "Quantity" : 1,
                                "RecommendedRoom" : false,
                                "ProviderId" : 0,
                                "ProviderName" : "Europlus",
                                "BreakfeastIncluded" : true,
                                "QuantityAdults" : 1,
                                "ChildAges" : null,
                                "QuantityChild" : 0,
                                "HotelCode" : null,
                                "IdRdc" : null,
                                "IdAcomodacao" : null,
                                "RatePlanId" : null,
                                "Token" : null,
                                "IdTarifarios" : null,
                                "TipoPreco" : 0
                            }
                        ],
                        "RoomPrices" : {
                            "Price" : "0",
                            "DailyPriceTotal" : "0",
                            "PeriodPrice" : "0",
                            "TotalPeriodPriceTotal" : "0",
                            "Currency" : "BRL",
                            "Description" : null
                        }
                    }, 
                    {
                        "QuantityAdults" : 1,
                        "QuantityChild" : 0,
                        "ChildAges" : null,
                        "RoomsType" : [ 
                            {
                                "RoomID" : "3222005",
                                "RoomName" : "DOUBLE VISTA DUNAS, JARDIM OU QUADRA",
                                "Description" : null,
                                "MaxOccupation" : 1,
                                "Remarks" : null,
                                "TermsAndConditions" : null,
                                "TaxesIncluded" : false,
                                "Amenities" : null,
                                "RoomImages" : null,
                                "Regime" : {
                                    "Name" : "Café da manhã",
                                    "BoardAcronym" : null
                                },
                                "Days" : 0,
                                "RoomPrices" : {
                                    "Price" : "0",
                                    "DailyPriceTotal" : "0",
                                    "PeriodPrice" : "0",
                                    "TotalPeriodPriceTotal" : "0",
                                    "Currency" : "BRL",
                                    "Description" : null
                                },
                                "TaxPrices" : null,
                                "IsBestPrice" : false,
                                "IsNonRefundable" : true,
                                "Quantity" : 1,
                                "RecommendedRoom" : false,
                                "ProviderId" : 0,
                                "ProviderName" : "EZ Link - Hotel",
                                "BreakfeastIncluded" : true,
                                "QuantityAdults" : 1,
                                "ChildAges" : null,
                                "QuantityChild" : 0,
                                "HotelCode" : null,
                                "IdRdc" : null,
                                "IdAcomodacao" : null,
                                "RatePlanId" : null,
                                "Token" : null,
                                "IdTarifarios" : null,
                                "TipoPreco" : 0
                            }
                        ],
                        "RoomPrices" : {
                            "Price" : "0",
                            "DailyPriceTotal" : "0",
                            "PeriodPrice" : "0",
                            "TotalPeriodPriceTotal" : "0",
                            "Currency" : "BRL",
                            "Description" : null
                        }
                    }, 
                    {
                        "QuantityAdults" : 1,
                        "QuantityChild" : 0,
                        "ChildAges" : null,
                        "RoomsType" : [ 
                            {
                                "RoomID" : "3241004",
                                "RoomName" : "STANDARD - VISTA DUNAS, JARDIM OU QUADRA",
                                "Description" : null,
                                "MaxOccupation" : 1,
                                "Remarks" : null,
                                "TermsAndConditions" : null,
                                "TaxesIncluded" : false,
                                "Amenities" : null,
                                "RoomImages" : null,
                                "Regime" : {
                                    "Name" : "Meia Pensão",
                                    "BoardAcronym" : null
                                },
                                "Days" : 0,
                                "RoomPrices" : {
                                    "Price" : "0",
                                    "DailyPriceTotal" : "0",
                                    "PeriodPrice" : "0",
                                    "TotalPeriodPriceTotal" : "0",
                                    "Currency" : "BRL",
                                    "Description" : null
                                },
                                "TaxPrices" : null,
                                "IsBestPrice" : false,
                                "IsNonRefundable" : true,
                                "Quantity" : 1,
                                "RecommendedRoom" : false,
                                "ProviderId" : 0,
                                "ProviderName" : "Europlus",
                                "BreakfeastIncluded" : true,
                                "QuantityAdults" : 1,
                                "ChildAges" : null,
                                "QuantityChild" : 0,
                                "HotelCode" : null,
                                "IdRdc" : null,
                                "IdAcomodacao" : null,
                                "RatePlanId" : null,
                                "Token" : null,
                                "IdTarifarios" : null,
                                "TipoPreco" : 0
                            }
                        ],
                        "RoomPrices" : {
                            "Price" : "0",
                            "DailyPriceTotal" : "0",
                            "PeriodPrice" : "0",
                            "TotalPeriodPriceTotal" : "0",
                            "Currency" : "BRL",
                            "Description" : null
                        }
                    }, 
                    {
                        "QuantityAdults" : 1,
                        "QuantityChild" : 0,
                        "ChildAges" : null,
                        "RoomsType" : [ 
                            {
                                "RoomID" : "15004",
                                "RoomName" : "SINGLE VISTA DUNAS, JARDIM OU QUADRA (515)",
                                "Description" : " 515-New Year Sales",
                                "MaxOccupation" : 1,
                                "Remarks" : null,
                                "TermsAndConditions" : null,
                                "TaxesIncluded" : false,
                                "Amenities" : null,
                                "RoomImages" : null,
                                "Regime" : {
                                    "Name" : "Meia Pensão",
                                    "BoardAcronym" : null
                                },
                                "Days" : 0,
                                "RoomPrices" : {
                                    "Price" : "0",
                                    "DailyPriceTotal" : "0",
                                    "PeriodPrice" : "0",
                                    "TotalPeriodPriceTotal" : "0",
                                    "Currency" : "BRL",
                                    "Description" : null
                                },
                                "TaxPrices" : null,
                                "IsBestPrice" : false,
                                "IsNonRefundable" : true,
                                "Quantity" : 1,
                                "RecommendedRoom" : false,
                                "ProviderId" : 0,
                                "ProviderName" : "Hotelbeds",
                                "BreakfeastIncluded" : true,
                                "QuantityAdults" : 1,
                                "ChildAges" : null,
                                "QuantityChild" : 0,
                                "HotelCode" : null,
                                "IdRdc" : null,
                                "IdAcomodacao" : null,
                                "RatePlanId" : null,
                                "Token" : null,
                                "IdTarifarios" : null,
                                "TipoPreco" : 0
                            }
                        ],
                        "RoomPrices" : {
                            "Price" : "0",
                            "DailyPriceTotal" : "0",
                            "PeriodPrice" : "0",
                            "TotalPeriodPriceTotal" : "0",
                            "Currency" : "BRL",
                            "Description" : null
                        }
                    }, 
                    {
                        "QuantityAdults" : 1,
                        "QuantityChild" : 0,
                        "ChildAges" : null,
                        "RoomsType" : [ 
                            {
                                "RoomID" : "214004",
                                "RoomName" : "Single",
                                "Description" : null,
                                "MaxOccupation" : 1,
                                "Remarks" : null,
                                "TermsAndConditions" : null,
                                "TaxesIncluded" : false,
                                "Amenities" : null,
                                "RoomImages" : null,
                                "Regime" : {
                                    "Name" : "Meia Pensão",
                                    "BoardAcronym" : null
                                },
                                "Days" : 0,
                                "RoomPrices" : {
                                    "Price" : "0",
                                    "DailyPriceTotal" : "0",
                                    "PeriodPrice" : "0",
                                    "TotalPeriodPriceTotal" : "0",
                                    "Currency" : "BRL",
                                    "Description" : null
                                },
                                "TaxPrices" : null,
                                "IsBestPrice" : false,
                                "IsNonRefundable" : false,
                                "Quantity" : 1,
                                "RecommendedRoom" : false,
                                "ProviderId" : 0,
                                "ProviderName" : "Restel",
                                "BreakfeastIncluded" : true,
                                "QuantityAdults" : 1,
                                "ChildAges" : null,
                                "QuantityChild" : 0,
                                "HotelCode" : null,
                                "IdRdc" : null,
                                "IdAcomodacao" : null,
                                "RatePlanId" : null,
                                "Token" : null,
                                "IdTarifarios" : null,
                                "TipoPreco" : 0
                            }
                        ],
                        "RoomPrices" : {
                            "Price" : "0",
                            "DailyPriceTotal" : "0",
                            "PeriodPrice" : "0",
                            "TotalPeriodPriceTotal" : "0",
                            "Currency" : "BRL",
                            "Description" : null
                        }
                    }, 
                    {
                        "QuantityAdults" : 1,
                        "QuantityChild" : 0,
                        "ChildAges" : null,
                        "RoomsType" : [ 
                            {
                                "RoomID" : "14004",
                                "RoomName" : "SINGLE STANDARD (515)",
                                "Description" : null,
                                "MaxOccupation" : 1,
                                "Remarks" : null,
                                "TermsAndConditions" : null,
                                "TaxesIncluded" : false,
                                "Amenities" : null,
                                "RoomImages" : null,
                                "Regime" : {
                                    "Name" : "Meia Pensão",
                                    "BoardAcronym" : null
                                },
                                "Days" : 0,
                                "RoomPrices" : {
                                    "Price" : "0",
                                    "DailyPriceTotal" : "0",
                                    "PeriodPrice" : "0",
                                    "TotalPeriodPriceTotal" : "0",
                                    "Currency" : "BRL",
                                    "Description" : null
                                },
                                "TaxPrices" : null,
                                "IsBestPrice" : false,
                                "IsNonRefundable" : true,
                                "Quantity" : 1,
                                "RecommendedRoom" : false,
                                "ProviderId" : 0,
                                "ProviderName" : "Bedsonline",
                                "BreakfeastIncluded" : true,
                                "QuantityAdults" : 1,
                                "ChildAges" : null,
                                "QuantityChild" : 0,
                                "HotelCode" : null,
                                "IdRdc" : null,
                                "IdAcomodacao" : null,
                                "RatePlanId" : null,
                                "Token" : null,
                                "IdTarifarios" : null,
                                "TipoPreco" : 0
                            }
                        ],
                        "RoomPrices" : {
                            "Price" : "0",
                            "DailyPriceTotal" : "0",
                            "PeriodPrice" : "0",
                            "TotalPeriodPriceTotal" : "0",
                            "Currency" : "BRL",
                            "Description" : null
                        }
                    }, 
                    {
                        "QuantityAdults" : 1,
                        "QuantityChild" : 0,
                        "ChildAges" : null,
                        "RoomsType" : [ 
                            {
                                "RoomID" : "15005",
                                "RoomName" : "Room INNER",
                                "Description" : null,
                                "MaxOccupation" : 1,
                                "Remarks" : null,
                                "TermsAndConditions" : null,
                                "TaxesIncluded" : false,
                                "Amenities" : null,
                                "RoomImages" : null,
                                "Regime" : {
                                    "Name" : "Meia Pensão",
                                    "BoardAcronym" : null
                                },
                                "Days" : 0,
                                "RoomPrices" : {
                                    "Price" : "0",
                                    "DailyPriceTotal" : "0",
                                    "PeriodPrice" : "0",
                                    "TotalPeriodPriceTotal" : "0",
                                    "Currency" : "BRL",
                                    "Description" : null
                                },
                                "TaxPrices" : null,
                                "IsBestPrice" : false,
                                "IsNonRefundable" : false,
                                "Quantity" : 1,
                                "RecommendedRoom" : false,
                                "ProviderId" : 0,
                                "ProviderName" : "Hotelbeds",
                                "BreakfeastIncluded" : true,
                                "QuantityAdults" : 1,
                                "ChildAges" : null,
                                "QuantityChild" : 0,
                                "HotelCode" : null,
                                "IdRdc" : null,
                                "IdAcomodacao" : null,
                                "RatePlanId" : null,
                                "Token" : null,
                                "IdTarifarios" : null,
                                "TipoPreco" : 0
                            }
                        ],
                        "RoomPrices" : {
                            "Price" : "0",
                            "DailyPriceTotal" : "0",
                            "PeriodPrice" : "0",
                            "TotalPeriodPriceTotal" : "0",
                            "Currency" : "BRL",
                            "Description" : null
                        }
                    }, 
                    {
                        "QuantityAdults" : 1,
                        "QuantityChild" : 0,
                        "ChildAges" : null,
                        "RoomsType" : [ 
                            {
                                "RoomID" : "214005",
                                "RoomName" : "Single Superior",
                                "Description" : null,
                                "MaxOccupation" : 1,
                                "Remarks" : null,
                                "TermsAndConditions" : null,
                                "TaxesIncluded" : false,
                                "Amenities" : null,
                                "RoomImages" : null,
                                "Regime" : {
                                    "Name" : "Meia Pensão",
                                    "BoardAcronym" : null
                                },
                                "Days" : 0,
                                "RoomPrices" : {
                                    "Price" : "0",
                                    "DailyPriceTotal" : "0",
                                    "PeriodPrice" : "0",
                                    "TotalPeriodPriceTotal" : "0",
                                    "Currency" : "BRL",
                                    "Description" : null
                                },
                                "TaxPrices" : null,
                                "IsBestPrice" : false,
                                "IsNonRefundable" : false,
                                "Quantity" : 1,
                                "RecommendedRoom" : false,
                                "ProviderId" : 0,
                                "ProviderName" : "Restel",
                                "BreakfeastIncluded" : true,
                                "QuantityAdults" : 1,
                                "ChildAges" : null,
                                "QuantityChild" : 0,
                                "HotelCode" : null,
                                "IdRdc" : null,
                                "IdAcomodacao" : null,
                                "RatePlanId" : null,
                                "Token" : null,
                                "IdTarifarios" : null,
                                "TipoPreco" : 0
                            }
                        ],
                        "RoomPrices" : {
                            "Price" : "0",
                            "DailyPriceTotal" : "0",
                            "PeriodPrice" : "0",
                            "TotalPeriodPriceTotal" : "0",
                            "Currency" : "BRL",
                            "Description" : null
                        }
                    }, 
                    {
                        "QuantityAdults" : 1,
                        "QuantityChild" : 0,
                        "ChildAges" : null,
                        "RoomsType" : [ 
                            {
                                "RoomID" : "15006",
                                "RoomName" : "TRIPLE VISTA DUNAS, JARDIM OU QUADRA (515)",
                                "Description" : " 515-New Year Sales",
                                "MaxOccupation" : 1,
                                "Remarks" : null,
                                "TermsAndConditions" : null,
                                "TaxesIncluded" : false,
                                "Amenities" : null,
                                "RoomImages" : null,
                                "Regime" : {
                                    "Name" : "Café da manhã",
                                    "BoardAcronym" : null
                                },
                                "Days" : 0,
                                "RoomPrices" : {
                                    "Price" : "0",
                                    "DailyPriceTotal" : "0",
                                    "PeriodPrice" : "0",
                                    "TotalPeriodPriceTotal" : "0",
                                    "Currency" : "BRL",
                                    "Description" : null
                                },
                                "TaxPrices" : null,
                                "IsBestPrice" : false,
                                "IsNonRefundable" : true,
                                "Quantity" : 1,
                                "RecommendedRoom" : false,
                                "ProviderId" : 0,
                                "ProviderName" : "Hotelbeds",
                                "BreakfeastIncluded" : true,
                                "QuantityAdults" : 1,
                                "ChildAges" : null,
                                "QuantityChild" : 0,
                                "HotelCode" : null,
                                "IdRdc" : null,
                                "IdAcomodacao" : null,
                                "RatePlanId" : null,
                                "Token" : null,
                                "IdTarifarios" : null,
                                "TipoPreco" : 0
                            }
                        ],
                        "RoomPrices" : {
                            "Price" : "0",
                            "DailyPriceTotal" : "0",
                            "PeriodPrice" : "0",
                            "TotalPeriodPriceTotal" : "0",
                            "Currency" : "BRL",
                            "Description" : null
                        }
                    }, 
                    {
                        "QuantityAdults" : 1,
                        "QuantityChild" : 0,
                        "ChildAges" : null,
                        "RoomsType" : [ 
                            {
                                "RoomID" : "214006",
                                "RoomName" : "Single Deluxe",
                                "Description" : null,
                                "MaxOccupation" : 1,
                                "Remarks" : null,
                                "TermsAndConditions" : null,
                                "TaxesIncluded" : false,
                                "Amenities" : null,
                                "RoomImages" : null,
                                "Regime" : {
                                    "Name" : "Meia Pensão",
                                    "BoardAcronym" : null
                                },
                                "Days" : 0,
                                "RoomPrices" : {
                                    "Price" : "0",
                                    "DailyPriceTotal" : "0",
                                    "PeriodPrice" : "0",
                                    "TotalPeriodPriceTotal" : "0",
                                    "Currency" : "BRL",
                                    "Description" : null
                                },
                                "TaxPrices" : null,
                                "IsBestPrice" : false,
                                "IsNonRefundable" : false,
                                "Quantity" : 1,
                                "RecommendedRoom" : false,
                                "ProviderId" : 0,
                                "ProviderName" : "Restel",
                                "BreakfeastIncluded" : true,
                                "QuantityAdults" : 1,
                                "ChildAges" : null,
                                "QuantityChild" : 0,
                                "HotelCode" : null,
                                "IdRdc" : null,
                                "IdAcomodacao" : null,
                                "RatePlanId" : null,
                                "Token" : null,
                                "IdTarifarios" : null,
                                "TipoPreco" : 0
                            }
                        ],
                        "RoomPrices" : {
                            "Price" : "0",
                            "DailyPriceTotal" : "0",
                            "PeriodPrice" : "0",
                            "TotalPeriodPriceTotal" : "0",
                            "Currency" : "BRL",
                            "Description" : null
                        }
                    }, 
                    {
                        "QuantityAdults" : 1,
                        "QuantityChild" : 0,
                        "ChildAges" : null,
                        "RoomsType" : [ 
                            {
                                "RoomID" : "14006",
                                "RoomName" : "TRIPLE STANDARD (515)",
                                "Description" : null,
                                "MaxOccupation" : 1,
                                "Remarks" : null,
                                "TermsAndConditions" : null,
                                "TaxesIncluded" : false,
                                "Amenities" : null,
                                "RoomImages" : null,
                                "Regime" : {
                                    "Name" : "Café da manhã",
                                    "BoardAcronym" : null
                                },
                                "Days" : 0,
                                "RoomPrices" : {
                                    "Price" : "0",
                                    "DailyPriceTotal" : "0",
                                    "PeriodPrice" : "0",
                                    "TotalPeriodPriceTotal" : "0",
                                    "Currency" : "BRL",
                                    "Description" : null
                                },
                                "TaxPrices" : null,
                                "IsBestPrice" : false,
                                "IsNonRefundable" : true,
                                "Quantity" : 1,
                                "RecommendedRoom" : false,
                                "ProviderId" : 0,
                                "ProviderName" : "Bedsonline",
                                "BreakfeastIncluded" : true,
                                "QuantityAdults" : 1,
                                "ChildAges" : null,
                                "QuantityChild" : 0,
                                "HotelCode" : null,
                                "IdRdc" : null,
                                "IdAcomodacao" : null,
                                "RatePlanId" : null,
                                "Token" : null,
                                "IdTarifarios" : null,
                                "TipoPreco" : 0
                            }
                        ],
                        "RoomPrices" : {
                            "Price" : "0",
                            "DailyPriceTotal" : "0",
                            "PeriodPrice" : "0",
                            "TotalPeriodPriceTotal" : "0",
                            "Currency" : "BRL",
                            "Description" : null
                        }
                    }, 
                    {
                        "QuantityAdults" : 1,
                        "QuantityChild" : 0,
                        "ChildAges" : null,
                        "RoomsType" : [ 
                            {
                                "RoomID" : "3241005",
                                "RoomName" : "STANDARD - VISTA DUNAS, JARDIM OU QUADRA",
                                "Description" : null,
                                "MaxOccupation" : 1,
                                "Remarks" : null,
                                "TermsAndConditions" : null,
                                "TaxesIncluded" : false,
                                "Amenities" : null,
                                "RoomImages" : null,
                                "Regime" : {
                                    "Name" : "Pensão Completa",
                                    "BoardAcronym" : null
                                },
                                "Days" : 0,
                                "RoomPrices" : {
                                    "Price" : "0",
                                    "DailyPriceTotal" : "0",
                                    "PeriodPrice" : "0",
                                    "TotalPeriodPriceTotal" : "0",
                                    "Currency" : "BRL",
                                    "Description" : null
                                },
                                "TaxPrices" : null,
                                "IsBestPrice" : false,
                                "IsNonRefundable" : true,
                                "Quantity" : 1,
                                "RecommendedRoom" : false,
                                "ProviderId" : 0,
                                "ProviderName" : "Europlus",
                                "BreakfeastIncluded" : true,
                                "QuantityAdults" : 1,
                                "ChildAges" : null,
                                "QuantityChild" : 0,
                                "HotelCode" : null,
                                "IdRdc" : null,
                                "IdAcomodacao" : null,
                                "RatePlanId" : null,
                                "Token" : null,
                                "IdTarifarios" : null,
                                "TipoPreco" : 0
                            }
                        ],
                        "RoomPrices" : {
                            "Price" : "0",
                            "DailyPriceTotal" : "0",
                            "PeriodPrice" : "0",
                            "TotalPeriodPriceTotal" : "0",
                            "Currency" : "BRL",
                            "Description" : null
                        }
                    }
                ],
                "Images" : null,
                "Amenities" : [ 
                    {
                        "AmenityID" : 0,
                        "Name" : "Academia",
                        "ImageURL" : null
                    }, 
                    {
                        "AmenityID" : 0,
                        "Name" : "Café da manhã",
                        "ImageURL" : null
                    }, 
                    {
                        "AmenityID" : 0,
                        "Name" : "Estacionamento",
                        "ImageURL" : null
                    }, 
                    {
                        "AmenityID" : 0,
                        "Name" : "Internet",
                        "ImageURL" : null
                    }, 
                    {
                        "AmenityID" : 0,
                        "Name" : "Lavanderia",
                        "ImageURL" : null
                    }, 
                    {
                        "AmenityID" : 0,
                        "Name" : "Piscina",
                        "ImageURL" : null
                    }, 
                    {
                        "AmenityID" : 0,
                        "Name" : "Restaurante",
                        "ImageURL" : null
                    }, 
                    {
                        "AmenityID" : 0,
                        "Name" : "Spa",
                        "ImageURL" : null
                    }
                ],
                "Description" : null,
                "CheckinDate" : ISODate("2021-04-09T03:00:00.000Z"),
                "CheckoutDate" : ISODate("2021-04-10T03:00:00.000Z"),
                "Days" : 0,
                "Iata" : null,
                "Address" : [ 
                    {
                        "Street" : "Praça Stella Maris 200",
                        "AddressNumber" : null,
                        "AddressComplement" : null,
                        "CityName" : "Salvador, Bahia, Brasil",
                        "StateName" : null,
                        "CountryName" : null,
                        "ZipCode" : null
                    }
                ],
                "Addressstring" : null,
                "Broker" : 1,
                "TripAdvisor" : null,
                "Latitude" : 0.0,
                "Longitude" : 0.0
            }
        ],
        "ErrorMessages" : null,
        "Token" : "c3757595-5a19-46c0-99f4-70cb59611e47",
        "Created" : ISODate("2019-11-28T19:26:12.067Z"),
        "UserId" : null,
        "HotelId" : 0,
        "IsPlanDaysAvailable" : false,
        "AvailableDays" : 0,
        "TotalDays" : 0
    },
    "Error" : null,
    "BookingFilter" : {
        "Token" : "c3757595-5a19-46c0-99f4-70cb59611e47",
        "HotelId" : 37474,
        "ProviderName" : "Europlus",
        "BrokerId" : 1,
        "Rooms" : [ 
            {
                "RoomId" : "3241003",
                "Paxs" : [ 
                    {
                        "Name" : "Elida",
                        "Surname" : "Lobato",
                        "Age" : 29,
                        "Title" : null,
                        "IsChild" : false,
                        "IsMainPax" : true,
                        "DocumentType" : 1,
                        "DocumentTypeDescription" : null,
                        "Document" : "41129364860"
                    }
                ],
                "CancellationPolicies" : null,
                "BoardDescription" : null,
                "RoomDescription" : null,
                "IsRefundable" : false,
                "RoomPrice" : null,
                "QuantityAdults" : 1,
                "ChildAges" : null,
                "QuantityChild" : 0,
                "Quantity" : 0
            }
        ],
        "UserId" : "41129364860",
        "UserIP" : "184.73.12.62",
        "OrderID" : "CA4110304211743799",
        "TransactionId" : null,
        "Installments" : 0,
        "InstallmentAmount" : "0",
        "PlanId" : "30bb9449-b489-4416-9659-b8de544c10e9",
        "Price" : {
            "PlanDailyUsed" : 1,
            "TotalPriceExtra" : "0",
            "PlanExtraPrice" : "0",
            "PlanPointUsed" : 0,
            "PlanPointPriceUsed" : "0",
            "PaymentOptionId" : 1,
            "PlanMarkup" : "30",
            "AccumulatedPoint" : 268,
            "AccumulatedPointPrice" : "16.08",
            "Currency" : "BRL",
            "PointPrice" : "0.06",
            "PlanoPeriodos" : [ 
                {
                    "Periodo" : 1,
                    "Diarias" : 1
                }
            ]
        }
    },
    "BookingUpdateFilter" : null,
    "CancelationFilter" : null,
    "Created" : ISODate("2021-04-03T17:43:55.282Z"),
    "IsActive" : true,
    "ActualStatus" : {
        "StatusId" : 2,
        "Name" : "Confirmado",
        "Description" : null,
        "Date" : ISODate("2021-04-03T17:43:55.282Z"),
        "PreviousStatusId" : null
    },
    "History" : [ 
        {
            "StatusId" : 2,
            "Name" : "Confirmado",
            "Description" : null,
            "Date" : ISODate("2021-04-03T17:43:55.282Z"),
            "PreviousStatusId" : null
        }
    ],
    "ActualStatusPayment" : null,
    "HistoryPayment" : null,
    "CancelationPoliciesPenalty" : null,
    "StartDate" : null,
    "EndDate" : null,
    "isNumberDayError" : false
  }
]);

