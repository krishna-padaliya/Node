const http = require('http')
const port = 1308

const handleRequest = (req , res) =>{
    res.write("<h1>Name : Krishna Padaliya</h1>")
    res.write("<h1>E-mail : krishnapadaliya@gmail.com</h1>")
    res.write("<h1>Age : 20</h1>")
    res.end()
}

const server = http.createServer(handleRequest)

server.listen(port , (err) => {
    if(err){
        console.log("Server is not responding")
    }else{
        console.log("Server started at : " + port)
    }
})