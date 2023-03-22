"use strict";
function add(num1, num2) {
    return num1 + num2;
}
// console.log(add(10,20))
const add2 = function (num1, num2) {
    return num1 + num2;
};
const add3 = ((num1, num2) => { return num1 + num2; });
// console.log(add3(10,20))
function add4(num1, num2, num3) {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}
// console.log(add4(20,20));
const add5 = ((num1, num2, num3 = 10) => {
    return num1 + num2 + num3;
});
console.log(add5(10, 10));
