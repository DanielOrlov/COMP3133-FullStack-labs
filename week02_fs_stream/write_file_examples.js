const fs = require('fs')

var data = "Hello World"
// var data = Buffer.from("Hello from GBC")
// fs.writeFile("output.txt", data, (err)=>{
//     if(err){
//         console.log(err.message)
//         return
//     }

//     console.log('Data written successfully...')
// })

data = "TESTING..."
var error = fs.writeFileSync('output.txt', data)
console.log("Data written...")