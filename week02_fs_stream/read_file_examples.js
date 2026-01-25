 const fs = require('fs')
//  console.log(fs)

console.log("--- START ---")
fs.readFile('input.txt', (err, data) => {
    if(err){
        console.log(err.message)
        return
    }

    console.log("1 " + data.toString())
})

let readData = fs.readFileSync("input.txt")
console.log(readData.toString())



 async function readData(){
    try {
        const data = await fs.promises.readFile("input.txt")
        console.log(data.toString())
    } catch (error) {
        console.log(error)
    }
}

// readData()
console.log("--- END ---")