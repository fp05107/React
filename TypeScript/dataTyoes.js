"use strict";
let lname;
lname = 'john';
let newLname = lname.toUpperCase();
// console.log(newLname);
// lname = 10;
let age;
age = 10;
let isValid = false;
// console.log(isValid);//undefined
let empList;
let deptList;
let numList;
numList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let result = numList.find((num) => num > 2);
// console.log(result);
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let c = Color.Blue;
console.log(c);
