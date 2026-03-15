"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Employee = /** @class */ (function () {
    // public private readonly
    // eid: number
    // fnm: string
    // lnm: string
    // city: string
    function Employee(eid, fnm, lnm, city) {
        this.eid = eid;
        this.fnm = fnm;
        this.lnm = lnm;
        this.city = city;
        this.eid = eid;
        this.fnm = fnm;
        this.lnm = lnm;
        this.city = city;
    }
    // constructor(eid: number, fnm: string, lnm: string, city: string){
    //     this.eid = eid
    //     this.fnm = fnm
    //     this.lnm = lnm
    //     this.city = city
    // }
    Employee.prototype.display = function () {
        console.log(this);
    };
    return Employee;
}());
exports.default = Employee;
