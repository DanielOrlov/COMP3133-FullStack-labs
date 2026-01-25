const b1 = Buffer.from("A Hello")
// const b2 = new Buffer("World")

console.log(b1)
console.log(b1.toString())
console.log(b1[0])
console.log(b1[0].toString(16))

// b1[1] = 66
b1[1] = 'C'.charCodeAt(0)
console.log(b1.toString())
console.log(b1.length)

// const b2 = Buffer.alloc(10)
const b2 = Buffer.alloc(10).fill('A')
console.log(b2)
console.log(b2.length)

// const b3 = Buffer.allocUnsafe(10)

// const 💐 = "Hello"
const data = "💐🙏🏻"//🎁"
const b3  = Buffer.from(data)
console.log(b3)
console.log(b3.length)
console.log(b3.toString())
// console.log(b3.toString('ascii'))
// console.log(b3.toString('utf-8'))
// console.log(b3.toString('hex'))

const aBuffer = Buffer.from([0x41, 0x42, 0x43, 0x44, 0x45])
// const aBuffer = Buffer.from([65, 66, 67, 68, 69])
// const aBuffer = Buffer.from(b1)

const bBuffer = Buffer.from('ACCDE')
console.log(aBuffer.compare(bBuffer)) 

console.log(aBuffer.toJSON())

bBuffer.write("xyz", 1)
console.log(bBuffer.toString())

const buff1 = Buffer.from('a')
const buff2 = Buffer.from('b')
const buff3 = Buffer.from('c')
const buffConc = Buffer.concat([buff1, buff2, buff3])

console.log(buffConc.toString())