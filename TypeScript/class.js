"use strict";
class Employee {
    getAddress(address) {
        return this.address;
    }
    constructor(id, name, address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }
}
let emp = new Employee(1, "subham", "soro");
// emp.address = "soro";
// let addr : string = emp.getAddress();
// console.log(addr);
console.log(emp);
