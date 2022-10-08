
 const data = require("/Users/sajid/Desktop/nodejs-training/orders.json")
const details = data.data.orders

 const id = details.map((id) => id.id)

module.exports = {id};