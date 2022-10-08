//2. vehicles which are not available (available = false)

const data = require('../../data');

console.log("unavilabe vehicles");
//unavailable vehicle  (filter method) "false condition"
console.log(data.filter(car=>!car._source.available));
