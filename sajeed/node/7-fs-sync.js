//fs module(sync)

const { readFileSync, writeFileSync } = require('fs')
console.log('start')
const first = readFileSync('sajeed/node/content/second.txt','utf8')
const second = readFileSync('sajeed/node/content/second.txt','utf8')

//console.log(first,second)

writeFileSync('sajeed/node/content/result-sync.txt',
`Here is the result : ${first}, ${second}`,
{ flag: 'a'})
console.log('done with this task')
console.log('starting the next one')


