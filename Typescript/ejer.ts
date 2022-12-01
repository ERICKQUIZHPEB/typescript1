let e : unknown=10;
e ="Erick";
e =true;
e =undefined;

if (typeof e === "string"){
    console.log ((e as string).toUpperCase());
    } else if (typeof e === "number"){
        console.log(e*2);
    } else if (typeof 2 === "boolean"){
        console.log("Es una verdad")
    } else if (typeof 2 === "undefined"){
        console.log("Indefinido")
    } else {
        console.log("Desconocido")
    }