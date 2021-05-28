var pack = require('./demo')
var _ = require('lodash')
var fs = require('fs')
var data = require('./data.json')

console.log(data.name)

console.log(pack.Myname)
console.log(_.random(1,10))
fs.readFile('./data.json','utf-8',(err,data)=>{
    var data = JSON.parse(data);
    console.log(data.name + " content of data.json file")
})

fs.readdir('D:/',(err,data)=>{
    console.log(data)
})

// var data2 = {
//     name : "Princy"
// }

// fs.writeFile('data2.json',JSON.stringify(data2),(err)=>{
//     console.log(err)
// })
