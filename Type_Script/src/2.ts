/**
 * This method return the element of the given index of the given array
 * @param arr 
 * @param index 
 * @returns 
 */
const getAtIndex = (arr:number[],index:number) : number =>{
    return arr[index]
}

let arr:number[] = [1,2,3,4,5];
console.log(getAtIndex(arr,2));

let arr7 : [number,number][] = [
    [1,2]
]
console.log(typeof arr7);