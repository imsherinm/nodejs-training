
 const data = require("../../../orders.json")
const details = data.data.orders

 const id = details.map((id) => id.id)

module.exports = {id};