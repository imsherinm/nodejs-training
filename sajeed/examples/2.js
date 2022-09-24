//2. vehicles which are not available (available = false)

const data = require('/Users/sajid/Desktop/nodejs-training/data.js');

console.log("unavilabe vehicles");
//unavailable vehicle  (filter method) "false condition"
console.log(data.filter(car=>!car._source.available));