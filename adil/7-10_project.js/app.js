const http = require ('http')
const server = http.createServer((req,res) => {
    console.log(req)
    res.write("welcome")
    res.end()
})

server.listen(4000)