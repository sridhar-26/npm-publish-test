const http = require('http')

const server = http.createServer((req,res) => {
    console.dir(req, {depth:0})
    res.write('Hello World next publish.....')
    res.end()
})

server.listen(4242,()=>{
    console.log("server is running")
})