/* eslint-disable */
db.getSiblingDB('paymentoption').getCollection('CalculationParameters').insert([
  {
    "_id" : ObjectId("5ebd851c36d3b472d8662b34"),
    "MarkupAir" : NumberDecimal("0.1"),
    "MarkupHotel" : NumberDecimal("0.3"),
    "PointAccumulationPercentage" : NumberDecimal("80"),
    "PointPrice" : NumberDecimal("0.06")
}
])
