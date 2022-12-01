function sumar(valor1?:number, valor2?:number, valor3?:number):number {
    if (valor1&&valor2&&valor3)
      return valor1+valor2+valor3;
    if (valor1&&valor2)
      return valor1+valor2;  
    if (valor1)
      return valor1;
    if (valor2)
      return valor2;
    if (valor3)
      return valor3;
    throw new Error("Input Invalid")  
  }
  
  console.log(sumar(5,4));
  console.log(sumar(5,4,3));
  console.log(sumar(4,3));