interface User{
    name:string;
    age:number;
    id:number;
    email:string;
}

interface Employees extends User{
    salary:number;
}
interface Login{
    login():User;
}
// let employees : Employees = {name:"subham",}

// export import
// import{Login,User} from './interface'
// implements
//object and array destructuring
//decorators
//ES module