const http = require('http')
const fs = require('fs')
const port = 1300

const handleRequest = (req , res) => {
    
    let fileName = ""

    switch(req.url){

        case '/' : fileName="./home.html"
        break
        case '/about' : fileName="./about.html"
        break
        case '/service' : fileName="./service.html"
        break
        case '/contact' : fileName="./contact.html"
        break

    }

    fs.readFile(fileName,(err,result)=>{
        if(!err){
            res.end(result)
        }
    })

}

const server = http.createServer(handleRequest)

server.listen(port , (err) =>{
    if(err){
        console.log("Server is not responding")
    }else{
        console.log("Server started at : " + port)
    }
})