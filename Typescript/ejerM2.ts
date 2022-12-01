let sumArray = function (array:number[]):number{
    let total: number = 0;
    for(let index = 0; index < array.length; index++){
       if(isNaN(array [index])) {
        continue;
       }
       total += Number(array[index]);
    }
    return total;
}
console.log(([1,2,3]));