"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FullTimeEmployee_1 = require("./FullTimeEmployee");
console.log('Welcome to TypeScript Programming');
//let a = "Hello"
var a = "Hello";
var c = 10;
//c = "Hello"
var obj;
var d;
var e;
var f;
var g;
var s = {
    sid: 1,
    snm: "D. Orlov",
    city: "TOR"
};
var s1 = {
    sid: 1,
    first_name: "Daniel",
    last_name: "Orlov",
    city: "Toronto"
};
console.log(typeof s1, s1);
// Union
var x;
x = 100;
x = "wassup";
// x = false
// Intersect
var y;
y = {
    sid: 1,
    pid: 1,
    first_name: "FN",
    last_name: "LN",
    city: "CITY",
    address: "ADDRESS"
};
console.log(y);
var fe1 = new FullTimeEmployee_1.default(1, "Chandler", "Bing", "New York", "Transpondster", 10000);
fe1.display();
var n = "test";
var p;
p = "hello";
p = 300;
