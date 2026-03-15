import { Customer } from "./Customer";

let customer = new Customer("John", "Smith", 25);
customer.greeter();

console.log(`Customer is ${customer.getAge()} years old`)