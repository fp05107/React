let lname : string
lname = 'john';
let newLname = lname.toUpperCase();
// console.log(newLname);
// lname = 10;
let age : number;
age = 10;
let isValid : boolean = false;
// console.log(isValid);//undefined

let empList : string[];
let deptList : Array<string>;

let numList : Array<number>;
numList = [1,2,3,4,5,6,7,8,9];

let result = numList.find((num) => num > 2);
// console.log(result);

enum Color{
    Red,Green,Blue
}
let c : Color = Color.Blue;
// console.log(c);