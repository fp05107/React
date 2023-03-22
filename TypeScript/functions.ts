function add(num1:number,num2:number) : number{
    return num1+num2;
}

// console.log(add(10,20))

const add2 = function(num1 : number, num2 : number) : number{
    return num1+num2;
}

const add3 = ((num1 : number,num2 : number) : number => {return num1+num2});
// console.log(add3(10,20))

function add4(num1 : number,num2 : number,num3? : number){
    return num3 ? num1 + num2 + num3 : num1 + num2;
}

console.log(add4(20,20));