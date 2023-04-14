let arr1: Array<number> = [1, 2, 3, 4];
let arr2: string[] = ["a", "b"];
let arr3: Array<number | string> = [1, 2, 3];
let arr4: number[] | string[] = [1, 2, 3];
let arr5: readonly number[] | string[] = [1, 2, 3];
// arr5.push(7);  ==> Error
// arr5[0] = arr5[1]; can not do
type User = { id: number; name: string; age?:number; class?:12 | 11}
let user: { id: number; name: string; age:number };
let arr_user: User[] = [
  { id: 1, name: "subham", class:12},
  { id: 2, name: "brock" },
  { id: 3, name: "picaso" },
  { id: 4, name: "lund" },
  { id: 5, name: "kich bhi" ,age:23}
];
console.log(arr_user);