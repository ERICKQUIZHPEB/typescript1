function addNumbers(x?:number, y?:number):number {
    if (x&&y)
        return x+y;
    if (x)
        return x;
    if (y)
        return y;
    throw new Error("Input Invalid")    
  }
  
  console.log(addNumbers(5,4));
  
