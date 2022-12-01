/*let firsName :string ;
let lastName :string;
let fullName :string;
let age:number ;
let ukCitizen:boolean;

firsName = 'Rebeca';
lastName ='swith';
ukCitizen = false;
age =42;
fullName= firsName +' '+ lastName;

if (ukCitizen){
     console.log('My name is ' +  fullName + ",I'm" + age + ",and I'm a citexen of the united kigndom.");
}else {
    console.log('My name is '+ fullName + ",I'm" + age+ ",and I'm a citexen of the united kigndom.");
}  

let e: number | string;
let y: number;
let a: number | string;

e= 7;
y= 7;
a= e + y;

console.log(a)


enum  Season{
    Fall,
    Winter,
    Spring,
    Summer
}

function whichMonths(season:Season) {
    let monthsInSeason:string;
    switch(season){
        case Season.Fall:
            monthsInSeason = "September to Noverber";
            break;
        case Season.Winter:
            monthsInSeason = "December to Fabruary";
            break;
        case Season.Spring:
             monthsInSeason = "March to May";
            break;
        case Season.Summer:
            monthsInSeason = "June to August";
            break;       
    }
    return monthsInSeason;
}

console.log(whichMonths(Season.Spring))

let randomNumbers: Array <number>= [];
let nextNumbers: number;
for(let i = 0; i< 10; i++){
    nextNumbers=Math.floor(Math.random()*(100-1))+1;
    randomNumbers.push(nextNumbers);
}

console.log(randomNumbers);


interface Employee{
    firsName : string;
    lastName : string;
    fullName() : string;
}


let employee: Employee ={
    firsName : "Erick",
    lastName : "Quizhpe",
    fullName(): string {
        return this.firsName + "  " + this.lastName;
    }
}

employee.firsName = "Erick";*/


/*interface IceCream {
    flavor: string;
    scoops: number ;
   
}

let icecream : IceCream ={
    flavor:"vanilla",
    scoops:7,
}
//console.log(icecream.flavor);

interface IceCream {
    flavor: string;
    scoops: number ;
    instructions:string;
}

function tooManyScoops (dessert:IceCream){
    if(dessert.scoops >= 5){
        return "Too many scoops"
    }
    else{
        return "No too many scoops"
    }
}

console.log(tooManyScoops({flavor:'vanilla',scoops:5,instructions:"comer"}))


interface Sundae extends IceCream{
    sause: 'chocolate' | 'caramel' | 'strawberry';
    nuts?: boolean;
    whipperdCream?: boolean;
    instructions?: boolean
}

let myIceCream: Sundae = {
    flavor: 'vainilla',
    scoops:2,
    sause:
}*/