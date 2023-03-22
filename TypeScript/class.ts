class Employee{
    id! : number;
    name! : string;
    address! : string;
    
    getAddress(address : string) : string{
        return this.address;
    }
    constructor(id:number,name:string,address:string){
        this.id = id;
        this.name = name;
        this.address = address;
    }

}

let emp = new Employee(1,"subham","soro");
// emp.address = "soro";
// let addr : string = emp.getAddress();
// console.log(addr);
console.log(emp);

