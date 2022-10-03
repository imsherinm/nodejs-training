const { readFileSync, writeFileSync, readFile, writeFile } = require('fs')

console.log('start');
readFile('sajeed/node/content/fist.txt','utf8',(err,result) => {
    if(err) {
        console.log(err)
    }
  const first = result;
  readFile('sajeed/node/content/second.txt','utf8',(err,result) =>{
    if(err) {
        console.log(err)
    }
  const second = result;
  writeFile('sajeed/node/content/result-sync.txt',
  `Here is the result : ${first}, ${second}`,(err,result)=>{
    if(err) {
        console.log(err)
    }
    console.log('done with this task  ...',result)
  })
  } )
})
console.log('starting next task')