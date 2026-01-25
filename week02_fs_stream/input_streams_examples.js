const fs = require('fs')
var zlib = require('zlib')
// const Streams = require('stream')
// const frs = Streams.Readable
// const fws = Streams.Writable

const readStream = fs.createReadStream('input_stream.txt')
const writeStream = fs.createWriteStream('output_stream.txt')

readStream.on('data', (chunk) => {
    console.log(chunk.length)
    console.log(chunk.toString())
})

readStream.on('end', () =>{
    console.log('Input Stream Ends')
})

readStream.on('error', (err) => {
    console.log(err.message)
})

readStream.on('close', () => {
    console.log('Input Stream Closed')
})

//Write Stream

writeStream.on('error', (err) => {
    console.log('Write Stream error')
})
// writeStream.write("hello")
// writeStream.write("world")
// writeStream.end()



//pipe
readStream.pipe(writeStream)

readStream.pipe(zlib.createGzip())
        .pipe(fs.createWriteStream('output_stream.txt.gz'))