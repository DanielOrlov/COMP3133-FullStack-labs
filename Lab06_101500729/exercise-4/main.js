"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Customer_1 = require("./Customer");
var customer = new Customer_1.Customer("John", "Smith", 25);
customer.greeter();
console.log("Customer is ".concat(customer.getAge(), " years old"));
