import Student from "./Student"
import Person from "./Person"
import FullTimeEmployee from "./FullTimeEmployee"

console.log('Welcome to TypeScript Programming')

//let a = "Hello"
let a:string = "Hello"

let c: number = 10
//c = "Hello"

let obj: String

let d:never
let e:object
let f:void
let g:unknown

let s = {
    sid: 1,
    snm: "D. Orlov",
    city: "TOR"
}

let s1: Student = {
    sid: 1,
    first_name: "Daniel",
    last_name: "Orlov",
    city: "Toronto"
}

console.log(typeof s1, s1)

// Union
let x:string | number
x = 100
x = "wassup"
// x = false

// Intersect
let y:Student & Person
y = {
    sid: 1,
    pid: 1,
    first_name: "FN",
    last_name: "LN",
    city: "CITY",
    address: "ADDRESS"
}

console.log(y)

let fe1 = new FullTimeEmployee(1, "Chandler", "Bing", "New York", "Transpondster", 10000)
fe1.display()

type NAME = string
type StringOrNumber = string | number

let n:NAME = "test"
let p: StringOrNumber
p = "hello"
p = 300