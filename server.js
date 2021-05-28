var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var http = require('http').Server(app)
var io = require('socket.io')(http)
var mongoose = require('mongoose')

const dbURL = "mongodb+srv://priya:priya@cluster0.rspyt.mongodb.net/NodeProject?retryWrites=true&w=majority"

app.use(express.static(__dirname))

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json())

var Messages = mongoose.model('Messages',{
    name : String,
    message : String
})

app.get('/messages' , (req,res)=>{
    Messages.find({},(err,messages)=>{
        res.send(messages)
    })
})

app.post('/messages' , (req,res)=>{
    var message = new Messages(req.body)

    message.save((err)=>{
        if(err)
            sendStatus(500)
        
        io.emit('message',req.body)
        res.sendStatus(200)
    })

})

io.on('connection',(socket)=>{
    console.log("A user connected")
})

mongoose.connect(dbURL,{useUnifiedTopology:true},(err)=>{
    console.log("Mongo db connected",err )
})

var server = http.listen(3000,()=>{
    console.log("Server running on port",server.address().port)
})



// jquery , node.js , express , socket.io , mongodb , jasmine 
// postman